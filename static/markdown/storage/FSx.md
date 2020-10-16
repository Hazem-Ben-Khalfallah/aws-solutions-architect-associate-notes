* Amazon FSx is a fully managed third-party file system solution. It uses SSD storage to provide fast performance with low latency.
* There are two available FSx solutions available in AWS:
  * Amazon FSx for Windows File Server
  * Amazon FSx for Lustre
## Amazon FSx for Windows File Server
* A fully managed native Microsoft Windows file system with full support for the **SMB protocol**, **Windows NTFS**, and **Microsoft Active Directory (AD)** integration.
* Common Use Cases
  * File systems that is accessible by multiple users, and can establish permissions at the file or folder level.
  * Application workloads that require shared file storage provided by Windows-based file systems (NTFS) and that use the SMB protocol.
  * Media workflows like media transcoding, processing, and streaming.
  * Data-intensive analytics workloads.
  * Content management and web serving applications such as IIS
* Works with the following compute services:
  * Amazon EC2
  * Amazon Workspaces instances
  * Amazon AppStream 2.0 instances
  * VMs running in VMWare Cloud on AWS Environments
* Works with Microsoft Active Directory (AD) to integrate your file system with your existing Windows environments.
* Supports the use of AWS Direct Connect or AWS VPN to access your file systems from your on-premises compute instances.
* Microsoft Windows File Share

## Amazon FSx for Lustre
* A high-performance file system optimized for fast processing of workloads. Lustre is a popular open-source parallel file system.
* Since this is a high-performance parallel file system, you can use Amazon FSx as “hot” storage for your highly accessed files, and Amazon S3 as “cold” storage for rarely accessed files.
* When linked to an S3 bucket, an FSx for Lustre file system transparently presents S3 objects as files and allows you to write results back to S3. 
* The Lustre file system provides a POSIX-compliant file system interface.
* Also supports concurrent access to the same file or directory from thousands of compute instances.

## FSx Windows File Servers vs EFS vs FSx for Lustre
| FSx Windows File Servers                                                                                                                                                                                                                                                                                                             | EFS                                                                                                                                                                                                     | FSx for Lustre                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Windows-based applications**, Amazon FSx provides fully managed Windows file servers with features and performance optimized for "lift-and-shift" business-critical application workloads including home directories shares), media workflows, and ERP applications. It is accessible from Windows and instances via the **SMB protocol**. | If you have **Linux-based applications**, Amazon EFS is a cloud-native fully managed file system that provides simple, scalable, elastic file storage accessible from Linux instances via the **NFS protocol**. | For **compute-intensive** and **fast processing workloads**,like high performance computing (**HPC**), machine learning. EDA. and media processing, Amazon FSx for Lustre, provides a file system that's optimized for performance, with **input and output stored on Amazon S3**. |