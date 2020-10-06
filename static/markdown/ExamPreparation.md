## AWS Certification Exam Guide
Review the [exam guide](https://d1.awsstatic.com/training-and-certification/docs-sa-assoc/AWS-Certified-Solutions-Architect-Associate_Exam-Guide.pdf), which contains the content outline and target audience for the certification exam. Perform a self-assessment to identify your knowledge or skills gaps.

## My Preparation path
* Go through the [ACloudGuru AWS certified solutions architect associate](https://acloud.guru/learn/aws-certified-solutions-architect-associate) course [23.5 *hrs*]
* Go through the [ACloudGuru AWS well architected framework (*)](https://acloud.guru/learn/aws-well-architected-framework) course [4.7 *hrs*]
* Go through the [ACloudGuru AWS RDS (*)](https://acloud.guru/learn/aws-rds) course [3.1 *hrs*]
* Attempt the [practice tests by Neal Davis](https://www.udemy.com/course/aws-certified-solutions-architect-associate-practice-tests-k/) at Udemy. After each test, note down the concepts I had difficulties with.
* Attempt the [practice tests by Jon Bonso](https://www.udemy.com/course/aws-certified-solutions-architect-associate-amazon-practice-exams-saa-c02/) at Udemy. Again, after each test, note down the concepts I had difficulties with.

So you should go through the notes only after you have done a course that explains the basics, such as the one from ACloudGuru.

_(*) This course is optionnal_

## Deep dive
The following courses are by no means required to pass the AWS certification. They are listed to get a more in depth view about some AWS critical services.
* [S3 master class](https://acloud.guru/learn/s3-masterclass) course [10.7 *hrs*]
* [Identity and Access Management (IAM) Concepts](https://acloud.guru/learn/identity-and-access-management-concepts) course [1.5 *hrs*]
* [How to Properly Secure an S3 Bucket](https://acloud.guru/learn/how-to-properly-secure-an-s3-bucket) course [2.2 *hrs*]
* [AWS Security Essentials](https://acloud.guru/learn/4653d0ed-8896-42af-988f-756d4bcf583e) course [11.2 *hrs*]
* [Learn AWS by Doing](https://acloud.guru/learn/178db59b-70f1-4bd8-8d74-9ab9263f8f9a) course [19.5 *hrs*]
* [Building a Full-Stack Serverless Application on AWS](https://acloud.guru/learn/871c7714-6ba7-46f9-9458-b60c779e5a18) course [7.8 *hrs*]
* [Amazon DynamoDB Deep Dive](https://acloud.guru/learn/4d91ceee-353d-47be-af9e-996ece43dca6) course [15.9 *hrs*]


## Core AWS Services to Focus On
* [EC2](#/compute/ec2) – As the most fundamental compute service offered by AWS, you should know about EC2 inside out.
* Lambda – Lambda is the common service used for serverless applications. Study how it is integrated with other AWS services to build a full stack serverless app.
* [ELB](#/compute/ec2) – Load balancing is very important for a highly available system. Study about the different types of ELBs, and the features each of them supports.
* [Auto Scaling](#/compute/ec2) – Study what services in AWS can be auto scaled, what triggers scaling, and how auto scaling increases/decreases the number of instances.
* [EBS]() – As the primary storage solution of EC2, study on the types of EBS volumes available. Also study how to secure, backup and restore EBS volumes.
* [S3 / Glacier]() – AWS offers many types of S3 storage depending on your needs. Study what these types are and what differs between them. Also review on the capabilities of S3 such as hosting a static website, securing access to objects using policies, lifecycle policies, etc. Learn as much about S3 as you can.
* [Storage Gateway]() – There are occasional questions about Storage Gateway in the exam. You should understand when and which type of Storage Gateway should be used compared to using services like S3 or EBS. You should also know the use cases and differences between DataSync and Storage Gateway.
* [EFS]() – EFS is a service highly associated with EC2, much like EBS. Understand when to use EFS, compared to using S3, EBS or instance store. Exam questions involving EFS usually ask the trade off between cost and efficiency of the service compared to other storage services.
* [RDS / Aurora]() – Know how each RDS database differs from one another, and how they are different from Aurora. Determine what makes Aurora unique, and when it should be preferred from other databases (in terms of function, speed, cost, etc). Learn about parameter groups, option groups, and subnet groups.
* [DynamoDB]() – The exam includes lots of DynamoDB questions, so read as much about this service as you can. Consider how DynamoDB compares to RDS, Elasticache and Redshift This service is also commonly used for serverless applications along with Lambda.
* [Elasticache]() – Familiarize yourself with Elasticache redis and its functions. Determine the areas/services where you can place a caching mechanism to improve data throughput, such as managing session state of an ELB, optimizing RDS instances, etc.
* [VPC/NACL/Security Groups]() – Study every service that is used to create a VPC (subnets, route tables, internet gateways, nat gateways, VPN gateways, etc). Also, review on the differences of network access control lists and security groups, and during which situations they are applied.
* [Route 53]() – Study the different types of records in Route 53. Study also the different routing policies. Know what hosted zones and domains are.
* [IAM]() – Services such as IAM Users, Groups, Policies and Roles are the most important to learn. Study how IAM integrates with other services and how it secures your application through different policies. Also read on the best practices when using IAM.
* [CloudWatch]() – Study how monitoring is done in AWS and what types of metrics are sent to CloudWatch. Also read upon Cloudwatch Logs, CloudWatch Alarms, and the custom metrics made available with CloudWatch Agent.
* [CloudTrail]() – Familiarize yourself with how CloudTrail works, and what kinds of logs it stores as compared to CloudWatch Logs.
* [Kinesis]() – Read about Kinesis sharding and Kinesis Data Streams. Have a high level understanding of how each type of Kinesis Stream works.
* [CloudFront]() – Study how CloudFront helps speed up websites. Know what content sources CloudFront can serve from. Also check the kinds of certificates CloudFront accepts.
* [SQS]() – Gather info on why SQS is helpful in decoupling systems. Study how messages in the queues are being managed (standard queues, FIFO queues, dead letter queues). Know the differences between SQS, SNS, SES, and Amazon MQ.
* [SNS]() – Study the function of SNS and what services can be integrated with it. Also be familiar with the supported recipients of SNS notifications.
* [SWF]() / [CloudFormation]() / [OpsWorks]() – Study how these services function. Differentiate the capabilities and use cases of each of them. Have a high level understanding of the kinds of scenarios they are usually used in.
