(this["webpackJsonpgarage-sale"]=this["webpackJsonpgarage-sale"]||[]).push([[0],{101:function(e,t,n){e.exports=n(151)},106:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(15),o=n.n(r),l=(n(106),n(73)),i=n(167),u=n(35),s=n(71),m=n(74),g=n(70),p=n(28).Button,f=function(){return c.a.createElement(p,{label:"want to buy me a coffee?",href:"https://ko-fi.com/eldorado",target:"_blank",color:"accent1",a11yTitle:"Buy me a coffee at ko-fi.com"})},d=n(91),h=n.n(d),E=n(92),b=n.n(E),v="/listings",j="/account",k=n(63),w=n(72),y=function(){var e=Object(i.e)();return c.a.createElement(c.a.Fragment,null,c.a.createElement(k.a,{justify:"between",direction:"row",background:"accent4",pad:"small"},c.a.createElement(w.a,{color:"accent2",onClick:function(){e.push("/")},icon:c.a.createElement(h.a,null)}),c.a.createElement(w.a,{color:"accent2",onClick:function(){e.push(j)},icon:c.a.createElement(b.a,null)})))},O=function(e){var t=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement(y,null),c.a.createElement(u.a,{fill:!0,background:"brand"},t))},I=n(93),S=n(94),C=n(99),F=n(98),x=n(37),D=n.n(x),B=function(e){Object(C.a)(n,e);var t=Object(F.a)(n);function n(e){var a;return Object(I.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({address:e})},a.handleSelect=function(e){Object(x.geocodeByAddress)(e).then((function(e){return Object(x.getLatLng)(e[0])})).then((function(e){return console.log("Success",e)})).catch((function(e){return console.error("Error",e)}))},a.state={address:""},a}return Object(S.a)(n,[{key:"render",value:function(){return c.a.createElement(D.a,{value:this.state.address,onChange:this.handleChange,onSelect:this.handleSelect},(function(e){var t=e.getInputProps,n=e.suggestions,a=e.getSuggestionItemProps,r=e.loading;return c.a.createElement("div",null,c.a.createElement("input",t({placeholder:"Search Places ...",className:"location-search-input"})),c.a.createElement("div",{className:"autocomplete-dropdown-container"},r&&c.a.createElement("div",null,"Loading..."),n.map((function(e){var t=e.active?"suggestion-item--active":"suggestion-item",n=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return c.a.createElement("div",a(e,{className:t,style:n}),c.a.createElement("span",null,e.description))}))))}))}}]),n}(c.a.Component),z=function(){var e=Object(i.e)();return c.a.createElement(O,null,c.a.createElement(u.a,{align:"center",pad:"large"},c.a.createElement(s.a,{color:"accent2",size:"xlarge"},"el dorado"),c.a.createElement(m.a,{color:"accent1",margin:{top:"none"},textAlign:"center",size:"xxlarge"},"your map to the next great treasure."),c.a.createElement(B,null),c.a.createElement(g.a,{color:"accent1",label:"let's go!",onClick:function(){e.push(v)}})),c.a.createElement(u.a,{pad:"large",direction:"row",justify:"center"},c.a.createElement(m.a,{color:"accent2",size:"large"},"selling something?",c.a.createElement(g.a,{color:"accent2",label:"manage your listing",onClick:function(){e.push(j)}}),c.a.createElement(f,null))))},A=n(55),P=n.n(A),N=n(95),R=n(38),L=n(32),J=Object(L.GoogleApiWrapper)({apiKey:"AIzaSyDQU2XSRYRooncNw9ZJSkVDNjKH1DzJGRc"})((function(e){var t=e.google,n=Object(a.useState)([]),r=Object(R.a)(n,2),o=r[0],l=r[1],i=Object(a.useState)({}),u=Object(R.a)(i,2),s=u[0],m=u[1],g=Object(a.useState)(!1),p=Object(R.a)(g,2),f=p[0],d=p[1],h=function(){var e=Object(N.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/listings").then((function(e){return e.json()})).then((function(e){l(e.listings)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){h()}),[]),c.a.createElement(O,null,c.a.createElement(L.Map,{google:t,zoom:14,style:M,initialCenter:{lat:49.8844,lng:-97.14704}},o.map((function(e){return c.a.createElement(L.Marker,{key:e.id,title:e.name,position:{lat:e.lat,lng:e.lng},onClick:function(){return m(e),void d(!0)}})})),c.a.createElement(L.InfoWindow,{position:{lat:parseFloat(s.lat),lng:parseFloat(s.lng)},visible:f,clickable:!0,onClose:function(){m({}),d(!1)}},c.a.createElement("p",null,s.name))))})),M={width:"100%",height:"100%"},W=n(96),_=n.n(W),G=n(6),H=n.n(G),K=(n(69),{apiKey:"AIzaSyBaBwqlHi_h1IfsYOw_HD8p1EUm5qE9h4Q",authDomain:"el-dorado-c1ff1.firebaseapp.com",projectId:"el-dorado-c1ff1",storageBucket:"el-dorado-c1ff1.appspot.com",messagingSenderId:"858900418433",appId:"1:858900418433:web:35e7acd704a7129020e280",measurementId:"G-3LQ6D4N6VZ"});H.a.initializeApp(K);var Q=function(){var e={signInFlow:"popup",signInSuccessUrl:"/signedIn",signInOptions:[H.a.auth.EmailAuthProvider.PROVIDER_ID]};return c.a.createElement("div",null,c.a.createElement("h1",null,"My App"),c.a.createElement("p",null,"Please sign-in:"),c.a.createElement(_.a,{uiConfig:e,firebaseAuth:H.a.auth()}))},U={peach:"#FFBD71",plum:"#C73866",salmon:"#FE6763",orange:"#FD8F52",gold:"#FFDB58"},V={global:{font:{family:"Roboto",size:"18px",height:"20px"},colors:{brand:U.peach,accent1:U.plum,accent2:U.salmon,accent3:U.orange,accent4:U.gold}}};var q=function(){return c.a.createElement(l.a,{theme:V,full:!0},c.a.createElement(i.d,null,c.a.createElement(i.b,{path:"/",exact:!0,component:z}),c.a.createElement(i.b,{path:v,component:J}),c.a.createElement(i.b,{path:j,component:Q}),c.a.createElement(i.a,{to:{LandingPage:z}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=n(18),Z=Object(Y.a)();o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.c,{history:Z},c.a.createElement(q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.a5dc61df.chunk.js.map