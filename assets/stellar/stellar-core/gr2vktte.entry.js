const e=window.StellarCore.h;import{a as t}from"./chunk-e7da9887.js";function l(e,t){for(var l,s,r=null,n=!1,o=!1,c=arguments.length;c-- >2;)a.push(arguments[c]);for(;a.length>0;){var u=a.pop();if(u&&void 0!==u.pop)for(c=u.length;c--;)a.push(u[c]);else"boolean"==typeof u&&(u=null),(o="function"!=typeof e)&&(null==u?u="":"number"==typeof u?u=String(u):"string"!=typeof u&&(o=!1)),o&&n?r[r.length-1].vtext+=u:null===r?r=[o?{vtext:u}:u]:r.push(o?{vtext:u}:u),n=o}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(c in t.class)t.class[c]&&a.push(c);t.class=a.join(" "),a.length=0}null!=t.key&&(l=t.key),null!=t.name&&(s=t.name)}return"function"==typeof e?e(t,r||[],i):{vtag:e,vchildren:r,vtext:void 0,vattrs:t,vkey:l,vname:s,w:void 0,g:!1}}function s(e){return{vtag:e.vtag,vchildren:e.vchildren,vtext:e.vtext,vattrs:e.vattrs,vkey:e.vkey,vname:e.vname}}var a=[],i={forEach:function(e,t){e.forEach(function(e,l,a){return t(s(e),l,a)})},map:function(e,t){return e.map(function(e,l,a){return function(e){return{vtag:e.vtag,vchildren:e.vchildren,vtext:e.vtext,vattrs:e.vattrs,vkey:e.vkey,vname:e.vname}}(t(s(e),l,a))})}};function r(e,t){return l("context-consumer",{subscribe:e,renderer:t})}var n=function(e,t){void 0===t&&(t=r);var s=new Map,a={historyType:"browser",location:{pathname:"",query:{},key:""},titleSuffix:"",root:"/",routeViewsUpdated:function(){}};function i(e,t){Array.isArray(e)?e.slice().forEach(function(e){t[e]=a[e]}):t[e]=Object.assign({},a),t.forceUpdate()}function n(e){return function(t){s.has(t)||(s.set(t,e),i(e,t))}}function o(e,t){return n(t)(e),function(){s.delete(e)}}return{Provider:function(e,t){return a=e.state,s.forEach(i),t},Consumer:function(e,l){return t(o,l[0])},wrapConsumer:function(e,t){var s=e.is;return function(e){var a=e.children,i=function(e,t){var l={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(l[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&(l[s[a]]=e[s[a]])}return l}(e,["children"]);return l(s,Object.assign({ref:n(t)},i),a)}},injectProps:function(e,t){var l=null,s=Object.keys(e.properties).find(function(t){return 1==e.properties[t].elementRef});if(null==s)throw new Error("Please ensure that your Component "+e.is+' has an attribute with an "@Element" decorator. This is required to be able to inject properties.');var a=e.prototype.componentWillLoad;e.prototype.componentWillLoad=function(){if(l=o(this[s],t),a)return a.bind(this)()};var i=e.prototype.componentDidUnload;e.prototype.componentDidUnload=function(){if(l(),i)return i.bind(this)()}}}}();function o(e){n.injectProps(e,["history","location"])}class c{constructor(){this.type="button",this.href="#",this.wrap=!1,this.fit=!1,this.simple=!1,this.danger=!1,this.selected=!1,this.multiple=!1,this.selectable=!1,this.focused=!1,this.route=!1,this.current=!1}componentWillLoad(){this.slotted=this.element.innerHTML}componentDidLoad(){setTimeout(()=>{this.selected&&this.mounted.emit(this)},10)}async data(){return{size:this.size,value:this.value,type:this.type,label:this.label,danger:this.danger,slotted:this.slotted}}async apply(e){this.size=e.size,this.value=e.value,this.type=e.type,this.label=e.label,this.element.shadowRoot.querySelector(".button").innerHTML=e.slotted}async setFocus(){this.focused=!0,this.element.querySelector(".button").focus()}handleClick(e){this.route&&(e.preventDefault(),this.history.push(this.href,{})),this.current||this.selectionChanged.emit(this)}handleFocus(){this.current&&this.focusChanged.emit(this),this.focused=!0}handleBlur(){this.current&&this.blurChanged.emit(this),this.focused=!1}classes(){let e="";return(e+=this.selected?"selected ":"")+(this.multiple?"multiple ":"")}async select_item(e){if(this.selectable)if(e){if(this.selected!==e.selected){var t=new CustomEvent("click");this.element.querySelector(".button").dispatchEvent(t)}}else t=new CustomEvent("click"),this.element.querySelector(".button").dispatchEvent(t)}render(){return e(this.type,{class:"button",type:"button",href:this.href,url:this.href,tabindex:"0",value:this.value,title:this.label,onClick:e=>this.handleClick(e),onBlur:()=>this.handleBlur(),onFocus:()=>this.handleFocus()},e("slot",null),(this.selected||this.multiple)&&e("stellar-asset",{class:this.classes(),name:"checkmark",block:!0}))}static get is(){return"stellar-item"}static get encapsulation(){return"shadow"}static get properties(){return{apply:{method:!0},current:{state:!0},danger:{type:Boolean,attr:"danger",reflectToAttr:!0,mutable:!0},data:{method:!0},element:{elementRef:!0},fit:{type:Boolean,attr:"fit",reflectToAttr:!0,mutable:!0},focused:{type:Boolean,attr:"focused",reflectToAttr:!0,mutable:!0},history:{type:"Any",attr:"history"},href:{type:String,attr:"href",reflectToAttr:!0,mutable:!0},label:{type:String,attr:"label",reflectToAttr:!0,mutable:!0},location:{type:"Any",attr:"location"},multiple:{type:Boolean,attr:"multiple",reflectToAttr:!0,mutable:!0},route:{type:Boolean,attr:"route"},select_item:{method:!0},selectable:{type:Boolean,attr:"selectable",reflectToAttr:!0,mutable:!0},selected:{type:Boolean,attr:"selected",reflectToAttr:!0,mutable:!0},setFocus:{method:!0},simple:{type:Boolean,attr:"simple",reflectToAttr:!0,mutable:!0},size:{type:String,attr:"size",mutable:!0},slotted:{state:!0},type:{type:String,attr:"type",reflectToAttr:!0,mutable:!0},value:{type:String,attr:"value",reflectToAttr:!0,mutable:!0},valueLabel:{type:String,attr:"value-label",reflectToAttr:!0,mutable:!0},wrap:{type:Boolean,attr:"wrap",reflectToAttr:!0,mutable:!0}}}static get events(){return[{name:"selectionChanged",method:"selectionChanged",bubbles:!0,cancelable:!0,composed:!0},{name:"mounted",method:"mounted",bubbles:!0,cancelable:!0,composed:!0},{name:"focusChanged",method:"focusChanged",bubbles:!0,cancelable:!0,composed:!0},{name:"blurChanged",method:"blurChanged",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--item-size:2.356em;--font-size:1.4rem;display:block;width:100%;height:var(--item-size);color:var(--theme-base9);font-family:inherit;visibility:visible!important;font-size:var(--font-size);text-align:left;position:relative}:host([fit]){--item-size:auto}:host([fit]) a.button,:host([fit]) button.button,:host([fit]) stencil-route-link a{padding:1.4rem 0 1.4rem 1.4rem}:host([wrap]) .button{white-space:normal;text-align:left}:host([danger]) .button{color:var(--red5)}:host a.button,:host button.button,:host stencil-route-link a{text-decoration:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;outline:0;border:0;background:transparent;padding:0 0 0 .6rem;width:100%;height:calc(var(--item-size) - 1px);color:currentColor;font-weight:500;font-size:inherit}:host stencil-route-link{padding:0}:host .button a{color:inherit;background:inherit;text-decoration:none}:host .button ::slotted(stellar-avatar){margin-right:.5rem;background:var(--theme-base9);visibility:visible!important;display:block!important;width:2rem;height:2rem}:host .button stellar-tag{margin:auto .5rem auto auto}:host .button stellar-asset{margin-left:1rem}:host .button span{margin:auto auto auto 0;width:100%;text-overflow:ellipsis;white-space:nowrap}:host([size=small]) .button{padding:0 1rem;height:3rem}:host .selected{-webkit-animation:fadeInLeft .2s ease;animation:fadeInLeft .2s ease;font-size:var(--item-size);margin-left:auto!important;background:transparent;color:var(--theme-base5);height:calc(var(--item-size) - 1px)}:host(:focus) .selected,:host(:focus-within) .selected,:host(:hover) .selected{color:#fff}:host([fit]) .selected{position:absolute;top:.625rem;right:.25rem;font-size:3rem}:host([fit][multiple]) .selected{right:auto}:host(:focus-within),:host(:hover),:host .button:focus,:host .button:hover{background:var(--theme-base1)}:host(.current){background:#fff}:host([danger]) .button:focus,:host([danger]) .button:hover{background:var(--red5);color:#fff}:host([simple]) .button{background:#fff!important}:host(.current) stellar-asset{display:none}:host stellar-asset.multiple{border:1px solid var(--border-color);background:var(--background);border-radius:4px;font-size:2.5rem;width:2.5rem;height:2.5rem;margin:0 0 0 auto;left:-1rem;position:relative;color:transparent}:host stellar-asset.multiple.selected{color:var(--theme-base5)}:host(.current) .button:focus,:host(.current) .button:hover,:host(.current:focus-within),:host(.current:hover){background:transparent}:host-context(.dark-mode):host(:focus-within),:host-context(.dark-mode):host(:hover),:host-context(.dark-mode):host .button:focus,:host-context(.dark-mode):host .button:hover{background:var(--theme-base8)}:host-context(.dark-mode):host(.current) .button:focus,:host-context(.dark-mode):host(.current) .button:hover,:host-context(.dark-mode):host(.current:focus-within),:host-context(.dark-mode):host(.current:hover){background:transparent}"}}o&&o(c);class u{constructor(){this.name="select",this.placeholder="Choose something...",this.required=!1,this.open=!1,this.verbiage="selection",this.valueLabel=void 0,this.blur=0,this.clear_confirm=!1,this.values=[]}componentWillLoad(){this.multiple&&(this.value=[]),this.listen_to_values()}async componentDidLoad(){this.current=this.element.shadowRoot.querySelector("stellar-item.current"),this.multiple&&(await this.option_elements()).forEach(e=>{e.multiple=!0}),this.default&&("object"==typeof this.default&&"Array"===this.default.constructor.name?this.default.forEach(e=>{this.element.querySelector(`stellar-item[value="${e}"]`).select_item()}):this.element.querySelector(`stellar-item[value="${this.default}"]`).select_item())}async clearValue(){if(this.clear_confirm){await t(100),this.clear_confirm=!1,this.value=[],this.values=[];const e=await this.option_elements();Array.from(e).forEach(e=>{e.selected=!1}),this.change.emit(this.value)}else this.clear_confirm=!0}handleOpenChange(){this.element.shadowRoot.querySelector("button.select-title").focus()}async handleMultipleChange(e){(await this.option_elements()).forEach(t=>{t.multiple=e})}async mountedHandler(e){const t=e.detail;if(this.multiple){const e=await this.option_elements();let l=[];e.forEach(e=>{e.selectable=!0,this.value&&this.value.includes(e.value)&&!t.element.selected&&(e.selected=!0),e.selected&&l.push(e.value)}),this.value=l}else this.value=t.element.selected?t.element.value:this.value,this.value&&(await this.option_elements()).forEach(e=>{e.selectable=!0,this.value===e.value&&(e.selected=!0)})}async selectionChangedHandler(e){const t=e.detail;if(this.multiple){t.selected=!t.selected;const e=await this.option_elements();let l=[];e.forEach(e=>{this.value&&this.value.includes(e.value)&&t.value!==e.value&&(e.selected=!0),e.selected&&l.push(e.value)}),this.value=l,this.change.emit(this.value)}else t.element.classList.contains("current")||((await this.option_elements()).forEach(e=>{e.selected=!1}),t.selected=!0,this.value=t.value,this.change.emit(this.value),this.current&&this.current.apply(await t.data()),setTimeout(()=>{this.open=!1},200))}selectedFocusChangedHandler(){this.focused=!0}selectedBlurChangedHandler(){this.focused=!1}handleTitleFocus(){this.focused=!0}handleTitleBlur(){this.focused=!1}handleNotClick(e){e.target===this.element||this.element.contains(e.target)||this.open&&(this.open=!1)}handleEscapeKey(e){"space"===e.key&&this.open&&(this.open=!1)}handleArrowKeys(e){40!==e.keyCode&&38!==e.keyCode||this.open&&(e.preventDefault(),e.stopPropagation(),40===e.keyCode?this.focusNextOption():this.focusPreviousOption())}readable_value(){return"object"==typeof this.value?0===this.value.length?this.placeholderInverted?`All ${this.verbiage}(s) selected`:`No ${this.verbiage}(s) selected`:`${this.value.length} ${this.verbiage}${this.value.length>1?"s":""}`:"string"==typeof this.value?this.valueLabel||this.value.toString()||`Select ${this.verbiageAn?"an":"a"} ${this.verbiage}`:this.valueLabel||this.value}async validate(){const e={name:`${this.name}`,value:this.value,valid:!0,errors:[]};return this.novalidate||(this.value||(e.valid=!1,e.errors.push({message:"This field is required."})),(await this.options()).includes(this.value)||(e.valid=!1,e.errors.push({message:`"${this.value}" isn't a valid option.`}))),this.status=e,this.status}listen_to_values(){var e=this.element;this.observer=new MutationObserver(e=>{for(var t of e)"childList"==t.type&&this.update_values()}),this.observer.observe(e,{childList:!0,subtree:!0})}async update_values(){const e=Array.from(this.element.querySelectorAll("stellar-item"));this.values=e.map(e=>(this.multiple&&(e.multiple=!0),e.valueLabel&&e.selected&&(this.valueLabel=e.valueLabel),e.value))}async option_elements(){return this.element.querySelectorAll("stellar-item:not(.current)")}async options(){const e=await this.option_elements(),t=[];return e.forEach(e=>{t.push(e.value)}),t}async focusPaths(){let e=void 0,t=void 0,l=void 0;const s=await this.options();if(s.forEach((a,i)=>{a.hasFocus()&&(l=s[i-1],e=a,t=s[i+1])}),!e){var a=s[0];this.focusElement(a),e=a}return{previous:l,current:e,next:t}}focusFirstItem(){this.element.querySelector(".select-list stellar-item:first-of-type").focus()}focusElement(e){e.focus()}async focusNextOption(){const e=await this.focusPaths();e.next&&this.focusElement(e.next)}async focusPreviousOption(){const e=await this.focusPaths();e.previous&&this.focusElement(e.previous)}closeOthers(){const e=document.querySelectorAll("stellar-select[open]");Array.from(e).forEach(e=>{e!==this.element&&(e.open=!1)})}handleTitleClick(){this.closeOthers(),this.open=!this.open}renderLabel(){if(this.label)return e("div",{class:"label-wrapper"},e("stellar-label",{onClick:()=>{this.focusFirstItem()}},this.label),this.renderEmptyButton())}renderErrors(){if(this.status&&this.status.errors&&0!==this.status.errors.length)return e("p",{class:"validation"},this.status.errors.map(t=>e("span",null,t.message)))}renderEmptyButton(){return this.multiple&&this.value&&this.value.length>0&&e("stellar-button",{tag:"button",size:"tiny",ghost:!0,class:"theme-red",onClick:e=>{e.stopPropagation(),this.clearValue()}},e("stellar-asset",{name:"close",class:"fs4 mr1"}),this.clear_confirm?`Clear ${this.value.length} selections?`:"Clear")}render(){return e("div",{class:"wrapper"},this.renderLabel(),e("div",{class:"select"},e("button",{type:"button",class:"select-title",onClick:()=>this.handleTitleClick(),onFocus:()=>this.handleTitleFocus(),onBlur:()=>this.handleTitleBlur()},e("stellar-item",{class:"current",type:"button",value:this.value?this.value.toString():"",tabindex:"-1",selectable:!1,label:this.readable_value()},this.readable_value()),e("stellar-asset",{name:"arrow-down"}),this.name&&e("input",{type:"text",tabindex:"-1",value:this.value,name:this.name.toString(),required:this.required})),this.tooltip&&e("stellar-tooltip",{align:"bottom-left",onClick:()=>this.handleTitleClick()},this.tooltip),e("stellar-blur",{vertical:this.blur,class:"select-list"},e("div",{class:"select-list-header"},e("slot",{name:"header"})),e("div",{class:"select-list-body"},e("slot",null)),this.footer&&e("div",{class:"select-list-footer"},e("slot",{name:"footer"})))),e("stellar-label",{size:"small",underneath:!0},this.description),!this.novalidate&&this.renderErrors())}static get is(){return"stellar-select"}static get encapsulation(){return"shadow"}static get properties(){return{blur:{state:!0},clear_confirm:{state:!0},current:{state:!0},default:{type:"Any",attr:"default"},description:{type:String,attr:"description",mutable:!0},element:{elementRef:!0},focused:{type:Boolean,attr:"focused",reflectToAttr:!0,mutable:!0},footer:{type:Boolean,attr:"footer"},inline:{type:Boolean,attr:"inline",reflectToAttr:!0,mutable:!0},label:{type:String,attr:"label",mutable:!0},multiple:{type:Boolean,attr:"multiple",reflectToAttr:!0,mutable:!0,watchCallbacks:["handleMultipleChange"]},name:{type:"Any",attr:"name",reflectToAttr:!0,mutable:!0},novalidate:{type:Boolean,attr:"novalidate"},observer:{state:!0},open:{type:Boolean,attr:"open",reflectToAttr:!0,mutable:!0,watchCallbacks:["handleOpenChange"]},option_elements:{method:!0},options:{method:!0},other:{type:Boolean,attr:"other"},overlay:{type:Boolean,attr:"overlay",reflectToAttr:!0},placeholder:{type:String,attr:"placeholder",mutable:!0},placeholderInverted:{type:Boolean,attr:"placeholder-inverted"},processing:{type:Boolean,attr:"processing"},required:{type:Boolean,attr:"required"},size:{type:String,attr:"size",reflectToAttr:!0,mutable:!0},status:{state:!0},tooltip:{type:String,attr:"tooltip",mutable:!0},validate:{method:!0},value:{type:String,attr:"value",reflectToAttr:!0,mutable:!0},valueLabel:{type:String,attr:"value-label"},values:{state:!0},verbiage:{type:String,attr:"verbiage"},verbiageAn:{type:Boolean,attr:"verbiage-an"}}}static get events(){return[{name:"change",method:"change",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"mounted",method:"mountedHandler"},{name:"selectionChanged",method:"selectionChangedHandler"},{name:"focusChanged",method:"selectedFocusChangedHandler"},{name:"blurChanged",method:"selectedBlurChangedHandler"},{name:"window:click",method:"handleNotClick"},{name:"keydown",method:"handleEscapeKey"},{name:"keydown",method:"handleArrowKeys"}]}static get style(){return":host{--color:var(--black);--border-radius:0.3rem;--item-size:4.25rem;--background:var(--white);--border-color:var(--gray1);-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;font-family:inherit;position:relative}:host(:not(.hydrated)){display:none}:host ::slotted(stellar-item),:host stellar-item{--item-size:4.2rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:inherit}:host .select{display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column}:host .select-title{cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;outline:none;border:1px solid var(--border-color);border-radius:var(--border-radius);padding:0;width:100%;height:var(--item-size);overflow:hidden;line-height:1.4;color:var(--color);font-weight:500;background:var(--background)}:host([focused]) .select-title,:host .select-title:focus,:host .wrapper:hover .select-title{border-color:var(--theme-base5);-webkit-box-shadow:0 0 0 1px var(--theme-base5);box-shadow:0 0 0 1px var(--theme-base5)}:host .select-title stellar-item{background:var(--background)!important;color:var(--color)!important}:host .select-title input{display:none}:host .select-title stellar-asset{position:absolute;right:2rem;-webkit-transition:-webkit-transform .1s var(--ease) 0s;transition:-webkit-transform .1s var(--ease) 0s;transition:transform .1s var(--ease) 0s;transition:transform .1s var(--ease) 0s,-webkit-transform .1s var(--ease) 0s;font-size:1.6rem;color:var(--theme-base5);background:transparent;border:0}:host .select-title .button stellar-asset{display:none}:host([open]) .select-title stellar-asset{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host .select-list{display:-ms-flexbox;display:flex;position:relative;top:0;left:0;-ms-flex-direction:column;flex-direction:column;-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transition:opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s,-webkit-transform .2s var(--ease) .35s;transition:opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s,-webkit-transform .2s var(--ease) .35s;transition:transform .2s var(--ease) .35s,opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s;transition:transform .2s var(--ease) .35s,opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s,-webkit-transform .2s var(--ease) .35s;opacity:0;z-index:3;background:var(--background);width:100%;max-height:0;overflow-x:hidden;overflow-y:hidden;color:var(--theme-base5);border:1px solid var(--border-color);pointer-events:none;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.15);box-shadow:0 1px 2px rgba(0,0,0,.15);border-radius:.3rem}:host .select-list ::slotted(stellar-item){color:var(--color);border-bottom:1px solid var(--border-color)}:host .select-list ::slotted(stellar-item:last-child){border-bottom:none}:host .label-wrapper{width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:1rem;height:1.8rem}:host .label-wrapper stellar-label{margin:0}:host .select-list-footer{-ms-flex-order:3;order:3;height:4rem;border-top:1px solid var(--theme-base5)}stellar-input .validation{margin-bottom:0;color:var(--red5);font-size:var(--complementing-font-size);font-weight:500}stellar-input .validation span{display:block;padding:1.4rem 0;line-height:1.4}stellar-input .validation span+span{border-top:1px solid var(--border-color)}:host([open]) .select-list,:host .select-list:focus-within{-webkit-transition:opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms,-webkit-transform .2s var(--ease) 0ms;transition:opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms,-webkit-transform .2s var(--ease) 0ms;transition:transform .2s var(--ease) 0ms,opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms;transition:transform .2s var(--ease) 0ms,opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms,-webkit-transform .2s var(--ease) 0ms;opacity:1;pointer-events:auto;max-height:20rem;overflow-y:auto}:host([size=small]) .select-title{height:3.5rem}:host([size=small]) .select-title stellar-asset{right:1rem}:host([size=small]) .label{font-size:.75rem}:host([size=small]) stellar-item{--font-size:1.4rem;--item-size:3.5rem}:host([size=small]) .select-list:focus-within,:host([size=small][open]) .select-list{max-height:11rem}:host([overlay]) .select-list{position:absolute;top:calc((var(--item-size) * .75) + .5rem)}:host stellar-tooltip{cursor:pointer}:host stellar-item stellar-tooltip{display:none}:host-context(.dark-mode){--background:var(--black-alt);--color:var(--white);--border-color:var(--gray9)}:host ::selection{background:var(--theme-base0)!important}"}}export{c as StellarItem,u as StellarSelect};