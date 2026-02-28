// Security+ SY0-701 - Questions 31 to 60
// Block 2 of 30
window.QUESTIONS = (window.QUESTIONS || []).concat([
{
  "id": 31,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.2",
  "subdomain_name": "Cryptography Concepts",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which encryption type uses the SAME key for both encryption and decryption? [Variant 0-30]",
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
  "id": 32,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.2",
  "subdomain_name": "Cryptography Concepts",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which algorithm provides a fixed-length output regardless of input size and is NOT reversible? [Variant 0-31]",
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
      "2": "Rivest\u2013Shamir\u2013Adleman (RSA) is an asymmetric encryption algorithm used for encryption and signatures.",
      "3": "Diffie-Hellman is a key exchange protocol, not a hashing algorithm."
    }
  }
},
{
  "id": 33,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.5",
  "subdomain_name": "Change Management Security",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes Rollback Plan in the context of Change Management?",
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
  "id": 34,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST ensures data integrity during transmission?",
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
  "id": 35,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.4",
  "subdomain_name": "Zero Trust Architecture",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which Zero Trust component is responsible for making access decisions based on policies? [Variant 0-34]",
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
  "id": 36,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.6",
  "subdomain_name": "Gap Analysis",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes Business Gap in the context of Gap Analysis?",
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
  "id": 37,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.4",
  "subdomain_name": "Zero Trust Architecture",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which Zero Trust component is responsible for making access decisions based on policies? [Variant 0-36]",
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
  "id": 38,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "An IDS that alerts administrators of suspicious network activity is BEST classified as which type of control? [Variant 0-37]",
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
  "id": 39,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security guard stationed at a building entrance is an example of which type of security control? [Variant 0-38]",
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
  "id": 40,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "An IDS that alerts administrators of suspicious network activity is BEST classified as which type of control? [Variant 0-39]",
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
  "id": 41,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.2",
  "subdomain_name": "Cryptography Concepts",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which encryption type uses the SAME key for both encryption and decryption? [Variant 0-40]",
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
  "id": 42,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.2",
  "subdomain_name": "Cryptography Concepts",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which algorithm provides a fixed-length output regardless of input size and is NOT reversible? [Variant 0-41]",
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
      "2": "Rivest\u2013Shamir\u2013Adleman (RSA) is an asymmetric encryption algorithm used for encryption and signatures.",
      "3": "Diffie-Hellman is a key exchange protocol, not a hashing algorithm."
    }
  }
},
{
  "id": 43,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.5",
  "subdomain_name": "Change Management Security",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes Impact Analysis in the context of Change Management?",
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
  "id": 44,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.4",
  "subdomain_name": "Zero Trust Architecture",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which Zero Trust component is responsible for making access decisions based on policies? [Variant 0-43]",
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
  "id": 45,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.3",
  "subdomain_name": "AAA Framework",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "After a user logs in, the system determines they can only read files but not modify them. Which AAA component is responsible? [Variant 0-44]",
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
  "id": 46,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.6",
  "subdomain_name": "Gap Analysis",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes Technical Gap in the context of Gap Analysis?",
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
  "id": 47,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A hacker modifies financial records in a database without authorization. Which element of the CIA triad has been compromised?",
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
  "id": 48,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.2",
  "subdomain_name": "Cryptography Concepts",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which algorithm provides a fixed-length output regardless of input size and is NOT reversible? [Variant 0-47]",
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
      "2": "Rivest\u2013Shamir\u2013Adleman (RSA) is an asymmetric encryption algorithm used for encryption and signatures.",
      "3": "Diffie-Hellman is a key exchange protocol, not a hashing algorithm."
    }
  }
},
{
  "id": 49,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security guard stationed at a building entrance is an example of which type of security control? [Variant 0-48]",
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
  "id": 50,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.2",
  "subdomain_name": "Cryptography Concepts",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which encryption type uses the SAME key for both encryption and decryption? [Variant 0-49]",
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
  "id": 51,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.2",
  "subdomain_name": "Cryptography Concepts",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which algorithm provides a fixed-length output regardless of input size and is NOT reversible? [Variant 0-50]",
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
      "2": "Rivest\u2013Shamir\u2013Adleman (RSA) is an asymmetric encryption algorithm used for encryption and signatures.",
      "3": "Diffie-Hellman is a key exchange protocol, not a hashing algorithm."
    }
  }
},
{
  "id": 52,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.3",
  "subdomain_name": "AAA Framework",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "After a user logs in, the system determines they can only read files but not modify them. Which AAA component is responsible? [Variant 0-51]",
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
  "id": 53,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A DDoS attack brings down a company's web server. Which CIA triad element is primarily affected?",
  "options": [
    "Availability",
    "Confidentiality",
    "Integrity",
    "Non-repudiation"
  ],
  "correctIndex": 0,
  "hint": "The server is unable to serve legitimate requests.",
  "explanation": {
    "correct": "Availability is compromised when systems become inaccessible to legitimate users, which is the primary goal of Distributed Denial of Service (DDoS) attacks.",
    "incorrect": {
      "1": "Confidentiality involves unauthorized data access, not service disruption.",
      "2": "Integrity involves unauthorized data modification.",
      "3": "Non-repudiation is about proving actions occurred."
    }
  }
},
{
  "id": 54,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.2",
  "subdomain_name": "Cryptography Concepts",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which algorithm provides a fixed-length output regardless of input size and is NOT reversible? [Variant 0-53]",
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
      "2": "Rivest\u2013Shamir\u2013Adleman (RSA) is an asymmetric encryption algorithm used for encryption and signatures.",
      "3": "Diffie-Hellman is a key exchange protocol, not a hashing algorithm."
    }
  }
},
{
  "id": 55,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "An IDS that alerts administrators of suspicious network activity is BEST classified as which type of control? [Variant 0-54]",
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
  "id": 56,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.2",
  "subdomain_name": "Cryptography Concepts",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which encryption type uses the SAME key for both encryption and decryption? [Variant 0-55]",
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
  "id": 57,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.2",
  "subdomain_name": "Cryptography Concepts",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which encryption type uses the SAME key for both encryption and decryption? [Variant 0-56]",
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
  "id": 58,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.2",
  "subdomain_name": "Cryptography Concepts",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which algorithm provides a fixed-length output regardless of input size and is NOT reversible? [Variant 0-57]",
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
      "2": "Rivest\u2013Shamir\u2013Adleman (RSA) is an asymmetric encryption algorithm used for encryption and signatures.",
      "3": "Diffie-Hellman is a key exchange protocol, not a hashing algorithm."
    }
  }
},
{
  "id": 59,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.2",
  "subdomain_name": "Cryptography Concepts",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which algorithm provides a fixed-length output regardless of input size and is NOT reversible? [Variant 0-58]",
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
      "2": "Rivest\u2013Shamir\u2013Adleman (RSA) is an asymmetric encryption algorithm used for encryption and signatures.",
      "3": "Diffie-Hellman is a key exchange protocol, not a hashing algorithm."
    }
  }
},
{
  "id": 60,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A company wants to ensure that only authorized personnel can access sensitive customer data. Which element of the CIA triad is the company primarily addressing?",
  "options": [
    "Confidentiality",
    "Integrity",
    "Availability",
    "Non-repudiation"
  ],
  "correctIndex": 0,
  "hint": "This element focuses on preventing unauthorized access to data.",
  "explanation": {
    "correct": "Confidentiality ensures that data is accessible only to authorized individuals through mechanisms like encryption and access controls.",
    "incorrect": {
      "1": "Integrity focuses on data accuracy and preventing unauthorized modifications.",
      "2": "Availability ensures systems and data are accessible when needed.",
      "3": "Non-repudiation is not part of the CIA triad; it prevents denial of actions."
    }
  }
}
]);
