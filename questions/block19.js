// Security+ SY0-701 - Questions 541 to 570
// Block 19 of 30
window.QUESTIONS = (window.QUESTIONS || []).concat([
{
  "id": 541,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which authentication method requires MULTIPLE different types of verification factors? [Variant 0-72]",
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
  "id": 542,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which scoring system rates the severity of security vulnerabilities on a scale of 0 to 10? [Variant 0-73]",
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
  "id": 543,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which protocol allows a user to log in once and access multiple applications without re-authenticating? [Variant 0-74]",
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
  "id": 544,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which protocol allows a user to log in once and access multiple applications without re-authenticating? [Variant 0-75]",
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
  "id": 545,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.7",
  "subdomain_name": "Endpoint and Application Security",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which solution provides continuous monitoring, threat detection, and automated response specifically for endpoint devices? [Variant 0-76]",
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
  "id": 546,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security tool generates an alert for a legitimate attack that is actually occurring. This is classified as a: [Variant 0-77]",
  "options": [
    "True positive",
    "False positive",
    "True negative",
    "False negative"
  ],
  "correctIndex": 0,
  "hint": "The alert is correct – there IS a real threat.",
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
  "id": 547,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.4",
  "subdomain_name": "Digital Forensics",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes Timeline Analysis in the context of Digital Forensics?",
  "options": [
    "It is a primary component of Digital Forensics that ensures Timeline Analysis functionality",
    "It is unrelated to Digital Forensics",
    "It replaces all other aspects of Digital Forensics",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Timeline Analysis relates to the broader concept of Digital Forensics.",
  "explanation": {
    "correct": "Timeline Analysis is indeed a key component of Digital Forensics and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Timeline Analysis is directly related to Digital Forensics.",
      "2": "Timeline Analysis works alongside other components, it does not replace them.",
      "3": "Timeline Analysis is used in modern systems as well."
    }
  }
},
{
  "id": 548,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "What is the CORRECT order of the incident response phases? [Variant 0-79]",
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
  "id": 549,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "What is the CORRECT order of the incident response phases? [Variant 0-80]",
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
  "id": 550,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which protocol allows a user to log in once and access multiple applications without re-authenticating? [Variant 0-81]",
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
  "id": 551,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "During which incident response phase are infected systems isolated to prevent further damage? [Variant 0-82]",
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
  "id": 552,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security team is authorized to attempt to exploit vulnerabilities in a system to test its defenses. This is: [Variant 0-83]",
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
  "id": 553,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which technology aggregates logs from multiple sources and correlates events to detect security incidents? [Variant 0-84]",
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
  "id": 554,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security tool generates an alert for a legitimate attack that is actually occurring. This is classified as a: [Variant 0-85]",
  "options": [
    "True positive",
    "False positive",
    "True negative",
    "False negative"
  ],
  "correctIndex": 0,
  "hint": "The alert is correct – there IS a real threat.",
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
  "id": 555,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which scoring system rates the severity of security vulnerabilities on a scale of 0 to 10? [Variant 0-86]",
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
  "id": 556,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.6",
  "subdomain_name": "Access Control Models",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which access control model assigns permissions based on a user's job function or position? [Variant 0-87]",
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
  "id": 557,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.4",
  "subdomain_name": "Digital Forensics",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes Legal Hold in the context of Digital Forensics?",
  "options": [
    "It is a primary component of Digital Forensics that ensures Legal Hold functionality",
    "It is unrelated to Digital Forensics",
    "It replaces all other aspects of Digital Forensics",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Legal Hold relates to the broader concept of Digital Forensics.",
  "explanation": {
    "correct": "Legal Hold is indeed a key component of Digital Forensics and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Legal Hold is directly related to Digital Forensics.",
      "2": "Legal Hold works alongside other components, it does not replace them.",
      "3": "Legal Hold is used in modern systems as well."
    }
  }
},
{
  "id": 558,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which authentication method requires MULTIPLE different types of verification factors? [Variant 0-89]",
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
  "id": 559,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security tool generates an alert for a legitimate attack that is actually occurring. This is classified as a: [Variant 0-90]",
  "options": [
    "True positive",
    "False positive",
    "True negative",
    "False negative"
  ],
  "correctIndex": 0,
  "hint": "The alert is correct – there IS a real threat.",
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
  "id": 560,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which technology aggregates logs from multiple sources and correlates events to detect security incidents? [Variant 0-91]",
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
  "id": 561,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which technology aggregates logs from multiple sources and correlates events to detect security incidents? [Variant 0-92]",
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
  "id": 562,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.7",
  "subdomain_name": "Endpoint and Application Security",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which solution provides continuous monitoring, threat detection, and automated response specifically for endpoint devices? [Variant 0-93]",
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
  "id": 563,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.8",
  "subdomain_name": "Hardening and Automation",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes Registry in the context of Hardening?",
  "options": [
    "It is a primary component of Hardening that ensures Registry functionality",
    "It is unrelated to Hardening",
    "It replaces all other aspects of Hardening",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Registry relates to the broader concept of Hardening.",
  "explanation": {
    "correct": "Registry is indeed a key component of Hardening and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Registry is directly related to Hardening.",
      "2": "Registry works alongside other components, it does not replace them.",
      "3": "Registry is used in modern systems as well."
    }
  }
},
{
  "id": 564,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security team is authorized to attempt to exploit vulnerabilities in a system to test its defenses. This is: [Variant 0-95]",
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
  "id": 565,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which technology aggregates logs from multiple sources and correlates events to detect security incidents? [Variant 0-96]",
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
  "id": 566,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which protocol allows a user to log in once and access multiple applications without re-authenticating? [Variant 0-97]",
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
  "id": 567,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which protocol allows a user to log in once and access multiple applications without re-authenticating? [Variant 0-98]",
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
  "id": 568,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.7",
  "subdomain_name": "Endpoint and Application Security",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which solution provides continuous monitoring, threat detection, and automated response specifically for endpoint devices? [Variant 0-99]",
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
  "id": 569,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.8",
  "subdomain_name": "Hardening and Automation",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes Firmware Updates in the context of Hardening?",
  "options": [
    "It is a primary component of Hardening that ensures Firmware Updates functionality",
    "It is unrelated to Hardening",
    "It replaces all other aspects of Hardening",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Firmware Updates relates to the broader concept of Hardening.",
  "explanation": {
    "correct": "Firmware Updates is indeed a key component of Hardening and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Firmware Updates is directly related to Hardening.",
      "2": "Firmware Updates works alongside other components, it does not replace them.",
      "3": "Firmware Updates is used in modern systems as well."
    }
  }
},
{
  "id": 570,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which solution automates incident response playbooks and orchestrates security tools? [Variant 0-101]",
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
}
]);
