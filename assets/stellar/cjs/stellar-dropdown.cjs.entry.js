'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');
require('./index-9b3c8604.js');
const index$1$1 = require('./index-d326a972.js');
require('./_commonjsHelpers-3fc1f64e.js');
require('./css-custom-properties.min-d46e7f9d.js');
require('./main-6214461c.js');
require('./moment-fd045425.js');
require('./index-9d31ce96.js');
const theme = require('./theme-1038bd3c.js');

const DropdownCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--dropdown-color:var(--theme-base7);--dropdown-hover-color:var(--theme-base8);--dropdown-width:20rem;--border-radius:0.3rem;--clip-from:polygon(0 0, 100% 0, 100% 0, 0 0);--clip-to:polygon(0 0, 100% 0, 100% 100%, 0 100%);--filter:drop-shadow(0px 2px 2px var(--theme-base1));--icon-rotation:180deg;contain:content;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;outline:0;height:100%;color:var(--dropdown-color);-webkit-transition:z-index 0ms linear 200ms;transition:z-index 0ms linear 200ms}:host([dark]){--filter:drop-shadow(0px 2px 2px var(--theme-base9))}:host .clipper{-webkit-filter:var(--filter);filter:var(--filter);position:absolute;top:calc(100% + .5rem);right:50%;left:calc(50% - (var(--dropdown-width) /2));width:var(--dropdown-width);height:0;-webkit-transition:all 250ms var(--ease) 250ms;transition:all 250ms var(--ease) 250ms}:host .list-wrap{z-index:10;-webkit-transition:all 250ms var(--ease) 250ms;transition:all 250ms var(--ease) 250ms;width:var(--dropdown-width);display:initial;-webkit-clip-path:var(--clip-from);clip-path:var(--clip-from);border-radius:var(--border-radius);overflow:hidden;display:block}:host .caret{color:var(--dropdown-color);margin-left:1.5rem;-webkit-transition:all 210ms var(--ease);transition:all 210ms var(--ease);font-size:2rem}:host(:hover) .caret,:host(:focus-within) .caret{-webkit-transform:scale(1) rotate(var(--icon-rotation));transform:scale(1) rotate(var(--icon-rotation));color:var(--dropdown-hover-color)}:host(:hover),:host(:active),:host(:focus-within){z-index:6;color:var(--dropdown-hover-color)}:host(:hover) .clipper,:host(:active) .clipper,:host(:focus-within) .clipper{height:auto}:host(:hover) .toggle::after,:host(:active) .toggle::after,:host(:focus-within) .toggle::after{margin-top:-2px;background:var(--dropdown-hover-color);height:2px}:host(.toggle:hover),:host(.toggle:active){z-index:6;color:var(--dropdown-hover-color)}:host(.toggle:hover::after),:host(.toggle:active::after){margin-top:-2px;background:var(--dropdown-hover-color);height:2px}:host(:hover) .list-wrap,:host(:active) .list-wrap,:host(:focus-within) .list-wrap{-webkit-clip-path:var(--clip-to);clip-path:var(--clip-to);height:100%}:host .dropdown-placeholder{margin:0;width:3rem;height:3rem}:host .toggle{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;min-height:3rem}:host ion-icon[slot=\"handle\"]{color:var(--dropdown-color)}:host ion-icon[slot=\"handle\"]:hover,:host ion-icon[slot=\"handle\"]:active,:host(:focus-within) ion-icon[slot=\"handle\"],:host([focus-within]) ion-icon[slot=\"handle\"]{color:var(--dropdown-color)}:host .toggle span{color:inherit}:host .toggle .hidden{display:inline-block !important}:host .list{margin-top:0;margin-left:0;margin-bottom:0;-webkit-transition:all 110ms var(--ease) 250ms;transition:all 110ms var(--ease) 250ms;-webkit-box-shadow:0 0 2px 0 rgba(128, 128, 128, .35);box-shadow:0 0 2px 0 rgba(128, 128, 128, .35);background:white;list-style-type:none;padding:0}:host .list ::slotted(stellar-item){--item-size:3.25rem}:host .list .loader{cursor:wait;display:none}:host .list .separator{position:relative}:host .list .separator::after{content:\"\";display:block;position:absolute;top:calc(50% - .5px);background:var(--gray5);width:100%;height:.1rem}:host .icon{-ms-flex:0 0 2.25em;flex:0 0 2.25em;-ms-flex-order:-1;order:-1;-webkit-transition:all .05s var(--ease) 0s;transition:all .05s var(--ease) 0s;margin-right:1em}:host .thumb{-ms-flex:0 0 2.25em;flex:0 0 2.25em;-ms-flex-order:-1;order:-1;-webkit-transition:all .05s var(--ease) 0s;transition:all .05s var(--ease) 0s;margin-right:1rem;width:2.25em;height:2.25em}:host .notification{display:inline-block;margin:0 0 0 .8rem;border-radius:50%;background:var(--yellow5);width:.8rem;height:.8rem}:host ::slotted(stellar-item){border:0;overflow:hidden;color:var(--gray9);font-size:1rem}:host .footer{border-top:1px solid var(--theme-base1);margin-top:0.5rem}:host .footer ::slotted(*){background:transparent !important}:host .footer:empty{display:none}:host([position=\"left\"]){--clip-from:polygon(0% 0, 0% 50%, 0% 50%, 0 50%)}:host([position=\"left\"]) .clipper{left:0;right:auto}:host([position=\"left\"][icon]) .clipper{left:var(--dropdown-offset, -3rem)}:host([position=\"left\"]) .list::after{right:0;left:4rem}:host([position=\"left\"]) .list::before{right:0;left:4rem}:host([position=\"right\"]){--clip-from:polygon(0 0, 100% 0, 100% 0, 0 0);--clip-from:polygon(0 0, 100% 0%, 100% 0%, 50% 0)}:host([position=\"right\"]) .clipper{left:auto;right:0}:host([position=\"right\"][icon]) .clipper{right:var(--dropdown-offset, 3rem)}:host([position=\"right\"]) .list::after{right:3rem;left:auto}:host([position=\"right\"]) .list::before{right:3rem;left:auto}:host([dark]) .list{background:var(--gray9)}:host([dark]) ::slotted(stellar-item){color:var(--gray0)}:host([dark]) .footer{border-top-color:var(--black)}";

index$1$1.focusWithin(document);
const Dropdown = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.position = "center";
        this.icon = false;
        this.iconName = "arrow-down";
        this.label = "Dropdown";
        this.open = false;
        this.dark = false;
        this.footer = false;
    }
    componentWillLoad() {
        this.footer = this.element.querySelectorAll('[slot="footer"]').length !== 0;
    }
    componentDidLoad() {
        index$1$1.focusWithin(document);
    }
    onToggle() {
        this.open = !this.open;
    }
    render() {
        return index.h(index.Host, { "aria-label": this.label, class: "dropdown", title: this.label }, index.h("div", { class: "toggle" }, index.h("slot", { name: "handle" }), this.icon && index.h("ion-icon", { name: this.iconName, class: "caret" })), index.h("div", { class: "clipper" }, index.h("div", { class: "list-wrap" }, index.h("ul", { class: "list" }, index.h("slot", null), this.footer && index.h("div", { class: "footer" }, index.h("slot", { name: "footer" }))))));
    }
    get element() { return index.getElement(this); }
    static get style() { return DropdownCss; }
};
theme.Tunnel.injectProps(Dropdown, ['dark']);

exports.stellar_dropdown = Dropdown;
