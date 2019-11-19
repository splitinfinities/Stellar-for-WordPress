import{d as t,i as e,f as i,g as s}from"./p-1da3eb99.js";import"./p-40f083d9.js";import{a}from"./p-d0cf38d8.js";import"./p-27460e3f.js";import"./p-f26db59a.js";import"./p-cf2c1f95.js";class n{constructor(i){t(this,i),this.disabled=!1,this.open=!1,this.notifications=!1,this.contentChange=e(this,"contentChange",7)}componentWillLoad(){this.parent=this.element.closest("stellar-tabs")}handleResize(){this.handleIndicatorPosition()}componentDidLoad(){this.handleIndicatorPosition()}async handleClick(t){(await this.parent.tabs()).forEach(t=>{t.open=!1}),this.open=!0,this.handleIndicatorPosition(),this.disabled||(t.preventDefault(),this.contentChange.emit({parent:this.parent,name:this.name.replace(/[#]/g,"")}))}handleIndicatorPosition(){this.open&&this.parent&&"STELLAR-TABS"===this.parent.nodeName&&a.set(this.parent.vertical?{"--tab-top":`${this.element.offsetTop}px`,"--tab-height":`${this.element.offsetHeight}px`}:{"--tab-left":`${this.element.offsetLeft}px`,"--tab-width":`${this.element.offsetWidth}px`},this.parent)}renderNotifications(){return this.notifications&&i("stellar-tag",null,this.notifications)}renderTitle(){return i("span",{class:"title"},i("slot",null))}render(){return i("div",{class:"tab-wrap"},i("button",{role:"tab",type:"button","aria-selected":this.open?"true":"false","aria-setsize":this.tabCount,"aria-posinset":this.order,tabindex:"0",class:"tab-button",onClick:t=>this.handleClick(t)},this.renderNotifications(),this.renderTitle()))}get element(){return s(this)}static get style(){return":host{display:block;z-index:2}:host,:host .tab-wrap{position:relative;font-size:var(--font-size);height:100%}:host .tab-wrap{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:-1px .25em;padding:0 .25em;color:var(--theme-base8)}:host-context(stellar-tabs[vertical]):host .tab-button,:host-context(stellar-tabs[vertical]):host .tab-wrap{-ms-flex-pack:left!important;justify-content:left!important}:host .tab-wrap stellar-tag{position:absolute;top:1px;right:-10px}:host .tab-wrap>.tab-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:0;font-size:var(--font-size);display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-pack:center;justify-content:center;-webkit-transition:color .2s;transition:color .2s;outline:none;padding:0 1em;text-decoration:none;line-height:1;color:var(--theme-base8);width:100%;height:100%;cursor:pointer}:host([open]) .tab-wrap>.tab-button,:host .tab-wrap>.tab-button:focus,:host .tab-wrap>.tab-button:hover{color:var(--theme-base9)}:host .tab-wrap>.tab-button span{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;line-height:1;font-size:var(--font-size);font-weight:600}:host .tab-wrap>.tab-button span ::slotted(stellar-asset){line-height:0;margin-right:.25em}:host .tab-wrap>.tab-button span ::slotted(stellar-avatar){line-height:0;margin:-1.175em .5em -1.075em -.5em}:host([disabled=true]) .tab-wrap{cursor:not-allowed;color:var(--theme-color-disabled)}:host([disabled=true]) .tab-wrap *{cursor:not-allowed}:host([disabled=true]) .tab-wrap .notifications{background:var(--theme-color-disabled)}:host-context(.dark-mode):host .tab-wrap>.tab-button{color:var(--theme-base2)}:host-context(.dark-mode):host .tab-wrap>.tab-button:focus,:host-context(.dark-mode):host .tab-wrap>.tab-button:hover{color:var(--theme-base0)}:host-context(.dark-mode):host([open]) .tab-wrap>.tab-button{color:var(--white)}:host-context(.dark-mode):host-context(stellar-tabs[block]):host([open]) .tab-wrap>.tab-button{color:var(--theme-base9)}"}}export{n as stellar_tab};