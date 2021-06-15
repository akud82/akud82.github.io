(this["webpackJsonpfrontend-mbse-g6"]=this["webpackJsonpfrontend-mbse-g6"]||[]).push([[0],{42:function(e,n,t){"use strict";t.r(n);var i=t(8),a=t.n(i),o=t(18),d=t.n(o),r=t(19);Object(r.insertCss)("\n  html, body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n\t  overflow: hidden;\n    font-family: 'Exo 2', 'Exo+2', serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',\n      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-size: 13px;\n    font-weight: 400;\n    font-style: normal;\n    line-height: 13px;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n  }\n\n  * {\n    font-family: 'Exo 2', 'Exo+2', serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',\n      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-weight: 400;\n  }\n\n  #root {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n  }\n\n  #app {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n  }\n\n  #graph {\n    border: 1px solid black;\n    display: flex;\n    flex: 1;\n  }\n\n  .diagram-container{\n    background: #fff;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex: 1;\n  }\n");var c=t(13),l=t.n(c),s=t(20),h=t(6),f=t(25),u=t(26),w=t(24),x=t.n(w),v=(window.devicePixelRatio,Math.SQRT2,"HelveticaRegular"),m=void 0,p=new h.a({transparent:!0,antialias:!0,autoDensity:!0,width:document.body.clientWidth,height:document.body.clientHeight});window.onresize=function(e){var n=window.devicePixelRatio,t=window.innerWidth,i=window.innerHeight,a=Math.round(t*n),o=Math.round(i*n);p.renderer.view.style.width=t+"px",p.renderer.view.style.height=i+"px",p.renderer.resize(a,o),console.log("onresize")},document.body.addEventListener("wheel",(function(e){e.ctrlKey&&e.preventDefault()}),{passive:!1}),p.view.style.textAlign="center",document.body.appendChild(p.view);var g=document.createElement("div");document.body.appendChild(g);var y=new u.a({screenWidth:p.view.offsetWidth,screenHeight:p.view.offsetHeight,interaction:p.renderer.plugins.interaction});function b(e){return Math.round(Math.random()*e)}y.moveCenter(5e3,5e3).drag().pinch().wheel().decelerate(),p.stage.addChild(y);var C=new h.c;y.addChild(C);var M=new h.c;y.addChild(M);var E=new h.c;y.addChild(E);var H=new h.c;y.addChild(H),y.on("drag-start",(function(){y.removeChild(E)})),y.on("zoomed",(function(){y.removeChild(E)})),y.on("zoomed-end",(function(){y.addChild(E)})),y.on("drag-end",(function(){y.addChild(E)}));var S=f.a(1,1e4).map((function(e){return{id:e,x:b(1e4),y:b(1e4)}})),j=(S.reduce((function(e,n){return e[n.id]=n,e}),{}),function(e){var n=new h.c;n.x=e.x,n.y=e.y,n.interactive=!0,n.buttonMode=!0,n.hitArea=new h.d(0,0,28,18);var t=new h.c;t.x=e.x,t.y=e.y,t.interactive=!0,t.buttonMode=!0;var i=new h.b("".concat(e.id),{fontName:v,fontSize:12,align:"center",tint:3355443});i.name="LABEL",i.x=0,i.y=0;var a=new h.e(h.f.WHITE);a.name="LABEL_BACKGROUND",a.x=-1,a.y=0,a.width=i.width+2,a.height=i.height+2,a.tint=16777215,a.alpha=.5,t.addChild(a),t.addChild(i);var o=new h.e(h.f.WHITE);o.tint=16711680,o.position.set(e.x,e.y),o.width=28,o.height=18,C.addChild(o),E.addChild(t)}),k=function(e,n){var t=new h.c;t.x=e.x,t.y=e.y,t.pivot.set(0,0),t.rotation=Math.atan2(n.y-e.y,n.x-e.x),t.interactive=!0,t.buttonMode=!0;var i=new h.e(h.f.WHITE),a=Math.max(Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2)),0);i.x=1,i.y=1,i.width=a,i.height=1,i.tint=65280,t.addChild(i),M.addChild(t)};Object(s.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){p.loader.add(v,"https://gist.githubusercontent.com/zakjan/b61c0a26d297edf0c09a066712680f37/raw/8cdda3c21ba3668c3dd022efac6d7f740c9f1e18/HelveticaRegular.fnt").load(e)}));case 2:return e.next=4,new x.a("Material Icons").load().catch((function(){return window.FontFaceObserver}));case 4:for(S.forEach(j),n=0;n<600;n++)k(S[n],S[n+1]);case 6:case"end":return e.stop()}}),e)})))();var z=t(10);var O=function(){return Object(i.useEffect)((function(){m||(m=window.requestAnimationFrame((function(){p.render(),m=void 0})))})),Object(z.jsx)("div",{id:"app",children:"App"})};d.a.render(Object(z.jsx)(a.a.StrictMode,{children:Object(z.jsx)(O,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.7aea0ffb.chunk.js.map