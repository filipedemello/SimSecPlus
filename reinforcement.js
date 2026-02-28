/**
 * SimSecPlus — Reinforcement Module
 * Manages automatic re-insertion of incorrectly answered questions.
 *
 * Rules:
 *   - First wrong answer: re-insert question at currentIndex + 5
 *   - Subsequent wrong answers: re-insert at currentIndex + 3
 *   - Need 2 consecutive correct answers to "graduate" (remove from reinforcement)
 *   - State is per-session (not persisted)
 *
 * Usage:
 *   const mgr = Reinforcement.create();
 *   const offset = mgr.processAnswer(questionId, isCorrect);
 *   if (offset > 0) {
 *       const newQueue = mgr.insertQuestion(queue, currentIndex, question, offset);
 *   }
 */

const Reinforcement = (() => {
    'use strict';

    /**
     * Creates a new ReinforcementManager instance.
     * Each quiz session should create its own manager.
     */
    function create() {
        const _state = new Map(); // questionId -> { errorCount, consecutiveCorrect }

        function _getOrCreate(questionId) {
            if (!_state.has(questionId)) {
                _state.set(questionId, { errorCount: 0, consecutiveCorrect: 0 });
            }
            return _state.get(questionId);
        }

        /**
         * Process an answer for a question.
         * @param {number} questionId
         * @param {boolean} correct
         * @returns {number} offset for re-insertion (0 = don't re-insert)
         */
        function processAnswer(questionId, correct) {
            const s = _getOrCreate(questionId);

            if (correct) {
                s.consecutiveCorrect++;
                if (s.consecutiveCorrect >= 2) {
                    // Graduate — question is mastered
                    _state.delete(questionId);
                    return 0;
                }
                return 0; // one correct, wait for another
            } else {
                s.errorCount++;
                s.consecutiveCorrect = 0;
                // First error -> +5, subsequent -> +3
                return s.errorCount === 1 ? 5 : 3;
            }
        }

        /**
         * Insert a question into the queue at currentIndex + offset.
         * Clamps to the end of the queue if offset exceeds remaining length.
         * @param {Array} queue - current question list
         * @param {number} currentIndex - where we are now
         * @param {Object} question - question object to re-insert
         * @param {number} offset - how many positions after currentIndex
         * @returns {Array} new queue with question inserted
         */
        function insertQuestion(queue, currentIndex, question, offset) {
            const insertAt = Math.min(currentIndex + offset, queue.length);
            const newQueue = [...queue];
            newQueue.splice(insertAt, 0, question);
            return newQueue;
        }

        /**
         * Check if a question is currently in the reinforcement cycle.
         * @param {number} questionId
         * @returns {boolean}
         */
        function isReinforced(questionId) {
            return _state.has(questionId);
        }

        /**
         * Get reinforcement stats.
         * @returns {{ total: number, questionIds: number[] }}
         */
        function stats() {
            return {
                total: _state.size,
                questionIds: [..._state.keys()]
            };
        }

        return { processAnswer, insertQuestion, isReinforced, stats, getState: () => _state };
    }

    return { create };
})();

// Browser global
if (typeof window !== 'undefined') {
    window.Reinforcement = Reinforcement;
}
// Node.js (for tests)
if (typeof module !== 'undefined') {
    module.exports = { Reinforcement };
}
