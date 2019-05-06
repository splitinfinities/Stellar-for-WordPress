import { c as registerInstance, d as h, f as getElement } from './stellar-core-d63b686e.js';
import './chunk-452e3210.js';
import './chunk-aefb00c1.js';
import { g as focusWithin, a as blurringEase } from './chunk-15cea9da.js';
import './chunk-f26db59a.js';

focusWithin(document);
class Dropdown {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.position = "center";
        this.icon = false;
        this.label = "Dropdown";
        this.open = false;
        this.ease = blurringEase({
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
        focusWithin(document);
    }
    observeOpen() {
        this.ease.start();
    }
    onToggle() {
        this.open = !this.open;
    }
    render() {
        return (h("div", { "aria-label": this.label, class: "dropdown", title: this.label }, h("div", { class: "toggle" }, h("slot", { name: "handle" }), !this.icon && h("stellar-asset", { name: "arrow-down", class: "caret" })), h("stellar-blur", { vertical: this.blur }, h("div", { class: "list-wrap" }, h("ul", { class: "list" }, h("slot", null), h("div", { class: "footer" }, h("slot", { name: "footer" })))))));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "open": ["observeOpen"]
    }; }
    static get style() { return ":host, :host *, :host *:before, :host *:after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:host {\n  --dropdown-color: var(--theme-base7);\n  --dropdown-hover-color: var(--theme-base8);\n  --dropdown-width: 20rem;\n  cursor: pointer;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  position: relative;\n  -ms-flex-align: center;\n  align-items: center;\n  outline: 0;\n  height: 100%;\n  color: var(--dropdown-color);\n  -webkit-transition: z-index 0ms linear 200ms;\n  transition: z-index 0ms linear 200ms\n}\n\n:host stellar-blur {\n  width: var(--dropdown-width)\n}\n\n:host .list-wrap {\n  position: absolute;\n  top: calc(100% - .5rem);\n  right: 50%;\n  left: 50%;\n  -webkit-transition: all 110ms var(--ease) 250ms;\n  transition: all 110ms var(--ease) 250ms;\n  z-index: 10;\n  width: var(--dropdown-width);\n  height: auto;\n  display: initial;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);\n  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);\n}\n\n:host .caret {\n  color: var(--dropdown-color);\n  margin-left: 1.5rem;\n  -webkit-transition: all 210ms var(--ease);\n  transition: all 210ms var(--ease);\n}\n\n:host(:hover) .caret,\n:host(:focus-within) .caret {\n  -webkit-transform: scale(1) rotate(180deg);\n  transform: scale(1) rotate(180deg);\n  color: var(--dropdown-hover-color);\n}\n\n:host(:hover),\n:host(:active),\n:host(:focus-within) {\n  z-index: 6;\n  color: var(--dropdown-hover-color);\n}\n\n:host(:hover) .toggle::after,\n:host(:active) .toggle::after,\n:host(:focus-within) .toggle::after {\n  margin-top: -2px;\n  background: var(--dropdown-hover-color);\n  height: 2px;\n}\n\n:host(.toggle:hover),\n:host(.toggle:active) {\n  z-index: 6;\n  color: var(--dropdown-hover-color);\n}\n\n:host(.toggle:hover::after),\n:host(.toggle:active::after) {\n  margin-top: -2px;\n  background: var(--dropdown-hover-color);\n  height: 2px;\n}\n\n:host(:hover) .list-wrap,\n:host(:active) .list-wrap,\n:host(:focus-within) .list-wrap {\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n}\n\n:host .dropdown-placeholder {\n  margin: 0;\n  width: 3rem;\n  height: 3rem;\n}\n\n:host .toggle {\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-align: center;\n  align-items: center;\n  min-height: 3rem;\n}\n\n:host stellar-asset[slot=\"handle\"] {\n  color: var(--dropdown-color);\n}\n\n:host stellar-asset[slot=\"handle\"]:hover,\n:host stellar-asset[slot=\"handle\"]:active,\n:host(:focus-within) stellar-asset[slot=\"handle\"],\n:host([focus-within]) stellar-asset[slot=\"handle\"] {\n  color: var(--dropdown-color);\n}\n\n:host .toggle span {\n  color: inherit;\n}\n\n:host .toggle .hidden {\n  display: inline-block !important;\n}\n\n:host .list {\n  margin-top: 0;\n  margin-left: 0;\n  -webkit-transition: all 110ms var(--ease) 250ms;\n  transition: all 110ms var(--ease) 250ms;\n  -webkit-box-shadow: 0 0 2px 0 rgba(128, 128, 128, .35);\n  box-shadow: 0 0 2px 0 rgba(128, 128, 128, .35);\n  background: white;\n  list-style-type: none;\n  padding: 0;\n}\n\n:host .list ::slotted(stellar-item) {\n  --item-size: 3.25rem;\n}\n\n:host .list .loader {\n  cursor: wait;\n  display: none;\n}\n\n:host .list .separator {\n  position: relative;\n}\n\n:host .list .separator::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: calc(50% - .5px);\n  background: var(--gray5);\n  width: 100%;\n  height: .1rem;\n}\n\n:host .icon {\n  -ms-flex: 0 0 2.25em;\n  flex: 0 0 2.25em;\n  -ms-flex-order: -1;\n  order: -1;\n  -webkit-transition: all .05s var(--ease) 0s;\n  transition: all .05s var(--ease) 0s;\n  margin-right: 1em;\n}\n\n:host .thumb {\n  -ms-flex: 0 0 2.25em;\n  flex: 0 0 2.25em;\n  -ms-flex-order: -1;\n  order: -1;\n  -webkit-transition: all .05s var(--ease) 0s;\n  transition: all .05s var(--ease) 0s;\n  margin-right: 1rem;\n  width: 2.25em;\n  height: 2.25em;\n}\n\n:host .notification {\n  display: inline-block;\n  margin: 0 0 0 .8rem;\n  border-radius: 50%;\n  background: var(--yellow5);\n  width: .8rem;\n  height: .8rem;\n}\n\n:host ::slotted(stellar-item) {\n  border: 0;\n  overflow: hidden;\n  color: var(--gray9);\n  font-size: 1rem;\n}\n\n:host .footer {\n  border-top: 1px solid var(--theme-base1);\n  margin-top: 0.5rem;\n}\n\n:host .footer ::slotted(*) {\n  background: transparent !important;\n}\n\n:host .footer:empty {\n  display: none;\n}\n\n/* Left */\n:host([position=\"left\"]) {\n\n}\n\n:host([position=\"left\"]) .list-wrap {\n  left: 0;\n  right: auto;\n}\n\n:host([position=\"left\"][icon]) .list-wrap {\n  left: var(--dropdown-offset, -3rem);\n}\n\n:host([position=\"left\"]) .list::after {\n  right: 0;\n  left: 4rem;\n}\n\n:host([position=\"left\"]) .list::before {\n  right: 0;\n  left: 4rem;\n}\n\n/* Right */\n:host([position=\"right\"]) {\n\n}\n\n:host([position=\"right\"]) .list-wrap {\n  left: auto;\n  right: 0;\n}\n\n:host([position=\"right\"][icon]) .list-wrap {\n  right: var(--dropdown-offset, 3rem);\n}\n\n:host([position=\"right\"]) .list::after {\n  right: 3rem;\n  left: auto;\n}\n\n:host([position=\"right\"]) .list::before {\n  right: 3rem;\n  left: auto;\n}\n\n:host-context(.dark-mode):host .list {\n  background: var(--gray9);\n}\n\n:host-context(.dark-mode):host ::slotted(stellar-item) {\n  color: var(--gray0);\n}\n\n:host-context(.dark-mode):host .footer {\n  border-top-color: var(--black);\n}"; }
}

export { Dropdown as stellar_dropdown };
