const fs = require('fs');
const path = require('path');

const DOMAINS = {
    1: {
        name: 'General Security Concepts', count: 108, topics: [
            { t: 'CIA Triad', sub: ['Confidentiality', 'Integrity', 'Availability'] },
            { t: 'AAA Framework', sub: ['Authentication', 'Authorization', 'Accounting'] },
            { t: 'Security Controls', sub: ['Technical', 'Managerial', 'Operational', 'Physical', 'Preventive', 'Detective', 'Corrective', 'Compensating', 'Deterrent'] },
            { t: 'Zero Trust', sub: ['Control Plane', 'Data Plane', 'Adaptive Identity', 'Threat Scope Reduction', 'Policy Engine', 'Policy Administrator', 'Policy Enforcement Point'] },
            { t: 'Cryptography Concepts', sub: ['Symmetric', 'Asymmetric', 'Hashing', 'Digital Signatures', 'Key Exchange', 'PKI', 'Certificates', 'Certificate Authorities'] },
            { t: 'Gap Analysis', sub: ['Technical Gap', 'Business Gap', 'Security Baseline'] },
            { t: 'Change Management', sub: ['Change Advisory Board', 'Impact Analysis', 'Rollback Plan', 'Version Control'] },
        ]
    },
    2: {
        name: 'Threats, Vulnerabilities, and Mitigations', count: 198, topics: [
            { t: 'Threat Actors', sub: ['Nation-state', 'Hacktivists', 'Insider Threats', 'Organized Crime', 'Script Kiddies', 'Shadow IT', 'APT'] },
            { t: 'Social Engineering', sub: ['Phishing', 'Spear Phishing', 'Whaling', 'Vishing', 'Smishing', 'Pretexting', 'Watering Hole', 'Typosquatting', 'Business Email Compromise'] },
            { t: 'Malware Types', sub: ['Ransomware', 'Trojans', 'Worms', 'Rootkits', 'Spyware', 'Keyloggers', 'Logic Bombs', 'Fileless Malware', 'Bloatware', 'Cryptominers'] },
            { t: 'Network Attacks', sub: ['DDoS', 'DNS Poisoning', 'ARP Spoofing', 'Man-in-the-Middle', 'Replay Attack', 'SSL Stripping', 'Credential Harvesting', 'On-path Attack'] },
            { t: 'Application Attacks', sub: ['SQL Injection', 'XSS', 'CSRF', 'Buffer Overflow', 'Race Condition', 'Directory Traversal', 'Privilege Escalation', 'API Attacks'] },
            { t: 'Vulnerability Types', sub: ['Zero-day', 'Misconfiguration', 'Default Credentials', 'Unpatched Software', 'Open Permissions', 'Insecure Protocols'] },
            { t: 'Indicators of Compromise', sub: ['Unusual Traffic', 'Impossible Travel', 'Blocked Content', 'Resource Consumption', 'Log Anomalies'] },
            { t: 'Mitigation Techniques', sub: ['Patching', 'Segmentation', 'Encryption', 'Access Control', 'Hardening', 'Input Validation', 'Least Privilege'] },
        ]
    },
    3: {
        name: 'Security Architecture', count: 162, topics: [
            { t: 'Network Architecture', sub: ['DMZ', 'VLAN', 'Micro-segmentation', 'SDN', 'East-West Traffic', 'North-South Traffic', 'Air Gap', 'Jump Server'] },
            { t: 'Cloud Security', sub: ['IaaS', 'PaaS', 'SaaS', 'Shared Responsibility', 'Cloud Access Security Broker', 'Serverless', 'Containerization'] },
            { t: 'Secure Infrastructure', sub: ['Load Balancer', 'Reverse Proxy', 'WAF', 'IDS/IPS', 'Firewall Types', 'NAC', 'VPN', 'SD-WAN'] },
            { t: 'Data Protection', sub: ['Data at Rest', 'Data in Transit', 'Data in Use', 'DLP', 'Data Classification', 'Data Masking', 'Tokenization', 'Rights Management'] },
            { t: 'Resilience', sub: ['High Availability', 'RAID', 'Clustering', 'Redundancy', 'Backup Types', 'Replication', 'Disaster Recovery', 'RPO/RTO'] },
            { t: 'Virtualization', sub: ['Hypervisor Types', 'VM Sprawl', 'VM Escape', 'Container Security', 'Infrastructure as Code'] },
            { t: 'Embedded Systems', sub: ['IoT Security', 'SCADA', 'RTOS', 'SoC', 'FPGA'] },
        ]
    },
    4: {
        name: 'Security Operations', count: 252, topics: [
            { t: 'Monitoring', sub: ['SIEM', 'SOAR', 'Log Aggregation', 'NetFlow', 'sFlow', 'Protocol Analyzers', 'Packet Capture', 'Baseline Deviation'] },
            { t: 'Vulnerability Management', sub: ['Vulnerability Scanning', 'Penetration Testing', 'CVE', 'CVSS', 'Remediation', 'Exception Management', 'Bug Bounty'] },
            { t: 'Incident Response', sub: ['Preparation', 'Detection', 'Analysis', 'Containment', 'Eradication', 'Recovery', 'Lessons Learned', 'Chain of Custody'] },
            { t: 'Digital Forensics', sub: ['Evidence Collection', 'Disk Imaging', 'Memory Forensics', 'Network Forensics', 'Legal Hold', 'Timeline Analysis', 'Write Blockers'] },
            { t: 'Identity Management', sub: ['MFA', 'SSO', 'LDAP', 'RADIUS', 'SAML', 'OAuth', 'OpenID Connect', 'Federation', 'PAM'] },
            { t: 'Access Control', sub: ['RBAC', 'ABAC', 'MAC', 'DAC', 'Rule-based', 'Conditional Access', 'Permission Assignment'] },
            { t: 'Endpoint Security', sub: ['EDR', 'XDR', 'Antivirus', 'Host Firewall', 'DLP Agent', 'Application Whitelisting', 'Boot Integrity'] },
            { t: 'Hardening', sub: ['CIS Benchmarks', 'Group Policy', 'Registry', 'Disk Encryption', 'Firmware Updates', 'Disabling Services', 'Removing Software'] },
            { t: 'Automation', sub: ['Scripting', 'Playbooks', 'Runbooks', 'API Integration', 'CI/CD Security', 'DevSecOps'] },
            { t: 'Alert Management', sub: ['True Positive', 'False Positive', 'True Negative', 'False Negative', 'Alert Tuning', 'Enrichment', 'Triage'] },
        ]
    },
    5: {
        name: 'Security Program Management and Oversight', count: 180, topics: [
            { t: 'Governance', sub: ['Security Policies', 'Standards', 'Procedures', 'Guidelines', 'AUP', 'Data Ownership', 'Data Stewardship'] },
            { t: 'Risk Management', sub: ['Risk Assessment', 'Qualitative Analysis', 'Quantitative Analysis', 'Risk Register', 'Risk Matrix', 'Risk Appetite', 'Risk Tolerance', 'Risk Acceptance', 'Risk Avoidance', 'Risk Transference', 'Risk Mitigation'] },
            { t: 'Compliance', sub: ['GDPR', 'HIPAA', 'PCI DSS', 'SOX', 'FISMA', 'ISO 27001', 'NIST CSF', 'SOC 2'] },
            { t: 'Security Awareness', sub: ['Phishing Campaigns', 'Training Programs', 'Role-based Training', 'Gamification', 'Social Engineering Tests'] },
            { t: 'Auditing', sub: ['Internal Audit', 'External Audit', 'Penetration Test Report', 'Compliance Scan', 'Attestation'] },
            { t: 'Third-Party Risk', sub: ['Vendor Assessment', 'SLA', 'MOU', 'MSA', 'NDA', 'Supply Chain Risk', 'Right to Audit'] },
            { t: 'Business Continuity', sub: ['BIA', 'BCP', 'DRP', 'Tabletop Exercise', 'Failover', 'Succession Planning', 'COOP'] },
            { t: 'Data Privacy', sub: ['PII', 'PHI', 'Data Inventory', 'Privacy Impact Assessment', 'Data Subject Rights', 'Data Breach Notification', 'Consent Management'] },
        ]
    }
};

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; }
const difficulties = ['easy', 'medium', 'hard'];

