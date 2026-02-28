// Security+ SY0-701 - Questions 91 to 120
// Block 4 of 30
window.QUESTIONS = (window.QUESTIONS || []).concat([
{
  "id": 91,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.2",
  "subdomain_name": "Cryptography Concepts",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which encryption type uses the SAME key for both encryption and decryption Which answer BEST applies in an enterprise environment? [Variant 1-90]",
  "options": [
    "Symmetric encryption",
    "Asymmetric encryption",
    "Hashing",
    "Digital signatures"
  ],
  "correctIndex": 0,
  "hint": "One key serves dual purposes.",
  "explanation": {
    "correct": "Symmetric encryption (e.g., Advanced Encryption Standard (AES)) uses a single shared key for both encryption and decryption, making it fast but requiring secure key distribution.",
    "incorrect": {
      "1": "Asymmetric encryption uses a key pair (public/private).",
      "2": "Hashing is one-way and does not use keys for decryption.",
      "3": "Digital signatures use asymmetric keys for verification, not shared keys."
    }
  }
},
{
  "id": 92,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.2",
  "subdomain_name": "Cryptography Concepts",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which algorithm provides a fixed-length output regardless of input size and is NOT reversible Which answer BEST applies in an enterprise environment? [Variant 1-91]",
  "options": [
    "SHA-256",
    "AES-256",
    "RSA",
    "Diffie-Hellman"
  ],
  "correctIndex": 0,
  "hint": "This produces a digest or fingerprint of data.",
  "explanation": {
    "correct": "Secure Hash Algorithm (SHA)-256 is a hashing algorithm that produces a fixed 256-bit output and cannot be reversed to obtain the original input.",
    "incorrect": {
      "1": "Advanced Encryption Standard (AES)-256 is a symmetric encryption algorithm that is reversible with the key.",
      "2": "Rivest–Shamir–Adleman (RSA) is an asymmetric encryption algorithm used for encryption and signatures.",
      "3": "Diffie-Hellman is a key exchange protocol, not a hashing algorithm."
    }
  }
},
{
  "id": 93,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.5",
  "subdomain_name": "Change Management Security",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Rollback Plan in the context of Change Management Which answer BEST applies in an enterprise environment?",
  "options": [
    "It is a primary component of Change Management that ensures Rollback Plan functionality",
    "It is unrelated to Change Management",
    "It replaces all other aspects of Change Management",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Rollback Plan relates to the broader concept of Change Management.",
  "explanation": {
    "correct": "Rollback Plan is indeed a key component of Change Management and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Rollback Plan is directly related to Change Management.",
      "2": "Rollback Plan works alongside other components, it does not replace them.",
      "3": "Rollback Plan is used in modern systems as well."
    }
  }
},
{
  "id": 94,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST ensures data integrity during transmission Which answer BEST applies in an enterprise environment?",
  "options": [
    "Hashing algorithms",
    "Firewalls",
    "VPN tunnels",
    "Access control lists"
  ],
  "correctIndex": 0,
  "hint": "Think about verifying data has not been tampered with.",
  "explanation": {
    "correct": "Hashing algorithms like Secure Hash Algorithm (SHA)-256 create a digest that can verify data has not been modified during transit.",
    "incorrect": {
      "1": "Firewalls filter network traffic but do not verify data integrity.",
      "2": "VPNs encrypt data in transit (confidentiality) but do not inherently verify integrity.",
      "3": "ACLs control access permissions, not data integrity verification."
    }
  }
},
{
  "id": 95,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.4",
  "subdomain_name": "Zero Trust Architecture",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which Zero Trust component is responsible for making access decisions based on policies Which answer BEST applies in an enterprise environment? [Variant 1-94]",
  "options": [
    "Policy Engine",
    "Policy Enforcement Point",
    "Data Plane",
    "Control Plane"
  ],
  "correctIndex": 0,
  "hint": "This component evaluates policies before granting access.",
  "explanation": {
    "correct": "The Policy Engine evaluates access requests against defined security policies to make allow/deny decisions.",
    "incorrect": {
      "1": "The Policy Enforcement Point enforces the decision but doesn't make it.",
      "2": "The Data Plane carries the actual traffic.",
      "3": "The Control Plane is the overall framework, not the specific decision maker."
    }
  }
},
{
  "id": 96,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.6",
  "subdomain_name": "Gap Analysis",
  "difficulty": "medium",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Business Gap in the context of Gap Analysis Which answer BEST applies in an enterprise environment?",
  "options": [
    "It is a primary component of Gap Analysis that ensures Business Gap functionality",
    "It is unrelated to Gap Analysis",
    "It replaces all other aspects of Gap Analysis",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Business Gap relates to the broader concept of Gap Analysis.",
  "explanation": {
    "correct": "Business Gap is indeed a key component of Gap Analysis and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Business Gap is directly related to Gap Analysis.",
      "2": "Business Gap works alongside other components, it does not replace them.",
      "3": "Business Gap is used in modern systems as well."
    }
  }
},
{
  "id": 97,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.4",
  "subdomain_name": "Zero Trust Architecture",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which Zero Trust component is responsible for making access decisions based on policies Which answer BEST applies in an enterprise environment? [Variant 1-96]",
  "options": [
    "Policy Engine",
    "Policy Enforcement Point",
    "Data Plane",
    "Control Plane"
  ],
  "correctIndex": 0,
  "hint": "This component evaluates policies before granting access.",
  "explanation": {
    "correct": "The Policy Engine evaluates access requests against defined security policies to make allow/deny decisions.",
    "incorrect": {
      "1": "The Policy Enforcement Point enforces the decision but doesn't make it.",
      "2": "The Data Plane carries the actual traffic.",
      "3": "The Control Plane is the overall framework, not the specific decision maker."
    }
  }
},
{
  "id": 98,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: an IDS that alerts administrators of suspicious network activity is BEST classified as which type of control Which answer BEST applies in an enterprise environment? [Variant 1-97]",
  "options": [
    "Technical detective",
    "Technical preventive",
    "Operational deterrent",
    "Physical compensating"
  ],
  "correctIndex": 0,
  "hint": "IDS detects threats but does not automatically block them.",
  "explanation": {
    "correct": "An Intrusion Detection System (IDS) is a technical control (uses technology) that serves a detective function (identifies threats after they occur).",
    "incorrect": {
      "1": "Preventive controls stop threats before they happen; an Intrusion Detection System (IDS) only detects.",
      "2": "Deterrent controls discourage actions; an Intrusion Detection System (IDS) detects them.",
      "3": "Physical controls involve tangible barriers, not software."
    }
  }
},
{
  "id": 99,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: a security guard stationed at a building entrance is an example of which type of security control Which answer BEST applies in an enterprise environment? [Variant 1-98]",
  "options": [
    "Physical deterrent",
    "Technical preventive",
    "Managerial detective",
    "Operational corrective"
  ],
  "correctIndex": 0,
  "hint": "Consider both the category and function of this control.",
  "explanation": {
    "correct": "A security guard is a physical control (tangible) that also serves as a deterrent by discouraging unauthorized entry.",
    "incorrect": {
      "1": "Technical controls involve technology like firewalls and encryption.",
      "2": "Managerial controls are policies and procedures, not physical presence.",
      "3": "Operational corrective controls fix issues after they occur."
    }
  }
},
{
  "id": 100,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: an IDS that alerts administrators of suspicious network activity is BEST classified as which type of control Which answer BEST applies in an enterprise environment? [Variant 1-99]",
  "options": [
    "Technical detective",
    "Technical preventive",
    "Operational deterrent",
    "Physical compensating"
  ],
  "correctIndex": 0,
  "hint": "IDS detects threats but does not automatically block them.",
  "explanation": {
    "correct": "An Intrusion Detection System (IDS) is a technical control (uses technology) that serves a detective function (identifies threats after they occur).",
    "incorrect": {
      "1": "Preventive controls stop threats before they happen; an Intrusion Detection System (IDS) only detects.",
      "2": "Deterrent controls discourage actions; an Intrusion Detection System (IDS) detects them.",
      "3": "Physical controls involve tangible barriers, not software."
    }
  }
},
{
  "id": 101,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.2",
  "subdomain_name": "Cryptography Concepts",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which encryption type uses the SAME key for both encryption and decryption Which answer BEST applies in an enterprise environment? [Variant 1-100]",
  "options": [
    "Symmetric encryption",
    "Asymmetric encryption",
    "Hashing",
    "Digital signatures"
  ],
  "correctIndex": 0,
  "hint": "One key serves dual purposes.",
  "explanation": {
    "correct": "Symmetric encryption (e.g., Advanced Encryption Standard (AES)) uses a single shared key for both encryption and decryption, making it fast but requiring secure key distribution.",
    "incorrect": {
      "1": "Asymmetric encryption uses a key pair (public/private).",
      "2": "Hashing is one-way and does not use keys for decryption.",
      "3": "Digital signatures use asymmetric keys for verification, not shared keys."
    }
  }
},
{
  "id": 102,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.2",
  "subdomain_name": "Cryptography Concepts",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which algorithm provides a fixed-length output regardless of input size and is NOT reversible Which answer BEST applies in an enterprise environment? [Variant 1-101]",
  "options": [
    "SHA-256",
    "AES-256",
    "RSA",
    "Diffie-Hellman"
  ],
  "correctIndex": 0,
  "hint": "This produces a digest or fingerprint of data.",
  "explanation": {
    "correct": "Secure Hash Algorithm (SHA)-256 is a hashing algorithm that produces a fixed 256-bit output and cannot be reversed to obtain the original input.",
    "incorrect": {
      "1": "Advanced Encryption Standard (AES)-256 is a symmetric encryption algorithm that is reversible with the key.",
      "2": "Rivest–Shamir–Adleman (RSA) is an asymmetric encryption algorithm used for encryption and signatures.",
      "3": "Diffie-Hellman is a key exchange protocol, not a hashing algorithm."
    }
  }
},
{
  "id": 103,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.5",
  "subdomain_name": "Change Management Security",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Impact Analysis in the context of Change Management Which answer BEST applies in an enterprise environment?",
  "options": [
    "It is a primary component of Change Management that ensures Impact Analysis functionality",
    "It is unrelated to Change Management",
    "It replaces all other aspects of Change Management",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Impact Analysis relates to the broader concept of Change Management.",
  "explanation": {
    "correct": "Impact Analysis is indeed a key component of Change Management and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Impact Analysis is directly related to Change Management.",
      "2": "Impact Analysis works alongside other components, it does not replace them.",
      "3": "Impact Analysis is used in modern systems as well."
    }
  }
},
{
  "id": 104,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.4",
  "subdomain_name": "Zero Trust Architecture",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which Zero Trust component is responsible for making access decisions based on policies Which answer BEST applies in an enterprise environment? [Variant 1-103]",
  "options": [
    "Policy Engine",
    "Policy Enforcement Point",
    "Data Plane",
    "Control Plane"
  ],
  "correctIndex": 0,
  "hint": "This component evaluates policies before granting access.",
  "explanation": {
    "correct": "The Policy Engine evaluates access requests against defined security policies to make allow/deny decisions.",
    "incorrect": {
      "1": "The Policy Enforcement Point enforces the decision but doesn't make it.",
      "2": "The Data Plane carries the actual traffic.",
      "3": "The Control Plane is the overall framework, not the specific decision maker."
    }
  }
},
{
  "id": 105,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.3",
  "subdomain_name": "AAA Framework",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: after a user logs in, the system determines they can only read files but not modify them. Which AAA component is responsible Which answer BEST applies in an enterprise environment? [Variant 1-104]",
  "options": [
    "Authorization",
    "Authentication",
    "Accounting",
    "Identification"
  ],
  "correctIndex": 0,
  "hint": "This determines permissions after identity verification.",
  "explanation": {
    "correct": "Authorization determines what actions and resources a user is permitted to access after authentication.",
    "incorrect": {
      "1": "Authentication only verifies identity; it does not assign permissions.",
      "2": "Accounting tracks what users do; it does not assign permissions.",
      "3": "Identification is providing a username; it does not assign permissions."
    }
  }
},
{
  "id": 106,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.6",
  "subdomain_name": "Gap Analysis",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Technical Gap in the context of Gap Analysis Which answer BEST applies in an enterprise environment?",
  "options": [
    "It is a primary component of Gap Analysis that ensures Technical Gap functionality",
    "It is unrelated to Gap Analysis",
    "It replaces all other aspects of Gap Analysis",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Technical Gap relates to the broader concept of Gap Analysis.",
  "explanation": {
    "correct": "Technical Gap is indeed a key component of Gap Analysis and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Technical Gap is directly related to Gap Analysis.",
      "2": "Technical Gap works alongside other components, it does not replace them.",
      "3": "Technical Gap is used in modern systems as well."
    }
  }
},
{
  "id": 107,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "medium",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: a hacker modifies financial records in a database without authorization. Which element of the CIA triad has been compromised Which answer BEST applies in an enterprise environment?",
  "options": [
    "Integrity",
    "Confidentiality",
    "Availability",
    "Accountability"
  ],
  "correctIndex": 0,
  "hint": "This involves unauthorized modification of data.",
  "explanation": {
    "correct": "Integrity ensures data remains accurate and unaltered. Unauthorized modification directly violates this principle.",
    "incorrect": {
      "1": "Confidentiality involves unauthorized viewing of data, not modification.",
      "2": "Availability relates to system uptime.",
      "3": "Accountability tracks user actions but is not a CIA triad element."
    }
  }
},
{
  "id": 108,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.2",
  "subdomain_name": "Cryptography Concepts",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which algorithm provides a fixed-length output regardless of input size and is NOT reversible Which answer BEST applies in an enterprise environment? [Variant 1-107]",
  "options": [
    "SHA-256",
    "AES-256",
    "RSA",
    "Diffie-Hellman"
  ],
  "correctIndex": 0,
  "hint": "This produces a digest or fingerprint of data.",
  "explanation": {
    "correct": "Secure Hash Algorithm (SHA)-256 is a hashing algorithm that produces a fixed 256-bit output and cannot be reversed to obtain the original input.",
    "incorrect": {
      "1": "Advanced Encryption Standard (AES)-256 is a symmetric encryption algorithm that is reversible with the key.",
      "2": "Rivest–Shamir–Adleman (RSA) is an asymmetric encryption algorithm used for encryption and signatures.",
      "3": "Diffie-Hellman is a key exchange protocol, not a hashing algorithm."
    }
  }
},
{
  "id": 109,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "An attacker sends a targeted email to the CEO impersonating the CFO, requesting an urgent wire transfer. This attack is BEST described as:",
  "options": [
    "Whaling",
    "Phishing",
    "Vishing",
    "Smishing"
  ],
  "correctIndex": 0,
  "hint": "This targets a high-profile executive specifically.",
  "explanation": {
    "correct": "Whaling is a form of spear phishing specifically targeting high-profile individuals like executives (the \"big fish\").",
    "incorrect": {
      "1": "Phishing is a general untargeted email attack.",
      "2": "Vishing uses voice/phone calls, not email.",
      "3": "Smishing uses SMS text messages, not email."
    }
  }
},
{
  "id": 110,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "An attacker intercepts communication between two parties, secretly relaying and possibly altering messages. This describes:",
  "options": [
    "Man-in-the-Middle (On-path) attack",
    "Replay attack",
    "DDoS attack",
    "Password spraying"
  ],
  "correctIndex": 0,
  "hint": "The attacker sits between two communicating parties.",
  "explanation": {
    "correct": "A Man-in-the-Middle (on-path) attack allows the attacker to intercept, read, and modify communications between two parties.",
    "incorrect": {
      "1": "Replay attacks retransmit previously captured data without real-time interception.",
      "2": "Distributed Denial of Service (DDoS) attacks overwhelm services with traffic, they don't intercept communications.",
      "3": "Password spraying tries common passwords against many accounts."
    }
  }
},
{
  "id": 111,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.5",
  "subdomain_name": "Vulnerability Types and Indicators",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A newly discovered vulnerability with no available patch is known as:",
  "options": [
    "Zero-day vulnerability",
    "Misconfiguration",
    "Default credential exposure",
    "Legacy vulnerability"
  ],
  "correctIndex": 0,
  "hint": "No fix exists yet for this vulnerability.",
  "explanation": {
    "correct": "A zero-day vulnerability is unknown to the vendor and has no patch available, making it extremely dangerous.",
    "incorrect": {
      "1": "Misconfiguration is a known issue caused by improper setup.",
      "2": "Default credentials are a known, preventable vulnerability.",
      "3": "Legacy vulnerabilities exist in old, known-about systems."
    }
  }
},
{
  "id": 112,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "An attacker floods a web server with thousands of SYN packets without completing the TCP handshake. This is a:",
  "options": [
    "SYN flood (DDoS)",
    "DNS poisoning",
    "ARP spoofing",
    "Replay attack"
  ],
  "correctIndex": 0,
  "hint": "The TCP three-way handshake is left incomplete.",
  "explanation": {
    "correct": "A SYN flood overwhelms a server by sending many SYN packets without completing the handshake, exhausting server resources.",
    "incorrect": {
      "1": "Domain Name System (DNS) poisoning corrupts DNS records to redirect traffic.",
      "2": "Address Resolution Protocol (ARP) spoofing associates the attacker's Mandatory Access Control (MAC) with a legitimate IP.",
      "3": "Replay attacks retransmit captured valid data packets."
    }
  }
},
{
  "id": 113,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "An attacker inputs ' OR 1=1 -- into a login form. This is an example of:",
  "options": [
    "SQL injection",
    "Cross-site scripting",
    "Buffer overflow",
    "CSRF"
  ],
  "correctIndex": 0,
  "hint": "The input manipulates a database query.",
  "explanation": {
    "correct": "SQL injection inserts malicious SQL code into input fields to manipulate database queries, potentially bypassing authentication.",
    "incorrect": {
      "1": "Cross-Site Scripting (XSS) injects malicious scripts into web pages viewed by other users.",
      "2": "Buffer overflow writes data beyond allocated memory boundaries.",
      "3": "Cross-Site Request Forgery (CSRF) tricks users into performing unwanted actions on authenticated sites."
    }
  }
},
{
  "id": 114,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "An attacker floods a web server with thousands of SYN packets without completing the TCP handshake. This is a: [Variant 0-5]",
  "options": [
    "SYN flood (DDoS)",
    "DNS poisoning",
    "ARP spoofing",
    "Replay attack"
  ],
  "correctIndex": 0,
  "hint": "The TCP three-way handshake is left incomplete.",
  "explanation": {
    "correct": "A SYN flood overwhelms a server by sending many SYN packets without completing the handshake, exhausting server resources.",
    "incorrect": {
      "1": "Domain Name System (DNS) poisoning corrupts DNS records to redirect traffic.",
      "2": "Address Resolution Protocol (ARP) spoofing associates the attacker's Mandatory Access Control (MAC) with a legitimate IP.",
      "3": "Replay attacks retransmit captured valid data packets."
    }
  }
},
{
  "id": 115,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "An attacker injects a malicious JavaScript payload into a forum post that executes in other users' browsers. This is:",
  "options": [
    "Stored XSS (Cross-Site Scripting)",
    "SQL injection",
    "CSRF",
    "Directory traversal"
  ],
  "correctIndex": 0,
  "hint": "The malicious script is permanently stored on the server.",
  "explanation": {
    "correct": "Stored Cross-Site Scripting (XSS) permanently injects malicious scripts into a web application that execute in every visitor's browser.",
    "incorrect": {
      "1": "SQL injection targets databases, not browser-side script execution.",
      "2": "Cross-Site Request Forgery (CSRF) forces users to perform actions, not execute scripts.",
      "3": "Directory traversal accesses unauthorized files on the server."
    }
  }
},
{
  "id": 116,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "An attacker registers \"g00gle.com\" hoping users will mistype the legitimate URL. This is known as:",
  "options": [
    "Typosquatting",
    "DNS poisoning",
    "URL hijacking",
    "Pharming"
  ],
  "correctIndex": 0,
  "hint": "The domain name closely resembles the legitimate one with intentional typos.",
  "explanation": {
    "correct": "Typosquatting registers domains similar to legitimate ones, exploiting common typing errors to redirect users to malicious sites.",
    "incorrect": {
      "1": "Domain Name System (DNS) poisoning corrupts DNS cache entries.",
      "2": "URL hijacking is a broader term; typosquatting is the specific technique here.",
      "3": "Pharming redirects traffic at the Domain Name System (DNS) level, not through misspelled domains."
    }
  }
},
{
  "id": 117,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "An attacker injects a malicious JavaScript payload into a forum post that executes in other users' browsers. This is: [Variant 0-8]",
  "options": [
    "Stored XSS (Cross-Site Scripting)",
    "SQL injection",
    "CSRF",
    "Directory traversal"
  ],
  "correctIndex": 0,
  "hint": "The malicious script is permanently stored on the server.",
  "explanation": {
    "correct": "Stored Cross-Site Scripting (XSS) permanently injects malicious scripts into a web application that execute in every visitor's browser.",
    "incorrect": {
      "1": "SQL injection targets databases, not browser-side script execution.",
      "2": "Cross-Site Request Forgery (CSRF) forces users to perform actions, not execute scripts.",
      "3": "Directory traversal accesses unauthorized files on the server."
    }
  }
},
{
  "id": 118,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "An attacker intercepts communication between two parties, secretly relaying and possibly altering messages. This describes: [Variant 0-9]",
  "options": [
    "Man-in-the-Middle (On-path) attack",
    "Replay attack",
    "DDoS attack",
    "Password spraying"
  ],
  "correctIndex": 0,
  "hint": "The attacker sits between two communicating parties.",
  "explanation": {
    "correct": "A Man-in-the-Middle (on-path) attack allows the attacker to intercept, read, and modify communications between two parties.",
    "incorrect": {
      "1": "Replay attacks retransmit previously captured data without real-time interception.",
      "2": "Distributed Denial of Service (DDoS) attacks overwhelm services with traffic, they don't intercept communications.",
      "3": "Password spraying tries common passwords against many accounts."
    }
  }
},
{
  "id": 119,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "An attacker compromises a website frequently visited by employees of a target company. What type of attack is this?",
  "options": [
    "Watering hole",
    "Phishing",
    "Pretexting",
    "Tailgating"
  ],
  "correctIndex": 0,
  "hint": "Think of where prey gathers to drink.",
  "explanation": {
    "correct": "A watering hole attack compromises a website commonly used by the target group, infecting visitors with malware.",
    "incorrect": {
      "1": "Phishing uses fraudulent emails, not compromised websites.",
      "2": "Pretexting creates a fabricated scenario to extract information.",
      "3": "Tailgating is physical access by following an authorized person."
    }
  }
},
{
  "id": 120,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "An attacker intercepts communication between two parties, secretly relaying and possibly altering messages. This describes: [Variant 0-11]",
  "options": [
    "Man-in-the-Middle (On-path) attack",
    "Replay attack",
    "DDoS attack",
    "Password spraying"
  ],
  "correctIndex": 0,
  "hint": "The attacker sits between two communicating parties.",
  "explanation": {
    "correct": "A Man-in-the-Middle (on-path) attack allows the attacker to intercept, read, and modify communications between two parties.",
    "incorrect": {
      "1": "Replay attacks retransmit previously captured data without real-time interception.",
      "2": "Distributed Denial of Service (DDoS) attacks overwhelm services with traffic, they don't intercept communications.",
      "3": "Password spraying tries common passwords against many accounts."
    }
  }
}
]);
