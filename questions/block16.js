// Security+ SY0-701 - Questions 451 to 480
// Block 16 of 30
window.QUESTIONS = (window.QUESTIONS || []).concat([
{
  "id": 451,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.3",
  "subdomain_name": "Secure Infrastructure Components",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which security device inspects incoming web traffic and blocks common web application attacks like SQL injection Which answer BEST applies in an enterprise environment? [Variant 1-144]",
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
  "id": 452,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.2",
  "subdomain_name": "Cloud Security",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: in which cloud model is the customer responsible for managing the operating system and applications Which answer BEST applies in an enterprise environment? [Variant 1-145]",
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
  "id": 453,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.1",
  "subdomain_name": "Network Architecture and Segmentation",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which technique provides the MOST complete isolation between two networks Which answer BEST applies in an enterprise environment? [Variant 1-146]",
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
  "id": 454,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.2",
  "subdomain_name": "Cloud Security",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: in which cloud model is the customer responsible for managing the operating system and applications Which answer BEST applies in an enterprise environment? [Variant 1-147]",
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
  "id": 455,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.1",
  "subdomain_name": "Network Architecture and Segmentation",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which technique provides the MOST complete isolation between two networks Which answer BEST applies in an enterprise environment? [Variant 1-148]",
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
  "id": 456,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.5",
  "subdomain_name": "Resilience and Business Continuity",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: the maximum acceptable amount of data loss measured in time is known as: Which answer BEST applies in an enterprise environment? [Variant 1-149]",
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
  "id": 457,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.2",
  "subdomain_name": "Cloud Security",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which cloud security solution acts as an intermediary between users and cloud services to enforce security policies Which answer BEST applies in an enterprise environment? [Variant 1-150]",
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
  "id": 458,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.2",
  "subdomain_name": "Cloud Security",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: in which cloud model is the customer responsible for managing the operating system and applications Which answer BEST applies in an enterprise environment? [Variant 1-151]",
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
  "id": 459,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.6",
  "subdomain_name": "Virtualization and Embedded Systems",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes IoT Security in the context of Embedded Systems Which answer BEST applies in an enterprise environment?",
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
  "id": 460,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.4",
  "subdomain_name": "Data Protection",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which technology replaces sensitive data with non-sensitive placeholder values while maintaining format Which answer BEST applies in an enterprise environment? [Variant 1-153]",
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
  "id": 461,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.1",
  "subdomain_name": "Network Architecture and Segmentation",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which technique provides the MOST complete isolation between two networks Which answer BEST applies in an enterprise environment? [Variant 1-154]",
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
  "id": 462,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.6",
  "subdomain_name": "Virtualization and Embedded Systems",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes SCADA in the context of Embedded Systems Which answer BEST applies in an enterprise environment?",
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
  "id": 463,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.3",
  "subdomain_name": "Secure Infrastructure Components",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: what is the PRIMARY difference between an IDS and an IPS Which answer BEST applies in an enterprise environment? [Variant 1-156]",
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
  "id": 464,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.3",
  "subdomain_name": "Secure Infrastructure Components",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: what is the PRIMARY difference between an IDS and an IPS Which answer BEST applies in an enterprise environment? [Variant 1-157]",
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
  "id": 465,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.2",
  "subdomain_name": "Cloud Security",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: in which cloud model is the customer responsible for managing the operating system and applications Which answer BEST applies in an enterprise environment? [Variant 1-158]",
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
  "id": 466,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.3",
  "subdomain_name": "Secure Infrastructure Components",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: what is the PRIMARY difference between an IDS and an IPS Which answer BEST applies in an enterprise environment? [Variant 1-159]",
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
  "id": 467,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.6",
  "subdomain_name": "Virtualization and Embedded Systems",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes FPGA in the context of Embedded Systems Which answer is MOST correct according to CompTIA Security+ SY0-701?",
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
  "id": 468,
  "domain": 3,
  "domainName": "Security Architecture",
  "subdomain_id": "3.3",
  "subdomain_name": "Secure Infrastructure Components",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which security device inspects incoming web traffic and blocks common web application attacks like SQL injection Which answer is MOST correct according to CompTIA Security+ SY0-701?",
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
  "id": 469,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security team is authorized to attempt to exploit vulnerabilities in a system to test its defenses. This is:",
  "options": [
    "Penetration testing",
    "Vulnerability scanning",
    "Risk assessment",
    "Compliance audit"
  ],
  "correctIndex": 0,
  "hint": "Active, authorized exploitation attempts.",
  "explanation": {
    "correct": "Penetration testing involves authorized simulated attacks to identify exploitable vulnerabilities and assess security effectiveness.",
    "incorrect": {
      "1": "Vulnerability scanning identifies potential vulnerabilities but does not exploit them.",
      "2": "Risk assessment evaluates overall organizational risk, not specific exploits.",
      "3": "Compliance audits check adherence to standards, not active exploitation."
    }
  }
},
{
  "id": 470,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "What is the CORRECT order of the incident response phases?",
  "options": [
    "Preparation, Detection, Analysis, Containment, Eradication, Recovery, Lessons Learned",
    "Detection, Preparation, Containment, Recovery, Eradication, Lessons Learned",
    "Containment, Detection, Analysis, Eradication, Recovery, Preparation",
    "Analysis, Detection, Containment, Preparation, Recovery, Eradication"
  ],
  "correctIndex": 0,
  "hint": "Preparation always comes first.",
  "explanation": {
    "correct": "The National Institute of Standards and Technology (NIST) Incident Response (IR) lifecycle follows: Preparation \u2192 Detection & Analysis \u2192 Containment \u2192 Eradication \u2192 Recovery \u2192 Lessons Learned.",
    "incorrect": {
      "1": "Detection cannot come before Preparation \u2013 teams must be prepared first.",
      "2": "Containment requires detection first; you must find the threat before containing it.",
      "3": "Analysis follows detection, and preparation must come before any response."
    }
  }
},
{
  "id": 471,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.7",
  "subdomain_name": "Endpoint and Application Security",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which solution provides continuous monitoring, threat detection, and automated response specifically for endpoint devices?",
  "options": [
    "EDR (Endpoint Detection and Response)",
    "SIEM",
    "IPS",
    "NAC"
  ],
  "correctIndex": 0,
  "hint": "It focuses on laptops, desktops, and servers.",
  "explanation": {
    "correct": "Endpoint Detection and Response (EDR) continuously monitors endpoints for suspicious behavior and provides automated response capabilities.",
    "incorrect": {
      "1": "Security Information and Event Management (SIEM) aggregates logs from all sources, not endpoint-specific monitoring.",
      "2": "Intrusion Prevention System (IPS) monitors and blocks network-level threats.",
      "3": "Network Access Control (NAC) controls network access but doesn't monitor endpoint behavior."
    }
  }
},
{
  "id": 472,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "During which incident response phase are infected systems isolated to prevent further damage?",
  "options": [
    "Containment",
    "Eradication",
    "Recovery",
    "Detection"
  ],
  "correctIndex": 0,
  "hint": "The goal is to stop the spread.",
  "explanation": {
    "correct": "Containment isolates affected systems to prevent the incident from spreading while preserving evidence for analysis.",
    "incorrect": {
      "1": "Eradication removes the threat; containment isolates it first.",
      "2": "Recovery restores systems to normal operation after eradication.",
      "3": "Detection identifies the incident but doesn't isolate systems."
    }
  }
},
{
  "id": 473,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.4",
  "subdomain_name": "Digital Forensics",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes Memory Forensics in the context of Digital Forensics?",
  "options": [
    "It is a primary component of Digital Forensics that ensures Memory Forensics functionality",
    "It is unrelated to Digital Forensics",
    "It replaces all other aspects of Digital Forensics",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Memory Forensics relates to the broader concept of Digital Forensics.",
  "explanation": {
    "correct": "Memory Forensics is indeed a key component of Digital Forensics and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Memory Forensics is directly related to Digital Forensics.",
      "2": "Memory Forensics works alongside other components, it does not replace them.",
      "3": "Memory Forensics is used in modern systems as well."
    }
  }
},
{
  "id": 474,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.6",
  "subdomain_name": "Access Control Models",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which access control model assigns permissions based on a user's job function or position?",
  "options": [
    "RBAC (Role-Based Access Control)",
    "DAC",
    "MAC",
    "ABAC"
  ],
  "correctIndex": 0,
  "hint": "Permissions are tied to roles, not individual users.",
  "explanation": {
    "correct": "Role-Based Access Control (RBAC) assigns permissions based on organizational roles. Users inherit permissions from their assigned role.",
    "incorrect": {
      "1": "Discretionary Access Control (DAC) allows resource owners to set permissions at their discretion.",
      "2": "Mandatory Access Control (MAC) uses security labels and clearance levels set by administrators.",
      "3": "Attribute-Based Access Control (ABAC) uses attributes (location, time, etc.) for dynamic access decisions."
    }
  }
},
{
  "id": 475,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.4",
  "subdomain_name": "Digital Forensics",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes Evidence Collection in the context of Digital Forensics?",
  "options": [
    "It is a primary component of Digital Forensics that ensures Evidence Collection functionality",
    "It is unrelated to Digital Forensics",
    "It replaces all other aspects of Digital Forensics",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Evidence Collection relates to the broader concept of Digital Forensics.",
  "explanation": {
    "correct": "Evidence Collection is indeed a key component of Digital Forensics and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Evidence Collection is directly related to Digital Forensics.",
      "2": "Evidence Collection works alongside other components, it does not replace them.",
      "3": "Evidence Collection is used in modern systems as well."
    }
  }
},
{
  "id": 476,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.8",
  "subdomain_name": "Hardening and Automation",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes Removing Software in the context of Hardening?",
  "options": [
    "It is a primary component of Hardening that ensures Removing Software functionality",
    "It is unrelated to Hardening",
    "It replaces all other aspects of Hardening",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Removing Software relates to the broader concept of Hardening.",
  "explanation": {
    "correct": "Removing Software is indeed a key component of Hardening and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Removing Software is directly related to Hardening.",
      "2": "Removing Software works alongside other components, it does not replace them.",
      "3": "Removing Software is used in modern systems as well."
    }
  }
},
{
  "id": 477,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which solution automates incident response playbooks and orchestrates security tools?",
  "options": [
    "SOAR",
    "SIEM",
    "EDR",
    "NAC"
  ],
  "correctIndex": 0,
  "hint": "Think automation and orchestration of security workflows.",
  "explanation": {
    "correct": "Security Orchestration, Automation, and Response (SOAR) (Security Orchestration, Automation, and Response) automates repetitive security tasks and orchestrates multiple tools.",
    "incorrect": {
      "1": "Security Information and Event Management (SIEM) aggregates and correlates logs but doesn't automate response.",
      "2": "Endpoint Detection and Response (EDR) detects and responds to endpoint threats specifically.",
      "3": "Network Access Control (NAC) controls network access based on device compliance."
    }
  }
},
{
  "id": 478,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.7",
  "subdomain_name": "Endpoint and Application Security",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which solution provides continuous monitoring, threat detection, and automated response specifically for endpoint devices? [Variant 0-9]",
  "options": [
    "EDR (Endpoint Detection and Response)",
    "SIEM",
    "IPS",
    "NAC"
  ],
  "correctIndex": 0,
  "hint": "It focuses on laptops, desktops, and servers.",
  "explanation": {
    "correct": "Endpoint Detection and Response (EDR) continuously monitors endpoints for suspicious behavior and provides automated response capabilities.",
    "incorrect": {
      "1": "Security Information and Event Management (SIEM) aggregates logs from all sources, not endpoint-specific monitoring.",
      "2": "Intrusion Prevention System (IPS) monitors and blocks network-level threats.",
      "3": "Network Access Control (NAC) controls network access but doesn't monitor endpoint behavior."
    }
  }
},
{
  "id": 479,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security team is authorized to attempt to exploit vulnerabilities in a system to test its defenses. This is: [Variant 0-10]",
  "options": [
    "Penetration testing",
    "Vulnerability scanning",
    "Risk assessment",
    "Compliance audit"
  ],
  "correctIndex": 0,
  "hint": "Active, authorized exploitation attempts.",
  "explanation": {
    "correct": "Penetration testing involves authorized simulated attacks to identify exploitable vulnerabilities and assess security effectiveness.",
    "incorrect": {
      "1": "Vulnerability scanning identifies potential vulnerabilities but does not exploit them.",
      "2": "Risk assessment evaluates overall organizational risk, not specific exploits.",
      "3": "Compliance audits check adherence to standards, not active exploitation."
    }
  }
},
{
  "id": 480,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which technology aggregates logs from multiple sources and correlates events to detect security incidents?",
  "options": [
    "SIEM",
    "SOAR",
    "IDS",
    "EDR"
  ],
  "correctIndex": 0,
  "hint": "It collects, correlates, and analyzes log data.",
  "explanation": {
    "correct": "A Security Information and Event Management (SIEM) (Security Information and Event Management) collects logs from multiple sources and uses correlation rules to identify threats.",
    "incorrect": {
      "1": "Security Orchestration, Automation, and Response (SOAR) automates incident response workflows but doesn't primarily aggregate logs.",
      "2": "Intrusion Detection System (IDS) monitors network traffic for threats, not log aggregation.",
      "3": "Endpoint Detection and Response (EDR) monitors endpoints, not centralized log management."
    }
  }
}
]);
