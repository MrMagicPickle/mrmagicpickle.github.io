(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"00c8":function(n,t,e){"use strict";e("e5bf")},d504:function(n,t,e){"use strict";e.r(t);var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"index"},[e("CanvasContainer"),n.showContent?e("NavBar"):n._e(),n.showMobileMenu?e("SideBar"):n._e(),n.showContent?e("div",{staticClass:"content",style:{opacity:n.contentOpacity}},[e("About"),e("Work"),e("Projects"),e("Accolades"),e("Contact"),n.showProjectModal?e("ProjectModal"):n._e(),e("ExternalLinks")],1):n._e()],1)},c=[],i=(e("d3b7"),{components:{CanvasContainer:function(){return e.e("chunk-27d68d52").then(e.bind(null,"ade4"))},NavBar:function(){return e.e("chunk-bbf78426").then(e.bind(null,"d000"))},About:function(){return e.e("chunk-695ee502").then(e.bind(null,"84ba"))},Work:function(){return e.e("chunk-1376c444").then(e.bind(null,"9b1f"))},Projects:function(){return e.e("chunk-1f2d3c98").then(e.bind(null,"1766"))},ProjectModal:function(){return e.e("chunk-aabacec4").then(e.bind(null,"c486"))},Accolades:function(){return e.e("chunk-0ce7ffe2").then(e.bind(null,"5dfa"))},Contact:function(){return e.e("chunk-7effae1a").then(e.bind(null,"371a"))},ExternalLinks:function(){return e.e("chunk-65d71ddb").then(e.bind(null,"3b49"))},SideBar:function(){return e.e("chunk-c7174d28").then(e.bind(null,"7c08"))}},data:function(){return{contentOpacity:0,introduction:"Introduction II"}},computed:{showContent:function(){return this.$store.state.showContent},showProjectModal:function(){return this.$store.state.showProjectModal},showMobileMenu:function(){return this.$store.state.showMobileMenu}},watch:{showContent:function(n,t){var e=this;n&&setTimeout((function(){e.contentOpacity=1}),2500)}},methods:{},mounted:function(){var n=this,t=new IntersectionObserver((function(t){for(var e=0;e<t.length;e++){var o=t[e],c=Math.max(o.intersectionRect.height/window.innerHeight,o.intersectionRatio);n.$store.commit("setSectionIntersection",{id:o.target.id,intersect:c})}}),{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]});this.$store.commit("setIntersectionObserver",t)}}),r=i,u=(e("00c8"),e("2877")),s=Object(u["a"])(r,o,c,!1,null,"5b32eda8",null);t["default"]=s.exports},e5bf:function(n,t,e){}}]);
//# sourceMappingURL=about.4b09dbe4.js.map