function generateQuestion(id, domain, topic, sub) {
    const d = DOMAINS[domain];
    const templates = getTemplates(domain, topic, sub);
    const tmpl = pick(templates);
    return {
        id, domain, domainName: d.name,
        difficulty: pick(difficulties),
        question: tmpl.q,
        options: tmpl.o,
        correctIndex: tmpl.ci,
        hint: tmpl.hint,
        explanation: { correct: tmpl.ec, incorrect: tmpl.ei }
    };
}

function getTemplates(domain, topic, sub) {
    const T = [];
    // Generate multiple template variations per sub-topic
    switch (domain) {
        case 1: T.push(...getDomain1Templates(topic, sub)); break;
        case 2: T.push(...getDomain2Templates(topic, sub)); break;
        case 3: T.push(...getDomain3Templates(topic, sub)); break;
        case 4: T.push(...getDomain4Templates(topic, sub)); break;
        case 5: T.push(...getDomain5Templates(topic, sub)); break;
    }
    if (T.length === 0) T.push(genericTemplate(topic, sub));
    return T;
}

function genericTemplate(topic, sub) {
    return {
        q: `Which of the following BEST describes ${sub} in the context of ${topic}?`,
        o: [
            `It is a primary component of ${topic} that ensures ${sub} functionality`,
            `It is unrelated to ${topic}`,
            `It replaces all other aspects of ${topic}`,
            `It is only used in legacy systems`
        ],
        ci: 0,
        hint: `Think about how ${sub} relates to the broader concept of ${topic}.`,
        ec: `${sub} is indeed a key component of ${topic} and plays a fundamental role in security implementations.`,
        ei: { 1: `${sub} is directly related to ${topic}.`, 2: `${sub} works alongside other components, it does not replace them.`, 3: `${sub} is used in modern systems as well.` }
    };
}

