// Security+ SY0-701 - Questions 631 to 660
// Block 22 of 30
window.QUESTIONS = (window.QUESTIONS || []).concat([
{
  "id": 631,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: a security tool generates an alert for a legitimate attack that is actually occurring. This is classified as a: Which answer BEST applies in an enterprise environment? [Variant 1-162]",
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
  "id": 632,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which scoring system rates the severity of security vulnerabilities on a scale of 0 to 10 Which answer BEST applies in an enterprise environment? [Variant 1-163]",
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
  "id": 633,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which authentication method requires MULTIPLE different types of verification factors Which answer BEST applies in an enterprise environment? [Variant 1-164]",
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
  "id": 634,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which protocol allows a user to log in once and access multiple applications without re-authenticating Which answer BEST applies in an enterprise environment? [Variant 1-165]",
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
  "id": 635,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which authentication method requires MULTIPLE different types of verification factors Which answer BEST applies in an enterprise environment? [Variant 1-166]",
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
  "id": 636,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.6",
  "subdomain_name": "Access Control Models",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which access control model assigns permissions based on a user's job function or position Which answer BEST applies in an enterprise environment? [Variant 1-167]",
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
  "id": 637,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which solution automates incident response playbooks and orchestrates security tools Which answer BEST applies in an enterprise environment? [Variant 1-168]",
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
  "id": 638,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: what is the CORRECT order of the incident response phases Which answer BEST applies in an enterprise environment? [Variant 1-169]",
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
  "id": 639,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.6",
  "subdomain_name": "Access Control Models",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which access control model assigns permissions based on a user's job function or position Which answer BEST applies in an enterprise environment? [Variant 1-170]",
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
  "id": 640,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.8",
  "subdomain_name": "Hardening and Automation",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Disk Encryption in the context of Hardening Which answer BEST applies in an enterprise environment?",
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
  "id": 641,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which protocol allows a user to log in once and access multiple applications without re-authenticating Which answer BEST applies in an enterprise environment? [Variant 1-172]",
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
  "id": 642,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: during which incident response phase are infected systems isolated to prevent further damage Which answer BEST applies in an enterprise environment? [Variant 1-173]",
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
  "id": 643,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which authentication method requires MULTIPLE different types of verification factors Which answer BEST applies in an enterprise environment? [Variant 1-174]",
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
  "id": 644,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: a security team is authorized to attempt to exploit vulnerabilities in a system to test its defenses. This is: Which answer BEST applies in an enterprise environment? [Variant 1-175]",
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
  "id": 645,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.8",
  "subdomain_name": "Hardening and Automation",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes CI/CD Security in the context of Automation Which answer BEST applies in an enterprise environment?",
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
},
{
  "id": 646,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which authentication method requires MULTIPLE different types of verification factors Which answer BEST applies in an enterprise environment? [Variant 1-177]",
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
  "id": 647,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which scoring system rates the severity of security vulnerabilities on a scale of 0 to 10 Which answer BEST applies in an enterprise environment? [Variant 1-178]",
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
  "id": 648,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which protocol allows a user to log in once and access multiple applications without re-authenticating Which answer BEST applies in an enterprise environment? [Variant 1-179]",
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
  "id": 649,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which protocol allows a user to log in once and access multiple applications without re-authenticating Which answer BEST applies in an enterprise environment? [Variant 1-180]",
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
  "id": 650,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.7",
  "subdomain_name": "Endpoint and Application Security",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which solution provides continuous monitoring, threat detection, and automated response specifically for endpoint devices Which answer BEST applies in an enterprise environment? [Variant 1-181]",
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
  "id": 651,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: a security tool generates an alert for a legitimate attack that is actually occurring. This is classified as a: Which answer BEST applies in an enterprise environment? [Variant 1-182]",
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
  "id": 652,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.4",
  "subdomain_name": "Digital Forensics",
  "difficulty": "medium",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Timeline Analysis in the context of Digital Forensics Which answer BEST applies in an enterprise environment?",
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
  "id": 653,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: what is the CORRECT order of the incident response phases Which answer BEST applies in an enterprise environment? [Variant 1-184]",
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
  "id": 654,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: what is the CORRECT order of the incident response phases Which answer BEST applies in an enterprise environment? [Variant 1-185]",
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
  "id": 655,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which protocol allows a user to log in once and access multiple applications without re-authenticating Which answer BEST applies in an enterprise environment? [Variant 1-186]",
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
  "id": 656,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: during which incident response phase are infected systems isolated to prevent further damage Which answer BEST applies in an enterprise environment? [Variant 1-187]",
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
  "id": 657,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: a security team is authorized to attempt to exploit vulnerabilities in a system to test its defenses. This is: Which answer BEST applies in an enterprise environment? [Variant 1-188]",
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
  "id": 658,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which technology aggregates logs from multiple sources and correlates events to detect security incidents Which answer BEST applies in an enterprise environment? [Variant 1-189]",
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
  "id": 659,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: a security tool generates an alert for a legitimate attack that is actually occurring. This is classified as a: Which answer BEST applies in an enterprise environment? [Variant 1-190]",
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
  "id": 660,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which scoring system rates the severity of security vulnerabilities on a scale of 0 to 10 Which answer BEST applies in an enterprise environment? [Variant 1-191]",
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
}
]);
