* Amazon Cognito lets you easily **add** user **sign-up and sign-in** to your mobile and web apps.
* Amazon Cognito has two authentication methods, independent of one another 
  * Sign in via third party federation
  * Cognito user pools
* you have the options to **authenticate users through social identity providers** such as Facebook, Twitter, or Amazon, via **SAML 2.0** identity solutions, or by using your **own identity system**. 
* Can enable users to sign up or sign in with an **email address** or **phone number**.
* **support** SMS-based multi-factor authentication (**MFA**).
  
## User Pools & Identity Pools
### User Pools
* for authentication purpose
* manage sign-up sign-in functionality for mobile and web app
* can sign-in directly (use email, password) or use Facebook, Amazon, Google

### Identity Pools
* for authorization purpose
* provide temporary AWS credentials to access AWS services like S3 or DynamoDB

![images/cognito/cognito1.png](static/images/cognito/cognito1.png)

## Cognito Synchronisation
* Amazon Cognito enables you to **save data locally** on users devices, allowing your applications to work even when the devices are **offline**. 
* You can thenc**synchronize data across user devices** so that their app experience remains consistent regardless of the device they use.
* Save mobile data like game states or preferences.
* Use SNS to send notification to all devices associated with user identity whenever data stored in the cloud changes (email address change, password, setting in app... )
![images/cognito/cognito2.png](static/images/cognito/cognito2.png)