// Domain-specific template generators - comprehensive and varied
function getDomain1Templates(topic, sub) {
    const T = [];
    if (topic === 'CIA Triad') {
        if (sub === 'Confidentiality') {
            T.push({ q: 'A company wants to ensure that only authorized personnel can access sensitive customer data. Which element of the CIA triad is the company primarily addressing?', o: ['Confidentiality', 'Integrity', 'Availability', 'Non-repudiation'], ci: 0, hint: 'This element focuses on preventing unauthorized access to data.', ec: 'Confidentiality ensures that data is accessible only to authorized individuals through mechanisms like encryption and access controls.', ei: { 1: 'Integrity focuses on data accuracy and preventing unauthorized modifications.', 2: 'Availability ensures systems and data are accessible when needed.', 3: 'Non-repudiation is not part of the CIA triad; it prevents denial of actions.' } });
            T.push({ q: 'Which of the following technologies BEST supports confidentiality?', o: ['AES-256 encryption', 'RAID arrays', 'Load balancers', 'UPS systems'], ci: 0, hint: 'Think about what prevents unauthorized data access.', ec: 'AES-256 encryption protects data confidentiality by making it unreadable without the proper key.', ei: { 1: 'RAID arrays provide data redundancy for availability.', 2: 'Load balancers distribute traffic for availability.', 3: 'UPS systems provide power backup for availability.' } });
            T.push({ q: 'An employee accidentally sends a file containing PII to an unauthorized recipient. Which CIA principle was violated?', o: ['Confidentiality', 'Integrity', 'Availability', 'Authentication'], ci: 0, hint: 'Unauthorized access to data relates to which principle?', ec: 'Confidentiality was violated because PII was disclosed to an unauthorized person.', ei: { 1: 'Integrity would be violated if the data was modified.', 2: 'Availability relates to system uptime, not data disclosure.', 3: 'Authentication is about verifying identity, not data exposure.' } });
        }
        if (sub === 'Integrity') {
            T.push({ q: 'A hacker modifies financial records in a database without authorization. Which element of the CIA triad has been compromised?', o: ['Integrity', 'Confidentiality', 'Availability', 'Accountability'], ci: 0, hint: 'This involves unauthorized modification of data.', ec: 'Integrity ensures data remains accurate and unaltered. Unauthorized modification directly violates this principle.', ei: { 1: 'Confidentiality involves unauthorized viewing of data, not modification.', 2: 'Availability relates to system uptime.', 3: 'Accountability tracks user actions but is not a CIA triad element.' } });
            T.push({ q: 'Which of the following BEST ensures data integrity during transmission?', o: ['Hashing algorithms', 'Firewalls', 'VPN tunnels', 'Access control lists'], ci: 0, hint: 'Think about verifying data has not been tampered with.', ec: 'Hashing algorithms like SHA-256 create a digest that can verify data has not been modified during transit.', ei: { 1: 'Firewalls filter network traffic but do not verify data integrity.', 2: 'VPNs encrypt data in transit (confidentiality) but do not inherently verify integrity.', 3: 'ACLs control access permissions, not data integrity verification.' } });
        }
        if (sub === 'Availability') {
            T.push({ q: 'A DDoS attack brings down a company\'s web server. Which CIA triad element is primarily affected?', o: ['Availability', 'Confidentiality', 'Integrity', 'Non-repudiation'], ci: 0, hint: 'The server is unable to serve legitimate requests.', ec: 'Availability is compromised when systems become inaccessible to legitimate users, which is the primary goal of DDoS attacks.', ei: { 1: 'Confidentiality involves unauthorized data access, not service disruption.', 2: 'Integrity involves unauthorized data modification.', 3: 'Non-repudiation is about proving actions occurred.' } });
        }
    }
    if (topic === 'AAA Framework') {
        T.push({ q: 'Which AAA component verifies a user\'s identity before granting system access?', o: ['Authentication', 'Authorization', 'Accounting', 'Auditing'], ci: 0, hint: 'This is the first step in the AAA process.', ec: 'Authentication verifies identity using credentials like passwords, biometrics, or tokens before any access is granted.', ei: { 1: 'Authorization determines what resources an authenticated user can access.', 2: 'Accounting tracks and logs user activities after authentication.', 3: 'Auditing reviews logs but is not a core AAA component.' } });
        T.push({ q: 'After a user logs in, the system determines they can only read files but not modify them. Which AAA component is responsible?', o: ['Authorization', 'Authentication', 'Accounting', 'Identification'], ci: 0, hint: 'This determines permissions after identity verification.', ec: 'Authorization determines what actions and resources a user is permitted to access after authentication.', ei: { 1: 'Authentication only verifies identity; it does not assign permissions.', 2: 'Accounting tracks what users do; it does not assign permissions.', 3: 'Identification is providing a username; it does not assign permissions.' } });
    }
    if (topic === 'Security Controls') {
        T.push({ q: 'A security guard stationed at a building entrance is an example of which type of security control?', o: ['Physical deterrent', 'Technical preventive', 'Managerial detective', 'Operational corrective'], ci: 0, hint: 'Consider both the category and function of this control.', ec: 'A security guard is a physical control (tangible) that also serves as a deterrent by discouraging unauthorized entry.', ei: { 1: 'Technical controls involve technology like firewalls and encryption.', 2: 'Managerial controls are policies and procedures, not physical presence.', 3: 'Operational corrective controls fix issues after they occur.' } });
        T.push({ q: 'An IDS that alerts administrators of suspicious network activity is BEST classified as which type of control?', o: ['Technical detective', 'Technical preventive', 'Operational deterrent', 'Physical compensating'], ci: 0, hint: 'IDS detects threats but does not automatically block them.', ec: 'An IDS is a technical control (uses technology) that serves a detective function (identifies threats after they occur).', ei: { 1: 'Preventive controls stop threats before they happen; an IDS only detects.', 2: 'Deterrent controls discourage actions; an IDS detects them.', 3: 'Physical controls involve tangible barriers, not software.' } });
    }
    if (topic === 'Zero Trust') {
        T.push({ q: 'Which Zero Trust component is responsible for making access decisions based on policies?', o: ['Policy Engine', 'Policy Enforcement Point', 'Data Plane', 'Control Plane'], ci: 0, hint: 'This component evaluates policies before granting access.', ec: 'The Policy Engine evaluates access requests against defined security policies to make allow/deny decisions.', ei: { 1: 'The Policy Enforcement Point enforces the decision but doesn\'t make it.', 2: 'The Data Plane carries the actual traffic.', 3: 'The Control Plane is the overall framework, not the specific decision maker.' } });
    }
    if (topic === 'Cryptography Concepts') {
        T.push({ q: 'Which encryption type uses the SAME key for both encryption and decryption?', o: ['Symmetric encryption', 'Asymmetric encryption', 'Hashing', 'Digital signatures'], ci: 0, hint: 'One key serves dual purposes.', ec: 'Symmetric encryption (e.g., AES) uses a single shared key for both encryption and decryption, making it fast but requiring secure key distribution.', ei: { 1: 'Asymmetric encryption uses a key pair (public/private).', 2: 'Hashing is one-way and does not use keys for decryption.', 3: 'Digital signatures use asymmetric keys for verification, not shared keys.' } });
        T.push({ q: 'Which algorithm provides a fixed-length output regardless of input size and is NOT reversible?', o: ['SHA-256', 'AES-256', 'RSA', 'Diffie-Hellman'], ci: 0, hint: 'This produces a digest or fingerprint of data.', ec: 'SHA-256 is a hashing algorithm that produces a fixed 256-bit output and cannot be reversed to obtain the original input.', ei: { 1: 'AES-256 is a symmetric encryption algorithm that is reversible with the key.', 2: 'RSA is an asymmetric encryption algorithm used for encryption and signatures.', 3: 'Diffie-Hellman is a key exchange protocol, not a hashing algorithm.' } });
    }
    return T;
}

