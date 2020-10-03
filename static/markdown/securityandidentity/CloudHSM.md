## Overview
There are multiple cryptography services are offered by AWS.
* AWS Key Management Service (KMS)
* AWS Certificate Manager
* AWS Secrets Manager
* AWS Cloud HSM

Theoretically, all above services are working as Hardware Security Modules (HSMs). Out of them, CloudHSM has given more control to you and you are basically responsible to manage it. All the others basically managed by AWS.


## Features
* The Hardware Security Module (HSM) is a dedicated hardware security module under your exclusive control. That means you get the dedicated access to HSM appliances. Only you have access to your keys and operations on the keys. 
* HSMs are located in AWS data centers and it is managed and monitored by AWS. 
* HSMs are **FIPS 140–2 Level 3** complied and handled inside your VPC, isolated from the rest of the network. 
