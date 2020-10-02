webpackJsonp([2],{100:function(e,t){e.exports={appName:"aws-solutions-architect-associate-notes",headerNavigation:[{name:"AWS Solutions Architect Associate Note",path:"/aws-solutions-architect-associate-notes"}],landingPage:"/aws-solutions-architect-associate-notes",topics:["news"],pages:[{route:"/aws-solutions-architect-associate-notes",name:"Home",description:"This is the Home page",icon:"address-book",children:[{route:"/whatsNew",name:"Whats new ?",description:"recent announcements, news, latest and greatest",icon:"/static/img/aws/Res_Amazon-Aurora_Amazon-RDS-Instance_48_Dark.svg",topics:["news"],markdown:"/static/markdown/whatsnew/Current.md"},{route:"/links",name:"Helpful Links",description:"how to go from here ?",topics:[],icon:"link",markdown:"/static/markdown/Links.md"},{route:"/faq",name:"FAQs",description:"frequently asked questions are covered here",topics:[],icon:"question-circle",markdown:"/static/markdown/FAQ.md"},{route:"/roadmap",name:"Our Roadmap",description:"aligning our development plans with our stakeholders",topics:[],icon:"map-marked-alt",markdown:"/static/markdown/Roadmap.md"},{route:"/process",name:"Process Documentation",description:"anything about process",icon:"project-diagram",topics:["process"],children:[{route:"/introduction",name:"Process Introduction",description:"how to read the process documentation",icon:"project-diagram",topics:["process"],markdown:"/static/markdown/process/Introduction.md"},{route:"/newPagesHowto",name:"New Pages HowTo",description:"how to create new Pages on the playbook",icon:"file-alt",topics:["process"],markdown:"/static/markdown/process/NewPagesHowto.md"}]}]}]}},119:function(e,t,s){"use strict";var n=s(51),a=s(120),r=s(26),o=r(n.a,a.a,!1,null,null,null);t.a=o.exports},120:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",{staticClass:"header"},[s("div",{staticClass:"header__brand"},[s("svg",{ref:"nav__open",staticClass:"header__hamburger",attrs:{tabindex:"0",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.openNavigation(t):null},click:e.openNavigation}},[s("path",{attrs:{d:"M424 394H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 265H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 135H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16z"}})]),e._v(" "),s("span",{staticClass:"header__name"},[e._v(e._s(e.name)+" "),s("b",[e._v("Playbook")])])]),e._v(" "),e.isVisible||e.isDesktop?s("nav",{staticClass:"nav"},[s("svg",{ref:"nav__close",staticClass:"nav__icon nav__icon--close",attrs:{tabindex:"0",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.closeNavigation(t):null},click:e.closeNavigation}},[s("path",{attrs:{d:"M77.6 21.1l-28 28.1-28.1-28.1-1.9 1.9 28 28.1-28 28.1 1.9 1.9L49.6 53l28 28.1 2-1.9-28.1-28.1L79.6 23z"}})]),e._v(" "),s("ul",{staticClass:"nav__list"},e._l(e.list,function(t){return s("router-link",{key:t.path,staticClass:"nav__item",attrs:{to:t.path}},[e._v(" "+e._s(t.name)+"\n        ")])}))]):e._e()])},a=[],r={render:n,staticRenderFns:a};t.a=r},121:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Header",{on:{toggleMenu:e.toggleMenu}}),e._v(" "),s("main",[s("nav",{staticClass:"main__nav",class:{active:e.isNavOpen}},[s("div",{staticClass:"nav__search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.searchKeywords,expression:"searchKeywords"}],staticClass:"nav__search-input",attrs:{placeholder:"Type to search"},domProps:{value:e.searchKeywords},on:{keyup:e.search,input:function(t){t.target.composing||(e.searchKeywords=t.target.value)}}}),e._v(" "),e.searchResultsVisible?s("svg",{staticClass:"nav__search-icon",attrs:{tabindex:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},on:{click:e.reset,keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.reset(t):null}}},[s("path",{attrs:{d:"M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z"}}),s("path",{attrs:{d:"M35.707 16.293a.999.999 0 0 0-1.414 0L26 24.586l-8.293-8.293a.999.999 0 1 0-1.414 1.414L24.586 26l-8.293 8.293a.999.999 0 1 0 1.414 1.414L26 27.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L27.414 26l8.293-8.293a.999.999 0 0 0 0-1.414z"}})]):e._e()]),e._v(" "),s("vue-tree-navigation",{attrs:{items:e.tocItems,defaultOpenLevel:1}})],1),e._v(" "),e.searchResultsVisible?s("div",{staticClass:"container"},[e.searchResults.length?s("h1",{staticClass:"results__heading"},[e._v(e._s(e.searchResults.length)+' results matching "'+e._s(e.searchKeywords)+'"')]):s("h1",{staticClass:"results__heading"},[e._v('No results matching "'+e._s(e.searchKeywords)+'"')]),e._v(" "),s("ul",{staticClass:"results__search"},e._l(e.searchResults,function(t,n){return s("li",{key:n,staticClass:"result"},[s("header",{staticClass:"result__header"},[s("router-link",{attrs:{to:t.path}},[s("h2",{staticClass:"result__title"},[e._v(e._s(t.name))])]),e._v(" "),e._l(t.topics,function(t,n){return s("span",{key:n,staticClass:"tag",attrs:{tabindex:"0"},on:{keyup:function(s){if(!("button"in s)&&e._k(s.keyCode,"enter",13,s.key,"Enter"))return null;e.searchTopic(t)},click:function(s){e.searchTopic(t)}}},[e._v(e._s(t))])})],2),e._v(" "),s("p",[e._v(e._s(e._f("truncate")(t.text,300,"...")))])])}))]):s("router-view")],1)],1)},a=[],r={render:n,staticRenderFns:a};t.a=r},122:function(e,t,s){"use strict";var n=s(29),a=s(123),r=s(16);n.a.use(a.a),t.a=new a.a({routes:r.a.getRoutingConfig()})},16:function(e,t,s){"use strict";function n(e,t){e.path=e.route,e.breadCrumb=t?JSON.parse(c()(t.breadCrumb)):[];var s=null!=t?t.path+e.route:"/";e.breadCrumb.push({name:e.name,path:s}),e.component=p,null!=t&&(e.path=t.path+e.route);var a=[];if(e.children)for(var r in e.children){var o=e.children[r];a.push({name:o.name,description:o.description,path:e.path+o.route,icon:o.icon,bgColor:o.bgColor,owner:o.owner,topics:o.topics}),n(o,e)}e.meta={tiles:a.length>0?a:null,name:e.name,description:e.description,markdown:e.markdown,icon:e.icon,bgColor:e.bgColor,owner:e.owner,topics:e.topics,breadCrumb:e.breadCrumb},_[e.path]=e.meta}function a(e){var t=JSON.parse(c()(e.pages));for(var s in t){n(t[s],null)}return t.push({path:"/",redirect:e.landingPage}),t}var r=s(74),o=s.n(r),i=s(98),c=s.n(i),u=s(100),l=s.n(u),h=s(57),d=s.n(h),p=function(){return s.e(0).then(s.bind(null,129))},_={};t.a={getMetaById:function(e){return _[e]},getRoutingConfig:function(){return a(this.getBaseConfig())},getBaseConfig:function(){return l.a},getPages:function(){return this.getBaseConfig().pages},getStatus:function(){return new o.a(function(e,t){var s=window.location.pathname,n=s.substring(0,s.length-1)+"/static/content.json";d.a.get(n).then(function(t){e(t.data)}).catch(function(e){return t(e)})})}}},31:function(e,t,s){"use strict";var n=s(53),a=s.n(n),r=s(16),o=s(119);t.a={name:"app",data:function(){return{baseUrl:"https://pages.github.ibm.com/merlin/playbook/#",isNavOpen:!1,tocItems:r.a.getPages(),content:[],searchResultsVisible:!1,searchResults:null,searchKeywords:null}},components:{Header:o.a},created:function(){var e=this;r.a.getStatus().then(function(t){void 0!==t&&(e.content=t)}).catch(function(e){console.log("error",e)})},methods:{toggleMenu:function(){this.isNavOpen=!this.isNavOpen},search:function(e){var t=this;if(this.searchKeywords){var s=a()({},this.$route.query,{search:this.searchKeywords});this.$router.push({query:s}),this.searchResultsVisible=!0;this.searchKeywords.indexOf("topic:")>-1?this.searchResults=this.content.filter(function(e){for(var s=(e.topics||[]).map(function(e){return e.toLowerCase()}),n=!1,a=0;a<s.length;a++)s[a].indexOf(t.searchKeywords.toLowerCase().replace("topic:",""))>-1&&(n=!0);return n}):this.searchResults=this.content.filter(function(e){return(e.text||"").toLowerCase().indexOf(t.searchKeywords.toLowerCase())>-1||(e.name||"").toLowerCase().indexOf(t.searchKeywords.toLowerCase())>-1})}else{var n=this.$route.query;delete n.search,this.$router.push({query:n}),this.reset()}},searchTopic:function(e){var t="topic:"+e,s=a()({},this.$route.query,{search:t});this.searchKeywords=t,this.search(),this.$router.push({query:s})},reset:function(){this.searchResultsVisible=!1,this.searchKeywords="",this.searchResults=[]}},watch:{$route:{immediate:!0,handler:function(e,t){var s=window.location.href;if(s.indexOf("?")>-1){var n=s.substring(s.indexOf("?")+1),a=JSON.parse('{"'+decodeURIComponent(n.replace(/&/g,'","').replace(/=/g,'": "'))+'"}');a&&a.search&&(this.searchKeywords=a.search,this.search())}else this.searchKeywords="",this.searchResultsVisible=!1}}}}},51:function(e,t,s){"use strict";var n=s(16);t.a={name:"header-component",data:function(){return{isVisible:!1,isDesktop:!1,name:n.a.getBaseConfig().appName,list:n.a.getBaseConfig().headerNavigation}},created:function(){window.innerWidth>=780&&(this.isDesktop=!0),window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(e){e.currentTarget.innerWidth>=780?this.isDesktop=!0:this.isDesktop=!1},openNavigation:function(){this.$emit("toggleMenu")},closeNavigation:function(e){this.$emit("toggleMenu")}}}},58:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(29),a=s(61),r=s(122),o=s(124),i=s.n(o),c=s(52),u=s(125),l=(s.n(u),s(126));n.a.use(i.a),c.library.add(l.l,l._23,l._8,l.W,l._7,l._28,l.L,l.G,l.H,l._12,l.U,l._14,l._27,l.C,l.B,l._22,l._19,l.O,l.A,l._11,l.Y,l.v,l.T,l._4,l.j,l._25,l._1,l.c,l.q,l.P,l._26,l.R,l.E,l.s,l._15,l.f,l.F,l._18,l.w,l.a,l.e,l.z,l.n,l.y,l._9,l.Q,l._30,l.t,l._0,l.D,l.S,l._21,l._20,l._2,l.V,l.g,l._10,l._17,l.x,l._3,l._13,l.p,l.I,l._6,l.X,l.h,l._24,l.d,l.k,l.u,l.m,l.N,l.i,l.J,l.b,l.M,l._5,l._16,l.Z,l._29,l.r,l.o,l.K);var h=function(e,t,s){s=s||"...";var n=document.createElement("div");n.innerHTML=e;var a=n.textContent;return a.length>t?a.slice(0,t)+s:a};n.a.filter("truncate",h),n.a.component("font-awesome-icon",u.FontAwesomeIcon),n.a.config.productionTip=!1,new n.a({el:"#app",router:r.a,render:function(e){return e(a.a)}})},61:function(e,t,s){"use strict";function n(e){s(62)}var a=s(31),r=s(121),o=s(26),i=n,c=o(a.a,r.a,!1,i,null,null);t.a=c.exports},62:function(e,t){}},[58]);
//# sourceMappingURL=app.8a3865d56d8a05826508.js.map