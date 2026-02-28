/**
 * SimSecPlus — Reinforcement Tests
 * Tests: re-insert question +5 on first error, +3 on second error, exit on 2 consecutive correct
 * Now tests the real Reinforcement module from reinforcement.js
 */

const { Reinforcement } = require('../reinforcement.js');

// Alias for backward compatibility with test cases
function createReinforcementManager() {
    return Reinforcement.create();
}


module.exports = function ({ test, describe, assert, assertEqual }) {
    describe('Reinforcement Tests', () => {
        test('First error re-inserts question at currentIndex + 5', ({ assert }) => {
            const mgr = createReinforcementManager();
            const offset = mgr.processAnswer(1, false); // first error
            assertEqual(offset, 5, 'First error should return offset 5');
        });

        test('Second error re-inserts question at currentIndex + 3', ({ assert }) => {
            const mgr = createReinforcementManager();
            mgr.processAnswer(1, false); // first error
            const offset = mgr.processAnswer(1, false); // second error
            assertEqual(offset, 3, 'Second error should return offset 3');
        });

        test('Third and subsequent errors also return offset 3', ({ assertEqual }) => {
            const mgr = createReinforcementManager();
            mgr.processAnswer(1, false);
            mgr.processAnswer(1, false);
            const offset = mgr.processAnswer(1, false); // third error
            assertEqual(offset, 3, 'Third error should still return offset 3');
        });

        test('One correct answer does not graduate (no re-insert but stays)', ({ assertEqual }) => {
            const mgr = createReinforcementManager();
            mgr.processAnswer(1, false); // put in reinforcement
            const offset = mgr.processAnswer(1, true); // first correct
            assertEqual(offset, 0, 'One correct should not re-insert yet');
            // State should still exist (waiting for 2nd correct)
            assert(mgr.getState().has(1), 'Question should still be in reinforcement state after 1 correct');
        });

        test('Two consecutive correct answers graduate the question', ({ assertEqual, assert }) => {
            const mgr = createReinforcementManager();
            mgr.processAnswer(1, false); // put in reinforcement
            mgr.processAnswer(1, true);  // 1st correct
            const offset = mgr.processAnswer(1, true); // 2nd consecutive correct
            assertEqual(offset, 0, 'Should not re-insert after graduation');
            assert(!mgr.getState().has(1), 'Question should be removed from reinforcement after graduation');
        });

        test('Wrong answer after one correct resets consecutive count', ({ assertEqual, assert }) => {
            const mgr = createReinforcementManager();
            mgr.processAnswer(1, false); // put in reinforcement
            mgr.processAnswer(1, true);  // 1st correct (consecutiveCorrect = 1)
            const offset = mgr.processAnswer(1, false); // wrong again — resets
            assertEqual(offset, 3, 'After wrong following one correct: errorCount is 2, offset should be 3');
            assert(mgr.getState().has(1), 'Should still be in reinforcement');
        });

        test('insertQuestion places at correct index', ({ assert }) => {
            const mgr = createReinforcementManager();
            const queue = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
            const currentIndex = 0;
            const newQueue = mgr.insertQuestion(queue, currentIndex, { id: 99 }, 5);
            assert(newQueue[5].id === 99, 'Question 99 should be at position 5');
            assertEqual(newQueue.length, 6, 'Queue should have 6 items');
        });

        test('insertQuestion clamps to end when offset exceeds queue', ({ assertEqual }) => {
            const mgr = createReinforcementManager();
            const queue = [{ id: 1 }, { id: 2 }];
            const newQueue = mgr.insertQuestion(queue, 0, { id: 99 }, 5);
            // Clamped to queue.length = 2
            assertEqual(newQueue[newQueue.length - 1].id, 99, 'Should insert at end when offset exceeds queue');
        });

        test('Independent question states do not interfere', ({ assertEqual }) => {
            const mgr = createReinforcementManager();
            mgr.processAnswer(1, false); // q1: errorCount=1
            mgr.processAnswer(2, false); // q2: errorCount=1
            mgr.processAnswer(2, false); // q2: errorCount=2

            const offset1 = mgr.processAnswer(1, false); // q1: errorCount=2 -> 3
            const offset2 = mgr.processAnswer(2, false); // q2: errorCount=3 -> 3
            assertEqual(offset1, 3, 'Q1 second error should be offset 3');
            assertEqual(offset2, 3, 'Q2 third error should be offset 3');
        });
    });
};
