var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{u(r.next(t))}catch(e){o(e)}}function s(t){try{u(r["throw"](t))}catch(e){o(e)}}function u(t){t.done?n(t.value):i(t.value).then(a,s)}u((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return u([t,e])}}function u(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;i=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(s){a=[6,s];i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-090ab129.system.js","./p-752b9e3e.system.js","./p-fdba8b89.system.js"],(function(t){"use strict";var e,n,r,i;return{setters:[function(t){e=t.r;n=t.h;r=t.g},function(){},function(t){i=t.p}],execute:function(){var o=":host{contain:content}:host,:host ::slotted(*){text-shadow:var(--text-shadow);-webkit-transition:text-shadow 350ms var(--ease) 350ms;transition:text-shadow 350ms var(--ease) 350ms}";var a=t("stellar_long_shadow",function(){function t(t){e(this,t);this.direction="top-left";this.length=100;this.delay=100;this.timing=50;this.active=false}t.prototype.componentWillLoad=function(){this.children=Array.from(this.element.children)};t.prototype.handleChanges=function(){this.in()};t.prototype.getShadowCSS=function(){var t=this.direction.includes("top");var e=this.direction.includes("left");var n=Array(this.length).fill("").map((function(n,r){var i=r*(e?-1:1);var o=r*(t?-1:1);return i+"px "+o+"px var(--theme-complement7)"}));return n.join()};t.prototype.out=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){i.set({"--text-shadow":"none"},this.element);return[2]}))}))};t.prototype.in=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){i.set({"--text-shadow":this.getShadowCSS()},this.element);return[2]}))}))};t.prototype.render=function(){return n("stellar-intersection",{element:this.element,multiple:true,in:this.in.bind(this),out:this.out.bind(this)},n("slot",null))};Object.defineProperty(t.prototype,"element",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{length:["handleChanges"],direction:["handleChanges"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return o},enumerable:true,configurable:true});return t}())}}}));