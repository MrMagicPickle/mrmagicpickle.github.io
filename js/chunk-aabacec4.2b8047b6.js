(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aabacec4"],{af4e:function(t,e,s){},c486:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"project-modal"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"close",on:{click:t.closeModal}},[s("svg",{staticClass:"bi bi-x",attrs:{width:"32px",height:"32px",viewBox:"0 0 16 16",fill:"#c7e4e9",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}})])]),s("div",{staticClass:"gif"},[s("img",{attrs:{src:t.selectedProject.gif}})]),s("div",{staticClass:"project-content"},[s("div",{staticClass:"top-row-content"},[s("div",{staticClass:"project-name"},[s("p",[t._v(t._s(t.selectedProject.projectName))])]),0===t.selectedProject.links.length?s("div",{staticClass:"restricted-site-cta"},[s("svg",{staticClass:"bi bi-slash-circle-fill",attrs:{width:"16px",height:"16px",viewBox:"0 0 16 16",fill:"#adadad",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.646-2.646a.5.5 0 0 0-.708-.708l-6 6a.5.5 0 0 0 .708.708l6-6z"}})]),s("p",[t._v("Restricted Site")])]):t._e(),t.selectedProject.links.length>1?s("div",{staticClass:"visit-site-cta",on:{click:t.toggleDropDown}},[t.isShowDropDown?s("div",{staticClass:"dropdown"},t._l(t.selectedProject.links,(function(e,i){return s("div",{key:"dropdown-link-"+i,staticClass:"dropdown-link",class:{"dropdown-link-end":i===t.selectedProject.links.length-1},on:{click:function(s){return t.goTo(e)}}},[s("p",[t._v(t._s(t.selectedProject.linkLabels[i]))])])})),0):t._e(),t.selectedProject.links.length>1?s("svg",{staticClass:"bi bi-chevron-down",attrs:{width:"16px",height:"16px",viewBox:"0 0 16 16",fill:"#fff",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"}})]):t._e(),s("p",[t._v("Visit Site")])]):t._e(),1===t.selectedProject.links.length?s("div",{staticClass:"visit-site-cta",on:{click:function(e){return t.goTo(t.selectedProject.links[0])}}},[1===t.selectedProject.links.length?s("svg",{staticClass:"bi bi-box-arrow-up-right",attrs:{width:"16px",height:"16px",viewBox:"0 0 16 16",fill:"#fff",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}}),s("path",{attrs:{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}})]):t._e(),s("p",[t._v("Visit Site")])]):t._e()]),s("div",{staticClass:"divider"}),s("div",{staticClass:"about"},[s("p",[s("span",{domProps:{innerHTML:t._s(t.selectedProject.description)}})])]),t.selectedProject.motivation?s("div",{staticClass:"motivation"},[s("p",{staticClass:"label"},[t._v("Motivation")]),s("p",[t._v(t._s(t.selectedProject.motivation))])]):t._e(),t.selectedProject.responsibilities?s("div",{staticClass:"responsibilities"},[s("p",{staticClass:"label"},[t._v("Responsibilities:")]),t._l(t.selectedProject.responsibilities,(function(e,i){return s("p",{key:"resp-"+i},[s("span",{domProps:{innerHTML:t._s(e)}})])}))],2):t._e(),s("div",{staticClass:"tech-stack"},[s("p",{staticClass:"label"},[t._v("Tech Stack")]),s("div",{staticClass:"tech-stack-items"},t._l(t.selectedProject.techStack,(function(e,i){return s("div",{key:"tech-"+i,staticClass:"tech-item"},[s("p",[t._v(t._s(e))])])})),0)])])])])},a=[],l={data:function(){return{isShowDropDown:!1}},computed:{selectedProject:function(){return this.$store.state.selectedProject}},methods:{closeModal:function(){this.$store.commit("setShowProjectModal",!1)},goTo:function(t){var e=document.createElement("a");e.href=t,e.target="_blank",e.click()},toggleDropDown:function(){this.isShowDropDown=!this.isShowDropDown}}},c=l,o=(s("f613"),s("2877")),n=Object(o["a"])(c,i,a,!1,null,"dcceed36",null);e["default"]=n.exports},f613:function(t,e,s){"use strict";s("af4e")}}]);
//# sourceMappingURL=chunk-aabacec4.2b8047b6.js.map