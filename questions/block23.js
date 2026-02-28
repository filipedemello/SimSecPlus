// Security+ SY0-701 - Questions 661 to 690
// Block 23 of 30
window.QUESTIONS = (window.QUESTIONS || []).concat([
{
  "id": 661,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.6",
  "subdomain_name": "Access Control Models",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which access control model assigns permissions based on a user's job function or position Which answer BEST applies in an enterprise environment? [Variant 1-192]",
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
  "id": 662,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.4",
  "subdomain_name": "Digital Forensics",
  "difficulty": "medium",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Legal Hold in the context of Digital Forensics Which answer BEST applies in an enterprise environment?",
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
  "id": 663,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which authentication method requires MULTIPLE different types of verification factors Which answer BEST applies in an enterprise environment? [Variant 1-194]",
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
  "id": 664,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: a security tool generates an alert for a legitimate attack that is actually occurring. This is classified as a: Which answer BEST applies in an enterprise environment? [Variant 1-195]",
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
  "id": 665,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which technology aggregates logs from multiple sources and correlates events to detect security incidents Which answer BEST applies in an enterprise environment? [Variant 1-196]",
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
  "id": 666,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which technology aggregates logs from multiple sources and correlates events to detect security incidents Which answer BEST applies in an enterprise environment? [Variant 1-197]",
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
  "id": 667,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.7",
  "subdomain_name": "Endpoint and Application Security",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which solution provides continuous monitoring, threat detection, and automated response specifically for endpoint devices Which answer BEST applies in an enterprise environment? [Variant 1-198]",
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
  "id": 668,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.8",
  "subdomain_name": "Hardening and Automation",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Registry in the context of Hardening Which answer BEST applies in an enterprise environment?",
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
  "id": 669,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: a security team is authorized to attempt to exploit vulnerabilities in a system to test its defenses. This is: Which answer BEST applies in an enterprise environment? [Variant 1-200]",
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
  "id": 670,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which technology aggregates logs from multiple sources and correlates events to detect security incidents Which answer BEST applies in an enterprise environment? [Variant 1-201]",
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
  "id": 671,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which protocol allows a user to log in once and access multiple applications without re-authenticating Which answer BEST applies in an enterprise environment? [Variant 1-202]",
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
  "id": 672,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "medium",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which protocol allows a user to log in once and access multiple applications without re-authenticating Which answer BEST applies in an enterprise environment? [Variant 1-203]",
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
  "id": 673,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.7",
  "subdomain_name": "Endpoint and Application Security",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which solution provides continuous monitoring, threat detection, and automated response specifically for endpoint devices Which answer BEST applies in an enterprise environment? [Variant 1-204]",
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
  "id": 674,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.8",
  "subdomain_name": "Hardening and Automation",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Firmware Updates in the context of Hardening Which answer BEST applies in an enterprise environment?",
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
  "id": 675,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which solution automates incident response playbooks and orchestrates security tools Which answer BEST applies in an enterprise environment? [Variant 1-206]",
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
  "id": 676,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.8",
  "subdomain_name": "Hardening and Automation",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Group Policy in the context of Hardening Which answer BEST applies in an enterprise environment?",
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
  "id": 677,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.5",
  "subdomain_name": "Identity and Access Management",
  "difficulty": "easy",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which authentication method requires MULTIPLE different types of verification factors Which answer BEST applies in an enterprise environment? [Variant 1-208]",
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
  "id": 678,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.8",
  "subdomain_name": "Hardening and Automation",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes CIS Benchmarks in the context of Hardening Which answer BEST applies in an enterprise environment?",
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
  "id": 679,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: a security team is authorized to attempt to exploit vulnerabilities in a system to test its defenses. This is: Which answer is MOST correct according to CompTIA Security+ SY0-701?",
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
  "id": 680,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "easy",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: what is the CORRECT order of the incident response phases Which answer is MOST correct according to CompTIA Security+ SY0-701?",
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
  "id": 681,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.7",
  "subdomain_name": "Endpoint and Application Security",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which solution provides continuous monitoring, threat detection, and automated response specifically for endpoint devices Which answer is MOST correct according to CompTIA Security+ SY0-701?",
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
  "id": 682,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.3",
  "subdomain_name": "Incident Response",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: during which incident response phase are infected systems isolated to prevent further damage Which answer is MOST correct according to CompTIA Security+ SY0-701?",
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
  "id": 683,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.4",
  "subdomain_name": "Digital Forensics",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Memory Forensics in the context of Digital Forensics Which answer is MOST correct according to CompTIA Security+ SY0-701?",
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
  "id": 684,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.6",
  "subdomain_name": "Access Control Models",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which access control model assigns permissions based on a user's job function or position Which answer is MOST correct according to CompTIA Security+ SY0-701?",
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
  "id": 685,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.4",
  "subdomain_name": "Digital Forensics",
  "difficulty": "medium",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Evidence Collection in the context of Digital Forensics Which answer is MOST correct according to CompTIA Security+ SY0-701?",
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
  "id": 686,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.8",
  "subdomain_name": "Hardening and Automation",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which of the following BEST describes Removing Software in the context of Hardening Which answer is MOST correct according to CompTIA Security+ SY0-701?",
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
  "id": 687,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "hard",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which solution automates incident response playbooks and orchestrates security tools Which answer is MOST correct according to CompTIA Security+ SY0-701?",
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
  "id": 688,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.7",
  "subdomain_name": "Endpoint and Application Security",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: which solution provides continuous monitoring, threat detection, and automated response specifically for endpoint devices Which answer is MOST correct according to CompTIA Security+ SY0-701? [Variant 2-219]",
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
  "id": 689,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.2",
  "subdomain_name": "Vulnerability Management",
  "difficulty": "hard",
  "weight": 1,
  "status": "active",
  "question": "A security analyst needs to determine: a security team is authorized to attempt to exploit vulnerabilities in a system to test its defenses. This is: Which answer is MOST correct according to CompTIA Security+ SY0-701? [Variant 2-220]",
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
  "id": 690,
  "domain": 4,
  "domainName": "Security Operations",
  "subdomain_id": "4.1",
  "subdomain_name": "Monitoring and Logging",
  "difficulty": "medium",
  "weight": 1,
  "status": "archived",
  "question": "A security analyst needs to determine: which technology aggregates logs from multiple sources and correlates events to detect security incidents Which answer is MOST correct according to CompTIA Security+ SY0-701?",
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
