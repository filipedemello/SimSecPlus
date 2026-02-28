/**
 * SimSecPlus — Acronym Expansion Dictionary
 * Used by generate.js to expand first occurrence of each acronym in explanations.
 * Format: { "ACRONYM": "Full Name" }
 */

const ACRONYMS = {
    // CIA Triad & Core
    'AES': 'Advanced Encryption Standard',
    'RSA': 'Rivest–Shamir–Adleman',
    'PKI': 'Public Key Infrastructure',
    'TLS': 'Transport Layer Security',
    'SSL': 'Secure Sockets Layer',
    'SSH': 'Secure Shell',
    'VPN': 'Virtual Private Network',
    'DH': 'Diffie-Hellman',
    'ECDH': 'Elliptic-curve Diffie-Hellman',
    'SHA': 'Secure Hash Algorithm',
    'HMAC': 'Hash-based Message Authentication Code',
    'PGP': 'Pretty Good Privacy',
    'ECC': 'Elliptic Curve Cryptography',

    // AAA
    'AAA': 'Authentication, Authorization, and Accounting',
    'MFA': 'Multi-Factor Authentication',
    'SSO': 'Single Sign-On',
    'LDAP': 'Lightweight Directory Access Protocol',
    'RADIUS': 'Remote Authentication Dial-In User Service',
    'TACACS': 'Terminal Access Controller Access Control System',
    'SAML': 'Security Assertion Markup Language',
    'OAuth': 'Open Authorization',
    'OIDC': 'OpenID Connect',
    'PAM': 'Privileged Access Management',
    'IAM': 'Identity and Access Management',

    // Access Control
    'RBAC': 'Role-Based Access Control',
    'ABAC': 'Attribute-Based Access Control',
    'MAC': 'Mandatory Access Control',
    'DAC': 'Discretionary Access Control',
    'ACL': 'Access Control List',
    'NAC': 'Network Access Control',

    // Network
    'DMZ': 'Demilitarized Zone',
    'VLAN': 'Virtual Local Area Network',
    'SDN': 'Software-Defined Networking',
    'WAF': 'Web Application Firewall',
    'IDS': 'Intrusion Detection System',
    'IPS': 'Intrusion Prevention System',
    'NGFW': 'Next-Generation Firewall',
    'DDoS': 'Distributed Denial of Service',
    'DoS': 'Denial of Service',
    'ARP': 'Address Resolution Protocol',
    'DNS': 'Domain Name System',
    'BGP': 'Border Gateway Protocol',
    'SD-WAN': 'Software-Defined Wide Area Network',

    // Cloud
    'IaaS': 'Infrastructure as a Service',
    'PaaS': 'Platform as a Service',
    'SaaS': 'Software as a Service',
    'FaaS': 'Function as a Service',
    'CASB': 'Cloud Access Security Broker',

    // Monitoring / SOC
    'SIEM': 'Security Information and Event Management',
    'SOAR': 'Security Orchestration, Automation, and Response',
    'EDR': 'Endpoint Detection and Response',
    'XDR': 'Extended Detection and Response',
    'MDR': 'Managed Detection and Response',
    'SOC': 'Security Operations Center',
    'NOC': 'Network Operations Center',
    'UEBA': 'User and Entity Behavior Analytics',

    // Vulnerability
    'CVE': 'Common Vulnerabilities and Exposures',
    'CVSS': 'Common Vulnerability Scoring System',
    'CWE': 'Common Weakness Enumeration',
    'NVD': 'National Vulnerability Database',
    'SBOM': 'Software Bill of Materials',

    // Incident Response
    'IR': 'Incident Response',
    'IOC': 'Indicator of Compromise',
    'TTPs': 'Tactics, Techniques, and Procedures',

    // Forensics
    'FTK': 'Forensic Toolkit',

    // Data Protection
    'DLP': 'Data Loss Prevention',
    'PII': 'Personally Identifiable Information',
    'PHI': 'Protected Health Information',
    'PCI': 'Payment Card Industry',
    'GDPR': 'General Data Protection Regulation',
    'HIPAA': 'Health Insurance Portability and Accountability Act',
    'PCI DSS': 'Payment Card Industry Data Security Standard',
    'SOX': 'Sarbanes-Oxley Act',
    'FISMA': 'Federal Information Security Management Act',

    // Frameworks / Standards
    'NIST': 'National Institute of Standards and Technology',
    'ISO': 'International Organization for Standardization',
    'ISMS': 'Information Security Management System',
    'CSF': 'Cybersecurity Framework',
    'COBIT': 'Control Objectives for Information Technologies',
    'SOC 2': 'System and Organization Controls 2',

    // Risk
    'BIA': 'Business Impact Analysis',
    'BCP': 'Business Continuity Plan',
    'DRP': 'Disaster Recovery Plan',
    'RPO': 'Recovery Point Objective',
    'RTO': 'Recovery Time Objective',
    'MTTR': 'Mean Time to Repair',
    'MTBF': 'Mean Time Between Failures',
    'SLA': 'Service Level Agreement',
    'NDA': 'Non-Disclosure Agreement',
    'MOU': 'Memorandum of Understanding',
    'ALE': 'Annualized Loss Expectancy',
    'SLE': 'Single Loss Expectancy',
    'ARO': 'Annualized Rate of Occurrence',

    // Malware / Attacks
    'APT': 'Advanced Persistent Threat',
    'RAT': 'Remote Access Trojan',
    'XSS': 'Cross-Site Scripting',
    'CSRF': 'Cross-Site Request Forgery',
    'SQLi': 'SQL Injection',
    'RCE': 'Remote Code Execution',
    'LFI': 'Local File Inclusion',
    'RFI': 'Remote File Inclusion',

    // Resilience
    'RAID': 'Redundant Array of Independent Disks',
    'HA': 'High Availability',
    'DR': 'Disaster Recovery',

    // Embedded / OT
    'SCADA': 'Supervisory Control and Data Acquisition',
    'ICS': 'Industrial Control System',
    'OT': 'Operational Technology',
    'IoT': 'Internet of Things',
    'RTOS': 'Real-Time Operating System',
    'SoC': 'System on a Chip',
    'FPGA': 'Field-Programmable Gate Array',

    // DevSecOps
    'CI/CD': 'Continuous Integration / Continuous Deployment',
    'IaC': 'Infrastructure as Code',
    'SAST': 'Static Application Security Testing',
    'DAST': 'Dynamic Application Security Testing',
    'SBOM': 'Software Bill of Materials',
};

