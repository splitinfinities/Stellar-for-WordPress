const t=(t,a)=>Math.abs(t-a),a=(a,e,s)=>{const r=t(a,e)*s;return a>e?a-r:a+r},e=t=>Array.from(t.querySelectorAll(".line")).map(t=>{const a=parseInt(t.dataset.end,10),e=parseInt(t.dataset.start,10),s=parseFloat(t.dataset.opacityStart),r=parseFloat(t.dataset.opacityEnd),n=parseInt(t.dataset.translatexStart,10),o=parseInt(t.dataset.translatexEnd,10),l=parseInt(t.dataset.translateyStart,10),d=parseInt(t.dataset.translateyEnd,10),i=parseFloat(t.dataset.scaleStart),c=parseFloat(t.dataset.scaleEnd),p={};return isNaN(s)||isNaN(r)||(p.opacity={end:r,start:s}),isNaN(n)||isNaN(o)||(p.translateX={end:o,start:n}),isNaN(l)||isNaN(d)||(p.translateY={end:d,start:l}),isNaN(i)||isNaN(c)||(p.scale={end:c,start:i}),void 0===a||void 0===e||0===Object.keys(p).length?null:{el:t,end:a,offset:0,start:e,updates:p}}).filter(t=>t),s=(e,s,r)=>{const n=(()=>{const t=document.createElement("div"),a=["Webkit","webkit","Moz","moz","ms","o"];if(null!=t.style.transform)return"transform";for(let e in a){const s=`${a[e]}Transform`;if(void 0!==t.style[s])return s}})(),o=r;e.map(({el:e,end:r,offset:l,start:d,updates:i})=>{const c=l+d,p=l+r,f=s.get(e);if(o>=c&&o<=p||"before"!==f&&o<c||"after"!==f&&o>p){let r=0,l=0,d=1;const f=((a,e,s)=>t(a,s)/t(a,e))(c,p,((t,a,e)=>Math.max(Math.min(e,a),t))(c,p,o));if(i.opacity){const{end:t,start:s}=i.opacity,r=a(s,t,f).toFixed(2);e.style.opacity=r}if(i.translateX){const{end:t,start:e}=i.translateX;r=parseInt(a(e,t,f),10)}if(i.translateY){const{end:t,start:e}=i.translateY;l=parseInt(a(e,t,f),10)}if(i.scale){const{end:t,start:e}=i.scale;d=a(e,t,f).toFixed(2)}e.style[n]=`translate3d(${r}px, ${l}px, 0) scale(${d})`,s.set(e,o<c?"before":o>p?"after":"during")}})};export{e as a,s as b};