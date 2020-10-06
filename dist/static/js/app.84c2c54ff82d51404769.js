webpackJsonp([2],{100:function(e,t){e.exports={appName:"AWS Solutions Architect Associate Note",headerNavigation:[{name:"AWS Solutions Architect Associate Note",path:"/"}],landingPage:"/",topics:["database","security"],pages:[{route:"/",name:"Dashboard",icon:"address-book",children:[{route:"/exampreparation",name:"Exam preparation path",description:"Exam preparation",topics:["preparation"],icon:"graduation-cap",markdown:"/static/markdown/ExamPreparation.md"},{route:"wellarchitectedframework",name:"Well-Architected Framework",description:"Well-Architected Framework",topics:["Well-Architected Framework"],icon:"ruler-combined",markdown:"/static/markdown/WellArchitectedFramework.md"},{route:"whitepapers",name:"White Papers & FAQs",description:"Read White Papers & FAQs",topics:["white papers","FAQs"],icon:"file-pdf",markdown:"/static/markdown/WhitePapersAndFAQs.md"},{route:"securityandidentity",name:"Security and Identity",description:"IAM, Resource Access Manager, Cognito, Secrets Manager, GuardDuty, Macie, KMS, Cloud HSM, Directory Service, WAF, Shield",topics:["security"],cssClass:"security-identity-compliance",children:[{route:"/iam",name:"IAM",fullName:"Identity and Access Management",description:"Manage access to AWS resources",cssClass:"iam",topics:["security","iam"],markdown:"/static/markdown/securityandidentity/IAM.md"},{route:"/ram",name:"RAM",fullName:"Resource Access Manager",description:"Share AWS resources with other AWS accounts.",cssClass:"ram",topics:["security","RAM"],markdown:"/static/markdown/securityandidentity/RAM.md"},{route:"/cognito",name:"Cognito",description:"Authentication & Authorization for Web and mobile apps",cssClass:"cognito",topics:["security","Cognito","Web Identity Federation"],markdown:"/static/markdown/securityandidentity/Cognito.md"},{route:"/secretsmanager",name:"Secrets Manager",description:"Easily rotate, manage, and retrieve secrets throughout their lifecycle",cssClass:"secrets-manager",topics:["security","Secrets Manager"],markdown:"/static/markdown/securityandidentity/SecretsManager.md"},{route:"/guardduty",name:"GuardDuty",description:"Intelligent threat detection to protect your AWS accounts and workloads",cssClass:"guardDuty",topics:["security","GuardDuty"],markdown:"/static/markdown/securityandidentity/GuardDuty.md"},{route:"/macie",name:"Macie",description:"Discover and protect your sensitive data at scale",cssClass:"macie",topics:["security","Macie"],markdown:"/static/markdown/securityandidentity/Macie.md"},{route:"/kms",name:"KMS",fullName:"Key Management Service",description:"Create keys and control encryption across AWS and beyond.",cssClass:"kms",topics:["security","Kms"],markdown:"/static/markdown/securityandidentity/KMS.md"},{route:"/cloudhsm",name:"Cloud HSM",fullName:"Hardware Security Module",description:"Protects keys on a on a FIPS 140-2 Level 3 validated hardware",cssClass:"cloudHSM",topics:["security","CloudHSM"],markdown:"/static/markdown/securityandidentity/CloudHSM.md"},{route:"/directoryservice",name:"Directory Service",description:"Host and Manage Active Directory.",cssClass:"cloudHSM",topics:["security","Directory Service"],markdown:"/static/markdown/securityandidentity/DirectoryService.md"},{route:"/waf",name:"WAF",fullName:"Web Application Firewall",description:"Protect web applications from common web exploits",cssClass:"waf",topics:["security","WAF","Firewall"],markdown:"/static/markdown/securityandidentity/WAF.md"},{route:"/shield",name:"Shield",description:"Managed DDoS protection service",cssClass:"shield",topics:["security","Shield","DDos"],markdown:"/static/markdown/securityandidentity/Shield.md"}]},{route:"storage",name:"Storage",description:"S3, EFS, FSX, Storage Gateway",topics:["storage"],cssClass:"storage",children:[{route:"/s3",name:"S3",fullName:"Simple Storage Service",description:"Store objects in cloud",cssClass:"s3",topics:["storage","S3"],markdown:"/static/markdown/storage/S3.md"},{route:"/efs",name:"EFS",fullName:"Elastic File System",description:"Managed file storage for EC2",cssClass:"efs",topics:["storage","EFS"],markdown:"/static/markdown/storage/EFS.md"},{route:"/fsx",name:"FSx",description:"Fully managed third-party file systems optimized for a variety of workloads",cssClass:"fsx",topics:["storage","FSx"],markdown:"/static/markdown/storage/FSx.md"},{route:"/storagegateway",name:"Storage Gateway",description:"Hybrid storage integration",cssClass:"storage-gateway",topics:["storage","Storage Gateway"],markdown:"/static/markdown/storage/StorageGateway.md"}]},{route:"database",name:"Database",description:"RDS, DynamoDB, Redshift, Elasticache",cssClass:"database",topics:["database"],children:[{route:"/rds",name:"RDS",fullName:"Relational Database Service",description:"Managed Relational Database Service",cssClass:"rds",topics:["database","RDS"],markdown:"/static/markdown/database/RDS.md"},{route:"/dynamodb",name:"DynamoDB",description:"Managed NoSQL database",cssClass:"dynamoDB",topics:["database","DynamoDB"],markdown:"/static/markdown/database/DynamoDB.md"},{route:"elasticache",name:"ElastiCache",description:"In-Memory Cache",cssClass:"elasticache",topics:["database","ElastiCache"],markdown:"/static/markdown/database/ElastiCache.md"}]},{route:"compute",name:"Compute",description:"EC2, Lambda, Elastic Beanstalk, ECS",topics:["compute"],cssClass:"compute",children:[{route:"/ec2",name:"EC2",fullName:"Elastic Compute Cloud",description:"Virtual servers in Cloud",cssClass:"ec2",topics:["Compute","EC2"],markdown:"/static/markdown/Compute/EC2.md"},{route:"/lambda",name:"Lambda",description:"Run code without thinking about servers",cssClass:"lambda",topics:["Compute","Lambda"],markdown:"/static/markdown/compute/Lambda.md"},{route:"/elasticbeanstalk",name:"Elastic Beanstalk",description:"Run and manage Web Apps",cssClass:"elastic-beanstalk",topics:["Compute","Elastic Beanstalk"],markdown:"/static/markdown/compute/ElasticBeanstalk.md"},{route:"/ecs",name:"ECS",fullName:"Elastic Container Service",description:"Highly secure, reliable, and scalable way to run Docker containers",cssClass:"ecs",topics:["Compute","ECS"],markdown:"/static/markdown/compute/ECS.md"}]},{route:"migrationandtransfer",name:"Migration & Transfer",description:"DMS, DataSync, Snow",topics:["migration","transfert"],cssClass:"migrate-Transfer",children:[{route:"/dms",name:"DMS",fullName:"Database Migration Service",description:"Managed Database Migration Service",cssClass:"dms",topics:["migration","transfert","DMS"],markdown:"/static/markdown/migrationandtransfer/DMS.md"},{route:"/datasync",name:"DataSync",description:"simplifies, automates, and accelerates moving data",cssClass:"datasync",topics:["migration","transfert","DataSync"],markdown:"/static/markdown/migrationandtransfer/DataSync.md"},{route:"/snow",name:"Snow",description:"Large Scale Data Transport",cssClass:"snow",topics:["migration","transfert","Snow"],markdown:"/static/markdown/migrationandtransfer/Snow.md"}]},{route:"networkingandcontentdelivery",name:"Networking & Content Delivery",description:"VPC, CloudFront, Route 53, API Gateway, Direct Connect, Global Accelerator",topics:["networking","content delivery"],cssClass:"networking-content-delivery",children:[{route:"/vpc",name:"VPC",fullName:"Virtual Private Cloud",description:"Isolated Cloud Resources",cssClass:"vpc",topics:["networking","content delivery","VPC"],markdown:"/static/markdown/networkingandcontentdelivery/VPC.md"},{route:"/cloudfront",name:"CloudFront",description:"Global Content Delivery Network",cssClass:"cloudfront",topics:["networking","content delivery","CloudFront"],markdown:"/static/markdown/networkingandcontentdelivery/CloudFront.md"},{route:"/route53",name:"Route 53",description:"Scalable DNS and Domain Name Registration",cssClass:"route53",topics:["networking","content delivery","Route 53"],markdown:"/static/markdown/networkingandcontentdelivery/Route53.md"},{route:"/apigateway",name:"API Gateway",description:"Scalable DNS and Domain Name Registration",cssClass:"api-gateway",topics:["networking","content delivery","API Gateway"],markdown:"/static/markdown/networkingandcontentdelivery/APIGateway.md"},{route:"/directconnect",name:"Direct Connect",description:"Dedicated Network Connection to AWS",cssClass:"direct-connect",topics:["networking","content delivery","Direct Connect"],markdown:"/static/markdown/networkingandcontentdelivery/DirectConnect.md"},{route:"/globalaccelerator",name:"Global Accelerator",description:"Improve your application’s availability and performance using the AWS Global Network",cssClass:"global-accelerator",topics:["networking","content delivery","Global Accelerator"],markdown:"/static/markdown/networkingandcontentdelivery/GlobalAccelerator.md"}]},{route:"managementandgovernance",name:"Management & Governance",description:"AWS Organizations, Cloud watch, Cloud trail, AWS Auto Scaling, Parameter Store, CloudFormation, AWS Well-Architected Tool",topics:["management","gouvernance"],cssClass:"management-governance",children:[{route:"/organizations",name:"AWS Organizations",description:"Central governance and management across AWS accounts.",cssClass:"organizations",topics:["management","gouvernance","AWS Organizations"],markdown:"/static/markdown/managementandgovernance/Organizations.md"},{route:"/cloudwatch",name:"CloudWatch",description:"Monitor Resources and Applications.",cssClass:"cloudwatch",topics:["management","gouvernance","CloudWatch"],markdown:"/static/markdown/managementandgovernance/CloudWatch.md"},{route:"/cloudtrail",name:"CloudTrail",description:"Track User Activity and API Usage.",cssClass:"cloudtrail",topics:["management","gouvernance","CloudTrail"],markdown:"/static/markdown/managementandgovernance/CloudTrail.md"},{route:"/opsworks",name:"OpsWorks",description:"Configuration Management with Chef and Puppet.",cssClass:"opsworks",topics:["management","gouvernance","OpsWorks"],markdown:"/static/markdown/managementandgovernance/OpsWorks.md"},{route:"/autoscaling",name:"AWS Auto Scaling",description:"Quickly scale your entire application on AWS.",cssClass:"autoscaling",topics:["management","gouvernance","Auto Scaling"],markdown:"/static/markdown/managementandgovernance/AutoScaling.md"},{route:"/parameterstore",name:"Systems Manager - Parameter Store",description:"Secrets and configuration data management.",cssClass:"parameterstore",topics:["management","gouvernance","Parameter Store"],markdown:"/static/markdown/managementandgovernance/ParameterStore.md"},{route:"/cloudformation",name:"CloudFormation",description:"Infrastructure provisionning as Code.",cssClass:"cloudformation",topics:["management","gouvernance","CloudFormation"],markdown:"/static/markdown/managementandgovernance/CloudFormation.md"},{route:"/wellarchitectedtool",name:"AWS Well-Architected Tool",description:"Learn best practices, measure, and improve your workloads.",cssClass:"well-architected-tool",topics:["management","gouvernance","Well-Architected Tool"],markdown:"/static/markdown/managementandgovernance/WellArchitectedTool.md"}]},{route:"developertools",name:"Developer Tools",description:"X-Ray",topics:["developertools"],cssClass:"developer-tools",children:[{route:"/xray",name:"X-Ray",description:"Analyze and Debug Your Applications.",cssClass:"x-ray",topics:["developertools","X-Ray"],markdown:"/static/markdown/developertools/XRay.md"}]},{route:"analytics",name:"Analytics",description:"Athena, Amazon Redshift, EMR, Kinesis, Data Pipeline",topics:["analytics"],cssClass:"analytics",children:[{route:"/athena",name:"Athena",description:"Query Data in S3 using SQL.",cssClass:"athena",topics:["analytics","Athena"],markdown:"/static/markdown/analytics/Athena.md"},{route:"/redshift",name:"Redshift",description:"Data Warehousing",cssClass:"redshift",topics:["analytics","Redshift"],markdown:"/static/markdown/analytics/Redshift.md"},{route:"/emr",name:"EMR",fullName:"Elastic MapReduce",description:"Managed Hadoop Framework",cssClass:"emr",topics:["analytics","EMR"],markdown:"/static/markdown/analytics/EMR.md"},{route:"/kinesis",name:"Kinesis",description:"Managed Hadoop Framework",cssClass:"kinesis",topics:["analytics","Kinesis"],markdown:"/static/markdown/analytics/Kinesis.md"},{route:"/datapipeline",name:"Data Pipeline",description:"Orchestration for Data-Driven Workflows",cssClass:"data-pipeline",topics:["analytics","Data Pipeline"],markdown:"/static/markdown/analytics/DataPipeline.md"}]},{route:"applicationintegration",name:"Application Integration",description:"SNS, SQS, SWF, Step Functions",topics:["application","integration"],cssClass:"application-integration",children:[{route:"/sns",name:"SNS",fullName:"Simple Notification Service",description:"Managed message topics for Pub/Sub",cssClass:"sns",topics:["application","integration","SNS"],markdown:"/static/markdown/applicationintegration/SNS.md"},{route:"/sqs",name:"SQS",fullName:"Simple Queue Service",description:"Managed Message Queues",cssClass:"sqs",topics:["application","integration","SQS"],markdown:"/static/markdown/applicationintegration/SQS.md"},{route:"/swf",name:"SWF",fullName:"Simple Workflow",description:"Workflow Service for Coordinating Application Components",cssClass:"swf",topics:["application","integration","SWF"],markdown:"/static/markdown/applicationintegration/SWF.md"},{route:"/stepfunctions",name:"Step Functions",description:"Coordinate Distributed Applications",cssClass:"step-functions",topics:["application","integration","Step Functions"],markdown:"/static/markdown/applicationintegration/StepFunctions.md"}]},{route:"endusercomputing",name:"End User Computing",description:"Desktop Workspaces",topics:["End User Computing"],cssClass:"end-user-computing",children:[{route:"/desktopworkspaces",name:"Desktop Workspaces",description:"Coordinate Distributed Applications",cssClass:"desktop-workspaces",topics:["End User Computing","Desktop Workspaces"],markdown:"/static/markdown/applicationintegration/DesktopWorkspaces.md"}]}]}]}},119:function(e,t,a){"use strict";var n=a(51),s=a(120),o=a(26),i=o(n.a,s.a,!1,null,null,null);t.a=i.exports},120:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header"},[a("div",{staticClass:"header__brand"},[a("svg",{ref:"nav__open",staticClass:"header__hamburger",attrs:{tabindex:"0",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.openNavigation(t):null},click:e.openNavigation}},[a("path",{attrs:{d:"M424 394H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 265H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 135H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16z"}})]),e._v(" "),a("span",{staticClass:"header__name"},[a("b",[e._v(e._s(e.name))]),a("i",[e._v("-  playbook")])])]),e._v(" "),e.isVisible||e.isDesktop?a("nav",{staticClass:"nav"},[a("svg",{ref:"nav__close",staticClass:"nav__icon nav__icon--close",attrs:{tabindex:"0",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.closeNavigation(t):null},click:e.closeNavigation}},[a("path",{attrs:{d:"M77.6 21.1l-28 28.1-28.1-28.1-1.9 1.9 28 28.1-28 28.1 1.9 1.9L49.6 53l28 28.1 2-1.9-28.1-28.1L79.6 23z"}})]),e._v(" "),a("ul",{staticClass:"nav__list"},e._l(e.list,function(t){return a("router-link",{key:t.path,staticClass:"nav__item",attrs:{to:t.path}},[e._v(" "+e._s(t.name)+"\n        ")])}))]):e._e()])},s=[],o={render:n,staticRenderFns:s};t.a=o},121:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header",{on:{toggleMenu:e.toggleMenu}}),e._v(" "),a("main",[a("nav",{staticClass:"main__nav",class:{active:e.isNavOpen}},[a("div",{staticClass:"nav__search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchKeywords,expression:"searchKeywords"}],staticClass:"nav__search-input",attrs:{placeholder:"Type to search"},domProps:{value:e.searchKeywords},on:{keyup:e.search,input:function(t){t.target.composing||(e.searchKeywords=t.target.value)}}}),e._v(" "),e.searchResultsVisible?a("svg",{staticClass:"nav__search-icon",attrs:{tabindex:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},on:{click:e.reset,keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.reset(t):null}}},[a("path",{attrs:{d:"M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z"}}),a("path",{attrs:{d:"M35.707 16.293a.999.999 0 0 0-1.414 0L26 24.586l-8.293-8.293a.999.999 0 1 0-1.414 1.414L24.586 26l-8.293 8.293a.999.999 0 1 0 1.414 1.414L26 27.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L27.414 26l8.293-8.293a.999.999 0 0 0 0-1.414z"}})]):e._e()]),e._v(" "),a("vue-tree-navigation",{attrs:{items:e.tocItems,defaultOpenLevel:1}})],1),e._v(" "),e.searchResultsVisible?a("div",{staticClass:"container"},[e.searchResults.length?a("h1",{staticClass:"results__heading"},[e._v(e._s(e.searchResults.length)+' results matching "'+e._s(e.searchKeywords)+'"')]):a("h1",{staticClass:"results__heading"},[e._v('No results matching "'+e._s(e.searchKeywords)+'"')]),e._v(" "),a("ul",{staticClass:"results__search"},e._l(e.searchResults,function(t,n){return a("li",{key:n,staticClass:"result"},[a("header",{staticClass:"result__header"},[a("router-link",{attrs:{to:t.path}},[a("h2",{staticClass:"result__title"},[e._v(e._s(t.name))])]),e._v(" "),e._l(t.topics,function(t,n){return a("span",{key:n,staticClass:"tag",attrs:{tabindex:"0"},on:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key,"Enter"))return null;e.searchTopic(t)},click:function(a){e.searchTopic(t)}}},[e._v(e._s(t))])})],2),e._v(" "),a("p",[e._v(e._s(e._f("truncate")(t.text,300,"...")))])])}))]):a("router-view")],1)],1)},s=[],o={render:n,staticRenderFns:s};t.a=o},122:function(e,t,a){"use strict";var n=a(29),s=a(123),o=a(16);n.a.use(s.a),t.a=new s.a({routes:o.a.getRoutingConfig()})},16:function(e,t,a){"use strict";function n(e,t){e.path=e.route,e.breadCrumb=t?JSON.parse(c()(t.breadCrumb)):[];var a=null!=t?t.path+e.route:"/";e.breadCrumb.push({name:e.name,path:a}),e.component=p,null!=t&&(e.path=t.path+e.route);var s=[];if(e.children)for(var o in e.children){var i=e.children[o];s.push({name:i.name,fullName:i.fullName,description:i.description,path:e.path+i.route,icon:i.icon,cssClass:i.cssClass,bgColor:i.bgColor,owner:i.owner,topics:i.topics}),n(i,e)}e.meta={tiles:s.length>0?s:null,name:e.name,fullName:e.fullName,description:e.description,markdown:e.markdown,icon:e.icon,cssClass:e.cssClass,bgColor:e.bgColor,owner:e.owner,topics:e.topics,breadCrumb:e.breadCrumb},g[e.path]=e.meta}function s(e){var t=JSON.parse(c()(e.pages));for(var a in t){n(t[a],null)}return t.push({path:"/",redirect:e.landingPage}),t}var o=a(74),i=a.n(o),r=a(98),c=a.n(r),d=a(100),l=a.n(d),m=a(57),u=a.n(m),p=function(){return a.e(0).then(a.bind(null,129))},g={};t.a={getMetaById:function(e){return g[e]},getRoutingConfig:function(){return s(this.getBaseConfig())},getBaseConfig:function(){return l.a},getPages:function(){return this.getBaseConfig().pages},getStatus:function(){return new i.a(function(e,t){var a=window.location.pathname,n=a.substring(0,a.length-1)+"/static/content.json";u.a.get(n).then(function(t){e(t.data)}).catch(function(e){return t(e)})})}}},31:function(e,t,a){"use strict";var n=a(53),s=a.n(n),o=a(16),i=a(119);t.a={name:"app",data:function(){return{baseUrl:"https://hazem-ben-khalfallah.github.io/aws-solutions-architect-associate-notes/#",isNavOpen:!1,tocItems:o.a.getPages(),content:[],searchResultsVisible:!1,searchResults:null,searchKeywords:null}},components:{Header:i.a},created:function(){var e=this;o.a.getStatus().then(function(t){void 0!==t&&(e.content=t)}).catch(function(e){console.log("error",e)})},methods:{toggleMenu:function(){this.isNavOpen=!this.isNavOpen},search:function(e){var t=this;if(this.searchKeywords){var a=s()({},this.$route.query,{search:this.searchKeywords});this.$router.push({query:a}),this.searchResultsVisible=!0;this.searchKeywords.indexOf("topic:")>-1?(console.log("## 2",this.content),this.searchResults=this.content.filter(function(e){for(var a=(e.topics||[]).map(function(e){return e.toLowerCase()}),n=!1,s=0;s<a.length;s++)a[s].indexOf(t.searchKeywords.toLowerCase().replace("topic:",""))>-1&&(n=!0);return n})):this.searchResults=this.content.filter(function(e){return(e.text||"").toLowerCase().indexOf(t.searchKeywords.toLowerCase())>-1||(e.name||"").toLowerCase().indexOf(t.searchKeywords.toLowerCase())>-1})}else{var n=this.$route.query;delete n.search,this.$router.push({query:n}),this.reset()}},searchTopic:function(e){var t="topic:"+e,a=s()({},this.$route.query,{search:t});this.searchKeywords=t,this.search(),this.$router.push({query:a})},reset:function(){this.searchResultsVisible=!1,this.searchKeywords="",this.searchResults=[]}},watch:{$route:{immediate:!0,handler:function(e,t){var a=window.location.href;if(a.indexOf("?")>-1){var n=a.substring(a.indexOf("?")+1),s=JSON.parse('{"'+decodeURIComponent(n.replace(/&/g,'","').replace(/=/g,'": "'))+'"}');s&&s.search&&(this.searchKeywords=s.search,this.search())}else this.searchKeywords="",this.searchResultsVisible=!1}}}}},51:function(e,t,a){"use strict";var n=a(16);t.a={name:"header-component",data:function(){return{isVisible:!1,isDesktop:!1,name:n.a.getBaseConfig().appName,list:n.a.getBaseConfig().headerNavigation}},created:function(){window.innerWidth>=780&&(this.isDesktop=!0),window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(e){e.currentTarget.innerWidth>=780?this.isDesktop=!0:this.isDesktop=!1},openNavigation:function(){this.$emit("toggleMenu")},closeNavigation:function(e){this.$emit("toggleMenu")}}}},58:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(29),s=a(61),o=a(122),i=a(124),r=a.n(i),c=a(52),d=a(125),l=(a.n(d),a(126));n.a.use(r.a),c.library.add(l.c,l.d,l.a,l.e,l.b);var m=function(e,t,a){a=a||"...";var n=document.createElement("div");n.innerHTML=e;var s=n.textContent;return s.length>t?s.slice(0,t)+a:s};n.a.filter("truncate",m),n.a.component("font-awesome-icon",d.FontAwesomeIcon),n.a.config.productionTip=!1,new n.a({el:"#app",router:o.a,render:function(e){return e(s.a)}})},61:function(e,t,a){"use strict";function n(e){a(62)}var s=a(31),o=a(121),i=a(26),r=n,c=i(s.a,o.a,!1,r,null,null);t.a=c.exports},62:function(e,t){}},[58]);
//# sourceMappingURL=app.84c2c54ff82d51404769.js.map