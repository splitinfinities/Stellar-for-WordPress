var t=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,u)}c((r=r.apply(t,e||[])).next())})},e=this&&this.__generator||function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};System.register(["./p-afdfa3ab.system.js"],function(n){"use strict";var r,o,i;return{setters:[function(t){r=t.c,o=t.d,i=t.f}],execute:function(){var s=function(){function n(t){r(this,t)}return n.prototype.steps=function(){return t(this,void 0,void 0,function(){return e(this,function(){return this.stepsList&&0!==this.stepsList.length||(this.stepsList=Array.from(this.element.querySelectorAll("stellar-step"))),[2,this.stepsList]})})},n.prototype.contents=function(){return t(this,void 0,void 0,function(){return e(this,function(){return this.contentsList=Array.from(document.querySelectorAll("stellar-content[for='"+this.name+"']")),[2,this.contentsList]})})},n.prototype.componentWillLoad=function(){return t(this,void 0,void 0,function(){var t,n;return e(this,function(e){switch(e.label){case 0:return[4,this.steps()];case 1:return t=e.sent(),n=t.length,t.forEach(function(t,e){t.order=e+1,t.tabCount=n}),[2]}})})},n.prototype.render=function(){return o("div",{class:"step-list",role:"tablist"},o("slot",null))},Object.defineProperty(n.prototype,"element",{get:function(){return i(this)},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return"stellar-steps{display:block;width:100%;height:4rem}stellar-steps .step-list{position:relative;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}stellar-steps .indicator{background:red}"},enumerable:!0,configurable:!0}),n}();n("stellar_steps",s)}}});