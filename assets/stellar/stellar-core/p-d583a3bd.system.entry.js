var __awaiter=this&&this.__awaiter||function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,o){function a(t){try{c(n.next(t))}catch(e){o(e)}}function s(t){try{c(n["throw"](t))}catch(e){o(e)}}function c(t){t.done?r(t.value):i(t.value).then(a,s)}c((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return c([t,e])}}function c(a){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;i=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(a[0]===6&&r.label<o[1]){r.label=o[1];o=a;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(a);break}if(o[2])r.ops.pop();r.trys.pop();continue}a=e.call(t,r)}catch(s){a=[6,s];i=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-090ab129.system.js","./p-c4dffc26.system.js","./p-8abcb78c.system.js","./p-149c0ab3.system.js","./p-d7f8cd14.system.js"],(function(t){"use strict";var e,r,n,i,o,a,s,c,u,l,f,h,v,p,d,y,g,m,b,w,O,T;return{setters:[function(t){e=t.r;r=t.h;n=t.g;i=t.e},function(){},function(t){o=t.m;a=t.a;s=t.s;c=t.b;u=t.c;l=t.d;f=t.h;h=t.e;v=t.f;p=t.g;d=t.l},function(t){y=t.s;g=t.a;m=t.b;b=t.g;w=t.c;O=t.d},function(t){T=t.A}],execute:function(){var P="stencil-route.inactive{display:none}";var x=t("stencil_route",function(){function t(t){e(this,t);this.group=null;this.match=null;this.componentProps={};this.exact=false;this.scrollOnNextRender=false;this.previousMatch=null}t.prototype.computeMatch=function(t){var e=this.group!=null||this.el.parentElement!=null&&this.el.parentElement.tagName.toLowerCase()==="stencil-route-switch";if(!t||e){return}this.previousMatch=this.match;return this.match=o(t.pathname,{path:this.url,exact:this.exact,strict:true})};t.prototype.loadCompleted=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){t={};if(this.history&&this.history.location.hash){t={scrollToId:this.history.location.hash.substr(1)}}else if(this.scrollTopOffset){t={scrollTopOffset:this.scrollTopOffset}}if(typeof this.componentUpdated==="function"){this.componentUpdated(t)}else if(this.match&&!a(this.match,this.previousMatch)&&this.routeViewsUpdated){this.routeViewsUpdated(t)}return[2]}))}))};t.prototype.componentDidUpdate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.loadCompleted()];case 1:t.sent();return[2]}}))}))};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.loadCompleted()];case 1:t.sent();return[2]}}))}))};t.prototype.render=function(){if(!this.match||!this.history){return null}var t=Object.assign({},this.componentProps,{history:this.history,match:this.match});if(this.routeRender){return this.routeRender(Object.assign({},t,{component:this.component}))}if(this.component){var e=this.component;return r(e,Object.assign({},t))}};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["computeMatch"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return P},enumerable:true,configurable:true});return t}());T.injectProps(x,["location","history","historyType","routeViewsUpdated"]);var k=function(){return((Math.random()*1e17).toString().match(/.{4}/g)||[]).join("-")};var _=function(t,e,r){return o(t,{path:e,exact:r,strict:true})};var L=function(t){return t.tagName==="STENCIL-ROUTE"};var j=t("stencil_route_switch",function(){function t(t){e(this,t);this.group=k();this.subscribers=[];this.queue=i(this,"queue")}t.prototype.componentWillLoad=function(){if(this.location!=null){this.regenerateSubscribers(this.location)}};t.prototype.regenerateSubscribers=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r;var n=this;return __generator(this,(function(i){if(t==null){return[2]}e=-1;this.subscribers=Array.prototype.slice.call(this.el.children).filter(L).map((function(r,n){var i=_(t.pathname,r.url,r.exact);if(i&&e===-1){e=n}return{el:r,match:i}}));if(e===-1){return[2]}if(this.activeIndex===e){this.subscribers[e].el.match=this.subscribers[e].match;return[2]}this.activeIndex=e;r=this.subscribers[this.activeIndex];if(this.scrollTopOffset){r.el.scrollTopOffset=this.scrollTopOffset}r.el.group=this.group;r.el.match=r.match;r.el.componentUpdated=function(t){n.queue.write((function(){n.subscribers.forEach((function(t,e){t.el.componentUpdated=undefined;if(e===n.activeIndex){return t.el.style.display=""}if(n.scrollTopOffset){t.el.scrollTopOffset=n.scrollTopOffset}t.el.group=n.group;t.el.match=null;t.el.style.display="none"}))}));if(n.routeViewsUpdated){n.routeViewsUpdated(Object.assign({scrollTopOffset:n.scrollTopOffset},t))}};return[2]}))}))};t.prototype.render=function(){return r("slot",null)};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["regenerateSubscribers"]}},enumerable:true,configurable:true});return t}());T.injectProps(j,["location","routeViewsUpdated"]);var S=function(t){var e=[];for(var r=1;r<arguments.length;r++){e[r-1]=arguments[r]}if(!t){console.warn.apply(console,e)}};var U=function(){var t;var e=[];var r=function(e){S(t==null,"A history supports only one prompt at a time");t=e;return function(){if(t===e){t=null}}};var n=function(e,r,n,i){if(t!=null){var o=typeof t==="function"?t(e,r):t;if(typeof o==="string"){if(typeof n==="function"){n(o,i)}else{S(false,"A history needs a getUserConfirmation function in order to use a prompt message");i(true)}}else{i(o!==false)}}else{i(true)}};var i=function(t){var r=true;var n=function(){var e=[];for(var n=0;n<arguments.length;n++){e[n]=arguments[n]}if(r){t.apply(void 0,e)}};e.push(n);return function(){r=false;e=e.filter((function(t){return t!==n}))}};var o=function(){var t=[];for(var r=0;r<arguments.length;r++){t[r]=arguments[r]}e.forEach((function(e){return e.apply(void 0,t)}))};return{setPrompt:r,confirmTransitionTo:n,appendListener:i,notifyListeners:o}};var E=function(t,e){if(e===void 0){e="scrollPositions"}var r=new Map;var n=function(e,n){r.set(e,n);if(y(t,"sessionStorage")){var i=[];r.forEach((function(t,e){i.push([e,t])}));t.sessionStorage.setItem("scrollPositions",JSON.stringify(i))}};var i=function(t){return r.get(t)};var o=function(t){return r.has(t)};var a=function(e){n(e,[t.scrollX,t.scrollY])};if(y(t,"sessionStorage")){var s=t.sessionStorage.getItem(e);r=s?new Map(JSON.parse(s)):r}if("scrollRestoration"in t.history){history.scrollRestoration="manual"}return{set:n,get:i,has:o,capture:a}};var I="popstate";var A="hashchange";var R=function(t,e){if(e===void 0){e={}}var r=false;var n=t.history;var i=t.location;var o=t.navigator;var a=g(t);var p=!m(o);var d=E(t);var y=e.forceRefresh!=null?e.forceRefresh:false;var O=e.getUserConfirmation!=null?e.getUserConfirmation:b;var T=e.keyLength!=null?e.keyLength:6;var P=e.basename?s(c(e.basename)):"";var x=function(){try{return t.history.state||{}}catch(e){return{}}};var k=function(t){t=t||{};var e=t.key,r=t.state;var n=i.pathname,o=i.search,a=i.hash;var s=n+o+a;S(!P||f(s,P),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+s+'" to begin with "'+P+'".');if(P){s=h(s,P)}return u(s,r,e||l(T))};var _=U();var L=function(t){d.capture(K.location.key);Object.assign(K,t);K.location.scrollPosition=d.get(K.location.key);K.length=n.length;_.notifyListeners(K.location,K.action)};var j=function(t){if(!w(o,t)){C(k(t.state))}};var R=function(){C(k(x()))};var C=function(t){if(r){r=false;L()}else{var e="POP";_.confirmTransitionTo(t,e,O,(function(r){if(r){L({action:e,location:t})}else{H(t)}}))}};var H=function(t){var e=K.location;var n=M.indexOf(e.key);var i=M.indexOf(t.key);if(n===-1){n=0}if(i===-1){i=0}var o=n-i;if(o){r=true;F(o)}};var V=k(x());var M=[V.key];var q=0;var N=false;var B=function(t){return P+v(t)};var Y=function(t,e){S(!(typeof t==="object"&&t.state!==undefined&&e!==undefined),"You should avoid providing a 2nd state argument to push when the 1st "+"argument is a location-like object that already has state; it is ignored");var r="PUSH";var o=u(t,e,l(T),K.location);_.confirmTransitionTo(o,r,O,(function(t){if(!t){return}var e=B(o);var s=o.key,c=o.state;if(a){n.pushState({key:s,state:c},"",e);if(y){i.href=e}else{var u=M.indexOf(K.location.key);var l=M.slice(0,u===-1?0:u+1);l.push(o.key);M=l;L({action:r,location:o})}}else{S(c===undefined,"Browser history cannot push state in browsers that do not support HTML5 history");i.href=e}}))};var D=function(t,e){S(!(typeof t==="object"&&t.state!==undefined&&e!==undefined),"You should avoid providing a 2nd state argument to replace when the 1st "+"argument is a location-like object that already has state; it is ignored");var r="REPLACE";var o=u(t,e,l(T),K.location);_.confirmTransitionTo(o,r,O,(function(t){if(!t){return}var e=B(o);var s=o.key,c=o.state;if(a){n.replaceState({key:s,state:c},"",e);if(y){i.replace(e)}else{var u=M.indexOf(K.location.key);if(u!==-1){M[u]=o.key}L({action:r,location:o})}}else{S(c===undefined,"Browser history cannot replace state in browsers that do not support HTML5 history");i.replace(e)}}))};var F=function(t){n.go(t)};var J=function(){return F(-1)};var W=function(){return F(1)};var G=function(e){q+=e;if(q===1){t.addEventListener(I,j);if(p){t.addEventListener(A,R)}}else if(q===0){t.removeEventListener(I,j);if(p){t.removeEventListener(A,R)}}};var X=function(t){if(t===void 0){t=""}var e=_.setPrompt(t);if(!N){G(1);N=true}return function(){if(N){N=false;G(-1)}return e()}};var z=function(t){var e=_.appendListener(t);G(1);return function(){G(-1);e()}};var K={length:n.length,action:"POP",location:V,createHref:B,push:Y,replace:D,go:F,goBack:J,goForward:W,block:X,listen:z,win:t};return K};var C="hashchange";var H={hashbang:{encodePath:function(t){return t.charAt(0)==="!"?t:"!/"+p(t)},decodePath:function(t){return t.charAt(0)==="!"?t.substr(1):t}},noslash:{encodePath:p,decodePath:c},slash:{encodePath:c,decodePath:c}};var V=function(t,e){if(e===void 0){e={}}var r=false;var n=null;var i=0;var o=false;var a=t.location;var p=t.history;var y=O(t.navigator);var g=e.keyLength!=null?e.keyLength:6;var m=e.getUserConfirmation,w=m===void 0?b:m,T=e.hashType,P=T===void 0?"slash":T;var x=e.basename?s(c(e.basename)):"";var k=H[P],_=k.encodePath,L=k.decodePath;var j=function(){var t=a.href;var e=t.indexOf("#");return e===-1?"":t.substring(e+1)};var E=function(t){return a.hash=t};var I=function(t){var e=a.href.indexOf("#");a.replace(a.href.slice(0,e>=0?e:0)+"#"+t)};var A=function(){var t=L(j());S(!x||f(t,x),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+t+'" to begin with "'+x+'".');if(x){t=h(t,x)}return u(t,undefined,l(g))};var R=U();var V=function(t){Object.assign(tt,t);tt.length=p.length;R.notifyListeners(tt.location,tt.action)};var M=function(){var t=j();var e=_(t);if(t!==e){I(e)}else{var i=A();var o=tt.location;if(!r&&d(o,i)){return}if(n===v(i)){return}n=null;q(i)}};var q=function(t){if(r){r=false;V()}else{var e="POP";R.confirmTransitionTo(t,e,w,(function(r){if(r){V({action:e,location:t})}else{N(t)}}))}};var N=function(t){var e=tt.location;var n=F.lastIndexOf(v(e));var i=F.lastIndexOf(v(t));if(n===-1){n=0}if(i===-1){i=0}var o=n-i;if(o){r=true;X(o)}};var B=j();var Y=_(B);if(B!==Y){I(Y)}var D=A();var F=[v(D)];var J=function(t){return"#"+_(x+v(t))};var W=function(t,e){S(e===undefined,"Hash history cannot push state; it is ignored");var r="PUSH";var i=u(t,undefined,l(g),tt.location);R.confirmTransitionTo(i,r,w,(function(t){if(!t){return}var e=v(i);var o=_(x+e);var a=j()!==o;if(a){n=e;E(o);var s=F.lastIndexOf(v(tt.location));var c=F.slice(0,s===-1?0:s+1);c.push(e);F=c;V({action:r,location:i})}else{S(false,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack");V()}}))};var G=function(t,e){S(e===undefined,"Hash history cannot replace state; it is ignored");var r="REPLACE";var i=u(t,undefined,l(g),tt.location);R.confirmTransitionTo(i,r,w,(function(t){if(!t){return}var e=v(i);var o=_(x+e);var a=j()!==o;if(a){n=e;I(o)}var s=F.indexOf(v(tt.location));if(s!==-1){F[s]=e}V({action:r,location:i})}))};var X=function(t){S(y,"Hash history go(n) causes a full page reload in this browser");p.go(t)};var z=function(){return X(-1)};var K=function(){return X(1)};var Q=function(t,e){i+=e;if(i===1){t.addEventListener(C,M)}else if(i===0){t.removeEventListener(C,M)}};var Z=function(e){if(e===void 0){e=""}var r=R.setPrompt(e);if(!o){Q(t,1);o=true}return function(){if(o){o=false;Q(t,-1)}return r()}};var $=function(e){var r=R.appendListener(e);Q(t,1);return function(){Q(t,-1);r()}};var tt={length:p.length,action:"POP",location:D,createHref:J,push:W,replace:G,go:X,goBack:z,goForward:K,block:Z,listen:$,win:t};return tt};var M=function(t,e){var r=t.pathname.indexOf(e)==0?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:r})};var q={browser:R,hash:V};var N=t("stencil_router",function(){function t(t){var r=this;e(this,t);this.root="/";this.historyType="browser";this.titleSuffix="";this.routeViewsUpdated=function(t){if(t===void 0){t={}}if(r.history&&t.scrollToId&&r.historyType==="browser"){var e=r.history.win.document.getElementById(t.scrollToId);if(e){return e.scrollIntoView()}}r.scrollTo(t.scrollTopOffset||r.scrollTopOffset)};this.isServer=i(this,"isServer");this.queue=i(this,"queue")}t.prototype.componentWillLoad=function(){var t=this;this.history=q[this.historyType](this.el.ownerDocument.defaultView);this.history.listen((function(e){e=M(e,t.root);t.location=e}));this.location=M(this.history.location,this.root)};t.prototype.scrollTo=function(t){var e=this.history;if(t==null||this.isServer||!e){return}if(e.action==="POP"&&Array.isArray(e.location.scrollPosition)){return this.queue.write((function(){if(e&&e.location&&Array.isArray(e.location.scrollPosition)){e.win.scrollTo(e.location.scrollPosition[0],e.location.scrollPosition[1])}}))}return this.queue.write((function(){e.win.scrollTo(0,t)}))};t.prototype.render=function(){if(!this.location||!this.history){return}var t={historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated};return r(T.Provider,{state:t},r("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});return t}())}}}));