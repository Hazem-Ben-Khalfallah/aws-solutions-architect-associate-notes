webpackJsonp([2],{100:function(e,t){e.exports={appName:"AWS Solutions Architect Associate Note",headerNavigation:[{name:"AWS Solutions Architect Associate Note",path:"/aws-solutions-architect-associate-notes"}],landingPage:"/aws-solutions-architect-associate-notes",topics:["databases"],pages:[{route:"/aws-solutions-architect-associate-notes",name:"Home",description:"This is the Home page",icon:"address-book",children:[{route:"/general",name:"General",description:"Exam presentation and general info",topics:[],icon:"info-circle",markdown:"/static/markdown/General.md"},{route:"/wellArchitectedframework",name:"Well-Architected Framework",description:"Well-Architected Framework",topics:[],icon:"ruler-combined",markdown:"/static/markdown/ExamPresentation.md"},{route:"/whitepapers",name:"White Papers Review",description:"?",topics:[],icon:"file-pdf",markdown:"/static/markdown/ExamPresentation.md"},{route:"/securityandidentity",name:"Security and Identity",description:"IAM, Resource Access Manager, Cognito, Secrets Manager, GuardDuty, Inspector, Macie, AWS Single Sign-On,  KMS, Cloud HSM, Directory Service, WAF, Shield ",topics:["security"],icon:"none",cssClass:"security-identity-compliance",markdown:"/static/markdown/SecurityAndIdentity.md"},{route:"/storage",name:"Storage",description:"S3, EFS, FSX, Storage Gateway, AWS Backup",topics:["storage"],icon:"none",cssClass:"storage",markdown:"/static/markdown/storage.md"},{route:"/databases",name:"Databases",description:"RDS, DynamoDB, Redshift, Elasticache",icon:"none",cssClass:"database",topics:["databases"],children:[{route:"/rds",name:"RDS",description:"Relational Database Service",icon:"none",cssClass:"rds",topics:["databases","RDS"],markdown:"/static/markdown/databases/RDS.md"},{route:"/DynamoDB",name:"DynamoDB",description:"DynamoDB - NoSQL",icon:"none",cssClass:"dynamoDB",topics:["databases","NoSQL","DynamoDB"],markdown:"/static/markdown/databases/DynamoDB.md"}]},{route:"/compute",name:"Compute",description:"EC2, serverless, Batch, Elastic Beanstalk, ECR, ECS, EKS",topics:["compute"],icon:"none",cssClass:"compute",markdown:"/static/markdown/compute.md"},{route:"/migrationandtransfer",name:"Migration & Transfer",description:"DMS, DataSync, Snow",topics:["migration","transfert"],icon:"none",cssClass:"migrate-Transfer",markdown:"/static/markdown/compute.md"},{route:"/networking",name:"Networking & Content Delivery",description:"VPC, CloudFront, Route 53, API Gateway, Direct Connect, Global Accelerator",topics:["networking"],icon:"none",cssClass:"networking-content-delivery",markdown:"/static/markdown/networking.md"},{route:"/managementandgovernance",name:"Management & Governance",description:"AWS Organizations, Cloud watch, Cloud trail, AWS Auto Scaling, Systems Manager, CloudFormation, AWS Well-Architected Tool, Personal Health Dashboard, AWS Compute Optimizer",topics:["networking"],icon:"none",cssClass:"management-governance",markdown:"/static/markdown/management.md"},{route:"/developertools",name:"Developer Tools",description:"CodeCommit, CodeDeploy, X-Ray",topics:["application"],icon:"none",cssClass:"developer-tools",markdown:"/static/markdown/management.md"},{route:"/analytics",name:"Analytics",description:"Athena, Amazon Redshift, EMR,, Kinesis, Data Pipeline, Elasticsearch Service",topics:["application"],icon:"none",cssClass:"analytics",markdown:"/static/markdown/management.md"},{route:"/applicationintegration",name:"Application Integration",description:"SNS, SQS, SWF, Step Functions..",topics:["application"],icon:"none",cssClass:"application-integration",markdown:"/static/markdown/management.md"},{route:"/cost management",name:"AWS Cost Management",description:"AWS Cost Explorer, AWS Budgets",topics:["cost management"],icon:"none",cssClass:"cost-management",markdown:"/static/markdown/management.md"},{route:"/endusercomputing",name:"End User Computing",description:"Desktop Workspaces",topics:["application"],icon:"none",cssClass:"end-user-computing",markdown:"/static/markdown/management.md"}]}]}},119:function(e,t,n){"use strict";var a=n(51),s=n(120),o=n(26),i=o(a.a,s.a,!1,null,null,null);t.a=i.exports},120:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("div",{staticClass:"header__brand"},[n("svg",{ref:"nav__open",staticClass:"header__hamburger",attrs:{tabindex:"0",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.openNavigation(t):null},click:e.openNavigation}},[n("path",{attrs:{d:"M424 394H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 265H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 135H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16z"}})]),e._v(" "),n("span",{staticClass:"header__name"},[n("b",[e._v(e._s(e.name))]),n("i",[e._v("-  playbook")])])]),e._v(" "),e.isVisible||e.isDesktop?n("nav",{staticClass:"nav"},[n("svg",{ref:"nav__close",staticClass:"nav__icon nav__icon--close",attrs:{tabindex:"0",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.closeNavigation(t):null},click:e.closeNavigation}},[n("path",{attrs:{d:"M77.6 21.1l-28 28.1-28.1-28.1-1.9 1.9 28 28.1-28 28.1 1.9 1.9L49.6 53l28 28.1 2-1.9-28.1-28.1L79.6 23z"}})]),e._v(" "),n("ul",{staticClass:"nav__list"},e._l(e.list,function(t){return n("router-link",{key:t.path,staticClass:"nav__item",attrs:{to:t.path}},[e._v(" "+e._s(t.name)+"\n        ")])}))]):e._e()])},s=[],o={render:a,staticRenderFns:s};t.a=o},121:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{on:{toggleMenu:e.toggleMenu}}),e._v(" "),n("main",[n("nav",{staticClass:"main__nav",class:{active:e.isNavOpen}},[n("div",{staticClass:"nav__search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchKeywords,expression:"searchKeywords"}],staticClass:"nav__search-input",attrs:{placeholder:"Type to search"},domProps:{value:e.searchKeywords},on:{keyup:e.search,input:function(t){t.target.composing||(e.searchKeywords=t.target.value)}}}),e._v(" "),e.searchResultsVisible?n("svg",{staticClass:"nav__search-icon",attrs:{tabindex:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},on:{click:e.reset,keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.reset(t):null}}},[n("path",{attrs:{d:"M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z"}}),n("path",{attrs:{d:"M35.707 16.293a.999.999 0 0 0-1.414 0L26 24.586l-8.293-8.293a.999.999 0 1 0-1.414 1.414L24.586 26l-8.293 8.293a.999.999 0 1 0 1.414 1.414L26 27.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L27.414 26l8.293-8.293a.999.999 0 0 0 0-1.414z"}})]):e._e()]),e._v(" "),n("vue-tree-navigation",{attrs:{items:e.tocItems,defaultOpenLevel:1}})],1),e._v(" "),e.searchResultsVisible?n("div",{staticClass:"container"},[e.searchResults.length?n("h1",{staticClass:"results__heading"},[e._v(e._s(e.searchResults.length)+' results matching "'+e._s(e.searchKeywords)+'"')]):n("h1",{staticClass:"results__heading"},[e._v('No results matching "'+e._s(e.searchKeywords)+'"')]),e._v(" "),n("ul",{staticClass:"results__search"},e._l(e.searchResults,function(t,a){return n("li",{key:a,staticClass:"result"},[n("header",{staticClass:"result__header"},[n("router-link",{attrs:{to:t.path}},[n("h2",{staticClass:"result__title"},[e._v(e._s(t.name))])]),e._v(" "),e._l(t.topics,function(t,a){return n("span",{key:a,staticClass:"tag",attrs:{tabindex:"0"},on:{keyup:function(n){if(!("button"in n)&&e._k(n.keyCode,"enter",13,n.key,"Enter"))return null;e.searchTopic(t)},click:function(n){e.searchTopic(t)}}},[e._v(e._s(t))])})],2),e._v(" "),n("p",[e._v(e._s(e._f("truncate")(t.text,300,"...")))])])}))]):n("router-view")],1)],1)},s=[],o={render:a,staticRenderFns:s};t.a=o},122:function(e,t,n){"use strict";var a=n(29),s=n(123),o=n(16);a.a.use(s.a),t.a=new s.a({routes:o.a.getRoutingConfig()})},16:function(e,t,n){"use strict";function a(e,t){e.path=e.route,e.breadCrumb=t?JSON.parse(c()(t.breadCrumb)):[];var n=null!=t?t.path+e.route:"/";e.breadCrumb.push({name:e.name,path:n}),e.component=p,null!=t&&(e.path=t.path+e.route);var s=[];if(e.children)for(var o in e.children){var i=e.children[o];s.push({name:i.name,description:i.description,path:e.path+i.route,icon:i.icon,cssClass:i.cssClass,bgColor:i.bgColor,owner:i.owner,topics:i.topics}),a(i,e)}e.meta={tiles:s.length>0?s:null,name:e.name,description:e.description,markdown:e.markdown,icon:e.icon,bgColor:e.bgColor,owner:e.owner,topics:e.topics,breadCrumb:e.breadCrumb},h[e.path]=e.meta}function s(e){var t=JSON.parse(c()(e.pages));for(var n in t){a(t[n],null)}return t.push({path:"/",redirect:e.landingPage}),t}var o=n(74),i=n.n(o),r=n(98),c=n.n(r),l=n(100),u=n.n(l),d=n(57),m=n.n(d),p=function(){return n.e(0).then(n.bind(null,129))},h={};t.a={getMetaById:function(e){return h[e]},getRoutingConfig:function(){return s(this.getBaseConfig())},getBaseConfig:function(){return u.a},getPages:function(){return this.getBaseConfig().pages},getStatus:function(){return new i.a(function(e,t){var n=window.location.pathname,a=n.substring(0,n.length-1)+"/static/content.json";m.a.get(a).then(function(t){e(t.data)}).catch(function(e){return t(e)})})}}},31:function(e,t,n){"use strict";var a=n(53),s=n.n(a),o=n(16),i=n(119);t.a={name:"app",data:function(){return{baseUrl:"https://pages.github.ibm.com/merlin/playbook/#",isNavOpen:!1,tocItems:o.a.getPages(),content:[],searchResultsVisible:!1,searchResults:null,searchKeywords:null}},components:{Header:i.a},created:function(){var e=this;o.a.getStatus().then(function(t){void 0!==t&&(e.content=t)}).catch(function(e){console.log("error",e)})},methods:{toggleMenu:function(){this.isNavOpen=!this.isNavOpen},search:function(e){var t=this;if(this.searchKeywords){var n=s()({},this.$route.query,{search:this.searchKeywords});this.$router.push({query:n}),this.searchResultsVisible=!0;this.searchKeywords.indexOf("topic:")>-1?this.searchResults=this.content.filter(function(e){for(var n=(e.topics||[]).map(function(e){return e.toLowerCase()}),a=!1,s=0;s<n.length;s++)n[s].indexOf(t.searchKeywords.toLowerCase().replace("topic:",""))>-1&&(a=!0);return a}):this.searchResults=this.content.filter(function(e){return(e.text||"").toLowerCase().indexOf(t.searchKeywords.toLowerCase())>-1||(e.name||"").toLowerCase().indexOf(t.searchKeywords.toLowerCase())>-1})}else{var a=this.$route.query;delete a.search,this.$router.push({query:a}),this.reset()}},searchTopic:function(e){var t="topic:"+e,n=s()({},this.$route.query,{search:t});this.searchKeywords=t,this.search(),this.$router.push({query:n})},reset:function(){this.searchResultsVisible=!1,this.searchKeywords="",this.searchResults=[]}},watch:{$route:{immediate:!0,handler:function(e,t){var n=window.location.href;if(n.indexOf("?")>-1){var a=n.substring(n.indexOf("?")+1),s=JSON.parse('{"'+decodeURIComponent(a.replace(/&/g,'","').replace(/=/g,'": "'))+'"}');s&&s.search&&(this.searchKeywords=s.search,this.search())}else this.searchKeywords="",this.searchResultsVisible=!1}}}}},51:function(e,t,n){"use strict";var a=n(16);t.a={name:"header-component",data:function(){return{isVisible:!1,isDesktop:!1,name:a.a.getBaseConfig().appName,list:a.a.getBaseConfig().headerNavigation}},created:function(){window.innerWidth>=780&&(this.isDesktop=!0),window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(e){e.currentTarget.innerWidth>=780?this.isDesktop=!0:this.isDesktop=!1},openNavigation:function(){this.$emit("toggleMenu")},closeNavigation:function(e){this.$emit("toggleMenu")}}}},58:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(29),s=n(61),o=n(122),i=n(124),r=n.n(i),c=n(52),l=n(125),u=(n.n(l),n(126));a.a.use(r.a),c.library.add(u.b,u.c,u.a,u.d);var d=function(e,t,n){n=n||"...";var a=document.createElement("div");a.innerHTML=e;var s=a.textContent;return s.length>t?s.slice(0,t)+n:s};a.a.filter("truncate",d),a.a.component("font-awesome-icon",l.FontAwesomeIcon),a.a.config.productionTip=!1,new a.a({el:"#app",router:o.a,render:function(e){return e(s.a)}})},61:function(e,t,n){"use strict";function a(e){n(62)}var s=n(31),o=n(121),i=n(26),r=a,c=i(s.a,o.a,!1,r,null,null);t.a=c.exports},62:function(e,t){}},[58]);
//# sourceMappingURL=app.8c8a181a1b1984e03d67.js.map