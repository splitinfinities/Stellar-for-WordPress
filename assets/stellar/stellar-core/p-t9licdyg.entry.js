import{c as t,h as e,d as n,f as s}from"./p-9ed7c17e.js";function i(t,e){for(var n,s,i=null,r=!1,a=!1,u=arguments.length;u-- >2;)o.push(arguments[u]);for(;o.length>0;){var h=o.pop();if(h&&void 0!==h.pop)for(u=h.length;u--;)o.push(h[u]);else"boolean"==typeof h&&(h=null),(a="function"!=typeof t)&&(null==h?h="":"number"==typeof h?h=String(h):"string"!=typeof h&&(a=!1)),a&&r?i[i.length-1].vtext+=h:null===i?i=[a?{vtext:h}:h]:i.push(a?{vtext:h}:h),r=a}if(null!=e){if(e.className&&(e.class=e.className),"object"==typeof e.class){for(u in e.class)e.class[u]&&o.push(u);e.class=o.join(" "),o.length=0}null!=e.key&&(n=e.key),null!=e.name&&(s=e.name)}return"function"==typeof t?t(e,i||[],l):{vtag:t,vchildren:i,vtext:void 0,vattrs:e,vkey:n,vname:s,w:void 0,g:!1}}function r(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}var o=[],l={forEach:function(t,e){t.forEach(function(t,n,s){return e(r(t),n,s)})},map:function(t,e){return t.map(function(t,n,s){return function(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}(e(r(t),n,s))})}};function a(t,e){return i("context-consumer",{subscribe:t,renderer:e})}var u=function(t,e){void 0===e&&(e=a);var n=new Map,s={historyType:"browser",location:{pathname:"",query:{},key:""},titleSuffix:"",root:"/",routeViewsUpdated:function(){}};function r(t,e){Array.isArray(t)?t.slice().forEach(function(t){e[t]=s[t]}):e[t]=Object.assign({},s),e.forceUpdate()}function o(t){return function(e){n.has(e)||(n.set(e,t),r(t,e))}}function l(t,e){return o(e)(t),function(){n.delete(t)}}return{Provider:function(t,e){return s=t.state,n.forEach(r),e},Consumer:function(t,n){return e(l,n[0])},wrapConsumer:function(t,e){var n=t.is;return function(t){var s=t.children,r=function(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&(n[s[i]]=t[s[i]])}return n}(t,["children"]);return i(n,Object.assign({ref:o(e)},r),s)}},injectProps:function(t,e){var n=null,s=Object.keys(t.properties).find(function(e){return 1==t.properties[e].elementRef});if(null==s)throw new Error("Please ensure that your Component "+t.is+' has an attribute with an "@Element" decorator. This is required to be able to inject properties.');var i=t.prototype.componentWillLoad;t.prototype.componentWillLoad=function(){if(n=l(this[s],e),i)return i.bind(this)()};var r=t.prototype.componentDidUnload;t.prototype.componentDidUnload=function(){if(n(),r)return r.bind(this)()}}}}();function h(t){u.injectProps(t,["history","location"])}class c{constructor(n){t(this,n),this.type="button",this.href="#",this.wrap=!1,this.fit=!1,this.simple=!1,this.danger=!1,this.selected=!1,this.multiple=!1,this.selectable=!1,this.focused=!1,this.route=!1,this.current=!1,this.selectionChanged=e(this,"selectionChanged",7),this.mounted=e(this,"mounted",7),this.focusChanged=e(this,"focusChanged",7),this.blurChanged=e(this,"blurChanged",7)}componentWillLoad(){this.slotted=this.element.innerHTML}componentDidLoad(){setTimeout(()=>{this.selected&&this.mounted.emit(this)},10)}async data(){return{size:this.size,value:this.value,type:this.type,label:this.label,danger:this.danger,slotted:this.slotted}}async apply(t){this.size=t.size,this.value=t.value,this.type=t.type,this.label=t.label,this.element.shadowRoot.querySelector(".button").innerHTML=t.slotted}async setFocus(){this.focused=!0,this.element.querySelector(".button").focus()}handleClick(t){this.route&&(t.preventDefault(),this.history.push(this.href,{})),this.current||this.selectionChanged.emit(this)}handleFocus(){this.current&&this.focusChanged.emit(this),this.focused=!0}handleBlur(){this.current&&this.blurChanged.emit(this),this.focused=!1}classes(){let t="";return(t+=this.selected?"selected ":"")+(this.multiple?"multiple ":"")}async select_item(t){if(this.selectable)if(t){if(this.selected!==t.selected){var e=new CustomEvent("click");this.element.querySelector(".button").dispatchEvent(e)}}else e=new CustomEvent("click"),this.element.querySelector(".button").dispatchEvent(e)}render(){return n(this.type,{class:"button",type:"button",href:this.href,url:this.href,tabindex:"0",value:this.value,title:this.label,onClick:t=>this.handleClick(t),onBlur:()=>this.handleBlur(),onFocus:()=>this.handleFocus()},n("slot",null),(this.selected||this.multiple)&&n("stellar-asset",{class:this.classes(),name:"checkmark",block:!0}))}get element(){return s(this)}static get style(){return":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--item-size:2.356em;--font-size:1.4rem;display:block;width:100%;height:var(--item-size);color:var(--theme-base9);font-family:inherit;visibility:visible!important;font-size:var(--font-size);text-align:left;position:relative}:host([fit]){--item-size:auto}:host([fit]) a.button,:host([fit]) button.button,:host([fit]) stencil-route-link a{padding:1.4rem 0 1.4rem 1.4rem}:host([wrap]) .button{white-space:normal;text-align:left}:host([danger]) .button{color:var(--red5)}:host a.button,:host button.button,:host stencil-route-link a{text-decoration:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;outline:0;border:0;background:transparent;padding:0 0 0 .6rem;width:100%;height:calc(var(--item-size) - 1px);color:currentColor;font-weight:500;font-size:inherit}:host stencil-route-link{padding:0}:host .button a{color:inherit;background:inherit;text-decoration:none}:host .button ::slotted(stellar-avatar){margin-right:.5rem;background:var(--theme-base9);visibility:visible!important;display:block!important;width:2rem;height:2rem}:host .button stellar-tag{margin:auto .5rem auto auto}:host .button stellar-asset{margin-left:1rem}:host .button span{margin:auto auto auto 0;width:100%;text-overflow:ellipsis;white-space:nowrap}:host([size=small]) .button{padding:0 1rem;height:3rem}:host .selected{-webkit-animation:fadeInLeft .2s ease;animation:fadeInLeft .2s ease;font-size:var(--item-size);margin-left:auto!important;background:transparent;color:var(--theme-base5);height:calc(var(--item-size) - 1px)}:host(:focus) .selected,:host(:focus-within) .selected,:host(:hover) .selected{color:#fff}:host([fit]) .selected{position:absolute;top:.625rem;right:.25rem;font-size:3rem}:host([fit][multiple]) .selected{right:auto}:host(:focus-within),:host(:hover),:host .button:focus,:host .button:hover{background:var(--theme-base1)}:host(.current){background:#fff}:host([danger]) .button:focus,:host([danger]) .button:hover{background:var(--red5);color:#fff}:host([simple]) .button{background:#fff!important}:host(.current) stellar-asset{display:none}:host stellar-asset.multiple{border:1px solid var(--border-color);background:var(--background);border-radius:4px;font-size:2.5rem;width:2.5rem;height:2.5rem;margin:0 0 0 auto;left:-1rem;position:relative;color:transparent}:host stellar-asset.multiple.selected{color:var(--theme-base5)}:host(.current) .button:focus,:host(.current) .button:hover,:host(.current:focus-within),:host(.current:hover){background:transparent}:host-context(.dark-mode):host(:focus-within),:host-context(.dark-mode):host(:hover),:host-context(.dark-mode):host .button:focus,:host-context(.dark-mode):host .button:hover{background:var(--theme-base8)}:host-context(.dark-mode):host(.current) .button:focus,:host-context(.dark-mode):host(.current) .button:hover,:host-context(.dark-mode):host(.current:focus-within),:host-context(.dark-mode):host(.current:hover){background:transparent}"}}h&&h(c);export{c as stellar_item};