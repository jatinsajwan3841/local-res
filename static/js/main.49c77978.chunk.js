(this["webpackJsonplive-result"]=this["webpackJsonplive-result"]||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(16),o=a.n(c),s=(a(95),a(18)),i=a.n(s),l=a(25),u=a(17),d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e){if("serviceWorker"in navigator){if(new URL("/local-res",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/local-res","/service-worker.js");d?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var r=a.headers.get("content-type");404===a.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("update available, waiting for refresh")}))):f(t,e)}))}}function f(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var j=a(72),h=a(39),p=a(14);function g(){return new Worker(a.p+"static/js/index.worker.93575585.worker.js")}var m=a(159),x=a(169),v=a(160),O=a(174),w=a(154),k=a(157),y=a(5),E=Object(w.a)((function(e){return{root:{width:"100%",position:"fixed"}}}));function C(){var e=E();return Object(y.jsx)("div",{className:e.root,children:Object(y.jsx)(k.a,{color:"secondary"})})}var S=a(172),T=a(171),M=a(173),I=a(168),N=a(76),D=a.n(N),W=a(77),B=a.n(W),R=[{value:"Choose",label:"Choose"},{value:"C S",label:"CSE"},{value:"EC",label:"ECE"},{value:"EE",label:"EE"},{value:"CE",label:"CE"},{value:"ME",label:"ME"},{value:"BT",label:"BT"}],H=["dat/B. TECH. I SEM DEC 18.xlsx","dat/B. TECH. II SEM JUNE 2019.xlsx","dat/B. TECH. III SEM DECEMBER 2019.xlsx","dat/B. TECH. IV SEM DECEMBER 2020.xlsx","dat/B. TECH. V SEM DECEMBER 2020 (COVID19 ).xlsx","dat/B. TECH. VI SEM JUNE 2021 (COVID 19 ).xlsx","dat/VIIth SEM.xlsx"],L=a(162),P=a(166),U=a(165),z=a(161),A=a(163),J=a(164),V=a(73),F=a.n(V),q=a(60),Z=a.n(q),Y=a(74),$=a.n(Y),_=a(53);_.a.register.apply(_.a,Object(p.a)(_.b));var G=function(e){var t=e.data,a=e.darkMode,r=n.a.createRef(),c=n.a.useRef();return n.a.useEffect((function(){if(void 0!==c.current){var e=c.current.options;a?(e.plugins.legend.labels.color="rgba(255, 255, 255, 0.8)",e.scales.x.ticks.color="rgba(255, 255, 255, 0.8)",e.scales.y.ticks.color="rgba(255, 255, 255, 0.8)",e.scales.x.grid.color="rgba(255, 255, 255, 0.2)",e.scales.y.grid.color="rgba(255, 255, 255, 0.2)",c.current.update()):(e.plugins.legend.labels.color="rgba(0, 0, 0, 0.8)",e.scales.x.ticks.color="rgba(0, 0, 0, 0.8)",e.scales.y.ticks.color="rgba(0, 0, 0, 0.8)",e.scales.x.grid.color="rgba(0, 0, 0, 0.2)",e.scales.y.grid.color="rgba(0, 0, 0, 0.2)",c.current.update())}}),[a]),n.a.useEffect((function(){if(void 0!==c.current){var e=t.map((function(e){return e.sem})),a=t.map((function(e){return e.percentage}));e.pop(),a.pop();var r=Object(p.a)(Array(t.length)).fill(t[t.length-1].percentage);c.current.data.labels=e,c.current.data.datasets[0].data=a,c.current.data.datasets[1].data=r,c.current.update()}}),[t]),n.a.useEffect((function(){var e=t.map((function(e){return e.sem})),n=t.map((function(e){return e.percentage}));e.pop(),n.pop();var o=Object(p.a)(Array(t.length)).fill(t[t.length-1].percentage);c.current=new _.a(r.current.getContext("2d"),{type:"line",data:{labels:e,datasets:[{label:"% in each sem",data:n,backgroundColor:["rgba(255, 99, 132, 0.3)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],fill:{target:"origin"},borderWidth:2,cubicInterpolationMode:"default",tension:.3},{label:"Total %",data:o,backgroundColor:["rgba(54, 162, 235, 0.3)"],borderColor:["rgba(54, 162, 235, 1)"],borderWidth:2}]},options:{plugins:{legend:{display:!0,labels:{color:a?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"}}},scales:{x:{ticks:{color:a?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"},grid:{color:a?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.2)"}},y:{min:0,beginAtZero:!0,ticks:{color:a?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"},grid:{color:a?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.2)"}}}}})}),[]),Object(y.jsx)("div",{style:{marginTop:"35px"},children:Object(y.jsx)("canvas",{ref:r})})},K=function(e){var t=e.name,a=e.data,r=e.load,n=e.reset,c=e.darkMode,o=e.savedLoad,s=e.handleFav,i=e.favDel,l=e.back,u=e.year,d=e.meritList,b=e.yearTotal,f=++u;return f+=[,"st","nd","rd"][f%100>>3^1&&f%10]||"th",Object(y.jsxs)(m.a,{maxWidth:"md",children:[Object(y.jsx)(v.a,{variant:"contained",color:"primary",style:{marginTop:6},startIcon:Object(y.jsx)(F.a,{}),onClick:function(){l(),n()},size:"small",children:"Home"}),!d&&("No"===o?Object(y.jsx)(v.a,{variant:"contained",color:"secondary",style:{marginTop:6,marginLeft:6},startIcon:Object(y.jsx)(Z.a,{}),onClick:s,disabled:r,size:"small",children:"Save"}):Object(y.jsx)(v.a,{variant:"contained",color:"secondary",style:{marginTop:6,marginLeft:6},startIcon:Object(y.jsx)($.a,{}),onClick:function(){return i(o)},disabled:r,size:"small",children:"Del"})),d?Object(y.jsxs)("h2",{style:{marginTop:6},children:[" ","Hello, ",f," year Merit List is shown below"]}):Object(y.jsxs)("h2",{style:{marginTop:6},children:[" Hello ",t]}),Object(y.jsx)(z.a,{component:m.a,children:Object(y.jsxs)(L.a,{size:"small",children:[Object(y.jsx)(A.a,{children:Object(y.jsxs)(J.a,{children:[Object(y.jsx)(U.a,{align:"center",children:d?Object(y.jsx)("b",{children:"Pos."}):Object(y.jsx)("b",{children:"Sem"})}),Object(y.jsx)(U.a,{align:"center",children:d?Object(y.jsx)("b",{children:"Name"}):Object(y.jsx)("b",{children:"Marks"})}),Object(y.jsx)(U.a,{align:"center",children:d?Object(y.jsxs)("b",{children:["Marks(/",b,")"]}):Object(y.jsx)("b",{children:"Percentage"})}),d&&Object(y.jsx)(U.a,{align:"center",children:Object(y.jsx)("b",{children:"Percentage"})})]})}),Object(y.jsx)(P.a,{children:a.map((function(e,t){return Object(y.jsxs)(J.a,{children:[Object(y.jsx)(U.a,{component:"th",scope:"row",align:"center",children:d?t+1:e.sem}),Object(y.jsx)(U.a,{align:"center",children:d?e[0]:e.marks}),Object(y.jsx)(U.a,{align:"center",children:d?e[1]:"".concat(e.percentage,"%")}),d&&Object(y.jsxs)(U.a,{align:"center",children:[(e[1]/b*100).toFixed(4),"%"]})]},t)}))})]})}),!d&&Object(y.jsx)(G,{data:a,darkMode:c})]})},Q=a(176),X=a(175),ee=function(e){var t=e.saved,a=e.favShow,r=e.favDel;return Object(y.jsxs)("div",{children:[Object(y.jsx)(X.a,{avatar:Object(y.jsx)(Z.a,{}),label:"Saved :"}),Object(y.jsx)("ul",{children:0===t.length?"None, try saving for faster visits! \u2570(*\xb0\u25bd\xb0*)\u256f":t.map((function(e,t){return Object(y.jsx)("li",{children:Object(y.jsx)(X.a,{avatar:Object(y.jsx)(Q.a,{children:e.name[0]}),label:e.name,variant:"outlined",style:{marginBottom:8},onClick:function(){return a(t)},onDelete:function(){return r(t)}})},t)}))})]})},te=function(e,t){var a=n.a.useState((function(){var a=window.localStorage.getItem(t);return null!==a?JSON.parse(a):e})),r=Object(u.a)(a,2),c=r[0],o=r[1];return n.a.useEffect((function(){window.localStorage.setItem(t,JSON.stringify(c))}),[t,c]),[c,o]},ae=a(21),re=a(79),ne=a(167),ce=Object(w.a)((function(e){return{beg:{marginTop:e.spacing(8),paddingTop:e.spacing(2)},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3)}}})),oe=function(e){var t=e.darkMode,a=e.setDarkMode,r=e.update,c=n.a.useState([]),o=Object(u.a)(c,2),s=o[0],d=o[1],b=n.a.useState(!0),f=Object(u.a)(b,2),j=f[0],w=f[1],k=n.a.useState(!1),E=Object(u.a)(k,2),N=E[0],W=E[1],L=n.a.useState("Choose"),P=Object(u.a)(L,2),U=P[0],z=P[1],A=n.a.useState(""),J=Object(u.a)(A,2),V=J[0],F=J[1],q=n.a.useState(!1),Z=Object(u.a)(q,2),Y=Z[0],$=Z[1],_=n.a.useState(!1),G=Object(u.a)(_,2),Q=G[0],X=G[1],oe=te([],"favourite"),se=Object(u.a)(oe,2),ie=se[0],le=se[1],ue=n.a.useState("No"),de=Object(u.a)(ue,2),be=de[0],fe=de[1],je=n.a.useState(!1),he=Object(u.a)(je,2),pe=he[0],ge=he[1],me=n.a.useState(0),xe=Object(u.a)(me,2),ve=xe[0],Oe=xe[1],we=n.a.useRef([]),ke=n.a.useRef(null),ye=n.a.useRef(new Promise((function(e){return ke.current=e}))),Ee=n.a.useRef(["","Choose"]),Ce=n.a.useRef(0),Se=Object(ae.d)(),Te=Object(ae.e)(),Me=ce(),Ie=Object(re.a)({palette:{type:t?"dark":"light"}}),Ne=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,r,n,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t.preventDefault(),fe("No"),e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),fe(a=t);case 9:if(e.prev=9,"Choose"!==Ee.current[1]){e.next=12;break}return e.abrupt("return");case 12:if(X(!0),d([]),w(!0),!pe){e.next=18;break}return De(),e.abrupt("return");case 18:return r=Ee.current[0].toLowerCase(),n=0,c=0,e.next=23,ye.current;case 23:return o=new g,we.current.map(function(){var e=Object(l.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.postMessage({name:r,branch:Ee.current[1],file:t,command:"run",sem:a+1});case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),o.onmessage=function(){var e=Object(l.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("nf"!==t.data){e.next=11;break}if(n++,c++,3!==n){e.next=9;break}return X(!1),e.next=7,w(!1);case 7:o.terminate(),setTimeout((function(){w(!0)}),4e3);case 9:e.next=17;break;case 11:return e.next=13,d((function(e){return[].concat(Object(p.a)(e),[t.data[0]])}));case 13:return e.next=15,W(!0);case 15:++c===H.length&&(r={sem:"Total :",marks:"".concat(t.data[1][0]," / ").concat(t.data[1][1]),percentage:(t.data[1][0]/t.data[1][1]*100).toFixed(4)},X(!1),d((function(e){try{var t=Object(p.a)(ie);t[a].data=[].concat(Object(p.a)(e),[r]),le(t)}catch(n){}return[].concat(Object(p.a)(e),[r])})),o.terminate());case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.finish(9);case 27:case"end":return e.stop()}}),e,null,[[0,5,9,27]])})));return function(t){return e.apply(this,arguments)}}(),De=function(){var e=Object(l.a)(i.a.mark((function e(){var t,a,r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ye.current;case 2:t=new g,a={0:[0,1],1:[2,3],2:[4,5],3:[6,7]},r=[],(r=we.current[a[ve][1]]?[we.current[a[ve][0]],we.current[a[ve][1]]]:[we.current[a[ve][0]]]).map((function(e,a){return t.postMessage({branch:Ee.current[1],file:e,command:"merit",sem:a})})),n=0,t.onmessage=function(){var e=Object(l.a)(i.a.mark((function e(a){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(++n!=r.length){e.next=10;break}return c=Object.entries(a.data[0]).sort((function(e,t){return t[1]-e[1]})),Ce.current=a.data[1],e.next=6,d(c);case 6:return e.next=8,W(!0);case 8:X(!1),t.terminate();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),We=function(){F(""),z("Choose"),W(!1),Ee.current=["","Choose"]},Be=function(e){var t=Object(p.a)(ie);t.splice(e,1),le(t),fe("No")},Re=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"update"===ie[t].data?(Ee.current=[ie[t].name,ie[t].branch],Ne(t)):(fe(t),d(ie[t].data),Ee.current=[ie[t].name,ie[t].branch],F(ie[t].name),W(!0));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.a.useEffect((function(){N&&""===Se.location.hash&&Se.push({hash:"res"})}),[N]),n.a.useEffect((function(){"/local-res/"===Te.pathname&&"#res"!==Te.hash&&We()}),[Te]),n.a.useEffect((function(){if("update"===r&&0!==ie.length){var e=[];ie.map((function(t){var a=Object(h.a)(Object(h.a)({},t),{},{data:"update"});e.push(a)})),le(e)}}),[r]),n.a.useEffect((function(){(function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(H.map(function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return a=e.sent,e.next=5,Promise.all(a.map(function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.arrayBuffer(),e.abrupt("return",a);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:we.current=e.sent,t();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(ke.current)}),[]),Object(y.jsxs)(ne.a,{theme:Ie,children:[Object(y.jsx)(S.a,{control:Object(y.jsx)(T.a,{checked:t,onChange:function(){return a(!t)}}),label:"Dark Mode",color:"primary",style:{position:"absolute",right:0}}),Object(y.jsx)(M.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:""!==r,children:Object(y.jsx)(I.a,{message:"".concat("fInstall"===r?"Now available for offline usage, can install/add to home screen from browser drawer.":"Update available, refresh page for updated content, can install/add to home screen from browser drawer.")})}),Q&&Object(y.jsx)(C,{}),N?Object(y.jsx)(K,{name:Ee.current[0],data:s,load:Q,reset:We,darkMode:t,savedLoad:be,handleFav:function(){var e={name:Ee.current[0],branch:Ee.current[1],data:s};le((function(t){return[].concat(Object(p.a)(t),[e])})),fe(ie.length)},favDel:Be,back:Se.goBack,year:ve,meritList:pe,yearTotal:Ce.current}):Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(m.a,{maxWidth:"sm",children:[Object(y.jsx)(M.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:!j,children:Object(y.jsx)(I.a,{message:"The entered data didn't matched, please try again !"})}),Object(y.jsxs)("h2",{className:Me.beg,children:[" Hello ",V]}),Object(y.jsxs)("p",{children:["This is a Web worker - Reactjs based PWA where anyone from the batch 2018-22 can have a quick reference of their academic performance.",Object(y.jsx)("br",{}),"It will work offline too and is installable."]}),Object(y.jsxs)("form",{className:Me.form,onSubmit:Ne,children:[Object(y.jsx)(S.a,{control:Object(y.jsx)(T.a,{checked:pe,onChange:function(){return ge(!pe)}}),label:"Merit List",color:"secondary"}),Object(y.jsx)(x.a,{name:"branch",error:Y,select:!0,label:"branch",fullWidth:!0,helperText:Y?"please choose correct branch":"please choose your branch",value:U,onChange:function(e){z(e.target.value),Ee.current[1]=e.target.value,"Choose"===e.target.value?$(!0):$(!1)},children:R.map((function(e){return Object(y.jsx)(O.a,{value:e.value,children:e.label},e.value)}))}),"Choose"!==U&&(!1===pe?Object(y.jsx)(x.a,{style:{marginTop:"10px"},type:"CE"===U?"number":"text",required:!0,fullWidth:!0,name:"name",inputProps:"CE"===U?{min:"180500"}:{minLength:"2"},label:"CE"===U?"College-ID":"Name",helperText:"CE"===U?"Please enter your College-ID":"Please enter your full name",onInput:function(e){F(e.target.value),Ee.current[0]=e.target.value}}):Object(y.jsx)(x.a,{style:{marginTop:"10px"},name:"year",error:Y,select:!0,label:"year",fullWidth:!0,helperText:Y?"please choose correct year":"please choose year",value:ve,onChange:function(e){return Oe(e.target.value)},children:H.map((function(e,t){return t<4&&Object(y.jsx)(O.a,{value:t,children:t+1},t)}))})),Object(y.jsx)("center",{children:Object(y.jsx)(v.a,{className:Me.submit,type:"submit",variant:"contained",color:"primary",disabled:Q,startIcon:Object(y.jsx)(D.a,{}),children:Q?"loading...":"Submit"})})]}),Object(y.jsx)(ee,{saved:ie,favShow:Re,favDel:Be})]})}),Object(y.jsx)("a",{href:"https://forms.gle/ZRHk4sxci4nagY8w7",className:"anomaly",target:"_blank",children:Object(y.jsx)(B.a,{})})]})},se=a(78),ie=function(){return Object(y.jsxs)("div",{className:"footer",children:["Tried making with care (\u2741\xb4\u25e1`\u2741), by : "," ",Object(y.jsx)("a",{className:"nav-link",href:"https://github.com/jatinsajwan3841",children:"jatin"})]})},le=a(66),ue=(a(108),function(){var e=te(!1,"darkMode"),t=Object(u.a)(e,2),a=t[0],r=t[1],c=n.a.useState(""),o=Object(u.a)(c,2),s=o[0],d=o[1],f=Object(j.a)();return n.a.useEffect((function(){b({onSuccess:function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("fInstall");case 2:return e.next=4,setTimeout((function(){return d("")}),4e3);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),onUpdate:function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("update");case 2:return e.next=4,setTimeout((function(){return d("")}),4e3);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()})}),[]),Object(y.jsxs)("div",{className:"main-container ".concat(a&&"dark"),style:{minHeight:f},children:[Object(y.jsx)("div",{className:"home",children:Object(y.jsx)(le.a,{children:Object(y.jsx)(oe,{darkMode:a,setDarkMode:r,update:s})})}),Object(y.jsx)(se.a,{type:"cobweb",num:"30",color:"#a6a4ad"}),Object(y.jsx)(ie,{})]})});o.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(ue,{})}),document.getElementById("root"))},95:function(e,t,a){}},[[109,1,2]]]);
//# sourceMappingURL=main.49c77978.chunk.js.map