import*as tslib_1 from"../polyfills/tslib.js";import{h}from"../stellar-core.core.js";import{a as delay}from"./chunk-e7da9887.js";function u(e,t){for(var n,r,o=null,i=!1,l=!1,s=arguments.length;s-- >2;)T.push(arguments[s]);for(;T.length>0;){var a=T.pop();if(a&&void 0!==a.pop)for(s=a.length;s--;)T.push(a[s]);else"boolean"==typeof a&&(a=null),(l="function"!=typeof e)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(l=!1)),l&&i?o[o.length-1].vtext+=a:null===o?o=[l?{vtext:a}:a]:o.push(l?{vtext:a}:a),i=l}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(s in t.class)t.class[s]&&T.push(s);t.class=T.join(" "),T.length=0}null!=t.key&&(n=t.key),null!=t.name&&(r=t.name)}return"function"==typeof e?e(t,o||[],W):{vtag:e,vchildren:o,vtext:void 0,vattrs:t,vkey:n,vname:r,w:void 0,g:!1}}function f(e){return{vtag:e.vtag,vchildren:e.vchildren,vtext:e.vtext,vattrs:e.vattrs,vkey:e.vkey,vname:e.vname}}var T=[],W={forEach:function(e,t){e.forEach(function(e,n,r){return t(f(e),n,r)})},map:function(e,t){return e.map(function(e,n,r){return function(e){return{vtag:e.vtag,vchildren:e.vchildren,vtext:e.vtext,vattrs:e.vattrs,vkey:e.vkey,vname:e.vname}}(t(f(e),n,r))})}},__rest=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};function defaultConsumerRender(e,t){return u("context-consumer",{subscribe:e,renderer:t})}function createProviderConsumer(e,t){void 0===t&&(t=defaultConsumerRender);var n=new Map,r=e;function o(e,t){Array.isArray(e)?e.slice().forEach(function(e){t[e]=r[e]}):t[e]=Object.assign({},r),t.forceUpdate()}function i(e){return function(t){n.has(t)||(n.set(t,e),o(e,t))}}function l(e,t){return i(t)(e),function(){n.delete(e)}}return{Provider:function(e,t){return r=e.state,n.forEach(o),t},Consumer:function(e,n){return t(l,n[0])},wrapConsumer:function(e,t){var n=e.is;return function(e){var r=e.children,o=__rest(e,["children"]);return u(n,Object.assign({ref:i(t)},o),r)}},injectProps:function(e,t){var n=null,r=Object.keys(e.properties).find(function(t){return 1==e.properties[t].elementRef});if(null==r)throw new Error("Please ensure that your Component "+e.is+' has an attribute with an "@Element" decorator. This is required to be able to inject properties.');var o=e.prototype.componentWillLoad;e.prototype.componentWillLoad=function(){if(n=l(this[r],t),o)return o.bind(this)()};var i=e.prototype.componentDidUnload;e.prototype.componentDidUnload=function(){if(n(),i)return i.bind(this)()}}}}var ActiveRouter=createProviderConsumer({historyType:"browser",location:{pathname:"",query:{},key:""},titleSuffix:"",root:"/",routeViewsUpdated:function(){}});function injectHistory(e){ActiveRouter.injectProps(e,["history","location"])}var Item=function(){function e(){this.type="button",this.href="#",this.wrap=!1,this.fit=!1,this.simple=!1,this.danger=!1,this.selected=!1,this.multiple=!1,this.selectable=!1,this.focused=!1,this.route=!1,this.current=!1}return e.prototype.componentWillLoad=function(){this.slotted=this.element.innerHTML},e.prototype.componentDidLoad=function(){var e=this;setTimeout(function(){e.selected&&e.mounted.emit(e)},10)},e.prototype.data=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(e){return[2,{size:this.size,value:this.value,type:this.type,label:this.label,danger:this.danger,slotted:this.slotted}]})})},e.prototype.apply=function(e){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(t){return this.size=e.size,this.value=e.value,this.type=e.type,this.label=e.label,this.element.shadowRoot.querySelector(".button").innerHTML=e.slotted,[2]})})},e.prototype.setFocus=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(e){return this.focused=!0,this.element.querySelector(".button").focus(),[2]})})},e.prototype.handleClick=function(e){this.route&&(e.preventDefault(),this.history.push(this.href,{})),this.current||this.selectionChanged.emit(this)},e.prototype.handleFocus=function(){this.current&&this.focusChanged.emit(this),this.focused=!0},e.prototype.handleBlur=function(){this.current&&this.blurChanged.emit(this),this.focused=!1},e.prototype.classes=function(){var e="";return(e+=this.selected?"selected ":"")+(this.multiple?"multiple ":"")},e.prototype.select_item=function(e){if(this.selectable)if(e){if(this.selected!==e.selected){var t=new CustomEvent("click");this.element.querySelector(".button").dispatchEvent(t)}}else t=new CustomEvent("click"),this.element.querySelector(".button").dispatchEvent(t)},e.prototype.render=function(){var e=this;return h(this.type,{class:"button",type:"button",href:this.href,url:this.href,tabindex:"0",value:this.value,title:this.label,onClick:function(t){return e.handleClick(t)},onBlur:function(){return e.handleBlur()},onFocus:function(){return e.handleFocus()}},h("slot",null),(this.selected||this.multiple)&&h("stellar-asset",{class:this.classes(),name:"checkmark",block:!0}))},Object.defineProperty(e,"is",{get:function(){return"stellar-item"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{apply:{method:!0},current:{state:!0},danger:{type:Boolean,attr:"danger",reflectToAttr:!0,mutable:!0},data:{method:!0},element:{elementRef:!0},fit:{type:Boolean,attr:"fit",reflectToAttr:!0,mutable:!0},focused:{type:Boolean,attr:"focused",reflectToAttr:!0,mutable:!0},history:{type:"Any",attr:"history"},href:{type:String,attr:"href",reflectToAttr:!0,mutable:!0},label:{type:String,attr:"label",reflectToAttr:!0,mutable:!0},location:{type:"Any",attr:"location"},multiple:{type:Boolean,attr:"multiple",reflectToAttr:!0,mutable:!0},route:{type:Boolean,attr:"route"},select_item:{method:!0},selectable:{type:Boolean,attr:"selectable",reflectToAttr:!0,mutable:!0},selected:{type:Boolean,attr:"selected",reflectToAttr:!0,mutable:!0},setFocus:{method:!0},simple:{type:Boolean,attr:"simple",reflectToAttr:!0,mutable:!0},size:{type:String,attr:"size",mutable:!0},slotted:{state:!0},type:{type:String,attr:"type",reflectToAttr:!0,mutable:!0},value:{type:String,attr:"value",reflectToAttr:!0,mutable:!0},valueLabel:{type:String,attr:"value-label",reflectToAttr:!0,mutable:!0},wrap:{type:Boolean,attr:"wrap",reflectToAttr:!0,mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"selectionChanged",method:"selectionChanged",bubbles:!0,cancelable:!0,composed:!0},{name:"mounted",method:"mounted",bubbles:!0,cancelable:!0,composed:!0},{name:"focusChanged",method:"focusChanged",bubbles:!0,cancelable:!0,composed:!0},{name:"blurChanged",method:"blurChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-stellar-item-h, .sc-stellar-item-h   *.sc-stellar-item, .sc-stellar-item-h   .sc-stellar-item:after, .sc-stellar-item-h   .sc-stellar-item:before{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-stellar-item-h{--item-size:2.356em;--font-size:1.4rem;display:block;width:100%;height:var(--item-size);color:var(--theme-base9);font-family:inherit;visibility:visible!important;font-size:var(--font-size);text-align:left;position:relative}[fit].sc-stellar-item-h{--item-size:auto}[fit].sc-stellar-item-h   a.button.sc-stellar-item, [fit].sc-stellar-item-h   button.button.sc-stellar-item, [fit].sc-stellar-item-h   stencil-route-link.sc-stellar-item   a.sc-stellar-item{padding:1.4rem 0 1.4rem 1.4rem}[wrap].sc-stellar-item-h   .button.sc-stellar-item{white-space:normal;text-align:left}[danger].sc-stellar-item-h   .button.sc-stellar-item{color:var(--red5)}.sc-stellar-item-h   a.button.sc-stellar-item, .sc-stellar-item-h   button.button.sc-stellar-item, .sc-stellar-item-h   stencil-route-link.sc-stellar-item   a.sc-stellar-item{text-decoration:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;outline:0;border:0;background:transparent;padding:0 0 0 .6rem;width:100%;height:calc(var(--item-size) - 1px);color:currentColor;font-weight:500;font-size:inherit}.sc-stellar-item-h   stencil-route-link.sc-stellar-item{padding:0}.sc-stellar-item-h   .button.sc-stellar-item   a.sc-stellar-item{color:inherit;background:inherit;text-decoration:none}.sc-stellar-item-h .button .sc-stellar-item-s > stellar-avatar{margin-right:.5rem;background:var(--theme-base9);visibility:visible!important;display:block!important;width:2rem;height:2rem}.sc-stellar-item-h   .button.sc-stellar-item   stellar-tag.sc-stellar-item{margin:auto .5rem auto auto}.sc-stellar-item-h   .button.sc-stellar-item   stellar-asset.sc-stellar-item{margin-left:1rem}.sc-stellar-item-h   .button.sc-stellar-item   span.sc-stellar-item{margin:auto auto auto 0;width:100%;text-overflow:ellipsis;white-space:nowrap}[size=small].sc-stellar-item-h   .button.sc-stellar-item{padding:0 1rem;height:3rem}.sc-stellar-item-h   .selected.sc-stellar-item{-webkit-animation:fadeInLeft .2s ease;animation:fadeInLeft .2s ease;font-size:var(--item-size);margin-left:auto!important;background:transparent;color:var(--theme-base5);height:calc(var(--item-size) - 1px)}.sc-stellar-item-h:focus   .selected.sc-stellar-item, .sc-stellar-item-h:focus-within   .selected.sc-stellar-item, .sc-stellar-item-h:hover   .selected.sc-stellar-item{color:#fff}[fit].sc-stellar-item-h   .selected.sc-stellar-item{position:absolute;top:.625rem;right:.25rem;font-size:3rem}[fit][multiple].sc-stellar-item-h   .selected.sc-stellar-item{right:auto}.sc-stellar-item-h:focus-within, .sc-stellar-item-h:hover, .sc-stellar-item-h   .button.sc-stellar-item:focus, .sc-stellar-item-h   .button.sc-stellar-item:hover{background:var(--theme-base1)}.current.sc-stellar-item-h{background:#fff}[danger].sc-stellar-item-h   .button.sc-stellar-item:focus, [danger].sc-stellar-item-h   .button.sc-stellar-item:hover{background:var(--red5);color:#fff}[simple].sc-stellar-item-h   .button.sc-stellar-item{background:#fff!important}.current.sc-stellar-item-h   stellar-asset.sc-stellar-item{display:none}.sc-stellar-item-h   stellar-asset.multiple.sc-stellar-item{border:1px solid var(--border-color);background:var(--background);border-radius:4px;font-size:2.5rem;width:2.5rem;height:2.5rem;margin:0 0 0 auto;left:-1rem;position:relative;color:transparent}.sc-stellar-item-h   stellar-asset.multiple.selected.sc-stellar-item{color:var(--theme-base5)}.current.sc-stellar-item-h   .button.sc-stellar-item:focus, .current.sc-stellar-item-h   .button.sc-stellar-item:hover, .current.sc-stellar-item-h:focus-within, .current.sc-stellar-item-h:hover{background:transparent}.dark-mode.sc-stellar-item-h -no-combinator.sc-stellar-item-h:focus-within, .dark-mode   .sc-stellar-item-h -no-combinator.sc-stellar-item-h:focus-within, .dark-mode.sc-stellar-item-h -no-combinator.sc-stellar-item-h:hover, .dark-mode   .sc-stellar-item-h -no-combinator.sc-stellar-item-h:hover, .dark-mode.sc-stellar-item-h -no-combinator.sc-stellar-item-h   .button.sc-stellar-item:focus, .dark-mode   .sc-stellar-item-h -no-combinator.sc-stellar-item-h   .button.sc-stellar-item:focus, .dark-mode.sc-stellar-item-h -no-combinator.sc-stellar-item-h   .button.sc-stellar-item:hover, .dark-mode   .sc-stellar-item-h -no-combinator.sc-stellar-item-h   .button.sc-stellar-item:hover{background:var(--theme-base8)}.dark-mode.sc-stellar-item-h -no-combinator.current.sc-stellar-item-h   .button.sc-stellar-item:focus, .dark-mode   .sc-stellar-item-h -no-combinator.current.sc-stellar-item-h   .button.sc-stellar-item:focus, .dark-mode.sc-stellar-item-h -no-combinator.current.sc-stellar-item-h   .button.sc-stellar-item:hover, .dark-mode   .sc-stellar-item-h -no-combinator.current.sc-stellar-item-h   .button.sc-stellar-item:hover, .dark-mode.sc-stellar-item-h -no-combinator.current.sc-stellar-item-h:focus-within, .dark-mode   .sc-stellar-item-h -no-combinator.current.sc-stellar-item-h:focus-within, .dark-mode.sc-stellar-item-h -no-combinator.current.sc-stellar-item-h:hover, .dark-mode   .sc-stellar-item-h -no-combinator.current.sc-stellar-item-h:hover{background:transparent}"},enumerable:!0,configurable:!0}),e}();injectHistory&&injectHistory(Item);var Select=function(){function e(){this.name="select",this.placeholder="Choose something...",this.required=!1,this.open=!1,this.verbiage="selection",this.valueLabel=void 0,this.blur=0,this.clear_confirm=!1,this.values=[]}return e.prototype.componentWillLoad=function(){this.multiple&&(this.value=[]),this.listen_to_values()},e.prototype.componentDidLoad=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var e=this;return tslib_1.__generator(this,function(t){switch(t.label){case 0:return this.current=this.element.shadowRoot.querySelector("stellar-item.current"),this.multiple?[4,this.option_elements()]:[3,2];case 1:t.sent().forEach(function(e){e.multiple=!0}),t.label=2;case 2:return this.default&&("object"==typeof this.default&&"Array"===this.default.constructor.name?this.default.forEach(function(t){e.element.querySelector('stellar-item[value="'+t+'"]').select_item()}):this.element.querySelector('stellar-item[value="'+this.default+'"]').select_item()),[2]}})})},e.prototype.clearValue=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var e;return tslib_1.__generator(this,function(t){switch(t.label){case 0:return this.clear_confirm?[4,delay(100)]:[3,3];case 1:return t.sent(),this.clear_confirm=!1,this.value=[],this.values=[],[4,this.option_elements()];case 2:return e=t.sent(),Array.from(e).forEach(function(e){e.selected=!1}),this.change.emit(this.value),[3,4];case 3:this.clear_confirm=!0,t.label=4;case 4:return[2]}})})},e.prototype.handleOpenChange=function(){this.element.shadowRoot.querySelector("button.select-title").focus()},e.prototype.handleMultipleChange=function(e){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(t){switch(t.label){case 0:return[4,this.option_elements()];case 1:return t.sent().forEach(function(t){t.multiple=e}),[2]}})})},e.prototype.mountedHandler=function(e){return tslib_1.__awaiter(this,void 0,void 0,function(){var t,n,r,o=this;return tslib_1.__generator(this,function(i){switch(i.label){case 0:return t=e.detail,this.multiple?[4,this.option_elements()]:[3,2];case 1:return n=i.sent(),r=[],n.forEach(function(e){e.selectable=!0,o.value&&o.value.includes(e.value)&&!t.element.selected&&(e.selected=!0),e.selected&&r.push(e.value)}),this.value=r,[3,4];case 2:return this.value=t.element.selected?t.element.value:this.value,this.value?[4,this.option_elements()]:[3,4];case 3:i.sent().forEach(function(e){e.selectable=!0,o.value===e.value&&(e.selected=!0)}),i.label=4;case 4:return[2]}})})},e.prototype.selectionChangedHandler=function(e){return tslib_1.__awaiter(this,void 0,void 0,function(){var t,n,r,o,i,l=this;return tslib_1.__generator(this,function(s){switch(s.label){case 0:return t=e.detail,this.multiple?(t.selected=!t.selected,[4,this.option_elements()]):[3,2];case 1:return n=s.sent(),r=[],n.forEach(function(e){l.value&&l.value.includes(e.value)&&t.value!==e.value&&(e.selected=!0),e.selected&&r.push(e.value)}),this.value=r,this.change.emit(this.value),[3,6];case 2:return t.element.classList.contains("current")?[3,6]:[4,this.option_elements()];case 3:return s.sent().forEach(function(e){e.selected=!1}),t.selected=!0,this.value=t.value,this.change.emit(this.value),this.current?(i=(o=this.current).apply,[4,t.data()]):[3,5];case 4:i.apply(o,[s.sent()]),s.label=5;case 5:setTimeout(function(){l.open=!1},200),s.label=6;case 6:return[2]}})})},e.prototype.selectedFocusChangedHandler=function(){this.focused=!0},e.prototype.selectedBlurChangedHandler=function(){this.focused=!1},e.prototype.handleTitleFocus=function(){this.focused=!0},e.prototype.handleTitleBlur=function(){this.focused=!1},e.prototype.handleNotClick=function(e){e.target===this.element||this.element.contains(e.target)||this.open&&(this.open=!1)},e.prototype.handleEscapeKey=function(){this.open&&(this.open=!1)},e.prototype.handleArrowKeys=function(e){40!==e.keyCode&&38!==e.keyCode||this.open&&(e.preventDefault(),e.stopPropagation(),40===e.keyCode?this.focusNextOption():this.focusPreviousOption())},e.prototype.readable_value=function(){return"object"==typeof this.value?0===this.value.length?this.placeholderInverted?"All "+this.verbiage+"(s) selected":"No "+this.verbiage+"(s) selected":this.value.length+" "+this.verbiage+(this.value.length>1?"s":""):"string"==typeof this.value?this.valueLabel||this.value.toString()||"Select "+(this.verbiageAn?"an":"a")+" "+this.verbiage:this.valueLabel||this.value},e.prototype.validate=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var e;return tslib_1.__generator(this,function(t){switch(t.label){case 0:return e={name:""+this.name,value:this.value,valid:!0,errors:[]},this.novalidate?[3,2]:(this.value||(e.valid=!1,e.errors.push({message:"This field is required."})),[4,this.options()]);case 1:t.sent().includes(this.value)||(e.valid=!1,e.errors.push({message:'"'+this.value+"\" isn't a valid option."})),t.label=2;case 2:return this.status=e,[2,this.status]}})})},e.prototype.listen_to_values=function(){var e=this,t=this.element;this.observer=new MutationObserver(function(t){for(var n=0,r=t;n<r.length;n++)"childList"==r[n].type&&e.update_values()}),this.observer.observe(t,{childList:!0,subtree:!0})},e.prototype.update_values=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var e,t=this;return tslib_1.__generator(this,function(n){return e=Array.from(this.element.querySelectorAll("stellar-item")),this.values=e.map(function(e){return t.multiple&&(e.multiple=!0),e.valueLabel&&e.selected&&(t.valueLabel=e.valueLabel),e.value}),[2]})})},e.prototype.option_elements=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(e){return[2,this.element.querySelectorAll("stellar-item:not(.current)")]})})},e.prototype.options=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var e,t;return tslib_1.__generator(this,function(n){switch(n.label){case 0:return[4,this.option_elements()];case 1:return e=n.sent(),t=[],e.forEach(function(e){t.push(e.value)}),[2,t]}})})},e.prototype.focusPaths=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var e,t,n,r,o;return tslib_1.__generator(this,function(i){switch(i.label){case 0:return e=void 0,t=void 0,n=void 0,[4,this.options()];case 1:return(r=i.sent()).forEach(function(o,i){o.hasFocus()&&(n=r[i-1],e=o,t=r[i+1])}),e||(this.focusElement(o=r[0]),e=o),[2,{previous:n,current:e,next:t}]}})})},e.prototype.focusFirstItem=function(){this.element.querySelector(".select-list stellar-item:first-of-type").focus()},e.prototype.focusElement=function(e){e.focus()},e.prototype.focusNextOption=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var e;return tslib_1.__generator(this,function(t){switch(t.label){case 0:return[4,this.focusPaths()];case 1:return(e=t.sent()).next&&this.focusElement(e.next),[2]}})})},e.prototype.focusPreviousOption=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var e;return tslib_1.__generator(this,function(t){switch(t.label){case 0:return[4,this.focusPaths()];case 1:return(e=t.sent()).previous&&this.focusElement(e.previous),[2]}})})},e.prototype.closeOthers=function(){var e=this,t=document.querySelectorAll("stellar-select[open]");Array.from(t).forEach(function(t){t!==e.element&&(t.open=!1)})},e.prototype.handleTitleClick=function(){this.closeOthers(),this.open=!this.open},e.prototype.renderLabel=function(){var e=this;if(this.label)return h("div",{class:"label-wrapper"},h("stellar-label",{onClick:function(){e.focusFirstItem()}},this.label),this.renderEmptyButton())},e.prototype.renderErrors=function(){if(this.status&&this.status.errors&&0!==this.status.errors.length)return h("p",{class:"validation"},this.status.errors.map(function(e){return h("span",null,e.message)}))},e.prototype.renderEmptyButton=function(){var e=this;return this.multiple&&this.value&&this.value.length>0&&h("stellar-button",{tag:"button",size:"tiny",ghost:!0,class:"theme-red",onClick:function(t){t.stopPropagation(),e.clearValue()}},h("stellar-asset",{name:"close",class:"fs4 mr1"}),this.clear_confirm?"Clear "+this.value.length+" selections?":"Clear")},e.prototype.render=function(){var e=this;return h("div",{class:"wrapper"},this.renderLabel(),h("div",{class:"select"},h("button",{type:"button",class:"select-title",onClick:function(){return e.handleTitleClick()},onFocus:function(){return e.handleTitleFocus()},onBlur:function(){return e.handleTitleBlur()}},h("stellar-item",{class:"current",type:"button",value:this.value?this.value.toString():"",tabindex:"-1",selectable:!1,label:this.readable_value()},this.readable_value()),h("stellar-asset",{name:"arrow-down"}),this.name&&h("input",{type:"text",tabindex:"-1",value:this.value,name:this.name.toString(),required:this.required})),this.tooltip&&h("stellar-tooltip",{align:"bottom-left",onClick:function(){return e.handleTitleClick()}},this.tooltip),h("stellar-blur",{vertical:this.blur,class:"select-list"},h("div",{class:"select-list-header"},h("slot",{name:"header"})),h("div",{class:"select-list-body"},h("slot",null)),this.footer&&h("div",{class:"select-list-footer"},h("slot",{name:"footer"})))),h("stellar-label",{size:"small",underneath:!0},this.description),!this.novalidate&&this.renderErrors())},Object.defineProperty(e,"is",{get:function(){return"stellar-select"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{blur:{state:!0},clear_confirm:{state:!0},current:{state:!0},default:{type:"Any",attr:"default"},description:{type:String,attr:"description",mutable:!0},element:{elementRef:!0},focused:{type:Boolean,attr:"focused",reflectToAttr:!0,mutable:!0},footer:{type:Boolean,attr:"footer"},inline:{type:Boolean,attr:"inline",reflectToAttr:!0,mutable:!0},label:{type:String,attr:"label",mutable:!0},multiple:{type:Boolean,attr:"multiple",reflectToAttr:!0,mutable:!0,watchCallbacks:["handleMultipleChange"]},name:{type:"Any",attr:"name",reflectToAttr:!0,mutable:!0},novalidate:{type:Boolean,attr:"novalidate"},observer:{state:!0},open:{type:Boolean,attr:"open",reflectToAttr:!0,mutable:!0,watchCallbacks:["handleOpenChange"]},option_elements:{method:!0},options:{method:!0},other:{type:Boolean,attr:"other"},overlay:{type:Boolean,attr:"overlay",reflectToAttr:!0},placeholder:{type:String,attr:"placeholder",mutable:!0},placeholderInverted:{type:Boolean,attr:"placeholder-inverted"},processing:{type:Boolean,attr:"processing"},required:{type:Boolean,attr:"required"},size:{type:String,attr:"size",reflectToAttr:!0,mutable:!0},status:{state:!0},tooltip:{type:String,attr:"tooltip",mutable:!0},validate:{method:!0},value:{type:String,attr:"value",reflectToAttr:!0,mutable:!0},valueLabel:{type:String,attr:"value-label"},values:{state:!0},verbiage:{type:String,attr:"verbiage"},verbiageAn:{type:Boolean,attr:"verbiage-an"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"change",method:"change",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"mounted",method:"mountedHandler"},{name:"selectionChanged",method:"selectionChangedHandler"},{name:"focusChanged",method:"selectedFocusChangedHandler"},{name:"blurChanged",method:"selectedBlurChangedHandler"},{name:"window:click",method:"handleNotClick"},{name:"keydown.escape",method:"handleEscapeKey"},{name:"keydown",method:"handleArrowKeys"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-stellar-select-h{--color:var(--black);--border-radius:0.3rem;--item-size:4.25rem;--background:var(--white);--border-color:var(--gray1);-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;font-family:inherit;position:relative}.sc-stellar-select-h:not(.hydrated){display:none}.sc-stellar-select-h .sc-stellar-select-s > stellar-item, .sc-stellar-select-h   stellar-item.sc-stellar-select{--item-size:4.2rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}.sc-stellar-select-h   *.sc-stellar-select, .sc-stellar-select-h   .sc-stellar-select:after, .sc-stellar-select-h   .sc-stellar-select:before{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:inherit}.sc-stellar-select-h   .select.sc-stellar-select{display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column}.sc-stellar-select-h   .select-title.sc-stellar-select{cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;outline:none;border:1px solid var(--border-color);border-radius:var(--border-radius);padding:0;width:100%;height:var(--item-size);overflow:hidden;line-height:1.4;color:var(--color);font-weight:500;background:var(--background)}[focused].sc-stellar-select-h   .select-title.sc-stellar-select, .sc-stellar-select-h   .select-title.sc-stellar-select:focus, .sc-stellar-select-h   .wrapper.sc-stellar-select:hover   .select-title.sc-stellar-select{border-color:var(--theme-base5);-webkit-box-shadow:0 0 0 1px var(--theme-base5);box-shadow:0 0 0 1px var(--theme-base5)}.sc-stellar-select-h   .select-title.sc-stellar-select   stellar-item.sc-stellar-select{background:var(--background)!important;color:var(--color)!important}.sc-stellar-select-h   .select-title.sc-stellar-select   input.sc-stellar-select{display:none}.sc-stellar-select-h   .select-title.sc-stellar-select   stellar-asset.sc-stellar-select{position:absolute;right:2rem;-webkit-transition:-webkit-transform .1s var(--ease) 0s;transition:-webkit-transform .1s var(--ease) 0s;transition:transform .1s var(--ease) 0s;transition:transform .1s var(--ease) 0s,-webkit-transform .1s var(--ease) 0s;font-size:1.6rem;color:var(--theme-base5);background:transparent;border:0}.sc-stellar-select-h   .select-title.sc-stellar-select   .button.sc-stellar-select   stellar-asset.sc-stellar-select{display:none}[open].sc-stellar-select-h   .select-title.sc-stellar-select   stellar-asset.sc-stellar-select{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sc-stellar-select-h   .select-list.sc-stellar-select{display:-ms-flexbox;display:flex;position:relative;top:0;left:0;-ms-flex-direction:column;flex-direction:column;-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transition:opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s,-webkit-transform .2s var(--ease) .35s;transition:opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s,-webkit-transform .2s var(--ease) .35s;transition:transform .2s var(--ease) .35s,opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s;transition:transform .2s var(--ease) .35s,opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s,-webkit-transform .2s var(--ease) .35s;opacity:0;z-index:3;background:var(--background);width:100%;max-height:0;overflow-x:hidden;overflow-y:hidden;color:var(--theme-base5);border:1px solid var(--border-color);pointer-events:none;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.15);box-shadow:0 1px 2px rgba(0,0,0,.15);border-radius:.3rem}.sc-stellar-select-h .select-list .sc-stellar-select-s > stellar-item{color:var(--color);border-bottom:1px solid var(--border-color)}.sc-stellar-select-h .select-list .sc-stellar-select-s > stellar-item:last-child{border-bottom:none}.sc-stellar-select-h   .label-wrapper.sc-stellar-select{width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:1rem;height:1.8rem}.sc-stellar-select-h   .label-wrapper.sc-stellar-select   stellar-label.sc-stellar-select{margin:0}.sc-stellar-select-h   .select-list-footer.sc-stellar-select{-ms-flex-order:3;order:3;height:4rem;border-top:1px solid var(--theme-base5)}stellar-input.sc-stellar-select   .validation.sc-stellar-select{margin-bottom:0;color:var(--red5);font-size:var(--complementing-font-size);font-weight:500}stellar-input.sc-stellar-select   .validation.sc-stellar-select   span.sc-stellar-select{display:block;padding:1.4rem 0;line-height:1.4}stellar-input.sc-stellar-select   .validation.sc-stellar-select   span.sc-stellar-select + span.sc-stellar-select{border-top:1px solid var(--border-color)}[open].sc-stellar-select-h   .select-list.sc-stellar-select, .sc-stellar-select-h   .select-list.sc-stellar-select:focus-within{-webkit-transition:opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms,-webkit-transform .2s var(--ease) 0ms;transition:opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms,-webkit-transform .2s var(--ease) 0ms;transition:transform .2s var(--ease) 0ms,opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms;transition:transform .2s var(--ease) 0ms,opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms,-webkit-transform .2s var(--ease) 0ms;opacity:1;pointer-events:auto;max-height:20rem;overflow-y:auto}[size=small].sc-stellar-select-h   .select-title.sc-stellar-select{height:3.5rem}[size=small].sc-stellar-select-h   .select-title.sc-stellar-select   stellar-asset.sc-stellar-select{right:1rem}[size=small].sc-stellar-select-h   .label.sc-stellar-select{font-size:.75rem}[size=small].sc-stellar-select-h   stellar-item.sc-stellar-select{--font-size:1.4rem;--item-size:3.5rem}[size=small].sc-stellar-select-h   .select-list.sc-stellar-select:focus-within, [size=small][open].sc-stellar-select-h   .select-list.sc-stellar-select{max-height:11rem}[overlay].sc-stellar-select-h   .select-list.sc-stellar-select{position:absolute;top:calc((var(--item-size) * .75) + .5rem)}.sc-stellar-select-h   stellar-tooltip.sc-stellar-select{cursor:pointer}.sc-stellar-select-h   stellar-item.sc-stellar-select   stellar-tooltip.sc-stellar-select{display:none}.dark-mode.sc-stellar-select-h, .dark-mode   .sc-stellar-select-h{--background:var(--black-alt);--color:var(--white);--border-color:var(--gray9)}.sc-stellar-select-h   .sc-stellar-select::selection{background:var(--theme-base0)!important}"},enumerable:!0,configurable:!0}),e}();export{Item as StellarItem,Select as StellarSelect};