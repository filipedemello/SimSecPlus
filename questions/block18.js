// Security+ SY0-701 - Questions 511 to 540
// Block 18 of 30
window.QUESTIONS = (window.QUESTIONS || []).concat([
{
  "id": 511,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security tool generates an alert for a legitimate attack that is actually occurring. This is classified as a: [Variant 0-42]",
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
  "id": 512,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which authentication method requires MULTIPLE different types of verification factors? [Variant 0-43]",
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
  "id": 513,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.8",
  "subdomain_name": "Hardening and Automation",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes API Integration in the context of Automation?",
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
  "id": 514,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security team is authorized to attempt to exploit vulnerabilities in a system to test its defenses. This is: [Variant 0-45]",
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
  "id": 515,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.8",
  "subdomain_name": "Hardening and Automation",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes DevSecOps in the context of Automation?",
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
  "id": 516,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which solution automates incident response playbooks and orchestrates security tools? [Variant 0-47]",
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
  "id": 517,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security team is authorized to attempt to exploit vulnerabilities in a system to test its defenses. This is: [Variant 0-48]",
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
  "id": 518,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which protocol allows a user to log in once and access multiple applications without re-authenticating?",
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
  "id": 519,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "What is the CORRECT order of the incident response phases? [Variant 0-50]",
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
  "id": 520,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.6",
  "subdomain_name": "Access Control Models",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which access control model assigns permissions based on a user's job function or position? [Variant 0-51]",
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
  "id": 521,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.8",
  "subdomain_name": "Hardening and Automation",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes Playbooks in the context of Automation?",
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
  "id": 522,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which protocol allows a user to log in once and access multiple applications without re-authenticating? [Variant 0-53]",
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
  "id": 523,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which scoring system rates the severity of security vulnerabilities on a scale of 0 to 10? [Variant 0-54]",
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
  "id": 524,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "During which incident response phase are infected systems isolated to prevent further damage? [Variant 0-55]",
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
  "id": 525,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "During which incident response phase are infected systems isolated to prevent further damage? [Variant 0-56]",
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
  "id": 526,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security tool generates an alert for a legitimate attack that is actually occurring. This is classified as a: [Variant 0-57]",
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
  "id": 527,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which scoring system rates the severity of security vulnerabilities on a scale of 0 to 10? [Variant 0-58]",
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
  "id": 528,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which authentication method requires MULTIPLE different types of verification factors? [Variant 0-59]",
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
  "id": 529,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which protocol allows a user to log in once and access multiple applications without re-authenticating? [Variant 0-60]",
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
  "id": 530,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which authentication method requires MULTIPLE different types of verification factors? [Variant 0-61]",
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
  "id": 531,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.6",
  "subdomain_name": "Access Control Models",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which access control model assigns permissions based on a user's job function or position? [Variant 0-62]",
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
  "id": 532,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which solution automates incident response playbooks and orchestrates security tools? [Variant 0-63]",
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
  "id": 533,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "What is the CORRECT order of the incident response phases? [Variant 0-64]",
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
  "id": 534,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.6",
  "subdomain_name": "Access Control Models",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which access control model assigns permissions based on a user's job function or position? [Variant 0-65]",
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
  "id": 535,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.8",
  "subdomain_name": "Hardening and Automation",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes Disk Encryption in the context of Hardening?",
  "options": [
    "It is a primary component of Hardening that ensures Disk Encryption functionality",
    "It is unrelated to Hardening",
    "It replaces all other aspects of Hardening",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how Disk Encryption relates to the broader concept of Hardening.",
  "explanation": {
    "correct": "Disk Encryption is indeed a key component of Hardening and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Disk Encryption is directly related to Hardening.",
      "2": "Disk Encryption works alongside other components, it does not replace them.",
      "3": "Disk Encryption is used in modern systems as well."
    }
  }
},
{
  "id": 536,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "Which protocol allows a user to log in once and access multiple applications without re-authenticating? [Variant 0-67]",
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
  "id": 537,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "During which incident response phase are infected systems isolated to prevent further damage? [Variant 0-68]",
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
  "id": 538,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "Which authentication method requires MULTIPLE different types of verification factors? [Variant 0-69]",
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
  "id": 539,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security team is authorized to attempt to exploit vulnerabilities in a system to test its defenses. This is: [Variant 0-70]",
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
  "id": 540,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.8",
  "subdomain_name": "Hardening and Automation",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "Which of the following BEST describes CI/CD Security in the context of Automation?",
  "options": [
    "It is a primary component of Automation that ensures CI/CD Security functionality",
    "It is unrelated to Automation",
    "It replaces all other aspects of Automation",
    "It is only used in legacy systems"
  ],
  "correctIndex": 0,
  "hint": "Think about how CI/CD Security relates to the broader concept of Automation.",
  "explanation": {
    "correct": "Continuous Integration / Continuous Deployment (CI/CD) Security is indeed a key component of Automation and plays a fundamental role in security implementations.",
    "incorrect": {
      "1": "Continuous Integration / Continuous Deployment (CI/CD) Security is directly related to Automation.",
      "2": "Continuous Integration / Continuous Deployment (CI/CD) Security works alongside other components, it does not replace them.",
      "3": "Continuous Integration / Continuous Deployment (CI/CD) Security is used in modern systems as well."
    }
  }
}
]);
