"use strict";(self.webpackChunkthebase_docs=self.webpackChunkthebase_docs||[]).push([[4216],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),c=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),k=c(n),m=a,u=k["".concat(o,".").concat(m)]||k[m]||d[m]||i;return n?r.createElement(u,l(l({ref:e},s),{},{components:n})):r.createElement(u,l({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,l[1]=p;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7026:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return k}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],p={sidebar_position:1},o="\u05d9\u05e6\u05d9\u05e8\u05ea \u05d8\u05d9\u05e7\u05d8",c={unversionedId:"api/tickets/create-ticket",id:"api/tickets/create-ticket",isDocsHomePage:!1,title:"\u05d9\u05e6\u05d9\u05e8\u05ea \u05d8\u05d9\u05e7\u05d8",description:"\u05d8\u05d9\u05e7\u05d8\u05d9\u05dd \u05d4\u05dd \u05d1\u05e2\u05e6\u05dd \u05db\u05e8\u05d8\u05d9\u05e1\u05d9 \u05ea\u05de\u05d9\u05db\u05d4, \u05e4\u05e0\u05d9\u05d5\u05ea \u05e9\u05dc \u05dc\u05e7\u05d5\u05d7\u05d5\u05ea \u05e9\u05e6\u05e8\u05d9\u05db\u05d9\u05dd \u05e9\u05d9\u05e8\u05d5\u05ea \u05d0\u05d5 \u05ea\u05de\u05d9\u05db\u05d4 \u05db\u05d6\u05d4 \u05d0\u05d5 \u05d0\u05d7\u05e8.",source:"@site/docs/api/tickets/create-ticket.md",sourceDirName:"api/tickets",slug:"/api/tickets/create-ticket",permalink:"/thebase/docs/api/tickets/create-ticket",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/tickets/create-ticket.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"\u05e8\u05de\u05d5\u05ea \u05d3\u05d7\u05d9\u05e4\u05d5\u05ea",permalink:"/thebase/docs/api/tasks/task-priorities"},next:{title:"\u05e1\u05d8\u05d8\u05d5\u05e1\u05d9 \u05d8\u05d9\u05e7\u05d8\u05d9\u05dd",permalink:"/thebase/docs/api/tickets/ticket-statuses"}},s=[{value:"\u05dc\u05de\u05d4 \u05d0\u05e0\u05d9 \u05e6\u05e8\u05d9\u05da \u05dc\u05e9\u05d9\u05dd \u05dc\u05d1?",id:"\u05dc\u05de\u05d4-\u05d0\u05e0\u05d9-\u05e6\u05e8\u05d9\u05da-\u05dc\u05e9\u05d9\u05dd-\u05dc\u05d1",children:[]},{value:"Create Ticket",id:"create-ticket",children:[]}],d={toc:s};function k(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u05d9\u05e6\u05d9\u05e8\u05ea-\u05d8\u05d9\u05e7\u05d8"},"\u05d9\u05e6\u05d9\u05e8\u05ea \u05d8\u05d9\u05e7\u05d8"),(0,i.kt)("p",null,"\u05d8\u05d9\u05e7\u05d8\u05d9\u05dd \u05d4\u05dd \u05d1\u05e2\u05e6\u05dd \u05db\u05e8\u05d8\u05d9\u05e1\u05d9 \u05ea\u05de\u05d9\u05db\u05d4, \u05e4\u05e0\u05d9\u05d5\u05ea \u05e9\u05dc \u05dc\u05e7\u05d5\u05d7\u05d5\u05ea \u05e9\u05e6\u05e8\u05d9\u05db\u05d9\u05dd \u05e9\u05d9\u05e8\u05d5\u05ea \u05d0\u05d5 \u05ea\u05de\u05d9\u05db\u05d4 \u05db\u05d6\u05d4 \u05d0\u05d5 \u05d0\u05d7\u05e8.",(0,i.kt)("br",{parentName:"p"}),"\n","\u05d1\u05d3\u05e8\u05f4\u05db, \u05d4\u05e4\u05e0\u05d9\u05d5\u05ea \u05de\u05ea\u05e7\u05d1\u05dc\u05d5\u05ea \u05dc\u05e2\u05e1\u05e7 \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05d3\u05d5\u05d0\u05f4\u05dc \u05d0\u05d5 \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05de\u05d5\u05e7\u05d3 \u05e9\u05d9\u05d7\u05d5\u05ea \u05d9\u05d9\u05e2\u05d5\u05d3\u05d9 \u05e9\u05de\u05d8\u05e4\u05dc \u05d1\u05e4\u05e0\u05d9\u05d5\u05ea."),(0,i.kt)("p",null,"\u05d4\u05de\u05d8\u05e8\u05d4 \u05e9\u05dc\u05e0\u05d5 \u05d4\u05d9\u05d0 \u05dc\u05d4\u05ea\u05d7\u05d1\u05e8 \u05dc\u05de\u05e7\u05d5\u05e8 \u05d4\u05d6\u05d4 \u05d5\u05dc\u05d4\u05db\u05e0\u05d9\u05e1 \u05d0\u05ea \u05d4\u05e4\u05e0\u05d9\u05d5\u05ea \u05e9\u05dc \u05d4\u05dc\u05e7\u05d5\u05d7\u05d5\u05ea \u05dc\u05ea\u05d5\u05da \u05d4\u05de\u05e2\u05e8\u05db\u05ea \u05e2\u05dc \u05de\u05e0\u05ea \u05e9\u05d9\u05d4\u05d9\u05d4 \u05e0\u05d9\u05ea\u05df \u05dc\u05e8\u05db\u05d6 \u05d0\u05ea \u05d4\u05e4\u05e0\u05d9\u05d5\u05ea \u05d1\u05de\u05e7\u05d5\u05dd \u05d0\u05d7\u05d3 \u05d5\u05dc\u05d1\u05d3\u05d5\u05e7 \u05e9\u05d4\u05e4\u05e0\u05d9\u05d5\u05ea \u05d0\u05db\u05df \u05d8\u05d5\u05e4\u05dc\u05d5."),(0,i.kt)("h3",{id:"\u05dc\u05de\u05d4-\u05d0\u05e0\u05d9-\u05e6\u05e8\u05d9\u05da-\u05dc\u05e9\u05d9\u05dd-\u05dc\u05d1"},"\u05dc\u05de\u05d4 \u05d0\u05e0\u05d9 \u05e6\u05e8\u05d9\u05da \u05dc\u05e9\u05d9\u05dd \u05dc\u05d1?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u05d1\u05d0\u05e4\u05e9\u05e8\u05d5\u05ea\u05da \u05dc\u05d4\u05d2\u05d9\u05d3 \u05d1\u05de\u05e2\u05e8\u05db\u05ea \u05de\u05d7\u05dc\u05e7\u05d4 \u05db\u05d3\u05d9 \u05dc\u05e9\u05d9\u05d9\u05da \u05d0\u05ea \u05d4\u05e4\u05e0\u05d9\u05d4 \u05dc\u05d8\u05d9\u05e4\u05d5\u05dc \u05de\u05de\u05d5\u05e7\u05d3 \u05d9\u05d5\u05ea\u05e8. \u05dc\u05de\u05e9\u05dc:  \u05ea\u05de\u05d9\u05db\u05d4 \u05d8\u05db\u05e0\u05d9\u05ea, \u05e4\u05e0\u05d9\u05d5\u05ea \u05e9\u05dc \u05de\u05ea\u05e2\u05e0\u05d9\u05d9\u05e0\u05d9\u05dd \u05d7\u05d3\u05e9\u05d9\u05dd \u05d5\u05db\u05d5..."),(0,i.kt)("li",{parentName:"ol"},"\u05d1\u05d0\u05e4\u05e9\u05e8\u05d5\u05ea\u05da \u05dc\u05d4\u05d2\u05d3\u05d9\u05e8 \u05e8\u05de\u05ea \u05d3\u05d7\u05d9\u05e4\u05d5\u05ea \u05e2\u05dc \u05de\u05e0\u05ea \u05dc\u05ea\u05e2\u05d3\u05e3 \u05d0\u05ea \u05d4\u05d8\u05d9\u05e4\u05d5\u05dc \u05d1\u05d8\u05d9\u05e7\u05d8")),(0,i.kt)("div",{class:"api-docs api-sec"},(0,i.kt)("h2",{id:"create-ticket"},"Create Ticket"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Endpoint:"),(0,i.kt)("br",{parentName:"p"}),"\n","Method: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"POST"))),(0,i.kt)("div",{class:"end-point"},(0,i.kt)("code",null,"POST: https://{{domain}}/v2/tickets/create")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Authorization: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"OAuth 2.0")),(0,i.kt)("br",{parentName:"p"}),"\n","Headers: ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer {{token}}")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Body: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Content-Type: application/json"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Attributes \ud83e\udd16"),(0,i.kt)("div",{class:"api-att"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Note"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null},"account_id"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u05de\u05d6\u05d4\u05d4 \u05dc\u05e7\u05d5\u05d7 \u05dc\u05e9\u05d9\u05d5\u05da")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"subject"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u05e0\u05d5\u05e9\u05d0 \u05d4\u05e4\u05e0\u05d9\u05d4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null},"msg"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u05ea\u05d5\u05db\u05df \u05d4\u05e4\u05e0\u05d9\u05d4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null},"owner"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"../users/users-list"},"\u05de\u05d6\u05d4\u05d4 \u05de\u05e9\u05ea\u05de\u05e9 \u05d0\u05d7\u05e8\u05d0\u05d9"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null},"department_id"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"../tickets/ticket-departments"},"\u05de\u05d7\u05dc\u05e7\u05ea \u05ea\u05de\u05d9\u05db\u05d4"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null},"priority_id"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"../tickets/ticket-priorities"},"\u05e8\u05de\u05ea \u05d3\u05d7\u05d9\u05e4\u05d5\u05ea"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"status"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"../tickets/ticket-statuses"},"\u05de\u05d6\u05d4\u05d4 \u05e1\u05d8\u05d8\u05d5\u05e1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null},"phone"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null},"email"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"})))))),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",201:!0,className:"language-json",metastring:'title="Request - Status Code: 201 Created"',title:'"Request',"-":!0,Status:!0,"Code:":!0,'Created"':!0},'{\n    "account_id": "",\n    "subject": "my subject",\n    "msg": "my description",\n    "owner": "",\n    "department_id": "",\n    "priority_id": "",\n    "status": "233476065495939904005866822871905093425",\n    "phone": "0549255555",\n    "email": ""\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n    "id": "271911966272026940869079307116515873576",\n    "message": "\u05d8\u05d9\u05e7\u05d8 \u05e0\u05d5\u05e6\u05e8 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4",\n    "ticket_status": "233476065495939904005866822871905093425"\n}\n'))))}k.isMDXComponent=!0}}]);