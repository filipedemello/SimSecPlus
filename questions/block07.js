// Security+ SY0-701 - Questions 181 to 210
// Block 7 of 30
window.QUESTIONS = (window.QUESTIONS || []).concat([
{
  "id": 181,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.3",
  "subdomain_name": "Malware and Attack Types",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A user downloads a free game that secretly installs a keylogger. This malware is classified as a: [Variant 0-72]",
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
  "id": 182,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.3",
  "subdomain_name": "Malware and Attack Types",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Malware that encrypts all files on a system and demands cryptocurrency payment is known as: [Variant 0-73]",
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
  "id": 183,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "An attacker inputs ' OR 1=1 -- into a login form. This is an example of: [Variant 0-74]",
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
  "id": 184,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "An attacker sends a targeted email to the CEO impersonating the CFO, requesting an urgent wire transfer. This attack is BEST described as: [Variant 0-75]",
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
  "id": 185,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.6",
  "subdomain_name": "Mitigation Techniques",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which mitigation technique divides a network into isolated segments to limit lateral movement? [Variant 0-76]",
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
  "id": 186,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.3",
  "subdomain_name": "Malware and Attack Types",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A user downloads a free game that secretly installs a keylogger. This malware is classified as a: [Variant 0-77]",
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
  "id": 187,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.6",
  "subdomain_name": "Mitigation Techniques",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which mitigation technique divides a network into isolated segments to limit lateral movement? [Variant 0-78]",
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
  "id": 188,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.5",
  "subdomain_name": "Vulnerability Types and Indicators",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes Impossible Travel in the context of Indicators of Compromise?",
  "options": [
    "It is a primary component of Indicators of Compromise that ensures Impossible Travel functionality",
    "It is unrelated to Indicators of Compromise",
    "It replaces all other aspects of Indicators of Compromise",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Impossible Travel relates to the broader concept of Indicators of Compromise.",
  "explanation": {
    "correct": "Impossible Travel is indeed a key component of Indicators of Compromise and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Impossible Travel is directly related to Indicators of Compromise.",
      "2": "Impossible Travel works alongside other components, it does not replace them.",
      "3": "Impossible Travel is used in modern systems as well."
    }
  }
},
{
  "id": 189,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.3",
  "subdomain_name": "Malware and Attack Types",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Malware that encrypts all files on a system and demands cryptocurrency payment is known as: [Variant 0-80]",
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
  "id": 190,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "An attacker floods a web server with thousands of SYN packets without completing the TCP handshake. This is a: [Variant 0-81]",
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
  "id": 191,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "An attacker registers \"g00gle.com\" hoping users will mistype the legitimate URL. This is known as: [Variant 0-82]",
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
  "id": 192,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "An attacker compromises a website frequently visited by employees of a target company. What type of attack is this? [Variant 0-83]",
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
  "id": 193,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "An attacker injects a malicious JavaScript payload into a forum post that executes in other users' browsers. This is: [Variant 0-84]",
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
  "id": 194,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "An attacker registers \"g00gle.com\" hoping users will mistype the legitimate URL. This is known as: [Variant 0-85]",
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
  "id": 195,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.3",
  "subdomain_name": "Malware and Attack Types",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A user downloads a free game that secretly installs a keylogger. This malware is classified as a: [Variant 0-86]",
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
  "id": 196,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.5",
  "subdomain_name": "Vulnerability Types and Indicators",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A newly discovered vulnerability with no available patch is known as: [Variant 0-87]",
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
  "id": 197,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.6",
  "subdomain_name": "Mitigation Techniques",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which mitigation technique divides a network into isolated segments to limit lateral movement? [Variant 0-88]",
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
  "id": 198,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "An attacker floods a web server with thousands of SYN packets without completing the TCP handshake. This is a: [Variant 0-89]",
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
  "id": 199,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "An attacker inputs ' OR 1=1 -- into a login form. This is an example of: [Variant 0-90]",
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
  "id": 200,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.5",
  "subdomain_name": "Vulnerability Types and Indicators",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A newly discovered vulnerability with no available patch is known as: [Variant 0-91]",
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
  "id": 201,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.5",
  "subdomain_name": "Vulnerability Types and Indicators",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A newly discovered vulnerability with no available patch is known as: [Variant 0-92]",
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
  "id": 202,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.5",
  "subdomain_name": "Vulnerability Types and Indicators",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A newly discovered vulnerability with no available patch is known as: [Variant 0-93]",
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
  "id": 203,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.1",
  "subdomain_name": "Threat Actors and Motivations",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A well-funded group sponsored by a foreign government conducts a prolonged cyber espionage campaign. What type of threat actor is this? [Variant 0-94]",
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
  "id": 204,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "An attacker sends a targeted email to the CEO impersonating the CFO, requesting an urgent wire transfer. This attack is BEST described as: [Variant 0-95]",
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
  "id": 205,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "An attacker injects a malicious JavaScript payload into a forum post that executes in other users' browsers. This is: [Variant 0-96]",
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
  "id": 206,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.3",
  "subdomain_name": "Malware and Attack Types",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Malware that encrypts all files on a system and demands cryptocurrency payment is known as: [Variant 0-97]",
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
  "id": 207,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.5",
  "subdomain_name": "Vulnerability Types and Indicators",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A newly discovered vulnerability with no available patch is known as: [Variant 0-98]",
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
  "id": 208,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "An attacker inputs ' OR 1=1 -- into a login form. This is an example of: [Variant 0-99]",
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
  "id": 209,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.1",
  "subdomain_name": "Threat Actors and Motivations",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "An employee who is unhappy with their employer deliberately leaks sensitive documents. This is an example of: [Variant 0-100]",
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
  "id": 210,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "An attacker inputs ' OR 1=1 -- into a login form. This is an example of: [Variant 0-101]",
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
}
]);
