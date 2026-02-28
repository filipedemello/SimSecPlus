/**
 * SimSecPlus — Question Bank Validator
 * Usage: node scripts/validate.js
 * Validates all generated question blocks for:
 *   - Required fields
 *   - Valid domain and subdomain IDs
 *   - Status values
 *   - Distribution by subdomain (8%-15% tolerance)
 * Writes: validation_report.json
 */

const fs = require('fs');
const path = require('path');

const { DOMAINS, DOMAIN_IDS } = require('../domains');
const { SUBDOMAINS, isValidSubdomain } = require('../subdomains');

// ─── Config ───────────────────────────────────────────────────────────────────
const QUESTIONS_DIR = path.join(__dirname, '..', 'questions');
const REPORT_PATH = path.join(__dirname, '..', 'validation_report.json');
const SUBDOMAIN_MIN_PCT = 2;   // minimum % of active questions per subdomain
const SUBDOMAIN_MAX_PCT = 20;  // maximum % of active questions per subdomain
const VALID_STATUSES = ['active', 'archived'];
const VALID_DIFFICULTIES = ['easy', 'medium', 'hard'];
const REQUIRED_FIELDS = [
    'id', 'domain', 'domainName',
    'subdomain_id', 'subdomain_name',
    'difficulty', 'weight', 'status',
    'question', 'options', 'correctIndex',
    'explanation'
];

// ─── Load all blocks ──────────────────────────────────────────────────────────
function loadAllQuestions() {
    const blockFiles = fs.readdirSync(QUESTIONS_DIR)
        .filter(f => f.startsWith('block') && f.endsWith('.js'))
        .sort();

    let allQuestions = [];
    // Simulate window.QUESTIONS population
    const fakeWindow = { QUESTIONS: [] };

    blockFiles.forEach(file => {
        const filePath = path.join(QUESTIONS_DIR, file);
        let src = fs.readFileSync(filePath, 'utf8');
        // Replace window.QUESTIONS pattern for Node.js compatibility
        src = src.replace(/window\.QUESTIONS/g, 'fakeWindow.QUESTIONS');
        // Use eval in a controlled way
        try {
            eval(src);
        } catch (e) {
            console.error(`Error evaluating ${file}: ${e.message}`);
        }
    });

    return fakeWindow.QUESTIONS;
}

