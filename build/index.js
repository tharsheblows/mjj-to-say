(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{6:function(t,e,r){}}]),function(t){function e(e){for(var n,i,u=e[0],c=e[1],l=e[2],f=0,p=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(s&&s(e);p.length;)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={0:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var s=c;a.push([7,1]),r()}([function(t,e){!function(){t.exports=this.React}()},function(t){t.exports=JSON.parse('{"name":"mjj-why/just-to-say","category":"widgets","attributes":{"lib":{"type":"string"},"attribution":{"type":"string"},"blockId":{"type":"string"}},"supports":{"align":["wide","full"],"anchor":true}}')},function(t,e){!function(){t.exports=this.wp.i18n}()},function(t,e){!function(){t.exports=this.wp.components}()},function(t,e){!function(){t.exports=this.wp.blocks}()},function(t,e,r){},,function(t,e,r){"use strict";r.r(e);var n={};r.r(n),r.d(n,"name",(function(){return w})),r.d(n,"category",(function(){return O})),r.d(n,"settings",(function(){return x}));var o=r(4),a=r(2),i=r(1),u=r(0),c=r.n(u),l=r(3);function s(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var p=/{{(.*?)}}/g,d=function(t){var e=b(t),r=t,n=t,o=[];return n=n.replace(/\n/g,"<br>"),e.forEach((function(t){var e=t[0],a=t[1].split(","),i=a.length>=1?a[0].trim():"please enter a default word and description",u=a.length>=2?a[1].trim():"please enter a description";n=n.replace(e,i),r=r.replace(e,"<span class='mjj-libs-default-word'>".concat(i,'</span> <span class="mjj-libs-description">(').concat(u,")</span>")),o.push({description:u})})),{defaultLibHtml:r,defaultLibText:n,inputFields:o}},b=function(t){return s(t.matchAll(p))};var y=function(t){var e=t.inputFields,r=t.divId,n=1,o={__html:(e.length>0?e.map((function(t){var e="input-".concat(n++);return'<div className="lib-inputs"><label for="'.concat(e,'">').concat(t.description,'</label> <input type="text" name="').concat(e,"-").concat(r,'" id="').concat(e,"-").concat(r,'" /></div>')}),[]):["no fields yet"]).join("")};return c.a.createElement("div",{className:"mjj-just-to-say-inputs",dangerouslySetInnerHTML:o})};var m=function(t){return c.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.text}})};var h=function(t){return c.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.text}})};function v(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return j(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var g=function(t){var e=t.attributes,r=t.setAttributes,n=t.isSelected,o=(t.className,t.clientId),a=e.lib||"",i=d(a),s=v(Object(u.useState)(a),2),f=s[0],p=s[1],b=v(Object(u.useState)(i.defaultLibText),2),j=b[0],g=b[1],w=v(Object(u.useState)(i.defaultLibHtml),2),O=w[0],S=w[1],E=v(Object(u.useState)(i.inputFields),2),x=E[0],k=E[1],_=v(Object(u.useState)("inputs"),2),P=_[0],A=_[1],I=v(Object(u.useState)(""),2),L=I[0],T=I[1],C=v(Object(u.useState)(e.attribution),2),M=C[0],N=C[1],F="string"==typeof e.blockId?e.blockId:o;return r({blockId:F}),Object(u.useEffect)((function(){switch(P){case"defaultLib":T(c.a.createElement(h,{text:j}));break;case"htmlLib":T(c.a.createElement(m,{text:O}));break;case"inputs":T(c.a.createElement(y,{inputFields:x,divId:F}));break;default:T("inputs")}}),[P,j,O,x]),c.a.createElement("div",{class:"mjj-jts-edit"},c.a.createElement("div",{class:"rendered"},L),!n&&c.a.createElement("div",{className:"attribution"},M),n&&c.a.createElement("div",{className:"mjj-jts-enter"},c.a.createElement("button",{onClick:function(){return A("defaultLib")}},"Show default lib"),c.a.createElement("button",{onClick:function(){return A("htmlLib")}},"Show lib with descriptions"),c.a.createElement("button",{onClick:function(){return A("inputs")}},"Show front end inputs"),c.a.createElement("div",{className:"textareas"},c.a.createElement(l.TextareaControl,{rows:"17",label:"Enter the content template here.",help:"For words which should be replaced, use the default word first, then a description of the type of word the user should enter to replace it. Eg {{plums, noun}} or {{plums, thing you might eat}}",value:f,onChange:function(t){return function(t){p(t);var e=d(t);g(e.defaultLibText),S(e.defaultLibHtml),k(e.inputFields),r({lib:t})}(t)}})),c.a.createElement("div",{className:"textareas"},c.a.createElement(l.TextareaControl,{label:"Attribution (this is a textarea because you need a good attribution)",help:"Please provide a correct attribution to the author of the original piece if you didn't make it up yourself.",value:M,onChange:function(t){return function(t){N(t),r({attribution:t})}(t)}}))))},w=(r(5),r(6),i.name),O=i.category,S=i.attributes,E=i.supports;console.log("jts");var x={title:Object(a.__)("Just to say","just-to-say"),description:Object(a.__)("Guided user generated poetry.","just-to-say"),icon:"editor-kitchensink",keywords:[Object(a.__)("poetry","just-to-say")],attributes:S,supports:E,edit:g,save:function(){return null}};function k(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function _(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}[n].forEach((function(t){var e=t.name,r=t.category,n=t.settings;Object(o.registerBlockType)("".concat(e),function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?k(Object(r),!0).forEach((function(e){_(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({category:r},n))}))}]);