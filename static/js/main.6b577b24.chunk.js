(this.webpackJsonpdrinks=this.webpackJsonpdrinks||[]).push([[0],{30:function(e,t,a){e.exports=a(55)},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),s=a(6),m=a.n(s),i=a(20),l=a(21),u=a(22),v=a(27),d=a(29),E=a(23),f=a.n(E).a.create({baseURL:"https://mock-api.drinks.test.siliconrhino.io"}),g={getAllEvents:function(){return f.get("/events")},getEventById:function(e){return f.get("/events/".concat(e))}},p=a(4),b=a.n(p),h=function(e){return r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:"/".concat(e.eventType.substring(0,e.eventType.length-1),"-icon-background.png").toLowerCase(),alt:"icon"}))},N=a(2),k=a(3);function y(){var e=Object(N.a)(["\n  color: #4c3800;\n"]);return y=function(){return e},e}function j(){var e=Object(N.a)(["\n  background-color: #dbb561;\n"]);return j=function(){return e},e}var w=k.a.div(j()),O=k.a.div(y()),C=function(e){var t=e.timeCreated,a=e.avatar,n=e.creator,c=e.eventName,o=e.location,s=o.name,m=o.latitude,i=o.longitude;return r.a.createElement(w,{className:"content"},r.a.createElement("div",{className:"right floated meta"},t),r.a.createElement("img",{className:"ui avatar image",src:a,alt:"avatar"}),n,r.a.createElement(O,{className:"header"},c),r.a.createElement("div",{className:"meta"},r.a.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query=".concat(m,",").concat(i)},"Location: ",s)))},L=a(28),T=function(e){var t=e.comment,a=t.user,n=a.name,c=a.avatarUrl,o=t.message,s=t.timestamp;return r.a.createElement("div",{class:"comment"}," ",r.a.createElement("a",{class:"avatar"},r.a.createElement("img",{src:c})),r.a.createElement("div",{class:"content"},r.a.createElement("a",{class:"author"},n),r.a.createElement("div",{class:"metadata"},r.a.createElement("div",{class:"date"},b()(s).fromNow())),r.a.createElement("div",{class:"text"},o),r.a.createElement("div",{class:"actions"},r.a.createElement("a",{class:"reply"},"Reply"))))};function x(){var e=Object(N.a)(["\n  color: #dbb561;\n  padding-right: 1.5em;\n"]);return x=function(){return e},e}function S(){var e=Object(N.a)(["\n  background-color: Transparent;\n  color: #4c3800;\n\n  border: none;\n  &:hover {\n    color: #fff;\n  }\n"]);return S=function(){return e},e}var U=k.a.button(S()),q=k.a.i(x()),A=function(e){var t=Object(n.useState)(!1),a=Object(L.a)(t,2),c=a[0],o=a[1];return r.a.createElement("div",{className:"content"},r.a.createElement(U,{onClick:function(){return o(!c)}},r.a.createElement(q,{className:"comment icon"}),e.comments.length," comments"),c&&r.a.createElement("div",{className:"ui comments"},e.comments.map((function(e,t){return r.a.createElement(T,{comment:e})}))))},J=(a(54),function(e){return console.log("/".concat(e.eventType,"-icon.png").toLowerCase()),r.a.createElement("div",{className:"card"},r.a.createElement(C,{timeCreated:e.timeCreated,avatar:e.avatar,eventName:e.eventName,location:e.location}),r.a.createElement(h,{eventType:e.eventType}),r.a.createElement(A,{comments:e.comments}))}),R=function(e){var t=e.events;return r.a.createElement("div",{className:"ui container comments"},r.a.createElement("div",{className:"ui cards"},t.map((function(e,t){return r.a.createElement(J,{eventName:e.title,creator:e.creator.name,timeCreated:b()(e.time).fromNow(),avatar:e.creator.avatarUrl,eventType:e.type,comments:e.comments,location:e.location})}))))},B=function(){return r.a.createElement("h2",{className:"ui header"},r.a.createElement("img",{className:"ui image",src:"/drinks-text.png",alt:"header-logo"}))},D=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(i.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,g.getAllEvents().then((function(e){console.log(e.data),n.setState({events:e.data,isLoading:!1})}));case 3:case"end":return e.stop()}}),e)}))),n.state={events:[],isLoading:!1},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.events;e.isLoading;return console.log(t),r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),r.a.createElement(R,{events:t}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(D,null),document.querySelector("#root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.6b577b24.chunk.js.map