function getDomain2Templates(topic, sub) {
    const T = [];
    if (topic === 'Threat Actors') {
        T.push({ q: 'A well-funded group sponsored by a foreign government conducts a prolonged cyber espionage campaign. What type of threat actor is this?', o: ['Nation-state', 'Hacktivist', 'Script kiddie', 'Insider threat'], ci: 0, hint: 'Government backing and espionage are key indicators.', ec: 'Nation-state actors are government-sponsored, well-funded, and conduct sophisticated, long-term campaigns for espionage or disruption.', ei: { 1: 'Hacktivists are motivated by ideology, not government sponsorship.', 2: 'Script kiddies lack the sophistication for prolonged espionage.', 3: 'Insider threats originate from within the organization.' } });
        T.push({ q: 'An employee who is unhappy with their employer deliberately leaks sensitive documents. This is an example of:', o: ['Insider threat', 'Nation-state actor', 'Hacktivist', 'Organized crime'], ci: 0, hint: 'The threat comes from within the organization.', ec: 'Insider threats originate from current or former employees who misuse their authorized access to harm the organization.', ei: { 1: 'Nation-state actors are government-sponsored external attackers.', 2: 'Hacktivists are external actors motivated by political or social causes.', 3: 'Organized crime groups are external and financially motivated.' } });
    }
    if (topic === 'Social Engineering') {
        T.push({ q: 'An attacker sends a targeted email to the CEO impersonating the CFO, requesting an urgent wire transfer. This attack is BEST described as:', o: ['Whaling', 'Phishing', 'Vishing', 'Smishing'], ci: 0, hint: 'This targets a high-profile executive specifically.', ec: 'Whaling is a form of spear phishing specifically targeting high-profile individuals like executives (the "big fish").', ei: { 1: 'Phishing is a general untargeted email attack.', 2: 'Vishing uses voice/phone calls, not email.', 3: 'Smishing uses SMS text messages, not email.' } });
        T.push({ q: 'An attacker compromises a website frequently visited by employees of a target company. What type of attack is this?', o: ['Watering hole', 'Phishing', 'Pretexting', 'Tailgating'], ci: 0, hint: 'Think of where prey gathers to drink.', ec: 'A watering hole attack compromises a website commonly used by the target group, infecting visitors with malware.', ei: { 1: 'Phishing uses fraudulent emails, not compromised websites.', 2: 'Pretexting creates a fabricated scenario to extract information.', 3: 'Tailgating is physical access by following an authorized person.' } });
        T.push({ q: 'An attacker registers "g00gle.com" hoping users will mistype the legitimate URL. This is known as:', o: ['Typosquatting', 'DNS poisoning', 'URL hijacking', 'Pharming'], ci: 0, hint: 'The domain name closely resembles the legitimate one with intentional typos.', ec: 'Typosquatting registers domains similar to legitimate ones, exploiting common typing errors to redirect users to malicious sites.', ei: { 1: 'DNS poisoning corrupts DNS cache entries.', 2: 'URL hijacking is a broader term; typosquatting is the specific technique here.', 3: 'Pharming redirects traffic at the DNS level, not through misspelled domains.' } });
    }
    if (topic === 'Malware Types') {
        T.push({ q: 'A user downloads a free game that secretly installs a keylogger. This malware is classified as a:', o: ['Trojan', 'Worm', 'Ransomware', 'Rootkit'], ci: 0, hint: 'It disguises itself as something legitimate.', ec: 'A Trojan disguises itself as legitimate software while carrying a hidden malicious payload, like the mythological Trojan horse.', ei: { 1: 'Worms self-replicate across networks without user interaction.', 2: 'Ransomware encrypts files and demands payment.', 3: 'Rootkits hide deep in the system to maintain persistent access.' } });
        T.push({ q: 'Malware that encrypts all files on a system and demands cryptocurrency payment is known as:', o: ['Ransomware', 'Spyware', 'Rootkit', 'Logic bomb'], ci: 0, hint: 'The attacker demands payment to restore access.', ec: 'Ransomware encrypts victim files and demands a ransom (usually in cryptocurrency) for the decryption key.', ei: { 1: 'Spyware silently monitors activity but does not encrypt files.', 2: 'Rootkits provide hidden persistent access but do not encrypt files.', 3: 'Logic bombs trigger on specific conditions but do not demand payment.' } });
    }
    if (topic === 'Network Attacks') {
        T.push({ q: 'An attacker floods a web server with thousands of SYN packets without completing the TCP handshake. This is a:', o: ['SYN flood (DDoS)', 'DNS poisoning', 'ARP spoofing', 'Replay attack'], ci: 0, hint: 'The TCP three-way handshake is left incomplete.', ec: 'A SYN flood overwhelms a server by sending many SYN packets without completing the handshake, exhausting server resources.', ei: { 1: 'DNS poisoning corrupts DNS records to redirect traffic.', 2: 'ARP spoofing associates the attacker\'s MAC with a legitimate IP.', 3: 'Replay attacks retransmit captured valid data packets.' } });
        T.push({ q: 'An attacker intercepts communication between two parties, secretly relaying and possibly altering messages. This describes:', o: ['Man-in-the-Middle (On-path) attack', 'Replay attack', 'DDoS attack', 'Password spraying'], ci: 0, hint: 'The attacker sits between two communicating parties.', ec: 'A Man-in-the-Middle (on-path) attack allows the attacker to intercept, read, and modify communications between two parties.', ei: { 1: 'Replay attacks retransmit previously captured data without real-time interception.', 2: 'DDoS attacks overwhelm services with traffic, they don\'t intercept communications.', 3: 'Password spraying tries common passwords against many accounts.' } });
    }
    if (topic === 'Application Attacks') {
        T.push({ q: 'An attacker inputs \' OR 1=1 -- into a login form. This is an example of:', o: ['SQL injection', 'Cross-site scripting', 'Buffer overflow', 'CSRF'], ci: 0, hint: 'The input manipulates a database query.', ec: 'SQL injection inserts malicious SQL code into input fields to manipulate database queries, potentially bypassing authentication.', ei: { 1: 'XSS injects malicious scripts into web pages viewed by other users.', 2: 'Buffer overflow writes data beyond allocated memory boundaries.', 3: 'CSRF tricks users into performing unwanted actions on authenticated sites.' } });
        T.push({ q: 'An attacker injects a malicious JavaScript payload into a forum post that executes in other users\' browsers. This is:', o: ['Stored XSS (Cross-Site Scripting)', 'SQL injection', 'CSRF', 'Directory traversal'], ci: 0, hint: 'The malicious script is permanently stored on the server.', ec: 'Stored XSS permanently injects malicious scripts into a web application that execute in every visitor\'s browser.', ei: { 1: 'SQL injection targets databases, not browser-side script execution.', 2: 'CSRF forces users to perform actions, not execute scripts.', 3: 'Directory traversal accesses unauthorized files on the server.' } });
    }
    if (topic === 'Vulnerability Types') {
        T.push({ q: 'A newly discovered vulnerability with no available patch is known as:', o: ['Zero-day vulnerability', 'Misconfiguration', 'Default credential exposure', 'Legacy vulnerability'], ci: 0, hint: 'No fix exists yet for this vulnerability.', ec: 'A zero-day vulnerability is unknown to the vendor and has no patch available, making it extremely dangerous.', ei: { 1: 'Misconfiguration is a known issue caused by improper setup.', 2: 'Default credentials are a known, preventable vulnerability.', 3: 'Legacy vulnerabilities exist in old, known-about systems.' } });
    }
    if (topic === 'Mitigation Techniques') {
        T.push({ q: 'Which mitigation technique divides a network into isolated segments to limit lateral movement?', o: ['Network segmentation', 'Encryption', 'Patching', 'Input validation'], ci: 0, hint: 'This creates boundaries within the network.', ec: 'Network segmentation isolates parts of the network, preventing an attacker from moving laterally across the entire infrastructure.', ei: { 1: 'Encryption protects data confidentiality but doesn\'t limit movement.', 2: 'Patching fixes known vulnerabilities but doesn\'t segment the network.', 3: 'Input validation prevents injection attacks at the application layer.' } });
    }
    return T;
}

