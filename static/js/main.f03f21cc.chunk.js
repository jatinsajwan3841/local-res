(this["webpackJsonplive-result"]=this["webpackJsonplive-result"]||[]).push([[0],{87:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),s=(a(87),a(20)),i=a.n(s),l=a(24),u=a(17),d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e){if("serviceWorker"in navigator){if(new URL("/local-res",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/local-res","/service-worker.js");d?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("update available, waiting for refresh")}))):f(t,e)}))}}function f(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var j=a(65),p=a(34),h=a(14);function g(){return new Worker(a.p+"static/js/index.worker.9582ec3f.worker.js")}var m=a(147),v=a(157),x=a(148),O=a(162),w=a(142),k=a(145),y=a(5),E=Object(w.a)((function(e){return{root:{width:"100%",position:"fixed"}}}));function C(){var e=E();return Object(y.jsx)("div",{className:e.root,children:Object(y.jsx)(k.a,{color:"secondary"})})}var S=a(160),T=a(159),M=a(161),I=a(156),N=a(69),D=a.n(N),W=[{value:"Choose",label:"Choose"},{value:"C S",label:"CSE"},{value:"EC",label:"ECE"},{value:"EE",label:"EE"},{value:"CE",label:"CE"},{value:"ME",label:"ME"},{value:"BT",label:"BT"}],B=["dat/B. TECH. I SEM DEC 18.xlsx","dat/B. TECH. II SEM JUNE 2019.xlsx","dat/B. TECH. III SEM DECEMBER 2019.xlsx","dat/B. TECH. IV SEM DECEMBER 2020.xlsx","dat/B. TECH. V SEM (Except ME) DECEMBER 2020 .xlsx","dat/B. TECH. VI SEM JUNE 2021 (COVID 19 ).xlsx"],R=a(150),H=a(154),P=a(153),L=a(149),z=a(151),U=a(152),A=a(67),J=a.n(A),F=a(55),V=a.n(F),q=a(68),Z=a.n(q),$=a(46);$.a.register.apply($.a,Object(h.a)($.b));var G=function(e){var t=e.data,a=e.darkMode,n=r.a.createRef(),c=r.a.useRef();return r.a.useEffect((function(){if(void 0!==c.current){var e=c.current.options;a?(e.plugins.legend.labels.color="rgba(255, 255, 255, 0.8)",e.scales.x.ticks.color="rgba(255, 255, 255, 0.8)",e.scales.y.ticks.color="rgba(255, 255, 255, 0.8)",e.scales.x.grid.color="rgba(255, 255, 255, 0.2)",e.scales.y.grid.color="rgba(255, 255, 255, 0.2)",c.current.update()):(e.plugins.legend.labels.color="rgba(0, 0, 0, 0.8)",e.scales.x.ticks.color="rgba(0, 0, 0, 0.8)",e.scales.y.ticks.color="rgba(0, 0, 0, 0.8)",e.scales.x.grid.color="rgba(0, 0, 0, 0.2)",e.scales.y.grid.color="rgba(0, 0, 0, 0.2)",c.current.update())}}),[a]),r.a.useEffect((function(){if(void 0!==c.current){var e=t.map((function(e){return e.sem})),a=t.map((function(e){return e.percentage}));e.pop(),a.pop();var n=Object(h.a)(Array(t.length)).fill(t[t.length-1].percentage);c.current.data.labels=e,c.current.data.datasets[0].data=a,c.current.data.datasets[1].data=n,c.current.update()}}),[t]),r.a.useEffect((function(){var e=t.map((function(e){return e.sem})),r=t.map((function(e){return e.percentage}));e.pop(),r.pop();var o=Object(h.a)(Array(t.length)).fill(t[t.length-1].percentage);c.current=new $.a(n.current.getContext("2d"),{type:"line",data:{labels:e,datasets:[{label:"% in each sem",data:r,backgroundColor:["rgba(255, 99, 132, 0.3)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],fill:{target:"origin"},borderWidth:2,cubicInterpolationMode:"default",tension:.3},{label:"Total %",data:o,backgroundColor:["rgba(54, 162, 235, 0.3)"],borderColor:["rgba(54, 162, 235, 1)"],borderWidth:2}]},options:{plugins:{legend:{display:!0,labels:{color:a?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"}}},scales:{x:{ticks:{color:a?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"},grid:{color:a?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.2)"}},y:{min:0,beginAtZero:!0,ticks:{color:a?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"},grid:{color:a?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.2)"}}}}})}),[]),Object(y.jsx)("div",{style:{marginTop:"35px"},children:Object(y.jsx)("canvas",{ref:n})})},K=function(e){var t=e.name,a=e.data,n=e.load,r=e.reset,c=e.darkMode,o=e.savedLoad,s=e.handleFav,i=e.favDel;return Object(y.jsxs)(m.a,{maxWidth:"md",children:[Object(y.jsx)(x.a,{variant:"contained",color:"primary",style:{marginTop:6},startIcon:Object(y.jsx)(J.a,{}),onClick:r,size:"small",children:"Home"}),"No"===o?Object(y.jsx)(x.a,{variant:"contained",color:"secondary",style:{marginTop:6,marginLeft:6},startIcon:Object(y.jsx)(V.a,{}),onClick:s,disabled:n,size:"small",children:"Save"}):Object(y.jsx)(x.a,{variant:"contained",color:"secondary",style:{marginTop:6,marginLeft:6},startIcon:Object(y.jsx)(Z.a,{}),onClick:function(){return i(o)},disabled:n,size:"small",children:"Del"}),Object(y.jsxs)("h2",{style:{marginTop:6},children:[" Hello ",t]}),Object(y.jsx)(L.a,{component:m.a,children:Object(y.jsxs)(R.a,{size:"small",children:[Object(y.jsx)(z.a,{children:Object(y.jsxs)(U.a,{children:[Object(y.jsx)(P.a,{align:"center",children:Object(y.jsx)("b",{children:"Sem"})}),Object(y.jsx)(P.a,{align:"center",children:Object(y.jsx)("b",{children:"Marks"})}),Object(y.jsx)(P.a,{align:"center",children:Object(y.jsx)("b",{children:"Percentage"})})]})}),Object(y.jsx)(H.a,{children:a.map((function(e,t){return Object(y.jsxs)(U.a,{children:[Object(y.jsx)(P.a,{component:"th",scope:"row",align:"center",children:e.sem}),Object(y.jsx)(P.a,{align:"center",children:e.marks}),Object(y.jsxs)(P.a,{align:"center",children:[e.percentage,"%"]})]},t)}))})]})}),Object(y.jsx)(G,{data:a,darkMode:c})]})},Q=a(164),X=a(163),Y=function(e){var t=e.saved,a=e.favShow,n=e.favDel;return Object(y.jsxs)("div",{children:[Object(y.jsx)(X.a,{avatar:Object(y.jsx)(V.a,{}),label:"Saved :"}),Object(y.jsx)("ul",{children:0==t.length?"None, try saving for faster visits! \u2570(*\xb0\u25bd\xb0*)\u256f":t.map((function(e,t){return Object(y.jsx)("li",{children:Object(y.jsx)(X.a,{avatar:Object(y.jsx)(Q.a,{children:e.name[0]}),label:e.name,variant:"outlined",style:{marginBottom:8},onClick:function(){return a(t)},onDelete:function(){return n(t)}})},t)}))})]})},_=function(e,t){var a=r.a.useState((function(){var a=window.localStorage.getItem(t);return null!==a?JSON.parse(a):e})),n=Object(u.a)(a,2),c=n[0],o=n[1];return r.a.useEffect((function(){window.localStorage.setItem(t,JSON.stringify(c))}),[t,c]),[c,o]},ee=a(71),te=a(155),ae=Object(w.a)((function(e){return{beg:{marginTop:e.spacing(8),paddingTop:e.spacing(2)},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3)}}})),ne=function(e){var t=e.darkMode,a=e.setDarkMode,n=e.update,c=r.a.useState([]),o=Object(u.a)(c,2),s=o[0],d=o[1],b=r.a.useState(!0),f=Object(u.a)(b,2),j=f[0],w=f[1],k=r.a.useState(!1),E=Object(u.a)(k,2),N=E[0],R=E[1],H=r.a.useState("Choose"),P=Object(u.a)(H,2),L=P[0],z=P[1],U=r.a.useState(""),A=Object(u.a)(U,2),J=A[0],F=A[1],V=r.a.useState(!1),q=Object(u.a)(V,2),Z=q[0],$=q[1],G=r.a.useState(!1),Q=Object(u.a)(G,2),X=Q[0],ne=Q[1],re=_([],"favourite"),ce=Object(u.a)(re,2),oe=ce[0],se=ce[1],ie=r.a.useState("No"),le=Object(u.a)(ie,2),ue=le[0],de=le[1],be=r.a.useRef([]),fe=r.a.useRef(null),je=r.a.useRef(new Promise((function(e){return fe.current=e}))),pe=r.a.useRef(["","Choose"]),he=ae(),ge=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,r,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t.preventDefault(),de("No"),e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),de(a=t);case 9:if(e.prev=9,"Choose"!==pe.current[1]){e.next=12;break}return e.abrupt("return");case 12:return ne(!0),d([]),w(!0),n=pe.current[0].toLowerCase(),r=0,c=0,e.next=20,je.current;case 20:return o=new g,be.current.map(function(){var e=Object(l.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.postMessage({name:n,branch:pe.current[1],file:t,command:"run",sem:a+1});case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),o.onmessage=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("nf"!==t.data){e.next=11;break}if(r++,c++,3!==r){e.next=9;break}return ne(!1),e.next=7,w(!1);case 7:o.terminate(),setTimeout((function(){w(!0)}),4e3);case 9:e.next=17;break;case 11:return e.next=13,d((function(e){return[].concat(Object(h.a)(e),[t.data[0]])}));case 13:return e.next=15,R(!0);case 15:c++,"ME"===L&&c===B.length-1?(n={sem:"Total :",marks:"".concat(t.data[1][0]," / ").concat(t.data[1][1]),percentage:(t.data[1][0]/t.data[1][1]*100).toFixed(4)},ne(!1),d((function(e){try{var t=Object(h.a)(oe);t[a].data=[].concat(Object(h.a)(e),[n]),se(t)}catch(r){}return[].concat(Object(h.a)(e),[n])})),o.terminate()):c===B.length&&(s={sem:"Total :",marks:"".concat(t.data[1][0]," / ").concat(t.data[1][1]),percentage:(t.data[1][0]/t.data[1][1]*100).toFixed(4)},ne(!1),d((function(e){try{var t=Object(h.a)(oe);t[a].data=[].concat(Object(h.a)(e),[s]),se(t)}catch(n){}return[].concat(Object(h.a)(e),[s])})),o.terminate());case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.finish(9);case 24:case"end":return e.stop()}}),e,null,[[0,5,9,24]])})));return function(t){return e.apply(this,arguments)}}(),me=function(e){var t=Object(h.a)(oe);t.splice(e,1),se(t),de("No")},ve=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"update"===oe[t].data?(pe.current=[oe[t].name,oe[t].branch],ge(t)):(de(t),d(oe[t].data),pe.current=[oe[t].name,oe[t].branch],F(oe[t].name),R(!0));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),xe=Object(ee.a)({palette:{type:t?"dark":"light"}});return r.a.useEffect((function(){if("update"===n&&0!==oe.length){var e=[];oe.map((function(t){var a=Object(p.a)(Object(p.a)({},t),{},{data:"update"});e.push(a)})),se(e)}}),[n]),r.a.useEffect((function(){(function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(B.map(function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return a=e.sent,e.next=5,Promise.all(a.map(function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.arrayBuffer(),e.abrupt("return",a);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:be.current=e.sent,t();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(fe.current)}),[]),Object(y.jsxs)(te.a,{theme:xe,children:[Object(y.jsx)(S.a,{control:Object(y.jsx)(T.a,{checked:t,onChange:function(){return a(!t)}}),label:"Dark Mode",color:"primary",style:{position:"absolute",right:0}}),"fInstall"===n&&Object(y.jsx)(M.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:!0,children:Object(y.jsx)(I.a,{message:"Now available for offline usage, can install/add to home screen from browser drawer."})}),"update"===n&&Object(y.jsx)(M.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:!0,children:Object(y.jsx)(I.a,{message:"Update available, refresh page for updated content, can install/add to home screen from browser drawer."})}),X&&Object(y.jsx)(C,{}),N?Object(y.jsx)(K,{name:pe.current[0],data:s,load:X,reset:function(){F(""),z("Choose"),R(!1),pe.current=["","Choose"]},darkMode:t,savedLoad:ue,handleFav:function(){var e={name:pe.current[0],branch:pe.current[1],data:s};se((function(t){return[].concat(Object(h.a)(t),[e])})),de(oe.length)},favDel:me}):Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(m.a,{maxWidth:"sm",children:[Object(y.jsx)(M.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:!j,children:Object(y.jsx)(I.a,{message:"The entered data didn't matched, please try again !"})}),Object(y.jsxs)("h2",{className:he.beg,children:[" Hello ",J]}),Object(y.jsxs)("p",{children:["This is a Web worker - Reactjs based PWA where anyone from the batch 2018-22 can have a quick reference of their academic performance.",Object(y.jsx)("br",{}),"It will work offline too and is installable."]}),Object(y.jsxs)("form",{className:he.form,onSubmit:ge,children:[Object(y.jsx)(v.a,{name:"branch",error:Z,select:!0,label:"branch",fullWidth:!0,helperText:Z?"please choose correct branch":"please choose your branch",value:L,onChange:function(e){z(e.target.value),pe.current[1]=e.target.value,"Choose"===e.target.value?$(!0):$(!1)},children:W.map((function(e){return Object(y.jsx)(O.a,{value:e.value,children:e.label},e.value)}))}),"Choose"!==L&&Object(y.jsx)(v.a,{style:{marginTop:"10px"},type:"CE"===L?"number":"text",required:!0,fullWidth:!0,name:"name",inputProps:"CE"===L?{min:"180500"}:{minLength:"2"},label:"CE"===L?"College-ID":"Name",helperText:"CE"===L?"Please enter your College-ID":"Please enter your full name",onInput:function(e){F(e.target.value),pe.current[0]=e.target.value}}),Object(y.jsx)("center",{children:Object(y.jsx)(x.a,{className:he.submit,type:"submit",variant:"contained",color:"primary",disabled:X,startIcon:Object(y.jsx)(D.a,{}),children:X?"loading...":"Submit"})})]}),Object(y.jsx)(Y,{saved:oe,favShow:ve,favDel:me})]})})]})},re=a(70),ce=function(){return Object(y.jsxs)("div",{className:"footer",children:["Tried making with care (\u2741\xb4\u25e1`\u2741), by : "," ",Object(y.jsx)("a",{className:"nav-link",href:"https://github.com/jatinsajwan3841",children:"jatin"})]})},oe=(a(96),function(){var e=_(!1,"darkMode"),t=Object(u.a)(e,2),a=t[0],n=t[1],c=r.a.useState(""),o=Object(u.a)(c,2),s=o[0],d=o[1],f=Object(j.a)();return r.a.useEffect((function(){b({onSuccess:function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("fInstall");case 2:return e.next=4,setTimeout((function(){return d("")}),4e3);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),onUpdate:function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("update");case 2:return e.next=4,setTimeout((function(){return d("")}),4e3);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()})}),[]),Object(y.jsxs)("div",{className:"main-container ".concat(a&&"dark"),style:{minHeight:f},children:[Object(y.jsx)("div",{className:"home",children:Object(y.jsx)(ne,{darkMode:a,setDarkMode:n,update:s})}),Object(y.jsx)(re.a,{type:"cobweb",num:"30",color:"#a6a4ad"}),Object(y.jsx)(ce,{})]})});o.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(oe,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.f03f21cc.chunk.js.map