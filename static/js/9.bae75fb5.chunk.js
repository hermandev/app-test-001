(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[9],{872:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(o){a=!0,c=o}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},873:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"d",(function(){return b})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return h})),n.d(t,"e",(function(){return p}));var r=n(49),a=n.n(r),c=n(77),s=n(78),i=n.n(s),o=n(56),u=n(63),l=n.n(u),d=n(21),j=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("".concat(d.a,"/pegawai"));case 3:n=e.sent,t({type:d.g,data:n.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("".concat(d.a,"/pegawai"),e);case 3:"Created"===(r=t.sent).data.status&&Object(o.c)("success","Data pegawai berhasil disimpan"),"Error"===r.data.status&&Object(o.c)("error",r.data.data),n(j()),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.delete("".concat(d.a,"/pegawai/").concat(e));case 3:"Deleted"===t.sent.data.status&&(l.a.fire("Deleted!","Pegawai berhasil di hapus.","success"),n(j())),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),Object(o.b)("Ada masalah pada server, silahkan hubungi admin");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},h=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.a.put("".concat(d.a,"/pegawai/reset"),{id:e,nidn:t});case 3:"Updated"===n.sent.data.status&&(l.a.fire("Reset Password!","Password berhasil direset.!","success"),r(j())),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),Object(o.b)("Ada masalah pada server, silahkan hubungi admin");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.put("".concat(d.a,"/pegawai"),e);case 3:"Updated"===t.sent.data.status&&(l.a.fire("Update!","berhasil update.!","success"),n(j())),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),Object(o.b)("Ada masalah pada server, silahkan hubungi admin");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},979:function(e,t,n){"use strict";n.r(t);var r=n(872),a=n(1),c=n(871),s=n(62),i=n(151),o=n(880),u=(n(873),n(56)),l=n(19),d=function(e){var t=e.modal,n=e.setModal,o=Object(s.b)(),d=Object(a.useState)(""),j=Object(r.a)(d,2),b=j[0],f=j[1],h=Object(a.useState)(""),p=Object(r.a)(h,2),O=p[0],m=p[1],x=function(){""===b&&Object(u.a)("Username masih kosong"),""===O&&Object(u.a)("Password masih kosong"),""!==b&&""!==O&&(o(Object(i.c)(b,O)),n(!1),f(""),m(""))};return Object(l.jsxs)(c.I,{show:t,onClose:n,children:[Object(l.jsx)(c.L,{closeButton:!0,children:Object(l.jsx)(c.M,{children:"Tambah User"})}),Object(l.jsxs)(c.J,{children:[Object(l.jsx)(c.O,{children:Object(l.jsx)(c.j,{xs:"12",children:Object(l.jsxs)(c.u,{children:[Object(l.jsx)(c.E,{htmlFor:"username",children:"username"}),Object(l.jsx)(c.z,{id:"username",placeholder:"Username",value:b,onChange:function(e){return f(e.target.value)}})]})})}),Object(l.jsx)(c.O,{children:Object(l.jsx)(c.j,{xs:"12",children:Object(l.jsxs)(c.u,{children:[Object(l.jsx)(c.E,{htmlFor:"password",children:"Password"}),Object(l.jsx)(c.z,{id:"password",type:"password",placeholder:"password",value:O,onChange:function(e){return m(e.target.value)}})]})})})]}),Object(l.jsxs)(c.K,{children:[Object(l.jsx)(c.e,{color:"success",onClick:function(){return x()},children:"Tambah"}),Object(l.jsx)(c.e,{color:"secondary",onClick:function(){return n(!1)},children:"Batal"})]})]})},j=n(63),b=n.n(j);t.default=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.users.data})),n=Object(s.c)((function(e){return e.users.currentUser})),u=Object(a.useState)(!1),j=Object(r.a)(u,2),f=j[0],h=j[1];return Object(a.useEffect)((function(){e(Object(i.e)())}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(c.f,{children:[Object(l.jsx)(c.i,{children:Object(l.jsxs)(c.O,{children:[Object(l.jsx)(c.j,{sm:"5",children:Object(l.jsx)("h4",{id:"traffic",className:"card-title mb-0",children:"Akun"})}),Object(l.jsx)(c.j,{sm:"7",className:"d-none d-md-block",children:Object(l.jsx)(c.e,{color:"primary",className:"float-right",onClick:function(){return h(!f)},children:"Tambah"})})]})}),Object(l.jsx)(c.g,{children:Object(l.jsx)(c.m,{items:t,fields:[{key:"no",label:"NO",_style:{width:"100px"}},{key:"username",label:"USERNAME"},{key:"aksi",label:"AKSI",_style:{width:"200px",textAlign:"center"}}],itemsPerPageSelect:!0,itemsPerPage:5,hover:!0,pagination:!0,scopedSlots:{no:function(e,t){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("td",{children:t+1})})},aksi:function(t){return Object(l.jsx)(l.Fragment,{children:n.id===t.id?Object(l.jsx)("td",{style:{textAlign:"center"},children:Object(l.jsx)(c.a,{color:"success",children:"Sedang login"})}):Object(l.jsxs)("td",{style:{textAlign:"center"},children:[Object(l.jsx)(c.e,{size:"sm",color:"warning",style:{marginRight:10},onClick:function(){return function(t){b.a.fire({title:"yakin ingin mereset password user ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes"}).then((function(n){n.isConfirmed&&e(Object(i.f)(t.id,t.username))}))}(t)},children:Object(l.jsx)(o.i,{})}),Object(l.jsx)(c.e,{size:"sm",color:"danger",onClick:function(){return function(t){b.a.fire({title:"yakin ingin menghapus user ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes"}).then((function(n){n.isConfirmed&&e(Object(i.d)(t.id))}))}(t)},children:Object(l.jsx)(o.j,{})})]})})}}})})]}),Object(l.jsx)(d,{modal:f,setModal:h})]})}}}]);