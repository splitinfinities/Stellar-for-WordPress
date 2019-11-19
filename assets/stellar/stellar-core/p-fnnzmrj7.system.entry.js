var __awaiter=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{u(r.next(t))}catch(t){o(t)}}function s(t){try{u(r["throw"](t))}catch(t){o(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,s)}u((r=r.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return u([t,e])}}function u(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;i=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(t){a=[6,t];i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-6f2a0351.system.js","./p-c6b679e5.system.js","./p-66b115bd.system.js","./p-4ed6ec38.system.js","./p-659cc05e.system.js","./p-ade40a6b.system.js"],function(t,e){"use strict";var n,r,i,o,a,s;return{setters:[function(t){n=t.d;r=t.i;i=t.f;o=t.g},function(){},function(){},function(t){a=t.d;s=t.e},function(){},function(){}],execute:function(){var e=function(){function t(t){n(this,t);this.ajax=false;this.method="get";this.autocomplete="on";this.enctype="multipart/form-data";this.novalidate=false;this.selectors=["stellar-input","stellar-toggle","stellar-range","stellar-switch","stellar-select"];this.submit=r(this,"submit",7)}t.prototype.handleEnter=function(t){if(t.key==="enter"){this.submit_form()}};t.prototype.register=function(t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){this.selectors=this.selectors.concat(t);return[2]})})};t.prototype.refresh=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){t=window.document.createEvent("UIEvents");t.initUIEvent("resize",true,false,window,0);window.dispatchEvent(t);return[2]})})};t.prototype.state=function(){return __awaiter(this,void 0,void 0,function(){var t,e,n,r,i;var o=this;return __generator(this,function(u){switch(u.label){case 0:t=new FormData;e=[];n=true;r=Array.from(this.element.querySelectorAll(this.selectors.join(",")));return[4,a(r,function(t){return __awaiter(o,void 0,void 0,function(){var n,r;return __generator(this,function(i){switch(i.label){case 0:i.trys.push([0,2,,3]);return[4,t.validate()];case 1:n=i.sent();e.push(n);return[3,3];case 2:r=i.sent();e.push({name:""+t.name,value:undefined,valid:false,errors:[r.message]});return[3,3];case 3:return[2]}})})})];case 1:u.sent();e.forEach(function(e){if(e){if(e.name){t.append(e.name.toString(),e.value)}if(!e.valid){n=false}}});i=s(e.filter(function(t){return t&&t.name}));return[2,{els:r,json:i,results:e,formData:t,valid:n}]}})})};t.prototype.submit_form=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return[4,this.state()];case 1:t=e.sent();if(t.valid){if(this.ajax){this.submit.emit(t)}else{this.element.querySelector("form").submit()}}return[2]}})})};t.prototype.render=function(){var t=this;return i("form",{action:this.action,method:this.method,"accept-charset":this.acceptCharset,autocomplete:this.autocomplete,enctype:this.enctype,name:this.name,novalidate:this.novalidate,target:this.target,onSubmit:function(e){e.preventDefault();t.submit_form()}},i("slot",null))};Object.defineProperty(t.prototype,"element",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"stellar-form{display:block}"},enumerable:true,configurable:true});return t}();t("stellar_form",e)}}});