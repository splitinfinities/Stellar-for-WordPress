var __awaiter=this&&this.__awaiter||function(e,t,r,l){function o(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function n(e){try{s(l.next(e))}catch(t){i(t)}}function a(e){try{s(l["throw"](e))}catch(t){i(t)}}function s(e){e.done?r(e.value):o(e.value).then(n,a)}s((l=l.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},l,o,i,n;return n={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(n[Symbol.iterator]=function(){return this}),n;function a(e){return function(t){return s([e,t])}}function s(n){if(l)throw new TypeError("Generator is already executing.");while(r)try{if(l=1,o&&(i=n[0]&2?o["return"]:n[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,n[1])).done)return i;if(o=0,i)n=[n[0]&2,i.value];switch(n[0]){case 0:case 1:i=n;break;case 4:r.label++;return{value:n[1],done:false};case 5:r.label++;o=n[1];n=[0];continue;case 7:n=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(n[0]===6||n[0]===2)){r=0;continue}if(n[0]===3&&(!i||n[1]>i[0]&&n[1]<i[3])){r.label=n[1];break}if(n[0]===6&&r.label<i[1]){r.label=i[1];i=n;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(n);break}if(i[2])r.ops.pop();r.trys.pop();continue}n=t.call(e,r)}catch(a){n=[6,a];o=0}finally{l=i=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:true}}};System.register(["./p-090ab129.system.js","./p-c4dffc26.system.js","./p-4a67ba29.system.js"],(function(e){"use strict";var t,r,l,o,i;return{setters:[function(e){t=e.r;r=e.c;l=e.h;o=e.g},function(){},function(e){i=e.T}],execute:function(){var n="stellar-toggle{contain:content;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;font-family:inherit}stellar-toggle+stellar-toggle{margin-top:3rem}stellar-grid stellar-toggle+stellar-toggle{margin-top:0 !important}stellar-toggle *{-webkit-box-sizing:border-box;box-sizing:border-box}stellar-toggle ::-moz-selection,stellar-toggle *::-moz-selection{background:var(--theme-base2) !important}stellar-toggle ::selection,stellar-toggle *::selection{background:var(--theme-base2) !important}stellar-toggle .label{margin-bottom:.5rem;line-height:1.69;color:var(--gray9);font-size:1rem;font-weight:600}stellar-toggle stellar-card .item{padding:1rem}stellar-toggle stellar-grid{width:100%;--width:18.5rem}stellar-toggle[stacked] stellar-grid{--width:100%}stellar-toggle[stacked] stellar-grid .grid{width:100%;grid-gap:0}stellar-toggle[stacked] stellar-toggle-option label{border:0;border-radius:0;-webkit-box-shadow:none;box-shadow:none}stellar-toggle[stacked] stellar-toggle-option+stellar-toggle-option label{border-top:1px solid var(--gray2)}stellar-toggle[dark][stacked] stellar-toggle-option+stellar-toggle-option label{border-top:1px solid var(--black)}";var a=e("stellar_toggle",function(){function e(e){t(this,e);this.type="checkbox";this.name="";this.stacked=false;this.flip=false;this.dark=false;this.card="div";this.valid=true;this.update=r(this,"update",7)}e.prototype.componentWillLoad=function(){var e=this;var t=this.element.querySelectorAll("stellar-toggle-option");var r=[];t.forEach((function(t){t.type=e.type;t.for=e.name;if(t.checked){r.push(t.value)}}));this.value=r};e.prototype.validate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.status={name:this.name,value:this.value,valid:this.valid,errors:[]};return[2,this.status]}))}))};e.prototype.toggleChangedHandler=function(e){if(e.detail&&e.detail.element){var t=Array.from(this.element.querySelectorAll("stellar-toggle-option"));t.filter((function(t){return t!==e.detail.element})).forEach((function(e){e.confirm()}));var r=[];this.value=[];if(this.type==="checkbox"||this.type==="checkbox-block"){t.forEach((function(t){if(t===e.detail.element&&e.detail.element.checked){r.push(e.detail.value)}}))}else if(this.type==="radio"||this.type==="radio-block"){if(e.detail.element.checked){r.push(e.detail.value)}}this.value=r;this.update.emit(this.value)}};e.prototype.updateChecked=function(){var e=this;var t=this.element.querySelectorAll("stellar-toggle-option");t.forEach((function(t){t.type=e.type;t.for=e.name}))};e.prototype.renderValidation=function(){if(this.error){return l("p",{class:"validation"},this.error)}};e.prototype.renderBlock=function(){return l("div",null,this.renderValidation(),l(this.card,{padding:"tiny"},l("stellar-grid",{cols:this.stacked?"1":"auto",compact:true},l("slot",null))))};e.prototype.renderPlain=function(){return[l("slot",null),this.renderValidation()]};e.prototype.render=function(){return[this.label&&l("stellar-label",null,this.label),l("div",{"data-type":this.type,onClick:function(e){e.stopPropagation()}},["radio","checkbox"].indexOf(this.type)===-1&&this.renderBlock(),["radio","checkbox"].indexOf(this.type)!==-1&&this.renderPlain()),this.description&&l("stellar-label",{size:"small",underneath:true},this.description)]};Object.defineProperty(e.prototype,"element",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return n},enumerable:true,configurable:true});return e}());i.injectProps(a,["dark"])}}}));