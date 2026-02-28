// Security+ SY0-701 - Questions 211 to 240
// Block 8 of 30
window.QUESTIONS = (window.QUESTIONS || []).concat([
{
  "id": 211,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.6",
  "subdomain_name": "Mitigation Techniques",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which mitigation technique divides a network into isolated segments to limit lateral movement? [Variant 0-102]",
  "options": [
    "Network segmentation",
    "Encryption",
    "Patching",
    "Input validation"
  ],
  "correctIndex": 0,
  "hint": "This creates boundaries within the network.",
  "explanation": {
    "correct": "Network segmentation isolates parts of the network, preventing an attacker from moving laterally across the entire infrastructure.",
    "incorrect": {
      "1": "Encryption protects data confidentiality but doesn't limit movement.",
      "2": "Patching fixes known vulnerabilities but doesn't segment the network.",
      "3": "Input validation prevents injection attacks at the application layer."
    }
  }
},
{
  "id": 212,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "An attacker injects a malicious JavaScript payload into a forum post that executes in other users' browsers. This is: [Variant 0-103]",
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
  "id": 213,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.1",
  "subdomain_name": "Threat Actors and Motivations",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "An employee who is unhappy with their employer deliberately leaks sensitive documents. This is an example of: [Variant 0-104]",
  "options": [
    "Insider threat",
    "Nation-state actor",
    "Hacktivist",
    "Organized crime"
  ],
  "correctIndex": 0,
  "hint": "The threat comes from within the organization.",
  "explanation": {
    "correct": "Insider threats originate from current or former employees who misuse their authorized access to harm the organization.",
    "incorrect": {
      "1": "Nation-state actors are government-sponsored external attackers.",
      "2": "Hacktivists are external actors motivated by political or social causes.",
      "3": "Organized crime groups are external and financially motivated."
    }
  }
},
{
  "id": 214,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.1",
  "subdomain_name": "Threat Actors and Motivations",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "An employee who is unhappy with their employer deliberately leaks sensitive documents. This is an example of: [Variant 0-105]",
  "options": [
    "Insider threat",
    "Nation-state actor",
    "Hacktivist",
    "Organized crime"
  ],
  "correctIndex": 0,
  "hint": "The threat comes from within the organization.",
  "explanation": {
    "correct": "Insider threats originate from current or former employees who misuse their authorized access to harm the organization.",
    "incorrect": {
      "1": "Nation-state actors are government-sponsored external attackers.",
      "2": "Hacktivists are external actors motivated by political or social causes.",
      "3": "Organized crime groups are external and financially motivated."
    }
  }
},
{
  "id": 215,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "An attacker injects a malicious JavaScript payload into a forum post that executes in other users' browsers. This is: [Variant 0-106]",
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
  "id": 216,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.1",
  "subdomain_name": "Threat Actors and Motivations",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "An employee who is unhappy with their employer deliberately leaks sensitive documents. This is an example of: [Variant 0-107]",
  "options": [
    "Insider threat",
    "Nation-state actor",
    "Hacktivist",
    "Organized crime"
  ],
  "correctIndex": 0,
  "hint": "The threat comes from within the organization.",
  "explanation": {
    "correct": "Insider threats originate from current or former employees who misuse their authorized access to harm the organization.",
    "incorrect": {
      "1": "Nation-state actors are government-sponsored external attackers.",
      "2": "Hacktivists are external actors motivated by political or social causes.",
      "3": "Organized crime groups are external and financially motivated."
    }
  }
},
{
  "id": 217,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.3",
  "subdomain_name": "Malware and Attack Types",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Malware that encrypts all files on a system and demands cryptocurrency payment is known as: [Variant 0-108]",
  "options": [
    "Ransomware",
    "Spyware",
    "Rootkit",
    "Logic bomb"
  ],
  "correctIndex": 0,
  "hint": "The attacker demands payment to restore access.",
  "explanation": {
    "correct": "Ransomware encrypts victim files and demands a ransom (usually in cryptocurrency) for the decryption key.",
    "incorrect": {
      "1": "Spyware silently monitors activity but does not encrypt files.",
      "2": "Rootkits provide hidden persistent access but do not encrypt files.",
      "3": "Logic bombs trigger on specific conditions but do not demand payment."
    }
  }
},
{
  "id": 218,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "An attacker compromises a website frequently visited by employees of a target company. What type of attack is this? [Variant 0-109]",
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
  "id": 219,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.1",
  "subdomain_name": "Threat Actors and Motivations",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "An employee who is unhappy with their employer deliberately leaks sensitive documents. This is an example of: [Variant 0-110]",
  "options": [
    "Insider threat",
    "Nation-state actor",
    "Hacktivist",
    "Organized crime"
  ],
  "correctIndex": 0,
  "hint": "The threat comes from within the organization.",
  "explanation": {
    "correct": "Insider threats originate from current or former employees who misuse their authorized access to harm the organization.",
    "incorrect": {
      "1": "Nation-state actors are government-sponsored external attackers.",
      "2": "Hacktivists are external actors motivated by political or social causes.",
      "3": "Organized crime groups are external and financially motivated."
    }
  }
},
{
  "id": 220,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: an attacker sends a targeted email to the CEO impersonating the CFO, requesting an urgent wire transfer. This attack is BEST described as: Which answer BEST applies in an enterprise environment?",
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
  "id": 221,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: an attacker intercepts communication between two parties, secretly relaying and possibly altering messages. This describes: Which answer BEST applies in an enterprise environment?",
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
  "id": 222,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.5",
  "subdomain_name": "Vulnerability Types and Indicators",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: a newly discovered vulnerability with no available patch is known as: Which answer BEST applies in an enterprise environment?",
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
  "id": 223,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: an attacker floods a web server with thousands of SYN packets without completing the TCP handshake. This is a: Which answer BEST applies in an enterprise environment?",
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
  "id": 224,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "medium",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: an attacker inputs ' OR 1=1 -- into a login form. This is an example of: Which answer BEST applies in an enterprise environment?",
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
  "id": 225,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: an attacker floods a web server with thousands of SYN packets without completing the TCP handshake. This is a: Which answer BEST applies in an enterprise environment? [Variant 1-116]",
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
  "id": 226,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "medium",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: an attacker injects a malicious JavaScript payload into a forum post that executes in other users' browsers. This is: Which answer BEST applies in an enterprise environment?",
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
  "id": 227,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: an attacker registers \"g00gle.com\" hoping users will mistype the legitimate URL. This is known as: Which answer BEST applies in an enterprise environment?",
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
  "id": 228,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: an attacker injects a malicious JavaScript payload into a forum post that executes in other users' browsers. This is: Which answer BEST applies in an enterprise environment? [Variant 1-119]",
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
  "id": 229,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: an attacker intercepts communication between two parties, secretly relaying and possibly altering messages. This describes: Which answer BEST applies in an enterprise environment? [Variant 1-120]",
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
  "id": 230,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: an attacker compromises a website frequently visited by employees of a target company. What type of attack is this Which answer BEST applies in an enterprise environment?",
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
  "id": 231,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: an attacker intercepts communication between two parties, secretly relaying and possibly altering messages. This describes: Which answer BEST applies in an enterprise environment? [Variant 1-122]",
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
  "id": 232,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: an attacker intercepts communication between two parties, secretly relaying and possibly altering messages. This describes: Which answer BEST applies in an enterprise environment? [Variant 1-123]",
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
  "id": 233,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: an attacker injects a malicious JavaScript payload into a forum post that executes in other users' browsers. This is: Which answer BEST applies in an enterprise environment? [Variant 1-124]",
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
  "id": 234,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.3",
  "subdomain_name": "Malware and Attack Types",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: a user downloads a free game that secretly installs a keylogger. This malware is classified as a: Which answer BEST applies in an enterprise environment?",
  "options": [
    "Trojan",
    "Worm",
    "Ransomware",
    "Rootkit"
  ],
  "correctIndex": 0,
  "hint": "It disguises itself as something legitimate.",
  "explanation": {
    "correct": "A Trojan disguises itself as legitimate software while carrying a hidden malicious payload, like the mythological Trojan horse.",
    "incorrect": {
      "1": "Worms self-replicate across networks without user interaction.",
      "2": "Ransomware encrypts files and demands payment.",
      "3": "Rootkits hide deep in the system to maintain persistent access."
    }
  }
},
{
  "id": 235,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: an attacker floods a web server with thousands of SYN packets without completing the TCP handshake. This is a: Which answer BEST applies in an enterprise environment? [Variant 1-126]",
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
  "id": 236,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: an attacker floods a web server with thousands of SYN packets without completing the TCP handshake. This is a: Which answer BEST applies in an enterprise environment? [Variant 1-127]",
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
  "id": 237,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.5",
  "subdomain_name": "Vulnerability Types and Indicators",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Unusual Traffic in the context of Indicators of Compromise Which answer BEST applies in an enterprise environment?",
  "options": [
    "It is a primary component of Indicators of Compromise that ensures Unusual Traffic functionality",
    "It is unrelated to Indicators of Compromise",
    "It replaces all other aspects of Indicators of Compromise",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Unusual Traffic relates to the broader concept of Indicators of Compromise.",
  "explanation": {
    "correct": "Unusual Traffic is indeed a key component of Indicators of Compromise and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Unusual Traffic is directly related to Indicators of Compromise.",
      "2": "Unusual Traffic works alongside other components, it does not replace them.",
      "3": "Unusual Traffic is used in modern systems as well."
    }
  }
},
{
  "id": 238,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.6",
  "subdomain_name": "Mitigation Techniques",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which mitigation technique divides a network into isolated segments to limit lateral movement Which answer BEST applies in an enterprise environment?",
  "options": [
    "Network segmentation",
    "Encryption",
    "Patching",
    "Input validation"
  ],
  "correctIndex": 0,
  "hint": "This creates boundaries within the network.",
  "explanation": {
    "correct": "Network segmentation isolates parts of the network, preventing an attacker from moving laterally across the entire infrastructure.",
    "incorrect": {
      "1": "Encryption protects data confidentiality but doesn't limit movement.",
      "2": "Patching fixes known vulnerabilities but doesn't segment the network.",
      "3": "Input validation prevents injection attacks at the application layer."
    }
  }
},
{
  "id": 239,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.1",
  "subdomain_name": "Threat Actors and Motivations",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: a well-funded group sponsored by a foreign government conducts a prolonged cyber espionage campaign. What type of threat actor is this Which answer BEST applies in an enterprise environment?",
  "options": [
    "Nation-state",
    "Hacktivist",
    "Script kiddie",
    "Insider threat"
  ],
  "correctIndex": 0,
  "hint": "Government backing and espionage are key indicators.",
  "explanation": {
    "correct": "Nation-state actors are government-sponsored, well-funded, and conduct sophisticated, long-term campaigns for espionage or disruption.",
    "incorrect": {
      "1": "Hacktivists are motivated by ideology, not government sponsorship.",
      "2": "Script kiddies lack the sophistication for prolonged espionage.",
      "3": "Insider threats originate from within the organization."
    }
  }
},
{
  "id": 240,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.3",
  "subdomain_name": "Malware and Attack Types",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: a user downloads a free game that secretly installs a keylogger. This malware is classified as a: Which answer BEST applies in an enterprise environment? [Variant 1-131]",
  "options": [
    "Trojan",
    "Worm",
    "Ransomware",
    "Rootkit"
  ],
  "correctIndex": 0,
  "hint": "It disguises itself as something legitimate.",
  "explanation": {
    "correct": "A Trojan disguises itself as legitimate software while carrying a hidden malicious payload, like the mythological Trojan horse.",
    "incorrect": {
      "1": "Worms self-replicate across networks without user interaction.",
      "2": "Ransomware encrypts files and demands payment.",
      "3": "Rootkits hide deep in the system to maintain persistent access."
    }
  }
}
]);
