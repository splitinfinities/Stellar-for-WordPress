var t=this&&this.__awaiter||function(t,n,e,r){return new(e||(e=Promise))(function(o,i){function s(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new e(function(n){n(t.value)}).then(s,c)}a((r=r.apply(t,n||[])).next())})},n=this&&this.__generator||function(t,n){var e,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;s;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(t,s)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};System.register(["./p-afdfa3ab.system.js"],function(e){"use strict";var r,o,i;return{setters:[function(t){r=t.c,o=t.d,i=t.f}],execute:function(){var s=function(){function e(t){r(this,t),this.icons=[],this.kind=0}return e.prototype.componentWillLoad=function(){this.fetchIcons()},e.prototype.fetchIcons=function(){return t(this,void 0,void 0,function(){var t;return n(this,function(n){switch(n.label){case 0:return[4,fetch("https://unpkg.com/ionicons@4.2.0/dist/ionicons/data.json")];case 1:return[4,n.sent().json()];case 2:return t=n.sent(),this.icons=t.icons,[2]}})})},e.prototype.render=function(){var t=this;return o("div",null,o("stellar-grid",null,this.icons.map(function(n){return o("stellar-documentation",{codeString:'<stellar-asset name="'+n.icons[t.kind]+'" block></stellar-asset>'})})))},Object.defineProperty(e.prototype,"element",{get:function(){return i(this)},enumerable:!0,configurable:!0}),e}();e("stellar_asset_library",s)}}});