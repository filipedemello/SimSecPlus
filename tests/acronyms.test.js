/**
 * SimSecPlus — Acronym Expansion Tests
 * Tests: correct expansion, first-occurrence-only, false positives, ordering
 */

const { ACRONYMS, expandAcronyms } = require('../acronyms');

module.exports = function ({ test, describe, assert, assertEqual }) {

    describe('Acronym Expansion', () => {

        // ── Basic expansion ────────────────────────────────────────────────────
        test('Expands a known acronym to full form + acronym', ({ assertEqual }) => {
            const result = expandAcronyms('TLS is used for secure communication.');
            assertEqual(result, 'Transport Layer Security (TLS) is used for secure communication.');
        });

        test('Expands acronym at start of sentence', ({ assertEqual }) => {
            const result = expandAcronyms('VPN allows remote access.');
            assertEqual(result, 'Virtual Private Network (VPN) allows remote access.');
        });

        test('Expands acronym at end of sentence', ({ assertEqual }) => {
            const result = expandAcronyms('The protocol used is TLS');
            assertEqual(result, 'The protocol used is Transport Layer Security (TLS)');
        });

        // ── First-occurrence-only ──────────────────────────────────────────────
        test('Only expands first occurrence of acronym', ({ assert }) => {
            const result = expandAcronyms('TLS encrypts data. Use TLS for all APIs. TLS is required.');
            const count = (result.match(/Transport Layer Security/g) || []).length;
            assertEqual(count, 1, 'Should only expand TLS once');
            // Remaining occurrences unchanged
            assert(result.includes('Transport Layer Security (TLS)'), 'First should be expanded');
            const idx = result.indexOf('Transport Layer Security (TLS)');
            const rest = result.slice(idx + 'Transport Layer Security (TLS)'.length);
            assert(rest.includes('TLS'), 'Second occurrence should remain as TLS');
        });

        // ── False positives ───────────────────────────────────────────────────
        test('Does NOT expand acronym inside a larger word', ({ assert }) => {
            // "STLS" should not be expanded as "TLS"
            const result = expandAcronyms('STLS is not TLS.');
            assert(!result.startsWith('STransport'), 'STLS prefix should not be expanded');
            assert(result.includes('Transport Layer Security (TLS)'), 'Standalone TLS should be expanded');
        });

        test('Does NOT expand acronym followed immediately by letters', ({ assert }) => {
            // "TLSv1" — TLS is followed by "v1", not a word boundary issue but OK
            const result = expandAcronyms('VPNaccess is wrong. VPN is correct.');
            assert(!result.includes('Virtual Private Network (VPN)acces'), 'VPNaccess should NOT expand');
            assert(result.includes('Virtual Private Network (VPN) is correct'), 'Standalone VPN should expand');
        });

        test('Unknown acronym is left unchanged', ({ assertEqual }) => {
            const result = expandAcronyms('XYZ protocol is unknown.');
            assertEqual(result, 'XYZ protocol is unknown.');
        });

        // ── Multi-acronym expansion ────────────────────────────────────────────
        test('Expands multiple different acronyms in same text', ({ assert }) => {
            const result = expandAcronyms('TLS and VPN and MFA are all security controls.');
            assert(result.includes('Transport Layer Security (TLS)'), 'TLS expanded');
            assert(result.includes('Virtual Private Network (VPN)'), 'VPN expanded');
            assert(result.includes('Multi-Factor Authentication (MFA)'), 'MFA expanded');
        });

        // ── Longer match wins ──────────────────────────────────────────────────
        test('Longer acronym takes priority (PCI DSS over PCI)', ({ assert }) => {
            const result = expandAcronyms('The standard is PCI DSS.');
            // Should expand PCI DSS as a unit, not PCI separately
            assert(
                result.includes('Payment Card Industry Data Security Standard (PCI DSS)'),
                `Expected PCI DSS expansion, got: ${result}`
            );
        });

        // ── Edge cases ────────────────────────────────────────────────────────
        test('Returns empty string unchanged', ({ assertEqual }) => {
            assertEqual(expandAcronyms(''), '');
        });

        test('Returns null unchanged (null input)', ({ assert }) => {
            assert(expandAcronyms(null) === null);
        });

        test('Returns number unchanged (non-string)', ({ assert }) => {
            assert(expandAcronyms(42) === 42);
        });

        test('Text with no acronyms is unchanged', ({ assertEqual }) => {
            const text = 'This is a normal sentence without any known acronyms.';
            assertEqual(expandAcronyms(text), text);
        });

        // ── Case sensitivity ───────────────────────────────────────────────────
        test('Lowercase version of acronym is NOT expanded (case-sensitive)', ({ assert }) => {
            // "tls" is not in the dict — should not be expanded
            const result = expandAcronyms('tls is lowercase.');
            assert(!result.includes('Transport Layer Security'), 'Lowercase should not be expanded');
        });

        // ── Acronym dictionary sanity ──────────────────────────────────────────
        test('ACRONYMS dict has at least 50 entries', ({ assert }) => {
            assert(Object.keys(ACRONYMS).length >= 50, `Got only ${Object.keys(ACRONYMS).length} entries`);
        });

        test('Every ACRONYMS value is a non-empty string', ({ assert }) => {
            for (const [key, val] of Object.entries(ACRONYMS)) {
                assert(typeof val === 'string' && val.length > 0, `ACRONYMS["${key}"] is invalid`);
            }
        });

        test('No ACRONYMS key is shorter than 2 characters', ({ assert }) => {
            for (const key of Object.keys(ACRONYMS)) {
                assert(key.length >= 2, `Acronym "${key}" is too short`);
            }
        });
    });
};
