let e,t,n,l=!1,o=!1,s=!1,r=!1;const i="http://www.w3.org/1999/xlink",c=new WeakMap,a=e=>"sc-"+e,f={},u=e=>"object"==(e=typeof e)||"function"===e,d=(e,t,...n)=>{let l=null,o=null,s=null,r=!1,i=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof e&&!u(l))&&(l=String(l)),r&&i?c[c.length-1].t+=l:c.push(r?p(null,l):l),i=r)};if(a(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(t,c,w);const f=p(e,null);return f.l=t,c.length>0&&(f.o=c),f.s=o,f.i=s,f},p=(e,t)=>({u:0,p:e,t,$:null,o:null,l:null,s:null,i:null}),m={},w={forEach:(e,t)=>e.map($).forEach(t),map:(e,t)=>e.map($).map(t).map(h)},$=e=>({vattrs:e.l,vchildren:e.o,vkey:e.s,vname:e.i,vtag:e.p,vtext:e.t}),h=e=>{const t=p(e.vtag,e.vtext);return t.l=e.vattrs,t.o=e.vchildren,t.s=e.vkey,t.i=e.vname,t},y=(e,t,n,l,o,s)=>{if(n===l)return;let r=ae(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,o=v(n),s=v(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(r||"o"!==t[0]||"n"!==t[1]){const f=u(l);if((r||f&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?r=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(a){}let d=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,d=!0),null==l||!1===l?d?e.removeAttributeNS(i,t):e.removeAttribute(t):(!r||4&s||o)&&!f&&(l=!0===l?"":l,d?e.setAttributeNS(i,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):ae(Z,c)?c.slice(2):c[2]+t.slice(3),n&&te.rel(e,t,n,!1),l&&te.ael(e,t,l,!1)},b=/\s/,v=e=>e?e.split(b):[],g=(e,t,n,l)=>{const o=11===t.$.nodeType&&t.$.host?t.$.host:t.$,s=e&&e.l||f,r=t.l||f;for(l in s)l in r||y(o,l,s[l],void 0,n,t.u);for(l in r)y(o,l,s[l],r[l],n,t.u)},_=(o,i,c,a)=>{let f,u,d,p=i.o[c],m=0;if(l||(s=!0,"slot"===p.p&&(e&&a.classList.add(e+"-s"),p.u|=p.o?2:1)),null!==p.t)f=p.$=ee.createTextNode(p.t);else if(1&p.u)f=p.$=ee.createTextNode("");else{if(r||(r="svg"===p.p),f=p.$=ee.createElementNS(r?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&p.u?"slot-fb":p.p),r&&"foreignObject"===p.p&&(r=!1),g(null,p,r),null!=e&&f["s-si"]!==e&&f.classList.add(f["s-si"]=e),p.o)for(m=0;m<p.o.length;++m)u=_(o,p,m,f),u&&f.appendChild(u);"svg"===p.p?r=!1:"foreignObject"===f.tagName&&(r=!0)}return f["s-hn"]=n,3&p.u&&(f["s-sr"]=!0,f["s-cr"]=t,f["s-sn"]=p.i||"",d=o&&o.o&&o.o[c],d&&d.p===p.p&&o.$&&j(o.$,!1)),f},j=(e,t)=>{te.u|=1;const l=e.childNodes;for(let o=l.length-1;o>=0;o--){const e=l[o];e["s-hn"]!==n&&e["s-ol"]&&(R(e).insertBefore(e,M(e)),e["s-ol"].remove(),e["s-ol"]=void 0,s=!0),t&&j(e,t)}te.u&=-2},k=(e,t,l,o,s,r)=>{let i,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===n&&(c=c.shadowRoot);s<=r;++s)o[s]&&(i=_(null,l,s,e),i&&(o[s].$=i,c.insertBefore(i,M(t))))},S=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.$,C(l),o=!0,s["s-ol"]?s["s-ol"].remove():j(s,!0),s.remove())},U=(e,t)=>e.p===t.p&&("slot"===e.p?e.i===t.i:e.s===t.s),M=e=>e&&e["s-ol"]||e,R=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,O=(e,t)=>{const n=t.$=e.$,l=e.o,o=t.o;let s;r=n&&n.parentNode&&void 0!==n.ownerSVGElement,r="svg"===t.p||"foreignObject"!==t.p&&r,null===t.t?("slot"===t.p||g(e,t,r),null!==l&&null!==o?((e,t,n,l)=>{let o,s,r=0,i=0,c=0,a=0,f=t.length-1,u=t[0],d=t[f],p=l.length-1,m=l[0],w=l[p];for(;r<=f&&i<=p;)if(null==u)u=t[++r];else if(null==d)d=t[--f];else if(null==m)m=l[++i];else if(null==w)w=l[--p];else if(U(u,m))O(u,m),u=t[++r],m=l[++i];else if(U(d,w))O(d,w),d=t[--f],w=l[--p];else if(U(u,w))"slot"!==u.p&&"slot"!==w.p||j(u.$.parentNode,!1),O(u,w),e.insertBefore(u.$,d.$.nextSibling),u=t[++r],w=l[--p];else if(U(d,m))"slot"!==u.p&&"slot"!==w.p||j(d.$.parentNode,!1),O(d,m),e.insertBefore(d.$,u.$),d=t[--f],m=l[++i];else{for(c=-1,a=r;a<=f;++a)if(t[a]&&null!==t[a].s&&t[a].s===m.s){c=a;break}c>=0?(s=t[c],s.p!==m.p?o=_(t&&t[i],n,c,e):(O(s,m),t[c]=void 0,o=s.$),m=l[++i]):(o=_(t&&t[i],n,i,e),m=l[++i]),o&&R(u.$).insertBefore(o,M(u.$))}r>f?k(e,null==l[p+1]?null:l[p+1].$,n,l,i,p):i>p&&S(t,r,f)})(n,l,t,o):null!==o?(null!==e.t&&(n.textContent=""),k(n,null,t,o,0,o.length-1)):null!==l&&S(l,0,l.length-1)):(s=n["s-cr"])?s.parentNode.textContent=t.t:e.t!==t.t&&(n.data=t.t),r&&"svg"===t.p&&(r=!1)},P=e=>{let t,n,l,o,s,r,i=e.childNodes;for(n=0,l=i.length;n<l;n++)if(t=i[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(i[o]["s-hn"]!==t["s-hn"])if(r=i[o].nodeType,""!==s){if(1===r&&s===i[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===r||3===r&&""!==i[o].textContent.trim()){t.hidden=!0;break}P(t)}},L=[],x=e=>{let t,n,l,s,r=e.childNodes,i=r.length,c=0,a=0,f=0;for(i=r.length;c<i;c++){if(t=r[c],t["s-sr"]&&(n=t["s-cr"]))for(l=n.parentNode.childNodes,s=t["s-sn"],a=l.length-1;a>=0;a--)n=l[a],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(f=n.nodeType,((3===f||8===f)&&""===s||1===f&&null===n.getAttribute("slot")&&""===s||1===f&&n.getAttribute("slot")===s)&&(L.some(e=>e.h===n)||(o=!0,n["s-sn"]=s,L.push({v:t,h:n}))));1===t.nodeType&&x(t)}},C=e=>{e.l&&e.l.ref&&e.l.ref(null),e.o&&e.o.forEach(C)},E=(e,t)=>{t&&!e.g&&t["s-p"].push(new Promise(t=>e.g=t))},T=(e,t)=>{if(e.u|=16,4&e.u)return void(e.u|=512);const n=e._,l=()=>W(e,n,t);let o;return E(e,e.j),t?(e.u|=256,e.k&&(e.k.forEach(([e,t])=>q(n,e,t)),e.k=null),o=q(n,"componentWillLoad")):o=q(n,"componentWillUpdate"),H(o,()=>_e(l))},W=(r,i,f)=>{const u=r.S,w=u["s-rc"];f&&(e=>{const t=e.U,n=e.S,l=t.u,o=((e,t,n,l)=>{let o=a(t.M),s=pe.get(o);if(e=11===e.nodeType?e:ee,s)if("string"==typeof s){let n,r=c.get(e=e.head||e);if(r||c.set(e,r=new Set),!r.has(o)){if(te.R){n=te.R.createHostStyle(l,o,s,!!(10&t.u));const e=n["s-sc"];e&&(o=e,r=null)}else n=ee.createElement("style"),n.innerHTML=s;e.insertBefore(n,e.querySelector("link")),r&&r.add(o)}}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[s]);return o})(ne&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t,0,n);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(r);((r,i)=>{const c=r.S,a=r.U,f=r.O||p(null,null),u=(w=i)&&w.p===m?i:d(null,null,i);var w;if(n=c.tagName,a.P&&(u.l=u.l||{},a.P.forEach(([e,t])=>u.l[t]=c[e])),u.p=null,u.u|=4,r.O=u,u.$=f.$=c.shadowRoot||c,e=c["s-sc"],t=c["s-cr"],l=ne&&0!=(1&a.u),o=!1,O(f,u),s){x(u.$);for(let e=0;e<L.length;e++){const t=L[e];if(!t.h["s-ol"]){const e=ee.createTextNode("");e["s-nr"]=t.h,t.h.parentNode.insertBefore(t.h["s-ol"]=e,t.h)}}te.u|=1;for(let e=0;e<L.length;e++){const t=L[e],n=t.v.parentNode;let l=t.v.nextSibling,o=t.h["s-ol"];for(;o=o.previousSibling;){let e=o["s-nr"];if(e&&e["s-sn"]===t.h["s-sn"]&&n===e.parentNode&&(e=e.nextSibling,!e||!e["s-nr"])){l=e;break}}(!l&&n!==t.h.parentNode||t.h.nextSibling!==l)&&t.h!==l&&n.insertBefore(t.h,l)}te.u&=-2}o&&P(u.$),L.length=0})(r,A(i)),te.R&&te.R.updateHost(u),r.u&=-17,r.u|=2,w&&(w.forEach(e=>e()),u["s-rc"]=void 0);{const e=u["s-p"],t=()=>D(r);0===e.length?t():(Promise.all(e).then(t),r.u|=4,e.length=0)}},A=e=>{try{e=e.render&&e.render()}catch(t){fe(t)}return e},D=e=>{const t=e.S,n=e._,l=e.j;64&e.u?q(n,"componentDidUpdate"):(e.u|=64,t.classList.add("hydrated"),q(n,"componentDidLoad"),e.L(t),l||F()),e.C(t),e.g&&(e.g(),e.g=void 0),512&e.u&&ve(()=>T(e,!1)),e.u&=-517},F=()=>{ee.documentElement.classList.add("hydrated"),te.u|=2},q=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){fe(l)}},H=(e,t)=>e&&e.then?e.then(t):t(),N=(e,t,n)=>{if(t.T){e.watchers&&(t.W=e.watchers);const l=Object.entries(t.T),o=e.prototype;if(l.forEach(([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,e,{get(){return t=e,re(this).A.get(t);var t},set(n){((e,t,n,l)=>{const o=re(e),s=o.A.get(t),r=o.u,i=o._;var c,a;if(a=l.T[t][0],n=null==(c=n)||u(c)?c:4&a?"false"!==c&&(""===c||!!c):2&a?parseFloat(c):1&a?String(c):c,!(8&r&&void 0!==s||n===s)&&(o.A.set(t,n),i)){if(l.W&&128&r){const e=l.W[t];e&&e.forEach(e=>{try{i[e](n,s,t)}catch(l){fe(l)}})}2==(18&r)&&T(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,e,{value(...t){const n=re(this);return n.D.then(()=>n._[e](...t))}})}),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){te.jmp(()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.P.push([e,o]),o})}}return e},B=e=>{q(e,"connectedCallback")},V=e=>{if(0==(1&te.u)){const t=re(e),n=t.U,l=()=>{};if(n.F&&(t.q=((e,t,n)=>{t.k=t.k||[];const l=n.map(([n,l,o])=>{const s=((e,t)=>4&t?ee:8&t?Z:e)(e,n),r=((e,t)=>n=>{256&e.u?e._[t](n):e.k.push([t,n])})(t,o),i=(e=>0!=(2&e))(n);return te.ael(s,l,r,i),()=>te.rel(s,l,r,i)});return()=>l.forEach(e=>e())})(e,t,n.F)),!(1&t.u)){t.u|=1,12&n.u&&z(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){E(t,t.j=n);break}}n.T&&Object.entries(n.T).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),(async(e,t,n,l,o)=>{if(0==(32&t.u)){t.u|=32;{if((o=de(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.W=o.watchers,N(o,n,2),o.isProxied=!0);const e=()=>{};t.u|=8;try{new o(t)}catch(i){fe(i)}t.u&=-9,t.u|=128,e(),B(t._)}const e=a(n.M);if(!pe.has(e)&&o.style){const t=()=>{};let l=o.style;8&n.u&&(l=await __sc_import_stellar_core("./p-ac131489.js").then(t=>t.scopeCss(l,e,!1))),((e,t,n)=>{let l=pe.get(e);le&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,pe.set(e,l)})(e,l,!!(1&n.u)),t()}}const s=t.j,r=()=>T(t,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,t,n)}B(t._),l()}},z=e=>{const t=e["s-cr"]=ee.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},G=(e,t={})=>{const n=[],l=t.exclude||[],o=ee.head,s=Z.customElements,r=o.querySelector("meta[charset]"),i=ee.createElement("style"),c=[];let a,f=!0;Object.assign(te,t),te.H=new URL(t.resourcesUrl||"./",ee.baseURI).href,t.syncQueue&&(te.u|=4),e.forEach(e=>e[1].forEach(t=>{const o={u:t[0],M:t[1],T:t[2],F:t[3]};o.T=t[2],o.F=t[3],o.P=[],o.W={},!ne&&1&o.u&&(o.u|=8);const r=o.M,i=class extends HTMLElement{constructor(e){super(e),ce(e=this,o),1&o.u&&(ne?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){a&&(clearTimeout(a),a=null),f?c.push(this):te.jmp(()=>V(this))}disconnectedCallback(){te.jmp(()=>(e=>{if(0==(1&te.u)){const t=re(e),n=t._;t.q&&(t.q(),t.q=void 0),te.R&&te.R.removeHost(e),q(n,"disconnectedCallback"),q(n,"componentDidUnload")}})(this))}forceUpdate(){(()=>{{const e=re(this);e.S.isConnected&&2==(18&e.u)&&T(e,!1)}})()}componentOnReady(){return re(this).N}};o.B=e[0],l.includes(r)||s.get(r)||(n.push(r),s.define(r,N(i,o,1)))})),i.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",i.setAttribute("data-styles",""),o.insertBefore(i,r?r.nextSibling:o.firstChild),f=!1,c.length>0?c.forEach(e=>e.connectedCallback()):te.jmp(()=>a=setTimeout(F,30,"timeout"))},I=e=>re(e).S,J=(e,t,n)=>{const l=I(e);return{emit:e=>{const o=new CustomEvent(t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e});return l.dispatchEvent(o),o}}},K=e=>{const t=new URL(e,te.H);return t.origin!==Z.location.origin?t.href:t.pathname},Q=(e,t)=>t in oe?oe[t]:"window"===t?Z:"document"===t?ee:"isServer"!==t&&"isPrerender"!==t&&("isClient"===t||("resourcesUrl"===t||"publicPath"===t?K("."):"queue"===t?{write:_e,read:ge,tick:{then:e=>ve(e)}}:void 0));let X=0,Y=!1;const Z="undefined"!=typeof window?window:{},ee=Z.document||{head:{}},te={u:0,H:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l)},ne=(()=>(ee.head.attachShadow+"").includes("[native"))(),le=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),oe={},se=new WeakMap,re=e=>se.get(e),ie=(e,t)=>se.set(t._=e,t),ce=(e,t)=>{const n={u:0,S:e,U:t,A:new Map};return n.D=new Promise(e=>n.C=e),n.N=new Promise(e=>n.L=e),e["s-p"]=[],e["s-rc"]=[],se.set(e,n)},ae=(e,t)=>t in e,fe=e=>console.error(e),ue=new Map,de=e=>{const t=e.M.replace(/-/g,"_"),n=e.B,l=ue.get(n);return l?l[t]:__sc_import_stellar_core(`./${n}.entry.js`).then(e=>(ue.set(n,e),e[t]),fe)},pe=new Map,me=[],we=[],$e=[],he=(e,t)=>n=>{e.push(n),Y||(Y=!0,t&&4&te.u?ve(be):te.raf(be))},ye=(e,t)=>{let n=0,l=0;for(;n<e.length&&(l=performance.now())<t;)try{e[n++](l)}catch(o){fe(o)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},be=()=>{X++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){fe(t)}e.length=0})(me);const e=2==(6&te.u)?performance.now()+10*Math.ceil(X*(1/22)):1/0;ye(we,e),ye($e,e),we.length>0&&($e.push(...we),we.length=0),(Y=me.length+we.length+$e.length>0)?te.raf(be):X=0},ve=e=>Promise.resolve().then(e),ge=he(me,!1),_e=he(we,!0),je=()=>Z.CSS&&Z.CSS.supports&&Z.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_stellar_core("./p-1818ce3f.js").then(()=>{if(te.R=Z.__stencil_cssshim,te.R)return te.R.initShim()}),ke=()=>{te.R=Z.__stencil_cssshim;const e=Array.from(ee.querySelectorAll("script")).find(e=>new RegExp("/stellar-core(\\.esm)?\\.js($|\\?|#)").test(e.src)||"stellar-core"===e.getAttribute("data-stencil-namespace")),t=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,Z.location.href)).href,Se(t.resourcesUrl,e),window.customElements?Promise.resolve(t):__sc_import_stellar_core("./p-542b34e7.js").then(()=>t))},Se=(e,t)=>{const n=`__sc_import_${"stellar-core".replace(/\s|-/g,"_")}`;try{Z[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(l){const o=new Map;Z[n]=l=>{const s=new URL(l,e).href;let r=o.get(s);if(!r){const e=ee.createElement("script");e.type="module",e.crossOrigin=t.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${s}'; window.${n}.m = m;`],{type:"application/javascript"})),r=new Promise(t=>{e.onload=()=>{t(Z[n].m),e.remove()}}),o.set(s,r),ee.head.appendChild(e)}return r}}};export{m as H,je as a,G as b,J as c,K as d,Q as e,I as g,d as h,ke as p,ie as r};