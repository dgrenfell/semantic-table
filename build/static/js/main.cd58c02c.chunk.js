(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(50)},40:function(e,t,a){},42:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(13),c=a.n(n),l=a(28),r=a.n(l),o=(a(40),a(12)),u=(a(42),a(29)),i=a(30),m=(a(46),a(51),i.a.initializeApp({apiKey:"AIzaSyAlYrB0CkCfg-JNKqnnH8Rj-BmHqbFWtuI",authDomain:"verint-table.firebaseapp.com",projectId:"verint-table",storageBucket:"verint-table.appspot.com",messagingSenderId:"231628934734",appId:"1:231628934734:web:c2329ab4d437af5054bd1f",measurementId:"G-R1GRRZHF6K"}).firestore());a(48);var s=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)(function(){var e=m.collection("table").onSnapshot(function(e){var t=e.docs.map(function(e){return Object(u.a)({id:e.id},e.data())});l(t)});return function(){e()}},[]),console.log(a),c.a.createElement("table",{className:"table"},c.a.createElement("tr",null,c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Email"),c.a.createElement("th",null,"Contact")),a.map(function(e){return c.a.createElement("tr",null,c.a.createElement("td",null,e.Name),c.a.createElement("td",null,e.Email),c.a.createElement("td",null,e.Contact))}))};var b=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],l=t[1];return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Semantic Table"),a&&c.a.createElement(s,{className:"table"}),c.a.createElement("div",{className:"button_container"},c.a.createElement("button",{className:"button",onClick:function(){l(function(e){return!e})}},"Show/Hide")))};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)))}},[[32,2,1]]]);
//# sourceMappingURL=main.cd58c02c.chunk.js.map