(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-578af32f"],{"0923":function(e,t,s){e.exports=s.p+"img/kiehls-wmb-v3.6762a614.gif"},1766:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"project"}},[s("div",{staticClass:"content-container",style:{opacity:e.showEl?1:0,transform:e.showEl?"translateY(0px)":"translateY(-20px)"}},[s("div",{staticClass:"heading"},[e._m(0),s("div",{staticClass:"heading-column"},[s("div",{staticClass:"heading-column-line small-up"}),s("div",{staticClass:"inner-content"},[s("div",{staticClass:"project-type-selection"},[s("div",{staticClass:"personal",class:{"selected-tab":"personal"===e.projectType},on:{click:function(t){return e.selectType("personal")}}},[s("p",{class:{"selected-tab-text":"personal"===e.projectType}},[e._v("Personal")])]),s("div",{staticClass:"work",class:{"selected-tab":"work"===e.projectType},on:{click:function(t){return e.selectType("work")}}},[s("p",{class:{"selected-tab-text":"work"===e.projectType}},[e._v("Work")])])]),s("div",{staticClass:"projects-container"},e._l(e.projectsByType,(function(t,i){return s("div",{key:"project-"+i,staticClass:"project-el",on:{click:function(s){return e.selectProject(t)}}},[s("div",{staticClass:"project-overlay"},[s("div",{staticClass:"project-name"},[s("p",[e._v(e._s(t.projectName))])]),e._m(1,!0)]),s("div",{staticClass:"project-img",style:{background:t.coverBgColor?t.coverBgColor:"#fff"}},[s("img",{attrs:{src:t.coverImage}})])])})),0)])])])])])},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"heading-row"},[s("p",[e._v("Projects")]),s("div",{staticClass:"heading-row-line small-up"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"project-cta"},[s("p",[e._v("LEARN MORE")])])}],a={data:function(){return{showEl:!1,workProjects:["https://family.ikea.com.sg/","https://family.ikea.com.my/","https://family.ikea.co.th/","https://worldmadebetter.kiehls.com.my/join-us-now/","https://brickmagic.asia/"],personalProjects:["https://codenames-the-game.web.app/","https://codenames-the-game.web.app/","https://codenames-the-game.web.app/"],projectType:"personal"}},computed:{projectsByType:function(){return"work"===this.projectType?this.workProjects:this.personalProjects}},methods:{selectProject:function(e){this.$store.commit("setSelectedProject",e)},selectType:function(e){this.projectType=e},initPersonalProjects:function(){this.personalProjects=[{coverImage:s("e9b0"),projectName:"vue-disable-all-input",coverBgColor:"#8e1b20",gif:s("e9b0"),description:"An NPM package for a custom vue directive that allows you to bulk disable/enable input elements under the bounded parent element.",motivation:"I was working on a task where I needed to disable a lot of inputs under a specific section of the page. The codebase that I was working on\n            happened to be really large, so there were a ton of nested components to go through. To avoid manually digging through each component and setting the\n            disabled attribute on each of them, I decided to write a custom directive for this. I realized that no one had published a package that does this yet\n            so I decided to publish my custom directive to NPM so that others who face the same issue can use this directive.\n          ",links:["https://www.npmjs.com/package/vue-disable-all-input","https://medium.com/@tanweishen97/using-custom-vue-directives-for-reusable-dom-manipulation-3e27122718ec"],linkLabels:["NPM Package","Case Study"],techStack:["VueJs"]},{coverImage:s("cd04"),projectName:"ProtoWire [WIP]",gif:s("2c8a"),description:"An online wireframing tool designed to make sketching wireframes easier by having an\n            intuitive and easy-to-use UI.",motivation:"I got the idea when I was trying to design other projects and realised how unintuitive\n            online wireframing tools are. My initial idea was to make a simple shape drawing tool to make simple wireframe sketches. However, I soon\n            realised there were more and more features I wanted to add - which caused this project to balloon. I now work on this project every now and then as a\n            hobby due to its large size.",links:["https://protowire-c9b08.web.app/","https://medium.com/@tanweishen97/developer-case-study-protowire-re-creating-a-sense-of-inheritance-and-polymorphism-with-vue-78ef96a3c9ee"],linkLabels:["Web App","Case Study"],techStack:["VueJs","Firebase Hosting"]},{coverImage:s("1f83"),gif:s("a7b8"),projectName:"CodeNames",description:"A realtime multiplayer online version of the boardgame Codenames.",motivation:"Prior to the Covid-19 Lockdown in Malaysia, my friends and I would frequently gather at Boardgame Cafes\n            to play a bunch of games together. When the Movement-Control Order got announced, we found ourselves really bored - so I decided to take it\n            upon myself to re-create the CodeNames Boardgame. Not only did I get to have fun with my friends, I learnt\n            more about Firebase and its Realtime Database. ",links:["https://codenames-the-game.web.app/"],linkLabels:[""],techStack:["VueJs","Firebase Hosting","Cloud Functions","Realtime Database"]}]},initWorkProjects:function(){this.workProjects=[{coverImage:s("f5c0"),coverBgColor:"linear-gradient(180deg,hsla(0,0%,100%,0) 68.75%,hsla(0,0%,100%,.568392)),#42cbef",projectName:"Kiehls World Made Better",gif:s("0923"),description:"A microsite developed to promote Kiehl's World Made\n            Better campaign which aims to increase awareness towards environmental\n            impact, sustainable living, and beauty. <br><br> The microsite involves a virtual\n            world with immersive and interactive features designed to give the user a\n            sense of making impactful changes by performing one's own duty.",responsibilities:["I was one of the main developer in a small team of 3 developers total that built the entire microsite from scratch."],links:["https://worldmadebetter.kiehls.com.my/join-us-now/"],linkLabels:[""],techStack:["NuxtJs","Typescript","ExpressJs","MySQL"]},{coverImage:s("d255"),coverBgColor:"#ffd500",projectName:"Brickmagic",gif:s("6560"),description:"An e-commerce site for LEGO that allows customers to shop for LEGO products online.\n            It also supports a lego membership system known as VIB Membership.",responsibilities:["Maintained and developed additional features for the admin panel of the site."],links:["https://brickmagic.asia/"],linkLabels:[""],techStack:["VueJs","Typescript","ExpressJs","MySQL"]},{coverImage:s("6ec9"),projectName:"NikeByYou",gif:s("5ae1"),description:'A microsite that allows users to customize their\n            own Nike products. <br><br> <span style="color: red; font-style: italic;"> The microsite is only allowed to be used in specific\n            Nike Stores and cannot be accessed by the general public.</span>',responsibilities:["I was the lead/solo developer for all NikeByYou microsites across multiple countries. <br><br>","I also had to manage the NikeByYou projects and was involved in all phases of the software development lifecycle - including requirements/timeline planning.<br><br>","Among the countries include: Singapore, Thailand, and Phillipines"],links:[],linkLabels:[],techStack:["VueJs","Firebase Hosting","Cloud Functions","Firestore"]},{coverImage:s("ac7b"),projectName:"IKEA Family",gif:s("f458"),description:"The purpose of the IKEA Family websites is to provide\n            exclusive offers, activities, information, etc. to IKEA Family members. <br><br> On this site,\n            members are able to view special discounts on certain items, as well as\n            access information about their Family membership.",responsibilities:["Improved and optimised various functionalities of the IKEA Family websites"],links:["https://family.ikea.com.sg/","https://family.ikea.com.my/","https://family.ikea.co.th/"],linkLabels:["Singapore","Malaysia","Thailand"],techStack:["VueJs","Laravel","MySQL","PostgreSQL"]}]},initIntersectionObserver:function(){var e=this,t=new IntersectionObserver((function(t){t[0].intersectionRatio>0&&(e.showEl||(e.showEl=!0))}),{threshold:.5});t.observe(document.querySelector("#project")),this.$store.state.intersectionObserver.observe(document.querySelector("#project"))}},mounted:function(){var e=this;this.initPersonalProjects(),this.initWorkProjects(),setTimeout((function(){e.initIntersectionObserver()}),2e3)}},n=a,r=(s("57b5"),s("2877")),c=Object(r["a"])(n,i,o,!1,null,"69431b98",null);t["default"]=c.exports},"1f83":function(e,t,s){e.exports=s.p+"img/codenames.c19f608e.jpg"},"2c8a":function(e,t,s){e.exports=s.p+"img/protowire.03953e32.gif"},"57b5":function(e,t,s){"use strict";s("d678")},"5ae1":function(e,t,s){e.exports=s.p+"img/nby-v2.107eb9b4.gif"},6560:function(e,t,s){e.exports=s.p+"img/brickmagic-v2.9557e126.gif"},"6ec9":function(e,t,s){e.exports=s.p+"img/nby.7683244d.png"},a7b8:function(e,t,s){e.exports=s.p+"img/codenames-v2.a21033ca.gif"},ac7b:function(e,t){e.exports="data:image/png;base64,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"},cd04:function(e,t,s){e.exports=s.p+"img/protowire.0e52da67.png"},d255:function(e,t,s){e.exports=s.p+"img/brickmagic.42d6ad91.png"},d678:function(e,t,s){},e9b0:function(e,t,s){e.exports=s.p+"img/npm.d6f670f7.png"},f458:function(e,t,s){e.exports=s.p+"img/family-ikea-v2.d2e77c53.gif"},f5c0:function(e,t,s){e.exports=s.p+"img/kiehls-wmb.7101727c.png"}}]);
//# sourceMappingURL=chunk-578af32f.8994c336.js.map