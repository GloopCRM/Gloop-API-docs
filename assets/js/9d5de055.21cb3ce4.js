"use strict";(self.webpackChunkthebase_docs=self.webpackChunkthebase_docs||[]).push([[6158],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),m=c(n),u=a,k=m["".concat(l,".").concat(u)]||m[u]||s[u]||i;return n?r.createElement(k,o(o({ref:e},d),{},{components:n})):r.createElement(k,o({ref:e},d))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7082:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],p={sidebar_position:1},l="\u05d9\u05e6\u05d9\u05e8\u05ea \u05de\u05d5\u05e6\u05e8 \u05d7\u05d3\u05e9",c={unversionedId:"api/products/create-product",id:"api/products/create-product",isDocsHomePage:!1,title:"\u05d9\u05e6\u05d9\u05e8\u05ea \u05de\u05d5\u05e6\u05e8 \u05d7\u05d3\u05e9",description:"\u05d1\u05d9\u05df \u05d0\u05dd \u05d0\u05ea\u05d4 \u05de\u05d5\u05db\u05e8 \u05de\u05d5\u05e6\u05e8\u05d9\u05dd \u05e4\u05d9\u05d6\u05d9\u05d9\u05dd \u05d0\u05d5 \u05e9\u05d9\u05e8\u05d5\u05ea\u05d9\u05dd \u05d3\u05d9\u05d2\u05d9\u05d8\u05dc\u05d9\u05d9\u05dd \u05d0\u05ea\u05d4 \u05e0\u05d3\u05e8\u05e9 \u05dc\u05e2\u05d1\u05d5\u05d3 \u05e2\u05dd \u05de\u05d5\u05e6\u05e8\u05d9\u05dd.",source:"@site/docs/api/products/create-product.md",sourceDirName:"api/products",slug:"/api/products/create-product",permalink:"/thebase/docs/api/products/create-product",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/products/create-product.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"\u05e7\u05d8\u05d2\u05d5\u05e8\u05d9\u05d5\u05ea \u05de\u05d5\u05e6\u05e8\u05d9\u05dd",permalink:"/thebase/docs/api/products/categories/create-category"},next:{title:"\u05e4\u05e8\u05d8\u05d9 \u05de\u05d5\u05e6\u05e8",permalink:"/thebase/docs/api/products/product-details"}},d=[{value:"\u05dc\u05de\u05d4 \u05d0\u05e0\u05d9 \u05e6\u05e8\u05d9\u05da \u05dc\u05e9\u05d9\u05dd \u05dc\u05d1?",id:"\u05dc\u05de\u05d4-\u05d0\u05e0\u05d9-\u05e6\u05e8\u05d9\u05da-\u05dc\u05e9\u05d9\u05dd-\u05dc\u05d1",children:[]},{value:"Create Product",id:"create-product",children:[]}],s={toc:d};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u05d9\u05e6\u05d9\u05e8\u05ea-\u05de\u05d5\u05e6\u05e8-\u05d7\u05d3\u05e9"},"\u05d9\u05e6\u05d9\u05e8\u05ea \u05de\u05d5\u05e6\u05e8 \u05d7\u05d3\u05e9"),(0,i.kt)("p",null,"\u05d1\u05d9\u05df \u05d0\u05dd \u05d0\u05ea\u05d4 \u05de\u05d5\u05db\u05e8 \u05de\u05d5\u05e6\u05e8\u05d9\u05dd \u05e4\u05d9\u05d6\u05d9\u05d9\u05dd \u05d0\u05d5 \u05e9\u05d9\u05e8\u05d5\u05ea\u05d9\u05dd \u05d3\u05d9\u05d2\u05d9\u05d8\u05dc\u05d9\u05d9\u05dd \u05d0\u05ea\u05d4 \u05e0\u05d3\u05e8\u05e9 \u05dc\u05e2\u05d1\u05d5\u05d3 \u05e2\u05dd \u05de\u05d5\u05e6\u05e8\u05d9\u05dd.",(0,i.kt)("br",{parentName:"p"}),"\n","\u05de\u05d5\u05e6\u05e8\u05d9\u05dd \u05d4\u05dd \u05d7\u05dc\u05e7 ",(0,i.kt)("a",{parentName:"p",href:"../sales/create-sale"},"\u05de\u05de\u05db\u05d9\u05e8\u05d5\u05ea")," \u05d5\u05db\u05dc \u05d0\u05d7\u05ea \u05de\u05db\u05d9\u05dc\u05d4 \u05de\u05d5\u05e6\u05e8\u05d9\u05dd \u05d5\u05de\u05d7\u05d9\u05e8\u05d9\u05dd."),(0,i.kt)("p",null,"\u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05d4\u05de\u05d5\u05d3\u05d5\u05dc, \u05e0\u05d9\u05ea\u05df \u05dc\u05d9\u05d9\u05e6\u05e8 \u05de\u05d5\u05e6\u05e8 \u05d7\u05d3\u05e9 \u05d1\u05de\u05e2\u05e8\u05db\u05ea \u05d5\u05dc\u05e9\u05d9\u05d9\u05da \u05d0\u05dc\u05d9\u05d5 ",(0,i.kt)("a",{parentName:"p",href:"../products/categories/create-category"},"\u05e7\u05d8\u05d2\u05d5\u05e8\u05d9\u05d4"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u05d9\u05e9 \u05dc\u05da \u05d7\u05e0\u05d5\u05ea \u05d0\u05d9\u05e7\u05d5\u05de\u05e8\u05e1?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u05d1\u05d9\u05df \u05d0\u05dd \u05d6\u05d4 \u05d1\u05d5\u05d5\u05d9\u05e7\u05e1, \u05d5\u05d5\u05e7\u05d5\u05de\u05e8\u05e1 \u05d0\u05d5 \u05e9\u05d5\u05e4\u05d9\u05e4\u05d9\u05d9 \u05d0\u05ea\u05d4 \u05dc\u05d0 \u05e0\u05d3\u05e8\u05e9 \u05dc\u05d4\u05d2\u05d3\u05e8\u05e9 \u05de\u05d9\u05d5\u05d7\u05d3\u05ea.",(0,i.kt)("br",{parentName:"p"}),"\n","\u05d0\u05dd \u05d4\u05de\u05e2\u05e8\u05db\u05ea \u05e9\u05dc\u05da \u05db\u05d1\u05e8 \u05de\u05ea\u05de\u05de\u05e9\u05e7\u05ea \u05d0\u05dc\u05d9\u05d4\u05dd \u05d4\u05de\u05d5\u05e6\u05e8 \u05d9\u05e1\u05ea\u05e0\u05db\u05e8\u05df \u05d1\u05e6\u05d5\u05e8\u05d4 \u05d0\u05d5\u05d8\u05d5\u05de\u05d8\u05d9\u05ea."))),(0,i.kt)("h3",{id:"\u05dc\u05de\u05d4-\u05d0\u05e0\u05d9-\u05e6\u05e8\u05d9\u05da-\u05dc\u05e9\u05d9\u05dd-\u05dc\u05d1"},"\u05dc\u05de\u05d4 \u05d0\u05e0\u05d9 \u05e6\u05e8\u05d9\u05da \u05dc\u05e9\u05d9\u05dd \u05dc\u05d1?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"sku")," \u05d4\u05d5\u05d0 \u05de\u05e7\u05f4\u05d8 \u05e4\u05e0\u05d9\u05de\u05d9 \u05d1\u05de\u05d9\u05d3\u05d4 \u05d5\u05d0\u05ea\u05d4 \u05de\u05e0\u05d4\u05dc \u05d0\u05d7\u05d3 \u05db\u05d6\u05d4."),(0,i.kt)("li",{parentName:"ol"},"\u05d0\u05dd \u05d9\u05e9 \u05de\u05dc\u05d0\u05d9 \u05e8\u05d0\u05e9\u05d5\u05e0\u05d9 \u05e9\u05ea\u05e8\u05e6\u05d4 \u05dc\u05d4\u05d2\u05d3\u05d9\u05e8, \u05ea\u05d5\u05db\u05dc \u05dc\u05d4\u05d6\u05d9\u05df \u05d0\u05d5\u05ea\u05d5 \u05ea\u05d7\u05ea ",(0,i.kt)("inlineCode",{parentName:"li"},"invetory")," - \u05d1\u05de\u05d9\u05d3\u05d4 \u05d5\u05d1\u05e8\u05e6\u05d5\u05e0\u05da \u05dc\u05e2\u05d3\u05db\u05df \u05de\u05dc\u05d0\u05d9 \u05d4\u05e9\u05ea\u05de\u05e9 ",(0,i.kt)("a",{parentName:"li",href:"../products/inventory/inventory-movement"},"\u05d1\u05ea\u05e0\u05d5\u05e2\u05d5\u05ea \u05de\u05dc\u05d0\u05d9")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u05d7\u05d5\u05d1\u05d4")," \u05dc\u05e6\u05d9\u05d9\u05df \u05d0\u05ea \u05de\u05e1\u05e4\u05e8 \u05d4\u05e7\u05d8\u05d2\u05d5\u05e8\u05d9\u05d4.")),(0,i.kt)("div",{class:"api-docs api-sec"},(0,i.kt)("h2",{id:"create-product"},"Create Product"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Endpoint:"),(0,i.kt)("br",{parentName:"p"}),"\n","Method: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"POST"))),(0,i.kt)("div",{class:"end-point"},(0,i.kt)("code",null,"POST: https://{{domain}}/v2/products/create")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Authorization: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"OAuth 2.0")),(0,i.kt)("br",{parentName:"p"}),"\n","Headers: ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer {{token}}")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Body: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Content-Type: application/json"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Attributes \ud83e\udd16"),(0,i.kt)("div",{class:"api-att"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Note"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u05e9\u05dd \u05d4\u05de\u05d5\u05e6\u05e8")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"price"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null},"desctiption"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null},"sku"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u05de\u05e1\u05e4\u05e8 \u05e7\u05d8\u05dc\u05d5\u05d2\u05d9")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null},"invetory"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u05de\u05dc\u05d0\u05d9")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null},"is_physical"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u05d4\u05d0\u05dd \u05d4\u05de\u05d5\u05e6\u05e8 \u05e4\u05d9\u05d6\u05d9")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"is_active"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u05d4\u05d0\u05dd \u05d4\u05de\u05d5\u05e6\u05e8 \u05e4\u05e2\u05d9\u05dc")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"category"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u05de\u05d6\u05d4\u05d4 \u05e7\u05d8\u05d2\u05d5\u05e8\u05d9\u05d4")))))),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",201:!0,className:"language-json",metastring:'title="Request - Status Code: 201 Created"',title:'"Request',"-":!0,Status:!0,"Code:":!0,'Created"':!0},'{\n    "name": "Tv",\n    "price": 505,\n    "desctiption": "sams tv",\n    "sku": "",\n    "invetory": 4,\n    "is_physical": true,\n    "is_active": true,\n    "category": "271931386971455797394479962881631377483"\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response"',title:'"Response"'},'{\n    "id": "271931293467543909784429886793843358217",\n    "message": "\u05d4\u05de\u05d5\u05e6\u05e8 \u05e0\u05d5\u05e6\u05e8 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4"\n}\n'))))}m.isMDXComponent=!0}}]);