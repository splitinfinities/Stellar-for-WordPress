StellarCore.loadBundle("vxnei7lm",["exports"],function(t){var e=window.StellarCore.h,n=function(){function t(){}return t.prototype.steps=function(){return this.stepsList&&0!==this.stepsList.length||(this.stepsList=Array.from(this.element.querySelectorAll("stellar-step"))),this.stepsList},t.prototype.contents=function(){return this.contentsList=Array.from(document.querySelectorAll("stellar-content[for='"+this.name+"']")),this.contentsList},t.prototype.componentWillLoad=function(){this.steps();var t=this.steps().length;this.steps().forEach(function(e,n){e.order=n+1,e.tabCount=t})},t.prototype.render=function(){return e("div",{class:"step-list",role:"tablist"},e("slot",null))},Object.defineProperty(t,"is",{get:function(){return"stellar-steps"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{contents:{method:!0},contentsList:{state:!0},element:{elementRef:!0},name:{type:String,attr:"name",reflectToAttr:!0,mutable:!0},steps:{method:!0},stepsList:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"stellar-steps{display:block;width:100%;height:4rem}stellar-steps .step-list{position:relative;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}stellar-steps .indicator{background:red}"},enumerable:!0,configurable:!0}),t}();t.StellarSteps=n,Object.defineProperty(t,"__esModule",{value:!0})});