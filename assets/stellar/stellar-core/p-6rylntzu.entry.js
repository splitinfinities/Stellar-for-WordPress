import{c as e,h as t,d as s,f as l}from"./p-9ed7c17e.js";import{a as i}from"./p-4a053c09.js";class a{constructor(s){e(this,s),this.name="select",this.placeholder="Choose something...",this.required=!1,this.open=!1,this.verbiage="selection",this.valueLabel=void 0,this.blur=0,this.clear_confirm=!1,this.values=[],this.change=t(this,"change",7)}componentWillLoad(){this.multiple&&(this.value=[]),this.listen_to_values()}async componentDidLoad(){this.current=this.element.shadowRoot.querySelector("stellar-item.current"),this.multiple&&(await this.option_elements()).forEach(e=>{e.multiple=!0}),this.default&&("object"==typeof this.default&&"Array"===this.default.constructor.name?this.default.forEach(e=>{this.element.querySelector(`stellar-item[value="${e}"]`).select_item()}):this.element.querySelector(`stellar-item[value="${this.default}"]`).select_item())}async clearValue(){if(this.clear_confirm){await i(100),this.clear_confirm=!1,this.value=[],this.values=[];const e=await this.option_elements();Array.from(e).forEach(e=>{e.selected=!1}),this.change.emit(this.value)}else this.clear_confirm=!0}handleOpenChange(){this.element.shadowRoot.querySelector("button.select-title").focus()}async handleMultipleChange(e){(await this.option_elements()).forEach(t=>{t.multiple=e})}async mountedHandler(e){const t=e.detail;if(this.multiple){const e=await this.option_elements();let s=[];e.forEach(e=>{e.selectable=!0,this.value&&this.value.includes(e.value)&&!t.element.selected&&(e.selected=!0),e.selected&&s.push(e.value)}),this.value=s}else this.value=t.element.selected?t.element.value:this.value,this.value&&(await this.option_elements()).forEach(e=>{e.selectable=!0,this.value===e.value&&(e.selected=!0)})}async selectionChangedHandler(e){const t=e.detail;if(this.multiple){t.selected=!t.selected;const e=await this.option_elements();let s=[];e.forEach(e=>{this.value&&this.value.includes(e.value)&&t.value!==e.value&&(e.selected=!0),e.selected&&s.push(e.value)}),this.value=s,this.change.emit(this.value)}else t.element.classList.contains("current")||((await this.option_elements()).forEach(e=>{e.selected=!1}),t.selected=!0,this.value=t.value,this.change.emit(this.value),this.current&&this.current.apply(await t.data()),setTimeout(()=>{this.open=!1},200))}selectedFocusChangedHandler(){this.focused=!0}selectedBlurChangedHandler(){this.focused=!1}handleTitleFocus(){this.focused=!0}handleTitleBlur(){this.focused=!1}handleNotClick(e){e.target===this.element||this.element.contains(e.target)||this.open&&(this.open=!1)}handleEscapeKey(e){"space"===e.key&&this.open&&(this.open=!1)}handleArrowKeys(e){40!==e.keyCode&&38!==e.keyCode||this.open&&(e.preventDefault(),e.stopPropagation(),40===e.keyCode?this.focusNextOption():this.focusPreviousOption())}readable_value(){return"object"==typeof this.value?0===this.value.length?this.placeholderInverted?`All ${this.verbiage}(s) selected`:`No ${this.verbiage}(s) selected`:`${this.value.length} ${this.verbiage}${this.value.length>1?"s":""}`:"string"==typeof this.value?this.valueLabel||this.value.toString()||`Select ${this.verbiageAn?"an":"a"} ${this.verbiage}`:this.valueLabel||this.value}async validate(){const e={name:`${this.name}`,value:this.value,valid:!0,errors:[]};return this.novalidate||(this.value||(e.valid=!1,e.errors.push({message:"This field is required."})),(await this.options()).includes(this.value)||(e.valid=!1,e.errors.push({message:`"${this.value}" isn't a valid option.`}))),this.status=e,this.status}listen_to_values(){var e=this.element;this.observer=new MutationObserver(e=>{for(var t of e)"childList"==t.type&&this.update_values()}),this.observer.observe(e,{childList:!0,subtree:!0})}async update_values(){const e=Array.from(this.element.querySelectorAll("stellar-item"));this.values=e.map(e=>(this.multiple&&(e.multiple=!0),e.valueLabel&&e.selected&&(this.valueLabel=e.valueLabel),e.value))}async option_elements(){return this.element.querySelectorAll("stellar-item:not(.current)")}async options(){const e=await this.option_elements(),t=[];return e.forEach(e=>{t.push(e.value)}),t}async focusPaths(){let e=void 0,t=void 0,s=void 0;const l=await this.options();if(l.forEach((i,a)=>{i.hasFocus()&&(s=l[a-1],e=i,t=l[a+1])}),!e){var i=l[0];this.focusElement(i),e=i}return{previous:s,current:e,next:t}}focusFirstItem(){this.element.querySelector(".select-list stellar-item:first-of-type").focus()}focusElement(e){e.focus()}async focusNextOption(){const e=await this.focusPaths();e.next&&this.focusElement(e.next)}async focusPreviousOption(){const e=await this.focusPaths();e.previous&&this.focusElement(e.previous)}closeOthers(){const e=document.querySelectorAll("stellar-select[open]");Array.from(e).forEach(e=>{e!==this.element&&(e.open=!1)})}handleTitleClick(){this.closeOthers(),this.open=!this.open}renderLabel(){if(this.label)return s("div",{class:"label-wrapper"},s("stellar-label",{onClick:()=>{this.focusFirstItem()}},this.label),this.renderEmptyButton())}renderErrors(){if(this.status&&this.status.errors&&0!==this.status.errors.length)return s("p",{class:"validation"},this.status.errors.map(e=>s("span",null,e.message)))}renderEmptyButton(){return this.multiple&&this.value&&this.value.length>0&&s("stellar-button",{tag:"button",size:"tiny",ghost:!0,class:"theme-red",onClick:e=>{e.stopPropagation(),this.clearValue()}},s("stellar-asset",{name:"close",class:"fs4 mr1"}),this.clear_confirm?`Clear ${this.value.length} selections?`:"Clear")}render(){return s("div",{class:"wrapper"},this.renderLabel(),s("div",{class:"select"},s("button",{type:"button",class:"select-title",onClick:()=>this.handleTitleClick(),onFocus:()=>this.handleTitleFocus(),onBlur:()=>this.handleTitleBlur()},s("stellar-item",{class:"current",type:"button",value:this.value?this.value.toString():"",tabindex:"-1",selectable:!1,label:this.readable_value()},this.readable_value()),s("stellar-asset",{name:"arrow-down"}),this.name&&s("input",{type:"text",tabindex:"-1",value:this.value,name:this.name.toString(),required:this.required})),this.tooltip&&s("stellar-tooltip",{align:"bottom-left",onClick:()=>this.handleTitleClick()},this.tooltip),s("stellar-blur",{vertical:this.blur,class:"select-list"},s("div",{class:"select-list-header"},s("slot",{name:"header"})),s("div",{class:"select-list-body"},s("slot",null)),this.footer&&s("div",{class:"select-list-footer"},s("slot",{name:"footer"})))),s("stellar-label",{size:"small",underneath:!0},this.description),!this.novalidate&&this.renderErrors())}get element(){return l(this)}static get watchers(){return{open:["handleOpenChange"],multiple:["handleMultipleChange"]}}static get style(){return":host{--color:var(--black);--border-radius:0.3rem;--item-size:4.25rem;--background:var(--white);--border-color:var(--gray1);-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;font-family:inherit;position:relative}:host(:not(.hydrated)){display:none}:host ::slotted(stellar-item),:host stellar-item{--item-size:4.2rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:inherit}:host .select{display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column}:host .select-title{cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;outline:none;border:1px solid var(--border-color);border-radius:var(--border-radius);padding:0;width:100%;height:var(--item-size);overflow:hidden;line-height:1.4;color:var(--color);font-weight:500;background:var(--background)}:host([focused]) .select-title,:host .select-title:focus,:host .wrapper:hover .select-title{border-color:var(--theme-base5);-webkit-box-shadow:0 0 0 1px var(--theme-base5);box-shadow:0 0 0 1px var(--theme-base5)}:host .select-title stellar-item{background:var(--background)!important;color:var(--color)!important}:host .select-title input{display:none}:host .select-title stellar-asset{position:absolute;right:2rem;-webkit-transition:-webkit-transform .1s var(--ease) 0s;transition:-webkit-transform .1s var(--ease) 0s;transition:transform .1s var(--ease) 0s;transition:transform .1s var(--ease) 0s,-webkit-transform .1s var(--ease) 0s;font-size:1.6rem;color:var(--theme-base5);background:transparent;border:0}:host .select-title .button stellar-asset{display:none}:host([open]) .select-title stellar-asset{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host .select-list{display:-ms-flexbox;display:flex;position:relative;top:0;left:0;-ms-flex-direction:column;flex-direction:column;-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transition:opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s,-webkit-transform .2s var(--ease) .35s;transition:opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s,-webkit-transform .2s var(--ease) .35s;transition:transform .2s var(--ease) .35s,opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s;transition:transform .2s var(--ease) .35s,opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s,-webkit-transform .2s var(--ease) .35s;opacity:0;z-index:3;background:var(--background);width:100%;max-height:0;overflow-x:hidden;overflow-y:hidden;color:var(--theme-base5);border:1px solid var(--border-color);pointer-events:none;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.15);box-shadow:0 1px 2px rgba(0,0,0,.15);border-radius:.3rem}:host .select-list ::slotted(stellar-item){color:var(--color);border-bottom:1px solid var(--border-color)}:host .select-list ::slotted(stellar-item:last-child){border-bottom:none}:host .label-wrapper{width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:1rem;height:1.8rem}:host .label-wrapper stellar-label{margin:0}:host .select-list-footer{-ms-flex-order:3;order:3;height:4rem;border-top:1px solid var(--theme-base5)}stellar-input .validation{margin-bottom:0;color:var(--red5);font-size:var(--complementing-font-size);font-weight:500}stellar-input .validation span{display:block;padding:1.4rem 0;line-height:1.4}stellar-input .validation span+span{border-top:1px solid var(--border-color)}:host([open]) .select-list,:host .select-list:focus-within{-webkit-transition:opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms,-webkit-transform .2s var(--ease) 0ms;transition:opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms,-webkit-transform .2s var(--ease) 0ms;transition:transform .2s var(--ease) 0ms,opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms;transition:transform .2s var(--ease) 0ms,opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms,-webkit-transform .2s var(--ease) 0ms;opacity:1;pointer-events:auto;max-height:20rem;overflow-y:auto}:host([size=small]) .select-title{height:3.5rem}:host([size=small]) .select-title stellar-asset{right:1rem}:host([size=small]) .label{font-size:.75rem}:host([size=small]) stellar-item{--font-size:1.4rem;--item-size:3.5rem}:host([size=small]) .select-list:focus-within,:host([size=small][open]) .select-list{max-height:11rem}:host([overlay]) .select-list{position:absolute;top:calc((var(--item-size) * .75) + .5rem)}:host stellar-tooltip{cursor:pointer}:host stellar-item stellar-tooltip{display:none}:host-context(.dark-mode){--background:var(--black-alt);--color:var(--white);--border-color:var(--gray9)}:host ::selection{background:var(--theme-base0)!important}"}}export{a as stellar_select};