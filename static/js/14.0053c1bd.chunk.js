(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[14],{872:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,c=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(s){c=!0,a=s}finally{try{n||null==l.return||l.return()}finally{if(c)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return c}))},973:function(e,t,r){"use strict";r.r(t);var n=r(872),c=r(1),a=r(871),i=r(879),l=r(62),s=r(151),o=r(19);t.default=function(){var e=Object(l.b)(),t=Object(c.useState)(""),r=Object(n.a)(t,2),u=r[0],j=r[1],b=Object(c.useState)(""),d=Object(n.a)(b,2),h=d[0],f=d[1];return Object(o.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center",children:Object(o.jsx)(a.k,{children:Object(o.jsx)(a.O,{className:"justify-content-center",children:Object(o.jsx)(a.j,{md:"4",children:Object(o.jsx)(a.h,{children:Object(o.jsx)(a.f,{className:"p-4",children:Object(o.jsx)(a.g,{children:Object(o.jsxs)(a.t,{children:[Object(o.jsx)("h1",{style:{textAlign:"center"},children:"Login Admin"}),Object(o.jsxs)(a.A,{className:"mb-3",children:[Object(o.jsx)(a.B,{children:Object(o.jsx)(a.C,{children:Object(o.jsx)(i.a,{name:"cil-user"})})}),Object(o.jsx)(a.z,{type:"text",placeholder:"Username",autoComplete:"username",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(o.jsxs)(a.A,{className:"mb-4",children:[Object(o.jsx)(a.B,{children:Object(o.jsx)(a.C,{children:Object(o.jsx)(i.a,{name:"cil-lock-locked"})})}),Object(o.jsx)(a.z,{type:"password",placeholder:"Password",autoComplete:"current-password",value:h,onChange:function(e){return f(e.target.value)}})]}),Object(o.jsx)(a.O,{children:Object(o.jsx)(a.j,{style:{textAlign:"center"},children:Object(o.jsx)(a.e,{color:"primary",className:"px-4",onClick:function(){e(Object(s.a)(u,h))},children:"Login"})})})]})})})})})})})})}}}]);