/**
 * Expand the first occurrence of each acronym in a given text.
 * Format: "TLS" → "Transport Layer Security (TLS)"
 * Subsequent occurrences in the same text are left as-is.
 * Does NOT expand inside words (e.g. "STLSomething" is not affected).
 *
 * @param {string} text - Input text to process
 * @returns {string} - Text with first acronym occurrences expanded
 */
function expandAcronyms(text) {
    if (!text || typeof text !== 'string') return text;

    // Sort by length descending so longer acronyms (e.g. "PCI DSS") match before shorter ones ("PCI")
    const sortedKeys = Object.keys(ACRONYMS).sort((a, b) => b.length - a.length);

    // We will replace already-expanded regions with unique placeholders so shorter
    // acronyms don't re-expand inside them.
    // Placeholder format: \x00<index>\x00
    const placeholders = [];

    let result = text;

    for (const acronym of sortedKeys) {
        const escaped = acronym.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+');
        const regex = new RegExp(`(?<![A-Za-z])${escaped}(?![A-Za-z])`, 'g');

        let firstFound = false;
        result = result.replace(regex, (match) => {
            if (!firstFound) {
                firstFound = true;
                const expanded = `${ACRONYMS[acronym]} (${match})`;
                // Store as placeholder to protect from further replacement
                const idx = placeholders.length;
                placeholders.push(expanded);
                return `\x00${idx}\x00`;
            }
            return match; // subsequent occurrences kept as-is
        });
    }

    // Restore all placeholders
    result = result.replace(/\x00(\d+)\x00/g, (_, idx) => placeholders[Number(idx)]);

    return result;
}

// Dual-environment export
if (typeof window !== 'undefined') {
    window.ACRONYMS = ACRONYMS;
    window.expandAcronyms = expandAcronyms;
}
if (typeof module !== 'undefined') {
    module.exports = { ACRONYMS, expandAcronyms };
}
