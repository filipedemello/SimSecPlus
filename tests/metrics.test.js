/**
 * SimSecPlus — Metrics Tests
 * Tests: overall score, per-domain score, per-subdomain score
 */

const { FIXTURE_QUESTIONS } = require('./fixtures/questions.fixture');

// ─── Helpers ──────────────────────────────────────────────────────────────────
function computeOverallStats(questions, answers) {
    const total = questions.length;
    const correct = answers.filter(a => a.correct).length;
    const pct = total === 0 ? 0 : Math.round((correct / total) * 100);
    return { total, correct, pct };
}

function computeDomainStats(questions, answers) {
    const stats = {};
    questions.forEach((q, i) => {
        if (!stats[q.domain]) {
            stats[q.domain] = { name: q.domain_name, total: 0, correct: 0 };
        }
        stats[q.domain].total++;
        if (answers[i].correct) stats[q.domain].correct++;
    });
    return stats;
}

function computeSubdomainStats(questions, answers) {
    const stats = {};
    questions.forEach((q, i) => {
        const key = q.subdomain_id;
        if (!stats[key]) {
            stats[key] = { name: q.subdomain_name, domain: q.domain, total: 0, correct: 0 };
        }
        stats[key].total++;
        if (answers[i].correct) stats[key].correct++;
    });
    // Add weakness score
    Object.values(stats).forEach(s => {
        const error_rate = 1 - (s.correct / s.total);
        s.weakness_score = error_rate * s.total;
    });
    return stats;
}
// ─────────────────────────────────────────────────────────────────────────────

module.exports = function ({ test, describe, assert, assertEqual, assertInRange }) {
    describe('Metrics Tests', () => {
        // We use first 10 questions from fixture
        const questions = FIXTURE_QUESTIONS.slice(0, 10);

        test('Overall stats — perfect score', ({ assertEqual }) => {
            const answers = questions.map(() => ({ correct: true, answered: true }));
            const stats = computeOverallStats(questions, answers);
            assertEqual(stats.pct, 100, 'Should be 100%');
            assertEqual(stats.correct, 10, 'Should be 10 correct');
            assertEqual(stats.total, 10, 'Should be 10 total');
        });

        test('Overall stats — zero score', ({ assertEqual }) => {
            const answers = questions.map(() => ({ correct: false, answered: true }));
            const stats = computeOverallStats(questions, answers);
            assertEqual(stats.pct, 0, 'Should be 0%');
            assertEqual(stats.correct, 0, 'Should be 0 correct');
        });

        test('Overall stats — partial (5/10 = 50%)', ({ assertEqual }) => {
            const answers = questions.map((_, i) => ({ correct: i < 5, answered: true }));
            const stats = computeOverallStats(questions, answers);
            assertEqual(stats.correct, 5, 'Should be 5 correct');
            assertEqual(stats.pct, 50, 'Should be 50%');
        });

        test('Domain stats — totals add up to question count', ({ assertEqual }) => {
            const answers = questions.map(() => ({ correct: true, answered: true }));
            const stats = computeDomainStats(questions, answers);
            const totalFromDomains = Object.values(stats).reduce((s, d) => s + d.total, 0);
            assertEqual(totalFromDomains, questions.length, 'Per-domain totals must sum to total questions');
        });

        test('Domain stats — correct count per domain is accurate', ({ assert }) => {
            // First 6 questions are D1/D2 (ids 1-6 in fixture), all correct
            // Rest (ids 7-10) are D2, all wrong
            const answers = questions.map((q, i) => ({ correct: i < 6, answered: true }));
            const stats = computeDomainStats(questions, answers);
            // Domain 1 has ids 1-6, all 6 questions in test slice: ids 1–6 → correct
            const d1 = stats[1];
            if (d1) {
                assert(d1.correct === d1.total, 'All D1 questions answered correctly should show 100%');
            }
        });

        test('Subdomain stats — weakness_score is 0 when all correct', ({ assertEqual }) => {
            const answers = questions.map(() => ({ correct: true, answered: true }));
            const stats = computeSubdomainStats(questions, answers);
            Object.values(stats).forEach(s => {
                assertEqual(s.weakness_score, 0, `${s.name} weakness_score should be 0`);
            });
        });

        test('Subdomain stats — weakness_score = error_rate × total', ({ assert }) => {
            // All wrong → error_rate=1 → weakness_score = total for each subdomain
            const answers = questions.map(() => ({ correct: false, answered: true }));
            const stats = computeSubdomainStats(questions, answers);
            Object.values(stats).forEach(s => {
                assert(s.weakness_score === s.total,
                    `${s.name}: weakness_score (${s.weakness_score}) should equal total (${s.total})`);
            });
        });

        test('Empty question set returns zero stats', ({ assertEqual }) => {
            const stats = computeOverallStats([], []);
            assertEqual(stats.total, 0);
            assertEqual(stats.correct, 0);
            assertEqual(stats.pct, 0);
        });
    });
};
