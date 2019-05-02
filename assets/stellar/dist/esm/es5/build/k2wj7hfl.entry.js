import{h}from"../stellar-core.core.js";import"./chunk-7646164d.js";import{a as properties}from"./chunk-340b8099.js";import"./chunk-9f751763.js";import{a as blurringEase}from"./chunk-a955a305.js";import"./chunk-5ce278cb.js";var Pagination=function(){function t(){var t=this;this.pages=1,this.type="full",this.current=1,this.padding=2,this.color="gray",this.url="#page-{0}",this.__current=1,this.__first=1,this.__previous=!1,this.__next=!1,this.blur=0,this.ease=blurringEase({end:10,start:-1,duration:125,tick:function(e){t.blur=e.value},complete:function(){t.blur=0,t.ease.stop(),t.affixDistance()}})}return t.prototype.__firstPageUrl=function(){return""},t.prototype.__previousPageUrl=function(){return""},t.prototype.__nextPageUrl=function(){return""},t.prototype.__lastPageUrl=function(){return""},t.prototype.currentObserver=function(t){this.current=t,this.__previous=t>this.__first&&t-1,this.__next=t<this.pages&&t+1,this.changed.emit(t),"full"===this.type&&this.updateSurroundingPages(),this.ease.start()},t.prototype.componentWillLoad=function(){this.__first=1,this.__current=this.current,this.__previous=this.current>this.__first&&this.current-1,this.__next=this.current<this.pages&&this.current+1,this.__last=this.pages,this.updateSurroundingPages()},t.prototype.componentDidLoad=function(){var t=this;setTimeout(function(){t.affixDistance()},300)},t.prototype.affixDistance=function(){var t=this.element.shadowRoot.querySelector(".current-number");t&&properties.set({"--indicator-left":t.offsetLeft+"px"},this.element)},t.prototype.updateSurroundingPages=function(){var t=this,e=Array(this.pages).fill(0).map(function(e,r){var n=r+1;return{number:n,url:t.formatUrl(n),visible:t.isVisible(n),current:n===t.current}});this.__surroundingPages=e},t.prototype.isVisible=function(t){var e=this.__current-this.padding,r=this.__current+this.padding;return r>=this.pages&&(r=this.pages),e<1&&(e=1),t>=e&&t<=r},t.prototype.handleChange=function(t){t.preventDefault(),this.__current=parseInt(t.currentTarget.value)},t.prototype.handleClick=function(t){t.preventDefault(),this.__current=parseInt(t.currentTarget.dataset.page)},t.prototype.formatUrl=function(t){return this.url.format(t)},t.prototype.renderFirstPageButton=function(){var t=this,e=this.__current>1?"no":"yes";return h("a",{href:this.__firstPageUrl(),"data-page":this.__first,onClick:function(e){return t.handleClick(e)},class:"icon first","data-hidden":e},h("stellar-asset",{name:"skip-backward",block:!0}))},t.prototype.renderPreviousPageButton=function(){var t=this,e="number"==typeof this.__previous&&this.__current>1?"no":"yes";return h("a",{href:this.__previousPageUrl(),"data-page":this.__previous,onClick:function(e){return t.handleClick(e)},class:"icon previous","data-hidden":e},h("stellar-asset",{name:"rewind",block:!0}))},t.prototype.renderNextPageButton=function(){var t=this,e="number"==typeof this.__next||this.__current<this.pages?"no":"yes";return h("a",{href:this.__nextPageUrl(),"data-page":this.__next,onClick:function(e){return t.handleClick(e)},class:"icon next","data-hidden":e},h("stellar-asset",{name:"fastforward",block:!0}))},t.prototype.renderLastPageButton=function(){var t=this,e=this.__current<this.pages?"no":"yes";return h("a",{href:this.__lastPageUrl(),"data-page":this.__last,onClick:function(e){return t.handleClick(e)},class:"icon last","data-hidden":e},h("stellar-asset",{name:"skip-forward",block:!0}))},t.prototype.renderPagesList=function(){var t=this;return this.__surroundingPages.map(function(e){return h("a",{href:e.url,"data-page":e.number,"data-visible":e.visible,"data-current":e.current,onClick:function(e){return t.handleClick(e)},class:e.number===t.__current||e.number===t.current?"current-number number":"number"},e.number)})},t.prototype.renderPagesPreviousEllipsis=function(){return h("div",{class:"ellipsis previous","data-hidden":this.__current-this.padding>1?"no":"yes"},"…")},t.prototype.renderPagesNextEllipsis=function(){return h("div",{class:"ellipsis next","data-hidden":this.__current+this.padding+1<this.pages?"no":"yes"},"…")},t.prototype.render=function(){var t=this;return"full"===this.type?h("span",{class:"pagination-container"},h("div",{class:"pagination-wrap"},this.renderFirstPageButton(),this.renderPreviousPageButton(),h("div",{class:"pages"},this.renderPagesPreviousEllipsis(),this.renderPagesList(),this.renderPagesNextEllipsis(),h("stellar-blur",{horizontal:this.blur},h("div",{class:"indicator"}))),this.renderNextPageButton(),this.renderLastPageButton())):"compact"===this.type?h("span",{class:"compact-pagination-container"},h("p",null,"Page"),h("stellar-input",{type:"number",size:"small",max:this.pages,value:this.__current,min:1,onChange:function(e){t.handleChange(e)}}),"of ",this.pages):void 0},Object.defineProperty(t,"is",{get:function(){return"stellar-pagination"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{__current:{state:!0,watchCallbacks:["currentObserver"]},__first:{state:!0},__last:{state:!0},__next:{state:!0},__previous:{state:!0},__surroundingPages:{state:!0},blur:{state:!0},color:{type:String,attr:"color"},current:{type:Number,attr:"current",reflectToAttr:!0,mutable:!0},ease:{state:!0},element:{elementRef:!0},padding:{type:Number,attr:"padding",reflectToAttr:!0,mutable:!0},pages:{type:Number,attr:"pages",reflectToAttr:!0,mutable:!0},type:{type:String,attr:"type",reflectToAttr:!0,mutable:!0},url:{type:"Any",attr:"url"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"changed",method:"changed",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;color:var(--color);font-size:1.6rem;--color:var(--theme-base6);--hover:var(--theme-base9);text-align:center}:host .pagination-container{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host .indicator{position:absolute;top:.2rem;left:var(--indicator-left,50%);-webkit-transition:all .22s var(--ease) 0s;transition:all .22s var(--ease) 0s;width:2.4rem;height:1.6rem;margin-left:-.125em;background:var(--theme-base5);z-index:0;border-radius:100%}:host stellar-blur[horizontal=\"0\"] .indicator{height:2.4rem;top:-.2rem}:host .pagination-wrap{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}:host a{text-decoration:none;border-radius:100%}:host a.icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:2rem;height:2rem;color:var(--color)}:host a.icon:active,:host a.icon:hover{color:var(--hover)}:host a.current-number:active,:host a.current-number:focus,:host a.current-number:hover{color:#fff}:host .ellipsis{width:2rem;height:2rem;margin:0 .25rem}:host .ellipsis,:host .pages{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host .pages{margin:0 .5rem;position:relative;-webkit-transition:all .2s var(--ease) 0s;transition:all .2s var(--ease) 0s}:host .number{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:currentColor;font-weight:700;-webkit-transition:all .2s var(--ease) 0ms;transition:all .2s var(--ease) 0ms;margin:1rem 0;width:0;height:0;opacity:1;z-index:1;padding:0}:host .number,:host .number[data-visible=false]{-webkit-transform:scale(0);transform:scale(0)}:host .number[data-visible]{width:2rem;height:2rem;opacity:1;padding:0;margin:0 .25em;-webkit-transform:scale(1);transform:scale(1)}:host .number:active,:host .number:hover{color:var(--hover)}:host .current-number{margin:1rem;color:#fff}:host .skip-button{margin-left:36px;line-height:0}:host [data-hidden=yes]{display:none!important}:host .compact-pagination-container{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline}:host .compact-pagination-container stellar-input{width:5rem;--padding:0 1rem;margin:0 1rem}:host stellar-blur{position:absolute;width:100%;height:100%}:host-context(.dark-mode):host a.number:active,:host-context(.dark-mode):host a.number:focus,:host-context(.dark-mode):host a.number:hover{color:#fff}:host-context(.dark-mode):host .current-number{color:var(--gray9)!important}:host-context(.dark-mode):host a.icon:active,:host-context(.dark-mode):host a.icon:focus,:host-context(.dark-mode):host a.icon:hover{color:#fff}"},enumerable:!0,configurable:!0}),t}();export{Pagination as StellarPagination};