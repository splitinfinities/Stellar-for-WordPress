import*as tslib_1 from"../polyfills/tslib.js";import{h}from"../stellar-core.core.js";import"./chunk-7646164d.js";import{a as eqjs}from"./chunk-27578b57.js";var Layout=function(){function e(){this.size="medium",this.padding="medium",this.align="top"}return e.prototype.componentWillLoad=function(){eqjs.definePts(this.element,{tiny:320,small:480,medium:640,large:800,massive:1024}),this.refresh()},e.prototype.componentDidLoad=function(){this.refresh()},e.prototype.refresh=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var e;return tslib_1.__generator(this,function(t){return(e=window.document.createEvent("UIEvents")).initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(e),[2]})})},e.prototype.render=function(){return h("div",{class:"layout"},h("slot",null))},Object.defineProperty(e,"is",{get:function(){return"stellar-layout"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{align:{type:String,attr:"align",reflectToAttr:!0},element:{elementRef:!0},padding:{type:String,attr:"padding",reflectToAttr:!0},refresh:{method:!0},size:{type:String,attr:"size",reflectToAttr:!0},type:{type:String,attr:"type",reflectToAttr:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-stellar-layout-h, .sc-stellar-layout-h   *.sc-stellar-layout, .sc-stellar-layout-h   .sc-stellar-layout:after, .sc-stellar-layout-h   .sc-stellar-layout:before{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-stellar-layout-h{display:block;font-family:inherit;--grid-gap:3rem}.sc-stellar-layout-h   .layout.sc-stellar-layout{display:grid;grid-gap:var(--grid-gap,3rem);margin:0 auto;padding:4rem 0;width:95%;max-width:1024px;min-height:0;min-width:0}.sc-stellar-layout-h   .layout.sc-stellar-layout > *.sc-stellar-layout{min-width:0}[size=tiny].sc-stellar-layout-h   .layout.sc-stellar-layout{max-width:420px}[size=small].sc-stellar-layout-h   .layout.sc-stellar-layout{max-width:700px}[size=medium].sc-stellar-layout-h   .layout.sc-stellar-layout{max-width:1024px}[size=large].sc-stellar-layout-h   .layout.sc-stellar-layout{max-width:1200px}[size=full].sc-stellar-layout-h   .layout.sc-stellar-layout{max-width:100%}[size=flush].sc-stellar-layout-h   .layout.sc-stellar-layout{max-width:100%;width:100%}[padding=none].sc-stellar-layout-h   .layout.sc-stellar-layout{padding:0}[padding=tiny].sc-stellar-layout-h   .layout.sc-stellar-layout{padding:.5rem 0}[padding=small].sc-stellar-layout-h   .layout.sc-stellar-layout{padding:1rem 0}[padding=medium].sc-stellar-layout-h   .layout.sc-stellar-layout{padding:2rem 0}[padding=large].sc-stellar-layout-h   .layout.sc-stellar-layout{padding:4rem 0}[type=copy].sc-stellar-layout-h   .layout.sc-stellar-layout{padding:3rem 0}[align=top].sc-stellar-layout-h   .layout.sc-stellar-layout{-ms-flex-align:start;align-items:flex-start}[align=center].sc-stellar-layout-h   .layout.sc-stellar-layout{-ms-flex-align:center;align-items:center}[align=baseline].sc-stellar-layout-h   .layout.sc-stellar-layout{-ms-flex-align:baseline;align-items:baseline}.sc-stellar-layout-h[type=supporting-content-right] .sc-stellar-layout-s > aside{-ms-flex-order:1;order:1}.sc-stellar-layout-h .sc-stellar-layout-s > *{min-width:0}\@media (min-width:700px){[type=sidebar-right].sc-stellar-layout-h   .layout.sc-stellar-layout{grid-template-columns:3fr 1fr}[type=sidebar].sc-stellar-layout-h   .layout.sc-stellar-layout{grid-template-columns:1fr 3fr}[type=half].sc-stellar-layout-h   .layout.sc-stellar-layout{grid-template-columns:1fr 1fr}[type=supporting-content].sc-stellar-layout-h   .layout.sc-stellar-layout{grid-template-columns:6fr 4fr}[type=supporting-content-right].sc-stellar-layout-h   .layout.sc-stellar-layout{grid-template-columns:4fr 6fr}.sc-stellar-layout-h[type=supporting-content-right] .sc-stellar-layout-s > aside{-ms-flex-order:-1;order:-1}}"},enumerable:!0,configurable:!0}),e}();export{Layout as StellarLayout};