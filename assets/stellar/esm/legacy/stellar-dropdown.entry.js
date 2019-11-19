import { d as registerInstance, f as h, g as getElement } from './stellar-core-1e602ba1.js';
import './chunk-40f083d9.js';
import './chunk-d0cf38d8.js';
import { c as focusWithin, a as blurringEase } from './chunk-27460e3f.js';
import './chunk-f26db59a.js';
import './chunk-cf2c1f95.js';
focusWithin(document);
var Dropdown = /** @class */ (function () {
    function Dropdown(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.position = "center";
        this.icon = false;
        this.label = "Dropdown";
        this.open = false;
        this.ease = blurringEase({
            end: 10,
            start: -1,
            duration: 250,
            tick: function (args) {
                _this.blur = args.value;
            },
            complete: function () {
                _this.blur = 0;
                _this.ease.stop();
            },
        });
        this.blur = 0;
    }
    Dropdown.prototype.componentDidLoad = function () {
        focusWithin(document);
    };
    Dropdown.prototype.observeOpen = function () {
        this.ease.start();
    };
    Dropdown.prototype.onToggle = function () {
        this.open = !this.open;
    };
    Dropdown.prototype.render = function () {
        return (h("div", { "aria-label": this.label, class: "dropdown", title: this.label }, h("div", { class: "toggle" }, h("slot", { name: "handle" }), !this.icon && h("stellar-asset", { name: "arrow-down", class: "caret" })), h("stellar-blur", { vertical: this.blur }, h("div", { class: "list-wrap" }, h("ul", { class: "list" }, h("slot", null), h("div", { class: "footer" }, h("slot", { name: "footer" })))))));
    };
    Object.defineProperty(Dropdown.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dropdown, "watchers", {
        get: function () {
            return {
                "open": ["observeOpen"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dropdown, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--dropdown-color:var(--theme-base7);--dropdown-hover-color:var(--theme-base8);--dropdown-width:20rem;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;outline:0;height:100%;color:var(--dropdown-color);-webkit-transition:z-index 0ms linear .2s;transition:z-index 0ms linear .2s}:host .list-wrap,:host stellar-blur{width:var(--dropdown-width)}:host .list-wrap{position:absolute;top:calc(100% - .5rem);right:50%;left:50%;-webkit-transition:all .11s var(--ease) .25s;transition:all .11s var(--ease) .25s;z-index:10;height:auto;display:initial;-webkit-clip-path:polygon(0 0,100% 0,100% 0,0 0);clip-path:polygon(0 0,100% 0,100% 0,0 0)}:host .caret{color:var(--dropdown-color);margin-left:1.5rem;-webkit-transition:all .21s var(--ease);transition:all .21s var(--ease)}:host(:focus-within) .caret,:host(:hover) .caret{-webkit-transform:scale(1) rotate(180deg);transform:scale(1) rotate(180deg);color:var(--dropdown-hover-color)}:host(:active),:host(:focus-within),:host(:hover){z-index:6;color:var(--dropdown-hover-color)}:host(:active) .toggle:after,:host(:focus-within) .toggle:after,:host(:hover) .toggle:after{margin-top:-2px;background:var(--dropdown-hover-color);height:2px}:host(.toggle:active),:host(.toggle:hover){z-index:6;color:var(--dropdown-hover-color)}:host(.toggle:active:after),:host(.toggle:hover:after){margin-top:-2px;background:var(--dropdown-hover-color);height:2px}:host(:active) .list-wrap,:host(:focus-within) .list-wrap,:host(:hover) .list-wrap{-webkit-clip-path:polygon(0 0,100% 0,100% 100%,0 100%);clip-path:polygon(0 0,100% 0,100% 100%,0 100%)}:host .dropdown-placeholder{margin:0;width:3rem;height:3rem}:host .toggle{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;min-height:3rem}:host stellar-asset[slot=handle]{color:var(--dropdown-color)}:host(:focus-within) stellar-asset[slot=handle],:host([focus-within]) stellar-asset[slot=handle],:host stellar-asset[slot=handle]:active,:host stellar-asset[slot=handle]:hover{color:var(--dropdown-color)}:host .toggle span{color:inherit}:host .toggle .hidden{display:inline-block!important}:host .list{margin-top:0;margin-left:0;-webkit-transition:all .11s var(--ease) .25s;transition:all .11s var(--ease) .25s;-webkit-box-shadow:0 0 2px 0 hsla(0,0%,50.2%,.35);box-shadow:0 0 2px 0 hsla(0,0%,50.2%,.35);background:#fff;list-style-type:none;padding:0}:host .list ::slotted(stellar-item){--item-size:3.25rem}:host .list .loader{cursor:wait;display:none}:host .list .separator{position:relative}:host .list .separator:after{content:\"\";display:block;position:absolute;top:calc(50% - .5px);background:var(--gray5);width:100%;height:.1rem}:host .icon{margin-right:1em}:host .icon,:host .thumb{-ms-flex:0 0 2.25em;flex:0 0 2.25em;-ms-flex-order:-1;order:-1;-webkit-transition:all .05s var(--ease) 0s;transition:all .05s var(--ease) 0s}:host .thumb{margin-right:1rem;width:2.25em;height:2.25em}:host .notification{display:inline-block;margin:0 0 0 .8rem;border-radius:50%;background:var(--yellow5);width:.8rem;height:.8rem}:host ::slotted(stellar-item){border:0;overflow:hidden;color:var(--gray9);font-size:1rem}:host .footer{border-top:1px solid var(--theme-base1);margin-top:.5rem}:host .footer ::slotted(*){background:transparent!important}:host .footer:empty{display:none}:host([position=left]) .list-wrap{left:0;right:auto}:host([position=left][icon]) .list-wrap{left:var(--dropdown-offset,-3rem)}:host([position=left]) .list:after,:host([position=left]) .list:before{right:0;left:4rem}:host([position=right]) .list-wrap{left:auto;right:0}:host([position=right][icon]) .list-wrap{right:var(--dropdown-offset,3rem)}:host([position=right]) .list:after,:host([position=right]) .list:before{right:3rem;left:auto}:host-context(.dark-mode):host .list{background:var(--gray9)}:host-context(.dark-mode):host ::slotted(stellar-item){color:var(--gray0)}:host-context(.dark-mode):host .footer{border-top-color:var(--black)}"; },
        enumerable: true,
        configurable: true
    });
    return Dropdown;
}());
export { Dropdown as stellar_dropdown };
