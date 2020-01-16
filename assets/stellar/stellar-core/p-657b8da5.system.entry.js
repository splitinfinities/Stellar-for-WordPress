var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function s(e){try{l(n.next(e))}catch(t){i(t)}}function o(e){try{l(n["throw"](e))}catch(t){i(t)}}function l(e){e.done?r(e.value):a(e.value).then(s,o)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-43f53497.system.js","./p-7ecbfc5a.system.js","./p-c4dffc26.system.js","./p-e8327e10.system.js"],(function(e){"use strict";var t,r,n,a,i;return{setters:[function(e){t=e.r;r=e.e;n=e.h;a=e.d},function(){},function(){},function(e){i=e.T}],execute:function(){var s='stellar-switch{contain:content;display:block;--border-radius:200px;--font-size:1.2rem}stellar-switch .label{-webkit-tap-highlight-color:transparent;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;position:relative;margin:1.1rem 0}stellar-switch button ::-moz-selection{background:transparent}stellar-switch button ::selection{background:transparent}stellar-switch .label button{font-size:var(--font-size);display:inline-block;position:relative;-webkit-transition:all .2s var(--ease) 0s;transition:all .2s var(--ease) 0s;margin-right:1em;background-color:var(--gray2);width:4rem;height:.8rem;vertical-align:text-bottom;border-radius:var(--border-radius);border:0;cursor:pointer;outline:0}stellar-switch .label button:focus{background-color:var(--theme-base3)}stellar-switch .label button:focus::after{-webkit-box-shadow:0 0 0 3px rgba(0, 0, 0, .125), 0 0 3px 0 rgba(0, 0, 0, 0.3);box-shadow:0 0 0 3px rgba(0, 0, 0, .125), 0 0 3px 0 rgba(0, 0, 0, 0.3)}stellar-switch .label button span{-webkit-transition:all .2s var(--ease) 0s;transition:all .2s var(--ease) 0s;font-size:2rem;font-weight:700;color:var(--gray7);position:absolute;left:0;top:0;font-style:normal;text-transform:uppercase;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;padding:0;pointer-events:none;z-index:1}stellar-switch .label button::after{content:"";position:absolute;top:-0.8rem;left:-0.2rem;-webkit-transform:translate3d(.125em, .125em, 0);transform:translate3d(.125em, .125em, 0);-webkit-transition:all .2s var(--ease) 0s;transition:all .2s var(--ease) 0s;-webkit-box-shadow:0 0 3px 0 rgba(0, 0, 0, 0.3);box-shadow:0 0 3px 0 rgba(0, 0, 0, 0.3);background-color:white;border-radius:var(--border-radius);width:2.1rem;height:2.1rem}stellar-switch .label:active button::after{-webkit-transform:translate3d(2px, .125rem, 0);transform:translate3d(2px, .125rem, 0);width:2.3rem}stellar-switch .label:active input:checked+button::after{-webkit-transform:translate3d(1.9rem, .125rem, 0);transform:translate3d(1.9rem, .125rem, 0)}stellar-switch .label input{pointer-events:none;position:absolute;opacity:0}stellar-switch .label input:checked+button{background-color:var(--theme-base6);color:white}stellar-switch .label input:checked+button span{padding:0 0 0 2.1rem;color:white}stellar-switch .label input:checked+button::after{-webkit-transform:translate3d(2.25rem, .125rem, 0);transform:translate3d(2.25rem, .125rem, 0);background:var(--theme-base5)}stellar-switch[dark] .label input:checked+button,stellar-switch[dark] .label input:checked+button span{color:var(--black)}';var o=e("stellar_switch",function(){function e(e){t(this,e);this.checked=false;this.checkedDefault=false;this.dark=false;this.update=r(this,"update",7)}e.prototype.componentDidLoad=function(){if(this.checkedDefault){this.checked=this.checkedDefault}};e.prototype.validate=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){e={name:this.name,value:this.checked,valid:true,errors:[]};if(!this.novalidate){if(!this.checked&&this.required){e.valid=false;e.errors.push({message:"This field is required."})}}this.status=e;return[2,this.status]}))}))};e.prototype.activate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.checked=!this.checked;return[2]}))}))};e.prototype.handleChecked=function(){this.update.emit({checked:this.checked})};e.prototype.render=function(){var e=this;return n("label",{class:"label",htmlFor:this.name,onClick:function(){e.activate()}},n("input",{type:"checkbox",name:this.name,id:this.name,checked:this.checked,tabindex:"-1",onClick:function(){e.activate()}}),n("button",{type:"button"},n("span",null,n("ion-icon",{name:this.checked?"checkmark":"close"}))),n("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{checked:["handleChecked"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return s},enumerable:true,configurable:true});return e}());i.injectProps(o,["dark"])}}}));