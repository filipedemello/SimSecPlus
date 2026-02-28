/**
 * SimSecPlus — Test Generator Module
 * Generates a smart question pool using 80/20 rule, cooldown, and domain balancing.
 * 100% client-side. No dependencies beyond storage.js and domains.js.
 *
 * Usage:
 *   const pool = await TestGenerator.generateTestPool(userId, options);
 *
 * Options:
 *   { count, mode, domains, cooldownDays, badPct }
 */

const TestGenerator = (() => {
    'use strict';

    // Inline shuffle (no dep)
    function shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    /**
     * Classic weighted selection respecting domain blueprint.
     * Used as fallback when no history exists.
     */
    function selectWeighted(questions, domains, count, domainConfig) {
        const activeDomains = domains.length ? domains : Object.keys(domainConfig).map(Number);
        const pool = {};
        activeDomains.forEach(d => { pool[d] = []; });
        questions.forEach(q => {
            if (activeDomains.includes(q.domain) && q.status === 'active') {
                pool[q.domain].push(q);
            }
        });
        Object.values(pool).forEach(arr => shuffle(arr));

        const totalWeight = activeDomains.reduce((s, d) => s + domainConfig[d].weight, 0);
        let selected = [];
        let remaining = count;

        activeDomains.forEach((d, i) => {
            const proportion = domainConfig[d].weight / totalWeight;
            const qty = (i === activeDomains.length - 1) ? remaining : Math.round(count * proportion);
            const take = Math.min(qty, pool[d].length, remaining);
            selected = selected.concat(pool[d].slice(0, take));
            remaining -= take;
        });

        // Fill shortfall
        if (selected.length < count) {
            const usedIds = new Set(selected.map(q => q.id));
            const extras = questions.filter(q =>
                !usedIds.has(q.id) && activeDomains.includes(q.domain) && q.status === 'active'
            );
            shuffle(extras);
            selected = selected.concat(extras.slice(0, count - selected.length));
        }

        return shuffle(selected).slice(0, count);
    }

    /**
     * Main function: generates a test pool for any mode.
     * Requires Storage to be initialized.
     *
     * @param {string|null} userId  - null = anonymous (no history used)
     * @param {object} opts
     * @param {number}   opts.count          - number of questions
     * @param {string}   opts.mode           - 'general'|'custom'|'study'|'weakness'|'adaptive'
     * @param {number[]} opts.domains        - [] means all
     * @param {number}   opts.cooldownDays   - default 3
     * @param {number}   opts.badPct         - default 0.20 (20% from wrong history)
     * @param {object}   opts.domainConfig   - DOMAINS object { id: { weight, name } }
     * @param {Array}    opts.allQuestions   - window.QUESTIONS
     * @returns {Promise<Question[]>}
     */
    async function generateTestPool(userId, opts = {}) {
        const {
            count = 10,
            mode = 'general',
            domains = [],
            cooldownDays = 3,
            badPct = 0.20,
            domainConfig = {},
            allQuestions = (typeof window !== 'undefined' ? window.QUESTIONS : []) || []
        } = opts;

        // No user / no history → use classic weighted selection
        if (!userId) {
            return selectWeighted(allQuestions, domains, count, domainConfig);
        }

        // Fetch stats from IndexedDB
        const stats = await Storage.getStats(userId);
        const latestPerQ = stats.latest_per_question || {};

        if (Object.keys(latestPerQ).length === 0) {
            // No history yet → weighted
            return selectWeighted(allQuestions, domains, count, domainConfig);
        }

        // Determine active pool
        const activeDomains = domains.length ? domains : Object.keys(domainConfig).map(Number);
        const now = new Date();
        const cutoff = new Date(now);
        cutoff.setDate(now.getDate() - cooldownDays);

        // Classify each question
        const never_seen = [];
        const wrong_questions = [];
        const correctly_answered = [];
        const on_cooldown = [];

        allQuestions.forEach(q => {
            if (!activeDomains.includes(q.domain) || q.status !== 'active') return;

            const latest = latestPerQ[q.id];
            if (!latest) {
                never_seen.push(q);
                return;
            }
            if (new Date(latest.timestamp) > cutoff) {
                on_cooldown.push(q);
                return;
            }
            if (!latest.correct) {
                wrong_questions.push(q);
            } else {
                correctly_answered.push(q);
            }
        });

        // ── Weakness mode: aggressively target wrong questions & weak areas ──
        if (mode === 'weakness') {
            // Compute subdomain weakness scores
            const bySub = stats.by_subdomain || {};
            const weakSubdomains = Object.entries(bySub)
                .filter(([, s]) => s.total >= 2 && s.weakness_score > 0)
                .sort((a, b) => b[1].weakness_score - a[1].weakness_score)
                .map(([id]) => id);

            // Weakness: 60% previously wrong, 40% never-seen from weak subdomains
            const wrongPct = 0.60;
            const wrongCount = Math.min(Math.round(count * wrongPct), wrong_questions.length);

            // Sort wrong questions by weakness of their subdomain (worst first)
            const wrongSorted = [...wrong_questions].sort((a, b) => {
                const aIdx = weakSubdomains.indexOf(String(a.subdomain_id || 'unknown'));
                const bIdx = weakSubdomains.indexOf(String(b.subdomain_id || 'unknown'));
                return (aIdx === -1 ? 999 : aIdx) - (bIdx === -1 ? 999 : bIdx);
            });

            let selected = wrongSorted.slice(0, wrongCount);
            let remaining = count - selected.length;

            // Fill with never-seen from weak subdomains first
            if (remaining > 0 && weakSubdomains.length > 0) {
                const weakSet = new Set(weakSubdomains);
                const usedIds = new Set(selected.map(q => q.id));
                const weakNew = never_seen.filter(q =>
                    weakSet.has(String(q.subdomain_id || 'unknown')) && !usedIds.has(q.id)
                );
                shuffle(weakNew);
                const take = weakNew.slice(0, remaining);
                selected = selected.concat(take);
                remaining -= take.length;
            }

            // Fill remainder with other never-seen questions
            if (remaining > 0) {
                const usedIds = new Set(selected.map(q => q.id));
                const otherNew = never_seen.filter(q => !usedIds.has(q.id));
                shuffle(otherNew);
                selected = selected.concat(otherNew.slice(0, remaining));
                remaining = count - selected.length;
            }

            // Final fill from cooldown if still short (weakness ignores cooldown)
            if (remaining > 0) {
                const usedIds = new Set(selected.map(q => q.id));
                const cooldownWrong = on_cooldown.filter(q => {
                    const latest = latestPerQ[q.id];
                    return latest && !latest.correct && !usedIds.has(q.id);
                });
                shuffle(cooldownWrong);
                selected = selected.concat(cooldownWrong.slice(0, remaining));
            }

            return shuffle(selected).slice(0, count);
        }

        // ── Adaptive mode: weight domains by error rate, balanced mix ────────
        if (mode === 'adaptive') {
            const byDomain = stats.by_domain || {};

            // Build adaptive weights: domains with higher error get more questions
            const adaptiveWeights = {};
            activeDomains.forEach(d => {
                const entry = byDomain[d];
                const baseWeight = domainConfig[d]?.weight || 1;
                if (!entry || entry.total < 3) {
                    // Not enough data: use base weight slightly boosted (encourage exploration)
                    adaptiveWeights[d] = baseWeight * 1.2;
                } else {
                    const errorRate = 1 - (entry.correct / entry.total);
                    // Weak domains get up to 3x their base weight
                    adaptiveWeights[d] = baseWeight * (1 + errorRate * 2);
                }
            });

            // Normalize weights to sum to 1
            const totalWeight = Object.values(adaptiveWeights).reduce((s, w) => s + w, 0);

            // Allocate questions per domain proportionally
            let selected = [];
            let allocRemaining = count;

            const domainArray = activeDomains.slice();
            domainArray.forEach((d, i) => {
                const proportion = adaptiveWeights[d] / totalWeight;
                const qty = (i === domainArray.length - 1) ? allocRemaining : Math.round(count * proportion);
                const take = Math.min(qty, allocRemaining);

                // For this domain, prefer wrong > never_seen > correct (off cooldown)
                const domainWrong = wrong_questions.filter(q => q.domain === d);
                const domainNew = never_seen.filter(q => q.domain === d);
                const domainOld = correctly_answered.filter(q => q.domain === d);
                const usedIds = new Set(selected.map(q => q.id));

                let domainPool = [
                    ...shuffle(domainWrong.filter(q => !usedIds.has(q.id))),
                    ...shuffle(domainNew.filter(q => !usedIds.has(q.id))),
                    ...shuffle(domainOld.filter(q => !usedIds.has(q.id)))
                ].slice(0, take);

                selected = selected.concat(domainPool);
                allocRemaining -= domainPool.length;
            });

            // Fill any shortfall
            if (selected.length < count) {
                const usedIds = new Set(selected.map(q => q.id));
                const cooldownIds = new Set(on_cooldown.map(q => q.id));
                const extras = allQuestions.filter(q =>
                    !usedIds.has(q.id) && !cooldownIds.has(q.id) &&
                    activeDomains.includes(q.domain) && q.status === 'active'
                );
                selected = selected.concat(shuffle(extras).slice(0, count - selected.length));
            }

            return shuffle(selected).slice(0, count);
        }

        // ── Standard 80/20 selection ───────────────────────────────────────────
        shuffle(never_seen);
        shuffle(wrong_questions);
        shuffle(correctly_answered);

        const badCount = Math.min(Math.round(count * badPct), wrong_questions.length);
        const goodCount = count - badCount;

        let selected = [];
        let remaining = goodCount;

        // 1. Never seen first (80% bucket)
        const fromNew = never_seen.slice(0, remaining);
        selected = selected.concat(fromNew);
        remaining -= fromNew.length;

        // 2. Oldest correct if still short
        if (remaining > 0) {
            const oldest = correctly_answered
                .filter(q => latestPerQ[q.id])
                .sort((a, b) =>
                    new Date(latestPerQ[a.id].timestamp) - new Date(latestPerQ[b.id].timestamp)
                )
                .slice(0, remaining);
            selected = selected.concat(oldest);
            remaining -= oldest.length;
        }

        // 3. Wrong queue (20% bucket)
        const fromBad = wrong_questions.slice(0, badCount);
        selected = selected.concat(fromBad);

        // 4. Last resort fill (exclude on-cooldown)
        const usedIds = new Set(selected.map(q => q.id));
        if (selected.length < count) {
            const cooldownIds = new Set(on_cooldown.map(q => q.id));
            const extras = allQuestions.filter(q =>
                !usedIds.has(q.id) && !cooldownIds.has(q.id) &&
                activeDomains.includes(q.domain) && q.status === 'active'
            );
            shuffle(extras);
            selected = selected.concat(extras.slice(0, count - selected.length));
        }

        return shuffle(selected).slice(0, count);
    }

    return { generateTestPool, selectWeighted };
})();

if (typeof window !== 'undefined') window.TestGenerator = TestGenerator;
if (typeof module !== 'undefined') module.exports = { TestGenerator };
