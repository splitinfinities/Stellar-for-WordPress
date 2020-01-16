var __awaiter=this&&this.__awaiter||function(e,t,r,a){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,n){function s(e){try{h(a.next(e))}catch(t){n(t)}}function o(e){try{h(a["throw"](e))}catch(t){n(t)}}function h(e){e.done?r(e.value):i(e.value).then(s,o)}h((a=a.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},a,i,n,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return h([e,t])}}function h(s){if(a)throw new TypeError("Generator is already executing.");while(r)try{if(a=1,i&&(n=s[0]&2?i["return"]:s[0]?i["throw"]||((n=i["return"])&&n.call(i),0):i.next)&&!(n=n.call(i,s[1])).done)return n;if(i=0,n)s=[s[0]&2,n.value];switch(s[0]){case 0:case 1:n=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;i=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(n=r.trys,n=n.length>0&&n[n.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!n||s[1]>n[0]&&s[1]<n[3])){r.label=s[1];break}if(s[0]===6&&r.label<n[1]){r.label=n[1];n=s;break}if(n&&r.label<n[2]){r.label=n[2];r.ops.push(s);break}if(n[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(o){s=[6,o];i=0}finally{a=n=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-090ab129.system.js","./p-8d6d3b24.system.js","./p-752b9e3e.system.js","./p-fdba8b89.system.js","./p-bd9c4de0.system.js","./p-49be6f75.system.js","./p-c4dffc26.system.js","./p-4a67ba29.system.js"],(function(e){"use strict";var t,r,a,i,n,s,o,h,l,c;return{setters:[function(e){t=e.r;r=e.h;a=e.H;i=e.g;n=e.c},function(e){s=e.b;o=e.c},function(e){h=e.c;l=e.a},function(){},function(){},function(){},function(){},function(e){c=e.T}],execute:function(){var u='skeleton-img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;display:block;position:relative;margin-bottom:1rem;border-radius:4px;overflow:hidden;max-width:var(--width);max-height:var(--height);contain:content}skeleton-img svg{display:block;width:100%;height:auto;overflow:hidden}skeleton-img svg rect{fill:var(--theme-base5)}skeleton-img[loading]{position:relative}skeleton-img[loading]::before{content:"";display:block;position:absolute;top:0;right:0;bottom:0;left:-100%;background-color:var(--theme-base5);background-image:linear-gradient(45deg, var(--theme-base5) 0%, var(--theme-base5) 20%, var(--theme-base3) 40%, var(--theme-base4) 61%, var(--theme-base5) 80%, var(--theme-base5) 100%);width:300%;height:100%;-webkit-transform:translateX(calc(var(--width) * -1.75));transform:translateX(calc(var(--width) * -1.75))}skeleton-img[loading].visible::before{-webkit-animation:1.25s linear 0s shimmer infinite forwards;animation:1.25s linear 0s shimmer infinite forwards}skeleton-img stellar-asset{position:absolute;top:50%;right:50%;bottom:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);width:var(--icon-width);height:var(--icon-height)}@-webkit-keyframes shimmer{0%{opacity:0;-webkit-transform:translateX(calc(var(--width) * -1.75));transform:translateX(calc(var(--width) * -1.75))}10%{opacity:1}90%{opacity:1}100%{opacity:0;-webkit-transform:translateX(calc(var(--width) * 1.75));transform:translateX(calc(var(--width) * 1.75))}}@keyframes shimmer{0%{opacity:0;-webkit-transform:translateX(calc(var(--width) * -1.75));transform:translateX(calc(var(--width) * -1.75))}10%{opacity:1}90%{opacity:1}100%{opacity:0;-webkit-transform:translateX(calc(var(--width) * 1.75));transform:translateX(calc(var(--width) * 1.75))}}';var f=e("skeleton_img",function(){function e(e){t(this,e);this.width=600;this.height=300;this.block=false;this.loading=false;this.icon=false}e.prototype.in=function(){this.element.classList.add("visible")};e.prototype.out=function(){this.element.classList.remove("visible")};e.prototype.render=function(){return r(a,{style:!this.block&&{"--width":this.width+"px","--height":this.height+"px"}},this.loading&&this.icon&&r("stellar-asset",{name:"spinning-bubbles",color:"gray25"}),r("svg",{width:this.width,height:this.height},r("rect",{width:this.width,height:this.height})),r("stellar-intersection",{element:this.element,multiple:true,in:this.in.bind(this),out:this.out.bind(this)}))};Object.defineProperty(e.prototype,"element",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return u},enumerable:true,configurable:true});return e}());var d=":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;display:block;position:relative;overflow:hidden;--border-radius:0.3rem;--time:124;--negative-time:-124}:host .blur-content{display:block;height:100%}:host([editable]){cursor:pointer}:host .progress{display:block;position:relative;-webkit-transition:all 0.25s var(--ease) 0ms;transition:all 0.25s var(--ease) 0ms;background:var(--gray0);width:100%;height:0.6rem;border-radius:var(--border-radius);overflow:hidden}:host([editable]:hover) .progress{height:2.4rem}:host .status,:host .secondary{position:absolute;top:0;right:0;bottom:0;left:-100%;-webkit-transition:all 0.35s var(--ease, ease-in-out) 0ms;transition:all 0.35s var(--ease, ease-in-out) 0ms;background:var(--theme-base5, var(--gray5));width:100%;z-index:2}:host .secondary{background:var(--theme-base3, var(--gray3));z-index:1}:host([slender]) .progress{border:0;height:0.2rem}:host([slender][editable]:hover) .progress{height:0.4rem}:host([noease]) .progress,:host([noease]) .status,:host([noease]) .secondary{-webkit-transition:none !important;transition:none !important}:host([indeterminate]){height:100px;width:100px}:host([indeterminate]) svg{-webkit-transform:rotate(0deg);transform:rotate(0deg);stroke:var(--theme-base5);-webkit-animation:rotate var(--ease) 9.2s infinite;animation:rotate var(--ease) 9.2s infinite}:host([indeterminate]) circle{stroke-dasharray:var(--time);stroke-dashoffset:var(--time);-webkit-animation:load var(--ease) 2.3s infinite;animation:load var(--ease) 2.3s infinite}:host([dark]) .progress{background:var(--theme-base9)}:host([dark]) .secondary{background:var(--theme-base7, var(--gray7));z-index:1}:host([dark]) circle{-webkit-animation:load-dark var(--ease) 2.3s infinite;animation:load-dark var(--ease) 2.3s infinite}@-webkit-keyframes load{0%{stroke:var(--theme-complement7)}50%{stroke-dashoffset:0;stroke:var(--theme-base5)}100%{stroke-dashoffset:var(--negative-time);stroke:var(--theme-base3)}}@keyframes load{0%{stroke:var(--theme-complement7)}50%{stroke-dashoffset:0;stroke:var(--theme-base5)}100%{stroke-dashoffset:var(--negative-time);stroke:var(--theme-base3)}}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}75%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}75%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes load-dark{0%{stroke:var(--theme-complement5)}50%{stroke-dashoffset:0;stroke:var(--theme-base5)}75%{stroke:var(--theme-base7)}100%{stroke-dashoffset:var(--negative-time);stroke:var(--theme-complement7)}}@keyframes load-dark{0%{stroke:var(--theme-complement5)}50%{stroke-dashoffset:0;stroke:var(--theme-base5)}75%{stroke:var(--theme-base7)}100%{stroke-dashoffset:var(--negative-time);stroke:var(--theme-complement7)}}";var v=e("stellar_progress",function(){function e(e){var r=this;t(this,e);this.slender=false;this.max=100;this.indeterminate=false;this.dark=false;this.editable=false;this.noease=false;this.rounded=false;this.value=0;this.secondary=0;this.blurable=true;this.wrapper="stellar-blur";this.blur=0;this.ease=s({end:20,start:-1,duration:200,tick:function(e){r.blur=e.value},complete:function(){r.blur=0;r.ease.stop()}});this.update=n(this,"update",7)}e.prototype.componentWillLoad=function(){if(!this.blurable){this.wrapper="div"}};e.prototype.observeValue=function(){if(!this.indeterminate&&this.blurable){this.ease.start()}};e.prototype.handleClick=function(e){if(this.editable){var t=this.element.getBoundingClientRect();var r=e.pageX-t.left;var a=t.width;var i=r/a*this.max;var n=Math.round(i*100)/100;if(this.rounded){n=Math.ceil(n)}this.value=n;this.update.emit({value:this.value})}};e.prototype.progress=function(e){if(e){var t=this.secondary/this.max*100;t=t<100?t:100;t=t>0?t:0;return t}else{var t=this.value/this.max*100;t=t<100?t:100;t=t>0?t:0;return t}};e.prototype.render=function(){var e=this;if(this.indeterminate){return r("svg",{viewBox:"0 0 100 100"},r("circle",{cx:"50",cy:"50",r:"20","stroke-width":"4",fill:"none","stroke-linecap":"round"}))}return r(this.wrapper,{class:"progress",horizontal:this.blur,onClick:function(t){e.handleClick(t)}},r("div",{class:"status",style:{transform:"translate("+this.progress()+"%, 0)"}}),this.secondary?r("div",{class:"secondary",style:{transform:"translate("+this.progress(true)+"%, 0)"}}):"")};Object.defineProperty(e.prototype,"element",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{value:["observeValue"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return d},enumerable:true,configurable:true});return e}());c.injectProps(v,["dark"]);var m=function(e){for(var t=0;t<e.analyser.frequencyBinCount;t++){var r=e.freqs[t];var a=r/256;var i=e.height*a*.75;var n=e.height-i+25;var s=e.width/e.analyser.frequencyBinCount+24;e.canvasCTX.fillStyle="hsl("+e._color[0]+", "+e._color[1]+"%, "+a*100+"%)";e.canvasCTX.fillRect(t*s,n,s,i)}};var b=4;var g=4;var p=70;var y=function(e){var t=e.freqs;var r=e.canvas;var a=e.canvasCTX;var i=t.length-~~(t.length/p)*50;var n=e.size;var s=n;var o=~~(i/p);var h=r.width/p;var l=g;var c=r.height-b*2;for(var u=0;u<i;u+=o){var f=t[u]/s;var d=f*c;var v=c/2-d/2;a.beginPath();a.shadowColor="rgba(24, 24, 24, 0.25)";a.shadowBlur=8;a.shadowOffsetX=0;a.shadowOffsetY=2;a.strokeStyle="hsl("+e._color[0]+", "+e._color[1]+"%, "+e._color[2]+"%)";a.lineWidth=g;a.lineCap="round";a.moveTo(l,v);a.lineTo(l,v+d);a.stroke();l+=h}};function k(e){var t=e.reduce((function(e,t){return e+t}));return t/e.length}var w={BAR:{maxHeight:250},CIRCLE:{radius:100,width:15}};var C=function(e){var t=e.analyser.frequencyBinCount;var r=k(e.freqs);var a=r<w.CIRCLE.width?w.CIRCLE.width:r;var i=0;var n=e.width/2;var s=e.height/2;var o=w.CIRCLE.radius*2*Math.PI;var h=o/t;e.canvasCTX.beginPath();e.canvasCTX.arc(n,s,w.CIRCLE.radius,0,Math.PI*2);e.canvasCTX.lineWidth=a;e.canvasCTX.strokeStyle="hsl("+e._color[0]+", "+e._color[1]+"%, "+e._color[2]+"%)";e.canvasCTX.closePath();e.canvasCTX.stroke();e.canvasCTX.save();e.canvasCTX.translate(n,s);for(var l=0;l<e.analyser.frequencyBinCount;l++){var c=e.freqs[l];var u=c>w.BAR.maxHeight?w.BAR.maxHeight:c;e.canvasCTX.rotate(i);e.canvasCTX.fillStyle="hsl("+e._color[0]+", "+e._color[1]+"%, "+e._color[2]+"%)";e.canvasCTX.fillRect(w.CIRCLE.radius+100,h*-1/2,u,h);i=i/(t+h)%360+1}};var x=function(e){for(var t=0;t<e.analyser.frequencyBinCount;t++){var r=e.times[t];var a=r/512;var i=e.height*a*1.25;var n=e.height-i;var s=e.width/e.analyser.frequencyBinCount+16;e.canvasCTX.fillStyle="hsl("+e._color[0]+", "+e._color[1]+"%, "+e._color[2]+"%)";e.canvasCTX.fillRect(t*s,n,24,24)}};var _=h((function(e){(function(){e.exports=function(e,t,r){var a,i,n,s,o,h;e/=255;t/=255;r/=255;s=Math.max(e,t,r);o=Math.min(e,t,r);i=0;h=0;n=(s+o)/2;if(s===o){i=h=0}else{a=s-o;h=n>.5?a/(2-s-o):a/(s+o);switch(s){case e:i=(t-r)/a+(t<r?6:0);break;case t:i=(r-e)/a+2;break;case r:i=(e-t)/a+4}i/=6}i=Math.ceil(i*360);h=Math.ceil(h*100)+"%";n=Math.ceil(n*100)+"%";return[i,h,n]}}).call(l)}));var X=function e(t){if(t.charAt&&t.charAt(0)==="#"){t=T(t)}if(t.length===3){t=q(t)}var r=parseInt(t,16);var a=r>>16&255;var i=r>>8&255;var n=r&255;return[a,i,n]};function T(e){var t=e.split("");t.shift();return t.join("")}function q(e){return e.split("").reduce((function(e,t){return e.concat([t,t])}),[]).join("")}var j=function(e){var t=_.apply(_,X(e));return[t[0],parseInt(t[1],10),parseInt(t[2],10)]};var B=":host{display:block}:host canvas{display:block;width:100%;height:100%}";var R=e("web_audio_visualizer",function(){function e(e){var r=this;t(this,e);this.for="web_audio";this.type="wave";this.smoothing=.7;this.size=1024;this.color="white";this.width=1024;this.height=1024;this.clearBackground=function(){r.canvasCTX.clearRect(0,0,r.canvas.width,r.canvas.height);r.canvasCTX.fillStyle="transparent";r.canvasCTX.fillRect(0,0,r.canvas.width,r.canvas.height)}}e.prototype.componentWillLoad=function(){this.handleColorChange()};e.prototype.componentDidLoad=function(){this.canvas=this.element.shadowRoot.querySelector("canvas")};e.prototype.handleColorChange=function(){if(["white","black","black-alt"].includes(this.color)){this._color=j(o[this.color])}else{this._color=j(o[this.color][5])}};e.prototype.connect=function(e,t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){this.context=e;this.analyser=this.context.createAnalyser();if(t){this.analyser.connect(t)}this.freqs=new Uint8Array(this.analyser.frequencyBinCount);this.times=new Uint8Array(this.analyser.frequencyBinCount);this.canvasCTX=this.canvas.getContext("2d");requestAnimationFrame(this.draw.bind(this));return[2,this]}))}))};e.prototype.draw=function(){this.analyser.smoothingTimeConstant=this.smoothing;this.analyser.fftSize=this.size;this.analyser.getByteFrequencyData(this.freqs);this.analyser.getByteTimeDomainData(this.times);this.canvas.width=this.width;this.canvas.height=this.height;this.clearBackground();if(this.type==="wave"){x(this)}else if(this.type==="bars"){m(this)}else if(this.type==="bars2"){y(this)}else if(this.type==="circle"){C(this)}requestAnimationFrame(this.draw.bind(this))};e.prototype.getFrequencyValue=function(e){var t=this.context.sampleRate/2;var r=Math.round(e/t*this.freqs.length);return this.freqs[r]};e.prototype.render=function(){return r("canvas",{id:"canvas"})};Object.defineProperty(e.prototype,"element",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{color:["handleColorChange"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return B},enumerable:true,configurable:true});return e}())}}}));