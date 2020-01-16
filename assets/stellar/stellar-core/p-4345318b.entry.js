import{r as o,h as t,H as r,g as e}from"./p-fd27e385.js";import"./p-dd50d686.js";import"./p-20de5b5b.js";import{T as i}from"./p-cd443245.js";import{f as s}from"./p-5c97c18e.js";import"./p-c428ff15.js";import"./p-c93f133f.js";import"./p-22e0cac7.js";import"./p-3a3a4911.js";s(document);const a=class{constructor(t){o(this,t),this.position="center",this.icon=!1,this.iconName="arrow-down",this.label="Dropdown",this.open=!1,this.dark=!1,this.footer=!1}componentWillLoad(){this.footer=0!==this.element.querySelectorAll('[slot="footer"]').length}componentDidLoad(){s(document)}onToggle(){this.open=!this.open}render(){return t(r,{"aria-label":this.label,class:"dropdown",title:this.label},t("div",{class:"toggle"},t("slot",{name:"handle"}),this.icon&&t("ion-icon",{name:this.iconName,class:"caret"})),t("div",{class:"clipper"},t("div",{class:"list-wrap"},t("ul",{class:"list"},t("slot",null),this.footer&&t("div",{class:"footer"},t("slot",{name:"footer"}))))))}get element(){return e(this)}static get style(){return':host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--dropdown-color:var(--theme-base7);--dropdown-hover-color:var(--theme-base8);--dropdown-width:20rem;--border-radius:0.3rem;--clip-from:polygon(0 0, 100% 0, 100% 0, 0 0);--clip-to:polygon(0 0, 100% 0, 100% 100%, 0 100%);--filter:drop-shadow(0px 2px 2px var(--theme-base1));--icon-rotation:180deg;contain:content;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;outline:0;height:100%;color:var(--dropdown-color);-webkit-transition:z-index 0ms linear 200ms;transition:z-index 0ms linear 200ms}:host([dark]){--filter:drop-shadow(0px 2px 2px var(--theme-base9))}:host .clipper{-webkit-filter:var(--filter);filter:var(--filter);position:absolute;top:calc(100% + .5rem);right:50%;left:calc(50% - (var(--dropdown-width) /2));width:var(--dropdown-width);height:0;-webkit-transition:all 250ms var(--ease) 250ms;transition:all 250ms var(--ease) 250ms}:host .list-wrap{z-index:10;-webkit-transition:all 250ms var(--ease) 250ms;transition:all 250ms var(--ease) 250ms;width:var(--dropdown-width);display:initial;-webkit-clip-path:var(--clip-from);clip-path:var(--clip-from);border-radius:var(--border-radius);overflow:hidden;display:block}:host .caret{color:var(--dropdown-color);margin-left:1.5rem;-webkit-transition:all 210ms var(--ease);transition:all 210ms var(--ease);font-size:2rem}:host(:hover) .caret,:host(:focus-within) .caret{-webkit-transform:scale(1) rotate(var(--icon-rotation));transform:scale(1) rotate(var(--icon-rotation));color:var(--dropdown-hover-color)}:host(:hover),:host(:active),:host(:focus-within){z-index:6;color:var(--dropdown-hover-color)}:host(:hover) .clipper,:host(:active) .clipper,:host(:focus-within) .clipper{height:auto}:host(:hover) .toggle::after,:host(:active) .toggle::after,:host(:focus-within) .toggle::after{margin-top:-2px;background:var(--dropdown-hover-color);height:2px}:host(.toggle:hover),:host(.toggle:active){z-index:6;color:var(--dropdown-hover-color)}:host(.toggle:hover::after),:host(.toggle:active::after){margin-top:-2px;background:var(--dropdown-hover-color);height:2px}:host(:hover) .list-wrap,:host(:active) .list-wrap,:host(:focus-within) .list-wrap{-webkit-clip-path:var(--clip-to);clip-path:var(--clip-to);height:100%}:host .dropdown-placeholder{margin:0;width:3rem;height:3rem}:host .toggle{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;min-height:3rem}:host ion-icon[slot="handle"]{color:var(--dropdown-color)}:host ion-icon[slot="handle"]:hover,:host ion-icon[slot="handle"]:active,:host(:focus-within) ion-icon[slot="handle"],:host([focus-within]) ion-icon[slot="handle"]{color:var(--dropdown-color)}:host .toggle span{color:inherit}:host .toggle .hidden{display:inline-block !important}:host .list{margin-top:0;margin-left:0;margin-bottom:0;-webkit-transition:all 110ms var(--ease) 250ms;transition:all 110ms var(--ease) 250ms;-webkit-box-shadow:0 0 2px 0 rgba(128, 128, 128, .35);box-shadow:0 0 2px 0 rgba(128, 128, 128, .35);background:white;list-style-type:none;padding:0}:host .list ::slotted(stellar-item){--item-size:3.25rem}:host .list .loader{cursor:wait;display:none}:host .list .separator{position:relative}:host .list .separator::after{content:"";display:block;position:absolute;top:calc(50% - .5px);background:var(--gray5);width:100%;height:.1rem}:host .icon{-ms-flex:0 0 2.25em;flex:0 0 2.25em;-ms-flex-order:-1;order:-1;-webkit-transition:all .05s var(--ease) 0s;transition:all .05s var(--ease) 0s;margin-right:1em}:host .thumb{-ms-flex:0 0 2.25em;flex:0 0 2.25em;-ms-flex-order:-1;order:-1;-webkit-transition:all .05s var(--ease) 0s;transition:all .05s var(--ease) 0s;margin-right:1rem;width:2.25em;height:2.25em}:host .notification{display:inline-block;margin:0 0 0 .8rem;border-radius:50%;background:var(--yellow5);width:.8rem;height:.8rem}:host ::slotted(stellar-item){border:0;overflow:hidden;color:var(--gray9);font-size:1rem}:host .footer{border-top:1px solid var(--theme-base1);margin-top:0.5rem}:host .footer ::slotted(*){background:transparent !important}:host .footer:empty{display:none}:host([position="left"]){--clip-from:polygon(0% 0, 0% 50%, 0% 50%, 0 50%)}:host([position="left"]) .clipper{left:0;right:auto}:host([position="left"][icon]) .clipper{left:var(--dropdown-offset, -3rem)}:host([position="left"]) .list::after{right:0;left:4rem}:host([position="left"]) .list::before{right:0;left:4rem}:host([position="right"]){--clip-from:polygon(0 0, 100% 0, 100% 0, 0 0);--clip-from:polygon(0 0, 100% 0%, 100% 0%, 50% 0)}:host([position="right"]) .clipper{left:auto;right:0}:host([position="right"][icon]) .clipper{right:var(--dropdown-offset, 3rem)}:host([position="right"]) .list::after{right:3rem;left:auto}:host([position="right"]) .list::before{right:3rem;left:auto}:host([dark]) .list{background:var(--gray9)}:host([dark]) ::slotted(stellar-item){color:var(--gray0)}:host([dark]) .footer{border-top-color:var(--black)}'}};i.injectProps(a,["dark"]);export{a as stellar_dropdown};