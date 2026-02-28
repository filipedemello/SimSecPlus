/**
 * SimSecPlus — Question Fixtures (30 questions)
 * Covers all 5 domains with full new schema fields.
 */

const FIXTURE_QUESTIONS = [
    // ─── DOMAIN 1 – General Security Concepts (weight: 12) ───
    {
        id: 1, domain: 1, domain_name: 'General Security Concepts',
        subdomain_id: '1.1', subdomain_name: 'Security Controls',
        difficulty: 'easy', weight: 1.0, status: 'active',
        question: 'Which CIA triad component ensures data is accessible to authorized users when needed?',
        options: ['Availability', 'Confidentiality', 'Integrity', 'Non-repudiation'],
        correctIndex: 0, hint: 'Think uptime.',
        explanation: { correct: 'Availability ensures systems and data are accessible when needed.', incorrect: {} }
    },
    {
        id: 2, domain: 1, domain_name: 'General Security Concepts',
        subdomain_id: '1.1', subdomain_name: 'Security Controls',
        difficulty: 'medium', weight: 1.0, status: 'active',
        question: 'What does the "I" in CIA triad stand for?',
        options: ['Integrity', 'Isolation', 'Identity', 'Implementation'],
        correctIndex: 0, hint: 'Data accuracy.',
        explanation: { correct: 'Integrity ensures data is accurate and unaltered.', incorrect: {} }
    },
    {
        id: 3, domain: 1, domain_name: 'General Security Concepts',
        subdomain_id: '1.2', subdomain_name: 'Cryptography Concepts',
        difficulty: 'medium', weight: 1.0, status: 'active',
        question: 'Which encryption type uses the same key for encryption and decryption?',
        options: ['Symmetric', 'Asymmetric', 'Hashing', 'PKI'],
        correctIndex: 0, hint: 'One shared key.',
        explanation: { correct: 'Symmetric encryption uses one shared key for both operations.', incorrect: {} }
    },
    {
        id: 4, domain: 1, domain_name: 'General Security Concepts',
        subdomain_id: '1.2', subdomain_name: 'Cryptography Concepts',
        difficulty: 'hard', weight: 1.0, status: 'active',
        question: 'Which algorithm produces a fixed-length, one-way digest?',
        options: ['SHA-256', 'AES-256', 'RSA', 'DH'],
        correctIndex: 0, hint: 'Irreversible fingerprint.',
        explanation: { correct: 'SHA-256 is a hashing algorithm producing a fixed 256-bit digest.', incorrect: {} }
    },
    {
        id: 5, domain: 1, domain_name: 'General Security Concepts',
        subdomain_id: '1.3', subdomain_name: 'AAA Framework',
        difficulty: 'easy', weight: 1.0, status: 'active',
        question: 'Which AAA component verifies user identity?',
        options: ['Authentication', 'Authorization', 'Accounting', 'Auditing'],
        correctIndex: 0, hint: 'First step in AAA.',
        explanation: { correct: 'Authentication verifies identity using credentials.', incorrect: {} }
    },
    {
        id: 6, domain: 1, domain_name: 'General Security Concepts',
        subdomain_id: '1.3', subdomain_name: 'AAA Framework',
        difficulty: 'medium', weight: 1.0, status: 'active',
        question: 'Which AAA component determines what resources a user can access?',
        options: ['Authorization', 'Authentication', 'Accounting', 'Auditing'],
        correctIndex: 0, hint: 'Permissions.',
        explanation: { correct: 'Authorization determines permitted resources after authentication.', incorrect: {} }
    },
    // ─── DOMAIN 2 – Threats & Vulnerabilities (weight: 22) ───
    {
        id: 7, domain: 2, domain_name: 'Threats, Vulnerabilities, and Mitigations',
        subdomain_id: '2.1', subdomain_name: 'Threat Actors',
        difficulty: 'easy', weight: 1.0, status: 'active',
        question: 'A government-sponsored group conducting cyber espionage is classified as:',
        options: ['Nation-state actor', 'Hacktivist', 'Script kiddie', 'Insider threat'],
        correctIndex: 0, hint: 'Government-backed.',
        explanation: { correct: 'Nation-state actors are government-sponsored.', incorrect: {} }
    },
    {
        id: 8, domain: 2, domain_name: 'Threats, Vulnerabilities, and Mitigations',
        subdomain_id: '2.2', subdomain_name: 'Social Engineering',
        difficulty: 'medium', weight: 1.0, status: 'active',
        question: 'A targeted phishing attack aimed at a CEO is called:',
        options: ['Whaling', 'Phishing', 'Vishing', 'Smishing'],
        correctIndex: 0, hint: 'High-profile target.',
        explanation: { correct: 'Whaling targets high-profile executives.', incorrect: {} }
    },
    {
        id: 9, domain: 2, domain_name: 'Threats, Vulnerabilities, and Mitigations',
        subdomain_id: '2.3', subdomain_name: 'Malware',
        difficulty: 'easy', weight: 1.0, status: 'active',
        question: 'Malware that encrypts files and demands ransom is:',
        options: ['Ransomware', 'Spyware', 'Rootkit', 'Worm'],
        correctIndex: 0, hint: 'Encrypt and demand.',
        explanation: { correct: 'Ransomware encrypts files and demands payment.', incorrect: {} }
    },
    {
        id: 10, domain: 2, domain_name: 'Threats, Vulnerabilities, and Mitigations',
        subdomain_id: '2.3', subdomain_name: 'Malware',
        difficulty: 'medium', weight: 1.0, status: 'active',
        question: 'A program that disguises itself as legitimate software with hidden malicious payload:',
        options: ['Trojan', 'Worm', 'Ransomware', 'Logic bomb'],
        correctIndex: 0, hint: 'Greek myth reference.',
        explanation: { correct: 'Trojans disguise themselves as legitimate software.', incorrect: {} }
    },
    {
        id: 11, domain: 2, domain_name: 'Threats, Vulnerabilities, and Mitigations',
        subdomain_id: '2.4', subdomain_name: 'Application Attacks',
        difficulty: 'medium', weight: 1.0, status: 'active',
        question: "Injecting ' OR 1=1-- into a login form is an example of:",
        options: ['SQL Injection', 'XSS', 'Buffer overflow', 'CSRF'],
        correctIndex: 0, hint: 'Database manipulation.',
        explanation: { correct: 'SQL Injection manipulates database queries via input fields.', incorrect: {} }
    },
    {
        id: 12, domain: 2, domain_name: 'Threats, Vulnerabilities, and Mitigations',
        subdomain_id: '2.5', subdomain_name: 'Vulnerability Types',
        difficulty: 'hard', weight: 1.0, status: 'active',
        question: 'A vulnerability with no available patch from the vendor is called:',
        options: ['Zero-day', 'Misconfiguration', 'Default credentials', 'Legacy vulnerability'],
        correctIndex: 0, hint: 'No fix yet.',
        explanation: { correct: 'Zero-day: unknown to the vendor, no patch available.', incorrect: {} }
    },
    // ─── DOMAIN 3 – Security Architecture (weight: 18) ───
    {
        id: 13, domain: 3, domain_name: 'Security Architecture',
        subdomain_id: '3.1', subdomain_name: 'Network Architecture',
        difficulty: 'easy', weight: 1.0, status: 'active',
        question: 'A buffer zone between internal and external networks hosting public servers is called:',
        options: ['DMZ', 'VLAN', 'VPN', 'Air gap'],
        correctIndex: 0, hint: 'Public-facing zone.',
        explanation: { correct: 'A DMZ is a perimeter network hosting public-facing services.', incorrect: {} }
    },
    {
        id: 14, domain: 3, domain_name: 'Security Architecture',
        subdomain_id: '3.1', subdomain_name: 'Network Architecture',
        difficulty: 'medium', weight: 1.0, status: 'active',
        question: 'Which provides the most complete isolation between two networks?',
        options: ['Air gap', 'VLAN', 'Firewall', 'NAC'],
        correctIndex: 0, hint: 'No physical connection.',
        explanation: { correct: 'Air gap: complete physical isolation, no connectivity.', incorrect: {} }
    },
    {
        id: 15, domain: 3, domain_name: 'Security Architecture',
        subdomain_id: '3.2', subdomain_name: 'Cloud Security',
        difficulty: 'medium', weight: 1.0, status: 'active',
        question: 'In which cloud model is the customer responsible for managing the OS?',
        options: ['IaaS', 'PaaS', 'SaaS', 'FaaS'],
        correctIndex: 0, hint: 'Provider handles only hardware.',
        explanation: { correct: 'IaaS: provider manages hardware, customer manages OS and apps.', incorrect: {} }
    },
    {
        id: 16, domain: 3, domain_name: 'Security Architecture',
        subdomain_id: '3.3', subdomain_name: 'Data Protection',
        difficulty: 'hard', weight: 1.0, status: 'active',
        question: 'Which technology replaces sensitive data with non-sensitive placeholders?',
        options: ['Tokenization', 'Encryption', 'Hashing', 'Masking'],
        correctIndex: 0, hint: 'Tokens stored separately.',
        explanation: { correct: 'Tokenization replaces data with tokens, originals stored in vault.', incorrect: {} }
    },
    {
        id: 17, domain: 3, domain_name: 'Security Architecture',
        subdomain_id: '3.4', subdomain_name: 'Resilience',
        difficulty: 'medium', weight: 1.0, status: 'active',
        question: 'RPO stands for:',
        options: ['Recovery Point Objective', 'Recovery Process Order', 'Risk Priority Order', 'Redundancy Point Objective'],
        correctIndex: 0, hint: 'Max acceptable data loss.',
        explanation: { correct: 'RPO: maximum acceptable data loss measured in time.', incorrect: {} }
    },
    {
        id: 18, domain: 3, domain_name: 'Security Architecture',
        subdomain_id: '3.4', subdomain_name: 'Resilience',
        difficulty: 'easy', weight: 1.0, status: 'active',
        question: 'RAID 1 provides:',
        options: ['Disk mirroring', 'Disk striping', 'Parity', 'No redundancy'],
        correctIndex: 0, hint: 'Data written to two drives.',
        explanation: { correct: 'RAID 1 mirrors data across two drives.', incorrect: {} }
    },
    // ─── DOMAIN 4 – Security Operations (weight: 28) ───
    {
        id: 19, domain: 4, domain_name: 'Security Operations',
        subdomain_id: '4.1', subdomain_name: 'Monitoring',
        difficulty: 'easy', weight: 1.0, status: 'active',
        question: 'Which technology aggregates logs and correlates security events?',
        options: ['SIEM', 'SOAR', 'IDS', 'EDR'],
        correctIndex: 0, hint: 'Log aggregation + correlation.',
        explanation: { correct: 'SIEM collects logs from multiple sources and correlates events.', incorrect: {} }
    },
    {
        id: 20, domain: 4, domain_name: 'Security Operations',
        subdomain_id: '4.1', subdomain_name: 'Monitoring',
        difficulty: 'medium', weight: 1.0, status: 'active',
        question: 'Which solution automates incident response playbooks?',
        options: ['SOAR', 'SIEM', 'EDR', 'NAC'],
        correctIndex: 0, hint: 'Automation + orchestration.',
        explanation: { correct: 'SOAR automates security workflows and orchestrates tools.', incorrect: {} }
    },
    {
        id: 21, domain: 4, domain_name: 'Security Operations',
        subdomain_id: '4.2', subdomain_name: 'Incident Response',
        difficulty: 'medium', weight: 1.0, status: 'active',
        question: 'What is the correct first phase of the incident response lifecycle?',
        options: ['Preparation', 'Detection', 'Containment', 'Recovery'],
        correctIndex: 0, hint: 'Must come before everything.',
        explanation: { correct: 'Preparation is always the first phase of incident response.', incorrect: {} }
    },
    {
        id: 22, domain: 4, domain_name: 'Security Operations',
        subdomain_id: '4.2', subdomain_name: 'Incident Response',
        difficulty: 'medium', weight: 1.0, status: 'active',
        question: 'The phase where infected systems are isolated to prevent spread is:',
        options: ['Containment', 'Eradication', 'Recovery', 'Detection'],
        correctIndex: 0, hint: 'Stop the spread.',
        explanation: { correct: 'Containment isolates affected systems to prevent further damage.', incorrect: {} }
    },
    {
        id: 23, domain: 4, domain_name: 'Security Operations',
        subdomain_id: '4.3', subdomain_name: 'Identity Management',
        difficulty: 'easy', weight: 1.0, status: 'active',
        question: 'Which requires multiple different verification factors?',
        options: ['MFA', 'SSO', 'LDAP', 'RADIUS'],
        correctIndex: 0, hint: 'Something you know + have + are.',
        explanation: { correct: 'MFA requires 2+ different authentication factors.', incorrect: {} }
    },
    {
        id: 24, domain: 4, domain_name: 'Security Operations',
        subdomain_id: '4.4', subdomain_name: 'Access Control',
        difficulty: 'medium', weight: 1.0, status: 'active',
        question: 'Which access control model assigns permissions based on job function?',
        options: ['RBAC', 'DAC', 'MAC', 'ABAC'],
        correctIndex: 0, hint: 'Role-based.',
        explanation: { correct: 'RBAC assigns permissions based on organizational roles.', incorrect: {} }
    },
    {
        id: 25, domain: 4, domain_name: 'Security Operations',
        subdomain_id: '4.5', subdomain_name: 'Endpoint Security',
        difficulty: 'medium', weight: 1.0, status: 'active',
        question: 'Which provides continuous monitoring and automated response for endpoints?',
        options: ['EDR', 'SIEM', 'IPS', 'NAC'],
        correctIndex: 0, hint: 'Endpoint-specific.',
        explanation: { correct: 'EDR continuously monitors endpoints and provides automated response.', incorrect: {} }
    },
    {
        id: 26, domain: 4, domain_name: 'Security Operations',
        subdomain_id: '4.5', subdomain_name: 'Endpoint Security',
        difficulty: 'hard', weight: 1.0, status: 'active',
        question: 'A security tool alerts on a real attack in progress. This is a:',
        options: ['True positive', 'False positive', 'True negative', 'False negative'],
        correctIndex: 0, hint: 'Alert is correct AND there is a threat.',
        explanation: { correct: 'True positive: correct alert on a real threat.', incorrect: {} }
    },
    // ─── DOMAIN 5 – Security Program Management (weight: 20) ───
    {
        id: 27, domain: 5, domain_name: 'Security Program Management and Oversight',
        subdomain_id: '5.1', subdomain_name: 'Governance',
        difficulty: 'easy', weight: 1.0, status: 'active',
        question: 'Which document defines high-level goals and direction for a security program?',
        options: ['Security policy', 'Standard', 'Procedure', 'Guideline'],
        correctIndex: 0, hint: 'Broadest, most authoritative.',
        explanation: { correct: 'Security policies define overall security goals and direction.', incorrect: {} }
    },
    {
        id: 28, domain: 5, domain_name: 'Security Program Management and Oversight',
        subdomain_id: '5.2', subdomain_name: 'Risk Management',
        difficulty: 'medium', weight: 1.0, status: 'active',
        question: 'Purchasing cyber insurance is an example of:',
        options: ['Risk transference', 'Risk acceptance', 'Risk avoidance', 'Risk mitigation'],
        correctIndex: 0, hint: 'Financial burden shifted.',
        explanation: { correct: 'Risk transference shifts financial impact to a third party.', incorrect: {} }
    },
    {
        id: 29, domain: 5, domain_name: 'Security Program Management and Oversight',
        subdomain_id: '5.3', subdomain_name: 'Compliance',
        difficulty: 'medium', weight: 1.0, status: 'active',
        question: 'Which regulation protects personal data for EU citizens?',
        options: ['GDPR', 'HIPAA', 'PCI DSS', 'SOX'],
        correctIndex: 0, hint: 'European Union.',
        explanation: { correct: 'GDPR governs data privacy for EU citizens.', incorrect: {} }
    },
    {
        id: 30, domain: 5, domain_name: 'Security Program Management and Oversight',
        subdomain_id: '5.4', subdomain_name: 'Business Continuity',
        difficulty: 'hard', weight: 1.0, status: 'active',
        question: 'Which document identifies critical business functions and impact of disruptions?',
        options: ['BIA', 'BCP', 'DRP', 'IR Plan'],
        correctIndex: 0, hint: 'Analyzes the impact.',
        explanation: { correct: 'BIA identifies critical functions and assesses disruption impact.', incorrect: {} }
    }
];

// Domain weight config (mirrors app.js DOMAINS)
const FIXTURE_DOMAINS = {
    1: { name: 'General Security Concepts', weight: 12 },
    2: { name: 'Threats, Vulnerabilities, and Mitigations', weight: 22 },
    3: { name: 'Security Architecture', weight: 18 },
    4: { name: 'Security Operations', weight: 28 },
    5: { name: 'Security Program Management and Oversight', weight: 20 }
};

module.exports = { FIXTURE_QUESTIONS, FIXTURE_DOMAINS };
