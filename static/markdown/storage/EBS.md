- [Features](#features)
- [Types of EBS Volumes](#types-of-ebs-volumes)
  - [General Purpose SSD (gp2)](#general-purpose-ssd-gp2)
  - [Provisioned IOPS SSD (io1)](#provisioned-iops-ssd-io1)
  - [Throughput Optimized HDD (st1)](#throughput-optimized-hdd-st1)
  - [Cold HDD (sc1)](#cold-hdd-sc1)
- [Encryption](#encryption)
- [EBS Snapshots](#ebs-snapshots)

* **Block level storage** volumes for use with **EC2** instances.
* Well-suited for use as the primary storage for file systems, databases, or for any applications that require fine granular updates and access to raw, unformatted, block-level storage.
* Well-suited to both **database-style** applications (**random reads and writes**), and to **throughput-intensive** applications (**long, continuous reads and writes**).
* New EBS volumes receive their maximum performance the moment that they are available and do not require initialization (formerly known as pre-warming). However, storage blocks on volumes that were restored from snapshots must be initialized (pulled down from Amazon S3 and written to the volume) before you can access the block.
* **Termination protection is turned off by default** and must be manually enabled (keeps the volume/data when the instance is terminated)
* You can have up to 5,000 EBS volumes by default
* You can have up to 10,000 snapshots by default 

## Features
* Different types of storage options: 
  * **General Purpose SSD** (gp2), 
  * **Provisioned IOPS SSD** (io1), 
  * **Throughput Optimized HDD** (st1), 
  * and **Cold HDD** (sc1) volumes up to 16 TiB in size.
* You can mount **multiple volumes** on the **same instance**
* you can mount **a volume** to **multiple instances** at a time using Amazon **EBS Multi-Attach**.
* Enable Multi-Attach on EBS Provisioned IOPS io1 volumes to allow a single volume to be concurrently attached to up to sixteen AWS Nitro System-based Amazon EC2 instances within the same AZ.
* You can create a file system on top of these volumes, or use them in any other way you would use a block device (like a hard drive).
* You can use encrypted EBS volumes to meet data-at-rest encryption requirements for regulated/audited data and applications.
* You can create point-in-time **snapshots** of EBS volumes, which are persisted to **Amazon S3**. 
* Similar to AMIs. Snapshots can be copied across AWS regions.
* Volumes are **created in a specific AZ**, and can then be **attached** to any instances **in that same AZ**. 
* To make a volume available outside of the AZ, you can create a snapshot and restore that snapshot to a new volume anywhere in that region.
* You can copy snapshots to other regions and then restore them to new volumes there, making it easier to leverage multiple AWS regions for geographical expansion, data center migration, and disaster recovery.
* Performance metrics, such as bandwidth, throughput, latency, and average queue length, provided by Amazon CloudWatch, allow you to monitor the performance of your volumes to make sure that you are providing enough performance for your applications without paying for resources you don’t need.
* You can detach an EBS volume from an instance explicitly or by terminating the instance. However, if the instance is running, you must first unmount the volume from the instance.
* If an EBS volume is the root device of an instance, you must stop the instance before you can detach the volume.
* You can use AWS Backup, an automated and centralized backup service, to protect EBS volumes and your other AWS resources. 
* AWS Backup is integrated with the following services to give you a fully managed AWS backup solution:
  *  Amazon DynamoDB,
  *  Amazon EBS,
  *  Amazon RDS,
  *  Amazon EFS,
  *  AWS Storage Gateway.
* With AWS Backup, you can configure backups for EBS volumes, automate backup scheduling, set retention policies, and monitor backup and restore activity.

## Types of EBS Volumes
### General Purpose SSD (gp2)
* Base performance of 3 IOPS/GiB, with the ability to burst to 3,000 IOPS for extended periods of time. 
* Support up to 16,000 IOPS and 250 MB/s of throughput.
* The burst duration of a volume is dependent on the size of the volume, the burst IOPS required, and the credit balance when the burst begins. Burst IO duration is computed using the following formula:
  > Burst duration  = (Credit balance) [(Burst IOPS) – 3 (Volume size in GiB)]

* If your gp2 volume uses all of its I/O credit balance, the maximum IOPS performance of the volume remains at the baseline IOPS performance level and the volume’s maximum throughput is reduced to the baseline IOPS multiplied by the maximum I/O size.
* Throughput for a gp2 volume can be calculated using the following formula, up to the throughput limit of 160 MiB/s:
  > Throughput in MiB/s = (Volume size in GiB) (IOPS per GiB) × (I/O size in KiB)

### Provisioned IOPS SSD (io1)
* Designed for I/O-intensive workloads, particularly database workloads, which are sensitive to storage performance and consistency.
* Allows you to specify a consistent IOPS rate when you create the volume

### Throughput Optimized HDD (st1)
* **Low-cost magnetic** storage that focuses on **throughput** rather than IOPS.
* Throughput of up to 500 MiB/s.
* Subject to throughput and throughput-credit caps, the available throughput of an st1 volume is expressed by the following formula:
    > Throughput = (Volume size)(Credit accumulation rate per TiB)

### Cold HDD (sc1)
* Low-cost magnetic storage that focuses on throughput rather than IOPS.
* Throughput of up to 250 MiB/s.




| Volume Type | General Purpose SSD (gp2) | Provisioned IOPS SSD (io1) | Throughput Optimized HDD (st1) | Cold HDD (sc1) |
| -- | -- | -- | -- | -- |
| Use Cases | - Recommended for most workloads <br> - System boot volumes <br> -  Virtual desktops <br> - Low-latency interactive apps <br> - Development and test environments | - Critical business applications that require sustained IOPS performance, or more than 16,000 IOPS or 250 MiB/s of throughput per volume <br> - When attached to Nitro system EC2 instances, peak performance can go up to 64,000 IOPS and 1,000 MB/s of throughput per volume. <br> - Large database workloads. | - Streaming workloads requiring consistent, fast throughput at a low price <br> - Big data <br> - Data Warehouse  <br> - Log processing | - Throughput-oriented storage for large volumes of data that is infrequently accessed <br> - Scenarios where the lowest storage cost is important |
| Boot volume | yes | yes | no | no |
| Volume Size | 1 GiB – 16 TiB | 4 GiB – 16 TiB | 500 GiB – 16 TiB | 500 GiB – 16 TiB |
| Max. IOPS/Volume | 16,000 | 64,000 | 500 | 250 |
| Max. Throughput/Volume | 250 MiB/s | 1000 MiB/s | 500 MiB/s | 250 MiB/s |
| Dominant Performance Attribute | IOPS | IOPS | MiB/s | MiB/s |

## Encryption
* Data stored at rest on an encrypted volume, disk I/O, and snapshots created from it are all encrypted.
* Also provides encryption for data in-transit from EC2 to EBS since encryption occurs on the servers that hosts EC2 instances.
* The following types of data are encrypted:
  * Data at rest inside the volume
  * All data moving between the volume and the instance
  * All snapshots created from the volume
  * All volumes created from those snapshots
* Uses AWS Key Management Service (AWS KMS) master keys when creating encrypted volumes and any snapshots created from your encrypted volumes.
* Volumes restored from encrypted snapshots are automatically encrypted.
* EBS encryption is only available on certain instance types.
* There is no direct way to encrypt an existing unencrypted volume, or to remove encryption from an encrypted volume. However, you can migrate data between encrypted and unencrypted volumes.
* You can now enable Amazon Elastic Block Store (EBS) Encryption by Default, ensuring that all new EBS volumes created in your account are encrypted.

## EBS Snapshots
* Back up the data on your EBS volumes to S3 by taking point-in-time snapshots.
* Snapshots are **incremental** backups, which means that only the blocks on the device that have changed after your most recent snapshot are saved. This minimizes the time required to create the snapshot and saves on storage costs by not duplicating data.
* When you delete a snapshot, only the data unique to that snapshot is removed.
![images/ebs/ebs1.png](static/images/ebs/ebs1.png)
* You can share a snapshot across AWS accounts by modifying its access permissions.
* You can make copies of your own snapshots as well as snapshots that have been shared with you.
* A snapshot is constrained to the Region where it was created.
* EBS snapshots broadly support EBS encryption.
* You can’t delete a snapshot of the root device of an EBS volume used by a registered AMI. You must first deregister the AMI before you can delete the snapshot.
* Each account can have up to 5 concurrent snapshot copy requests to a single destination Region.
* User-defined tags are not copied from the source snapshot to the new snapshot.
* Snapshots are constrained to the Region in which they were created. To share a snapshot with another Region, copy the snapshot to that Region.
* Snapshots that you intend to share must instead be encrypted with a custom CMK.
