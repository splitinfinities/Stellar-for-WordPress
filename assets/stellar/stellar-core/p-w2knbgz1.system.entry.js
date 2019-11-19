var __awaiter=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))(function(i,a){function s(t){try{c(n.next(t))}catch(t){a(t)}}function o(t){try{c(n["throw"](t))}catch(t){a(t)}}function c(t){t.done?i(t.value):new r(function(e){e(t.value)}).then(s,o)}c((n=n.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(t){return function(e){return c([t,e])}}function c(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(a=s[0]&2?i["return"]:s[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;if(i=0,a)s=[s[0]&2,a.value];switch(s[0]){case 0:case 1:a=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;i=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){r.label=s[1];break}if(s[0]===6&&r.label<a[1]){r.label=a[1];a=s;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(s);break}if(a[2])r.ops.pop();r.trys.pop();continue}s=e.call(t,r)}catch(t){s=[6,t];i=0}finally{n=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-6f2a0351.system.js","./p-c6b679e5.system.js","./p-66b115bd.system.js","./p-4ed6ec38.system.js","./p-659cc05e.system.js","./p-ade40a6b.system.js"],function(t,e){"use strict";var r,n,i,a,s,o,c,h,l;return{setters:[function(t){r=t.d;n=t.f;i=t.g;a=t.i},function(t){s=t.a;o=t.c},function(t){c=t.a},function(t){h=t.a;l=t.b},function(){},function(){}],execute:function(){var e=function(){function t(t){r(this,t);this.width=600;this.height=300;this.block=false;this.loading=false;this.icon=false}t.prototype.componentWillLoad=function(){var t=this;if(this.block);else{c.set({"--width":this.width+"px","--height":this.height+"px"},this.element)}this.observer=new IntersectionObserver(function(e){e.forEach(function(e){if(e.intersectionRatio>0){t.element.classList.add("visible")}else{t.element.classList.remove("visible")}})});this.observer.observe(this.element)};t.prototype.render=function(){return[this.loading&&this.icon&&n("stellar-asset",{name:"spinning-bubbles",color:"gray25"}),n("svg",{width:this.width,height:this.height},n("rect",{width:this.width,height:this.height}))]};Object.defineProperty(t.prototype,"element",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"skeleton-img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;display:block;position:relative;margin-bottom:1rem;border-radius:4px;overflow:hidden;max-width:var(--width);max-height:var(--height)}skeleton-img svg{display:block;width:100%;height:auto;overflow:hidden}skeleton-img svg rect{fill:var(--theme-base5)}skeleton-img[loading]{position:relative}skeleton-img[loading]:before{content:\"\";display:block;position:absolute;top:0;right:0;bottom:0;left:-100%;background-color:var(--theme-base5);background-image:linear-gradient(45deg,var(--theme-base5),var(--theme-base5) 20%,var(--theme-base3) 40%,var(--theme-base4) 61%,var(--theme-base5) 80%,var(--theme-base5));width:300%;height:100%;-webkit-transform:translateX(calc(var(--width) * -1.75));transform:translateX(calc(var(--width) * -1.75))}skeleton-img[loading].visible:before{-webkit-animation:shimmer 1.25s linear 0s infinite forwards;animation:shimmer 1.25s linear 0s infinite forwards}skeleton-img stellar-asset{position:absolute;top:50%;right:50%;bottom:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:var(--icon-width);height:var(--icon-height)}\@-webkit-keyframes shimmer{0%{opacity:0;-webkit-transform:translateX(calc(var(--width) * -1.75));transform:translateX(calc(var(--width) * -1.75))}10%{opacity:1}90%{opacity:1}to{opacity:0;-webkit-transform:translateX(calc(var(--width) * 1.75));transform:translateX(calc(var(--width) * 1.75))}}\@keyframes shimmer{0%{opacity:0;-webkit-transform:translateX(calc(var(--width) * -1.75));transform:translateX(calc(var(--width) * -1.75))}10%{opacity:1}90%{opacity:1}to{opacity:0;-webkit-transform:translateX(calc(var(--width) * 1.75));transform:translateX(calc(var(--width) * 1.75))}}"},enumerable:true,configurable:true});return t}();t("skeleton_img",e);var u=function(){function t(t){var e=this;r(this,t);this.slender=false;this.max=100;this.indeterminate=false;this.editable=false;this.noease=false;this.rounded=false;this.value=0;this.secondary=0;this.blurable=true;this.wrapper="stellar-blur";this.blur=0;this.ease=h({end:20,start:-1,duration:200,tick:function(t){e.blur=t.value},complete:function(){e.blur=0;e.ease.stop()}});this.change=a(this,"change",7)}t.prototype.componentWillLoad=function(){if(!this.blurable){this.wrapper="div"}};t.prototype.observeValue=function(){if(!this.indeterminate&&this.blurable){this.ease.start()}};t.prototype.handleClick=function(t){if(this.editable){var e=this.element.getBoundingClientRect();var r=t.pageX-e.left;var n=e.width;var i=r/n*this.max;var a=Math.round(i*100)/100;if(this.rounded){a=Math.ceil(a)}this.value=a;this.change.emit({value:this.value})}};t.prototype.progress=function(t){if(t){var e=this.secondary/this.max*100;e=e<100?e:100;e=e>0?e:0;return e}else{var e=this.value/this.max*100;e=e<100?e:100;e=e>0?e:0;return e}};t.prototype.render=function(){var t=this;if(this.indeterminate){return n("svg",{viewBox:"0 0 100 100"},n("circle",{cx:"50",cy:"50",r:"20","stroke-width":"4",fill:"none","stroke-linecap":"round"}))}return n(this.wrapper,{class:"progress",horizontal:this.blur,onClick:function(e){t.handleClick(e)}},n("div",{class:"status",style:{transform:"translate("+this.progress()+"%, 0)"}}),this.secondary?n("div",{class:"secondary",style:{transform:"translate("+this.progress(true)+"%, 0)"}}):"")};Object.defineProperty(t.prototype,"element",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{value:["observeValue"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;position:relative;overflow:hidden;--border-radius:0.3rem;--time:124;--negative-time:-124}:host .blur-content{display:block;height:100%}:host([editable]){cursor:pointer}:host .progress{display:block;position:relative;-webkit-transition:all .25s var(--ease) 0ms;transition:all .25s var(--ease) 0ms;background:var(--gray0);width:100%;height:.6rem;border-radius:var(--border-radius);overflow:hidden}:host([editable]:hover) .progress{height:2.4rem}:host .secondary,:host .status{position:absolute;top:0;right:0;bottom:0;left:-100%;-webkit-transition:all .35s var(--ease,ease-in-out) 0ms;transition:all .35s var(--ease,ease-in-out) 0ms;background:var(--theme-base5,var(--gray5));width:100%;z-index:2}:host .secondary{background:var(--theme-base3,var(--gray3));z-index:1}:host([slender]) .progress{border:0;height:.2rem}:host([slender][editable]:hover) .progress{height:.4rem}:host([noease]) .progress,:host([noease]) .secondary,:host([noease]) .status{-webkit-transition:none!important;transition:none!important}:host([indeterminate]){height:100px;width:100px}:host([indeterminate]) svg{-webkit-transform:rotate(0deg);transform:rotate(0deg);stroke:var(--theme-base5);-webkit-animation:rotate var(--ease) 9.2s infinite;animation:rotate var(--ease) 9.2s infinite}:host([indeterminate]) circle{stroke-dasharray:var(--time);stroke-dashoffset:var(--time);-webkit-animation:load var(--ease) 2.3s infinite;animation:load var(--ease) 2.3s infinite}:host-context(.dark-mode):host .progress{background:var(--theme-base9)}:host-context(.dark-mode):host .secondary{background:var(--theme-base7,var(--gray7));z-index:1}:host-context(.dark-mode):host circle{-webkit-animation:load-dark var(--ease) 2.3s infinite;animation:load-dark var(--ease) 2.3s infinite}\@-webkit-keyframes load{0%{stroke:var(--theme-complement7)}50%{stroke-dashoffset:0;stroke:var(--theme-base5)}to{stroke-dashoffset:var(--negative-time);stroke:var(--theme-base3)}}\@keyframes load{0%{stroke:var(--theme-complement7)}50%{stroke-dashoffset:0;stroke:var(--theme-base5)}to{stroke-dashoffset:var(--negative-time);stroke:var(--theme-base3)}}\@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}75%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}75%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@-webkit-keyframes load-dark{0%{stroke:var(--theme-complement5)}50%{stroke-dashoffset:0;stroke:var(--theme-base5)}75%{stroke:var(--theme-base7)}to{stroke-dashoffset:var(--negative-time);stroke:var(--theme-complement7)}}\@keyframes load-dark{0%{stroke:var(--theme-complement5)}50%{stroke-dashoffset:0;stroke:var(--theme-base5)}75%{stroke:var(--theme-base7)}to{stroke-dashoffset:var(--negative-time);stroke:var(--theme-complement7)}}"},enumerable:true,configurable:true});return t}();t("stellar_progress",u);var f=function(t){for(var e=0;e<t.analyser.frequencyBinCount;e++){var r=t.freqs[e];var n=r/256;var i=t.height*n*.75;var a=t.height-i+25;var s=t.width/t.analyser.frequencyBinCount+24;t.canvasCTX.fillStyle="hsl("+t._color[0]+", "+t._color[1]+"%, "+n*100+"%)";t.canvasCTX.fillRect(e*s,a,s,i)}};var v=4;var d=4;var p=70;var y=function(t){var e=t.freqs;var r=t.canvas;var n=t.canvasCTX;var i=e.length-~~(e.length/p)*50;var a=t.size;var s=a;var o=~~(i/p);var c=r.width/p;var h=d;var l=r.height-v*2;for(var u=0;u<i;u+=o){var f=e[u]/s;var y=f*l;var g=l/2-y/2;n.beginPath();n.shadowColor="rgba(24, 24, 24, 0.25)";n.shadowBlur=8;n.shadowOffsetX=0;n.shadowOffsetY=2;n.strokeStyle="hsl("+t._color[0]+", "+t._color[1]+"%, "+t._color[2]+"%)";n.lineWidth=d;n.lineCap="round";n.moveTo(h,g);n.lineTo(h,g+y);n.stroke();h+=c}};function g(t){var e=t.reduce(function(t,e){return t+e});return e/t.length}var b={BAR:{maxHeight:250},CIRCLE:{radius:100,width:15}};var m=function(t){var e=t.analyser.frequencyBinCount;var r=g(t.freqs);var n=r<b.CIRCLE.width?b.CIRCLE.width:r;var i=0;var a=t.width/2;var s=t.height/2;var o=b.CIRCLE.radius*2*Math.PI;var c=o/e;t.canvasCTX.beginPath();t.canvasCTX.arc(a,s,b.CIRCLE.radius,0,Math.PI*2);t.canvasCTX.lineWidth=n;t.canvasCTX.strokeStyle="hsl("+t._color[0]+", "+t._color[1]+"%, "+t._color[2]+"%)";t.canvasCTX.closePath();t.canvasCTX.stroke();t.canvasCTX.save();t.canvasCTX.translate(a,s);for(var h=0;h<t.analyser.frequencyBinCount;h++){var l=t.freqs[h];var u=l>b.BAR.maxHeight?b.BAR.maxHeight:l;t.canvasCTX.rotate(i);t.canvasCTX.fillStyle="hsl("+t._color[0]+", "+t._color[1]+"%, "+t._color[2]+"%)";t.canvasCTX.fillRect(b.CIRCLE.radius+100,c*-1/2,u,c);i=i/(e+c)%360+1}};var w=function(t){for(var e=0;e<t.analyser.frequencyBinCount;e++){var r=t.times[e];var n=r/512;var i=t.height*n*1.25;var a=t.height-i;var s=t.width/t.analyser.frequencyBinCount+16;t.canvasCTX.fillStyle="hsl("+t._color[0]+", "+t._color[1]+"%, "+t._color[2]+"%)";t.canvasCTX.fillRect(e*s,a,24,24)}};var C=s(function(t){(function(){t.exports=function(t,e,r){var n,i,a,s,o,c;t/=255;e/=255;r/=255;s=Math.max(t,e,r);o=Math.min(t,e,r);i=0;c=0;a=(s+o)/2;if(s===o){i=c=0}else{n=s-o;c=a>.5?n/(2-s-o):n/(s+o);switch(s){case t:i=(e-r)/n+(e<r?6:0);break;case e:i=(r-t)/n+2;break;case r:i=(t-e)/n+4}i/=6}i=Math.ceil(i*360);c=Math.ceil(c*100)+"%";a=Math.ceil(a*100)+"%";return[i,c,a]}}).call(o)});var _=function t(e){if(e.charAt&&e.charAt(0)==="#"){e=T(e)}if(e.length===3){e=X(e)}var r=parseInt(e,16);var n=r>>16&255;var i=r>>8&255;var a=r&255;return[n,i,a]};function T(t){var e=t.split("");e.shift();return e.join("")}function X(t){return t.split("").reduce(function(t,e){return t.concat([e,e])},[]).join("")}var k=function(t){var e=C.apply(C,_(t));return[e[0],parseInt(e[1],10),parseInt(e[2],10)]};var x=function(){function t(t){var e=this;r(this,t);this.for="web_audio";this.type="wave";this.smoothing=.7;this.size=1024;this.color="white";this.width=1024;this.height=1024;this.clearBackground=function(){e.canvasCTX.clearRect(0,0,e.canvas.width,e.canvas.height);e.canvasCTX.fillStyle="transparent";e.canvasCTX.fillRect(0,0,e.canvas.width,e.canvas.height)}}t.prototype.componentWillLoad=function(){this.handleColorChange()};t.prototype.componentDidLoad=function(){this.canvas=this.element.shadowRoot.querySelector("canvas")};t.prototype.handleColorChange=function(){if(["white","black","black-alt"].includes(this.color)){this._color=k(l[this.color])}else{this._color=k(l[this.color][5])}};t.prototype.connect=function(t,e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(r){this.context=t;this.analyser=this.context.createAnalyser();if(e){this.analyser.connect(e)}this.freqs=new Uint8Array(this.analyser.frequencyBinCount);this.times=new Uint8Array(this.analyser.frequencyBinCount);this.canvasCTX=this.canvas.getContext("2d");requestAnimationFrame(this.draw.bind(this));return[2,this]})})};t.prototype.draw=function(){this.analyser.smoothingTimeConstant=this.smoothing;this.analyser.fftSize=this.size;this.analyser.getByteFrequencyData(this.freqs);this.analyser.getByteTimeDomainData(this.times);this.canvas.width=this.width;this.canvas.height=this.height;this.clearBackground();if(this.type==="wave"){w(this)}else if(this.type==="bars"){f(this)}else if(this.type==="bars2"){y(this)}else if(this.type==="circle"){m(this)}requestAnimationFrame(this.draw.bind(this))};t.prototype.getFrequencyValue=function(t){var e=this.context.sampleRate/2;var r=Math.round(t/e*this.freqs.length);return this.freqs[r]};t.prototype.render=function(){return n("canvas",{id:"canvas"})};Object.defineProperty(t.prototype,"element",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{color:["handleColorChange"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host,:host canvas{display:block}:host canvas{width:100%;height:100%}"},enumerable:true,configurable:true});return t}();t("web_audio_visualizer",x)}}});