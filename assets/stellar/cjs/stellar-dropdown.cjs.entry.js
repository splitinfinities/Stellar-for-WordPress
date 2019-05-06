'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-c90f54d2.js');
require('./chunk-ee96ca86.js');
require('./chunk-61a48f92.js');
const __chunk_5 = require('./chunk-3ed86bb7.js');
require('./chunk-e7b3928a.js');

__chunk_5.focusWithin(document);
class Dropdown {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.position = "center";
        this.icon = false;
        this.label = "Dropdown";
        this.open = false;
        this.ease = __chunk_5.blurringEase({
            end: 10,
            start: -1,
            duration: 250,
            tick: (args) => {
                this.blur = args.value;
            },
            complete: () => {
                this.blur = 0;
                this.ease.stop();
            },
        });
        this.blur = 0;
    }
    componentDidLoad() {
        __chunk_5.focusWithin(document);
    }
    observeOpen() {
        this.ease.start();
    }
    onToggle() {
        this.open = !this.open;
    }
    render() {
        return (__chunk_1.h("div", { "aria-label": this.label, class: "dropdown", title: this.label }, __chunk_1.h("div", { class: "toggle" }, __chunk_1.h("slot", { name: "handle" }), !this.icon && __chunk_1.h("stellar-asset", { name: "arrow-down", class: "caret" })), __chunk_1.h("stellar-blur", { vertical: this.blur }, __chunk_1.h("div", { class: "list-wrap" }, __chunk_1.h("ul", { class: "list" }, __chunk_1.h("slot", null), __chunk_1.h("div", { class: "footer" }, __chunk_1.h("slot", { name: "footer" })))))));
    }
    get element() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "open": ["observeOpen"]
    }; }
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--dropdown-color:var(--theme-base7);--dropdown-hover-color:var(--theme-base8);--dropdown-width:20rem;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;outline:0;height:100%;color:var(--dropdown-color);-webkit-transition:z-index 0ms linear .2s;transition:z-index 0ms linear .2s}:host .list-wrap,:host stellar-blur{width:var(--dropdown-width)}:host .list-wrap{position:absolute;top:calc(100% - .5rem);right:50%;left:50%;-webkit-transition:all .11s var(--ease) .25s;transition:all .11s var(--ease) .25s;z-index:10;height:auto;display:initial;-webkit-clip-path:polygon(0 0,100% 0,100% 0,0 0);clip-path:polygon(0 0,100% 0,100% 0,0 0)}:host .caret{color:var(--dropdown-color);margin-left:1.5rem;-webkit-transition:all .21s var(--ease);transition:all .21s var(--ease)}:host(:focus-within) .caret,:host(:hover) .caret{-webkit-transform:scale(1) rotate(180deg);transform:scale(1) rotate(180deg);color:var(--dropdown-hover-color)}:host(:active),:host(:focus-within),:host(:hover){z-index:6;color:var(--dropdown-hover-color)}:host(:active) .toggle:after,:host(:focus-within) .toggle:after,:host(:hover) .toggle:after{margin-top:-2px;background:var(--dropdown-hover-color);height:2px}:host(.toggle:active),:host(.toggle:hover){z-index:6;color:var(--dropdown-hover-color)}:host(.toggle:active:after),:host(.toggle:hover:after){margin-top:-2px;background:var(--dropdown-hover-color);height:2px}:host(:active) .list-wrap,:host(:focus-within) .list-wrap,:host(:hover) .list-wrap{-webkit-clip-path:polygon(0 0,100% 0,100% 100%,0 100%);clip-path:polygon(0 0,100% 0,100% 100%,0 100%)}:host .dropdown-placeholder{margin:0;width:3rem;height:3rem}:host .toggle{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;min-height:3rem}:host stellar-asset[slot=handle]{color:var(--dropdown-color)}:host(:focus-within) stellar-asset[slot=handle],:host([focus-within]) stellar-asset[slot=handle],:host stellar-asset[slot=handle]:active,:host stellar-asset[slot=handle]:hover{color:var(--dropdown-color)}:host .toggle span{color:inherit}:host .toggle .hidden{display:inline-block!important}:host .list{margin-top:0;margin-left:0;-webkit-transition:all .11s var(--ease) .25s;transition:all .11s var(--ease) .25s;-webkit-box-shadow:0 0 2px 0 hsla(0,0%,50.2%,.35);box-shadow:0 0 2px 0 hsla(0,0%,50.2%,.35);background:#fff;list-style-type:none;padding:0}:host .list ::slotted(stellar-item){--item-size:3.25rem}:host .list .loader{cursor:wait;display:none}:host .list .separator{position:relative}:host .list .separator:after{content:\"\";display:block;position:absolute;top:calc(50% - .5px);background:var(--gray5);width:100%;height:.1rem}:host .icon{margin-right:1em}:host .icon,:host .thumb{-ms-flex:0 0 2.25em;flex:0 0 2.25em;-ms-flex-order:-1;order:-1;-webkit-transition:all .05s var(--ease) 0s;transition:all .05s var(--ease) 0s}:host .thumb{margin-right:1rem;width:2.25em;height:2.25em}:host .notification{display:inline-block;margin:0 0 0 .8rem;border-radius:50%;background:var(--yellow5);width:.8rem;height:.8rem}:host ::slotted(stellar-item){border:0;overflow:hidden;color:var(--gray9);font-size:1rem}:host .footer{border-top:1px solid var(--theme-base1);margin-top:.5rem}:host .footer ::slotted(*){background:transparent!important}:host .footer:empty{display:none}:host([position=left]) .list-wrap{left:0;right:auto}:host([position=left][icon]) .list-wrap{left:var(--dropdown-offset,-3rem)}:host([position=left]) .list:after,:host([position=left]) .list:before{right:0;left:4rem}:host([position=right]) .list-wrap{left:auto;right:0}:host([position=right][icon]) .list-wrap{right:var(--dropdown-offset,3rem)}:host([position=right]) .list:after,:host([position=right]) .list:before{right:3rem;left:auto}:host-context(.dark-mode):host .list{background:var(--gray9)}:host-context(.dark-mode):host ::slotted(stellar-item){color:var(--gray0)}:host-context(.dark-mode):host .footer{border-top-color:var(--black)}"; }
}

exports.stellar_dropdown = Dropdown;