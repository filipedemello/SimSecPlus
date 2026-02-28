// Security+ SY0-701 - Questions 571 to 600
// Block 20 of 30
window.QUESTIONS = (window.QUESTIONS || []).concat([
{
  "id": 571,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.8",
  "subdomain_name": "Hardening and Automation",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes Group Policy in the context of Hardening?",
  "options": [
    "It is a primary component of Hardening that ensures Group Policy functionality",
    "It is unrelated to Hardening",
    "It replaces all other aspects of Hardening",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Group Policy relates to the broader concept of Hardening.",
  "explanation": {
    "correct": "Group Policy is indeed a key component of Hardening and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Group Policy is directly related to Hardening.",
      "2": "Group Policy works alongside other components, it does not replace them.",
      "3": "Group Policy is used in modern systems as well."
    }
  }
},
{
  "id": 572,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which authentication method requires MULTIPLE different types of verification factors? [Variant 0-103]",
  "options": [
    "MFA (Multi-Factor Authentication)",
    "SSO",
    "LDAP",
    "RADIUS"
  ],
  "correctIndex": 0,
  "hint": "Something you know, have, and/or are.",
  "explanation": {
    "correct": "Multi-Factor Authentication (MFA) requires two or more different authentication factors: something you know, something you have, and/or something you are.",
    "incorrect": {
      "1": "Single Sign-On (SSO) allows one login for multiple applications but doesn't require multiple factors.",
      "2": "Lightweight Directory Access Protocol (LDAP) is a directory service protocol, not an authentication method requiring multiple factors.",
      "3": "Remote Authentication Dial-In User Service (RADIUS) is an authentication protocol but doesn't inherently require multiple factors."
    }
  }
},
{
  "id": 573,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.8",
  "subdomain_name": "Hardening and Automation",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes CIS Benchmarks in the context of Hardening?",
  "options": [
    "It is a primary component of Hardening that ensures CIS Benchmarks functionality",
    "It is unrelated to Hardening",
    "It replaces all other aspects of Hardening",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how CIS Benchmarks relates to the broader concept of Hardening.",
  "explanation": {
    "correct": "CIS Benchmarks is indeed a key component of Hardening and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "CIS Benchmarks is directly related to Hardening.",
      "2": "CIS Benchmarks works alongside other components, it does not replace them.",
      "3": "CIS Benchmarks is used in modern systems as well."
    }
  }
},
{
  "id": 574,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: a security team is authorized to attempt to exploit vulnerabilities in a system to test its defenses. This is: Which answer BEST applies in an enterprise environment?",
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
  "id": 575,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: what is the CORRECT order of the incident response phases Which answer BEST applies in an enterprise environment?",
  "options": [
    "Preparation, Detection, Analysis, Containment, Eradication, Recovery, Lessons Learned",
    "Detection, Preparation, Containment, Recovery, Eradication, Lessons Learned",
    "Containment, Detection, Analysis, Eradication, Recovery, Preparation",
    "Analysis, Detection, Containment, Preparation, Recovery, Eradication"
  ],
  "correctIndex": 0,
  "hint": "Preparation always comes first.",
  "explanation": {
    "correct": "The National Institute of Standards and Technology (NIST) Incident Response (IR) lifecycle follows: Preparation → Detection & Analysis → Containment → Eradication → Recovery → Lessons Learned.",
    "incorrect": {
      "1": "Detection cannot come before Preparation – teams must be prepared first.",
      "2": "Containment requires detection first; you must find the threat before containing it.",
      "3": "Analysis follows detection, and preparation must come before any response."
    }
  }
},
{
  "id": 576,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.7",
  "subdomain_name": "Endpoint and Application Security",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which solution provides continuous monitoring, threat detection, and automated response specifically for endpoint devices Which answer BEST applies in an enterprise environment?",
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
  "id": 577,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: during which incident response phase are infected systems isolated to prevent further damage Which answer BEST applies in an enterprise environment?",
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
  "id": 578,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.4",
  "subdomain_name": "Digital Forensics",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Memory Forensics in the context of Digital Forensics Which answer BEST applies in an enterprise environment?",
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
  "id": 579,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.6",
  "subdomain_name": "Access Control Models",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which access control model assigns permissions based on a user's job function or position Which answer BEST applies in an enterprise environment?",
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
  "id": 580,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.4",
  "subdomain_name": "Digital Forensics",
  "difficulty": "medium",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Evidence Collection in the context of Digital Forensics Which answer BEST applies in an enterprise environment?",
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
  "id": 581,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.8",
  "subdomain_name": "Hardening and Automation",
  "difficulty": "medium",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Removing Software in the context of Hardening Which answer BEST applies in an enterprise environment?",
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
  "id": 582,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which solution automates incident response playbooks and orchestrates security tools Which answer BEST applies in an enterprise environment?",
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
  "id": 583,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.7",
  "subdomain_name": "Endpoint and Application Security",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which solution provides continuous monitoring, threat detection, and automated response specifically for endpoint devices Which answer BEST applies in an enterprise environment? [Variant 1-114]",
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
  "id": 584,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: a security team is authorized to attempt to exploit vulnerabilities in a system to test its defenses. This is: Which answer BEST applies in an enterprise environment? [Variant 1-115]",
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
  "id": 585,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which technology aggregates logs from multiple sources and correlates events to detect security incidents Which answer BEST applies in an enterprise environment?",
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
},
{
  "id": 586,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which solution automates incident response playbooks and orchestrates security tools Which answer BEST applies in an enterprise environment? [Variant 1-117]",
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
  "id": 587,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.7",
  "subdomain_name": "Endpoint and Application Security",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which solution provides continuous monitoring, threat detection, and automated response specifically for endpoint devices Which answer BEST applies in an enterprise environment? [Variant 1-118]",
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
  "id": 588,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.4",
  "subdomain_name": "Digital Forensics",
  "difficulty": "medium",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Network Forensics in the context of Digital Forensics Which answer BEST applies in an enterprise environment?",
  "options": [
    "It is a primary component of Digital Forensics that ensures Network Forensics functionality",
    "It is unrelated to Digital Forensics",
    "It replaces all other aspects of Digital Forensics",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Network Forensics relates to the broader concept of Digital Forensics.",
  "explanation": {
    "correct": "Network Forensics is indeed a key component of Digital Forensics and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Network Forensics is directly related to Digital Forensics.",
      "2": "Network Forensics works alongside other components, it does not replace them.",
      "3": "Network Forensics is used in modern systems as well."
    }
  }
},
{
  "id": 589,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.8",
  "subdomain_name": "Hardening and Automation",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Scripting in the context of Automation Which answer BEST applies in an enterprise environment?",
  "options": [
    "It is a primary component of Automation that ensures Scripting functionality",
    "It is unrelated to Automation",
    "It replaces all other aspects of Automation",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Scripting relates to the broader concept of Automation.",
  "explanation": {
    "correct": "Scripting is indeed a key component of Automation and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Scripting is directly related to Automation.",
      "2": "Scripting works alongside other components, it does not replace them.",
      "3": "Scripting is used in modern systems as well."
    }
  }
},
{
  "id": 590,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which solution automates incident response playbooks and orchestrates security tools Which answer BEST applies in an enterprise environment? [Variant 1-121]",
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
  "id": 591,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.8",
  "subdomain_name": "Hardening and Automation",
  "difficulty": "medium",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Runbooks in the context of Automation Which answer BEST applies in an enterprise environment?",
  "options": [
    "It is a primary component of Automation that ensures Runbooks functionality",
    "It is unrelated to Automation",
    "It replaces all other aspects of Automation",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Runbooks relates to the broader concept of Automation.",
  "explanation": {
    "correct": "Runbooks is indeed a key component of Automation and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Runbooks is directly related to Automation.",
      "2": "Runbooks works alongside other components, it does not replace them.",
      "3": "Runbooks is used in modern systems as well."
    }
  }
},
{
  "id": 592,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which solution automates incident response playbooks and orchestrates security tools Which answer BEST applies in an enterprise environment? [Variant 1-123]",
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
  "id": 593,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.6",
  "subdomain_name": "Access Control Models",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which access control model assigns permissions based on a user's job function or position Which answer BEST applies in an enterprise environment? [Variant 1-124]",
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
  "id": 594,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which technology aggregates logs from multiple sources and correlates events to detect security incidents Which answer BEST applies in an enterprise environment? [Variant 1-125]",
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
},
{
  "id": 595,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "medium",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which scoring system rates the severity of security vulnerabilities on a scale of 0 to 10 Which answer BEST applies in an enterprise environment?",
  "options": [
    "CVSS",
    "CVE",
    "CWE",
    "CPE"
  ],
  "correctIndex": 0,
  "hint": "It provides a numerical severity score.",
  "explanation": {
    "correct": "Common Vulnerability Scoring System (CVSS) (Common Vulnerability Scoring System) rates vulnerabilities 0-10 based on impact, exploitability, and other factors.",
    "incorrect": {
      "1": "Common Vulnerabilities and Exposures (CVE) is an identifier system (e.g., CVE-2024-1234), not a scoring system.",
      "2": "Common Weakness Enumeration (CWE) categorizes software weakness types, not severity scores.",
      "3": "CPE identifies specific software products, not vulnerability severity."
    }
  }
},
{
  "id": 596,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which authentication method requires MULTIPLE different types of verification factors Which answer BEST applies in an enterprise environment?",
  "options": [
    "MFA (Multi-Factor Authentication)",
    "SSO",
    "LDAP",
    "RADIUS"
  ],
  "correctIndex": 0,
  "hint": "Something you know, have, and/or are.",
  "explanation": {
    "correct": "Multi-Factor Authentication (MFA) requires two or more different authentication factors: something you know, something you have, and/or something you are.",
    "incorrect": {
      "1": "Single Sign-On (SSO) allows one login for multiple applications but doesn't require multiple factors.",
      "2": "Lightweight Directory Access Protocol (LDAP) is a directory service protocol, not an authentication method requiring multiple factors.",
      "3": "Remote Authentication Dial-In User Service (RADIUS) is an authentication protocol but doesn't inherently require multiple factors."
    }
  }
},
{
  "id": 597,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: during which incident response phase are infected systems isolated to prevent further damage Which answer BEST applies in an enterprise environment? [Variant 1-128]",
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
  "id": 598,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.4",
  "subdomain_name": "Digital Forensics",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Disk Imaging in the context of Digital Forensics Which answer BEST applies in an enterprise environment?",
  "options": [
    "It is a primary component of Digital Forensics that ensures Disk Imaging functionality",
    "It is unrelated to Digital Forensics",
    "It replaces all other aspects of Digital Forensics",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Disk Imaging relates to the broader concept of Digital Forensics.",
  "explanation": {
    "correct": "Disk Imaging is indeed a key component of Digital Forensics and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Disk Imaging is directly related to Digital Forensics.",
      "2": "Disk Imaging works alongside other components, it does not replace them.",
      "3": "Disk Imaging is used in modern systems as well."
    }
  }
},
{
  "id": 599,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which technology aggregates logs from multiple sources and correlates events to detect security incidents Which answer BEST applies in an enterprise environment? [Variant 1-130]",
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
},
{
  "id": 600,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.6",
  "subdomain_name": "Access Control Models",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which access control model assigns permissions based on a user's job function or position Which answer BEST applies in an enterprise environment? [Variant 1-131]",
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
}
]);