function getDomain3Templates(topic, sub) {
    const T = [];
    if (topic === 'Network Architecture') {
        T.push({ q: 'A network zone that sits between the internal network and the internet, hosting public-facing servers, is called a:', o: ['DMZ (Demilitarized Zone)', 'VLAN', 'VPN', 'Air gap'], ci: 0, hint: 'This zone provides a buffer between trusted and untrusted networks.', ec: 'A DMZ is a perimeter network that hosts public-facing services while protecting the internal network from direct internet access.', ei: { 1: 'VLANs segment traffic logically but are not specifically a buffer zone.', 2: 'VPNs encrypt connections but are not a network zone.', 3: 'An air gap is complete physical isolation, not a buffer zone.' } });
        T.push({ q: 'Which technique provides the MOST complete isolation between two networks?', o: ['Air gap', 'VLAN', 'Firewall rules', 'ACL'], ci: 0, hint: 'No physical or logical connection exists.', ec: 'An air gap provides complete physical isolation between networks with no connectivity, offering the highest level of separation.', ei: { 1: 'VLANs logically separate traffic but share physical infrastructure.', 2: 'Firewall rules filter traffic but still maintain connectivity.', 3: 'ACLs restrict access but networks remain connected.' } });
    }
    if (topic === 'Cloud Security') {
        T.push({ q: 'In which cloud model is the customer responsible for managing the operating system and applications?', o: ['IaaS', 'PaaS', 'SaaS', 'FaaS'], ci: 0, hint: 'The provider manages only the underlying infrastructure.', ec: 'In IaaS, the cloud provider manages hardware/networking while the customer manages OS, middleware, runtime, and applications.', ei: { 1: 'In PaaS, the provider also manages the OS, middleware, and runtime.', 2: 'In SaaS, the provider manages everything; the customer only uses the application.', 3: 'FaaS (serverless) abstracts even more; the provider manages everything except the code.' } });
        T.push({ q: 'Which cloud security solution acts as an intermediary between users and cloud services to enforce security policies?', o: ['CASB (Cloud Access Security Broker)', 'WAF', 'SIEM', 'DLP'], ci: 0, hint: 'It brokers the connection between users and cloud applications.', ec: 'A CASB sits between users and cloud services to enforce security policies, provide visibility, and protect data.', ei: { 1: 'A WAF protects web applications from attacks, not cloud service access.', 2: 'A SIEM collects and analyzes security logs.', 3: 'DLP prevents data loss but doesn\'t specifically broker cloud access.' } });
    }
    if (topic === 'Secure Infrastructure') {
        T.push({ q: 'Which security device inspects incoming web traffic and blocks common web application attacks like SQL injection?', o: ['WAF (Web Application Firewall)', 'Network firewall', 'IDS', 'NAC'], ci: 0, hint: 'This specifically protects web applications.', ec: 'A WAF inspects HTTP/HTTPS traffic and blocks web application attacks like SQL injection, XSS, and CSRF.', ei: { 1: 'Network firewalls filter traffic at layers 3-4, not application-layer web attacks.', 2: 'An IDS detects threats but does not actively block them.', 3: 'NAC controls network access based on device compliance.' } });
        T.push({ q: 'What is the PRIMARY difference between an IDS and an IPS?', o: ['IPS actively blocks threats; IDS only alerts', 'IDS is hardware; IPS is software', 'IDS works at Layer 7; IPS at Layer 3', 'IPS is passive; IDS is active'], ci: 0, hint: 'One takes action, the other only reports.', ec: 'An IPS (Intrusion Prevention System) actively blocks detected threats, while an IDS (Intrusion Detection System) only generates alerts.', ei: { 1: 'Both can be hardware or software-based.', 2: 'Both can operate at multiple network layers.', 3: 'IPS is active (blocks), IDS is passive (alerts only) – the answer has them reversed.' } });
    }
    if (topic === 'Data Protection') {
        T.push({ q: 'Which technology replaces sensitive data with non-sensitive placeholder values while maintaining format?', o: ['Tokenization', 'Encryption', 'Hashing', 'Data masking'], ci: 0, hint: 'The original data is stored separately and replaced with tokens.', ec: 'Tokenization replaces sensitive data with non-sensitive tokens. The original data is stored in a secure token vault.', ei: { 1: 'Encryption transforms data using algorithms and keys, changing the format.', 2: 'Hashing creates a fixed-length digest and is irreversible.', 3: 'Data masking partially hides data (e.g., showing only last 4 digits) but doesn\'t replace it with tokens.' } });
    }
    if (topic === 'Resilience') {
        T.push({ q: 'Which RAID level provides disk mirroring for redundancy?', o: ['RAID 1', 'RAID 0', 'RAID 5', 'RAID 10'], ci: 0, hint: 'Data is written identically to two drives.', ec: 'RAID 1 mirrors data across two drives, providing full redundancy. If one drive fails, the mirror contains a complete copy.', ei: { 1: 'RAID 0 uses striping for performance but has NO redundancy.', 2: 'RAID 5 uses striping with distributed parity, not mirroring.', 3: 'RAID 10 combines striping and mirroring, but the question asks specifically about mirroring.' } });
        T.push({ q: 'The maximum acceptable amount of data loss measured in time is known as:', o: ['RPO (Recovery Point Objective)', 'RTO (Recovery Time Objective)', 'MTTR', 'MTBF'], ci: 0, hint: 'How far back in time can you afford to lose data?', ec: 'RPO defines the maximum acceptable data loss measured in time – how old the most recent backup can be.', ei: { 1: 'RTO is the maximum acceptable downtime after a disaster.', 2: 'MTTR is the average time to repair a failed component.', 3: 'MTBF is the average time between system failures.' } });
    }
    return T;
}

