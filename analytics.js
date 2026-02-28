/**
 * SimSecPlus \u2014 Analytics Module
 * Computes all metrics from IndexedDB data via Storage.getStats()
 * Used by dashboardView.js
 */

const Analytics = (() => {
    'use strict';

    /**
     * Get full analytics for a user.
     * @param {object} user - { user_id, name }
     * @returns {Promise<AnalyticsResult>}
     */
    async function getUserAnalytics(user) {
        const stats = await Storage.getStats(user.user_id);

        // Top 3 weaknesses: subdomains with highest weakness_score (min 2 attempts)
        const weaknesses = Object.entries(stats.by_subdomain || {})
            .filter(([, s]) => s.total >= 2)
            .sort((a, b) => b[1].weakness_score - a[1].weakness_score)
            .slice(0, 3)
            .map(([id, s]) => ({
                subdomain_id: id,
                name: (typeof window !== 'undefined' && window.SUBDOMAINS && window.SUBDOMAINS[id])
                    ? window.SUBDOMAINS[id].name : id,
                total: s.total,
                correct: s.correct,
                pct: s.pct,
                weakness_score: s.weakness_score
            }));

        // Domain breakdown with friendly names
        const domainConfig = (typeof window !== 'undefined' && window.DOMAINS) || {};
        const by_domain_enriched = Object.entries(stats.by_domain || {}).map(([domId, d]) => ({
            domain_id: Number(domId),
            name: domainConfig[domId] ? domainConfig[domId].name : `Domain ${domId}`,
            total: d.total,
            correct: d.correct,
            pct: d.pct
        })).sort((a, b) => a.domain_id - b.domain_id);

        return {
            user,
            overall: {
                total: stats.total_attempts,
                correct: stats.total_correct,
                pct: stats.overall_pct,
                sessions: stats.total_sessions
            },
            by_domain: by_domain_enriched,
            by_subdomain: stats.by_subdomain,
            top_weaknesses: weaknesses,
            time_series: stats.time_series || []
        };
    }

    return { getUserAnalytics };
})();

if (typeof window !== 'undefined') window.Analytics = Analytics;
if (typeof module !== 'undefined') module.exports = { Analytics };
