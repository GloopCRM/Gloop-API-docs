"use strict";(self.webpackChunkthebase_docs=self.webpackChunkthebase_docs||[]).push([[7456],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8983:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],c={sidebar_position:1},i="\u05e1\u05d8\u05d8\u05d5\u05e1\u05d9 \u05dc\u05e7\u05d5\u05d7",u={unversionedId:"api/accounts/account-statuses",id:"api/accounts/account-statuses",isDocsHomePage:!1,title:"\u05e1\u05d8\u05d8\u05d5\u05e1\u05d9 \u05dc\u05e7\u05d5\u05d7",description:"\u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05e1\u05d8\u05d8\u05d5\u05e1\u05d9 \u05dc\u05e7\u05d5\u05d7\u05d5\u05ea \u05e0\u05d9\u05ea\u05df \u05dc\u05e1\u05d2\u05de\u05e0\u05d8 \u05d0\u05ea \u05d4\u05e8\u05e9\u05d5\u05de\u05d5\u05ea \u05dc\u05e4\u05d9 \u05d4\u05de\u05e6\u05d1 \u05d4\u05e8\u05dc\u05d5\u05d5\u05e0\u05d8\u05d9 \u05e9\u05dc \u05d4\u05dc\u05e7\u05d5\u05d7.",source:"@site/docs/api/accounts/account-statuses.md",sourceDirName:"api/accounts",slug:"/api/accounts/account-statuses",permalink:"/docs/api/accounts/account-statuses",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/accounts/account-statuses.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"\u05e1\u05d5\u05d2\u05d9 \u05dc\u05e7\u05d5\u05d7",permalink:"/docs/api/accounts/account-types"},next:{title:"\u05d7\u05d9\u05e4\u05d5\u05e9 \u05dc\u05d9\u05d3\u05d9\u05dd / \u05dc\u05e7\u05d5\u05d7\u05d5\u05ea",permalink:"/docs/api/search/accounts-leads"}},p=[{value:"\u05dc\u05de\u05d4 \u05d0\u05e0\u05d9 \u05e6\u05e8\u05d9\u05da \u05dc\u05e9\u05d9\u05dd \u05dc\u05d1?",id:"\u05dc\u05de\u05d4-\u05d0\u05e0\u05d9-\u05e6\u05e8\u05d9\u05da-\u05dc\u05e9\u05d9\u05dd-\u05dc\u05d1",children:[]},{value:"Get Account Statuses",id:"get-account-statuses",children:[]}],l={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u05e1\u05d8\u05d8\u05d5\u05e1\u05d9-\u05dc\u05e7\u05d5\u05d7"},"\u05e1\u05d8\u05d8\u05d5\u05e1\u05d9 \u05dc\u05e7\u05d5\u05d7"),(0,o.kt)("p",null,"\u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05e1\u05d8\u05d8\u05d5\u05e1\u05d9 \u05dc\u05e7\u05d5\u05d7\u05d5\u05ea \u05e0\u05d9\u05ea\u05df \u05dc\u05e1\u05d2\u05de\u05e0\u05d8 \u05d0\u05ea \u05d4\u05e8\u05e9\u05d5\u05de\u05d5\u05ea \u05dc\u05e4\u05d9 \u05d4\u05de\u05e6\u05d1 \u05d4\u05e8\u05dc\u05d5\u05d5\u05e0\u05d8\u05d9 \u05e9\u05dc \u05d4\u05dc\u05e7\u05d5\u05d7.  "),(0,o.kt)("h3",{id:"\u05dc\u05de\u05d4-\u05d0\u05e0\u05d9-\u05e6\u05e8\u05d9\u05da-\u05dc\u05e9\u05d9\u05dd-\u05dc\u05d1"},"\u05dc\u05de\u05d4 \u05d0\u05e0\u05d9 \u05e6\u05e8\u05d9\u05da \u05dc\u05e9\u05d9\u05dd \u05dc\u05d1?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u05d1",(0,o.kt)("inlineCode",{parentName:"li"},"Response")," \u05ea\u05e7\u05d1\u05dc\u05d5 \u05e4\u05e8\u05de\u05d8\u05e8 ",(0,o.kt)("inlineCode",{parentName:"li"},"is_active")," - \u05d4\u05de\u05e9\u05de\u05e2\u05d5\u05ea \u05e9\u05dc\u05d5 \u05d4\u05d9\u05d0 \u05d4\u05d0\u05dd \u05d4\u05e1\u05d8\u05d8\u05d5\u05e1 \u05d4\u05d6\u05d4 \u05d9\u05d4\u05d9\u05d4 \u05de\u05d5\u05e6\u05d2 \u05d1\u05de\u05e2\u05e8\u05db\u05ea \u05d0\u05d5 \u05e9\u05d4\u05d5\u05d0 \u05d9\u05d5\u05e1\u05ea\u05e8 \u05d5\u05dc\u05d0 \u05e0\u05d9\u05ea\u05df \u05d9\u05d4\u05d9\u05d4 \u05dc\u05d1\u05d7\u05d5\u05e8 \u05d1\u05d5.")),(0,o.kt)("div",{class:"api-docs api-sec"},(0,o.kt)("h2",{id:"get-account-statuses"},"Get Account Statuses"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Endpoint:"),(0,o.kt)("br",{parentName:"p"}),"\n","Method: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"GET"))),(0,o.kt)("div",{class:"end-point"},(0,o.kt)("code",null,"GET: https://{{domain}}/v2/accounts/statuses")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Authorization: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"OAuth 2.0")),(0,o.kt)("br",{parentName:"p"}),"\n","Headers: ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer {{token}}")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Body: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Content-Type: application/json"))),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",200:!0,className:"language-json",metastring:'title="Request - Status Code: 200 OK"',title:'"Request',"-":!0,Status:!0,"Code:":!0,'OK"':!0},"NULL Body\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n    "items": [\n        {\n            "id": "233475749821730393808748733164117718913",\n            "name": "\ud83d\udcb8 \u05de\u05de\u05ea\u05d9\u05df \u05dc\u05ea\u05e9\u05dc\u05d5\u05dd",\n            "is_active": "Y"\n        },\n        {\n            "id": "233475749821729184882929118534943012737",\n            "name": "\u2705 \u05e4\u05e2\u05d9\u05dc",\n            "is_active": "Y"\n        },\n        {\n            "id": "233475749821731602734568347793292425089",\n            "name": "\u2757\ufe0f\u05dc\u05d0 \u05e4\u05e2\u05d9\u05dc",\n            "is_active": "Y"\n        }\n    ],\n    "hasMore": false,\n    "limit": 25,\n    "offset": 0,\n    "count": 3,\n    "links": [\n        {\n            "rel": "self",\n            "href": "https://...."\n        },\n        {\n            "rel": "describedby",\n            "href": "https://...."\n        },\n        {\n            "rel": "first",\n            "href": "https://...."\n        }\n    ]\n}\n'))))}d.isMDXComponent=!0}}]);