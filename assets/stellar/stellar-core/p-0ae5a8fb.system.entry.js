var __awaiter=this&&this.__awaiter||function(t,e,r,n){function a(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,i){function o(t){try{s(n.next(t))}catch(e){i(e)}}function u(t){try{s(n["throw"](t))}catch(e){i(e)}}function s(t){t.done?r(t.value):a(t.value).then(o,u)}s((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(t){return function(e){return s([t,e])}}function s(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=e.call(t,r)}catch(u){o=[6,u];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-de1c7c63.system.js","./p-8d6d3b24.system.js","./p-752b9e3e.system.js","./p-fdba8b89.system.js","./p-bd9c4de0.system.js","./p-49be6f75.system.js"],(function(t){"use strict";var e,r,n,a,i;return{setters:[function(t){e=t.r;r=t.h;n=t.H;a=t.g},function(){},function(){},function(t){i=t.p},function(){},function(){}],execute:function(){var o={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:true,timelineOffset:0};var u={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0};var s=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective"];var f={CSS:{},springs:{}};function l(t,e,r){return Math.min(Math.max(t,e),r)}function c(t,e){return t.indexOf(e)>-1}function v(t,e){return t.apply(null,e)}var d={arr:function(t){return Array.isArray(t)},obj:function(t){return c(Object.prototype.toString.call(t),"Object")},pth:function(t){return d.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||d.svg(t)},str:function(t){return typeof t==="string"},fnc:function(t){return typeof t==="function"},und:function(t){return typeof t==="undefined"},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return d.hex(t)||d.rgb(t)||d.hsl(t)},key:function(t){return!o.hasOwnProperty(t)&&!u.hasOwnProperty(t)&&t!=="targets"&&t!=="keyframes"}};function p(t){var e=/\(([^)]+)\)/.exec(t);return e?e[1].split(",").map((function(t){return parseFloat(t)})):[]}function h(t,e){var r=p(t);var n=l(d.und(r[0])?1:r[0],.1,100);var a=l(d.und(r[1])?100:r[1],.1,100);var i=l(d.und(r[2])?10:r[2],.1,100);var o=l(d.und(r[3])?0:r[3],.1,100);var u=Math.sqrt(a/n);var s=i/(2*Math.sqrt(a*n));var c=s<1?u*Math.sqrt(1-s*s):0;var v=1;var h=s<1?(s*u+-o)/c:-o+u;function m(t){var r=e?e*t/1e3:t;if(s<1){r=Math.exp(-r*s*u)*(v*Math.cos(c*r)+h*Math.sin(c*r))}else{r=(v+h*r)*Math.exp(-r*u)}if(t===0||t===1){return t}return 1-r}function g(){var e=f.springs[t];if(e){return e}var r=1/6;var n=0;var a=0;while(true){n+=r;if(m(n)===1){a++;if(a>=16){break}}else{a=0}}var i=n*r*1e3;f.springs[t]=i;return i}return e?m:g}function m(t){if(t===void 0)t=10;return function(e){return Math.round(e*t)*(1/t)}}var g=function(){var t=11;var e=1/(t-1);function r(t,e){return 1-3*e+3*t}function n(t,e){return 3*e-6*t}function a(t){return 3*t}function i(t,e,i){return((r(e,i)*t+n(e,i))*t+a(e))*t}function o(t,e,i){return 3*r(e,i)*t*t+2*n(e,i)*t+a(e)}function u(t,e,r,n,a){var o,u,s=0;do{u=e+(r-e)/2;o=i(u,n,a)-t;if(o>0){r=u}else{e=u}}while(Math.abs(o)>1e-7&&++s<10);return u}function s(t,e,r,n){for(var a=0;a<4;++a){var u=o(e,r,n);if(u===0){return e}var s=i(e,r,n)-t;e-=s/u}return e}function f(r,n,a,f){if(!(0<=r&&r<=1&&0<=a&&a<=1)){return}var l=new Float32Array(t);if(r!==n||a!==f){for(var c=0;c<t;++c){l[c]=i(c*e,r,a)}}function v(n){var i=0;var f=1;var c=t-1;for(;f!==c&&l[f]<=n;++f){i+=e}--f;var v=(n-l[f])/(l[f+1]-l[f]);var d=i+v*e;var p=o(d,r,a);if(p>=.001){return s(n,d,r,a)}else if(p===0){return d}else{return u(n,i,i+e,r,a)}}return function(t){if(r===n&&a===f){return t}if(t===0||t===1){return t}return i(v(t),n,f)}}return f}();var y=function(){var t={linear:function(){return function(t){return t}}};var e={Sine:function(){return function(t){return 1-Math.cos(t*Math.PI/2)}},Circ:function(){return function(t){return 1-Math.sqrt(1-t*t)}},Back:function(){return function(t){return t*t*(3*t-2)}},Bounce:function(){return function(t){var e,r=4;while(t<((e=Math.pow(2,--r))-1)/11){}return 1/Math.pow(4,3-r)-7.5625*Math.pow((e*3-2)/22-t,2)}},Elastic:function(t,e){if(t===void 0)t=1;if(e===void 0)e=.5;var r=l(t,1,10);var n=l(e,.1,2);return function(t){return t===0||t===1?t:-r*Math.pow(2,10*(t-1))*Math.sin((t-1-n/(Math.PI*2)*Math.asin(1/r))*(Math.PI*2)/n)}}};var r=["Quad","Cubic","Quart","Quint","Expo"];r.forEach((function(t,r){e[t]=function(){return function(t){return Math.pow(t,r+2)}}}));Object.keys(e).forEach((function(r){var n=e[r];t["easeIn"+r]=n;t["easeOut"+r]=function(t,e){return function(r){return 1-n(t,e)(1-r)}};t["easeInOut"+r]=function(t,e){return function(r){return r<.5?n(t,e)(r*2)/2:1-n(t,e)(r*-2+2)/2}}}));return t}();function b(t,e){if(d.fnc(t)){return t}var r=t.split("(")[0];var n=y[r];var a=p(t);switch(r){case"spring":return h(t,e);case"cubicBezier":return v(g,a);case"steps":return v(m,a);default:return v(n,a)}}function x(t){try{var e=document.querySelectorAll(t);return e}catch(r){return}}function w(t,e){var r=t.length;var n=arguments.length>=2?arguments[1]:void 0;var a=[];for(var i=0;i<r;i++){if(i in t){var o=t[i];if(e.call(n,o,i,t)){a.push(o)}}}return a}function M(t){return t.reduce((function(t,e){return t.concat(d.arr(e)?M(e):e)}),[])}function k(t){if(d.arr(t)){return t}if(d.str(t)){t=x(t)||t}if(t instanceof NodeList||t instanceof HTMLCollection){return[].slice.call(t)}return[t]}function T(t,e){return t.some((function(t){return t===e}))}function O(t){var e={};for(var r in t){e[r]=t[r]}return e}function A(t,e){var r=O(t);for(var n in t){r[n]=e.hasOwnProperty(n)?e[n]:t[n]}return r}function E(t,e){var r=O(t);for(var n in e){r[n]=d.und(t[n])?e[n]:t[n]}return r}function I(t){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t);return e?"rgba("+e[1]+",1)":t}function C(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;var r=t.replace(e,(function(t,e,r,n){return e+e+r+r+n+n}));var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);var a=parseInt(n[1],16);var i=parseInt(n[2],16);var o=parseInt(n[3],16);return"rgba("+a+","+i+","+o+",1)"}function P(t){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);var r=parseInt(e[1],10)/360;var n=parseInt(e[2],10)/100;var a=parseInt(e[3],10)/100;var i=e[4]||1;function o(t,e,r){if(r<0){r+=1}if(r>1){r-=1}if(r<1/6){return t+(e-t)*6*r}if(r<1/2){return e}if(r<2/3){return t+(e-t)*(2/3-r)*6}return t}var u,s,f;if(n==0){u=s=f=a}else{var l=a<.5?a*(1+n):a+n-a*n;var c=2*a-l;u=o(c,l,r+1/3);s=o(c,l,r);f=o(c,l,r-1/3)}return"rgba("+u*255+","+s*255+","+f*255+","+i+")"}function B(t){if(d.rgb(t)){return I(t)}if(d.hex(t)){return C(t)}if(d.hsl(t)){return P(t)}}function L(t){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(e){return e[1]}}function j(t){if(c(t,"translate")||t==="perspective"){return"px"}if(c(t,"rotate")||c(t,"skew")){return"deg"}}function _(t,e){if(!d.fnc(t)){return t}return t(e.target,e.id,e.total)}function D(t,e){return t.getAttribute(e)}function Y(t,e,r){var n=L(e);if(T([r,"deg","rad","turn"],n)){return e}var a=f.CSS[e+r];if(!d.und(a)){return a}var i=100;var o=document.createElement(t.tagName);var u=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;u.appendChild(o);o.style.position="absolute";o.style.width=i+r;var s=i/o.offsetWidth;u.removeChild(o);var l=s*parseFloat(e);f.CSS[e+r]=l;return l}function S(t,e,r){if(e in t.style){var n=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();var a=t.style[e]||getComputedStyle(t).getPropertyValue(n)||"0";return r?Y(t,a,r):a}}function F(t,e){if(d.dom(t)&&!d.inp(t)&&(D(t,e)||d.svg(t)&&t[e])){return"attribute"}if(d.dom(t)&&T(s,e)){return"transform"}if(d.dom(t)&&(e!=="transform"&&S(t,e))){return"css"}if(t[e]!=null){return"object"}}function N(t){if(!d.dom(t)){return}var e=t.style.transform||"";var r=/(\w+)\(([^)]*)\)/g;var n=new Map;var a;while(a=r.exec(e)){n.set(a[1],a[2])}return n}function X(t,e,r,n){var a=c(e,"scale")?1:0+j(e);var i=N(t).get(e)||a;if(r){r.transforms.list.set(e,i);r.transforms["last"]=e}return n?Y(t,i,n):i}function Z(t,e,r,n){switch(F(t,e)){case"transform":return X(t,e,n,r);case"css":return S(t,e,r);case"attribute":return D(t,e);default:return t[e]||0}}function H(t,e){var r=/^(\*=|\+=|-=)/.exec(t);if(!r){return t}var n=L(t)||0;var a=parseFloat(e);var i=parseFloat(t.replace(r[0],""));switch(r[0][0]){case"+":return a+i+n;case"-":return a-i+n;case"*":return a*i+n}}function q(t,e){if(d.col(t)){return B(t)}if(/\s/g.test(t)){return t}var r=L(t);var n=r?t.substr(0,t.length-r.length):t;if(e){return n+e}return n}function $(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function z(t){return Math.PI*2*D(t,"r")}function Q(t){return D(t,"width")*2+D(t,"height")*2}function V(t){return $({x:D(t,"x1"),y:D(t,"y1")},{x:D(t,"x2"),y:D(t,"y2")})}function G(t){var e=t.points;var r=0;var n;for(var a=0;a<e.numberOfItems;a++){var i=e.getItem(a);if(a>0){r+=$(n,i)}n=i}return r}function W(t){var e=t.points;return G(t)+$(e.getItem(e.numberOfItems-1),e.getItem(0))}function R(t){if(t.getTotalLength){return t.getTotalLength()}switch(t.tagName.toLowerCase()){case"circle":return z(t);case"rect":return Q(t);case"line":return V(t);case"polyline":return G(t);case"polygon":return W(t)}}function J(t){var e=R(t);t.setAttribute("stroke-dasharray",e);return e}function K(t){var e=t.parentNode;while(d.svg(e)){if(!d.svg(e.parentNode)){break}e=e.parentNode}return e}function U(t,e){var r=e||{};var n=r.el||K(t);var a=n.getBoundingClientRect();var i=D(n,"viewBox");var o=a.width;var u=a.height;var s=r.viewBox||(i?i.split(" "):[0,0,o,u]);return{el:n,viewBox:s,x:s[0]/1,y:s[1]/1,w:o/s[2],h:u/s[3]}}function tt(t,e){var r=d.str(t)?x(t)[0]:t;var n=e||100;return function(t){return{property:t,el:r,svg:U(r),totalLength:R(r)*(n/100)}}}function et(t,e){function r(r){if(r===void 0)r=0;var n=e+r>=1?e+r:0;return t.el.getPointAtLength(n)}var n=U(t.el,t.svg);var a=r();var i=r(-1);var o=r(+1);switch(t.property){case"x":return(a.x-n.x)*n.w;case"y":return(a.y-n.y)*n.h;case"angle":return Math.atan2(o.y-i.y,o.x-i.x)*180/Math.PI}}function rt(t,e){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;var n=q(d.pth(t)?t.totalLength:t,e)+"";return{original:n,numbers:n.match(r)?n.match(r).map(Number):[0],strings:d.str(t)||e?n.split(r):[]}}function nt(t){var e=t?M(d.arr(t)?t.map(k):k(t)):[];return w(e,(function(t,e,r){return r.indexOf(t)===e}))}function at(t){var e=nt(t);return e.map((function(t,r){return{target:t,id:r,total:e.length,transforms:{list:N(t)}}}))}function it(t,e){var r=O(e);if(/^spring/.test(r.easing)){r.duration=h(r.easing)}if(d.arr(t)){var n=t.length;var a=n===2&&!d.obj(t[0]);if(!a){if(!d.fnc(e.duration)){r.duration=e.duration/n}}else{t={value:t}}}var i=d.arr(t)?t:[t];return i.map((function(t,r){var n=d.obj(t)&&!d.pth(t)?t:{value:t};if(d.und(n.delay)){n.delay=!r?e.delay:0}if(d.und(n.endDelay)){n.endDelay=r===i.length-1?e.endDelay:0}return n})).map((function(t){return E(t,r)}))}function ot(t){var e=w(M(t.map((function(t){return Object.keys(t)}))),(function(t){return d.key(t)})).reduce((function(t,e){if(t.indexOf(e)<0){t.push(e)}return t}),[]);var r={};var n=function(n){var a=e[n];r[a]=t.map((function(t){var e={};for(var r in t){if(d.key(r)){if(r==a){e.value=t[r]}}else{e[r]=t[r]}}return e}))};for(var a=0;a<e.length;a++)n(a);return r}function ut(t,e){var r=[];var n=e.keyframes;if(n){e=E(ot(n),e)}for(var a in e){if(d.key(a)){r.push({name:a,tweens:it(e[a],t)})}}return r}function st(t,e){var r={};for(var n in t){var a=_(t[n],e);if(d.arr(a)){a=a.map((function(t){return _(t,e)}));if(a.length===1){a=a[0]}}r[n]=a}r.duration=parseFloat(r.duration);r.delay=parseFloat(r.delay);return r}function ft(t,e){var r;return t.tweens.map((function(n){var a=st(n,e);var i=a.value;var o=d.arr(i)?i[1]:i;var u=L(o);var s=Z(e.target,t.name,u,e);var f=r?r.to.original:s;var l=d.arr(i)?i[0]:f;var c=L(l)||L(s);var v=u||c;if(d.und(o)){o=f}a.from=rt(l,v);a.to=rt(H(o,l),v);a.start=r?r.end:0;a.end=a.start+a.delay+a.duration+a.endDelay;a.easing=b(a.easing,a.duration);a.isPath=d.pth(i);a.isColor=d.col(a.from.original);if(a.isColor){a.round=1}r=a;return a}))}var lt={css:function(t,e,r){return t.style[e]=r},attribute:function(t,e,r){return t.setAttribute(e,r)},object:function(t,e,r){return t[e]=r},transform:function(t,e,r,n,a){n.list.set(e,r);if(e===n.last||a){var i="";n.list.forEach((function(t,e){i+=e+"("+t+") "}));t.style.transform=i}}};function ct(t,e){var r=at(t);r.forEach((function(t){for(var r in e){var n=_(e[r],t);var a=t.target;var i=L(n);var o=Z(a,r,i,t);var u=i||L(o);var s=H(q(n,u),o);var f=F(a,r);lt[f](a,r,s,t.transforms,true)}}))}function vt(t,e){var r=F(t.target,e.name);if(r){var n=ft(e,t);var a=n[n.length-1];return{type:r,property:e.name,animatable:t,tweens:n,duration:a.end,delay:n[0].delay,endDelay:a.endDelay}}}function dt(t,e){return w(M(t.map((function(t){return e.map((function(e){return vt(t,e)}))}))),(function(t){return!d.und(t)}))}function pt(t,e){var r=t.length;var n=function(t){return t.timelineOffset?t.timelineOffset:0};var a={};a.duration=r?Math.max.apply(Math,t.map((function(t){return n(t)+t.duration}))):e.duration;a.delay=r?Math.min.apply(Math,t.map((function(t){return n(t)+t.delay}))):e.delay;a.endDelay=r?a.duration-Math.max.apply(Math,t.map((function(t){return n(t)+t.duration-t.endDelay}))):e.endDelay;return a}var ht=0;function mt(t){var e=A(o,t);var r=A(u,t);var n=ut(r,t);var a=at(t.targets);var i=dt(a,n);var s=pt(i,r);var f=ht;ht++;return E(e,{id:f,children:[],animatables:a,animations:i,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}var gt=[];var yt=[];var bt;var xt=function(){function t(){bt=requestAnimationFrame(e)}function e(e){var r=gt.length;if(r){var n=0;while(n<r){var a=gt[n];if(!a.paused){a.tick(e)}else{var i=gt.indexOf(a);if(i>-1){gt.splice(i,1);r=gt.length}}n++}t()}else{bt=cancelAnimationFrame(bt)}}return t}();function wt(){if(document.hidden){gt.forEach((function(t){return t.pause()}));yt=gt.slice(0);Mt.running=gt=[]}else{yt.forEach((function(t){return t.play()}))}}if(typeof document!=="undefined"){document.addEventListener("visibilitychange",wt)}function Mt(t){if(t===void 0)t={};var e=0,r=0,n=0;var a,i=0;var o=null;function u(t){var e=window.Promise&&new Promise((function(t){return o=t}));t.finished=e;return e}var s=mt(t);var f=u(s);function c(){var t=s.direction;if(t!=="alternate"){s.direction=t!=="normal"?"normal":"reverse"}s.reversed=!s.reversed;a.forEach((function(t){return t.reversed=s.reversed}))}function v(t){return s.reversed?s.duration-t:t}function d(){e=0;r=v(s.currentTime)*(1/Mt.speed)}function p(t,e){if(e){e.seek(t-e.timelineOffset)}}function h(t){if(!s.reversePlayback){for(var e=0;e<i;e++){p(t,a[e])}}else{for(var r=i;r--;){p(t,a[r])}}}function m(t){var e=0;var r=s.animations;var n=r.length;while(e<n){var a=r[e];var i=a.animatable;var o=a.tweens;var u=o.length-1;var f=o[u];if(u){f=w(o,(function(e){return t<e.end}))[0]||f}var c=l(t-f.start-f.delay,0,f.duration)/f.duration;var v=isNaN(c)?1:f.easing(c);var d=f.to.strings;var p=f.round;var h=[];var m=f.to.numbers.length;var g=void 0;for(var y=0;y<m;y++){var b=void 0;var x=f.to.numbers[y];var M=f.from.numbers[y]||0;if(!f.isPath){b=M+v*(x-M)}else{b=et(f.value,v*x)}if(p){if(!(f.isColor&&y>2)){b=Math.round(b*p)/p}}h.push(b)}var k=d.length;if(!k){g=h[0]}else{g=d[0];for(var T=0;T<k;T++){var O=d[T+1];var A=h[T];if(!isNaN(A)){if(!O){g+=A+" "}else{g+=A+O}}}}lt[a.type](i.target,a.property,g,i.transforms);a.currentValue=g;e++}}function g(t){if(s[t]&&!s.passThrough){s[t](s)}}function y(){if(s.remaining&&s.remaining!==true){s.remaining--}}function b(t){var i=s.duration;var d=s.delay;var p=i-s.endDelay;var b=v(t);s.progress=l(b/i*100,0,100);s.reversePlayback=b<s.currentTime;if(a){h(b)}if(!s.began&&s.currentTime>0){s.began=true;g("begin")}if(!s.loopBegan&&s.currentTime>0){s.loopBegan=true;g("loopBegin")}if(b<=d&&s.currentTime!==0){m(0)}if(b>=p&&s.currentTime!==i||!i){m(i)}if(b>d&&b<p){if(!s.changeBegan){s.changeBegan=true;s.changeCompleted=false;g("changeBegin")}g("change");m(b)}else{if(s.changeBegan){s.changeCompleted=true;s.changeBegan=false;g("changeComplete")}}s.currentTime=l(b,0,i);if(s.began){g("update")}if(t>=i){r=0;y();if(!s.remaining){s.paused=true;if(!s.completed){s.completed=true;g("loopComplete");g("complete");if(!s.passThrough&&"Promise"in window){o();f=u(s)}}}else{e=n;g("loopComplete");s.loopBegan=false;if(s.direction==="alternate"){c()}}}}s.reset=function(){var t=s.direction;s.passThrough=false;s.currentTime=0;s.progress=0;s.paused=true;s.began=false;s.loopBegan=false;s.changeBegan=false;s.completed=false;s.changeCompleted=false;s.reversePlayback=false;s.reversed=t==="reverse";s.remaining=s.loop;a=s.children;i=a.length;for(var e=i;e--;){s.children[e].reset()}if(s.reversed&&s.loop!==true||t==="alternate"&&s.loop===1){s.remaining++}m(s.reversed?s.duration:0)};s.set=function(t,e){ct(t,e);return s};s.tick=function(t){n=t;if(!e){e=n}b((n+(r-e))*Mt.speed)};s.seek=function(t){b(v(t))};s.pause=function(){s.paused=true;d()};s.play=function(){if(!s.paused){return}if(s.completed){s.reset()}s.paused=false;gt.push(s);d();if(!bt){xt()}};s.reverse=function(){c();d()};s.restart=function(){s.reset();s.play()};s.reset();if(s.autoplay){s.play()}return s}function kt(t,e){for(var r=e.length;r--;){if(T(t,e[r].animatable.target)){e.splice(r,1)}}}function Tt(t){var e=nt(t);for(var r=gt.length;r--;){var n=gt[r];var a=n.animations;var i=n.children;kt(e,a);for(var o=i.length;o--;){var u=i[o];var s=u.animations;kt(e,s);if(!s.length&&!u.children.length){i.splice(o,1)}}if(!a.length&&!i.length){n.pause()}}}function Ot(t,e){if(e===void 0)e={};var r=e.direction||"normal";var n=e.easing?b(e.easing):null;var a=e.grid;var i=e.axis;var o=e.from||0;var u=o==="first";var s=o==="center";var f=o==="last";var l=d.arr(t);var c=l?parseFloat(t[0]):parseFloat(t);var v=l?parseFloat(t[1]):0;var p=L(l?t[1]:t)||0;var h=e.start||0+(l?c:0);var m=[];var g=0;return function(t,e,d){if(u){o=0}if(s){o=(d-1)/2}if(f){o=d-1}if(!m.length){for(var y=0;y<d;y++){if(!a){m.push(Math.abs(o-y))}else{var b=!s?o%a[0]:(a[0]-1)/2;var x=!s?Math.floor(o/a[0]):(a[1]-1)/2;var w=y%a[0];var M=Math.floor(y/a[0]);var k=b-w;var T=x-M;var O=Math.sqrt(k*k+T*T);if(i==="x"){O=-k}if(i==="y"){O=-T}m.push(O)}g=Math.max.apply(Math,m)}if(n){m=m.map((function(t){return n(t/g)*g}))}if(r==="reverse"){m=m.map((function(t){return i?t<0?t*-1:-t:Math.abs(g-t)}))}}var A=l?(v-c)/g:c;return h+A*(Math.round(m[e]*100)/100)+p}}function At(t){if(t===void 0)t={};var e=Mt(t);e.duration=0;e.add=function(r,n){var a=gt.indexOf(e);var i=e.children;if(a>-1){gt.splice(a,1)}function o(t){t.passThrough=true}for(var s=0;s<i.length;s++){o(i[s])}var f=E(r,A(u,t));f.targets=f.targets||t.targets;var l=e.duration;f.autoplay=false;f.direction=e.direction;f.timelineOffset=d.und(n)?l:H(n,l);o(e);e.seek(f.timelineOffset);var c=Mt(f);o(c);i.push(c);var v=pt(i,t);e.delay=v.delay;e.endDelay=v.endDelay;e.duration=v.duration;e.seek(0);e.reset();if(e.autoplay){e.play()}return e};return e}Mt.version="3.1.0";Mt.speed=1;Mt.running=gt;Mt.remove=Tt;Mt.get=Z;Mt.set=ct;Mt.convertPx=Y;Mt.path=tt;Mt.setDashoffset=J;Mt.stagger=Ot;Mt.timeline=At;Mt.easing=b;Mt.penner=y;Mt.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t};var Et={lettering:{in:function(t,e,r){Mt.timeline({loop:false}).add({targets:Array.from(t),translateX:[40,0],translateZ:0,opacity:[0,1],easing:"easeOutExpo",duration:r,delay:function(t,r){return e+30*r}})},out:function(t,e,r){Mt.timeline({loop:false}).add({targets:Array.from(t),translateX:[0,-30],opacity:[1,0],easing:"easeInExpo",duration:r,delay:function(t,r){return e+30*r}})}},retro:{in:function(t,e,r){Mt.timeline({loop:false}).add({targets:Array.from(t).reverse(),translateY:[-1,0],opacity:function(t,e){return[0,.1*e]},easing:"easeInExpo",duration:r,delay:function(t,r){return e*r},complete:function(){var e=Array.from(t).shift();setTimeout((function(){Mt.timeline({loop:true,direction:"alternate",duration:900}).add({targets:e,translateY:[-1,-1],translateX:[1,-1],easing:"steps(3)"}).add({targets:e,translateY:[1,1],translateX:[-1,1],easing:"steps(3)"}).add({targets:e,translateY:[1,-1],translateX:[-1,1],easing:"steps(3)"}).add({targets:e,translateY:[-1,1],translateX:[1,1],easing:"steps(3)"})}),600)}}).add({targets:Array.from(t).map((function(t,e){if(e!==0){return t}})).filter(Boolean).reverse(),translateY:[0,-1],opacity:0,easing:"easeInExpo",duration:r,delay:function(t,r){return e*r}})},out:function(t,e,r){Mt.timeline({loop:false}).add({targets:Array.from(t),translateXy:[0,-20],opacity:[0,1],easing:"linear",duration:r,delay:function(t,r){return e*r}})}},bounce:{in:function(t,e,r){Mt.timeline({loop:false}).add({targets:Array.from(t),scale:[4,1],opacity:[0,1],translateZ:0,easing:"easeOutExpo",duration:r,delay:function(t,r){return e*r}})},out:function(t,e,r){Mt.timeline({loop:false}).add({targets:Array.from(t),scale:[1,4],opacity:[1,0],translateZ:0,easing:"easeOutExpo",duration:r,delay:function(t,r){return e*r}})}},jump:{in:function(t,e,r){Mt.timeline({loop:false}).add({targets:Array.from(t),translateY:["1.1em",0],translateZ:0,opacity:[0,1],duration:r,delay:function(t,r){return e*r}})},out:function(t,e,r){Mt.timeline({loop:false}).add({targets:Array.from(t),translateY:[0,"1.1em"],translateZ:0,opacity:[1,0],duration:r,delay:function(t,r){return e*r}})}},flip:{in:function(t,e,r){Mt.timeline({loop:false}).add({targets:Array.from(t),rotateY:[-90,0],opacity:[0,1],duration:r,delay:function(t,r){return e*r}})},out:function(t,e,r){Mt.timeline({loop:false}).add({targets:Array.from(t),rotateY:[0,-90],opacity:[1,0],duration:r,delay:function(t,r){return e*r}})}},rise:{in:function(t,e,r){Mt.timeline({loop:false}).add({targets:Array.from(t),translateY:[100,0],translateZ:0,opacity:[0,1],easing:"easeOutExpo",duration:r,delay:function(t,r){return e+30*r}})},out:function(t,e,r){Mt.timeline({loop:false}).add({targets:Array.from(t),translateY:[0,100],translateZ:0,opacity:[1,0],easing:"easeInExpo",duration:r,delay:function(t,r){return e+30*r}})}}};var It='stellar-animate-text{display:inline-block;position:relative;contain:content}stellar-animate-text .letter{display:inline-block}stellar-animate-text .letter{opacity:0;will-change:opacity transform}stellar-animate-text[method="retro"] .letter:not(:first-of-type){position:absolute;top:calc(var(--iteration) * 7vh);left:0;right:0;color:var(--theme-complement5);z-index:calc(-1 * var(--iteration));mix-blend-mode:color}stellar-animate-text[method="retro"] .letter:first-of-type{z-index:3}stellar-animate-text[method="retro"] .letter:nth-of-type(2){top:0}';var Ct=t("stellar_animate_text",function(){function t(t){e(this,t);this.delay=50;this.duration=1e3;this.method="lettering";this.words=false;this.phrase=false;this.onlyIn=false}t.prototype.componentWillLoad=function(){this.originalText=this.element.textContent;if(this.words){this.incomingHTML=this.originalText.replace(/[^, ]+/g,"<span class='letter' aria-hidden='true'>$&</span>")}else if(this.phrase){this.incomingHTML="<span class='letter' aria-hidden='true'>"+this.originalText+"</span>"}else{this.incomingHTML=this.originalText.replace(/([^\x00-\x80]|\w)/g,"<span class='letter' aria-hidden='true'>$&</span>")}if(this.method==="retro"){this.element.innerHTML=this.incomingHTML.repeat(11)}else{this.element.innerHTML=this.incomingHTML}this.letters=this.element.querySelectorAll(".letter");this.letters.forEach((function(t,e){i.set({"--iteration":e-1<=0?0:e-2},t)}))};t.prototype.in=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){Et[this.method].in(this.letters,this.delay,this.duration);return[2]}))}))};t.prototype.out=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(!this.onlyIn){Et[this.method].out(this.letters,this.delay,this.duration)}return[2]}))}))};t.prototype.render=function(){return r(n,{role:"text",ariaLabel:this.originalText},r("slot",null),r("stellar-intersection",{element:this.element,multiple:true,in:this.in.bind(this),out:this.out.bind(this)}))};Object.defineProperty(t.prototype,"element",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return It},enumerable:true,configurable:true});return t}())}}}));