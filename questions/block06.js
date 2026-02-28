// Security+ SY0-701 - Questions 151 to 180
// Block 6 of 30
window.QUESTIONS = (window.QUESTIONS || []).concat([
{
  "id": 151,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "An attacker registers \"g00gle.com\" hoping users will mistype the legitimate URL. This is known as: [Variant 0-42]",
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
  "id": 152,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "An attacker sends a targeted email to the CEO impersonating the CFO, requesting an urgent wire transfer. This attack is BEST described as: [Variant 0-43]",
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
  "id": 153,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "An attacker intercepts communication between two parties, secretly relaying and possibly altering messages. This describes: [Variant 0-44]",
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
  "id": 154,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "An attacker compromises a website frequently visited by employees of a target company. What type of attack is this? [Variant 0-45]",
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
  "id": 155,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "An attacker floods a web server with thousands of SYN packets without completing the TCP handshake. This is a: [Variant 0-46]",
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
  "id": 156,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "An attacker registers \"g00gle.com\" hoping users will mistype the legitimate URL. This is known as: [Variant 0-47]",
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
  "id": 157,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.3",
  "subdomain_name": "Malware and Attack Types",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Malware that encrypts all files on a system and demands cryptocurrency payment is known as: [Variant 0-48]",
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
  "id": 158,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "An attacker compromises a website frequently visited by employees of a target company. What type of attack is this? [Variant 0-49]",
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
  "id": 159,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.6",
  "subdomain_name": "Mitigation Techniques",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which mitigation technique divides a network into isolated segments to limit lateral movement? [Variant 0-50]",
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
  "id": 160,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "An attacker inputs ' OR 1=1 -- into a login form. This is an example of: [Variant 0-51]",
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
  "id": 161,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "An attacker registers \"g00gle.com\" hoping users will mistype the legitimate URL. This is known as: [Variant 0-52]",
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
  "id": 162,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "An attacker registers \"g00gle.com\" hoping users will mistype the legitimate URL. This is known as: [Variant 0-53]",
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
  "id": 163,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.5",
  "subdomain_name": "Vulnerability Types and Indicators",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes Resource Consumption in the context of Indicators of Compromise?",
  "options": [
    "It is a primary component of Indicators of Compromise that ensures Resource Consumption functionality",
    "It is unrelated to Indicators of Compromise",
    "It replaces all other aspects of Indicators of Compromise",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Resource Consumption relates to the broader concept of Indicators of Compromise.",
  "explanation": {
    "correct": "Resource Consumption is indeed a key component of Indicators of Compromise and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Resource Consumption is directly related to Indicators of Compromise.",
      "2": "Resource Consumption works alongside other components, it does not replace them.",
      "3": "Resource Consumption is used in modern systems as well."
    }
  }
},
{
  "id": 164,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.5",
  "subdomain_name": "Vulnerability Types and Indicators",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes Blocked Content in the context of Indicators of Compromise?",
  "options": [
    "It is a primary component of Indicators of Compromise that ensures Blocked Content functionality",
    "It is unrelated to Indicators of Compromise",
    "It replaces all other aspects of Indicators of Compromise",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Blocked Content relates to the broader concept of Indicators of Compromise.",
  "explanation": {
    "correct": "Blocked Content is indeed a key component of Indicators of Compromise and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Blocked Content is directly related to Indicators of Compromise.",
      "2": "Blocked Content works alongside other components, it does not replace them.",
      "3": "Blocked Content is used in modern systems as well."
    }
  }
},
{
  "id": 165,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "An attacker registers \"g00gle.com\" hoping users will mistype the legitimate URL. This is known as: [Variant 0-56]",
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
  "id": 166,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.6",
  "subdomain_name": "Mitigation Techniques",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which mitigation technique divides a network into isolated segments to limit lateral movement? [Variant 0-57]",
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
  "id": 167,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.1",
  "subdomain_name": "Threat Actors and Motivations",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "An employee who is unhappy with their employer deliberately leaks sensitive documents. This is an example of: [Variant 0-58]",
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
  "id": 168,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "An attacker sends a targeted email to the CEO impersonating the CFO, requesting an urgent wire transfer. This attack is BEST described as: [Variant 0-59]",
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
  "id": 169,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "An attacker compromises a website frequently visited by employees of a target company. What type of attack is this? [Variant 0-60]",
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
  "id": 170,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.5",
  "subdomain_name": "Vulnerability Types and Indicators",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes Log Anomalies in the context of Indicators of Compromise?",
  "options": [
    "It is a primary component of Indicators of Compromise that ensures Log Anomalies functionality",
    "It is unrelated to Indicators of Compromise",
    "It replaces all other aspects of Indicators of Compromise",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Log Anomalies relates to the broader concept of Indicators of Compromise.",
  "explanation": {
    "correct": "Log Anomalies is indeed a key component of Indicators of Compromise and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Log Anomalies is directly related to Indicators of Compromise.",
      "2": "Log Anomalies works alongside other components, it does not replace them.",
      "3": "Log Anomalies is used in modern systems as well."
    }
  }
},
{
  "id": 171,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.3",
  "subdomain_name": "Malware and Attack Types",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Malware that encrypts all files on a system and demands cryptocurrency payment is known as: [Variant 0-62]",
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
  "id": 172,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.1",
  "subdomain_name": "Threat Actors and Motivations",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A well-funded group sponsored by a foreign government conducts a prolonged cyber espionage campaign. What type of threat actor is this? [Variant 0-63]",
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
  "id": 173,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.1",
  "subdomain_name": "Threat Actors and Motivations",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A well-funded group sponsored by a foreign government conducts a prolonged cyber espionage campaign. What type of threat actor is this? [Variant 0-64]",
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
  "id": 174,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "An attacker inputs ' OR 1=1 -- into a login form. This is an example of: [Variant 0-65]",
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
  "id": 175,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.3",
  "subdomain_name": "Malware and Attack Types",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A user downloads a free game that secretly installs a keylogger. This malware is classified as a: [Variant 0-66]",
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
  "id": 176,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.3",
  "subdomain_name": "Malware and Attack Types",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A user downloads a free game that secretly installs a keylogger. This malware is classified as a: [Variant 0-67]",
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
  "id": 177,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.3",
  "subdomain_name": "Malware and Attack Types",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Malware that encrypts all files on a system and demands cryptocurrency payment is known as: [Variant 0-68]",
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
  "id": 178,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "An attacker sends a targeted email to the CEO impersonating the CFO, requesting an urgent wire transfer. This attack is BEST described as: [Variant 0-69]",
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
  "id": 179,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "An attacker intercepts communication between two parties, secretly relaying and possibly altering messages. This describes: [Variant 0-70]",
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
  "id": 180,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.3",
  "subdomain_name": "Malware and Attack Types",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Malware that encrypts all files on a system and demands cryptocurrency payment is known as: [Variant 0-71]",
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
}
]);
