## IAM (Identity and Access Management)

AWS Identity and Access Management (IAM) enables you to securely control access to AWS services and resources for your users.

* Allows for centralized control and shared access to your AWS Account and/or AWS services
* By default when you create a user, they have **NO permissions** to do anything
* **Root** account has **full admin access** upon account creation
* **Not region specific**, can be shared between all regions
* Granular permission sets for AWS resources
* Includes **Federation** Integration which taps into Active Directory, Facebook, Linkedin, etc. for authentication (**Identity Federation**)
* **Multi-factor** authentication support
* Allows configuration of **temporary access** for users, devices and services
* Set up and manage **password policy** and **password rotation policy** for IAM users
* Integration with many different AWS services
* Supports **PCI DSS** compliance (*Payment Card Industry Data Security Standard*)
* Access can be applied to
  * **Users** - End users (people)
  * **Groups** - Collection of users under one set of permissions
  * **Roles** - Assigned to AWS resources. Example: specifying what the resource (such as EC2) is allowed to access on another resource (S3)
  * **Policies** - **JSON** Document that defines one or more permissions
* Policies can be applied to users, groups and roles
* You can assign up to **10** managed policies to a single group
* Policy documents must have a version, and a statement in the body; The statement must consist of:
  *  **Effects** (Allow, Deny), 
  *  **Actions** (Which action to allow/deny such a * for all actions), and 
  *  **Resources** (affected resources such as * for all resources)
* All resources can share the same policy document
* There are 3 different types of **roles**
  * **Service** Roles
  * **Cross account access** roles: Used when you have multiple AWS accounts and another AWS account must interact with the current AWS account.
  * **Identity provider access** roles: Roles for *Facebook*, *Google* or similar Identity providers.
* In order for a new IAM user to be able to log into the **console**, the user must have a **password** set.
* By default a new users access is only accomplished through the use of the **access key/secret key**
* If the users password is a generated password, it also will only be shown at the time of creation.
* **Customizable Console Sign-in link** can be configured on the main IAM page (ie *aws.yourdomain.com*)
* **Customizable Console Sign-in links** must be **globally unique**. If a sign in link name is already taken, you must choose an alternative
* Root account is email address that you used to register your account
* Recommended that **root account**:
  *  should not be used for login
  *  should be secured with **Multi-factor Authentication** (MFA)
* Can create **Access Key ID** & **Secret Access Keys** to allow IAM users (or service accounts) to be used with AWS CLI or API calls.
* **Access Key ID** & **Secret Access Keys** are not the same as **Username** & **Password** and are not interchangeable. 
  * **Username** & **Password** are used to login to console.
  * **Access Key ID** & **Secret Access Keys** are used for programmatic access (via the APIs or CLI)
* When creating a user's credentials, you can only see/download the credentials at the time of creation not after.
* Access Keys can be retired, and new ones can be created in the event that secret access keys are lost.
* To create a user password, once the users have been created, choose the user you want to set the password for and from the User Actions drop list, click manage password. Here you can opt to create a generated or custom password. If generated, there is an option to force the user to set a custom password on next login. Once a generated password has been issued, you can see the password which is the same as the access keys. Its shown once only.
* Click on Policies from the left side menu and choose the policies that you want to apply to your users. When you pick a policy that you want applied to a user, select the policy, and then from the top Policy Actions drop menu, choose attach and select the user that you want to assign the policy to.

## IAM ARNs
**arn:partition:service:region:account:resource**

Where:
* **partition** identifies the partition that the resource is in. For standard AWS Regions, the partition is aws. If you have resources in other partitions, the partition is aws-partitionname. For example, the partition for resources in the China (Beijing) Region is aws-cn. You cannot delegate access between accounts in different partitions.
* **service** identifies the AWS product. For IAM resources, this is always iam.
* **region** is the Region the resource resides in. For IAM resources, this is always kept blank.
* **account** is the AWS account ID with no hyphens (for example, 123456789012).
* **resource** is the portion that identifies the specific resource by name.


| Resource or Operation                                  | Default Limit |
| ------------------------------------------------------ | ------------- |
| Groups per account                                     | 100           |
| Instance profiles                                      | 100           |
| Roles                                                  | 250           |
| Server Certificates                                    | 20            |
| Users                                                  | 5000          |
| Number of policies allowed to attach to a single group | 10            |

Create a group:
![images/iam/iam1.png](static/images/iam/iam1.png)

Policy: json defined permissions
![images/iam/iam2.png](static/images/iam/iam2.png)

IAM roles are a secure way to grant permissions to entities that you trust.
![images/iam/iam3.png](static/images/iam/iam3.png)