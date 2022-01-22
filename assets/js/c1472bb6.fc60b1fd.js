"use strict";(self.webpackChunkthebase_docs=self.webpackChunkthebase_docs||[]).push([[2802],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=s(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(k,l(l({ref:e},m),{},{components:n})):a.createElement(k,l({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1868:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:1},p="\u05e9\u05dc\u05d9\u05d7\u05ea \u05ea\u05d1\u05e0\u05d9\u05ea \u05e1\u05de\u05e1",s={unversionedId:"api/sms/send-template",id:"api/sms/send-template",isDocsHomePage:!1,title:"\u05e9\u05dc\u05d9\u05d7\u05ea \u05ea\u05d1\u05e0\u05d9\u05ea \u05e1\u05de\u05e1",description:"\u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05d4\u05de\u05d5\u05d3\u05d5\u05dc \u05e0\u05d9\u05ea\u05df \u05dc\u05e9\u05dc\u05d5\u05d7 \u05d4\u05d5\u05d3\u05e2\u05ea SMS \u05dc\u05db\u05dc \u05d0\u05d9\u05e9 \u05e7\u05e9\u05e8 \u05e9\u05de\u05ea\u05d7\u05e9\u05e7 \u05dc\u05db\u05dd \u05d5\u05dc\u05e9\u05d9\u05d9\u05da \u05d0\u05d5\u05ea\u05d5 \u05dc\u05dc\u05d9\u05d3 \u05d0\u05d5 \u05dc\u05dc\u05e7\u05d5\u05d7.",source:"@site/docs/api/sms/send-template.md",sourceDirName:"api/sms",slug:"/api/sms/send-template",permalink:"/thebase/docs/api/sms/send-template",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/sms/send-template.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"\u05e9\u05dc\u05d9\u05d7\u05ea \u05e1\u05de\u05e1",permalink:"/thebase/docs/api/sms/send-sms"},next:{title:"\u05ea\u05d1\u05e0\u05d9\u05d5\u05ea \u05e1\u05de\u05e1",permalink:"/thebase/docs/api/sms/sms-templates"}},m=[{value:"\u05dc\u05de\u05d4 \u05d0\u05e0\u05d9 \u05e6\u05e8\u05d9\u05da \u05dc\u05e9\u05d9\u05dd \u05dc\u05d1?",id:"\u05dc\u05de\u05d4-\u05d0\u05e0\u05d9-\u05e6\u05e8\u05d9\u05da-\u05dc\u05e9\u05d9\u05dd-\u05dc\u05d1",children:[]},{value:"Send SMS (Template)",id:"send-sms-template",children:[]}],d={toc:m};function c(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u05e9\u05dc\u05d9\u05d7\u05ea-\u05ea\u05d1\u05e0\u05d9\u05ea-\u05e1\u05de\u05e1"},"\u05e9\u05dc\u05d9\u05d7\u05ea \u05ea\u05d1\u05e0\u05d9\u05ea \u05e1\u05de\u05e1"),(0,i.kt)("p",null,"\u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05d4\u05de\u05d5\u05d3\u05d5\u05dc \u05e0\u05d9\u05ea\u05df \u05dc\u05e9\u05dc\u05d5\u05d7 \u05d4\u05d5\u05d3\u05e2\u05ea SMS \u05dc\u05db\u05dc \u05d0\u05d9\u05e9 \u05e7\u05e9\u05e8 \u05e9\u05de\u05ea\u05d7\u05e9\u05e7 \u05dc\u05db\u05dd \u05d5\u05dc\u05e9\u05d9\u05d9\u05da \u05d0\u05d5\u05ea\u05d5 \u05dc\u05dc\u05d9\u05d3 \u05d0\u05d5 \u05dc\u05dc\u05e7\u05d5\u05d7.",(0,i.kt)("br",{parentName:"p"}),"\n","\u05d4\u05d4\u05d5\u05d3\u05e2\u05d4 \u05de\u05d7\u05d5\u05e9\u05d1\u05ea \u05d1\u05d7\u05e9\u05d1\u05d5\u05e0\u05db\u05dd \u05dc\u05e4\u05d9 \u05d4\u05d7\u05d1\u05d9\u05dc\u05d4 \u05d0\u05dc\u05d9\u05d4 \u05d0\u05ea\u05dd \u05de\u05e0\u05d5\u05d9\u05d9\u05dd."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u05e9\u05d9\u05dd \u2764\ufe0f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u05d1\u05de\u05d5\u05d3\u05d5\u05dc \u05d6\u05d4 \u05dc\u05d0 \u05e0\u05e6\u05d9\u05d9\u05df \u05d0\u05ea \u05ea\u05d5\u05db\u05df \u05d4\u05d4\u05d5\u05d3\u05e2\u05d4 \u05d0\u05dc\u05d0 \u05e0\u05e9\u05ea\u05de\u05e9 \u05d1\u05ea\u05d1\u05e0\u05d9\u05ea \u05e7\u05d9\u05d9\u05de\u05ea \u05de\u05de\u05e2\u05e8\u05db\u05ea \u05d4\u05e0\u05d9\u05d4\u05d5\u05dc.")))),(0,i.kt)("h3",{id:"\u05dc\u05de\u05d4-\u05d0\u05e0\u05d9-\u05e6\u05e8\u05d9\u05da-\u05dc\u05e9\u05d9\u05dd-\u05dc\u05d1"},"\u05dc\u05de\u05d4 \u05d0\u05e0\u05d9 \u05e6\u05e8\u05d9\u05da \u05dc\u05e9\u05d9\u05dd \u05dc\u05d1?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u05d4\u05e7\u05e4\u05d9\u05d3\u05d5 \u05dc\u05d4\u05d6\u05d9\u05df \u05de\u05e1\u05e4\u05e8 \u05ea\u05e7\u05d9\u05df \u05ea\u05d7\u05ea \u05de\u05e1\u05e4\u05e8 \u05d4\u05e9\u05d5\u05dc\u05d7 \u05d5\u05d4\u05d9\u05e2\u05d3."),(0,i.kt)("li",{parentName:"ol"},"\u05d4\u05de\u05e2\u05e8\u05db\u05ea \u05ea\u05d6\u05d4\u05d4 \u05de\u05e1\u05e4\u05e8 \u05e9\u05ea\u05d7\u05d9\u05dc \u05d1054 \u05d0\u05d5 \u05d154 - \u05dc\u05d0 \u05dc\u05d4\u05d6\u05d9\u05df \u05de\u05e1\u05e4\u05e8\u05d9\u05dd \u05e2\u05dd \u05e7\u05d9\u05d3\u05d5\u05de\u05d9\u05ea \u05d1\u05d9\u05e0\u05dc\u05d0\u05d5\u05de\u05d9\u05ea."),(0,i.kt)("li",{parentName:"ol"},"\u05d0\u05dd \u05ea\u05e9\u05d9\u05d9\u05db\u05d5 \u05dc\u05d9\u05d3 \u05d0\u05d5 \u05dc\u05e7\u05d5\u05d7, \u05d4\u05d4\u05d5\u05d3\u05e2\u05d4 \u05ea\u05d5\u05e4\u05d9\u05e2 \u05d1\u05db\u05e8\u05d8\u05d9\u05e1 \u05d4\u05e8\u05dc\u05d5\u05d5\u05e0\u05d8\u05d9."),(0,i.kt)("li",{parentName:"ol"},"\u05d0\u05dd \u05d4\u05d4\u05d5\u05d3\u05e2\u05d4 \u05e0\u05e9\u05dc\u05d7\u05d4 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4, \u05ea\u05e7\u05d1\u05dc\u05d5 \u05d1\u05ea\u05e9\u05d5\u05d1\u05d4 ",(0,i.kt)("inlineCode",{parentName:"li"},"shipment_id")),(0,i.kt)("li",{parentName:"ol"},"\u05d0\u05dd \u05d1\u05ea\u05d1\u05e0\u05d9\u05ea \u05e9\u05dc\u05db\u05dd \u05d9\u05e9 \u05e9\u05d3\u05d5\u05ea \u05d3\u05d9\u05e0\u05d0\u05de\u05d9\u05d9\u05dd \u05e9\u05d0\u05de\u05d5\u05e8\u05d9\u05dd \u05dc\u05e7\u05d7\u05ea \u05d0\u05ea \u05e9\u05dd \u05d4\u05dc\u05e7\u05d5\u05d7 \u05d0\u05d5 \u05db\u05dc \u05e4\u05e8\u05de\u05d8\u05e8 \u05d0\u05d7\u05e8 \u05e0\u05d3\u05e2 \u05dc\u05e2\u05e9\u05d5\u05ea \u05d6\u05d0\u05ea \u05e8\u05e7 \u05d0\u05dd \u05ea\u05e9\u05d9\u05d9\u05da \u05dc\u05d9\u05d3 \u05d0\u05d5 \u05dc\u05e7\u05d5\u05d7 - \u05dc\u05dc\u05d0 \u05d6\u05d4 \u05d4\u05ea\u05d1\u05e0\u05d9\u05ea \u05ea\u05d9\u05e9\u05dc\u05d7 AS IS")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u05e9\u05d3\u05d5\u05ea \u05d3\u05d9\u05e0\u05d0\u05de\u05d9\u05d9\u05dd")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u05e9\u05d9\u05de\u05d5 \u2764\ufe0f \u05dc\u05e1\u05e2\u05d9\u05e3 5"))),(0,i.kt)("div",{class:"api-docs api-sec"},(0,i.kt)("h2",{id:"send-sms-template"},"Send SMS (Template)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Endpoint:"),(0,i.kt)("br",{parentName:"p"}),"\n","Method: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"POST"))),(0,i.kt)("div",{class:"end-point"},(0,i.kt)("code",null,"POST: https://{{domain}}/v2/sms/sendTemplate")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Authorization: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"OAuth 2.0")),(0,i.kt)("br",{parentName:"p"}),"\n","Headers: ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer {{token}}")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Body: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Content-Type: application/json"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Attributes \ud83e\udd16"),(0,i.kt)("div",{class:"api-att"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Note"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"from"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u05de\u05e1\u05e4\u05e8 \u05d4\u05e9\u05d5\u05dc\u05d7")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"target"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u05de\u05e1\u05e4\u05e8 \u05d9\u05e2\u05d3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"template_id"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"../sms/sms-templates"},"\u05de\u05d6\u05d4\u05d4 \u05ea\u05d1\u05e0\u05d9\u05ea"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null},"lead_id"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u05de\u05d6\u05d4\u05d4 \u05dc\u05d9\u05d3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null},"account_id"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u05de\u05d6\u05d4\u05d4 \u05dc\u05e7\u05d5\u05d7")))))),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",201:!0,className:"language-json",metastring:'title="Request - Status Code: 201 Created"',title:'"Request',"-":!0,Status:!0,"Code:":!0,'Created"':!0},'{\n"from": 0544444444,\n"target": 054222222,\n"template_id": 258123218108221845257206184125949190319,\n"lead_id": null,\n"account_id": null\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n    "shipment_id": "1124840092"\n}\n'))))}c.isMDXComponent=!0}}]);