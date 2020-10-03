## Overview
Key management is the management of cryptographic keys within a cryptosystem. This includes dealing with the **generation**, **exchange**, **storage**, **use**, and **replacement** of keys.

AWS offers two services that provide you with the ability to manage your own **symmetric** or **asymmetric** cryptographic keys:
* **AWS KMS**: A service enabling you to generate, store, enable/disable, and delete symmetric keys
* **AWS CloudHSM**: A service providing you with secure cryptographic key storage by making Hardware Security Modules (HSMs) available on the AWS cloud.

## Features
* Managed service that enables you to easily create and control the keys used for cryptographic operations.
* A shared key management infrastructure with FIPS 140–2 Level 2 compliance
* Currently supports 50+ AWS services.
* A regional service
* Highly Available (HA). Keys are kept as multiple copies in a single region to make sure its durability and reliability.
* It integrates fully with IAM and CloudTrail for Permission Management and Auditing respectively.
* Supports both symmetric and asymmetric key encryption. *Until 2019, it only supported symmetric but now it supports both key encryption aspects With the support of asymmetric key encryption, it widened the aspect of interoperability by being able to connect to many other Key Management Infrastructures in the market.*
* AWS KMS lets you create keys that can never be exported from the service and that can be used to encrypt and decrypt data based on policies you define. 
* By using AWS KMS, you gain more control over access to data you encrypt. 
* You can use the key management and cryptographic features directly in your applications or through AWS cloud services that are integrated with AWS KMS. 
* Whether you are writing applications for AWS or using AWS cloud services, AWS KMS enables you to maintain control over who can use your keys and gain access to your encrypted data.

## Encryption comparaison
|           | En/decrypt | Secret key - storage | Secret key - management | Server or Client Encryption |
| --------- | ---------- | -------------------- | ----------------------- | --------------------------- |
| SSE - S3  | S3         | S3                   | S3                      | Server                      |
| SSE - C   | AWS        | Client               | Client                  | Server                      |
| SSE - KMS | AWS        | AWS                  | AWS/Client              | Server                      |
| CSE       | Client     | Client               | Client                  | Client                      |