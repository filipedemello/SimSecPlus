/**
 * SimSecPlus — Semantic Deduplication (Node.js, zero external dependencies)
 * Algorithm: trigram (3-gram) Jaccard similarity on normalized question text.
 * Pairs with similarity >= THRESHOLD are detected as near-duplicates.
 * The question with the lower id is kept; the other gets status="archived".
 *
 * Usage:
 *   node scripts/dedup.js [--threshold 0.65] [--dry-run]
 *
 * Outputs:
 *   duplicates_report.json   — full report of detected pairs
 *   console summary
 */

'use strict';

const fs = require('fs');
const path = require('path');

// ─── CLI args ─────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const threshIdx = args.indexOf('--threshold');
const THRESHOLD = threshIdx >= 0 ? parseFloat(args[threshIdx + 1]) : 0.95;
const N = 3; // trigrams

const QUESTIONS_DIR = path.join(__dirname, '..', 'questions');
const REPORT_PATH = path.join(__dirname, '..', 'duplicates_report.json');

// ─── Context strip: remove prefixes/suffixes added by generate.js ─────────────
// These are added for variation and should NOT be compared for dedup purposes
const KNOWN_PREFIXES = [
    'A security analyst needs to determine: ',
    'During a security audit, the team is asked: ',
    'A company is reviewing its security posture. ',
    'In a security assessment scenario, ',
    'An organization is implementing new security measures. ',
    'A junior technician asks: ',
    'For the Security+ exam, you should know: ',
    'A CTO asks: ',
    'A security consultant is evaluating controls. ',
    'During incident investigation, the team must understand: ',
];
const KNOWN_SUFFIXES = [
    ' Which answer BEST applies in an enterprise environment?',
    ' Which answer is MOST correct according to CompTIA Security+ SY0-701?',
    ' Which answer applies to a cloud-based deployment?',
    ' Which answer applies in a regulated industry context?',
    ' Which answer is MOST relevant for a small business?',
    ' Which answer aligns with zero-trust principles?',
    ' Which answer is preferred in a high-availability setup?',
    ' Which answer applies to an on-premises environment?',
];

function stripContext(text) {
    let t = text;
    for (const p of KNOWN_PREFIXES) {
        if (t.startsWith(p)) {
            t = t.slice(p.length);
            // Restore capitalisation
            t = t.charAt(0).toUpperCase() + t.slice(1);
            break;
        }
    }
    for (const s of KNOWN_SUFFIXES) {
        if (t.endsWith(s)) {
            t = t.slice(0, -s.length);
            // Restore trailing question mark if gone
            if (!t.endsWith('?')) t += '?';
            break;
        }
    }
    return t;
}

// ─── N-gram helpers (word-level only for precision) ───────────────────────────
function normalize(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, ' ')   // strip punctuation
        .replace(/\s+/g, ' ')
        .trim();
}

function ngrams(text, n) {
    const tokens = normalize(stripContext(text)).split(' ').filter(Boolean);
    const grams = new Set();
    for (let i = 0; i <= tokens.length - n; i++) {
        grams.add(tokens.slice(i, i + n).join(' '));
    }
    return grams;
}

function jaccard(setA, setB) {
    if (setA.size === 0 && setB.size === 0) return 1;
    if (setA.size === 0 || setB.size === 0) return 0;
    let intersection = 0;
    for (const item of setA) {
        if (setB.has(item)) intersection++;
    }
    const union = setA.size + setB.size - intersection;
    return intersection / union;
}

// ─── Load questions ───────────────────────────────────────────────────────────
function loadAllQuestions() {
    const blockFiles = fs.readdirSync(QUESTIONS_DIR)
        .filter(f => f.startsWith('block') && f.endsWith('.js'))
        .sort();

    const fakeWindow = { QUESTIONS: [] };
    blockFiles.forEach(file => {
        let src = fs.readFileSync(path.join(QUESTIONS_DIR, file), 'utf8');
        src = src.replace(/window\.QUESTIONS/g, 'fakeWindow.QUESTIONS');
        try { eval(src); } catch (e) { console.error(`Error in ${file}:`, e.message); }
    });
    return fakeWindow.QUESTIONS;
}

// ─── Dedup within a domain group ─────────────────────────────────────────────
function dedupGroup(questions) {
    // Build ngram sets on stripped (context-free) text
    const ngramSets = questions.map(q => ngrams(q.question, N));

    const pairs = [];
    const toArchive = new Set();

    for (let i = 0; i < questions.length; i++) {
        if (toArchive.has(questions[i].id)) continue;
        for (let j = i + 1; j < questions.length; j++) {
            if (toArchive.has(questions[j].id)) continue;

            const sim = jaccard(ngramSets[i], ngramSets[j]);
            if (sim >= THRESHOLD) {
                // Keep lower id, archive higher id
                const keep = questions[i].id < questions[j].id ? questions[i] : questions[j];
                const archive = questions[i].id < questions[j].id ? questions[j] : questions[i];

                pairs.push({
                    kept_id: keep.id,
                    archived_id: archive.id,
                    similarity: parseFloat(sim.toFixed(4)),
                    kept_q: keep.question.slice(0, 80),
                    archived_q: archive.question.slice(0, 80),
                    subdomain_id: keep.subdomain_id
                });

                toArchive.add(archive.id);
            }
        }
    }

    return { pairs, toArchive };
}

