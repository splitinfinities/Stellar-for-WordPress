import{a as t,c as a}from"./chunk-7646164d.js";import{a as e}from"./chunk-13dbd937.js";var r=a(t(function(t,a){Object.defineProperty(a,"__esModule",{value:!0});var r,n=(r=e)&&r.__esModule?r:{default:r},s=new WeakMap,o=function(t,a){return Math.abs(t-a)},i=function(t){return d()+t.getBoundingClientRect().top},l=function(t,a,e){var r=o(t,a)*e;return t>a?t-r:t+r},d=function(){return parseInt(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,10)};a.default=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).className,a=[].concat(function(t){if(Array.isArray(t)){for(var a=0,e=Array(t.length);a<t.length;a++)e[a]=t[a];return e}return Array.from(t)}(document.querySelectorAll("."+(void 0===t?"js-parallaxis":t)))).map(function(t){var a="true"===t.dataset.relative,e=a?i(t):0,r=parseInt(t.dataset.end,10),n=parseInt(t.dataset.start,10),s=parseFloat(t.dataset.opacityStart),o=parseFloat(t.dataset.opacityEnd),l=parseInt(t.dataset.translatexStart,10),d=parseInt(t.dataset.translatexEnd,10),c=parseInt(t.dataset.translateyStart,10),u=parseInt(t.dataset.translateyEnd,10),f=parseFloat(t.dataset.scaleStart),p=parseFloat(t.dataset.scaleEnd),v={};return isNaN(s)||isNaN(o)||(v.opacity={end:o,start:s}),isNaN(l)||isNaN(d)||(v.translateX={end:d,start:l}),isNaN(c)||isNaN(u)||(v.translateY={end:u,start:c}),isNaN(f)||isNaN(p)||(v.scale={end:p,start:f}),void 0===r||void 0===n||0===Object.keys(v)?null:{el:t,end:r,offset:e,relative:a,start:n,updates:v}}).filter(function(t){return t});if(a.length){var e=function(t){var a=function(){var t=document.createElement("div"),a=["Webkit","webkit","Moz","moz","ms","o"];if(null!=t.style.transform)return"transform";for(var e in a){var r=a[e]+"Transform";if(void 0!==t.style[r])return r}}();return function(){var e=d();t.map(function(t){var r,n,i,d,c=t.el,u=t.offset,f=t.updates,p=u+t.start,v=u+t.end,m=s.get(c);if(e>=p&&e<=v||"before"!==m&&e<p||"after"!==m&&e>v){var y=0,N=0,g=1,w=(n=p,i=v,r=p,d=Math.max(Math.min(e,v),r),o(n,d)/o(n,i));if(f.opacity){var h=f.opacity,b=l(h.start,h.end,w).toFixed(2);c.style.opacity=b}if(f.translateX){var x=f.translateX;y=parseInt(l(x.start,x.end,w),10)}if(f.translateY){var I=f.translateY;N=parseInt(l(I.start,I.end,w),10)}if(f.scale){var E=f.scale;g=l(E.start,E.end,w).toFixed(2)}c.style[a]="translate3d("+y+"px, "+N+"px, 0) scale("+g+")",s.set(c,e<p?"before":e>v?"after":"during")}})}}(a);(function(t){var a=function(){return t.map(function(t){t.relative&&(t.offset=i(t.el))})},e=void 0;window.addEventListener("resize",function(){window.clearTimeout(e),e=window.setTimeout(a,50)})})(a),e(),window.addEventListener("scroll",function(){return(0,n.default)(e)})}}}));class n{constructor(){this.target="story"}componentWillLoad(){r({className:this.target})}static get is(){return"stellar-story"}static get properties(){return{target:{type:String,attr:"target"}}}}export{n as StellarStory};