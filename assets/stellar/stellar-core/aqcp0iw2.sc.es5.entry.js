var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function l(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,l)}u((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};StellarCore.loadBundle("aqcp0iw2",["exports","./chunk-a218a313.js","./chunk-4c3eda5c.js"],function(e,t,n){var r=window.StellarCore.h,o=function(){function e(){this.size="medium",this.padding="medium",this.align="top"}return e.prototype.componentWillLoad=function(){n.eqjs.definePts(this.element,{tiny:320,small:480,medium:640,large:800,massive:1024}),this.refresh()},e.prototype.componentDidLoad=function(){this.refresh()},e.prototype.refresh=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){return(e=window.document.createEvent("UIEvents")).initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(e),[2]})})},e.prototype.render=function(){return r("div",{class:"layout"},r("slot",null))},Object.defineProperty(e,"is",{get:function(){return"stellar-layout"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{align:{type:String,attr:"align",reflectToAttr:!0},element:{elementRef:!0},padding:{type:String,attr:"padding",reflectToAttr:!0},refresh:{method:!0},size:{type:String,attr:"size",reflectToAttr:!0},type:{type:String,attr:"type",reflectToAttr:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-stellar-layout-h, .sc-stellar-layout-h   *.sc-stellar-layout, .sc-stellar-layout-h   .sc-stellar-layout:after, .sc-stellar-layout-h   .sc-stellar-layout:before{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-stellar-layout-h{display:block;font-family:inherit;--grid-gap:3rem}.sc-stellar-layout-h   .layout.sc-stellar-layout{display:grid;grid-gap:var(--grid-gap,3rem);margin:0 auto;padding:4rem 0;width:95%;max-width:1024px;min-height:0;min-width:0}.sc-stellar-layout-h   .layout.sc-stellar-layout > *.sc-stellar-layout{min-width:0}[size=tiny].sc-stellar-layout-h   .layout.sc-stellar-layout{max-width:420px}[size=small].sc-stellar-layout-h   .layout.sc-stellar-layout{max-width:700px}[size=medium].sc-stellar-layout-h   .layout.sc-stellar-layout{max-width:1024px}[size=large].sc-stellar-layout-h   .layout.sc-stellar-layout{max-width:1200px}[size=full].sc-stellar-layout-h   .layout.sc-stellar-layout{max-width:100%}[size=flush].sc-stellar-layout-h   .layout.sc-stellar-layout{max-width:100%;width:100%}[padding=none].sc-stellar-layout-h   .layout.sc-stellar-layout{padding:0}[padding=tiny].sc-stellar-layout-h   .layout.sc-stellar-layout{padding:.5rem 0}[padding=small].sc-stellar-layout-h   .layout.sc-stellar-layout{padding:1rem 0}[padding=medium].sc-stellar-layout-h   .layout.sc-stellar-layout{padding:2rem 0}[padding=large].sc-stellar-layout-h   .layout.sc-stellar-layout{padding:4rem 0}[type=copy].sc-stellar-layout-h   .layout.sc-stellar-layout{padding:3rem 0}[align=top].sc-stellar-layout-h   .layout.sc-stellar-layout{-ms-flex-align:start;align-items:flex-start}[align=center].sc-stellar-layout-h   .layout.sc-stellar-layout{-ms-flex-align:center;align-items:center}[align=baseline].sc-stellar-layout-h   .layout.sc-stellar-layout{-ms-flex-align:baseline;align-items:baseline}.sc-stellar-layout-h[type=supporting-content-right] .sc-stellar-layout-s > aside{-ms-flex-order:1;order:1}.sc-stellar-layout-h .sc-stellar-layout-s > *{min-width:0}\@media (min-width:700px){[type=sidebar-right].sc-stellar-layout-h   .layout.sc-stellar-layout{grid-template-columns:3fr 1fr}[type=sidebar].sc-stellar-layout-h   .layout.sc-stellar-layout{grid-template-columns:1fr 3fr}[type=half].sc-stellar-layout-h   .layout.sc-stellar-layout{grid-template-columns:1fr 1fr}[type=supporting-content].sc-stellar-layout-h   .layout.sc-stellar-layout{grid-template-columns:6fr 4fr}[type=supporting-content-right].sc-stellar-layout-h   .layout.sc-stellar-layout{grid-template-columns:4fr 6fr}.sc-stellar-layout-h[type=supporting-content-right] .sc-stellar-layout-s > aside{-ms-flex-order:-1;order:-1}}"},enumerable:!0,configurable:!0}),e}();e.StellarLayout=o,Object.defineProperty(e,"__esModule",{value:!0})});