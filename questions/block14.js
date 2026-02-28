// Security+ SY0-701 - Questions 391 to 420
// Block 14 of 30
window.QUESTIONS = (window.QUESTIONS || []).concat([
{
  "id": 391,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.3",
  "subdomain_name": "Secure Infrastructure Components",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: what is the PRIMARY difference between an IDS and an IPS Which answer BEST applies in an enterprise environment? [Variant 1-84]",
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
      "3": "Intrusion Prevention System (IPS) is active (blocks), Intrusion Detection System (IDS) is passive (alerts only) – the answer has them reversed."
    }
  }
},
{
  "id": 392,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.1",
  "subdomain_name": "Network Architecture and Segmentation",
  "difficulty": "medium",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: a network zone that sits between the internal network and the internet, hosting public-facing servers, is called a: Which answer BEST applies in an enterprise environment?",
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
  "id": 393,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.5",
  "subdomain_name": "Resilience and Business Continuity",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which RAID level provides disk mirroring for redundancy Which answer BEST applies in an enterprise environment?",
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
  "id": 394,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.2",
  "subdomain_name": "Cloud Security",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which cloud security solution acts as an intermediary between users and cloud services to enforce security policies Which answer BEST applies in an enterprise environment?",
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
  "id": 395,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.3",
  "subdomain_name": "Secure Infrastructure Components",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which security device inspects incoming web traffic and blocks common web application attacks like SQL injection Which answer BEST applies in an enterprise environment? [Variant 1-88]",
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
  "id": 396,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.1",
  "subdomain_name": "Network Architecture and Segmentation",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: a network zone that sits between the internal network and the internet, hosting public-facing servers, is called a: Which answer BEST applies in an enterprise environment? [Variant 1-89]",
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
  "id": 397,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.1",
  "subdomain_name": "Network Architecture and Segmentation",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which technique provides the MOST complete isolation between two networks Which answer BEST applies in an enterprise environment?",
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
  "id": 398,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.3",
  "subdomain_name": "Secure Infrastructure Components",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which security device inspects incoming web traffic and blocks common web application attacks like SQL injection Which answer BEST applies in an enterprise environment? [Variant 1-91]",
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
  "id": 399,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.2",
  "subdomain_name": "Cloud Security",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which cloud security solution acts as an intermediary between users and cloud services to enforce security policies Which answer BEST applies in an enterprise environment? [Variant 1-92]",
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
  "id": 400,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.4",
  "subdomain_name": "Data Protection",
  "difficulty": "medium",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which technology replaces sensitive data with non-sensitive placeholder values while maintaining format Which answer BEST applies in an enterprise environment?",
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
  "id": 401,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.6",
  "subdomain_name": "Virtualization and Embedded Systems",
  "difficulty": "medium",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes VM Escape in the context of Virtualization Which answer BEST applies in an enterprise environment?",
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
  "id": 402,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.2",
  "subdomain_name": "Cloud Security",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which cloud security solution acts as an intermediary between users and cloud services to enforce security policies Which answer BEST applies in an enterprise environment? [Variant 1-95]",
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
  "id": 403,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.3",
  "subdomain_name": "Secure Infrastructure Components",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which security device inspects incoming web traffic and blocks common web application attacks like SQL injection Which answer BEST applies in an enterprise environment? [Variant 1-96]",
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
  "id": 404,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.4",
  "subdomain_name": "Data Protection",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which technology replaces sensitive data with non-sensitive placeholder values while maintaining format Which answer BEST applies in an enterprise environment? [Variant 1-97]",
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
  "id": 405,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.1",
  "subdomain_name": "Network Architecture and Segmentation",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: a network zone that sits between the internal network and the internet, hosting public-facing servers, is called a: Which answer BEST applies in an enterprise environment? [Variant 1-98]",
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
  "id": 406,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.5",
  "subdomain_name": "Resilience and Business Continuity",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which RAID level provides disk mirroring for redundancy Which answer BEST applies in an enterprise environment? [Variant 1-99]",
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
  "id": 407,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.2",
  "subdomain_name": "Cloud Security",
  "difficulty": "medium",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: in which cloud model is the customer responsible for managing the operating system and applications Which answer BEST applies in an enterprise environment?",
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
  "id": 408,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.1",
  "subdomain_name": "Network Architecture and Segmentation",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: a network zone that sits between the internal network and the internet, hosting public-facing servers, is called a: Which answer BEST applies in an enterprise environment? [Variant 1-101]",
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
  "id": 409,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.4",
  "subdomain_name": "Data Protection",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which technology replaces sensitive data with non-sensitive placeholder values while maintaining format Which answer BEST applies in an enterprise environment? [Variant 1-102]",
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
  "id": 410,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.5",
  "subdomain_name": "Resilience and Business Continuity",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: the maximum acceptable amount of data loss measured in time is known as: Which answer BEST applies in an enterprise environment? [Variant 1-103]",
  "options": [
    "RPO (Recovery Point Objective)",
    "RTO (Recovery Time Objective)",
    "MTTR",
    "MTBF"
  ],
  "correctIndex": 0,
  "hint": "How far back in time can you afford to lose data?",
  "explanation": {
    "correct": "Recovery Point Objective (RPO) defines the maximum acceptable data loss measured in time – how old the most recent backup can be.",
    "incorrect": {
      "1": "Recovery Time Objective (RTO) is the maximum acceptable downtime after a disaster.",
      "2": "Mean Time to Repair (MTTR) is the average time to repair a failed component.",
      "3": "Mean Time Between Failures (MTBF) is the average time between system failures."
    }
  }
},
{
  "id": 411,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.5",
  "subdomain_name": "Resilience and Business Continuity",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: the maximum acceptable amount of data loss measured in time is known as: Which answer BEST applies in an enterprise environment? [Variant 1-104]",
  "options": [
    "RPO (Recovery Point Objective)",
    "RTO (Recovery Time Objective)",
    "MTTR",
    "MTBF"
  ],
  "correctIndex": 0,
  "hint": "How far back in time can you afford to lose data?",
  "explanation": {
    "correct": "Recovery Point Objective (RPO) defines the maximum acceptable data loss measured in time – how old the most recent backup can be.",
    "incorrect": {
      "1": "Recovery Time Objective (RTO) is the maximum acceptable downtime after a disaster.",
      "2": "Mean Time to Repair (MTTR) is the average time to repair a failed component.",
      "3": "Mean Time Between Failures (MTBF) is the average time between system failures."
    }
  }
},
{
  "id": 412,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.3",
  "subdomain_name": "Secure Infrastructure Components",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: what is the PRIMARY difference between an IDS and an IPS Which answer BEST applies in an enterprise environment? [Variant 1-105]",
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
      "3": "Intrusion Prevention System (IPS) is active (blocks), Intrusion Detection System (IDS) is passive (alerts only) – the answer has them reversed."
    }
  }
},
{
  "id": 413,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.5",
  "subdomain_name": "Resilience and Business Continuity",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: the maximum acceptable amount of data loss measured in time is known as: Which answer BEST applies in an enterprise environment? [Variant 1-106]",
  "options": [
    "RPO (Recovery Point Objective)",
    "RTO (Recovery Time Objective)",
    "MTTR",
    "MTBF"
  ],
  "correctIndex": 0,
  "hint": "How far back in time can you afford to lose data?",
  "explanation": {
    "correct": "Recovery Point Objective (RPO) defines the maximum acceptable data loss measured in time – how old the most recent backup can be.",
    "incorrect": {
      "1": "Recovery Time Objective (RTO) is the maximum acceptable downtime after a disaster.",
      "2": "Mean Time to Repair (MTTR) is the average time to repair a failed component.",
      "3": "Mean Time Between Failures (MTBF) is the average time between system failures."
    }
  }
},
{
  "id": 414,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.5",
  "subdomain_name": "Resilience and Business Continuity",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which RAID level provides disk mirroring for redundancy Which answer BEST applies in an enterprise environment? [Variant 1-107]",
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
  "id": 415,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.5",
  "subdomain_name": "Resilience and Business Continuity",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: the maximum acceptable amount of data loss measured in time is known as: Which answer BEST applies in an enterprise environment? [Variant 1-108]",
  "options": [
    "RPO (Recovery Point Objective)",
    "RTO (Recovery Time Objective)",
    "MTTR",
    "MTBF"
  ],
  "correctIndex": 0,
  "hint": "How far back in time can you afford to lose data?",
  "explanation": {
    "correct": "Recovery Point Objective (RPO) defines the maximum acceptable data loss measured in time – how old the most recent backup can be.",
    "incorrect": {
      "1": "Recovery Time Objective (RTO) is the maximum acceptable downtime after a disaster.",
      "2": "Mean Time to Repair (MTTR) is the average time to repair a failed component.",
      "3": "Mean Time Between Failures (MTBF) is the average time between system failures."
    }
  }
},
{
  "id": 416,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.6",
  "subdomain_name": "Virtualization and Embedded Systems",
  "difficulty": "medium",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes RTOS in the context of Embedded Systems Which answer BEST applies in an enterprise environment?",
  "options": [
    "It is a primary component of Embedded Systems that ensures RTOS functionality",
    "It is unrelated to Embedded Systems",
    "It replaces all other aspects of Embedded Systems",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how RTOS relates to the broader concept of Embedded Systems.",
  "explanation": {
    "correct": "Real-Time Operating System (RTOS) is indeed a key component of Embedded Systems and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Real-Time Operating System (RTOS) is directly related to Embedded Systems.",
      "2": "Real-Time Operating System (RTOS) works alongside other components, it does not replace them.",
      "3": "Real-Time Operating System (RTOS) is used in modern systems as well."
    }
  }
},
{
  "id": 417,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.4",
  "subdomain_name": "Data Protection",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which technology replaces sensitive data with non-sensitive placeholder values while maintaining format Which answer BEST applies in an enterprise environment? [Variant 1-110]",
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
  "id": 418,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.1",
  "subdomain_name": "Network Architecture and Segmentation",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: a network zone that sits between the internal network and the internet, hosting public-facing servers, is called a: Which answer BEST applies in an enterprise environment? [Variant 1-111]",
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
  "id": 419,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.1",
  "subdomain_name": "Network Architecture and Segmentation",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which technique provides the MOST complete isolation between two networks Which answer BEST applies in an enterprise environment? [Variant 1-112]",
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
  "id": 420,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.4",
  "subdomain_name": "Data Protection",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which technology replaces sensitive data with non-sensitive placeholder values while maintaining format Which answer BEST applies in an enterprise environment? [Variant 1-113]",
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
}
]);
