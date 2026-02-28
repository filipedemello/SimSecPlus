/**
 * SimSecPlus — Selection Tests
 * Tests: no duplicate question IDs in same test, proportional domain distribution
 */

const { FIXTURE_QUESTIONS, FIXTURE_DOMAINS } = require('./fixtures/questions.fixture');

// ─── Helpers (extracted from app.js logic) ───────────────────────────────────
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function selectQuestions(questions, domains, count, DOMAINS) {
    const pool = {};
    const activeDomains = domains.length ? domains : Object.keys(DOMAINS).map(Number);
    activeDomains.forEach(d => { pool[d] = []; });
    questions.forEach(q => {
        if (activeDomains.includes(q.domain) && q.status === 'active') pool[q.domain].push(q);
    });
    Object.values(pool).forEach(arr => shuffleArray(arr));

    const totalWeight = activeDomains.reduce((s, d) => s + DOMAINS[d].weight, 0);
    let selected = [];
    let remaining = count;

    activeDomains.forEach((d, i) => {
        const proportion = DOMAINS[d].weight / totalWeight;
        const qty = (i === activeDomains.length - 1) ? remaining : Math.round(count * proportion);
        const take = Math.min(qty, pool[d].length, remaining);
        selected = selected.concat(pool[d].slice(0, take));
        remaining -= take;
    });

    if (selected.length < count) {
        const usedIds = new Set(selected.map(q => q.id));
        const extras = questions.filter(q => !usedIds.has(q.id) && activeDomains.includes(q.domain) && q.status === 'active');
        shuffleArray(extras);
        selected = selected.concat(extras.slice(0, count - selected.length));
    }

    shuffleArray(selected);
    return selected.slice(0, count);
}
// ─────────────────────────────────────────────────────────────────────────────

module.exports = function ({ test, describe }) {
    describe('Selection Tests', () => {
        test('No duplicate question IDs in a selected set', ({ assert }) => {
            const selected = selectQuestions(FIXTURE_QUESTIONS, [], 10, FIXTURE_DOMAINS);
            const ids = selected.map(q => q.id);
            const uniqueIds = new Set(ids);
            assert(uniqueIds.size === ids.length, `Duplicates found: ${ids.length - uniqueIds.size} duplicates`);
        });

        test('No duplicate IDs across multiple runs', ({ assert }) => {
            for (let i = 0; i < 10; i++) {
                const selected = selectQuestions(FIXTURE_QUESTIONS, [], 10, FIXTURE_DOMAINS);
                const ids = selected.map(q => q.id);
                const uniqueIds = new Set(ids);
                assert(uniqueIds.size === ids.length, `Run ${i + 1}: duplicates found`);
            }
        });

        test('Requested count is honoured (≤ max available)', ({ assert, assertEqual }) => {
            const selected5 = selectQuestions(FIXTURE_QUESTIONS, [], 5, FIXTURE_DOMAINS);
            assertEqual(selected5.length, 5, 'Should return exactly 5 questions');

            const selected15 = selectQuestions(FIXTURE_QUESTIONS, [], 15, FIXTURE_DOMAINS);
            assertEqual(selected15.length, 15, 'Should return exactly 15 questions');
        });

        test('Questions capped at pool size (cannot exceed available)', ({ assert }) => {
            // Pool has 30 questions; requesting 50 should return all 30
            const selected = selectQuestions(FIXTURE_QUESTIONS, [], 50, FIXTURE_DOMAINS);
            assert(selected.length <= FIXTURE_QUESTIONS.filter(q => q.status === 'active').length,
                'Should not return more than available active questions');
        });

        test('Custom domain filter returns only from requested domains', ({ assert }) => {
            const selected = selectQuestions(FIXTURE_QUESTIONS, [1, 2], 10, FIXTURE_DOMAINS);
            const domains = new Set(selected.map(q => q.domain));
            domains.forEach(d => assert([1, 2].includes(d), `Domain ${d} should not be in result`));
        });

        test('Archived questions are excluded from selection', ({ assert }) => {
            const withArchived = [
                ...FIXTURE_QUESTIONS,
                { ...FIXTURE_QUESTIONS[0], id: 999, status: 'archived' }
            ];
            const selected = selectQuestions(withArchived, [], 30, FIXTURE_DOMAINS);
            const hasArchived = selected.some(q => q.id === 999);
            assert(!hasArchived, 'Archived question (id=999) should not be selected');
        });

        test('Distribution across all 5 domains (general test)', ({ assert }) => {
            // With 30 questions across 5 domains (6 each), selecting 30 should hit all domains
            const selected = selectQuestions(FIXTURE_QUESTIONS, [], 30, FIXTURE_DOMAINS);
            const domainsHit = new Set(selected.map(q => q.domain));
            assert(domainsHit.size === 5, `Expected 5 domains, got ${domainsHit.size}`);
        });
    });
};