// ─── Patch blocks ─────────────────────────────────────────────────────────────
function archiveInBlocks(archivedIds) {
    const blockFiles = fs.readdirSync(QUESTIONS_DIR)
        .filter(f => f.startsWith('block') && f.endsWith('.js'))
        .sort();

    let patched = 0;
    blockFiles.forEach(file => {
        const filePath = path.join(QUESTIONS_DIR, file);
        let src = fs.readFileSync(filePath, 'utf8');
        let changed = false;

        // For each archived id: replace status:"active" with status:"archived"
        // Match pattern:  id: <N>,  ...  status: "active"  within same block entry
        // Use a reliable approach: replace per-question JSON-like block
        archivedIds.forEach(id => {
            // Match from `id: <id>,` to next `id:` or end of array entry
            // We use a regex that captures the id field and replaces status in its scope
            const pattern = new RegExp(
                `(\\{[^{}]*?"id":\\s*${id}[^{}]*?)"status":\\s*"active"`,
                's' // dotAll
            );
            const replaced = src.replace(pattern, '$1"status": "archived"');
            if (replaced !== src) {
                src = replaced;
                changed = true;
                patched++;
            }
        });

        if (changed) {
            fs.writeFileSync(filePath, src, 'utf8');
        }
    });
    return patched;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
console.log(`🔍 SimSecPlus — Deduplication Script`);
console.log(`   Threshold: ${THRESHOLD} | N-gram: ${N} | Mode: ${DRY_RUN ? 'DRY RUN' : 'LIVE'}\n`);

const questions = loadAllQuestions();
const active = questions.filter(q => q.status === 'active');
console.log(`Loaded ${questions.length} questions (${active.length} active)\n`);

// Group by domain for efficiency (O(n²) within domain, not globally)
const byDomain = {};
active.forEach(q => {
    const d = q.domain;
    if (!byDomain[d]) byDomain[d] = [];
    byDomain[d].push(q);
});

const allPairs = [];
const allArchive = new Set();

Object.entries(byDomain).forEach(([domain, qs]) => {
    process.stdout.write(`  Domain ${domain}: ${qs.length} questions... `);
    const { pairs, toArchive } = dedupGroup(qs);
    allPairs.push(...pairs);
    toArchive.forEach(id => allArchive.add(id));
    console.log(`${pairs.length} duplicate pair(s) found`);
});

// Sort pairs by similarity desc
allPairs.sort((a, b) => b.similarity - a.similarity);

const report = {
    generated_at: new Date().toISOString(),
    threshold: THRESHOLD,
    ngram_size: N,
    total_active_before: active.length,
    duplicate_pairs: allPairs.length,
    questions_to_archive: allArchive.size,
    active_after_dedup: active.length - allArchive.size,
    pairs: allPairs
};

fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2), 'utf8');

console.log(`\n📊 Results:`);
console.log(`   Total active:         ${active.length}`);
console.log(`   Duplicate pairs:      ${allPairs.length}`);
console.log(`   Questions to archive: ${allArchive.size}`);
console.log(`   Active after dedup:   ${active.length - allArchive.size}`);

if (allPairs.length > 0) {
    console.log(`\n🔝 Top 5 most similar pairs:`);
    allPairs.slice(0, 5).forEach((p, i) => {
        console.log(`   ${i + 1}. [${(p.similarity * 100).toFixed(1)}%] ID#${p.kept_id} vs ID#${p.archived_id}`);
        console.log(`      Keep:    "${p.kept_q}..."`);
        console.log(`      Archive: "${p.archived_q}..."\n`);
    });
}

console.log(`\n📝 Full report: ${REPORT_PATH}`);

if (DRY_RUN) {
    console.log(`\n⚠️  DRY RUN — no changes made to question blocks.`);
} else if (allArchive.size > 0) {
    console.log(`\n✏️  Patching question blocks...`);
    const patched = archiveInBlocks(allArchive);
    console.log(`   Archived ${patched} questions in block files.`);
    console.log(`\n✅ Deduplication complete! Re-run scripts/validate.js to confirm.`);
} else {
    console.log(`\n✅ No duplicates found above threshold ${THRESHOLD}. Bank is clean!`);
}