function getDomain4Templates(topic, sub) {
    const T = [];
    if (topic === 'Monitoring') {
        T.push({ q: 'Which technology aggregates logs from multiple sources and correlates events to detect security incidents?', o: ['SIEM', 'SOAR', 'IDS', 'EDR'], ci: 0, hint: 'It collects, correlates, and analyzes log data.', ec: 'A SIEM (Security Information and Event Management) collects logs from multiple sources and uses correlation rules to identify threats.', ei: { 1: 'SOAR automates incident response workflows but doesn\'t primarily aggregate logs.', 2: 'IDS monitors network traffic for threats, not log aggregation.', 3: 'EDR monitors endpoints, not centralized log management.' } });
        T.push({ q: 'Which solution automates incident response playbooks and orchestrates security tools?', o: ['SOAR', 'SIEM', 'EDR', 'NAC'], ci: 0, hint: 'Think automation and orchestration of security workflows.', ec: 'SOAR (Security Orchestration, Automation, and Response) automates repetitive security tasks and orchestrates multiple tools.', ei: { 1: 'SIEM aggregates and correlates logs but doesn\'t automate response.', 2: 'EDR detects and responds to endpoint threats specifically.', 3: 'NAC controls network access based on device compliance.' } });
    }
    if (topic === 'Vulnerability Management') {
        T.push({ q: 'Which scoring system rates the severity of security vulnerabilities on a scale of 0 to 10?', o: ['CVSS', 'CVE', 'CWE', 'CPE'], ci: 0, hint: 'It provides a numerical severity score.', ec: 'CVSS (Common Vulnerability Scoring System) rates vulnerabilities 0-10 based on impact, exploitability, and other factors.', ei: { 1: 'CVE is an identifier system (e.g., CVE-2024-1234), not a scoring system.', 2: 'CWE categorizes software weakness types, not severity scores.', 3: 'CPE identifies specific software products, not vulnerability severity.' } });
        T.push({ q: 'A security team is authorized to attempt to exploit vulnerabilities in a system to test its defenses. This is:', o: ['Penetration testing', 'Vulnerability scanning', 'Risk assessment', 'Compliance audit'], ci: 0, hint: 'Active, authorized exploitation attempts.', ec: 'Penetration testing involves authorized simulated attacks to identify exploitable vulnerabilities and assess security effectiveness.', ei: { 1: 'Vulnerability scanning identifies potential vulnerabilities but does not exploit them.', 2: 'Risk assessment evaluates overall organizational risk, not specific exploits.', 3: 'Compliance audits check adherence to standards, not active exploitation.' } });
    }
    if (topic === 'Incident Response') {
        T.push({ q: 'What is the CORRECT order of the incident response phases?', o: ['Preparation, Detection, Analysis, Containment, Eradication, Recovery, Lessons Learned', 'Detection, Preparation, Containment, Recovery, Eradication, Lessons Learned', 'Containment, Detection, Analysis, Eradication, Recovery, Preparation', 'Analysis, Detection, Containment, Preparation, Recovery, Eradication'], ci: 0, hint: 'Preparation always comes first.', ec: 'The NIST IR lifecycle follows: Preparation → Detection & Analysis → Containment → Eradication → Recovery → Lessons Learned.', ei: { 1: 'Detection cannot come before Preparation – teams must be prepared first.', 2: 'Containment requires detection first; you must find the threat before containing it.', 3: 'Analysis follows detection, and preparation must come before any response.' } });
        T.push({ q: 'During which incident response phase are infected systems isolated to prevent further damage?', o: ['Containment', 'Eradication', 'Recovery', 'Detection'], ci: 0, hint: 'The goal is to stop the spread.', ec: 'Containment isolates affected systems to prevent the incident from spreading while preserving evidence for analysis.', ei: { 1: 'Eradication removes the threat; containment isolates it first.', 2: 'Recovery restores systems to normal operation after eradication.', 3: 'Detection identifies the incident but doesn\'t isolate systems.' } });
    }
    if (topic === 'Identity Management') {
        T.push({ q: 'Which authentication method requires MULTIPLE different types of verification factors?', o: ['MFA (Multi-Factor Authentication)', 'SSO', 'LDAP', 'RADIUS'], ci: 0, hint: 'Something you know, have, and/or are.', ec: 'MFA requires two or more different authentication factors: something you know, something you have, and/or something you are.', ei: { 1: 'SSO allows one login for multiple applications but doesn\'t require multiple factors.', 2: 'LDAP is a directory service protocol, not an authentication method requiring multiple factors.', 3: 'RADIUS is an authentication protocol but doesn\'t inherently require multiple factors.' } });
        T.push({ q: 'Which protocol allows a user to log in once and access multiple applications without re-authenticating?', o: ['SSO (Single Sign-On)', 'MFA', 'RADIUS', 'TACACS+'], ci: 0, hint: 'One login, many applications.', ec: 'SSO enables users to authenticate once and gain access to multiple related applications without repeated logins.', ei: { 1: 'MFA requires multiple authentication factors but doesn\'t provide single sign-on.', 2: 'RADIUS authenticates users but doesn\'t inherently provide SSO.', 3: 'TACACS+ provides authentication for network devices, not SSO for applications.' } });
    }
    if (topic === 'Access Control') {
        T.push({ q: 'Which access control model assigns permissions based on a user\'s job function or position?', o: ['RBAC (Role-Based Access Control)', 'DAC', 'MAC', 'ABAC'], ci: 0, hint: 'Permissions are tied to roles, not individual users.', ec: 'RBAC assigns permissions based on organizational roles. Users inherit permissions from their assigned role.', ei: { 1: 'DAC allows resource owners to set permissions at their discretion.', 2: 'MAC uses security labels and clearance levels set by administrators.', 3: 'ABAC uses attributes (location, time, etc.) for dynamic access decisions.' } });
    }
    if (topic === 'Endpoint Security') {
        T.push({ q: 'Which solution provides continuous monitoring, threat detection, and automated response specifically for endpoint devices?', o: ['EDR (Endpoint Detection and Response)', 'SIEM', 'IPS', 'NAC'], ci: 0, hint: 'It focuses on laptops, desktops, and servers.', ec: 'EDR continuously monitors endpoints for suspicious behavior and provides automated response capabilities.', ei: { 1: 'SIEM aggregates logs from all sources, not endpoint-specific monitoring.', 2: 'IPS monitors and blocks network-level threats.', 3: 'NAC controls network access but doesn\'t monitor endpoint behavior.' } });
    }
    if (topic === 'Alert Management') {
        T.push({ q: 'A security tool generates an alert for a legitimate attack that is actually occurring. This is classified as a:', o: ['True positive', 'False positive', 'True negative', 'False negative'], ci: 0, hint: 'The alert is correct – there IS a real threat.', ec: 'A true positive occurs when a security tool correctly identifies a real threat and generates an appropriate alert.', ei: { 1: 'A false positive alerts on a non-existent threat (false alarm).', 2: 'A true negative correctly identifies normal activity as safe.', 3: 'A false negative fails to detect an actual threat (missed detection).' } });
    }
    return T;
}

