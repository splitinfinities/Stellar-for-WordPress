import{r as t,h as s,g as e,e as i}from"./p-378b4685.js";import"./p-20de5b5b.js";import{A as o}from"./p-b4a3d11f.js";import{m as n,a,s as r,b as h,c,d as l,h as u,e as p,f as d,g as f,l as g}from"./p-7021fe2a.js";import{s as y,a as m,b,g as w,i as P,c as v}from"./p-2e2cd18e.js";const O=class{constructor(s){t(this,s),this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}computeMatch(t){const s=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(t&&!s)return this.previousMatch=this.match,this.match=n(t.pathname,{path:this.url,exact:this.exact,strict:!0})}async loadCompleted(){let t={};this.history&&this.history.location.hash?t={scrollToId:this.history.location.hash.substr(1)}:this.scrollTopOffset&&(t={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(t):this.match&&!a(this.match,this.previousMatch)&&this.routeViewsUpdated&&this.routeViewsUpdated(t)}async componentDidUpdate(){await this.loadCompleted()}async componentDidLoad(){await this.loadCompleted()}render(){if(!this.match||!this.history)return null;const t=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},t,{component:this.component})):this.component?s(this.component,Object.assign({},t)):void 0}get el(){return e(this)}static get watchers(){return{location:["computeMatch"]}}static get style(){return"stencil-route.inactive{display:none}"}};o.injectProps(O,["location","history","historyType","routeViewsUpdated"]);const j=t=>"STENCIL-ROUTE"===t.tagName,L=class{constructor(s){t(this,s),this.group=((1e17*Math.random()).toString().match(/.{4}/g)||[]).join("-"),this.subscribers=[],this.queue=i(this,"queue")}componentWillLoad(){null!=this.location&&this.regenerateSubscribers(this.location)}async regenerateSubscribers(t){if(null==t)return;let s=-1;if(this.subscribers=Array.prototype.slice.call(this.el.children).filter(j).map((e,i)=>{const o=n(t.pathname,{path:e.url,exact:e.exact,strict:!0});return o&&-1===s&&(s=i),{el:e,match:o}}),-1===s)return;if(this.activeIndex===s)return void(this.subscribers[s].el.match=this.subscribers[s].match);this.activeIndex=s;const e=this.subscribers[this.activeIndex];this.scrollTopOffset&&(e.el.scrollTopOffset=this.scrollTopOffset),e.el.group=this.group,e.el.match=e.match,e.el.componentUpdated=t=>{this.queue.write(()=>{this.subscribers.forEach((t,s)=>{if(t.el.componentUpdated=void 0,s===this.activeIndex)return t.el.style.display="";this.scrollTopOffset&&(t.el.scrollTopOffset=this.scrollTopOffset),t.el.group=this.group,t.el.match=null,t.el.style.display="none"})}),this.routeViewsUpdated&&this.routeViewsUpdated(Object.assign({scrollTopOffset:this.scrollTopOffset},t))}}render(){return s("slot",null)}get el(){return e(this)}static get watchers(){return{location:["regenerateSubscribers"]}}};o.injectProps(L,["location","routeViewsUpdated"]);const S=(t,...s)=>{t||console.warn(...s)},U=()=>{let t,s=[];return{setPrompt:s=>(S(null==t,"A history supports only one prompt at a time"),t=s,()=>{t===s&&(t=null)}),confirmTransitionTo:(s,e,i,o)=>{if(null!=t){const n="function"==typeof t?t(s,e):t;"string"==typeof n?"function"==typeof i?i(n,o):(S(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),o(!0)):o(!1!==n)}else o(!0)},appendListener:t=>{let e=!0;const i=(...s)=>{e&&t(...s)};return s.push(i),()=>{e=!1,s=s.filter(t=>t!==i)}},notifyListeners:(...t)=>{s.forEach(s=>s(...t))}}},H=(t,s="scrollPositions")=>{let e=new Map;const i=(s,i)=>{if(e.set(s,i),y(t,"sessionStorage")){const s=[];e.forEach((t,e)=>{s.push([e,t])}),t.sessionStorage.setItem("scrollPositions",JSON.stringify(s))}};if(y(t,"sessionStorage")){const i=t.sessionStorage.getItem(s);e=i?new Map(JSON.parse(i)):e}return"scrollRestoration"in t.history&&(history.scrollRestoration="manual"),{set:i,get:t=>e.get(t),has:t=>e.has(t),capture:s=>{i(s,[t.scrollX,t.scrollY])}}},T={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+f(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:f,decodePath:h},slash:{encodePath:h,decodePath:h}},k=(t,s)=>{const e=0==t.pathname.indexOf(s)?"/"+t.pathname.slice(s.length):t.pathname;return Object.assign({},t,{pathname:e})},E={browser:(t,s={})=>{let e=!1;const i=t.history,o=t.location,n=t.navigator,a=m(t),f=!b(n),g=H(t),y=null!=s.forceRefresh&&s.forceRefresh,v=null!=s.getUserConfirmation?s.getUserConfirmation:w,O=null!=s.keyLength?s.keyLength:6,j=s.basename?r(h(s.basename)):"",L=()=>{try{return t.history.state||{}}catch(s){return{}}},T=t=>{t=t||{};const{key:s,state:e}=t,{pathname:i,search:n,hash:a}=o;let r=i+n+a;return S(!j||u(r,j),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+r+'" to begin with "'+j+'".'),j&&(r=p(r,j)),c(r,e,s||l(O))},k=U(),E=t=>{g.capture(D.location.key),Object.assign(D,t),D.location.scrollPosition=g.get(D.location.key),D.length=i.length,k.notifyListeners(D.location,D.action)},A=t=>{P(n,t)||R(T(t.state))},C=()=>{R(T(L()))},R=t=>{if(e)e=!1,E();else{const s="POP";k.confirmTransitionTo(t,s,v,e=>{e?E({action:s,location:t}):M(t)})}},M=t=>{let s=B.indexOf(D.location.key),i=B.indexOf(t.key);-1===s&&(s=0),-1===i&&(i=0);const o=s-i;o&&(e=!0,V(o))},x=T(L());let B=[x.key],Y=0,_=!1;const N=t=>j+d(t),V=t=>{i.go(t)},q=s=>{Y+=s,1===Y?(t.addEventListener("popstate",A),f&&t.addEventListener("hashchange",C)):0===Y&&(t.removeEventListener("popstate",A),f&&t.removeEventListener("hashchange",C))},D={length:i.length,action:"POP",location:x,createHref:N,push:(t,s)=>{S(!("object"==typeof t&&void 0!==t.state&&void 0!==s),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const e=c(t,s,l(O),D.location);k.confirmTransitionTo(e,"PUSH",v,t=>{if(!t)return;const s=N(e),{key:n,state:r}=e;if(a)if(i.pushState({key:n,state:r},"",s),y)o.href=s;else{const t=B.indexOf(D.location.key),s=B.slice(0,-1===t?0:t+1);s.push(e.key),B=s,E({action:"PUSH",location:e})}else S(void 0===r,"Browser history cannot push state in browsers that do not support HTML5 history"),o.href=s})},replace:(t,s)=>{S(!("object"==typeof t&&void 0!==t.state&&void 0!==s),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const e=c(t,s,l(O),D.location);k.confirmTransitionTo(e,"REPLACE",v,t=>{if(!t)return;const s=N(e),{key:n,state:r}=e;if(a)if(i.replaceState({key:n,state:r},"",s),y)o.replace(s);else{const t=B.indexOf(D.location.key);-1!==t&&(B[t]=e.key),E({action:"REPLACE",location:e})}else S(void 0===r,"Browser history cannot replace state in browsers that do not support HTML5 history"),o.replace(s)})},go:V,goBack:()=>V(-1),goForward:()=>V(1),block:(t="")=>{const s=k.setPrompt(t);return _||(q(1),_=!0),()=>(_&&(_=!1,q(-1)),s())},listen:t=>{const s=k.appendListener(t);return q(1),()=>{q(-1),s()}},win:t};return D},hash:(t,s={})=>{let e=!1,i=null,o=0,n=!1;const a=t.location,f=t.history,y=v(t.navigator),m=null!=s.keyLength?s.keyLength:6,{getUserConfirmation:b=w,hashType:P="slash"}=s,O=s.basename?r(h(s.basename)):"",{encodePath:j,decodePath:L}=T[P],H=()=>{const t=a.href,s=t.indexOf("#");return-1===s?"":t.substring(s+1)},k=t=>{const s=a.href.indexOf("#");a.replace(a.href.slice(0,s>=0?s:0)+"#"+t)},E=()=>{let t=L(H());return S(!O||u(t,O),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+O+'".'),O&&(t=p(t,O)),c(t,void 0,l(m))},A=U(),C=t=>{Object.assign(D,t),D.length=f.length,A.notifyListeners(D.location,D.action)},R=()=>{const t=H(),s=j(t);if(t!==s)k(s);else{const t=E(),s=D.location;if(!e&&g(s,t))return;if(i===d(t))return;i=null,M(t)}},M=t=>{if(e)e=!1,C();else{const s="POP";A.confirmTransitionTo(t,s,b,e=>{e?C({action:s,location:t}):x(t)})}},x=t=>{let s=N.lastIndexOf(d(D.location)),i=N.lastIndexOf(d(t));-1===s&&(s=0),-1===i&&(i=0);const o=s-i;o&&(e=!0,V(o))},B=H(),Y=j(B);B!==Y&&k(Y);const _=E();let N=[d(_)];const V=t=>{S(y,"Hash history go(n) causes a full page reload in this browser"),f.go(t)},q=(t,s)=>{o+=s,1===o?t.addEventListener("hashchange",R):0===o&&t.removeEventListener("hashchange",R)},D={length:f.length,action:"POP",location:_,createHref:t=>"#"+j(O+d(t)),push:(t,s)=>{S(void 0===s,"Hash history cannot push state; it is ignored");const e=c(t,void 0,l(m),D.location);A.confirmTransitionTo(e,"PUSH",b,t=>{if(!t)return;const s=d(e),o=j(O+s);if(H()!==o){i=s,(t=>{a.hash=t})(o);const t=N.lastIndexOf(d(D.location)),n=N.slice(0,-1===t?0:t+1);n.push(s),N=n,C({action:"PUSH",location:e})}else S(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),C()})},replace:(t,s)=>{S(void 0===s,"Hash history cannot replace state; it is ignored");const e=c(t,void 0,l(m),D.location);A.confirmTransitionTo(e,"REPLACE",b,t=>{if(!t)return;const s=d(e),o=j(O+s);H()!==o&&(i=s,k(o));const n=N.indexOf(d(D.location));-1!==n&&(N[n]=s),C({action:"REPLACE",location:e})})},go:V,goBack:()=>V(-1),goForward:()=>V(1),block:(s="")=>{const e=A.setPrompt(s);return n||(q(t,1),n=!0),()=>(n&&(n=!1,q(t,-1)),e())},listen:s=>{const e=A.appendListener(s);return q(t,1),()=>{q(t,-1),e()}},win:t};return D}},A=class{constructor(s){t(this,s),this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=(t={})=>{if(this.history&&t.scrollToId&&"browser"===this.historyType){const s=this.history.win.document.getElementById(t.scrollToId);if(s)return s.scrollIntoView()}this.scrollTo(t.scrollTopOffset||this.scrollTopOffset)},this.isServer=i(this,"isServer"),this.queue=i(this,"queue")}componentWillLoad(){this.history=E[this.historyType](this.el.ownerDocument.defaultView),this.history.listen(t=>{t=k(t,this.root),this.location=t}),this.location=k(this.history.location,this.root)}scrollTo(t){const s=this.history;if(null!=t&&!this.isServer&&s)return"POP"===s.action&&Array.isArray(s.location.scrollPosition)?this.queue.write(()=>{s&&s.location&&Array.isArray(s.location.scrollPosition)&&s.win.scrollTo(s.location.scrollPosition[0],s.location.scrollPosition[1])}):this.queue.write(()=>{s.win.scrollTo(0,t)})}render(){if(this.location&&this.history)return s(o.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},s("slot",null))}get el(){return e(this)}};export{O as stencil_route,L as stencil_route_switch,A as stencil_router};