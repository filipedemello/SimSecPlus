// Security+ SY0-701 - Questions 361 to 390
// Block 13 of 30
window.QUESTIONS = (window.QUESTIONS || []).concat([
{
  "id": 361,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.4",
  "subdomain_name": "Data Protection",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which technology replaces sensitive data with non-sensitive placeholder values while maintaining format? [Variant 0-54]",
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
  "id": 362,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.5",
  "subdomain_name": "Resilience and Business Continuity",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "The maximum acceptable amount of data loss measured in time is known as: [Variant 0-55]",
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
  "id": 363,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.1",
  "subdomain_name": "Network Architecture and Segmentation",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A network zone that sits between the internal network and the internet, hosting public-facing servers, is called a: [Variant 0-56]",
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
  "id": 364,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.1",
  "subdomain_name": "Network Architecture and Segmentation",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which technique provides the MOST complete isolation between two networks? [Variant 0-57]",
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
  "id": 365,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.6",
  "subdomain_name": "Virtualization and Embedded Systems",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes SoC in the context of Embedded Systems?",
  "options": [
    "It is a primary component of Embedded Systems that ensures SoC functionality",
    "It is unrelated to Embedded Systems",
    "It replaces all other aspects of Embedded Systems",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how SoC relates to the broader concept of Embedded Systems.",
  "explanation": {
    "correct": "System on a Chip (SoC) is indeed a key component of Embedded Systems and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "System on a Chip (SoC) is directly related to Embedded Systems.",
      "2": "System on a Chip (SoC) works alongside other components, it does not replace them.",
      "3": "System on a Chip (SoC) is used in modern systems as well."
    }
  }
},
{
  "id": 366,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.4",
  "subdomain_name": "Data Protection",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which technology replaces sensitive data with non-sensitive placeholder values while maintaining format? [Variant 0-59]",
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
  "id": 367,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.3",
  "subdomain_name": "Secure Infrastructure Components",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "What is the PRIMARY difference between an IDS and an IPS? [Variant 0-60]",
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
  "id": 368,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.6",
  "subdomain_name": "Virtualization and Embedded Systems",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes Hypervisor Types in the context of Virtualization?",
  "options": [
    "It is a primary component of Virtualization that ensures Hypervisor Types functionality",
    "It is unrelated to Virtualization",
    "It replaces all other aspects of Virtualization",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Hypervisor Types relates to the broader concept of Virtualization.",
  "explanation": {
    "correct": "Hypervisor Types is indeed a key component of Virtualization and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Hypervisor Types is directly related to Virtualization.",
      "2": "Hypervisor Types works alongside other components, it does not replace them.",
      "3": "Hypervisor Types is used in modern systems as well."
    }
  }
},
{
  "id": 369,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.1",
  "subdomain_name": "Network Architecture and Segmentation",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which technique provides the MOST complete isolation between two networks? [Variant 0-62]",
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
  "id": 370,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.2",
  "subdomain_name": "Cloud Security",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which cloud security solution acts as an intermediary between users and cloud services to enforce security policies? [Variant 0-63]",
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
  "id": 371,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.3",
  "subdomain_name": "Secure Infrastructure Components",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which security device inspects incoming web traffic and blocks common web application attacks like SQL injection? [Variant 0-64]",
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
  "id": 372,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.2",
  "subdomain_name": "Cloud Security",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "In which cloud model is the customer responsible for managing the operating system and applications? [Variant 0-65]",
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
  "id": 373,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.1",
  "subdomain_name": "Network Architecture and Segmentation",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which technique provides the MOST complete isolation between two networks? [Variant 0-66]",
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
  "id": 374,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.2",
  "subdomain_name": "Cloud Security",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "In which cloud model is the customer responsible for managing the operating system and applications? [Variant 0-67]",
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
  "id": 375,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.1",
  "subdomain_name": "Network Architecture and Segmentation",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which technique provides the MOST complete isolation between two networks? [Variant 0-68]",
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
  "id": 376,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.5",
  "subdomain_name": "Resilience and Business Continuity",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "The maximum acceptable amount of data loss measured in time is known as: [Variant 0-69]",
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
  "id": 377,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.2",
  "subdomain_name": "Cloud Security",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which cloud security solution acts as an intermediary between users and cloud services to enforce security policies? [Variant 0-70]",
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
  "id": 378,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.2",
  "subdomain_name": "Cloud Security",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "In which cloud model is the customer responsible for managing the operating system and applications? [Variant 0-71]",
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
  "id": 379,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.6",
  "subdomain_name": "Virtualization and Embedded Systems",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes IoT Security in the context of Embedded Systems?",
  "options": [
    "It is a primary component of Embedded Systems that ensures IoT Security functionality",
    "It is unrelated to Embedded Systems",
    "It replaces all other aspects of Embedded Systems",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how IoT Security relates to the broader concept of Embedded Systems.",
  "explanation": {
    "correct": "Internet of Things (IoT) Security is indeed a key component of Embedded Systems and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Internet of Things (IoT) Security is directly related to Embedded Systems.",
      "2": "Internet of Things (IoT) Security works alongside other components, it does not replace them.",
      "3": "Internet of Things (IoT) Security is used in modern systems as well."
    }
  }
},
{
  "id": 380,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.4",
  "subdomain_name": "Data Protection",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which technology replaces sensitive data with non-sensitive placeholder values while maintaining format? [Variant 0-73]",
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
  "id": 381,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.1",
  "subdomain_name": "Network Architecture and Segmentation",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which technique provides the MOST complete isolation between two networks? [Variant 0-74]",
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
  "id": 382,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.6",
  "subdomain_name": "Virtualization and Embedded Systems",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes SCADA in the context of Embedded Systems?",
  "options": [
    "It is a primary component of Embedded Systems that ensures SCADA functionality",
    "It is unrelated to Embedded Systems",
    "It replaces all other aspects of Embedded Systems",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how SCADA relates to the broader concept of Embedded Systems.",
  "explanation": {
    "correct": "Supervisory Control and Data Acquisition (SCADA) is indeed a key component of Embedded Systems and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Supervisory Control and Data Acquisition (SCADA) is directly related to Embedded Systems.",
      "2": "Supervisory Control and Data Acquisition (SCADA) works alongside other components, it does not replace them.",
      "3": "Supervisory Control and Data Acquisition (SCADA) is used in modern systems as well."
    }
  }
},
{
  "id": 383,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.3",
  "subdomain_name": "Secure Infrastructure Components",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "What is the PRIMARY difference between an IDS and an IPS? [Variant 0-76]",
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
  "id": 384,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.3",
  "subdomain_name": "Secure Infrastructure Components",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "What is the PRIMARY difference between an IDS and an IPS? [Variant 0-77]",
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
  "id": 385,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.2",
  "subdomain_name": "Cloud Security",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "In which cloud model is the customer responsible for managing the operating system and applications? [Variant 0-78]",
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
  "id": 386,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.3",
  "subdomain_name": "Secure Infrastructure Components",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "What is the PRIMARY difference between an IDS and an IPS? [Variant 0-79]",
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
  "id": 387,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.6",
  "subdomain_name": "Virtualization and Embedded Systems",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes FPGA in the context of Embedded Systems Which answer BEST applies in an enterprise environment?",
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
  "id": 388,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.3",
  "subdomain_name": "Secure Infrastructure Components",
  "difficulty": "medium",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which security device inspects incoming web traffic and blocks common web application attacks like SQL injection Which answer BEST applies in an enterprise environment?",
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
  "id": 389,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.5",
  "subdomain_name": "Resilience and Business Continuity",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: the maximum acceptable amount of data loss measured in time is known as: Which answer BEST applies in an enterprise environment?",
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
  "id": 390,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.3",
  "subdomain_name": "Secure Infrastructure Components",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: what is the PRIMARY difference between an IDS and an IPS Which answer BEST applies in an enterprise environment?",
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
}
]);
