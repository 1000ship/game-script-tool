(this["webpackJsonpgame-script-tool"]=this["webpackJsonpgame-script-tool"]||[]).push([[0],{17:function(e,n,t){e.exports=t(25)},22:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),o=t.n(c),i=(t(22),t(10)),l=t(5),u=t(1),s=t(2),m=function(e){try{localStorage.setItem("me.1000ship.game-script-tool",JSON.stringify(e))}catch(n){alert("\uc790\ub3d9 \uc800\uc7a5 \uc911 \ubb38\uc81c \ubc1c\uc0dd")}};function d(){var e=Object(u.a)(["\n  font-size: 12px;\n  margin-left: 6px;\n  cursor: pointer;\n  &:hover {\n    font-weight: bolder;\n  }\n"]);return d=function(){return e},e}function p(){var e=Object(u.a)(["\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  display: flex;\n"]);return p=function(){return e},e}function g(){var e=Object(u.a)(["\n  background-color: white;\n  border-radius: 5px;\n  padding: 3px;\n  display: inline-block;\n"]);return g=function(){return e},e}function f(){var e=Object(u.a)(["\n  margin-right: 10px;\n  font-size: 13px;\n"]);return f=function(){return e},e}function h(){var e=Object(u.a)([""]);return h=function(){return e},e}function v(){var e=Object(u.a)(["\n  margin-top: 5px;\n  background-color: white;\n  padding: 5px;\n  border-radius: 3px;\n"]);return v=function(){return e},e}function b(){var e=Object(u.a)(["\n  font-style: italic;\n  margin-top: 5px;\n"]);return b=function(){return e},e}function E(){var e=Object(u.a)(["\n  font-weight: 600;\n"]);return E=function(){return e},e}function x(){var e=Object(u.a)(["\n  background-color: #efefef;\n  padding: 10px;\n  margin: 5px;\n  position: relative;\n"]);return x=function(){return e},e}var I=s.a.div(x()),k=s.a.div(E()),O=s.a.div(b()),j=s.a.div(v()),y=s.a.div(h()),S=s.a.span(f()),w=s.a.span(g()),C=s.a.ul(p()),N=s.a.li(d());var B=function(e){var n=e.sceneId,t=e.characterName,a=e.sceneScript,c=e.characterImage,o=e.backgroundImage,i=e.sceneSound,l=e.options,u=e.setBlockList;return r.a.createElement(I,null,r.a.createElement(C,null,r.a.createElement(N,null,"\uc704\ub85c"),r.a.createElement(N,null,"\uc544\ub798\ub85c"),r.a.createElement(N,{onClick:function(){u((function(e){var t=e.findIndex((function(e){return e.sceneId===n}));return m(e.slice(0,t).concat(e.slice(t+1))),e.slice(0,t).concat(e.slice(t+1))}))}},"\uc0ad\uc81c"),r.a.createElement(N,null,"\uc218\uc815")),r.a.createElement(k,null,n),r.a.createElement(O,null,t),r.a.createElement(j,null,a),r.a.createElement(S,null,c),r.a.createElement(S,null,o),r.a.createElement(S,null,i),r.a.createElement("ol",null,l.map((function(e,n){var t=e.answer,a=e.reaction,c=e.nextId;return r.a.createElement("li",{key:n},r.a.createElement(w,null,t)," \u2192 ",r.a.createElement(w,null,a)," \u2192 ",c)}))),r.a.createElement(y,null))};function L(){var e=Object(u.a)(["\n  padding: 5px 0px;\n"]);return L=function(){return e},e}var H=s.a.div(L());var F=function(e){var n=e.blockList,t=e.setBlockList,a=e.scriptInputHeight;return r.a.createElement(H,{style:{marginTop:"".concat(a,"px")}},n.map((function(e,n){var a=e.sceneId,c=e.characterName,o=e.sceneScript,i=e.characterImage,l=e.backgroundImage,u=e.sceneSound,s=e.options;return r.a.createElement(B,{key:a,sceneId:a,characterName:c,sceneScript:o,characterImage:i,backgroundImage:l,sceneSound:u,options:s,setBlockList:t})})))},J=t(8),z=t(3);function D(){var e=Object(u.a)(["\n  width: 100%;\n  height: 50px;\n  display: block;\n"]);return D=function(){return e},e}function M(){var e=Object(u.a)([""]);return M=function(){return e},e}function W(){var e=Object(u.a)([""]);return W=function(){return e},e}function R(){var e=Object(u.a)(["\n  padding: 3px 0px;\n"]);return R=function(){return e},e}function T(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return T=function(){return e},e}function $(){var e=Object(u.a)(["\n  @media(min-width: 800px){\n    width: 80%;\n    left: 10%;\n  }\n  padding: 10px 0px;\n  margin: auto auto;\n  background-color: white;\n  position: fixed;\n  top: 0;\n  z-index: 1;\n  border-bottom: 1px solid gray;\n"]);return $=function(){return e},e}var q=s.a.div($()),A=s.a.div(T()),G=s.a.div(R()),K=s.a.label(W()),P=s.a.input(M()),Q=s.a.textarea(D());var U=function(e){var n,t=e.createNewBlock,c=e.blockList,o=e.setScriptInputHeight,i={sceneId:"",characterName:"",sceneScript:"",characterImage:"",backgroundImage:"",sceneSound:"",options:[{answer:"",reaction:"",nextId:""}]},u=Object(a.useState)(i),s=Object(l.a)(u,2),m=s[0],d=s[1],p=m.sceneId,g=m.characterName,f=m.sceneScript,h=m.characterImage,v=m.backgroundImage,b=m.sceneSound,E=m.options,x=function(e){var n=e.target,t=n.name,a=n.value,r=n.dataset.optionIndex;void 0===m[t]&&void 0===r||d(void 0===r?Object(z.a)(Object(z.a)({},m),{},Object(J.a)({},t,a)):function(e){return e.options[r][t]=a,Object.assign({},e)})},I=Object(a.createRef)();return Object(a.useEffect)((function(e){var n;void 0!==(null===I||void 0===I?void 0:I.current)&&o(null===(n=I.current)||void 0===n?void 0:n.offsetHeight)}),[null===I||void 0===I||null===(n=I.current)||void 0===n?void 0:n.offsetHeight]),r.a.createElement(q,{ref:I},r.a.createElement(G,null,r.a.createElement(K,{htmlFor:"scene-id"},"Scene ID : "),r.a.createElement(P,{name:"sceneId",id:"scene-id",type:"text",placeholder:"#3-1",value:p,onChange:x})),r.a.createElement(G,null,r.a.createElement(K,{htmlFor:"character-name"},"Character Name : "),r.a.createElement(P,{name:"characterName",value:g,onChange:x,id:"character-name",type:"text",placeholder:"John Mayer"})),r.a.createElement(G,null,r.a.createElement(K,{htmlFor:"scene-script"},"Scene Script : "),r.a.createElement(Q,{name:"sceneScript",value:f,onChange:x,id:"scene-script",placeholder:"Hello, the weather is sunny. Shall we go picnic?"})),r.a.createElement(A,null,r.a.createElement(G,null,r.a.createElement(K,{htmlFor:"character-image"},"Character Image : "),r.a.createElement(P,{name:"characterImage",value:h,onChange:x,id:"character-image",type:"text",placeholder:"smile.png (\uc120\ud0dd\uc785\ub825)"})),r.a.createElement(G,null,r.a.createElement(K,{htmlFor:"background-image"},"Background Image : "),r.a.createElement(P,{name:"backgroundImage",value:v,onChange:x,id:"background-image",type:"text",placeholder:"park.png (\uc120\ud0dd\uc785\ub825)"})),r.a.createElement(G,null,r.a.createElement(K,{htmlFor:"scene-sound"},"Scene Sound : "),r.a.createElement(P,{name:"sceneSound",value:b,onChange:x,id:"scene-sound",type:"text",placeholder:"laugh.mp3 (\uc120\ud0dd\uc785\ub825)"}))),E.map((function(e,n){var t=e.answer,a=e.reaction,c=e.nextId;return r.a.createElement(G,{key:n,style:{display:"flex"}},r.a.createElement(K,null,n+1,". "),r.a.createElement(P,{style:{flex:1},type:"text",placeholder:"(\ub300\ub2f5) I like too",name:"answer","data-option-index":n,value:t,onChange:x}),r.a.createElement(P,{style:{flex:1},type:"text",placeholder:"(\ubc18\uc751) Let's meet now",name:"reaction","data-option-index":n,value:a,onChange:x}),r.a.createElement(P,{type:"text",placeholder:"#3-".concat(n+2),name:"nextId","data-option-index":n,value:c,onChange:x}))})),r.a.createElement("button",{onClick:function(e){d(Object(z.a)(Object(z.a)({},m),{},{options:m.options.concat({answer:"",reaction:"",nextId:""})}))}},"\uc120\ud0dd\uc9c0 \ucd94\uac00"),r.a.createElement("button",{onClick:function(e){E.length>1&&d(Object(z.a)(Object(z.a)({},m),{},{options:E.slice(0,E.length-1)}))}},"\uc120\ud0dd\uc9c0 \uc0ad\uc81c"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(e){0===p.length?alert("Scene ID\ub97c \uc785\ub825\ud558\uc138\uc694."):c.find((function(e){return e.sceneId===p}))?alert("\uc911\ubcf5\ub418\ub294 Scene ID\uac00 \uc788\uc2b5\ub2c8\ub2e4."):t&&(t(Object.assign({},m)),d(i))}},"\ube14\ub7ed \ucd94\uac00"))};function V(){var e=Object(u.a)(["\n  @media(min-width: 800px){\n    width: 80%;\n  }\n  margin: auto auto;\n"]);return V=function(){return e},e}var X=s.a.div(V());var Y=function(){var e=function(){var e;try{null===(e=JSON.parse(localStorage.getItem("me.1000ship.game-script-tool")))&&(e=[])}catch(n){e=[]}return e}(),n=Object(a.useState)(e),t=Object(l.a)(n,2),c=t[0],o=t[1],u=Object(a.useState)(0),s=Object(l.a)(u,2),d=s[0],p=s[1];return r.a.createElement(X,null,r.a.createElement(U,{blockList:c,createNewBlock:function(e){m([].concat(Object(i.a)(c),[e])),o([].concat(Object(i.a)(c),[e]))},setScriptInputHeight:p}),r.a.createElement(F,{blockList:c,setBlockList:o,scriptInputHeight:d}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.d9b3c65f.chunk.js.map