// Security+ SY0-701 - Questions 61 to 90
// Block 3 of 30
window.QUESTIONS = (window.QUESTIONS || []).concat([
{
  "id": 61,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.4",
  "subdomain_name": "Zero Trust Architecture",
  "difficulty": "medium",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which Zero Trust component is responsible for making access decisions based on policies Which answer BEST applies in an enterprise environment?",
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
  "id": 62,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: a security guard stationed at a building entrance is an example of which type of security control Which answer BEST applies in an enterprise environment?",
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
  "id": 63,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.5",
  "subdomain_name": "Change Management Security",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Version Control in the context of Change Management Which answer BEST applies in an enterprise environment?",
  "options": [
    "It is a primary component of Change Management that ensures Version Control functionality",
    "It is unrelated to Change Management",
    "It replaces all other aspects of Change Management",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Version Control relates to the broader concept of Change Management.",
  "explanation": {
    "correct": "Version Control is indeed a key component of Change Management and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Version Control is directly related to Change Management.",
      "2": "Version Control works alongside other components, it does not replace them.",
      "3": "Version Control is used in modern systems as well."
    }
  }
},
{
  "id": 64,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.2",
  "subdomain_name": "Cryptography Concepts",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which algorithm provides a fixed-length output regardless of input size and is NOT reversible Which answer BEST applies in an enterprise environment?",
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
  "id": 65,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: an IDS that alerts administrators of suspicious network activity is BEST classified as which type of control Which answer BEST applies in an enterprise environment?",
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
  "id": 66,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.2",
  "subdomain_name": "Cryptography Concepts",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which encryption type uses the SAME key for both encryption and decryption Which answer BEST applies in an enterprise environment?",
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
  "id": 67,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.2",
  "subdomain_name": "Cryptography Concepts",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which encryption type uses the SAME key for both encryption and decryption Which answer BEST applies in an enterprise environment? [Variant 1-66]",
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
  "id": 68,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.4",
  "subdomain_name": "Zero Trust Architecture",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which Zero Trust component is responsible for making access decisions based on policies Which answer BEST applies in an enterprise environment? [Variant 1-67]",
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
  "id": 69,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: a security guard stationed at a building entrance is an example of which type of security control Which answer BEST applies in an enterprise environment? [Variant 1-68]",
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
  "id": 70,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following technologies BEST supports confidentiality Which answer BEST applies in an enterprise environment?",
  "options": [
    "AES-256 encryption",
    "RAID arrays",
    "Load balancers",
    "UPS systems"
  ],
  "correctIndex": 0,
  "hint": "Think about what prevents unauthorized data access.",
  "explanation": {
    "correct": "Advanced Encryption Standard (AES)-256 encryption protects data confidentiality by making it unreadable without the proper key.",
    "incorrect": {
      "1": "Redundant Array of Independent Disks (RAID) arrays provide data redundancy for availability.",
      "2": "Load balancers distribute traffic for availability.",
      "3": "UPS systems provide power backup for availability."
    }
  }
},
{
  "id": 71,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: an IDS that alerts administrators of suspicious network activity is BEST classified as which type of control Which answer BEST applies in an enterprise environment? [Variant 1-70]",
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
  "id": 72,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.5",
  "subdomain_name": "Change Management Security",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Change Advisory Board in the context of Change Management Which answer BEST applies in an enterprise environment?",
  "options": [
    "It is a primary component of Change Management that ensures Change Advisory Board functionality",
    "It is unrelated to Change Management",
    "It replaces all other aspects of Change Management",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Change Advisory Board relates to the broader concept of Change Management.",
  "explanation": {
    "correct": "Change Advisory Board is indeed a key component of Change Management and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Change Advisory Board is directly related to Change Management.",
      "2": "Change Advisory Board works alongside other components, it does not replace them.",
      "3": "Change Advisory Board is used in modern systems as well."
    }
  }
},
{
  "id": 73,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: an IDS that alerts administrators of suspicious network activity is BEST classified as which type of control Which answer BEST applies in an enterprise environment? [Variant 1-72]",
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
  "id": 74,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: an IDS that alerts administrators of suspicious network activity is BEST classified as which type of control Which answer BEST applies in an enterprise environment? [Variant 1-73]",
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
  "id": 75,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: a security guard stationed at a building entrance is an example of which type of security control Which answer BEST applies in an enterprise environment? [Variant 1-74]",
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
  "id": 76,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.4",
  "subdomain_name": "Zero Trust Architecture",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which Zero Trust component is responsible for making access decisions based on policies Which answer BEST applies in an enterprise environment? [Variant 1-75]",
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
  "id": 77,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "medium",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: an employee accidentally sends a file containing PII to an unauthorized recipient. Which CIA principle was violated Which answer BEST applies in an enterprise environment?",
  "options": [
    "Confidentiality",
    "Integrity",
    "Availability",
    "Authentication"
  ],
  "correctIndex": 0,
  "hint": "Unauthorized access to data relates to which principle?",
  "explanation": {
    "correct": "Confidentiality was violated because Personally Identifiable Information (PII) was disclosed to an unauthorized person.",
    "incorrect": {
      "1": "Integrity would be violated if the data was modified.",
      "2": "Availability relates to system uptime, not data disclosure.",
      "3": "Authentication is about verifying identity, not data exposure."
    }
  }
},
{
  "id": 78,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: a security guard stationed at a building entrance is an example of which type of security control Which answer BEST applies in an enterprise environment? [Variant 1-77]",
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
  "id": 79,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.6",
  "subdomain_name": "Gap Analysis",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Security Baseline in the context of Gap Analysis Which answer BEST applies in an enterprise environment?",
  "options": [
    "It is a primary component of Gap Analysis that ensures Security Baseline functionality",
    "It is unrelated to Gap Analysis",
    "It replaces all other aspects of Gap Analysis",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Security Baseline relates to the broader concept of Gap Analysis.",
  "explanation": {
    "correct": "Security Baseline is indeed a key component of Gap Analysis and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Security Baseline is directly related to Gap Analysis.",
      "2": "Security Baseline works alongside other components, it does not replace them.",
      "3": "Security Baseline is used in modern systems as well."
    }
  }
},
{
  "id": 80,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: a security guard stationed at a building entrance is an example of which type of security control Which answer BEST applies in an enterprise environment? [Variant 1-79]",
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
  "id": 81,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: an IDS that alerts administrators of suspicious network activity is BEST classified as which type of control Which answer BEST applies in an enterprise environment? [Variant 1-80]",
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
  "id": 82,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.3",
  "subdomain_name": "AAA Framework",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which AAA component verifies a user's identity before granting system access Which answer BEST applies in an enterprise environment?",
  "options": [
    "Authentication",
    "Authorization",
    "Accounting",
    "Auditing"
  ],
  "correctIndex": 0,
  "hint": "This is the first step in the AAA process.",
  "explanation": {
    "correct": "Authentication verifies identity using credentials like passwords, biometrics, or tokens before any access is granted.",
    "incorrect": {
      "1": "Authorization determines what resources an authenticated user can access.",
      "2": "Accounting tracks and logs user activities after authentication.",
      "3": "Auditing reviews logs but is not a core Authentication, Authorization, and Accounting (AAA) component."
    }
  }
},
{
  "id": 83,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.3",
  "subdomain_name": "AAA Framework",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which AAA component verifies a user's identity before granting system access Which answer BEST applies in an enterprise environment? [Variant 1-82]",
  "options": [
    "Authentication",
    "Authorization",
    "Accounting",
    "Auditing"
  ],
  "correctIndex": 0,
  "hint": "This is the first step in the AAA process.",
  "explanation": {
    "correct": "Authentication verifies identity using credentials like passwords, biometrics, or tokens before any access is granted.",
    "incorrect": {
      "1": "Authorization determines what resources an authenticated user can access.",
      "2": "Accounting tracks and logs user activities after authentication.",
      "3": "Auditing reviews logs but is not a core Authentication, Authorization, and Accounting (AAA) component."
    }
  }
},
{
  "id": 84,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.4",
  "subdomain_name": "Zero Trust Architecture",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which Zero Trust component is responsible for making access decisions based on policies Which answer BEST applies in an enterprise environment? [Variant 1-83]",
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
  "id": 85,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.3",
  "subdomain_name": "AAA Framework",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: after a user logs in, the system determines they can only read files but not modify them. Which AAA component is responsible Which answer BEST applies in an enterprise environment?",
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
  "id": 86,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.2",
  "subdomain_name": "Cryptography Concepts",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which encryption type uses the SAME key for both encryption and decryption Which answer BEST applies in an enterprise environment? [Variant 1-85]",
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
  "id": 87,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: a security guard stationed at a building entrance is an example of which type of security control Which answer BEST applies in an enterprise environment? [Variant 1-86]",
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
  "id": 88,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: a security guard stationed at a building entrance is an example of which type of security control Which answer BEST applies in an enterprise environment? [Variant 1-87]",
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
  "id": 89,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.3",
  "subdomain_name": "AAA Framework",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which AAA component verifies a user's identity before granting system access Which answer BEST applies in an enterprise environment? [Variant 1-88]",
  "options": [
    "Authentication",
    "Authorization",
    "Accounting",
    "Auditing"
  ],
  "correctIndex": 0,
  "hint": "This is the first step in the AAA process.",
  "explanation": {
    "correct": "Authentication verifies identity using credentials like passwords, biometrics, or tokens before any access is granted.",
    "incorrect": {
      "1": "Authorization determines what resources an authenticated user can access.",
      "2": "Accounting tracks and logs user activities after authentication.",
      "3": "Auditing reviews logs but is not a core Authentication, Authorization, and Accounting (AAA) component."
    }
  }
},
{
  "id": 90,
  "domain": 1,
  "domainName": "General Security Concepts",
  "subdomain_id": "1.1",
  "subdomain_name": "Security Controls",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: an IDS that alerts administrators of suspicious network activity is BEST classified as which type of control Which answer BEST applies in an enterprise environment? [Variant 1-89]",
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
}
]);
