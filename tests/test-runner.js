/**
 * SimSecPlus — Micro Test Runner (Node.js, zero dependencies)
 * Usage: node tests/test-runner.js
 */

let passed = 0;
let failed = 0;
const errors = [];

function assert(condition, message) {
    if (!condition) {
        throw new Error(message || 'Assertion failed');
    }
}

function assertEqual(a, b, message) {
    if (a !== b) {
        throw new Error(message || `Expected ${JSON.stringify(b)}, got ${JSON.stringify(a)}`);
    }
}

function assertDeepEqual(a, b, message) {
    if (JSON.stringify(a) !== JSON.stringify(b)) {
        throw new Error(message || `Expected ${JSON.stringify(b)}, got ${JSON.stringify(a)}`);
    }
}

function assertInRange(val, min, max, message) {
    if (val < min || val > max) {
        throw new Error(message || `Expected ${val} to be in range [${min}, ${max}]`);
    }
}

function test(name, fn) {
    try {
        fn({ assert, assertEqual, assertDeepEqual, assertInRange });
        console.log(`  ✅ PASS: ${name}`);
        passed++;
    } catch (e) {
        console.log(`  ❌ FAIL: ${name}`);
        console.log(`       → ${e.message}`);
        failed++;
        errors.push({ name, error: e.message });
    }
}

function describe(suiteName, fn) {
    console.log(`\n📋 ${suiteName}`);
    fn();
}

// Run all test suites
const suites = [
    './selection.test.js',
    './metrics.test.js',
    './reinforcement.test.js',
    './generator.test.js',
    './acronyms.test.js',
];

console.log('🧪 SimSecPlus Test Suite\n');

for (const suite of suites) {
    try {
        require(suite)({ test, describe, assert, assertEqual, assertDeepEqual, assertInRange });
    } catch (e) {
        console.error(`\n💥 Could not load ${suite}: ${e.message}`);
        failed++;
    }
}

console.log('\n─────────────────────────────────────');
console.log(`Results: ${passed} passed, ${failed} failed`);
if (failed > 0) {
    console.log('\nFailed tests:');
    errors.forEach(e => console.log(`  • ${e.name}: ${e.error}`));
    process.exit(1);
} else {
    console.log('\n🎉 All tests passed!');
    process.exit(0);
}
