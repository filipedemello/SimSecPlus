/**
 * SimSecPlus — Official Domain Taxonomy (CompTIA Security+ SY0-701)
 * Single source of truth for domain IDs, names, weights, and exam blueprint.
 * Used by: generate.js, app.js, testGenerator.js, analytics.js
 */

const DOMAINS = {
    1: {
        id: 1,
        name: 'General Security Concepts',
        weight: 12,       // % of actual exam
        questionTarget: 108  // out of 900 total
    },
    2: {
        id: 2,
        name: 'Threats, Vulnerabilities, and Mitigations',
        weight: 22,
        questionTarget: 198
    },
    3: {
        id: 3,
        name: 'Security Architecture',
        weight: 18,
        questionTarget: 162
    },
    4: {
        id: 4,
        name: 'Security Operations',
        weight: 28,
        questionTarget: 252
    },
    5: {
        id: 5,
        name: 'Security Program Management and Oversight',
        weight: 20,
        questionTarget: 180
    }
};

// Convenience arrays
const DOMAIN_IDS = Object.keys(DOMAINS).map(Number);
const TOTAL_QUESTIONS = Object.values(DOMAINS).reduce((s, d) => s + d.questionTarget, 0);

// For browser (no module system)
if (typeof window !== 'undefined') {
    window.DOMAINS = DOMAINS;
    window.DOMAIN_IDS = DOMAIN_IDS;
}
// For Node.js (generate.js, validate.js, tests)
if (typeof module !== 'undefined') {
    module.exports = { DOMAINS, DOMAIN_IDS, TOTAL_QUESTIONS };
}
