// Security+ SY0-701 - Questions 301 to 330
// Block 11 of 30
window.QUESTIONS = (window.QUESTIONS || []).concat([
{
  "id": 301,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: an attacker floods a web server with thousands of SYN packets without completing the TCP handshake. This is a: Which answer BEST applies in an enterprise environment? [Variant 1-192]",
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
  "id": 302,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: an attacker registers \"g00gle.com\" hoping users will mistype the legitimate URL. This is known as: Which answer BEST applies in an enterprise environment? [Variant 1-193]",
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
  "id": 303,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: an attacker compromises a website frequently visited by employees of a target company. What type of attack is this Which answer BEST applies in an enterprise environment? [Variant 1-194]",
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
  "id": 304,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.4",
  "subdomain_name": "Application and Network Attacks",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: an attacker injects a malicious JavaScript payload into a forum post that executes in other users' browsers. This is: Which answer BEST applies in an enterprise environment? [Variant 1-195]",
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
  "id": 305,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.2",
  "subdomain_name": "Social Engineering",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: an attacker registers \"g00gle.com\" hoping users will mistype the legitimate URL. This is known as: Which answer BEST applies in an enterprise environment? [Variant 1-196]",
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
  "id": 306,
  "domain": 2,
  "domainName": "Threats, Vulnerabilities, and Mitigations",
  "subdomain_id": "2.3",
  "subdomain_name": "Malware and Attack Types",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: a user downloads a free game that secretly installs a keylogger. This malware is classified as a: Which answer BEST applies in an enterprise environment? [Variant 1-197]",
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
  "id": 307,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.6",
  "subdomain_name": "Virtualization and Embedded Systems",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes FPGA in the context of Embedded Systems?",
  "options": [
    "It is a primary component of Embedded Systems that ensures FPGA functionality",
    "It is unrelated to Embedded Systems",
    "It replaces all other aspects of Embedded Systems",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how FPGA relates to the broader concept of Embedded Systems.",
  "explanation": {
    "correct": "Field-Programmable Gate Array (FPGA) is indeed a key component of Embedded Systems and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Field-Programmable Gate Array (FPGA) is directly related to Embedded Systems.",
      "2": "Field-Programmable Gate Array (FPGA) works alongside other components, it does not replace them.",
      "3": "Field-Programmable Gate Array (FPGA) is used in modern systems as well."
    }
  }
},
{
  "id": 308,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.3",
  "subdomain_name": "Secure Infrastructure Components",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which security device inspects incoming web traffic and blocks common web application attacks like SQL injection?",
  "options": [
    "WAF (Web Application Firewall)",
    "Network firewall",
    "IDS",
    "NAC"
  ],
  "correctIndex": 0,
  "hint": "This specifically protects web applications.",
  "explanation": {
    "correct": "A Web Application Firewall (WAF) inspects HTTP/HTTPS traffic and blocks web application attacks like SQL injection, Cross-Site Scripting (XSS), and Cross-Site Request Forgery (CSRF).",
    "incorrect": {
      "1": "Network firewalls filter traffic at layers 3-4, not application-layer web attacks.",
      "2": "An Intrusion Detection System (IDS) detects threats but does not actively block them.",
      "3": "Network Access Control (NAC) controls network access based on device compliance."
    }
  }
},
{
  "id": 309,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.5",
  "subdomain_name": "Resilience and Business Continuity",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "The maximum acceptable amount of data loss measured in time is known as:",
  "options": [
    "RPO (Recovery Point Objective)",
    "RTO (Recovery Time Objective)",
    "MTTR",
    "MTBF"
  ],
  "correctIndex": 0,
  "hint": "How far back in time can you afford to lose data?",
  "explanation": {
    "correct": "Recovery Point Objective (RPO) defines the maximum acceptable data loss measured in time \u2013 how old the most recent backup can be.",
    "incorrect": {
      "1": "Recovery Time Objective (RTO) is the maximum acceptable downtime after a disaster.",
      "2": "Mean Time to Repair (MTTR) is the average time to repair a failed component.",
      "3": "Mean Time Between Failures (MTBF) is the average time between system failures."
    }
  }
},
{
  "id": 310,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.3",
  "subdomain_name": "Secure Infrastructure Components",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "What is the PRIMARY difference between an IDS and an IPS?",
  "options": [
    "IPS actively blocks threats; IDS only alerts",
    "IDS is hardware; IPS is software",
    "IDS works at Layer 7; IPS at Layer 3",
    "IPS is passive; IDS is active"
  ],
  "correctIndex": 0,
  "hint": "One takes action, the other only reports.",
  "explanation": {
    "correct": "An Intrusion Prevention System (IPS) (Intrusion Prevention System) actively blocks detected threats, while an Intrusion Detection System (IDS) (Intrusion Detection System) only generates alerts.",
    "incorrect": {
      "1": "Both can be hardware or software-based.",
      "2": "Both can operate at multiple network layers.",
      "3": "Intrusion Prevention System (IPS) is active (blocks), Intrusion Detection System (IDS) is passive (alerts only) \u2013 the answer has them reversed."
    }
  }
},
{
  "id": 311,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.3",
  "subdomain_name": "Secure Infrastructure Components",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "What is the PRIMARY difference between an IDS and an IPS? [Variant 0-4]",
  "options": [
    "IPS actively blocks threats; IDS only alerts",
    "IDS is hardware; IPS is software",
    "IDS works at Layer 7; IPS at Layer 3",
    "IPS is passive; IDS is active"
  ],
  "correctIndex": 0,
  "hint": "One takes action, the other only reports.",
  "explanation": {
    "correct": "An Intrusion Prevention System (IPS) (Intrusion Prevention System) actively blocks detected threats, while an Intrusion Detection System (IDS) (Intrusion Detection System) only generates alerts.",
    "incorrect": {
      "1": "Both can be hardware or software-based.",
      "2": "Both can operate at multiple network layers.",
      "3": "Intrusion Prevention System (IPS) is active (blocks), Intrusion Detection System (IDS) is passive (alerts only) \u2013 the answer has them reversed."
    }
  }
},
{
  "id": 312,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.1",
  "subdomain_name": "Network Architecture and Segmentation",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A network zone that sits between the internal network and the internet, hosting public-facing servers, is called a:",
  "options": [
    "DMZ (Demilitarized Zone)",
    "VLAN",
    "VPN",
    "Air gap"
  ],
  "correctIndex": 0,
  "hint": "This zone provides a buffer between trusted and untrusted networks.",
  "explanation": {
    "correct": "A Demilitarized Zone (DMZ) is a perimeter network that hosts public-facing services while protecting the internal network from direct internet access.",
    "incorrect": {
      "1": "VLANs segment traffic logically but are not specifically a buffer zone.",
      "2": "VPNs encrypt connections but are not a network zone.",
      "3": "An air gap is complete physical isolation, not a buffer zone."
    }
  }
},
{
  "id": 313,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.5",
  "subdomain_name": "Resilience and Business Continuity",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which RAID level provides disk mirroring for redundancy?",
  "options": [
    "RAID 1",
    "RAID 0",
    "RAID 5",
    "RAID 10"
  ],
  "correctIndex": 0,
  "hint": "Data is written identically to two drives.",
  "explanation": {
    "correct": "Redundant Array of Independent Disks (RAID) 1 mirrors data across two drives, providing full redundancy. If one drive fails, the mirror contains a complete copy.",
    "incorrect": {
      "1": "Redundant Array of Independent Disks (RAID) 0 uses striping for performance but has NO redundancy.",
      "2": "Redundant Array of Independent Disks (RAID) 5 uses striping with distributed parity, not mirroring.",
      "3": "Redundant Array of Independent Disks (RAID) 10 combines striping and mirroring, but the question asks specifically about mirroring."
    }
  }
},
{
  "id": 314,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.2",
  "subdomain_name": "Cloud Security",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which cloud security solution acts as an intermediary between users and cloud services to enforce security policies?",
  "options": [
    "CASB (Cloud Access Security Broker)",
    "WAF",
    "SIEM",
    "DLP"
  ],
  "correctIndex": 0,
  "hint": "It brokers the connection between users and cloud applications.",
  "explanation": {
    "correct": "A Cloud Access Security Broker (CASB) sits between users and cloud services to enforce security policies, provide visibility, and protect data.",
    "incorrect": {
      "1": "A Web Application Firewall (WAF) protects web applications from attacks, not cloud service access.",
      "2": "A Security Information and Event Management (SIEM) collects and analyzes security logs.",
      "3": "Data Loss Prevention (DLP) prevents data loss but doesn't specifically broker cloud access."
    }
  }
},
{
  "id": 315,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.3",
  "subdomain_name": "Secure Infrastructure Components",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which security device inspects incoming web traffic and blocks common web application attacks like SQL injection? [Variant 0-8]",
  "options": [
    "WAF (Web Application Firewall)",
    "Network firewall",
    "IDS",
    "NAC"
  ],
  "correctIndex": 0,
  "hint": "This specifically protects web applications.",
  "explanation": {
    "correct": "A Web Application Firewall (WAF) inspects HTTP/HTTPS traffic and blocks web application attacks like SQL injection, Cross-Site Scripting (XSS), and Cross-Site Request Forgery (CSRF).",
    "incorrect": {
      "1": "Network firewalls filter traffic at layers 3-4, not application-layer web attacks.",
      "2": "An Intrusion Detection System (IDS) detects threats but does not actively block them.",
      "3": "Network Access Control (NAC) controls network access based on device compliance."
    }
  }
},
{
  "id": 316,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.1",
  "subdomain_name": "Network Architecture and Segmentation",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A network zone that sits between the internal network and the internet, hosting public-facing servers, is called a: [Variant 0-9]",
  "options": [
    "DMZ (Demilitarized Zone)",
    "VLAN",
    "VPN",
    "Air gap"
  ],
  "correctIndex": 0,
  "hint": "This zone provides a buffer between trusted and untrusted networks.",
  "explanation": {
    "correct": "A Demilitarized Zone (DMZ) is a perimeter network that hosts public-facing services while protecting the internal network from direct internet access.",
    "incorrect": {
      "1": "VLANs segment traffic logically but are not specifically a buffer zone.",
      "2": "VPNs encrypt connections but are not a network zone.",
      "3": "An air gap is complete physical isolation, not a buffer zone."
    }
  }
},
{
  "id": 317,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.1",
  "subdomain_name": "Network Architecture and Segmentation",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which technique provides the MOST complete isolation between two networks?",
  "options": [
    "Air gap",
    "VLAN",
    "Firewall rules",
    "ACL"
  ],
  "correctIndex": 0,
  "hint": "No physical or logical connection exists.",
  "explanation": {
    "correct": "An air gap provides complete physical isolation between networks with no connectivity, offering the highest level of separation.",
    "incorrect": {
      "1": "VLANs logically separate traffic but share physical infrastructure.",
      "2": "Firewall rules filter traffic but still maintain connectivity.",
      "3": "ACLs restrict access but networks remain connected."
    }
  }
},
{
  "id": 318,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.3",
  "subdomain_name": "Secure Infrastructure Components",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which security device inspects incoming web traffic and blocks common web application attacks like SQL injection? [Variant 0-11]",
  "options": [
    "WAF (Web Application Firewall)",
    "Network firewall",
    "IDS",
    "NAC"
  ],
  "correctIndex": 0,
  "hint": "This specifically protects web applications.",
  "explanation": {
    "correct": "A Web Application Firewall (WAF) inspects HTTP/HTTPS traffic and blocks web application attacks like SQL injection, Cross-Site Scripting (XSS), and Cross-Site Request Forgery (CSRF).",
    "incorrect": {
      "1": "Network firewalls filter traffic at layers 3-4, not application-layer web attacks.",
      "2": "An Intrusion Detection System (IDS) detects threats but does not actively block them.",
      "3": "Network Access Control (NAC) controls network access based on device compliance."
    }
  }
},
{
  "id": 319,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.2",
  "subdomain_name": "Cloud Security",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which cloud security solution acts as an intermediary between users and cloud services to enforce security policies? [Variant 0-12]",
  "options": [
    "CASB (Cloud Access Security Broker)",
    "WAF",
    "SIEM",
    "DLP"
  ],
  "correctIndex": 0,
  "hint": "It brokers the connection between users and cloud applications.",
  "explanation": {
    "correct": "A Cloud Access Security Broker (CASB) sits between users and cloud services to enforce security policies, provide visibility, and protect data.",
    "incorrect": {
      "1": "A Web Application Firewall (WAF) protects web applications from attacks, not cloud service access.",
      "2": "A Security Information and Event Management (SIEM) collects and analyzes security logs.",
      "3": "Data Loss Prevention (DLP) prevents data loss but doesn't specifically broker cloud access."
    }
  }
},
{
  "id": 320,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.4",
  "subdomain_name": "Data Protection",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which technology replaces sensitive data with non-sensitive placeholder values while maintaining format?",
  "options": [
    "Tokenization",
    "Encryption",
    "Hashing",
    "Data masking"
  ],
  "correctIndex": 0,
  "hint": "The original data is stored separately and replaced with tokens.",
  "explanation": {
    "correct": "Tokenization replaces sensitive data with non-sensitive tokens. The original data is stored in a secure token vault.",
    "incorrect": {
      "1": "Encryption transforms data using algorithms and keys, changing the format.",
      "2": "Hashing creates a fixed-length digest and is irreversible.",
      "3": "Data masking partially hides data (e.g., showing only last 4 digits) but doesn't replace it with tokens."
    }
  }
},
{
  "id": 321,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.6",
  "subdomain_name": "Virtualization and Embedded Systems",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes VM Escape in the context of Virtualization?",
  "options": [
    "It is a primary component of Virtualization that ensures VM Escape functionality",
    "It is unrelated to Virtualization",
    "It replaces all other aspects of Virtualization",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how VM Escape relates to the broader concept of Virtualization.",
  "explanation": {
    "correct": "VM Escape is indeed a key component of Virtualization and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "VM Escape is directly related to Virtualization.",
      "2": "VM Escape works alongside other components, it does not replace them.",
      "3": "VM Escape is used in modern systems as well."
    }
  }
},
{
  "id": 322,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.2",
  "subdomain_name": "Cloud Security",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which cloud security solution acts as an intermediary between users and cloud services to enforce security policies? [Variant 0-15]",
  "options": [
    "CASB (Cloud Access Security Broker)",
    "WAF",
    "SIEM",
    "DLP"
  ],
  "correctIndex": 0,
  "hint": "It brokers the connection between users and cloud applications.",
  "explanation": {
    "correct": "A Cloud Access Security Broker (CASB) sits between users and cloud services to enforce security policies, provide visibility, and protect data.",
    "incorrect": {
      "1": "A Web Application Firewall (WAF) protects web applications from attacks, not cloud service access.",
      "2": "A Security Information and Event Management (SIEM) collects and analyzes security logs.",
      "3": "Data Loss Prevention (DLP) prevents data loss but doesn't specifically broker cloud access."
    }
  }
},
{
  "id": 323,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.3",
  "subdomain_name": "Secure Infrastructure Components",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which security device inspects incoming web traffic and blocks common web application attacks like SQL injection? [Variant 0-16]",
  "options": [
    "WAF (Web Application Firewall)",
    "Network firewall",
    "IDS",
    "NAC"
  ],
  "correctIndex": 0,
  "hint": "This specifically protects web applications.",
  "explanation": {
    "correct": "A Web Application Firewall (WAF) inspects HTTP/HTTPS traffic and blocks web application attacks like SQL injection, Cross-Site Scripting (XSS), and Cross-Site Request Forgery (CSRF).",
    "incorrect": {
      "1": "Network firewalls filter traffic at layers 3-4, not application-layer web attacks.",
      "2": "An Intrusion Detection System (IDS) detects threats but does not actively block them.",
      "3": "Network Access Control (NAC) controls network access based on device compliance."
    }
  }
},
{
  "id": 324,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.4",
  "subdomain_name": "Data Protection",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which technology replaces sensitive data with non-sensitive placeholder values while maintaining format? [Variant 0-17]",
  "options": [
    "Tokenization",
    "Encryption",
    "Hashing",
    "Data masking"
  ],
  "correctIndex": 0,
  "hint": "The original data is stored separately and replaced with tokens.",
  "explanation": {
    "correct": "Tokenization replaces sensitive data with non-sensitive tokens. The original data is stored in a secure token vault.",
    "incorrect": {
      "1": "Encryption transforms data using algorithms and keys, changing the format.",
      "2": "Hashing creates a fixed-length digest and is irreversible.",
      "3": "Data masking partially hides data (e.g., showing only last 4 digits) but doesn't replace it with tokens."
    }
  }
},
{
  "id": 325,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.1",
  "subdomain_name": "Network Architecture and Segmentation",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A network zone that sits between the internal network and the internet, hosting public-facing servers, is called a: [Variant 0-18]",
  "options": [
    "DMZ (Demilitarized Zone)",
    "VLAN",
    "VPN",
    "Air gap"
  ],
  "correctIndex": 0,
  "hint": "This zone provides a buffer between trusted and untrusted networks.",
  "explanation": {
    "correct": "A Demilitarized Zone (DMZ) is a perimeter network that hosts public-facing services while protecting the internal network from direct internet access.",
    "incorrect": {
      "1": "VLANs segment traffic logically but are not specifically a buffer zone.",
      "2": "VPNs encrypt connections but are not a network zone.",
      "3": "An air gap is complete physical isolation, not a buffer zone."
    }
  }
},
{
  "id": 326,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.5",
  "subdomain_name": "Resilience and Business Continuity",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which RAID level provides disk mirroring for redundancy? [Variant 0-19]",
  "options": [
    "RAID 1",
    "RAID 0",
    "RAID 5",
    "RAID 10"
  ],
  "correctIndex": 0,
  "hint": "Data is written identically to two drives.",
  "explanation": {
    "correct": "Redundant Array of Independent Disks (RAID) 1 mirrors data across two drives, providing full redundancy. If one drive fails, the mirror contains a complete copy.",
    "incorrect": {
      "1": "Redundant Array of Independent Disks (RAID) 0 uses striping for performance but has NO redundancy.",
      "2": "Redundant Array of Independent Disks (RAID) 5 uses striping with distributed parity, not mirroring.",
      "3": "Redundant Array of Independent Disks (RAID) 10 combines striping and mirroring, but the question asks specifically about mirroring."
    }
  }
},
{
  "id": 327,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.2",
  "subdomain_name": "Cloud Security",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "In which cloud model is the customer responsible for managing the operating system and applications?",
  "options": [
    "IaaS",
    "PaaS",
    "SaaS",
    "FaaS"
  ],
  "correctIndex": 0,
  "hint": "The provider manages only the underlying infrastructure.",
  "explanation": {
    "correct": "In Infrastructure as a Service (IaaS), the cloud provider manages hardware/networking while the customer manages OS, middleware, runtime, and applications.",
    "incorrect": {
      "1": "In Platform as a Service (PaaS), the provider also manages the OS, middleware, and runtime.",
      "2": "In Software as a Service (SaaS), the provider manages everything; the customer only uses the application.",
      "3": "Function as a Service (FaaS) (serverless) abstracts even more; the provider manages everything except the code."
    }
  }
},
{
  "id": 328,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.1",
  "subdomain_name": "Network Architecture and Segmentation",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A network zone that sits between the internal network and the internet, hosting public-facing servers, is called a: [Variant 0-21]",
  "options": [
    "DMZ (Demilitarized Zone)",
    "VLAN",
    "VPN",
    "Air gap"
  ],
  "correctIndex": 0,
  "hint": "This zone provides a buffer between trusted and untrusted networks.",
  "explanation": {
    "correct": "A Demilitarized Zone (DMZ) is a perimeter network that hosts public-facing services while protecting the internal network from direct internet access.",
    "incorrect": {
      "1": "VLANs segment traffic logically but are not specifically a buffer zone.",
      "2": "VPNs encrypt connections but are not a network zone.",
      "3": "An air gap is complete physical isolation, not a buffer zone."
    }
  }
},
{
  "id": 329,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.4",
  "subdomain_name": "Data Protection",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which technology replaces sensitive data with non-sensitive placeholder values while maintaining format? [Variant 0-22]",
  "options": [
    "Tokenization",
    "Encryption",
    "Hashing",
    "Data masking"
  ],
  "correctIndex": 0,
  "hint": "The original data is stored separately and replaced with tokens.",
  "explanation": {
    "correct": "Tokenization replaces sensitive data with non-sensitive tokens. The original data is stored in a secure token vault.",
    "incorrect": {
      "1": "Encryption transforms data using algorithms and keys, changing the format.",
      "2": "Hashing creates a fixed-length digest and is irreversible.",
      "3": "Data masking partially hides data (e.g., showing only last 4 digits) but doesn't replace it with tokens."
    }
  }
},
{
  "id": 330,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.5",
  "subdomain_name": "Resilience and Business Continuity",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "The maximum acceptable amount of data loss measured in time is known as: [Variant 0-23]",
  "options": [
    "RPO (Recovery Point Objective)",
    "RTO (Recovery Time Objective)",
    "MTTR",
    "MTBF"
  ],
  "correctIndex": 0,
  "hint": "How far back in time can you afford to lose data?",
  "explanation": {
    "correct": "Recovery Point Objective (RPO) defines the maximum acceptable data loss measured in time \u2013 how old the most recent backup can be.",
    "incorrect": {
      "1": "Recovery Time Objective (RTO) is the maximum acceptable downtime after a disaster.",
      "2": "Mean Time to Repair (MTTR) is the average time to repair a failed component.",
      "3": "Mean Time Between Failures (MTBF) is the average time between system failures."
    }
  }
}
]);
