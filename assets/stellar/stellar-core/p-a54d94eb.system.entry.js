var __awaiter=this&&this.__awaiter||function(t,n,e,i){function r(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,a){function o(t){try{u(i.next(t))}catch(n){a(n)}}function s(t){try{u(i["throw"](t))}catch(n){a(n)}}function u(t){t.done?e(t.value):r(t.value).then(o,s)}u((i=i.apply(t,n||[])).next())}))};var __generator=this&&this.__generator||function(t,n){var e={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},i,r,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(n){return u([t,n])}}function u(o){if(i)throw new TypeError("Generator is already executing.");while(e)try{if(i=1,r&&(a=o[0]&2?r["return"]:o[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;if(r=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:e.label++;return{value:o[1],done:false};case 5:e.label++;r=o[1];o=[0];continue;case 7:o=e.ops.pop();e.trys.pop();continue;default:if(!(a=e.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){e=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){e.label=o[1];break}if(o[0]===6&&e.label<a[1]){e.label=a[1];a=o;break}if(a&&e.label<a[2]){e.label=a[2];e.ops.push(o);break}if(a[2])e.ops.pop();e.trys.pop();continue}o=n.call(t,e)}catch(s){o=[6,s];r=0}finally{i=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-43f53497.system.js","./p-752b9e3e.system.js","./p-fdba8b89.system.js","./p-5c67086e.system.js"],(function(t){"use strict";var n,e,i,r,a;return{setters:[function(t){n=t.r;e=t.h;i=t.d},function(){},function(t){r=t.p},function(t){a=t.d}],execute:function(){var o=":host{contain:content}:host,:host stellar-intersection{display:contents;--animation:fadeIn}:host ::slotted(*){opacity:0}:host([active]) ::slotted(*){-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:var(--ease);animation-timing-function:var(--ease);-webkit-animation-name:var(--animation);animation-name:var(--animation)}";var s=t("stellar_reveal_list",function(){function t(t){n(this,t);this.animation="fadeInUp";this.outAnimation="fadeOut";this.delay=100;this.timing=20;this.active=false}t.prototype.componentWillLoad=function(){this.children=Array.from(this.element.children)};t.prototype.calculateTiming=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(n){switch(n.label){case 0:t=1e3+this.children.length*this.delay;return[4,a(t)];case 1:n.sent();return[2]}}))}))};t.prototype.out=function(){return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(n){switch(n.label){case 0:r.set({"--animation":this.outAnimation},this.element);this.children.forEach((function(n,e){n.style.setProperty("animation-delay",t.delay*e+"ms");n.style.setProperty("animation-timing",t.timing+"ms")}));return[4,this.calculateTiming()];case 1:return[2,n.sent()]}}))}))};t.prototype.in=function(){return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(n){switch(n.label){case 0:this.active=true;r.set({"--animation":this.animation},this.element);this.children.forEach((function(n,e){n.style.setProperty("animation-delay",t.delay*e+"ms");n.style.setProperty("animation-timing",t.timing+"ms")}));return[4,this.calculateTiming()];case 1:return[2,n.sent()]}}))}))};t.prototype.render=function(){return[e("stellar-intersection",{element:this.element.parentElement,in:this.in.bind(this)}),e("slot",null)]};Object.defineProperty(t.prototype,"element",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return o},enumerable:true,configurable:true});return t}())}}}));