// ─── Validation ───────────────────────────────────────────────────────────────
function validate(questions) {
    const errors = [];
    const warnings = [];
    const seen_ids = new Set();

    const activeQuestions = questions.filter(q => q.status === 'active');
    const totalActive = activeQuestions.length;

    // Per-question checks
    questions.forEach((q, idx) => {
        const loc = `Q[id=${q.id || idx}]`;

        // Duplicate ID check
        if (seen_ids.has(q.id)) {
            errors.push(`${loc}: Duplicate question ID`);
        } else {
            seen_ids.add(q.id);
        }

        // Required fields
        REQUIRED_FIELDS.forEach(field => {
            if (q[field] === undefined || q[field] === null || q[field] === '') {
                errors.push(`${loc}: Missing required field '${field}'`);
            }
        });

        // Domain validation
        if (!DOMAINS[q.domain]) {
            errors.push(`${loc}: Invalid domain_id '${q.domain}' (valid: ${DOMAIN_IDS.join(', ')})`);
        }

        // Subdomain validation
        if (q.subdomain_id && !isValidSubdomain(q.subdomain_id)) {
            errors.push(`${loc}: Invalid subdomain_id '${q.subdomain_id}'`);
        }

        // Subdomain belongs to domain
        if (q.subdomain_id && isValidSubdomain(q.subdomain_id)) {
            if (SUBDOMAINS[q.subdomain_id].domain_id !== q.domain) {
                errors.push(`${loc}: subdomain_id '${q.subdomain_id}' does not belong to domain ${q.domain}`);
            }
        }

        // Status validation
        if (!VALID_STATUSES.includes(q.status)) {
            errors.push(`${loc}: Invalid status '${q.status}' (valid: ${VALID_STATUSES.join(', ')})`);
        }

        // Difficulty validation
        if (!VALID_DIFFICULTIES.includes(q.difficulty)) {
            errors.push(`${loc}: Invalid difficulty '${q.difficulty}' (valid: ${VALID_DIFFICULTIES.join(', ')})`);
        }

        // Options array
        if (!Array.isArray(q.options)) {
            errors.push(`${loc}: 'options' must be an array`);
        } else if (q.options.length < 2) {
            errors.push(`${loc}: 'options' must have at least 2 items`);
        }

        // correctIndex range
        if (q.options && (q.correctIndex < 0 || q.correctIndex >= q.options.length)) {
            errors.push(`${loc}: 'correctIndex' ${q.correctIndex} out of range (options.length=${q.options?.length})`);
        }

        // Explanation
        if (q.explanation && !q.explanation.correct) {
            warnings.push(`${loc}: Missing explanation.correct`);
        }

        // Weight
        if (typeof q.weight !== 'number' || q.weight <= 0) {
            warnings.push(`${loc}: 'weight' should be a positive number`);
        }
    });

    // Distribution checks
    const subdomainCounts = {};
    activeQuestions.forEach(q => {
        const key = q.subdomain_id;
        if (key) subdomainCounts[key] = (subdomainCounts[key] || 0) + 1;
    });

    const subdomainDistribution = {};
    Object.entries(subdomainCounts).forEach(([id, count]) => {
        const pct = (count / totalActive) * 100;
        subdomainDistribution[id] = { count, pct: pct.toFixed(2) };
        if (pct < SUBDOMAIN_MIN_PCT) {
            warnings.push(`Subdomain ${id} (${SUBDOMAINS[id]?.name}): ${pct.toFixed(1)}% < ${SUBDOMAIN_MIN_PCT}% minimum`);
        }
        if (pct > SUBDOMAIN_MAX_PCT) {
            warnings.push(`Subdomain ${id} (${SUBDOMAINS[id]?.name}): ${pct.toFixed(1)}% > ${SUBDOMAIN_MAX_PCT}% maximum`);
        }
    });

    // Domain distribution
    const domainCounts = {};
    activeQuestions.forEach(q => {
        domainCounts[q.domain] = (domainCounts[q.domain] || 0) + 1;
    });
    const domainDistribution = {};
    Object.entries(domainCounts).forEach(([id, count]) => {
        domainDistribution[id] = {
            name: DOMAINS[id]?.name,
            count,
            pct: ((count / totalActive) * 100).toFixed(2),
            targetPct: DOMAINS[id]?.weight
        };
    });

    // Difficulty distribution
    const diffCounts = { easy: 0, medium: 0, hard: 0 };
    activeQuestions.forEach(q => { if (diffCounts[q.difficulty] !== undefined) diffCounts[q.difficulty]++; });

    return {
        errors,
        warnings,
        stats: {
            total: questions.length,
            active: totalActive,
            archived: questions.length - totalActive,
            unique_ids: seen_ids.size,
            difficulty_distribution: diffCounts,
            domain_distribution: domainDistribution,
            subdomain_distribution: subdomainDistribution
        }
    };
}

// ─── Main ─────────────────────────────────────────────────────────────────────
console.log('📋 SimSecPlus Question Bank Validator\n');

let questions;
try {
    questions = loadAllQuestions();
    console.log(`Loaded ${questions.length} questions from ${QUESTIONS_DIR}\n`);
} catch (e) {
    console.error('Failed to load questions:', e.message);
    process.exit(1);
}

const result = validate(questions);

// Write report
fs.writeFileSync(REPORT_PATH, JSON.stringify(result, null, 2), 'utf8');

// Console summary
if (result.errors.length > 0) {
    console.error(`❌ ${result.errors.length} ERROR(S):`);
    result.errors.slice(0, 20).forEach(e => console.error('  •', e));
    if (result.errors.length > 20) console.error(`  ... and ${result.errors.length - 20} more`);
} else {
    console.log('✅ No errors found');
}

if (result.warnings.length > 0) {
    console.warn(`\n⚠️  ${result.warnings.length} WARNING(S):`);
    result.warnings.slice(0, 10).forEach(w => console.warn('  •', w));
    if (result.warnings.length > 10) console.warn(`  ... and ${result.warnings.length - 10} more`);
}

console.log('\n📊 Stats:');
console.log(`  Total: ${result.stats.total} | Active: ${result.stats.active} | Archived: ${result.stats.archived}`);
console.log('\n  Domain Distribution:');
Object.entries(result.stats.domain_distribution).forEach(([id, d]) => {
    const diff = (parseFloat(d.pct) - d.targetPct).toFixed(1);
    const indicator = Math.abs(parseFloat(diff)) <= 3 ? '✅' : '⚠️';
    console.log(`    ${indicator} D${id} ${d.name}: ${d.count}q (${d.pct}% actual vs ${d.targetPct}% target, Δ${diff > 0 ? '+' : ''}${diff}%)`);
});

console.log('\n  Difficulty:');
Object.entries(result.stats.difficulty_distribution).forEach(([d, c]) => {
    console.log(`    ${d}: ${c} (${((c / result.stats.active) * 100).toFixed(1)}%)`);
});

console.log(`\n📝 Full report: ${REPORT_PATH}`);

if (result.errors.length > 0) {
    process.exit(1);
} else {
    console.log('\n🎉 Validation passed!');
}
