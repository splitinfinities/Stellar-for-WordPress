var t=this&&this.__awaiter||function(t,n,e,r){return new(e||(e=Promise))(function(i,o){function u(t){try{a(r.next(t))}catch(t){o(t)}}function c(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){t.done?i(t.value):new e(function(n){n(t.value)}).then(u,c)}a((r=r.apply(t,n||[])).next())})},n=this&&this.__generator||function(t,n){var e,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=n.call(t,u)}catch(t){o=[6,t],r=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};System.register(["./p-afdfa3ab.system.js"],function(e){"use strict";var r,i;return{setters:[function(t){r=t.c,i=t.d}],execute:function(){var o=function(){function e(t){r(this,t),this.history=[],this.count=50}return e.prototype.addHistory=function(e){return t(this,void 0,void 0,function(){var t;return n(this,function(){return t=[e].concat(this.history),this.history=t.length>this.count?t.slice(1,this.count):t,[2]})})},e.prototype.render=function(){return i("div",null,this.history.map(function(t){return i("div",null,i("p",null,t))}))},Object.defineProperty(e,"style",{get:function(){return"web-audio-debugger{display:block;position:fixed;top:0;right:0;width:160px;height:300px;overflow:auto;text-align:right;padding:1rem;border:2px solid #000}web-audio-debugger p{font-size:12px;margin:0 0 1em 0}"},enumerable:!0,configurable:!0}),e}();e("web_audio_debugger",o)}}});