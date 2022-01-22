"use strict";(self.webpackChunkthebase_docs=self.webpackChunkthebase_docs||[]).push([[335],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),s=o(n),c=r,u=s["".concat(p,".").concat(c)]||s[c]||k[c]||i;return n?a.createElement(u,l(l({ref:e},m),{},{components:n})):a.createElement(u,l({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=s;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,l[1]=d;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3810:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return m},default:function(){return s}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],d={sidebar_position:1},p="\u05d4\u05d5\u05e1\u05e4\u05ea \u05d9\u05de\u05d9 \u05e2\u05e1\u05e7\u05d9\u05dd \u05dc\u05ea\u05d0\u05e8\u05d9\u05da",o={unversionedId:"api/working-days/add-working-days",id:"api/working-days/add-working-days",isDocsHomePage:!1,title:"\u05d4\u05d5\u05e1\u05e4\u05ea \u05d9\u05de\u05d9 \u05e2\u05e1\u05e7\u05d9\u05dd \u05dc\u05ea\u05d0\u05e8\u05d9\u05da",description:"\u05d4\u05de\u05d5\u05d3\u05d5\u05dc \u05de\u05d0\u05e4\u05e9\u05e8 \u05d7\u05d9\u05e9\u05d5\u05d1 \u05e9\u05dc \u05d9\u05de\u05d9 \u05e2\u05e1\u05e7\u05d9\u05dd \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05d4\u05d5\u05e1\u05e4\u05d4 \u05e9\u05dc \u05d9\u05de\u05d9\u05dd \u05dc\u05ea\u05d0\u05e8\u05d9\u05da.",source:"@site/docs/api/working-days/add-working-days.md",sourceDirName:"api/working-days",slug:"/api/working-days/add-working-days",permalink:"/thebase/docs/api/working-days/add-working-days",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/working-days/add-working-days.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"\u05e7\u05d9\u05e6\u05d5\u05e8 \u05e7\u05d9\u05e9\u05d5\u05e8\u05d9\u05dd",permalink:"/thebase/docs/api/links/shortner"},next:{title:"\u05d9\u05de\u05d9 \u05e2\u05e1\u05e7\u05d9\u05dd \u05d1\u05d9\u05df \u05ea\u05d0\u05e8\u05d9\u05db\u05d9\u05dd",permalink:"/thebase/docs/api/working-days/working-days-between"}},m=[{value:"\u05dc\u05de\u05d4 \u05d0\u05e0\u05d9 \u05e6\u05e8\u05d9\u05da \u05dc\u05e9\u05d9\u05dd \u05dc\u05d1?",id:"\u05dc\u05de\u05d4-\u05d0\u05e0\u05d9-\u05e6\u05e8\u05d9\u05da-\u05dc\u05e9\u05d9\u05dd-\u05dc\u05d1",children:[]},{value:"Add Working Days",id:"add-working-days",children:[]}],k={toc:m};function s(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u05d4\u05d5\u05e1\u05e4\u05ea-\u05d9\u05de\u05d9-\u05e2\u05e1\u05e7\u05d9\u05dd-\u05dc\u05ea\u05d0\u05e8\u05d9\u05da"},"\u05d4\u05d5\u05e1\u05e4\u05ea \u05d9\u05de\u05d9 \u05e2\u05e1\u05e7\u05d9\u05dd \u05dc\u05ea\u05d0\u05e8\u05d9\u05da"),(0,i.kt)("p",null,"\u05d4\u05de\u05d5\u05d3\u05d5\u05dc \u05de\u05d0\u05e4\u05e9\u05e8 \u05d7\u05d9\u05e9\u05d5\u05d1 \u05e9\u05dc \u05d9\u05de\u05d9 \u05e2\u05e1\u05e7\u05d9\u05dd \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05d4\u05d5\u05e1\u05e4\u05d4 \u05e9\u05dc \u05d9\u05de\u05d9\u05dd \u05dc\u05ea\u05d0\u05e8\u05d9\u05da.",(0,i.kt)("br",{parentName:"p"}),"\n","\u05d4\u05ea\u05d5\u05e6\u05d0\u05d4 \u05d4\u05e1\u05d5\u05e4\u05d9\u05ea \u05de\u05d7\u05d5\u05e9\u05d1\u05ea \u05dc\u05e4\u05d9 \u05d4\u05d7\u05d2\u05d9\u05dd \u05e9\u05d4\u05d9\u05d5 \u05d1\u05d9\u05df \u05d4\u05ea\u05d0\u05e8\u05d9\u05db\u05d9\u05dd \u05d5\u05e1\u05d5\u05e4\u05e9\u05d9 \u05e9\u05d1\u05d5\u05e2 \u05e9\u05dc\u05d0 \u05de\u05d7\u05d5\u05e9\u05d1\u05d9\u05dd \u05db\u05d9\u05de\u05d9 \u05e2\u05e1\u05e7\u05d9\u05dd.",(0,i.kt)("br",{parentName:"p"}),"\n","\u05dc\u05de\u05e9\u05dc, \u05d0\u05dd \u05d1\u05e6\u05d5\u05e0\u05da \u05dc\u05d7\u05e9\u05d1 \u05db\u05de\u05d4 \u05d6\u05d4 14 \u05d9\u05de\u05d9\u05dd \u05e2\u05e1\u05e7\u05d9\u05dd \u05de\u05ea\u05d0\u05e8\u05d9\u05da ",(0,i.kt)("strong",{parentName:"p"},"31/08/2021")," - \u05ea\u05e7\u05d1\u05dc \u05d1\u05ea\u05e9\u05d5\u05d1\u05d4 \u05d0\u05ea \u05d4\u05ea\u05d0\u05e8\u05d9\u05da \u05d4\u05e1\u05d5\u05e4\u05d9."),(0,i.kt)("p",null,"\u05de\u05e2\u05d1\u05e8 \u05dc\u05ea\u05d0\u05e8\u05d9\u05da \u05d5\u05de\u05e1\u05e4\u05e8 \u05d4\u05d9\u05de\u05d9\u05dd \u05e0\u05d3\u05e8\u05e9 \u05dc\u05d4\u05d6\u05d9\u05df \u05d0\u05ea \u05de\u05d1\u05e0\u05d4 \u05e1\u05d5\u05e4\u05f4\u05e9 \u05db\u05d3\u05d9 \u05e9\u05d4\u05de\u05e2\u05e8\u05db\u05ea \u05ea\u05d3\u05e2 \u05e2\u05dc \u05d0\u05d9\u05d6\u05d4 \u05d9\u05de\u05d9\u05dd \u05dc\u05d3\u05dc\u05d2."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u05d3\u05d5\u05d2\u05de\u05d4 \u05e7\u05d8\u05e0\u05d4")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u05d0\u05dd \u05d0\u05ea\u05d4 \u05de\u05d2\u05d3\u05d9\u05e8 \u05d0\u05ea \u05e9\u05d9\u05e9\u05d9 \u05d5\u05e9\u05d1\u05ea \u05db\u05e1\u05d5\u05e4\u05f4\u05e9 \u05d4\u05d6\u05df ",(0,i.kt)("strong",{parentName:"p"},"6,7"),(0,i.kt)("br",{parentName:"p"}),"\n","\u05d0\u05dd \u05d0\u05ea\u05d4 \u05de\u05d2\u05d3\u05d9\u05e8 \u05d0\u05ea \u05e9\u05d9\u05e9\u05d9 \u05db\u05d9\u05d5\u05dd \u05e2\u05e1\u05e7\u05d9\u05dd \u05d4\u05d6\u05d4 ",(0,i.kt)("strong",{parentName:"p"},"7")," \u05d1\u05dc\u05d1\u05d3",(0,i.kt)("br",{parentName:"p"}),"\n","1 = \u05e8\u05d0\u05e9\u05d5\u05df",(0,i.kt)("br",{parentName:"p"}),"\n","2 = \u05e9\u05e0\u05d9",(0,i.kt)("br",{parentName:"p"}),"\n","3 = \u05e9\u05dc\u05d9\u05e9\u05d9",(0,i.kt)("br",{parentName:"p"}),"\n","\u05d5\u05db\u05d5...",(0,i.kt)("br",{parentName:"p"}),"\n","\u05d0\u05dd \u05d9\u05e9 \u05d9\u05d5\u05ea\u05e8 \u05de\u05d9\u05d5\u05dd \u05d0\u05d7\u05d3 - \u05d4\u05e4\u05e8\u05d3 \u05d1\u05e4\u05e1\u05d9\u05e7."))),(0,i.kt)("h3",{id:"\u05dc\u05de\u05d4-\u05d0\u05e0\u05d9-\u05e6\u05e8\u05d9\u05da-\u05dc\u05e9\u05d9\u05dd-\u05dc\u05d1"},"\u05dc\u05de\u05d4 \u05d0\u05e0\u05d9 \u05e6\u05e8\u05d9\u05da \u05dc\u05e9\u05d9\u05dd \u05dc\u05d1?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u05d1\u05e4\u05e8\u05de\u05d8\u05e8 ",(0,i.kt)("inlineCode",{parentName:"li"},"date_format")," \u05e6\u05d9\u05d9\u05df \u05d0\u05ea \u05d4\u05e4\u05d5\u05e8\u05de\u05d8 \u05e9\u05dc \u05d4\u05ea\u05d0\u05e8\u05d9\u05da \u05e9\u05d4\u05d6\u05e0\u05ea."),(0,i.kt)("li",{parentName:"ol"},"\u05d1\u05e4\u05e8\u05de\u05d8\u05e8 ",(0,i.kt)("inlineCode",{parentName:"li"},"return_format")," \u05e6\u05d9\u05d9\u05df \u05d0\u05ea \u05d4\u05e4\u05d5\u05e8\u05de\u05d8 \u05e9\u05dc \u05d4\u05ea\u05d0\u05e8\u05d9\u05da \u05d4\u05d5\u05e1\u05e4\u05d9 \u05e9\u05ea\u05e8\u05e6\u05d4 \u05dc\u05e7\u05d1\u05dc \u05d1\u05ea\u05e9\u05d5\u05d1\u05d4.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u05e4\u05d5\u05e8\u05de\u05d8"),(0,i.kt)("th",{parentName:"tr",align:null},"\u05d3\u05d5\u05d2\u05de\u05d4"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u05d4\u05e2\u05e8\u05d4"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"YYYY")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"2021")),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"YY")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"21")),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MM")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"11")),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DD")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"27")),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"D")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"5")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u05de\u05e1\u05e4\u05e8 \u05d4\u05d9\u05d5\u05dd \u05d1\u05e9\u05d1\u05d5\u05e2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"HH12")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"9")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u05e9\u05e2\u05d4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"HH24")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"21")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u05e9\u05e2\u05d4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MI")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"55")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u05d3\u05e7\u05d5\u05ea")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SS")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"59")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u05e9\u05e0\u05d9\u05d5\u05ea")))),(0,i.kt)("p",null,"\u05d0\u05dd \u05e0\u05d3\u05e8\u05e9 \u05e4\u05d5\u05e8\u05de\u05d8 \u05e9\u05dc\u05d0 \u05e7\u05d9\u05d9\u05dd \u05db\u05d0\u05df - \u05e6\u05d5\u05e8 \u05d0\u05d9\u05ea\u05e0\u05d5 \u05e7\u05e9\u05e8 \u05d5\u05e0\u05e1\u05d9\u05d9\u05e2 \u05dc\u05da."),(0,i.kt)("div",{class:"api-docs api-sec"},(0,i.kt)("h2",{id:"add-working-days"},"Add Working Days"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Endpoint:"),(0,i.kt)("br",{parentName:"p"}),"\n","Method: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"POST"))),(0,i.kt)("div",{class:"end-point"},(0,i.kt)("code",null,"POST: https://{{domain}}/v2/workingDays/addWorkingDays")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Authorization: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"OAuth 2.0")),(0,i.kt)("br",{parentName:"p"}),"\n","Headers: ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer {{token}}")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Body: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Content-Type: application/json"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Attributes \ud83e\udd16"),(0,i.kt)("div",{class:"api-att"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Note"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"start_date"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u05ea\u05d0\u05e8\u05d9\u05da \u05d4\u05ea\u05d7\u05dc\u05d4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"increment"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u05d9\u05de\u05d9\u05dd \u05dc\u05d4\u05d5\u05e1\u05e4\u05d4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"weekend"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u05e4\u05d5\u05e8\u05de\u05d8 \u05e1\u05d5\u05e4\u05f4\u05e9")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"date_format"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u05e4\u05d5\u05e8\u05de\u05d8 \u05ea\u05d0\u05e8\u05d9\u05da \u05de\u05e7\u05d5\u05e8")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"return_format"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u05e4\u05d5\u05e8\u05de\u05d8 \u05ea\u05d0\u05e8\u05d9\u05da \u05dc\u05d7\u05d6\u05e8\u05d4")))))),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",200:!0,className:"language-json",metastring:'title="Request - Status Code: 200 Created"',title:'"Request',"-":!0,Status:!0,"Code:":!0,'Created"':!0},'{\n    "start_date": "31/08/2021",\n    "increment": 14,\n    "weekend": "6,7",\n    "date_format": "DD/MM/YYYY",\n    "return_format": "DD/MM/YYYY"\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n    "date": "22/09/2021",\n    "days_total_holidays": 4,\n    "days_total_weekends": 4,\n    "holidays": [\n        {\n            "name": "Gedaliah Fast",\n            "date": "2021-09-09T00:00:00Z",\n            "description": "Gedaliah Fast"\n        },\n        {\n            "name": "Rosh Hashana (Day 2)",\n            "date": "2021-09-08T00:00:00Z",\n            "description": "Rosh Hashana (Day 2)"\n        },\n        {\n            "name": "Rosh Hashana",\n            "date": "2021-09-07T00:00:00Z",\n            "description": "Rosh Hashana"\n        },\n        {\n            "name": "Rosh Hashana Eve",\n            "date": "2021-09-06T00:00:00Z",\n            "description": "Rosh Hashana"\n        }\n    ],\n    "weekends": [\n        {\n            "the_dated": "2021-09-03T00:00:00Z",\n            "the_date": "03-sep-2021",\n            "month_name": "september",\n            "day_name": "FRIDAY",\n            "the_week": "35",\n            "the_day": "6"\n        },\n        {\n            "the_dated": "2021-09-04T00:00:00Z",\n            "the_date": "04-sep-2021",\n            "month_name": "september",\n            "day_name": "SATURDAY",\n            "the_week": "35",\n            "the_day": "7"\n        },\n        {\n            "the_dated": "2021-09-10T00:00:00Z",\n            "the_date": "10-sep-2021",\n            "month_name": "september",\n            "day_name": "FRIDAY",\n            "the_week": "36",\n            "the_day": "6"\n        },\n        {\n            "the_dated": "2021-09-11T00:00:00Z",\n            "the_date": "11-sep-2021",\n            "month_name": "september",\n            "day_name": "SATURDAY",\n            "the_week": "36",\n            "the_day": "7"\n        }\n    ]\n}\n'))))}s.isMDXComponent=!0}}]);