function getDomain5Templates(topic, sub) {
    const T = [];
    if (topic === 'Governance') {
        T.push({ q: 'Which document type defines the high-level goals and direction for an organization\'s security program?', o: ['Security policy', 'Standard', 'Procedure', 'Guideline'], ci: 0, hint: 'This is the broadest and most authoritative document.', ec: 'Security policies define the overall security goals, requirements, and management direction. They are mandatory and approved by leadership.', ei: { 1: 'Standards define specific requirements to implement policies.', 2: 'Procedures provide step-by-step instructions for specific tasks.', 3: 'Guidelines are recommendations, not mandatory requirements.' } });
    }
    if (topic === 'Risk Management') {
        T.push({ q: 'An organization decides to purchase cyber insurance to handle potential financial losses. This is an example of:', o: ['Risk transference', 'Risk acceptance', 'Risk avoidance', 'Risk mitigation'], ci: 0, hint: 'The financial burden is shifted to another party.', ec: 'Risk transference shifts the financial impact of a risk to a third party, such as through insurance or outsourcing.', ei: { 1: 'Risk acceptance means acknowledging the risk without taking action.', 2: 'Risk avoidance eliminates the risk entirely by not engaging in the risky activity.', 3: 'Risk mitigation reduces the likelihood or impact of the risk through controls.' } });
        T.push({ q: 'A risk assessment approach that uses numerical values like ALE, SLE, and ARO is:', o: ['Quantitative risk analysis', 'Qualitative risk analysis', 'Risk register', 'Risk matrix'], ci: 0, hint: 'Think numbers and monetary values.', ec: 'Quantitative risk analysis uses specific numerical values (ALE = SLE × ARO) to calculate financial impact.', ei: { 1: 'Qualitative analysis uses subjective ratings (high/medium/low), not numerical values.', 2: 'A risk register is a document that tracks risks, not an analysis method.', 3: 'A risk matrix visualizes likelihood vs. impact but doesn\'t use ALE/SLE/ARO formulas.' } });
    }
    if (topic === 'Compliance') {
        T.push({ q: 'Which regulation specifically governs the protection of personal data for EU citizens?', o: ['GDPR', 'HIPAA', 'PCI DSS', 'SOX'], ci: 0, hint: 'This is a European Union regulation.', ec: 'GDPR (General Data Protection Regulation) governs data privacy and protection for all EU citizens and residents.', ei: { 1: 'HIPAA protects healthcare information in the United States.', 2: 'PCI DSS regulates payment card data security.', 3: 'SOX governs financial reporting and auditing for US public companies.' } });
        T.push({ q: 'Which standard is REQUIRED for organizations that process, store, or transmit credit card data?', o: ['PCI DSS', 'ISO 27001', 'NIST CSF', 'SOC 2'], ci: 0, hint: 'This relates to payment card security.', ec: 'PCI DSS (Payment Card Industry Data Security Standard) is mandatory for all organizations handling credit card data.', ei: { 1: 'ISO 27001 is a voluntary information security management standard.', 2: 'NIST CSF is a voluntary cybersecurity framework.', 3: 'SOC 2 is a voluntary audit framework for service organizations.' } });
    }
    if (topic === 'Security Awareness') {
        T.push({ q: 'Which security awareness technique involves sending simulated phishing emails to test employee awareness?', o: ['Phishing campaign simulation', 'Tabletop exercise', 'Red team exercise', 'Vulnerability scan'], ci: 0, hint: 'Employees receive fake phishing emails to measure their response.', ec: 'Phishing simulations send controlled fake phishing emails to measure and improve employee awareness of social engineering.', ei: { 1: 'Tabletop exercises discuss scenarios verbally; they don\'t send actual emails.', 2: 'Red team exercises are broader adversary simulations, not targeted email tests.', 3: 'Vulnerability scans test systems, not human awareness.' } });
    }
    if (topic === 'Third-Party Risk') {
        T.push({ q: 'Which agreement defines the expected performance metrics and responsibilities between a service provider and client?', o: ['SLA (Service Level Agreement)', 'NDA', 'MOU', 'BPA'], ci: 0, hint: 'It specifies uptime, response time, and service quality.', ec: 'An SLA defines measurable performance metrics (uptime, response time) and penalties for non-compliance.', ei: { 1: 'An NDA protects confidential information shared between parties.', 2: 'An MOU expresses mutual intent but is less binding than an SLA.', 3: 'A BPA defines how business partners work together, not specific performance metrics.' } });
    }
    if (topic === 'Business Continuity') {
        T.push({ q: 'Which document identifies critical business functions and the impact of their disruption?', o: ['BIA (Business Impact Analysis)', 'BCP', 'DRP', 'Incident Response Plan'], ci: 0, hint: 'It analyzes the IMPACT of business disruptions.', ec: 'A BIA identifies critical business functions, assesses the impact of disruptions, and determines recovery priorities.', ei: { 1: 'BCP is the overall plan for business continuity, informed by the BIA.', 2: 'DRP focuses specifically on IT disaster recovery.', 3: 'An IR plan addresses security incident response, not business function analysis.' } });
    }
    if (topic === 'Data Privacy') {
        T.push({ q: 'Information that can be used to directly or indirectly identify a specific individual is known as:', o: ['PII (Personally Identifiable Information)', 'PHI', 'IP', 'Metadata'], ci: 0, hint: 'Names, SSN, addresses are examples.', ec: 'PII includes any data that can identify an individual: name, SSN, address, email, phone number, biometrics, etc.', ei: { 1: 'PHI specifically refers to health-related information, a subset of sensitive data.', 2: 'IP (Intellectual Property) refers to proprietary business assets.', 3: 'Metadata describes data characteristics but typically doesn\'t identify individuals directly.' } });
    }
    return T;
}

