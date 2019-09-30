"use strict"
define("jonathanchan.me/app",["exports","jonathanchan.me/resolver","ember-load-initializers","jonathanchan.me/config/environment"],function(e,t,n,a){Object.defineProperty(e,"__esModule",{value:!0})
var o
o=Ember.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:t.default}),(0,n.default)(o,a.default.modulePrefix),e.default=o}),define("jonathanchan.me/components/blinking-cursor",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({tagName:"span",classNames:["blinking-cursor"]})}),define("jonathanchan.me/components/experience-page",["exports","jonathanchan.me/util/project","jonathanchan.me/util/links"],function(e,t,n){function a(e,t){return'<a href="'+e+'" target="_blank">'+t+"</a>"}Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({classNames:Ember.A(["experience-container"]),projects:Ember.computed(function(){return Ember.A([t.default.create({title:"Convoy",caption:"Summer 2019 Software Engineering Intern",description:Ember.String.htmlSafe("Designed and launched a new automation workflow for shipment operations team to better manage staff allocation.<br />Saved 3,000 human-hours per year, and empowered teammates to spend that time reaching company goals."),iconPath:"/assets/convoy-logo-67e2389d1696858dd504efc1968b555c.svg",shouldMaskIcon:!1,iconAltText:"Convoy Logo",href:n.default.convoy}),t.default.create({title:"Divisi",caption:Ember.String.htmlSafe("Summer 2018 Internship Project with "+a(n.default.fulcrumgt,"Fulcrum GT")),description:Ember.String.htmlSafe("Ideated and designed an iOS and web platform to help travelling groups to split bills, using "+a(n.default.coreData,"Core Data")+", "+a(n.default.react,"React")+", and "+a(n.default.socketIo,"Socket.IO")+", in a fast-paced startup team."),iconPath:"/assets/divisi-logo-29390611d8b4993cf08ecc3594cee29a.png",shouldMaskIcon:!1,iconAltText:"Divisi Logo",href:n.default.fulcrumLabs}),t.default.create({title:"MeowlWatch",caption:"Independent iOS App",description:Ember.String.htmlSafe("Designed and launched an app for students to budget meals and find places to eat. Created as personal-use app and became popular among Northwestern students. 4,500 downloads, 60 paying users, 100 daily users. "+a(n.default.meowlwatchSource,"Source Code")),iconPath:"/assets/meowlwatch-logo-efdec24fc1b405155700be10f16f4790.png",shouldMaskIcon:!0,iconAltText:"MeowlWatch Logo",linkTitleText:"See MeowlWatch on the App Store.",href:n.default.meowlwatch}),t.default.create({title:".dev",caption:"Co-Founder and Software Development Director",description:"Founded a community for more than 50 motivated developers. Inspired members to overcome product hurdles by holding workshops about technologies, UX, and ideation, exchanging expertise with fellow co-founders.",iconPath:"/assets/dotdev-icon-8411a6c700c17dbf219807bce8b8ca03.png",shouldMaskIcon:!1,iconAltText:".dev Logo",linkTitleText:"See our club website.",href:n.default.dotDev}),t.default.create({title:"Undergrad Teaching Assistant",caption:"Data Structures and Algorithms",description:Ember.String.htmlSafe("Previously, Fundamentals of Computer Programming in "+a(n.default.racket,"Racket")+" since March 2017. Focused on tangible analogies that helped students to achieve above-average A grades. Empowered students to learn independently by composing a comprehensive study guide, to help students thrive beyond office hours."),iconPath:"/assets/racket-logo-be42210c43c7125e04af50111de637c4.svg",iconAltText:"Racket",linkTitleText:"See a study guide that I wrote.",href:n.default.eecs111StudyGuide}),t.default.create({title:"Cooking",caption:"I live for food.",description:"My goal is to make the perfect bowl of Japanese ramen from scratch. Check out my cooking Instagram!",iconPath:"/assets/cooking-57a5227b1785dae6785e3bc49b879545.svg",iconAltText:"Cooking",linkTitleText:"See my cooking Instagram.",href:n.default.palatablePuns}),t.default.create({title:"This Website!",caption:Ember.String.htmlSafe(""+a("https://travis-ci.com/NathanJang/nathanjang.github.io",'<img src="'+n.default.thisSiteTravisBadge+'" />')),description:Ember.String.htmlSafe("Built with "+a(n.default.ember,"Ember.js")+"."),iconPath:"/assets/ember-logo-0f7daf683b8d4a907e60191ee5a17859.png",iconAltText:"Ember JS",linkTitleText:"See this website's source code.",href:n.default.thisSiteSource}),t.default.create({title:"And More To Come.",description:"Hire me maybe? :)",iconPath:"/assets/heart-d1657d5e30fc095818ab05087b4d693a.svg",iconAltText:"Heart",linkTitleText:"See my LinkedIn profile.",href:n.default.linkedin})])})})}),define("jonathanchan.me/components/footer-description",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component}),define("jonathanchan.me/components/profile-link-button",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component}),define("jonathanchan.me/components/profile-page",["exports","jonathanchan.me/util/profile-link","jonathanchan.me/util/links"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({profilePictureSrcs:Ember.A(["/assets/profile-picture-3b7bd3dd2f3cb3916f43d1635381b60b.jpg","/assets/profile-picture-secondary-65d98141cddc5ac493918814240ba013.jpg"]),currentProfilePictureIndex:0,currentProfilePictureSrc:Ember.computed("currentProfilePictureIndex",function(){return this.get("profilePictureSrcs")[this.get("currentProfilePictureIndex")]}),actions:{handleProfilePictureClick:function(){this.set("currentProfilePictureIndex",(this.get("currentProfilePictureIndex")+1)%this.get("profilePictureSrcs.length"))}},classNames:Ember.A(["profile-container","containter-fluid"]),profileLinks:Ember.A([t.default.create({url:n.default.resume,ariaLabel:"Resume",icon:"/assets/resume-icon-04f8e22670ef258f8d7afda0ba83caf8.svg",altText:"Resume Icon",username:"Resume"}),t.default.create({url:n.default.github,ariaLabel:"GitHub Profile",icon:"/assets/github-icon-7fc2f56b3ec79559f907756e4ac2aa97.png",altText:"GitHub Icon",username:"NathanJang"}),t.default.create({url:n.default.linkedin,ariaLabel:"LinkedIn Profile",icon:"/assets/linkedin-icon-4806758883585dc0fef396094c4429c5.png",altText:"LinkedIn Icon",username:"jonathanchanyc"}),t.default.create({url:n.default.appStore,ariaLabel:"App Store Profile",icon:"/assets/app-store-icon-9199825a5f64a1a403b43c773c6680db.png",altText:"App Store Icon",username:"Jonathan Chan"})])})}),define("jonathanchan.me/components/project-card",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({tagName:"a",classNameBindings:Ember.A(["additionalClassNamesFromProject"]),additionalClassNamesFromProject:Ember.computed(function(){return this.get("projectCardShouldBeFullWidth")?"":"col-lg-6"}),attributeBindings:Ember.A(["href","targetIfRequired:target"]),href:Ember.computed("project",function(){return this.get("project.href")}),targetIfRequired:Ember.computed("href",function(){return this.get("href")?"_blank":""}),click:function(e){this._super.apply(this,arguments),this.get("href")||(e.preventDefault(),this.get("project.action")())}})}),define("jonathanchan.me/components/scroll-indicator",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({classNames:Ember.A(["scroll-indicator","col-12","text-center","no-select"]),attributeBindings:Ember.A(["ariaHidden:aria-hidden"]),ariaHidden:"true"})}),define("jonathanchan.me/controllers/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller}),define("jonathanchan.me/helpers/app-version",["exports","jonathanchan.me/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n){function a(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,r=a.versionOnly||a.hideSha,i=a.shaOnly||a.hideVersion,l=null
return r&&(a.showExtended&&(l=o.match(n.versionExtendedRegExp)),l||(l=o.match(n.versionRegExp))),i&&(l=o.match(n.shaRegExp)),l?l[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=a,e.default=Ember.Helper.helper(a)}),define("jonathanchan.me/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("jonathanchan.me/helpers/project-card-should-be-full-width",["exports"],function(e){function t(e){return e[0]===e[1].length-1&&e[1].length%2!=0}Object.defineProperty(e,"__esModule",{value:!0}),e.isLastArrayIndex=t,e.default=Ember.Helper.helper(t)}),define("jonathanchan.me/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("jonathanchan.me/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","jonathanchan.me/config/environment"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0})
var a=void 0,o=void 0
n.default.APP&&(a=n.default.APP.name,o=n.default.APP.version),e.default={name:"App Version",initialize:(0,t.default)(a,o)}}),define("jonathanchan.me/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("jonathanchan.me/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("jonathanchan.me/initializers/export-application-global",["exports","jonathanchan.me/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var a,o=t.default.exportApplicationGlobal
a="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),n[a]||(n[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("jonathanchan.me/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("jonathanchan.me/mixins/scroll-to-top",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Mixin.create({activate:function(){this._super.apply(this,arguments),scrollTo(0,0)}})}),define("jonathanchan.me/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("jonathanchan.me/router",["exports","jonathanchan.me/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){}),e.default=n}),define("jonathanchan.me/routes/index",["exports","jonathanchan.me/mixins/scroll-to-top"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend(t.default,{actions:{didTransition:function(){this._super.apply(this,arguments),document.title="Jonathan Chan"}}})}),define("jonathanchan.me/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("jonathanchan.me/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"4S7N2QeM",block:'{"symbols":[],"statements":[[1,[22,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"jonathanchan.me/templates/application.hbs"}})}),define("jonathanchan.me/templates/components/blinking-cursor",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"oRB8nHr/",block:'{"symbols":[],"statements":[[0,"│\\n"]],"hasEval":false}',meta:{moduleName:"jonathanchan.me/templates/components/blinking-cursor.hbs"}})}),define("jonathanchan.me/templates/components/experience-page",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"Vc5Uzt/1",block:'{"symbols":["project","index"],"statements":[[7,"h1",true],[10,"class","experience-heading"],[8],[0,"What do I do?"],[9],[0,"\\n"],[7,"p",true],[10,"class","experience-caption text-center"],[8],[0,"Click to find out!"],[9],[0,"\\n"],[7,"div",true],[10,"class","project-cards-container container-fluid"],[8],[0,"\\n  "],[7,"div",true],[10,"class","row"],[8],[0,"\\n"],[4,"each",[[24,["projects"]]],null,{"statements":[[0,"      "],[1,[28,"project-card",null,[["project","projectCardShouldBeFullWidth","classNames"],[[23,1,[]],[28,"project-card-should-be-full-width",[[23,2,[]],[24,["projects"]]],null],"project-card-cell col-12"]]],false],[0,"\\n"]],"parameters":[1,2]},null],[0,"  "],[9],[0,"\\n  "],[1,[22,"footer-description"],false],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"jonathanchan.me/templates/components/experience-page.hbs"}})}),define("jonathanchan.me/templates/components/footer-description",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"HmCI8X4R",block:'{"symbols":[],"statements":[[7,"p",true],[10,"class","text-center mt-5 mb-2 footer-description"],[8],[0,"Updated "],[1,[28,"app-version",null,[["versionOnly"],[true]]],false],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"jonathanchan.me/templates/components/footer-description.hbs"}})}),define("jonathanchan.me/templates/components/profile-link-button",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"blbQ11S5",block:'{"symbols":[],"statements":[[7,"a",true],[11,"href",[29,[[24,["profileLink","url"]]]]],[10,"target","_blank"],[10,"class","profile-link-button btn btn-outline-dark"],[11,"aria-label",[29,[[24,["profileLink","ariaLabel"]]]]],[8],[0,"\\n  "],[7,"img",true],[11,"src",[29,[[24,["profileLink","icon"]]]]],[11,"alt",[29,[[24,["profileLink","altText"]]]]],[10,"class","profile-icon"],[10,"aria-hidden","true"],[8],[9],[0,"\\n  "],[1,[24,["profileLink","username"]],false],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"jonathanchan.me/templates/components/profile-link-button.hbs"}})}),define("jonathanchan.me/templates/components/profile-page",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"Ibnb9Vju",block:'{"symbols":["profileLink"],"statements":[[7,"div",true],[10,"class","profile-content row align-items-center"],[8],[0,"\\n  "],[7,"div",true],[10,"class","col-3 col-md-4 col-lg-1"],[10,"aria-hidden","true"],[8],[9],[0,"\\n  "],[7,"div",true],[10,"class","col-6 col-md-4 col-lg-3 profile-cell"],[10,"aria-hidden","true"],[11,"onclick",[28,"action",[[23,0,[]],"handleProfilePictureClick"],null]],[8],[0,"\\n    "],[7,"img",true],[11,"src",[22,"currentProfilePictureSrc"]],[10,"alt","Profile Picture"],[10,"class","profile-picture rounded-circle img-responsive center-block"],[8],[9],[0,"\\n  "],[9],[0,"\\n  "],[7,"div",true],[10,"class","visible-3 visible-md-4"],[10,"aria-hidden","true"],[8],[9],[0,"\\n\\n  "],[7,"div",true],[10,"class","col-12 col-lg-8 profile-cell profile-text-cell"],[8],[0,"\\n    "],[7,"h1",true],[10,"class","profile-title"],[8],[0,"\\n      Jonathan Chan\\n\\n    "],[9],[0,"\\n    "],[7,"h6",true],[10,"class","mt-2 mb-3"],[8],[7,"code",true],[10,"class","text-muted"],[8],[0,"[first-name][last-name]@u․northwestern․edu"],[1,[22,"blinking-cursor"],false],[9],[9],[0,"\\n    "],[7,"p",true],[10,"class","profile-subtitle lead"],[8],[0,"Computer Science, Northwestern University ’2020"],[9],[0,"\\n    "],[7,"ul",true],[10,"class","profile-links"],[8],[0,"\\n"],[4,"each",[[24,["profileLinks"]]],null,{"statements":[[0,"        "],[1,[28,"profile-link-button",null,[["profileLink","tagName","classNames"],[[23,1,[]],"li","profile-link-item"]]],false],[0,"\\n"]],"parameters":[1]},null],[0,"    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"jonathanchan.me/templates/components/profile-page.hbs"}})}),define("jonathanchan.me/templates/components/project-card",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"n/CoVK06",block:'{"symbols":[],"statements":[[7,"div",true],[10,"class","project-card text-center"],[8],[0,"\\n  "],[7,"img",true],[11,"src",[24,["project","iconPath"]]],[11,"alt",[24,["project","iconAltText"]]],[11,"class",[29,["project-card-icon ",[28,"if",[[24,["project","shouldMaskIcon"]],"project-card-icon-masked"],null]]]],[10,"aria-hidden","true"],[8],[9],[0,"\\n  "],[7,"h2",true],[10,"class","project-card-title"],[8],[1,[24,["project","title"]],false],[9],[0,"\\n"],[4,"if",[[24,["project","caption"]]],null,{"statements":[[0,"    "],[7,"strong",true],[10,"class","project-card-description"],[8],[1,[24,["project","caption"]],false],[9],[0,"\\n"]],"parameters":[]},null],[0,"  "],[7,"p",true],[10,"class","project-card-description mt-2"],[8],[1,[24,["project","description"]],false],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"jonathanchan.me/templates/components/project-card.hbs"}})})
define("jonathanchan.me/templates/components/scroll-indicator",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"AYjt6YZr",block:'{"symbols":[],"statements":[[7,"img",true],[10,"src","/assets/chevron-down-e269129454794bd94eac38a953c2c71b.svg"],[10,"width","20px"],[8],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"jonathanchan.me/templates/components/scroll-indicator.hbs"}})}),define("jonathanchan.me/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"urAc2GLa",block:'{"symbols":[],"statements":[[1,[22,"profile-page"],false],[0,"\\n\\n"],[1,[22,"scroll-indicator"],false],[0,"\\n\\n"],[1,[22,"experience-page"],false],[0,"\\n\\n"],[1,[22,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"jonathanchan.me/templates/index.hbs"}})}),define("jonathanchan.me/util/links",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={github:"https://github.com/NathanJang",linkedin:"https://linkedin.com/in/jonathanchanyc",appStore:"https://itunes.apple.com/us/developer/yik-chun-jonathan-chan/id1219875691",resume:"/JonathanChan-773e42823ba9d8b34085d38606f7c34c.pdf",convoy:"https://convoy.com",fulcrumLabs:"https://startup.fulcrumgt.com",fulcrumgt:"https://fulcrumgt.com",coreData:"https://developer.apple.com/documentation/coredata",react:"https://reactjs.org",socketIo:"https://socket.io",meowlwatch:"https://itunes.apple.com/us/app/meowlwatch-for-northwestern-university-dining/id1219875692?mt=8",meowlwatchSource:"https://github.com/NathanJang/MeowlWatch",dotDev:"https://www.facebook.com/NUDotDev/",wildhacks:"http://wildhacks.org",eecs111StudyGuide:"https://github.com/NathanJang/EECS111-2017SQ-Study-Guide",palatablePuns:"https://www.instagram.com/palatable_puns/",thisSiteSource:"https://github.com/NathanJang/nathanjang.github.io",thisSiteTravisBadge:"https://travis-ci.com/NathanJang/nathanjang.github.io.svg?branch=ember",epic:"https://nuisepic.com",racket:"https://racket-lang.org",ember:"https://emberjs.com"}}),define("jonathanchan.me/util/profile-link",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Object.extend({url:"",ariaLabel:"",icon:"",altText:"",username:""})}),define("jonathanchan.me/util/project",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Object.extend({title:"",caption:null,description:"",iconPath:"",shouldMaskIcon:!1,iconAltText:"",linkTitleText:"",href:"",action:""})}),define("jonathanchan.me/config/environment",[],function(){try{var e="jonathanchan.me/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(a){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("jonathanchan.me/app").default.create({name:"jonathanchan.me",version:"2018.11.11+7b8a604a"})
