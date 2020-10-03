* Amazon GuardDuty is a continuous security monitoring service that analyzes and processes the following Data sources: 
  * VPC Flow Logs,
  * CloudTrail management event logs, 
  * Cloudtrail S3 data event logs, 
  * DNS logs.
* It uses threat intelligence feeds, such as lists of malicious IP addresses and domains, and machine learning **to identify unexpected and potentially unauthorized and malicious activity** within your AWS environment. 
* This can include issues like:
  * escalations of privileges, 
  * uses of exposed credentials, 
  * communication with malicious IP addresses, URLs, or domains. 
* GuardDuty can detect compromised EC2 instances serving malware or mining bitcoin.
* It also monitors AWS account access behavior for signs of compromise, such as unauthorized infrastructure deployments, like instances deployed in a Region that has never been used, or unusual API calls, like a password policy change to reduce password strength.
* GuardDuty informs you of the status of your AWS environment by producing security findings that you can view:
  *  in the GuardDuty console 
  *  or through Amazon CloudWatch events.