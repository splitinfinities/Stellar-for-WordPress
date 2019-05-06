StellarCore.loadBundle("al3okbds",["exports"],function(e){var t=window.StellarCore.h,n=function(){function e(){this.empty=!1}return e.prototype.componentWillLoad=function(){this.empty=0===this.element.querySelectorAll("stellar-comment").length},e.prototype.componentDidLoad=function(){this.element.querySelector("stellar-avatar")&&(this.element.querySelector("stellar-avatar").tabIndex=-1,this.name=this.element.querySelector("stellar-avatar").name),this.content=this.element.querySelector('[slot="content"]').textContent.trim()},e.prototype.render=function(){return t("div",{class:"comment "+(this.empty?"empty":""),"aria-label":"Comment by "+this.name+": "+this.content,tabindex:0},t("div",{class:"content"},t("slot",{name:"avatar"}),t("slot",{name:"content"})),t("div",{class:"thread","aria-label":"In reply to  "+this.name+" saying "+this.content},t("slot",null)))},Object.defineProperty(e,"is",{get:function(){return"stellar-comment"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{content:{type:"Any",attr:"content",mutable:!0},element:{elementRef:!0},empty:{state:!0},name:{type:"Any",attr:"name",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block}:host stellar-avatar{margin-right:1rem;float:left}:host .comment>.content{position:relative;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:1rem;background:#fff;border:1px solid var(--gray2)}:host .comment>.thread{margin:0 0 0 3rem;position:relative}:host .comment ::slotted([slot=avatar]){margin-right:1rem}:host .comment>.thread:after{content:\"\";width:.4rem;height:calc(100% - .5rem);position:absolute;left:-1.25rem;top:-1.5rem;z-index:0;background:var(--theme-complement4);background:linear-gradient(135deg,var(--theme-complement4),var(--theme-base4) calc(100% - 2rem),var(--theme-base4))}:host .comment>.thread:before{content:\"\";width:20rem;height:.4rem;position:absolute;left:-1.25rem;bottom:2rem;z-index:0;background:var(--theme-base4)}:host .comment.empty>.content{margin:0}:host .comment.empty>.thread{display:none!important}:host ::slotted(stellar-comment){margin-top:1rem}:host-context(.dark-mode):host .comment>.content{background:var(--gray9);border:1px solid var(--gray8)}:host-context(.dark-mode):host .comment>.thread:after{background:var(--theme-complement9);background:linear-gradient(135deg,var(--theme-complement9),var(--theme-base9) calc(100% - 2rem),var(--theme-base9))}:host-context(.dark-mode):host .comment>.thread:before{background:var(--theme-base9)}"},enumerable:!0,configurable:!0}),e}();e.StellarComment=n,Object.defineProperty(e,"__esModule",{value:!0})});