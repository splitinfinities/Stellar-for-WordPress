/*!
 * (C) Split Infinities https://splitinfinities.com - MIT License
 * StellarCore: Core, es2017
 * Built with http://stenciljs.com
 */
function e(e,t){return"sc-"+e.t+(t&&t!==l?"-"+t:"")}function t(e,t){return e+(t?"-h":"-s")}function n(e,t){let n,o,i=null,l=!1,s=!1,r=arguments.length;for(;r-- >2;)g.push(arguments[r]);for(;g.length>0;){let t=g.pop();if(t&&void 0!==t.pop)for(r=t.length;r--;)g.push(t[r]);else"boolean"==typeof t&&(t=null),(s="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(s=!1)),s&&l?i[i.length-1].vtext+=t:null===i?i=[s?{vtext:t}:t]:i.push(s?{vtext:t}:t),l=s}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(r in t.class)t.class[r]&&g.push(r);t.class=g.join(" "),g.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,i||[],k):{vtag:e,vchildren:i,vtext:void 0,vattrs:t,vkey:n,vname:o,o:void 0,i:!1}}function o(e,t,n={}){let o=Array.isArray(t)?t:[t];const l=e.document,s=n.hydratedCssClass||"hydrated",r=n.exclude;r&&(o=o.filter(e=>-1===r.indexOf(e[0])));const c=o.map(e=>e[0]);if(c.length>0){const e=l.createElement("style");e.innerHTML=c.join()+"{visibility:hidden}."+s+"{visibility:inherit}",e.setAttribute("data-styles",""),l.head.insertBefore(e,l.head.firstChild)}const a=n.namespace||"StellarCore";return q||(q=!0,function f(e,t,n){(e["s-apps"]=e["s-apps"]||[]).push(t),n.componentOnReady||(n.componentOnReady=function t(){function n(t){if(o.nodeName.indexOf("-")>0){for(var n=e["s-apps"],i=0,l=0;l<n.length;l++)if(e[n[l]].componentOnReady){if(e[n[l]].componentOnReady(o,t))return;i++}if(i<n.length)return void(e["s-cr"]=e["s-cr"]||[]).push([o,t])}t(null)}var o=this;return e.Promise?new e.Promise(n):{then:n}})}(e,a,e.HTMLElement.prototype)),applyPolyfills(e).then(()=>{if(!H[a]){const t={},r=n.resourcesUrl||"./";i(a,t,e,l,r,s),H[a]=D(a,t,e,l,r,s,o)}(function t(){o.forEach(t=>{let n;!function o(e){return/\{\s*\[native code\]\s*\}/.test(""+e)}(e.customElements.define)?(n=function(t){return e.HTMLElement.call(this,t)}).prototype=Object.create(e.HTMLElement.prototype,{constructor:{value:n,configurable:!0}}):n=new Function("w","return class extends w.HTMLElement{}")(e),H[a].l(function i(e){const t=j(e),n=t.s,o=u(e[0]);return t.s=(({mode:e,scoped:t})=>(function i(e,t,n){return import(
/* webpackInclude: /\.entry\.js$/ */
/* webpackMode: "lazy" */
`./build/${e}${t?".sc":""}.entry.js`).then(e=>e[n])})("string"==typeof n?n:n[e],t,o)),t}(t),n)})})()})}var i=function(){};function applyPolyfills(){return Promise.resolve()}const l="$",s={},r={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},c=(t,n,o,i)=>{let s=o.t+l,r=o[s];if((2===o.u||1===o.u&&!t.v.p)&&(i["s-sc"]=r?e(o,i.mode):e(o)),r){let e=n.m.head;if(n.p)if(1===o.u)e=i.shadowRoot;else{const t=i.getRootNode();t.host&&(e=t)}let l=t.M.get(e);if(l||t.M.set(e,l={}),!l[s]){let t;{t=r.content.cloneNode(!0),l[s]=!0;const o=e.querySelectorAll("[data-styles]");n.g(e,t,o.length&&o[o.length-1].nextSibling||e.firstChild)}}}},a=e=>null!=e,f=e=>e.toLowerCase(),u=e=>f(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),p=()=>{},d=(e,t,n,o="boolean"==typeof n,i)=>{i=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?i?e.removeAttributeNS(b,f(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),i?e.setAttributeNS(b,f(t),n):e.setAttribute(t,n))},b="http://www.w3.org/1999/xlink",v=(e,t,n,o,i,l,s)=>{if("class"!==n||l)if("style"===n){for(const e in o)i&&null!=i[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in i)o&&i[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,i[e]):t.style[e]=i[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!l&&(n in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=e.k(t);o&&o.j&&o.j[n]?(m(t,n,i),s&&o.j[n].C&&d(t,o.j[n].A,i,4===o.j[n].O)):"ref"!==n&&(m(t,n,null==i?"":i),null!=i&&!1!==i||e.v._(t,n))}else null!=i&&"key"!==n?d(t,n,i):(l||e.v.S(t,n)&&(null==i||!1===i))&&e.v._(t,n);else n=f(n)in t?f(n.substring(2)):f(n[2])+n.substring(3),i?i!==o&&e.v.W(t,n,i,0):e.v.N(t,n,0);else if(o!==i){const e=y(o),n=y(i),l=e.filter(e=>!n.includes(e)),s=y(t.className).filter(e=>!l.includes(e)),r=n.filter(t=>!e.includes(t)&&!s.includes(t));s.push(...r),t.className=s.join(" ")}},y=e=>null==e||""===e?[]:e.trim().split(/\s+/),m=(e,t,n)=>{try{e[t]=n}catch(e){}},h=(e,t,n,o,i)=>{const l=11===n.o.nodeType&&n.o.host?n.o.host:n.o,r=t&&t.vattrs||s,c=n.vattrs||s;for(i in r)c&&null!=c[i]||null==r[i]||v(e,l,i,r[i],void 0,o,n.i);for(i in c)i in r&&c[i]===("value"===i||"checked"===i?l[i]:r[i])||v(e,l,i,r[i],c[i],o,n.i)};let w=!1;const M=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.o),e.vchildren&&e.vchildren.forEach(e=>{M(e,t)}))},$=(e,t)=>{{let n=0,o=!1;const i=()=>t.performance.now(),l=!1!==e.asyncQueue,s=Promise.resolve(),r=[],c=[],a=[],f=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(b))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](i())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=i())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},b=()=>{n++,p(c);const t=l?i()+7*Math.ceil(n*(1/22)):Infinity;d(a,t),d(f,t),a.length>0&&(f.push(...a),a.length=0),(o=c.length+a.length+f.length>0)?e.raf(b):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){r.push(e),1===r.length&&s.then(()=>p(r))},read:u(c),write:u(a)}}},g=[],k={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},j=(e,t,n)=>{const[o,i,,l,s,r]=e,c={color:{A:"color"}};if(l)for(t=0;t<l.length;t++)c[(n=l[t])[0]]={P:n[1],C:!!n[2],A:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,O:n[4]};return{t:o,s:i,j:Object.assign({},c),u:s,L:r?r.map(C):void 0}},C=e=>({R:e[0],T:e[1],D:!!e[2],H:!!e[3],q:!!e[4]}),E=(e,t)=>a(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t,A=(e,t,n)=>{e.B.add(t),e.F.has(t)||(e.F.set(t,!0),e.I?e.queue.write(()=>O(e,t,n)):e.queue.tick(()=>O(e,t,n)))},O=async(e,o,i,l,s,r)=>{if(e.F.delete(o),!e.U.has(o)){if(s=e.Y.get(o)){if(s)try{s.componentWillUpdate&&await s.componentWillUpdate()}catch(t){e.Z(t,5,o)}}else{if((r=e.G.get(o))&&!r["s-rn"])return void(r["s-rc"]=r["s-rc"]||[]).push(()=>{O(e,o,i)});if(s=P(e,o,e.J.get(o),i))try{s.componentWillLoad&&await s.componentWillLoad()}catch(t){e.Z(t,3,o)}}((e,o,i,l)=>{try{const s=o.K.host,r=o.K.encapsulation,c="shadow"===r&&e.v.p;let a,f=i;if(a=((e,t,n)=>(e&&Object.keys(e).forEach(o=>{e[o].reflectToAttr&&((n=n||{})[o]=t[o])}),n))(o.K.properties,l),c&&(f=i.shadowRoot),!i["s-rn"]){e.V(e,e.v,o,i);const n=i["s-sc"];n&&(e.v.X(i,t(n,!0)),"scoped"===r&&e.v.X(i,t(n)))}if(l.render||l.hostData||s||a){e.ee=!0;const t=l.render&&l.render();let o;o=l.hostData&&l.hostData(),a&&(o=o?Object.assign(o,a):a),e.ee=!1;const s=n(null,o,t),u=e.te.get(i)||{};u.o=f,s.i=!0,e.te.set(i,e.render(i,u,s,c,r))}i["s-rn"]=!0,i["s-rc"]&&(i["s-rc"].forEach(e=>e()),i["s-rc"]=null)}catch(t){e.ee=!1,e.Z(t,8,i,!0)}})(e,e.k(o),o,s),o["s-init"]()}},_=(e,t,n,o,i,l,s,r,c)=>{if(t.type||t.state){const f=e.ne.get(n);t.state||(!t.attr||void 0!==f[i]&&""!==f[i]||(r=l&&l.oe)&&a(c=r[t.attr])&&(f[i]=E(t.type,c)),n.hasOwnProperty(i)&&(void 0===f[i]&&(f[i]=E(t.type,n[i])),"mode"!==i&&delete n[i])),o.hasOwnProperty(i)&&void 0===f[i]&&(f[i]=o[i]),t.watchCallbacks&&(f[x+i]=t.watchCallbacks.slice()),N(o,i,function f(t){return(t=e.ne.get(e.ie.get(this)))&&t[i]},function u(n,o){(o=e.ie.get(this))&&(t.state||t.mutable)&&S(e,o,i,n,s)})}else if(t.elementRef)W(o,i,n);else if(t.method)W(n,i,o[i].bind(o));else if(t.context){const l=e.le(t.context);void 0!==l&&W(o,i,l.getContext&&l.getContext(n)||l)}},S=(e,t,n,o,i,l,s)=>{(s=e.ne.get(t))||e.ne.set(t,s={});const r=s[n];if(o!==r&&(s[n]=o,l=e.Y.get(t))){{const e=s[x+n];if(e)for(let t=0;t<e.length;t++)try{l[e[t]].call(l,o,r,n)}catch(e){console.error(e)}}!e.ee&&t["s-rn"]&&A(e,t,i)}},W=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,value:n})},N=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},x="wc-",P=(e,t,n,o,i,l,s,r)=>{try{i=new(l=e.k(t).K),((e,t,n,o,i,l)=>{e.ie.set(o,n),e.ne.has(n)||e.ne.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,s])=>{_(e,s,n,o,t,i,l)})})(e,l,t,i,n,o),function c(e,t,n){if(t){const o=e.ie.get(n);t.forEach(t=>{n[t.method]={emit:n=>e.se(o,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:n})}})}}(e,l.events,i);try{if(s=e.re.get(t)){for(r=0;r<s.length;r+=2)i[s[r]](s[r+1]);e.re.delete(t)}}catch(n){e.Z(n,2,t)}}catch(n){i={},e.Z(n,7,t,!0)}return e.Y.set(t,i),i},L=(e,t,n,o,i,l)=>{if(e.B.delete(t),(i=e.G.get(t))&&((o=i["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||i["s-init"]&&i["s-init"]()),e.G.delete(t)),e.ce.length&&!e.B.size)for(;l=e.ce.shift();)l()},R=(e,t,n,o)=>{t.forEach(([t,i])=>{const l=i.P;3&l?N(n,t,function n(){return(e.ne.get(this)||{})[t]},function n(l){S(e,this,t,E(i.O,l),o)}):32===l&&W(n,t,p)})},T=(e,t,n,o,i)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.ae.has(n)||(e.ae.set(n,!0),function o(e,t){const n=e.k(t);n.L&&n.L.forEach(n=>{n.D||e.v.W(t,n.R,function o(e,t,n,i){return o=>{(i=e.Y.get(t))?i[n](o):((i=e.re.get(t)||[]).push(n,o),e.re.set(t,i))}}(e,t,n.T),1,n.q,n.H)})}(e,n)),e.U.delete(n),e.fe.has(n)||(e.ue=!0,e.B.add(n),e.fe.set(n,!0),((e,t,n)=>{for(n=t;n=e.v.pe(n);)if(e.de(n)){e.be.has(t)||(e.G.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.J.set(n,((e,t,n,o,i)=>(n.mode||(n.mode=e.ve(n)),n["s-cr"]||e.ye(n,"ssrv")||e.p&&1===t.u||(n["s-cr"]=e.me(""),n["s-cr"]["s-cn"]=!0,e.g(n,n["s-cr"],e.he(n)[0])),1===t.u&&e.p&&!n.shadowRoot&&e.we(n,{mode:"open"}),o={oe:{}},t.j&&Object.keys(t.j).forEach(l=>{(i=t.j[l].A)&&(o.oe[i]=e.ye(n,i))}),o))(e.v,t,n)),e.Me(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{if(!e.$e&&((e,t)=>{for(;t;){if(!e.ge(t))return 9!==e.ke(t);t=e.ge(t)}})(e.v,t)){e.U.set(t,!0),L(e,t),M(e.te.get(t),!0);{const n=e.Y.get(t);n&&n.componentDidUnload&&n.componentDidUnload()}e.v.N(t),e.ae.delete(t),[e.G,e.je,e.J].forEach(e=>e.delete(t))}})(e,this)},n["s-init"]=function(){((e,t,n,o,i,l,s)=>{if((i=e.Y.get(t))&&!e.U.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.be.set(t,!0),(s=e.Ce.has(t))||(e.Ce.set(t,!0),t["s-ld"]=void 0,e.v.X(t,n));try{M(e.te.get(t)),(l=e.je.get(t))&&(l.forEach(e=>e(t)),e.je.delete(t)),!s&&i.componentDidLoad?i.componentDidLoad():s&&i.componentDidUpdate&&i.componentDidUpdate()}catch(n){e.Z(n,4,t)}L(e,t)}})(e,this,o)},n.forceUpdate=function(){A(e,this,i)},t.j){const o=Object.entries(t.j);{let e={};o.forEach(([t,{A:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function i(e,t,n,o){const i=e[f(n)];i&&(t[i]=(null!==o||"boolean"!=typeof t[i])&&o)})(e,this,t,o)}}R(e,o,n,i)}},D=(e,t,o,i,s,u)=>{const p=o.performance,d={html:{}},b=o[e]=o[e]||{},v=((e,t,n)=>{const o=new WeakMap,i={m:n,p:!!n.documentElement.attachShadow,Ee:!1,ke:e=>e.nodeType,Ae:e=>n.createElement(e),Oe:(e,t)=>n.createElementNS(e,t),me:e=>n.createTextNode(e),_e:e=>n.createComment(e),g:(e,t,n)=>e.insertBefore(t,n),Se:e=>e.remove(),We:(e,t)=>e.appendChild(t),X:(e,t)=>{e.classList.add(t)},he:e=>e.childNodes,ge:e=>e.parentNode,Ne:e=>e.nextSibling,xe:e=>e.previousSibling,Pe:e=>f(e.nodeName),Le:e=>e.textContent,Re:(e,t)=>e.textContent=t,ye:(e,t)=>e.getAttribute(t),Te:(e,t,n)=>e.setAttribute(t,n),_:(e,t)=>e.removeAttribute(t),S:(e,t)=>e.hasAttribute(t),ve:t=>t.getAttribute("mode")||(e.Context||{}).mode,De:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?i.pe(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e,W:(t,n,l,s,c,a,f,u,p,d)=>{let b=t,v=l,y=o.get(t);d=n+s,y&&y[d]&&y[d](),"string"==typeof f?b=i.De(t,f):"object"==typeof f?b=f:(p=n.split(":")).length>1&&(b=i.De(t,p[0]),n=p[1]),b&&((p=n.split(".")).length>1&&(n=p[0],v=(e=>{e.keyCode===r[p[1]]&&l(e)})),u=i.Ee?{capture:!!c,passive:!!a}:!!c,e.ael(b,n,v,u),y||o.set(t,y={}),y[d]=(()=>{b&&e.rel(b,n,v,u),y[d]=null}))},N:(e,t,n,i)=>{(i=o.get(e))&&(t?i[t+n]&&i[t+n]():Object.keys(i).forEach(e=>{i[e]&&i[e]()}))},He:(e,n,o,i)=>(i=new t.CustomEvent(n,o),e&&e.dispatchEvent(i),i),pe:(e,t)=>(t=i.ge(e))&&11===i.ke(t)?t.host:t,qe:(e,t,n,o)=>e.setAttributeNS(t,n,o),we:(e,t)=>e.attachShadow(t)};e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o)));try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.Ee=!0}))}catch(e){}return i})(b,o,i),y=v.m.documentElement,m=o["s-defined"]=o["s-defined"]||{},M={v,l:(e,t)=>{o.customElements.get(e.t)||(T(M,d[e.t]=e,t.prototype,u,p),t.observedAttributes=Object.values(e.j).map(e=>e.A).filter(e=>!!e),o.customElements.define(e.t,t))},k:e=>d[v.Pe(e)],le:e=>t[e],isClient:!0,de:e=>!(!m[v.Pe(e)]&&!M.k(e)),Z:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:t.queue=$(b,o),Me:(e,t)=>{{const n=!v.p,o={mode:t.mode,scoped:n};e.s(o).then(n=>{try{e.K=n,function o(e,t,n,i,s){if(i){const n=t.t+(s||l);if(!t[n]){const o=e.Ae("template");t[n]=o,o.innerHTML=`<style>${i}</style>`,e.We(e.m.head,o)}}}(v,e,e.u,n.style,n.styleMode)}catch(t){console.error(t),e.K=class{}}A(M,t,p)})}},ee:!1,I:!1,$e:!1,V:c,G:new WeakMap,M:new WeakMap,fe:new WeakMap,ae:new WeakMap,Ce:new WeakMap,be:new WeakMap,ie:new WeakMap,J:new WeakMap,Y:new WeakMap,U:new WeakMap,F:new WeakMap,je:new WeakMap,re:new WeakMap,te:new WeakMap,ne:new WeakMap,B:new Set,ce:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i,t.resourcesUrl=t.publicPath=s,t.enableListener=((e,t,n,o,i)=>(function l(e,t,n,o,i,s){if(t){const l=e.ie.get(t),r=e.k(l);if(r&&r.L)if(o){const o=r.L.find(e=>e.R===n);o&&e.v.W(l,n,e=>t[o.T](e),1,o.q,void 0===s?o.H:!!s,i)}else e.v.N(l,n,1)}})(M,e,t,n,o,i)),M.se=t.emit=((e,n,o)=>v.He(e,t.eventNameFn?t.eventNameFn(n):n,o)),b.h=n,b.Context=t,b.onReady=(()=>new Promise(e=>M.queue.write(()=>M.B.size?M.ce.push(e):e()))),M.render=((e,t)=>{let n,o,i,l,s,r,c;const f=(i,p,d,b,v,y,m,M,$)=>{if(M=p.vchildren[d],n||(l=!0,"slot"===M.vtag&&(o&&t.X(b,o+"-s"),M.vchildren?M.Be=!0:M.Fe=!0)),a(M.vtext))M.o=t.me(M.vtext);else if(M.Fe)M.o=t.me("");else{if(y=M.o=w||"svg"===M.vtag?t.Oe("http://www.w3.org/2000/svg",M.vtag):t.Ae(M.Be?"slot-fb":M.vtag),e.de(y)&&e.be.delete(c),w="svg"===M.vtag||"foreignObject"!==M.vtag&&w,h(e,null,M,w),a(o)&&y["s-si"]!==o&&t.X(y,y["s-si"]=o),M.vchildren)for(v=0;v<M.vchildren.length;++v)(m=f(i,M,v,y))&&t.We(y,m);"svg"===M.vtag&&(w=!1)}return M.o["s-hn"]=r,(M.Be||M.Fe)&&(M.o["s-sr"]=!0,M.o["s-cr"]=s,M.o["s-sn"]=M.vname||"",($=i&&i.vchildren&&i.vchildren[d])&&$.vtag===M.vtag&&i.o&&u(i.o)),M.o},u=(n,o,i,s)=>{e.$e=!0;const c=t.he(n);for(i=c.length-1;i>=0;i--)(s=c[i])["s-hn"]!==r&&s["s-ol"]&&(t.Se(s),t.g(y(s),s,v(s)),t.Se(s["s-ol"]),s["s-ol"]=null,l=!0),o&&u(s,o);e.$e=!1},p=(e,n,o,i,l,s,c,u)=>{const p=e["s-cr"];for((c=p&&t.ge(p)||e).shadowRoot&&t.Pe(c)===r&&(c=c.shadowRoot);l<=s;++l)i[l]&&(u=a(i[l].vtext)?t.me(i[l].vtext):f(null,o,l,e))&&(i[l].o=u,t.g(c,u,v(n)))},d=(e,n,o,l)=>{for(;n<=o;++n)a(e[n])&&(l=e[n].o,i=!0,l["s-ol"]?t.Se(l["s-ol"]):u(l,!0),t.Se(l))},b=(e,t)=>e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname),v=e=>e&&e["s-ol"]?e["s-ol"]:e,y=e=>t.ge(e["s-ol"]?e["s-ol"]:e),m=(n,o,i)=>{const l=o.o=n.o,s=n.vchildren,r=o.vchildren;w=o.o&&a(t.pe(o.o))&&void 0!==o.o.ownerSVGElement,w="svg"===o.vtag||"foreignObject"!==o.vtag&&w,a(o.vtext)?(i=l["s-cr"])?t.Re(t.ge(i),o.vtext):n.vtext!==o.vtext&&t.Re(l,o.vtext):("slot"!==o.vtag&&h(e,n,o,w),a(s)&&a(r)?((e,n,o,i,l,s,r,c)=>{let h=0,w=0,M=n.length-1,$=n[0],g=n[M],k=i.length-1,j=i[0],C=i[k];for(;h<=M&&w<=k;)if(null==$)$=n[++h];else if(null==g)g=n[--M];else if(null==j)j=i[++w];else if(null==C)C=i[--k];else if(b($,j))m($,j),$=n[++h],j=i[++w];else if(b(g,C))m(g,C),g=n[--M],C=i[--k];else if(b($,C))"slot"!==$.vtag&&"slot"!==C.vtag||u(t.ge($.o)),m($,C),t.g(e,$.o,t.Ne(g.o)),$=n[++h],C=i[--k];else if(b(g,j))"slot"!==$.vtag&&"slot"!==C.vtag||u(t.ge(g.o)),m(g,j),t.g(e,g.o,$.o),g=n[--M],j=i[++w];else{for(l=null,s=h;s<=M;++s)if(n[s]&&a(n[s].vkey)&&n[s].vkey===j.vkey){l=s;break}a(l)?((c=n[l]).vtag!==j.vtag?r=f(n&&n[w],o,l,e):(m(c,j),n[l]=void 0,r=c.o),j=i[++w]):(r=f(n&&n[w],o,w,e),j=i[++w]),r&&t.g(y($.o),r,v($.o))}h>M?p(e,null==i[k+1]?null:i[k+1].o,o,i,w,k):w>k&&d(n,h,M)})(l,s,o,r):a(r)?(a(n.vtext)&&t.Re(l,""),p(l,null,o,r,0,r.length-1)):a(s)&&d(s,0,s.length-1)),w&&"svg"===o.vtag&&(w=!1)},M=(e,n,o,i,l,s,r,c)=>{for(i=0,l=(o=t.he(e)).length;i<l;i++)if(n=o[i],1===t.ke(n)){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,s=0;s<l;s++)if(o[s]["s-hn"]!==n["s-hn"])if(c=t.ke(o[s]),""!==r){if(1===c&&r===t.ye(o[s],"slot")){n.hidden=!0;break}}else if(1===c||3===c&&""!==t.Le(o[s]).trim()){n.hidden=!0;break}M(n)}},$=[],g=(e,n,o,l,s,r,c,a,f,u)=>{for(s=0,r=(n=t.he(e)).length;s<r;s++){if((o=n[s])["s-sr"]&&(l=o["s-cr"]))for(a=t.he(t.ge(l)),f=o["s-sn"],c=a.length-1;c>=0;c--)(l=a[c])["s-cn"]||l["s-nr"]||l["s-hn"]===o["s-hn"]||((3===(u=t.ke(l))||8===u)&&""===f||1===u&&null===t.ye(l,"slot")&&""===f||1===u&&t.ye(l,"slot")===f)&&($.some(e=>e.Ie===l)||(i=!0,l["s-sn"]=f,$.push({Qe:o,Ie:l})));1===t.ke(o)&&g(o)}};return(a,f,u,p,d,b,v,y,h,w,k,j)=>{if(c=a,r=t.Pe(c),s=c["s-cr"],n=p,o=c["s-sc"],l=i=!1,m(f,u),l){for(g(u.o),v=0;v<$.length;v++)(y=$[v]).Ie["s-ol"]||((h=t.me(""))["s-nr"]=y.Ie,t.g(t.ge(y.Ie),y.Ie["s-ol"]=h,y.Ie));for(e.$e=!0,v=0;v<$.length;v++){for(y=$[v],k=t.ge(y.Qe),j=t.Ne(y.Qe),h=y.Ie["s-ol"];h=t.xe(h);)if((w=h["s-nr"])&&w&&w["s-sn"]===y.Ie["s-sn"]&&k===t.ge(w)&&(w=t.Ne(w))&&w&&!w["s-nr"]){j=w;break}(!j&&k!==t.ge(y.Ie)||t.Ne(y.Ie)!==j)&&y.Ie!==j&&(t.Se(y.Ie),t.g(k,y.Ie,j))}e.$e=!1}return i&&M(u.o),$.length=0,u}})(M,v),y["s-ld"]=[],y["s-rn"]=!0,y["s-init"]=(()=>{M.be.set(y,b.loaded=M.I=!0),v.He(o,"appload",{detail:{namespace:e}})}),((e,t,n,o,i,l)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.k(t);if(o)if(e.be.has(t))n(t);else{const o=e.je.get(t)||[];o.push(n),e.je.set(t,o)}return!!o}),i){for(l=i.length-1;l>=0;l--)t.componentOnReady(i[l][0],i[l][1])&&i.splice(l,1);for(l=0;l<o.length;l++)if(!n[o[l]].componentOnReady)return;for(l=0;l<i.length;l++)i[l][1](null);i.length=0}})(M,b,o,o["s-apps"],o["s-cr"]),b.initialized=!0,M},H={};let q=!1;export{o as defineCustomElement,n as h};