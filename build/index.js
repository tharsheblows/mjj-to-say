(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{18:function(t,e,n){}}]),function(t){function e(e){for(var r,a,c=e[0],u=e[1],s=e[2],f=0,p=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(l&&l(e);p.length;)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={0:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=u;i.push([19,1]),n()}([function(t,e){!function(){t.exports=this.wp.element}()},function(t,e){!function(){t.exports=this.React}()},function(t,e,n){var r=n(11),o=n(12),i=n(6),a=n(13);t.exports=function(t,e){return r(t)||o(t,e)||i(t,e)||a()}},function(t){t.exports=JSON.parse('{"name":"mjj-why/just-to-say","category":"widgets","attributes":{"lib":{"type":"string"},"attribution":{"type":"string"},"blockId":{"type":"string"}},"supports":{"align":["wide","full"],"anchor":true}}')},function(t,e){!function(){t.exports=this.wp.i18n}()},function(t,e){!function(){t.exports=this.wp.components}()},function(t,e,n){var r=n(7);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e){!function(){t.exports=this.wp.blocks}()},function(t,e,n){var r=n(14),o=n(15),i=n(6),a=n(16);t.exports=function(t){return r(t)||o(t)||i(t)||a()}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,n){var r=n(7);t.exports=function(t){if(Array.isArray(t))return r(t)}},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"name",(function(){return x})),n.d(r,"category",(function(){return S})),n.d(r,"settings",(function(){return _}));var o=n(8),i=n.n(o),a=n(9),c=n(4),u=n(3),s=n(2),l=n.n(s),f=n(0),p=n(1),b=n(5),d=n(10),y=n.n(d),m=/{{(.*?)}}/g,j=function(t){var e=h(t),n=t,r=t,o=[];return r=r.replace(/\n/g,"<br>"),e.forEach((function(t){var e=t[0],i=t[1].split(","),a=i.length>=1?i[0].trim():"please enter a default word and description",c=i.length>=2?i[1].trim():"please enter a description";r=r.replace(e,a),n=n.replace(e,"<span class='mjj-libs-default-word'>".concat(a,'</span> <span class="mjj-libs-description">(').concat(c,")</span>")),o.push({description:c})})),{defaultLibHtml:n,defaultLibText:r,inputFields:o}},h=function(t){return y()(t.matchAll(m))};var v=function(t){var e=t.inputFields,n=1,r={__html:(e.length>0?e.map((function(t){var e="input-".concat(n++);return'<div className="lib-inputs"><label for="'.concat(e,'">').concat(t.description,'</label> <input type="text" name="').concat(e,'" id="').concat(e,'" /></div>')}),[]):["no fields yet"]).join("")};return Object(f.createElement)("div",{className:"mjj-just-to-say-inputs",dangerouslySetInnerHTML:r})};var O=function(t){return Object(f.createElement)("div",{dangerouslySetInnerHTML:{__html:t.text}})};var g=function(t){return Object(f.createElement)("div",{dangerouslySetInnerHTML:{__html:t.text}})};var w=function(t){var e=t.attributes,n=t.setAttributes,r=t.isSelected,o=(t.className,t.clientId),i=e.lib||"",a=j(i),c=Object(p.useState)(i),u=l()(c,2),s=u[0],d=u[1],y=Object(p.useState)(a.defaultLibText),m=l()(y,2),h=m[0],w=m[1],x=Object(p.useState)(a.defaultLibHtml),S=l()(x,2),E=S[0],k=S[1],_=Object(p.useState)(a.inputFields),P=l()(_,2),I=P[0],L=P[1],T=Object(p.useState)("inputs"),A=l()(T,2),C=A[0],M=A[1],N=Object(p.useState)(""),F=l()(N,2),H=F[0],J=F[1],D=Object(p.useState)(e.attribution),B=l()(D,2),G=B[0],R=B[1],U="string"==typeof e.blockId?e.blockId:o;return n({blockId:U}),Object(p.useEffect)((function(){switch(C){case"defaultLib":J(Object(f.createElement)(g,{text:h}));break;case"htmlLib":J(Object(f.createElement)(O,{text:E}));break;case"inputs":J(Object(f.createElement)(v,{inputFields:I}));break;default:J("inputs")}}),[C,h,E,I]),Object(f.createElement)("div",{class:"mjj-jts-edit"},Object(f.createElement)("div",{class:"rendered"},H),!r&&Object(f.createElement)("div",{className:"attribution"},G),r&&Object(f.createElement)("div",{className:"mjj-jts-enter"},Object(f.createElement)("button",{onClick:function(){return M("defaultLib")}},"Show default lib"),Object(f.createElement)("button",{onClick:function(){return M("htmlLib")}},"Show lib with descriptions"),Object(f.createElement)("button",{onClick:function(){return M("inputs")}},"Show front end inputs"),Object(f.createElement)("div",{className:"textareas"},Object(f.createElement)(b.TextareaControl,{rows:"17",label:"Enter the content template here.",help:"For words which should be replaced, use the default word first, then a description of the type of word the user should enter to replace it. Eg {{plums, noun}} or {{plums, thing you might eat}}",value:s,onChange:function(t){return function(t){d(t);var e=j(t);w(e.defaultLibText),k(e.defaultLibHtml),L(e.inputFields),n({lib:t})}(t)}})),Object(f.createElement)("div",{className:"textareas"},Object(f.createElement)(b.TextareaControl,{label:"Attribution (this is a textarea because you need a good attribution)",help:"Please provide a correct attribution to the author of the original piece if you didn't make it up yourself.",value:G,onChange:function(t){return function(t){R(t),n({attribution:t})}(t)}}))))},x=(n(17),n(18),u.name),S=u.category,E=u.attributes,k=u.supports;console.log("jts");var _={title:Object(c.__)("Just to say","just-to-say"),description:Object(c.__)("Guided user generated poetry.","just-to-say"),icon:"editor-kitchensink",keywords:[Object(c.__)("poetry","just-to-say")],attributes:E,supports:k,edit:w,save:function(){return null}};function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}[r].forEach((function(t){var e=t.name,n=t.category,r=t.settings;Object(a.registerBlockType)("".concat(e),function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({category:n},r))}))}]);