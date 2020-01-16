import { r as registerInstance, h, H as Host, g as getElement } from './index-cc4604b3.js';
import './colors-eb996d31.js';
import './_commonjsHelpers-bccf23a2.js';
import './css-custom-properties.min-d9d14253.js';
import { f as focusWithin } from './index-26976b63.js';
import './main-e9832563.js';
import './moment-5e7e00c2.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-dbf484eb.js';
import './utils-06e0aad6.js';
import './index-88205cad.js';

const DropdownCss = ":host, :host *, :host *:before, :host *:after {\n  box-sizing: border-box;\n}\n\n:host {\n  --dropdown-color: var(--theme-base7);\n  --dropdown-hover-color: var(--theme-base8);\n  --dropdown-width: 20rem;\n  --border-radius: 0.3rem;\n  --clip-from: polygon(0 0, 100% 0, 100% 0, 0 0);\n  --clip-to: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n  --filter: drop-shadow(0px 2px 2px var(--theme-base1));\n  --icon-rotation: 180deg;\n\n  contain: content;\n  cursor: pointer;\n  display: inline-flex;\n  position: relative;\n  align-items: center;\n  outline: 0;\n  height: 100%;\n  color: var(--dropdown-color);\n  transition: z-index 0ms linear 200ms;\n}\n\n:host([dark]) {\n  --filter: drop-shadow(0px 2px 2px var(--theme-base9));\n}\n\n:host .clipper {\n  filter: var(--filter);\n  position: absolute;\n  top: calc(100% + .5rem);\n  right: 50%;\n  left: calc(50% - (var(--dropdown-width) /2));\n  width: var(--dropdown-width);\n  height: 0;\n  transition: all 250ms var(--ease) 250ms;\n}\n\n:host .list-wrap {\n  z-index: 10;\n  transition: all 250ms var(--ease) 250ms;\n  width: var(--dropdown-width);\n  display: initial;\n  clip-path: var(--clip-from);\n  border-radius: var(--border-radius);\n  overflow: hidden;\n  display: block;\n}\n\n:host .caret {\n  color: var(--dropdown-color);\n  margin-left: 1.5rem;\n  transition: all 210ms var(--ease);\n  font-size: 2rem;\n}\n\n:host(:hover) .caret,\n:host(:focus-within) .caret {\n  transform: scale(1) rotate(var(--icon-rotation));\n  color: var(--dropdown-hover-color);\n}\n\n:host(:hover),\n:host(:active),\n:host(:focus-within) {\n  z-index: 6;\n  color: var(--dropdown-hover-color);\n}\n\n:host(:hover) .clipper,\n:host(:active) .clipper,\n:host(:focus-within) .clipper {\n  height: auto;\n}\n\n:host(:hover) .toggle::after,\n:host(:active) .toggle::after,\n:host(:focus-within) .toggle::after {\n  margin-top: -2px;\n  background: var(--dropdown-hover-color);\n  height: 2px;\n}\n\n:host(.toggle:hover),\n:host(.toggle:active) {\n  z-index: 6;\n  color: var(--dropdown-hover-color);\n}\n\n:host(.toggle:hover::after),\n:host(.toggle:active::after) {\n  margin-top: -2px;\n  background: var(--dropdown-hover-color);\n  height: 2px;\n}\n\n:host(:hover) .list-wrap,\n:host(:active) .list-wrap,\n:host(:focus-within) .list-wrap {\n  clip-path: var(--clip-to);\n  height: 100%;\n}\n\n:host .dropdown-placeholder {\n  margin: 0;\n  width: 3rem;\n  height: 3rem;\n}\n\n:host .toggle {\n  display: flex;\n  position: relative;\n  align-items: center;\n  min-height: 3rem;\n}\n\n:host ion-icon[slot=\"handle\"] {\n  color: var(--dropdown-color);\n}\n\n:host ion-icon[slot=\"handle\"]:hover,\n:host ion-icon[slot=\"handle\"]:active,\n:host(:focus-within) ion-icon[slot=\"handle\"],\n:host([focus-within]) ion-icon[slot=\"handle\"] {\n  color: var(--dropdown-color);\n}\n\n:host .toggle span {\n  color: inherit;\n}\n\n:host .toggle .hidden {\n  display: inline-block !important;\n}\n\n:host .list {\n  margin-top: 0;\n  margin-left: 0;\n  margin-bottom: 0;\n  transition: all 110ms var(--ease) 250ms;\n  box-shadow: 0 0 2px 0 rgba(128, 128, 128, .35);\n  background: white;\n  list-style-type: none;\n  padding: 0;\n}\n\n:host .list ::slotted(stellar-item) {\n  --item-size: 3.25rem;\n}\n\n:host .list .loader {\n  cursor: wait;\n  display: none;\n}\n\n:host .list .separator {\n  position: relative;\n}\n\n:host .list .separator::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: calc(50% - .5px);\n  background: var(--gray5);\n  width: 100%;\n  height: .1rem;\n}\n\n:host .icon {\n  flex: 0 0 2.25em;\n  order: -1;\n  transition: all .05s var(--ease) 0s;\n  margin-right: 1em;\n}\n\n:host .thumb {\n  flex: 0 0 2.25em;\n  order: -1;\n  transition: all .05s var(--ease) 0s;\n  margin-right: 1rem;\n  width: 2.25em;\n  height: 2.25em;\n}\n\n:host .notification {\n  display: inline-block;\n  margin: 0 0 0 .8rem;\n  border-radius: 50%;\n  background: var(--yellow5);\n  width: .8rem;\n  height: .8rem;\n}\n\n:host ::slotted(stellar-item) {\n  border: 0;\n  overflow: hidden;\n  color: var(--gray9);\n  font-size: 1rem;\n}\n\n:host .footer {\n  border-top: 1px solid var(--theme-base1);\n  margin-top: 0.5rem;\n}\n\n:host .footer ::slotted(*) {\n  background: transparent !important;\n}\n\n:host .footer:empty {\n  display: none;\n}\n\n/* Left */\n:host([position=\"left\"]) {\n  --clip-from: polygon(0% 0, 0% 50%, 0% 50%, 0 50%);\n}\n\n:host([position=\"left\"]) .clipper {\n  left: 0;\n  right: auto;\n}\n\n:host([position=\"left\"][icon]) .clipper {\n  left: var(--dropdown-offset, -3rem);\n}\n\n:host([position=\"left\"]) .list::after {\n  right: 0;\n  left: 4rem;\n}\n\n:host([position=\"left\"]) .list::before {\n  right: 0;\n  left: 4rem;\n}\n\n/* Right */\n:host([position=\"right\"]) {\n  --clip-from: polygon(0 0, 100% 0, 100% 0, 0 0);\n  --clip-from: polygon(0 0, 100% 0%, 100% 0%, 50% 0);\n}\n\n:host([position=\"right\"]) .clipper {\n  left: auto;\n  right: 0;\n}\n\n:host([position=\"right\"][icon]) .clipper {\n  right: var(--dropdown-offset, 3rem);\n}\n\n:host([position=\"right\"]) .list::after {\n  right: 3rem;\n  left: auto;\n}\n\n:host([position=\"right\"]) .list::before {\n  right: 3rem;\n  left: auto;\n}\n\n:host([dark]) .list {\n  background: var(--gray9);\n}\n\n:host([dark]) ::slotted(stellar-item) {\n  color: var(--gray0);\n}\n\n:host([dark]) .footer {\n  border-top-color: var(--black);\n}\n";

focusWithin(document);
const Dropdown = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        focusWithin(document);
    }
    onToggle() {
        this.open = !this.open;
    }
    render() {
        return h(Host, { "aria-label": this.label, class: "dropdown", title: this.label }, h("div", { class: "toggle" }, h("slot", { name: "handle" }), this.icon && h("ion-icon", { name: this.iconName, class: "caret" })), h("div", { class: "clipper" }, h("div", { class: "list-wrap" }, h("ul", { class: "list" }, h("slot", null), this.footer && h("div", { class: "footer" }, h("slot", { name: "footer" }))))));
    }
    get element() { return getElement(this); }
    static get style() { return DropdownCss; }
};
Tunnel.injectProps(Dropdown, ['dark']);

export { Dropdown as stellar_dropdown };
