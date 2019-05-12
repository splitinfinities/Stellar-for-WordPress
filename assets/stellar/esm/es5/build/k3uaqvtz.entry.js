import{h}from"../stellar-core.core.js";var Label=function(){function e(){}return e.prototype.render=function(){return h("label",{for:this.for},h("slot",null))},Object.defineProperty(e,"is",{get:function(){return"stellar-label"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{for:{type:String,attr:"for"},size:{type:String,attr:"size",reflectToAttr:!0},underneath:{type:Boolean,attr:"underneath",reflectToAttr:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{line-height:1.3;color:var(--gray9);font-size:1.4rem;display:block;font-weight:900;letter-spacing:.05em;margin-bottom:.75em;cursor:pointer;text-transform:uppercase}:host([underneath]){margin-top:.75em;margin-bottom:0;color:var(--gray5);font-weight:600;text-transform:none}:host([size=small]){font-size:1.2rem}:host([size=tiny]){font-size:1rem}:host label{all:inherit}:host-context(.dark-mode):host{color:var(--gray0)}:host-context(.dark-mode):host([underneath]){color:var(--gray5)}"},enumerable:!0,configurable:!0}),e}();export{Label as StellarLabel};