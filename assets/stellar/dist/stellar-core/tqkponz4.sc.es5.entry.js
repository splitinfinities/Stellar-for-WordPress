var __awaiter=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{s(r.next(t))}catch(t){o(t)}}function l(t){try{s(r.throw(t))}catch(t){o(t)}}function s(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,l)}s((r=r.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};StellarCore.loadBundle("tqkponz4",["exports","./chunk-a218a313.js","./chunk-841f0e81.js","./chunk-a19d0333.js"],function(t,e,n,r){var i=window.StellarCore.h,o=function(){function t(){this.animation="fadeInUp",this.outAnimation="fadeOut",this.delay=100,this.timing=50,this.active=!1}return t.prototype.componentWillLoad=function(){this.children=Array.from(this.element.children)},t.prototype.componentDidLoad=function(){this.addIntersectionObserver()},t.prototype.addIntersectionObserver=function(){var t=this;"IntersectionObserver"in window?(this.io=new IntersectionObserver(function(e){e[0].isIntersecting&&(setTimeout(function(){t.active=!0,t.in()},350),t.removeIntersectionObserver())},{rootMargin:"50%",threshold:[0]}),this.io.observe(this.element)):setTimeout(function(){t.in()},300)},t.prototype.removeIntersectionObserver=function(){this.io&&(this.io.disconnect(),this.io=null)},t.prototype.calculateTiming=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,r.delay(1e3+this.children.length*this.delay)];case 1:return t.sent(),[2]}})})},t.prototype.out=function(){return __awaiter(this,void 0,void 0,function(){var t=this;return __generator(this,function(e){switch(e.label){case 0:return n.properties.set({"--animation":this.outAnimation},this.element),this.children.forEach(function(e,n){e.style.setProperty("animation-delay",t.delay*n+"ms"),e.style.setProperty("animation-timing",t.timing+"ms")}),[4,this.calculateTiming()];case 1:return[2,e.sent()]}})})},t.prototype.in=function(){return __awaiter(this,void 0,void 0,function(){var t=this;return __generator(this,function(e){switch(e.label){case 0:return n.properties.set({"--animation":this.animation},this.element),this.children.forEach(function(e,n){e.style.setProperty("animation-delay",t.delay*n+"ms"),e.style.setProperty("animation-timing",t.timing+"ms")}),[4,this.calculateTiming()];case 1:return[2,e.sent()]}})})},t.prototype.render=function(){return i("slot",null)},Object.defineProperty(t,"is",{get:function(){return"stellar-reveal"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{active:{type:Boolean,attr:"active",reflectToAttr:!0,mutable:!0},animation:{type:String,attr:"animation",reflectToAttr:!0},children:{state:!0},delay:{type:Number,attr:"delay",reflectToAttr:!0},element:{elementRef:!0},in:{method:!0},io:{state:!0},out:{method:!0},outAnimation:{type:String,attr:"out-animation",reflectToAttr:!0},timing:{type:Number,attr:"timing",reflectToAttr:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-stellar-reveal-h{display:block;--animation:fadeIn}.sc-stellar-reveal-h .sc-stellar-reveal-s > *{opacity:0}.sc-stellar-reveal-h[active] .sc-stellar-reveal-s > *{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:var(--ease);animation-timing-function:var(--ease);-webkit-animation-name:var(--animation);animation-name:var(--animation)}"},enumerable:!0,configurable:!0}),t}();t.StellarReveal=o,Object.defineProperty(t,"__esModule",{value:!0})});