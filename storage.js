/**
 * SimSecPlus — Storage Module (IndexedDB wrapper)
 * 100% client-side, offline-ready.
 * No dependencies. Compatible with modern browsers (iOS Safari 14+, Chrome 80+).
 *
 * API:
 *   Storage.init()                          → Promise<void>
 *   Storage.createUser(name, email?)        → Promise<User>
 *   Storage.listUsers()                     → Promise<User[]>
 *   Storage.setCurrentUser(userId)          → void  (localStorage)
 *   Storage.getCurrentUser()                → Promise<User | null>
 *   Storage.logAttempt(opts)                → Promise<Attempt>
 *   Storage.createTestSession(opts)         → Promise<Session>
 *   Storage.closeTestSession(id, stats)     → Promise<Session>
 *   Storage.getStats(userId, filters?)      → Promise<StatsResult>
 *   Storage.getUserAttempts(userId, filters?) → Promise<Attempt[]>
 */

const Storage = (() => {
    'use strict';

    const DB_NAME = 'simSecPlusDB';
    const DB_VERSION = 1;
    const LS_KEY = 'ssp_current_user';

    let _db = null;

    // ─── UUID v4 (no crypto.randomUUID fallback for iOS 12 compat) ─────────────
    function uuid() {
        if (typeof crypto !== 'undefined' && crypto.randomUUID) {
            return crypto.randomUUID();
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }

    // ─── Open / Migrate DB ──────────────────────────────────────────────────────
    function init() {
        if (_db) return Promise.resolve();

        return new Promise((resolve, reject) => {
            const req = indexedDB.open(DB_NAME, DB_VERSION);

            req.onupgradeneeded = (event) => {
                const db = event.target.result;

                // Store: users
                if (!db.objectStoreNames.contains('users')) {
                    const users = db.createObjectStore('users', { keyPath: 'user_id' });
                    users.createIndex('name_idx', 'name', { unique: false });
                }

                // Store: attempts
                if (!db.objectStoreNames.contains('attempts')) {
                    const attempts = db.createObjectStore('attempts', { keyPath: 'attempt_id' });
                    attempts.createIndex('user_id_idx', 'user_id', { unique: false });
                    attempts.createIndex('question_id_idx', 'question_id', { unique: false });
                    attempts.createIndex('timestamp_idx', 'timestamp', { unique: false });
                    attempts.createIndex('session_id_idx', 'session_id', { unique: false });
                }

                // Store: test_sessions
                if (!db.objectStoreNames.contains('test_sessions')) {
                    const sessions = db.createObjectStore('test_sessions', { keyPath: 'session_id' });
                    sessions.createIndex('user_id_idx', 'user_id', { unique: false });
                    sessions.createIndex('started_at_idx', 'started_at', { unique: false });
                }
            };

            req.onsuccess = (e) => { _db = e.target.result; resolve(); };
            req.onerror = (e) => reject(e.target.error);
        });
    }

    // ─── Generic helpers ────────────────────────────────────────────────────────
    function tx(storeName, mode = 'readonly') {
        return _db.transaction([storeName], mode).objectStore(storeName);
    }

    function promisify(req) {
        return new Promise((res, rej) => {
            req.onsuccess = e => res(e.target.result);
            req.onerror = e => rej(e.target.error);
        });
    }

    function getAll(storeName, indexName, key) {
        const store = tx(storeName);
        const source = indexName ? store.index(indexName) : store;
        const req = key !== undefined ? source.getAll(key) : source.getAll();
        return promisify(req);
    }

    // ─── Users ──────────────────────────────────────────────────────────────────
    function createUser(name, email = null) {
        const user = {
            user_id: uuid(),
            name: String(name).trim(),
            email: email ? String(email).trim() : null,
            created_at: new Date().toISOString(),
            preferences: { theme: 'dark' }
        };
        const store = tx('users', 'readwrite');
        return promisify(store.add(user)).then(() => user);
    }

    function listUsers() {
        return getAll('users');
    }

    function getUserById(userId) {
        return promisify(tx('users').get(userId));
    }

    function setCurrentUser(userId) {
        localStorage.setItem(LS_KEY, userId);
    }

    function getCurrentUser() {
        const id = localStorage.getItem(LS_KEY);
        if (!id) return Promise.resolve(null);
        return getUserById(id);
    }

    function deleteUser(userId) {
        return promisify(tx('users', 'readwrite').delete(userId)).then(() => {
            if (localStorage.getItem(LS_KEY) === userId) {
                localStorage.removeItem(LS_KEY);
            }
        });
    }

    // ─── Attempts ───────────────────────────────────────────────────────────────
    /**
     * Log a single answer attempt.
     * @param {object} opts
     * @param {string} opts.user_id
     * @param {string} opts.session_id
     * @param {number} opts.question_id
     * @param {number} opts.domain_id
     * @param {string} opts.subdomain_id
     * @param {boolean} opts.correct
     * @param {number}  opts.time_spent_ms
     */
    function logAttempt(opts) {
        const attempt = {
            attempt_id: uuid(),
            user_id: opts.user_id,
            session_id: opts.session_id || null,
            question_id: opts.question_id,
            domain_id: opts.domain_id,
            subdomain_id: opts.subdomain_id || null,
            correct: Boolean(opts.correct),
            time_spent_ms: opts.time_spent_ms || 0,
            timestamp: new Date().toISOString()
        };
        return promisify(tx('attempts', 'readwrite').add(attempt)).then(() => attempt);
    }

    function getUserAttempts(userId, filters = {}) {
        return getAll('attempts', 'user_id_idx', userId).then(attempts => {
            let result = attempts;
            if (filters.since) {
                const since = new Date(filters.since);
                result = result.filter(a => new Date(a.timestamp) >= since);
            }
            if (filters.domain_id) {
                result = result.filter(a => a.domain_id === filters.domain_id);
            }
            if (filters.subdomain_id) {
                result = result.filter(a => a.subdomain_id === filters.subdomain_id);
            }
            return result;
        });
    }

    // ─── Test Sessions ──────────────────────────────────────────────────────────
    /**
     * @param {object} opts
     * @param {string} opts.user_id
     * @param {string} opts.mode  'general' | 'custom' | 'study' | 'review' | 'weakness' | 'adaptive'
     * @param {number[]} opts.domains
     * @param {number} opts.total_questions
     */
    function createTestSession(opts) {
        const session = {
            session_id: uuid(),
            user_id: opts.user_id,
            mode: opts.mode || 'general',
            domains: opts.domains || [],
            total_questions: opts.total_questions || 0,
            correct_count: 0,
            started_at: new Date().toISOString(),
            finished_at: null
        };
        return promisify(tx('test_sessions', 'readwrite').add(session)).then(() => session);
    }

    function closeTestSession(sessionId, { correct_count = 0 } = {}) {
        const store = tx('test_sessions', 'readwrite');
        return promisify(store.get(sessionId)).then(session => {
            if (!session) throw new Error(`Session ${sessionId} not found`);
            session.correct_count = correct_count;
            session.finished_at = new Date().toISOString();
            return promisify(store.put(session)).then(() => session);
        });
    }

    function getUserSessions(userId) {
        return getAll('test_sessions', 'user_id_idx', userId);
    }

    // ─── Stats Aggregation ──────────────────────────────────────────────────────
    /**
     * Compute aggregated stats for a user.
     * @param {string} userId
     * @param {object} filters  { domain_id?, subdomain_id?, since? }
     * @returns {Promise<StatsResult>}
     */
    function getStats(userId, filters = {}) {
        return Promise.all([
            getUserAttempts(userId, filters),
            getUserSessions(userId)
        ]).then(([attempts, sessions]) => {
            const total = attempts.length;
            const correct = attempts.filter(a => a.correct).length;
            const overall_pct = total > 0 ? Math.round((correct / total) * 100) : 0;

            // Per-domain
            const domainMap = {};
            attempts.forEach(a => {
                const key = a.domain_id;
                if (!domainMap[key]) domainMap[key] = { total: 0, correct: 0 };
                domainMap[key].total++;
                if (a.correct) domainMap[key].correct++;
            });
            const by_domain = Object.fromEntries(
                Object.entries(domainMap).map(([d, s]) => [d, {
                    ...s,
                    pct: s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0
                }])
            );

            // Per-subdomain
            const subMap = {};
            attempts.forEach(a => {
                const key = a.subdomain_id || 'unknown';
                if (!subMap[key]) subMap[key] = { total: 0, correct: 0 };
                subMap[key].total++;
                if (a.correct) subMap[key].correct++;
            });
            const by_subdomain = Object.fromEntries(
                Object.entries(subMap).map(([s, d]) => {
                    const error_rate = d.total > 0 ? 1 - (d.correct / d.total) : 0;
                    return [s, {
                        ...d,
                        pct: d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0,
                        weakness_score: parseFloat((error_rate * d.total).toFixed(2))
                    }];
                })
            );

            // Latest attempt per question (for cooldown / 80-20)
            const latest_per_question = {};
            attempts.forEach(a => {
                const prev = latest_per_question[a.question_id];
                if (!prev || new Date(a.timestamp) > new Date(prev.timestamp)) {
                    latest_per_question[a.question_id] = a;
                }
            });

            // Completed sessions
            const completed_sessions = sessions.filter(s => s.finished_at);

            // Time series: attempts grouped by UTC date
            const byDate = {};
            attempts.forEach(a => {
                const date = a.timestamp.slice(0, 10);
                if (!byDate[date]) byDate[date] = { total: 0, correct: 0 };
                byDate[date].total++;
                if (a.correct) byDate[date].correct++;
            });
            const time_series = Object.entries(byDate)
                .sort((a, b) => a[0].localeCompare(b[0]))
                .map(([date, d]) => ({
                    date,
                    total: d.total,
                    correct: d.correct,
                    pct: Math.round((d.correct / d.total) * 100)
                }));

            return {
                total_attempts: total,
                total_correct: correct,
                overall_pct,
                total_sessions: completed_sessions.length,
                by_domain,
                by_subdomain,
                latest_per_question,
                time_series
            };
        });
    }

    // ─── Public API ─────────────────────────────────────────────────────────────
    return {
        init,
        // Users
        createUser,
        listUsers,
        getUserById,
        setCurrentUser,
        getCurrentUser,
        deleteUser,
        // Attempts
        logAttempt,
        getUserAttempts,
        // Sessions
        createTestSession,
        closeTestSession,
        getUserSessions,
        // Analytics
        getStats
    };
})();

// Browser global
if (typeof window !== 'undefined') {
    window.Storage = Storage;
}
// Node.js (for tests)
if (typeof module !== 'undefined') {
    module.exports = { Storage };
}
