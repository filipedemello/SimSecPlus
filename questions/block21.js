// Security+ SY0-701 - Questions 601 to 630
// Block 21 of 30
window.QUESTIONS = (window.QUESTIONS || []).concat([
{
  "id": 601,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.8",
  "subdomain_name": "Hardening and Automation",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Disabling Services in the context of Hardening Which answer BEST applies in an enterprise environment?",
  "options": [
    "It is a primary component of Hardening that ensures Disabling Services functionality",
    "It is unrelated to Hardening",
    "It replaces all other aspects of Hardening",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Disabling Services relates to the broader concept of Hardening.",
  "explanation": {
    "correct": "Disabling Services is indeed a key component of Hardening and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Disabling Services is directly related to Hardening.",
      "2": "Disabling Services works alongside other components, it does not replace them.",
      "3": "Disabling Services is used in modern systems as well."
    }
  }
},
{
  "id": 602,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which scoring system rates the severity of security vulnerabilities on a scale of 0 to 10 Which answer BEST applies in an enterprise environment? [Variant 1-133]",
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
  "id": 603,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: what is the CORRECT order of the incident response phases Which answer BEST applies in an enterprise environment? [Variant 1-134]",
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
  "id": 604,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which scoring system rates the severity of security vulnerabilities on a scale of 0 to 10 Which answer BEST applies in an enterprise environment? [Variant 1-135]",
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
  "id": 605,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.4",
  "subdomain_name": "Digital Forensics",
  "difficulty": "medium",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Write Blockers in the context of Digital Forensics Which answer BEST applies in an enterprise environment?",
  "options": [
    "It is a primary component of Digital Forensics that ensures Write Blockers functionality",
    "It is unrelated to Digital Forensics",
    "It replaces all other aspects of Digital Forensics",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Write Blockers relates to the broader concept of Digital Forensics.",
  "explanation": {
    "correct": "Write Blockers is indeed a key component of Digital Forensics and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Write Blockers is directly related to Digital Forensics.",
      "2": "Write Blockers works alongside other components, it does not replace them.",
      "3": "Write Blockers is used in modern systems as well."
    }
  }
},
{
  "id": 606,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which technology aggregates logs from multiple sources and correlates events to detect security incidents Which answer BEST applies in an enterprise environment? [Variant 1-137]",
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
  "id": 607,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: during which incident response phase are infected systems isolated to prevent further damage Which answer BEST applies in an enterprise environment? [Variant 1-138]",
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
  "id": 608,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: during which incident response phase are infected systems isolated to prevent further damage Which answer BEST applies in an enterprise environment? [Variant 1-139]",
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
  "id": 609,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.7",
  "subdomain_name": "Endpoint and Application Security",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which solution provides continuous monitoring, threat detection, and automated response specifically for endpoint devices Which answer BEST applies in an enterprise environment? [Variant 1-140]",
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
  "id": 610,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: a security tool generates an alert for a legitimate attack that is actually occurring. This is classified as a: Which answer BEST applies in an enterprise environment?",
  "options": [
    "True positive",
    "False positive",
    "True negative",
    "False negative"
  ],
  "correctIndex": 0,
  "hint": "The alert is correct \u2013 there IS a real threat.",
  "explanation": {
    "correct": "A true positive occurs when a security tool correctly identifies a real threat and generates an appropriate alert.",
    "incorrect": {
      "1": "A false positive alerts on a non-existent threat (false alarm).",
      "2": "A true negative correctly identifies normal activity as safe.",
      "3": "A false negative fails to detect an actual threat (missed detection)."
    }
  }
},
{
  "id": 611,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: what is the CORRECT order of the incident response phases Which answer BEST applies in an enterprise environment? [Variant 1-142]",
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
  "id": 612,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: what is the CORRECT order of the incident response phases Which answer BEST applies in an enterprise environment? [Variant 1-143]",
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
  "id": 613,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: a security tool generates an alert for a legitimate attack that is actually occurring. This is classified as a: Which answer BEST applies in an enterprise environment? [Variant 1-144]",
  "options": [
    "True positive",
    "False positive",
    "True negative",
    "False negative"
  ],
  "correctIndex": 0,
  "hint": "The alert is correct \u2013 there IS a real threat.",
  "explanation": {
    "correct": "A true positive occurs when a security tool correctly identifies a real threat and generates an appropriate alert.",
    "incorrect": {
      "1": "A false positive alerts on a non-existent threat (false alarm).",
      "2": "A true negative correctly identifies normal activity as safe.",
      "3": "A false negative fails to detect an actual threat (missed detection)."
    }
  }
},
{
  "id": 614,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which authentication method requires MULTIPLE different types of verification factors Which answer BEST applies in an enterprise environment? [Variant 1-145]",
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
  "id": 615,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which solution automates incident response playbooks and orchestrates security tools Which answer BEST applies in an enterprise environment? [Variant 1-146]",
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
  "id": 616,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: a security tool generates an alert for a legitimate attack that is actually occurring. This is classified as a: Which answer BEST applies in an enterprise environment? [Variant 1-147]",
  "options": [
    "True positive",
    "False positive",
    "True negative",
    "False negative"
  ],
  "correctIndex": 0,
  "hint": "The alert is correct \u2013 there IS a real threat.",
  "explanation": {
    "correct": "A true positive occurs when a security tool correctly identifies a real threat and generates an appropriate alert.",
    "incorrect": {
      "1": "A false positive alerts on a non-existent threat (false alarm).",
      "2": "A true negative correctly identifies normal activity as safe.",
      "3": "A false negative fails to detect an actual threat (missed detection)."
    }
  }
},
{
  "id": 617,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which authentication method requires MULTIPLE different types of verification factors Which answer BEST applies in an enterprise environment? [Variant 1-148]",
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
  "id": 618,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.8",
  "subdomain_name": "Hardening and Automation",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes API Integration in the context of Automation Which answer BEST applies in an enterprise environment?",
  "options": [
    "It is a primary component of Automation that ensures API Integration functionality",
    "It is unrelated to Automation",
    "It replaces all other aspects of Automation",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how API Integration relates to the broader concept of Automation.",
  "explanation": {
    "correct": "API Integration is indeed a key component of Automation and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "API Integration is directly related to Automation.",
      "2": "API Integration works alongside other components, it does not replace them.",
      "3": "API Integration is used in modern systems as well."
    }
  }
},
{
  "id": 619,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: a security team is authorized to attempt to exploit vulnerabilities in a system to test its defenses. This is: Which answer BEST applies in an enterprise environment? [Variant 1-150]",
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
  "id": 620,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.8",
  "subdomain_name": "Hardening and Automation",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes DevSecOps in the context of Automation Which answer BEST applies in an enterprise environment?",
  "options": [
    "It is a primary component of Automation that ensures DevSecOps functionality",
    "It is unrelated to Automation",
    "It replaces all other aspects of Automation",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how DevSecOps relates to the broader concept of Automation.",
  "explanation": {
    "correct": "DevSecOps is indeed a key component of Automation and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "DevSecOps is directly related to Automation.",
      "2": "DevSecOps works alongside other components, it does not replace them.",
      "3": "DevSecOps is used in modern systems as well."
    }
  }
},
{
  "id": 621,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which solution automates incident response playbooks and orchestrates security tools Which answer BEST applies in an enterprise environment? [Variant 1-152]",
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
  "id": 622,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: a security team is authorized to attempt to exploit vulnerabilities in a system to test its defenses. This is: Which answer BEST applies in an enterprise environment? [Variant 1-153]",
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
  "id": 623,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which protocol allows a user to log in once and access multiple applications without re-authenticating Which answer BEST applies in an enterprise environment?",
  "options": [
    "SSO (Single Sign-On)",
    "MFA",
    "RADIUS",
    "TACACS+"
  ],
  "correctIndex": 0,
  "hint": "One login, many applications.",
  "explanation": {
    "correct": "Single Sign-On (SSO) enables users to authenticate once and gain access to multiple related applications without repeated logins.",
    "incorrect": {
      "1": "Multi-Factor Authentication (MFA) requires multiple authentication factors but doesn't provide single sign-on.",
      "2": "Remote Authentication Dial-In User Service (RADIUS) authenticates users but doesn't inherently provide Single Sign-On (SSO).",
      "3": "Terminal Access Controller Access Control System (TACACS)+ provides authentication for network devices, not Single Sign-On (SSO) for applications."
    }
  }
},
{
  "id": 624,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: what is the CORRECT order of the incident response phases Which answer BEST applies in an enterprise environment? [Variant 1-155]",
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
  "id": 625,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.6",
  "subdomain_name": "Access Control Models",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which access control model assigns permissions based on a user's job function or position Which answer BEST applies in an enterprise environment? [Variant 1-156]",
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
  "id": 626,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.8",
  "subdomain_name": "Hardening and Automation",
  "difficulty": "medium",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Playbooks in the context of Automation Which answer BEST applies in an enterprise environment?",
  "options": [
    "It is a primary component of Automation that ensures Playbooks functionality",
    "It is unrelated to Automation",
    "It replaces all other aspects of Automation",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Playbooks relates to the broader concept of Automation.",
  "explanation": {
    "correct": "Playbooks is indeed a key component of Automation and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Playbooks is directly related to Automation.",
      "2": "Playbooks works alongside other components, it does not replace them.",
      "3": "Playbooks is used in modern systems as well."
    }
  }
},
{
  "id": 627,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which protocol allows a user to log in once and access multiple applications without re-authenticating Which answer BEST applies in an enterprise environment? [Variant 1-158]",
  "options": [
    "SSO (Single Sign-On)",
    "MFA",
    "RADIUS",
    "TACACS+"
  ],
  "correctIndex": 0,
  "hint": "One login, many applications.",
  "explanation": {
    "correct": "Single Sign-On (SSO) enables users to authenticate once and gain access to multiple related applications without repeated logins.",
    "incorrect": {
      "1": "Multi-Factor Authentication (MFA) requires multiple authentication factors but doesn't provide single sign-on.",
      "2": "Remote Authentication Dial-In User Service (RADIUS) authenticates users but doesn't inherently provide Single Sign-On (SSO).",
      "3": "Terminal Access Controller Access Control System (TACACS)+ provides authentication for network devices, not Single Sign-On (SSO) for applications."
    }
  }
},
{
  "id": 628,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which scoring system rates the severity of security vulnerabilities on a scale of 0 to 10 Which answer BEST applies in an enterprise environment? [Variant 1-159]",
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
  "id": 629,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: during which incident response phase are infected systems isolated to prevent further damage Which answer BEST applies in an enterprise environment? [Variant 1-160]",
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
  "id": 630,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: during which incident response phase are infected systems isolated to prevent further damage Which answer BEST applies in an enterprise environment? [Variant 1-161]",
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
}
]);