// ============================================
// MAIN GENERATION
// ============================================
const outDir = path.join(__dirname, 'questions');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

let allQuestions = [];
let globalId = 1;

// Generate questions for each domain
for (const [domainNum, domainInfo] of Object.entries(DOMAINS)) {
    const dom = parseInt(domainNum);
    let domainQuestions = [];

    // Get all templates for this domain
    let allTemplates = [];
    for (const topicObj of domainInfo.topics) {
        for (const sub of topicObj.sub) {
            const templates = getTemplates(dom, topicObj.t, sub);
            templates.forEach(t => {
                allTemplates.push({ ...t, topic: topicObj.t, sub });
            });
        }
    }

    // Fill questions - cycle through templates and create variations
    let templateIdx = 0;
    for (let i = 0; i < domainInfo.count; i++) {
        const tmpl = allTemplates[templateIdx % allTemplates.length];
        templateIdx++;

        // Create question from template with slight variations for repeats
        const variation = Math.floor(templateIdx / allTemplates.length);
        let q = {
            id: globalId++,
            domain: dom,
            domainName: domainInfo.name,
            difficulty: pick(difficulties),
            question: tmpl.q,
            options: [...tmpl.o],
            correctIndex: tmpl.ci,
            hint: tmpl.hint,
            explanation: { correct: tmpl.ec, incorrect: { ...tmpl.ei } }
        };

        // For variations beyond first cycle, modify the question slightly
        if (variation > 0) {
            const prefixes = [
                'A security analyst needs to determine: ',
                'During a security audit, the team is asked: ',
                'A company is reviewing its security posture. ',
                'In a security assessment scenario, ',
                'An organization is implementing new security measures. ',
                'A junior technician asks: ',
                'For the Security+ exam, you should know: ',
                'Which statement is TRUE? ',
                'A security consultant is asked: ',
                'During incident investigation, the team must understand: '
            ];
            q.question = pick(prefixes) + q.question.charAt(0).toLowerCase() + q.question.slice(1);
            q.difficulty = pick(difficulties);
        }

        domainQuestions.push(q);
    }

    allQuestions = allQuestions.concat(domainQuestions);
}

// Write in blocks of 30
const blockSize = 30;
const totalBlocks = Math.ceil(allQuestions.length / blockSize);
const scriptTags = [];

for (let b = 0; b < totalBlocks; b++) {
    const start = b * blockSize;
    const end = Math.min(start + blockSize, allQuestions.length);
    const block = allQuestions.slice(start, end);
    const blockNum = String(b + 1).padStart(2, '0');
    const fileName = `block${blockNum}.js`;

    let content = `// Security+ SY0-701 - Questions ${start + 1} to ${end}\n`;
    content += `// Block ${b + 1} of ${totalBlocks}\n`;
    content += `window.QUESTIONS = (window.QUESTIONS || []).concat([\n`;

    block.forEach((q, i) => {
        content += JSON.stringify(q, null, 2);
        if (i < block.length - 1) content += ',';
        content += '\n';
    });

    content += ']);\n';

    fs.writeFileSync(path.join(outDir, fileName), content, 'utf8');
    scriptTags.push(`    <script src="questions/${fileName}"></script>`);
    console.log(`Created ${fileName} (questions ${start + 1}-${end})`);
}

// Write the script tags for easy copy-paste into HTML
console.log('\n--- Script tags for index.html ---');
console.log(scriptTags.join('\n'));
console.log(`\nTotal: ${allQuestions.length} questions in ${totalBlocks} blocks`);
