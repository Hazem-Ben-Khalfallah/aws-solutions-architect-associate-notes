AWS Directory Service is a managed service offering that provides directories that contain
information about your organization, including users, groups, computers, and other
resources.

## Overview
You can choose from **4 directory types**:
* AWS Managed Microsoft AD (*Active Directory*)
* Simple AD
* AD Connector
* Amazon Cognito User Pools

### AWS Managed Microsoft AD
* AWS Managed Microsoft AD is **highly-available**: each directory is deployed across multiple AZs.
* Monitoring automatically detects and replaces domain controllers that fail. 
* In addition, data replication and automated daily snapshots are configured for you. 
* There is no software to install, and AWS handles all of the patching and software updates.
* You can set up trust relationships with your existing Active Directory domains to extend those directories to AWS cloud services

### Simple AD
* Simple AD is **compatible** with Microsoft Active Directory (**Microsoft AD**)
* powered by Linux-**Samba** Active Directory
* Simple AD supports commonly used ActiveDirectory features such as:
  * user accounts, group memberships, 
  * domain-joining Amazon EC2 instances running Linux and Microsoft Windows, 
  * Kerberos-based Single Sign-On (SSO),
  * group policies
* Simple AD provides daily automated snapshots to enable **point-in-time** recovery.
* you cannot set up trust relationships between Simple AD and other Active Directory domains

### AD Connector
* AD Connector is a proxy for redirecting directory requests to your on-premise Microsoft Active Directory without caching any information in the cloud. 
* After setup, your users can use their existing corporate credentials to log on to AWS applications, such as 
  * Amazon WorkSpaces, 
  * Amazon WorkDocs, 
  * or Amazon WorkMail. 
* With the proper IAM permissions, they can also access the AWS Management Console and manage AWS resources such as Amazon EC2 instances or Amazon S3 buckets.
* With AD Connector, you continue to manage your Active Directory as usual. For example, adding new users, adding new groups, or updating passwords are all accomplished using standard directory administration tools with your on-premises directory.

### Amazon Cognito User Pools
This directory type will simply redirect you to [Cognito](#/securityandidentity/cognito).

## When to use each type?
### AWS Managed Microsoft AD
This Directory Service is your best choice if:
* you have  **>= 5,000** users 
* and need a **trust relationship** set up **between** an **AWS-hosted directory** and your **on-premises** directories.

### Simple AD 
In most cases, Simple AD is the **least expensive option** and your best choice if 
* you have **<= 5,000** users 
* and **don’t need** the more **advanced** Microsoft Active Directory features.

### AD Connector
AD Connector is your best choice when you want to **use your existing on-premises directory** with AWS cloud services.