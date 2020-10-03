## RAM (Resource Access Manager)

AWS Resource Access Manager (RAM) is a service that enables you to easily and securely **share** AWS resources with **any AWS account** or **within your AWS Organization**. You can share **AWS Transit Gateways**, **Subnets**, **AWS License Manager configurations**, and **Amazon Route 53 Resolver rules** resources with RAM.

Many organizations use multiple accounts to create administrative or billing isolation, and to limit the impact of errors. RAM **eliminates the need** to create **duplicate** resources in **multiple accounts**, reducing the operational overhead of managing those resources in every single account you own. You can create resources centrally in a multi-account environment, and use RAM to share those resources across accounts in **3** simple steps:

1- create a **Resource Share**,
2- specify resources, 
3- specify principals with whom to share. A principal can be:
  * AWS accounts, 
  * organizational units (OU), 
  * or an entire organization from AWS Organizations 

RAM is available to you at **no additional charge** (free).

## Benefits
### Reduce Operational Overhead
Procure AWS resources centrally, and use RAM to share resources such as subnets or License Manager configurations with other accounts. This eliminates the need to provision duplicate resources in every account in a multi-account environment, reducing the operational overhead of managing those resources in every account.
Improve Security and Visibility
RAM leverages existing policies and permissions set in AWS Identity and Access Management (IAM) to govern the consumption of shared resources. RAM also provides comprehensive visibility into shared resources to set alarms and visualize logs through integration with Amazon CloudWatch and AWS CloudTrail.

### Optimize Costs
Sharing resources such as AWS License Manager configurations across accounts allows you to leverage licenses in multiple parts of your company to increase utilization and optimize costs.

## How it works?
![images/ram/ram1.png](static/images/ram/ram1.png)