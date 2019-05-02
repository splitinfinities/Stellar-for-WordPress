import{h}from"../stellar-core.core.js";import"./chunk-7646164d.js";import{a as properties}from"./chunk-340b8099.js";import{a as colors}from"./chunk-9f751763.js";import"./chunk-a955a305.js";import"./chunk-5ce278cb.js";var ColorPicker=function(){function e(){this.val="none"}return e.prototype.componentWillLoad=function(){this.options=Object.keys(colors).filter(function(e){return!["base","white","black"].includes(e)}),properties.set({"--selected-color":"var(--"+this.val+"5)"},this.element)},e.prototype.valueChangedHandler=function(e){this.change.emit(e),properties.set({"--selected-color":"var(--"+this.val+"5)"},this.element)},e.prototype.updateValue=function(e){this.val=e},e.prototype.render=function(){var e=this;return h("div",{class:"wrap"},this.options.map(function(t){return h("button",{value:t,class:t,style:{background:"var(--"+t+"5)"},onClick:function(){e.updateValue(t)}})}),h("button",{value:"none",class:"none",style:{background:"var(--white)"},onClick:function(){e.updateValue("none")}}),h("div",{class:"placeholder"}))},Object.defineProperty(e,"is",{get:function(){return"stellar-color-picker"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{element:{elementRef:!0},options:{state:!0},val:{type:String,attr:"val",reflectToAttr:!0,mutable:!0,watchCallbacks:["valueChangedHandler"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"change",method:"change",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-stellar-color-picker-h, .sc-stellar-color-picker-h   *.sc-stellar-color-picker, .sc-stellar-color-picker-h   .sc-stellar-color-picker:after, .sc-stellar-color-picker-h   .sc-stellar-color-picker:before{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-stellar-color-picker-h{display:block;background:var(--selected-color,var(--red5));border:2px solid var(--selected-color,var(--red5));border-radius:100%}.sc-stellar-color-picker-h, .sc-stellar-color-picker-h   .wrap.sc-stellar-color-picker{width:32px;height:32px}.sc-stellar-color-picker-h   .wrap.sc-stellar-color-picker{border-radius:100%}.sc-stellar-color-picker-h   .placeholder.sc-stellar-color-picker{position:absolute;top:0;left:0;-webkit-transition:opacity .2s var(--ease,ease-out) .1s,width .2s var(--ease,ease-out) .1s,z-index .2s var(--ease,ease-out) .1s;transition:opacity .2s var(--ease,ease-out) .1s,width .2s var(--ease,ease-out) .1s,z-index .2s var(--ease,ease-out) .1s;opacity:1;z-index:0;background:#fff;width:32px;height:32px;border-radius:100%}.sc-stellar-color-picker-h   .placeholder[data-selected=true].sc-stellar-color-picker{opacity:1;z-index:9}.sc-stellar-color-picker-h   button.sc-stellar-color-picker{cursor:pointer;display:block;position:absolute;-webkit-transition:all .4s var(--ease,ease-out) .1s;transition:all .4s var(--ease,ease-out) .1s;opacity:0;border:0;width:32px;height:32px;border-radius:100%;-webkit-transform:translate3d(34px,0,0);transform:translate3d(34px,0,0)}.sc-stellar-color-picker-h   button.current.sc-stellar-color-picker{position:relative;border:2px solid var(--gray2);background:var(--white);overflow:hidden}.sc-stellar-color-picker-h   button.current.sc-stellar-color-picker:after{content:\"\";display:block;position:absolute;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);background:var(--red);width:32px;height:4px}[val=none].sc-stellar-color-picker-h, .sc-stellar-color-picker-h   button.none.sc-stellar-color-picker{background:#fff;border:2px solid var(--black)}[val=none].sc-stellar-color-picker-h:after, .sc-stellar-color-picker-h   button.none.sc-stellar-color-picker:after{content:\"\";display:block;position:absolute;left:calc(50% - 2px);top:calc(0% - .2rem);width:4px;height:calc(100% + .4rem);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--red5)}.sc-stellar-color-picker-h   button[data-selected=true].sc-stellar-color-picker{opacity:1;z-index:9}.sc-stellar-color-picker-h   .wrap.sc-stellar-color-picker{position:relative;left:-34px}.sc-stellar-color-picker-h   .wrap.sc-stellar-color-picker   .placeholder.sc-stellar-color-picker{opacity:0;z-index:-1}.sc-stellar-color-picker-h   .wrap.sc-stellar-color-picker:hover{width:96px;height:204px;border-radius:100%}.sc-stellar-color-picker-h   .wrap.sc-stellar-color-picker:hover   button.sc-stellar-color-picker{opacity:1;z-index:99;height:32px}.sc-stellar-color-picker-h   .wrap.sc-stellar-color-picker:hover   button.sc-stellar-color-picker:first-of-type{-webkit-transform:translate3d(0,34px,0);transform:translate3d(0,34px,0)}.sc-stellar-color-picker-h   .wrap.sc-stellar-color-picker:hover   button.sc-stellar-color-picker:nth-of-type(2){-webkit-transform:translate3d(34px,34px,0);transform:translate3d(34px,34px,0)}.sc-stellar-color-picker-h   .wrap.sc-stellar-color-picker:hover   button.sc-stellar-color-picker:nth-of-type(3){-webkit-transform:translate3d(68px,34px,0);transform:translate3d(68px,34px,0)}.sc-stellar-color-picker-h   .wrap.sc-stellar-color-picker:hover   button.sc-stellar-color-picker:nth-of-type(4){-webkit-transform:translate3d(0,68px,0);transform:translate3d(0,68px,0)}.sc-stellar-color-picker-h   .wrap.sc-stellar-color-picker:hover   button.sc-stellar-color-picker:nth-of-type(5){-webkit-transform:translate3d(34px,68px,0);transform:translate3d(34px,68px,0)}.sc-stellar-color-picker-h   .wrap.sc-stellar-color-picker:hover   button.sc-stellar-color-picker:nth-of-type(6){-webkit-transform:translate3d(68px,68px,0);transform:translate3d(68px,68px,0)}.sc-stellar-color-picker-h   .wrap.sc-stellar-color-picker:hover   button.sc-stellar-color-picker:nth-of-type(7){-webkit-transform:translate3d(0,102px,0);transform:translate3d(0,102px,0)}.sc-stellar-color-picker-h   .wrap.sc-stellar-color-picker:hover   button.sc-stellar-color-picker:nth-of-type(8){-webkit-transform:translate3d(34px,102px,0);transform:translate3d(34px,102px,0)}.sc-stellar-color-picker-h   .wrap.sc-stellar-color-picker:hover   button.sc-stellar-color-picker:nth-of-type(9){-webkit-transform:translate3d(68px,102px,0);transform:translate3d(68px,102px,0)}.sc-stellar-color-picker-h   .wrap.sc-stellar-color-picker:hover   button.sc-stellar-color-picker:nth-of-type(10){-webkit-transform:translate3d(0,136px,0);transform:translate3d(0,136px,0)}.sc-stellar-color-picker-h   .wrap.sc-stellar-color-picker:hover   button.sc-stellar-color-picker:nth-of-type(11){-webkit-transform:translate3d(34px,136px,0);transform:translate3d(34px,136px,0)}.sc-stellar-color-picker-h   .wrap.sc-stellar-color-picker:hover   button.sc-stellar-color-picker:nth-of-type(12){-webkit-transform:translate3d(68px,136px,0);transform:translate3d(68px,136px,0)}.sc-stellar-color-picker-h   .wrap.sc-stellar-color-picker:hover   button.sc-stellar-color-picker:nth-of-type(13){-webkit-transform:translate3d(0,170px,0);transform:translate3d(0,170px,0)}.sc-stellar-color-picker-h   .wrap.sc-stellar-color-picker:hover   button.sc-stellar-color-picker:nth-of-type(14){-webkit-transform:translate3d(34px,170px,0);transform:translate3d(34px,170px,0)}.dark-mode.sc-stellar-color-picker-h -no-combinator[val=none].sc-stellar-color-picker-h, .dark-mode   .sc-stellar-color-picker-h -no-combinator[val=none].sc-stellar-color-picker-h, .dark-mode.sc-stellar-color-picker-h -no-combinator.sc-stellar-color-picker-h   button.none.sc-stellar-color-picker, .dark-mode   .sc-stellar-color-picker-h -no-combinator.sc-stellar-color-picker-h   button.none.sc-stellar-color-picker{background:var(--black)!important;border:2px solid var(--white)!important}"},enumerable:!0,configurable:!0}),e}();export{ColorPicker as StellarColorPicker};