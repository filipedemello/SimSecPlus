/**
 * SimSecPlus — Official Subdomain Taxonomy (CompTIA Security+ SY0-701)
 * Based on the official exam objectives document.
 * Used by: generate.js, testGenerator.js, analytics.js, dashboardView.js
 */

const SUBDOMAINS = {
    // Domain 1 – General Security Concepts (12%)
    '1.1': { id: '1.1', domain_id: 1, name: 'Security Controls' },
    '1.2': { id: '1.2', domain_id: 1, name: 'Cryptography Concepts' },
    '1.3': { id: '1.3', domain_id: 1, name: 'AAA Framework' },
    '1.4': { id: '1.4', domain_id: 1, name: 'Zero Trust Architecture' },
    '1.5': { id: '1.5', domain_id: 1, name: 'Change Management Security' },
    '1.6': { id: '1.6', domain_id: 1, name: 'Gap Analysis' },

    // Domain 2 – Threats, Vulnerabilities, and Mitigations (22%)
    '2.1': { id: '2.1', domain_id: 2, name: 'Threat Actors and Motivations' },
    '2.2': { id: '2.2', domain_id: 2, name: 'Social Engineering' },
    '2.3': { id: '2.3', domain_id: 2, name: 'Malware and Attack Types' },
    '2.4': { id: '2.4', domain_id: 2, name: 'Application and Network Attacks' },
    '2.5': { id: '2.5', domain_id: 2, name: 'Vulnerability Types and Indicators' },
    '2.6': { id: '2.6', domain_id: 2, name: 'Mitigation Techniques' },

    // Domain 3 – Security Architecture (18%)
    '3.1': { id: '3.1', domain_id: 3, name: 'Network Architecture and Segmentation' },
    '3.2': { id: '3.2', domain_id: 3, name: 'Cloud Security' },
    '3.3': { id: '3.3', domain_id: 3, name: 'Secure Infrastructure Components' },
    '3.4': { id: '3.4', domain_id: 3, name: 'Data Protection' },
    '3.5': { id: '3.5', domain_id: 3, name: 'Resilience and Business Continuity' },
    '3.6': { id: '3.6', domain_id: 3, name: 'Virtualization and Embedded Systems' },

    // Domain 4 – Security Operations (28%)
    '4.1': { id: '4.1', domain_id: 4, name: 'Monitoring and Logging' },
    '4.2': { id: '4.2', domain_id: 4, name: 'Vulnerability Management' },
    '4.3': { id: '4.3', domain_id: 4, name: 'Incident Response' },
    '4.4': { id: '4.4', domain_id: 4, name: 'Digital Forensics' },
    '4.5': { id: '4.5', domain_id: 4, name: 'Identity and Access Management' },
    '4.6': { id: '4.6', domain_id: 4, name: 'Access Control Models' },
    '4.7': { id: '4.7', domain_id: 4, name: 'Endpoint and Application Security' },
    '4.8': { id: '4.8', domain_id: 4, name: 'Hardening and Automation' },

    // Domain 5 – Security Program Management (20%)
    '5.1': { id: '5.1', domain_id: 5, name: 'Governance and Policies' },
    '5.2': { id: '5.2', domain_id: 5, name: 'Risk Management' },
    '5.3': { id: '5.3', domain_id: 5, name: 'Compliance and Regulations' },
    '5.4': { id: '5.4', domain_id: 5, name: 'Security Awareness and Training' },
    '5.5': { id: '5.5', domain_id: 5, name: 'Auditing and Assessment' },
    '5.6': { id: '5.6', domain_id: 5, name: 'Third-Party and Supply Chain Risk' },
    '5.7': { id: '5.7', domain_id: 5, name: 'Business Continuity and Data Privacy' }
};

// Helper: get all subdomains for a given domain_id
function getSubdomainsByDomain(domainId) {
    return Object.values(SUBDOMAINS).filter(s => s.domain_id === domainId);
}

// Helper: validate a subdomain_id
function isValidSubdomain(subdomainId) {
    return Object.prototype.hasOwnProperty.call(SUBDOMAINS, subdomainId);
}

const SUBDOMAIN_IDS = Object.keys(SUBDOMAINS);

// Dual-environment export
if (typeof window !== 'undefined') {
    window.SUBDOMAINS = SUBDOMAINS;
    window.getSubdomainsByDomain = getSubdomainsByDomain;
    window.isValidSubdomain = isValidSubdomain;
}
if (typeof module !== 'undefined') {
    module.exports = { SUBDOMAINS, SUBDOMAIN_IDS, getSubdomainsByDomain, isValidSubdomain };
}
