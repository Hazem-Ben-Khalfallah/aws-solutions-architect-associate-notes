* AWS Web Application Firewall (WAF) monitors **HTTP** and **HTTPS** request that are forwarded to 
  * **CloudFront**
  * **ALB** (Application Load Balancer)
  * or **API Gateway**
* WAF is an **Application level** firewall, sit in **layer 7** in **OSI** model.
* The resources are protected via rules such as
  * IP addresses, 
  * country, 
  * request headers, 
  * request body, 
  * query strings, 
  * string from regex, 
  * request length , 
  * SQL injection, 
  * XSS
  * ..
* Aws managed rules or custom rules can be used 

* When a request **matches** a rule statements, the **action** can be:
  *  **allow**
  *  **block**
  *  or **count**