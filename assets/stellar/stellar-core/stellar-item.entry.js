import { r as registerInstance, d as createEvent, h, g as getElement } from './index-cc4604b3.js';
import './colors-eb996d31.js';
import './_commonjsHelpers-bccf23a2.js';
import './css-custom-properties.min-d9d14253.js';
import { d as delay } from './index-26976b63.js';
import './main-e9832563.js';
import './moment-5e7e00c2.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-dbf484eb.js';
import './utils-06e0aad6.js';
import './index-88205cad.js';
import { A as ActiveRouter } from './active-router-b888f11b.js';
import './match-path-4e416d02.js';
import './location-utils-1c8d4830.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}

const ItemCss = ":host, :host *, :host *:before, :host *:after {\n  box-sizing: border-box;\n}\n\n:host {\n  contain: content;\n  --item-size: 2.356em;\n  --font-size: 1.4rem;\n  display: block;\n  width: 100%;\n  height: var(--item-size);\n  color: var(--theme-base9);\n  font-family: inherit;\n  visibility: visible !important;\n  font-size: var(--font-size);\n  line-height: 1.4;\n  text-align: left;\n  position: relative;\n}\n\n:host([fit]) {\n  --item-size: auto;\n}\n\n:host .button .content {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-gap: 1rem;\n  width: 100%;\n  text-align: left;\n}\n\n:host([wrap]) .button .content {\n  white-space: normal;\n  text-align: left;\n  width: calc(100% - var(--ms5));\n}\n\n:host([danger]) .button {\n  color: var(--red5);\n}\n\n:host a.button,\n:host button.button,\n:host stencil-route-link a {\n  text-decoration: none;\n  appearance: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  outline: 0;\n  border: 0;\n  background: transparent;\n  padding: 0 1em;\n  width: 100%;\n  height: calc(var(--item-size) - 1px);\n  color: currentColor;\n  font-weight: 500;\n  font-size: inherit;\n}\n\n:host stencil-route-link {\n  padding: 0;\n}\n\n:host .button a {\n  color: inherit;\n  background: inherit;\n  text-decoration: none;\n}\n\n\n:host .button ::slotted(*[block]) {\n  grid-column: 1/3;\n}\n\n:host .button ::slotted(stellar-avatar) {\n  width: var(--avatar-size);\n  visibility: visible !important;\n  display: block !important;\n  align-self: center;\n}\n\n:host .button ::slotted(stellar-tag) {\n  margin: auto 0.5rem auto auto;\n}\n\n:host .button ion-icon {\n  margin-left: 1rem;\n  background: radial-gradient(ellipse at center, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 80%,rgba(255,255,255,0) 100%);\n}\n\n:host .button span {\n  margin: auto auto auto 0;\n  width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n:host([size=\"small\"]) .button {\n  padding: 0 1rem;\n  height: 3rem;\n}\n\n:host ion-icon.selected {\n  animation: fadeInScale 200ms var(--ease);\n  font-size: var(--item-size);\n  margin-left: auto !important;\n  background: transparent;\n  color: var(--theme-base5);\n  height: calc(var(--item-size) - 1px);\n}\n\n:host([fit]) ion-icon.selected {\n  height: 75%;\n  font-size: 3em;\n  margin-right: 0.125em;\n}\n\n:host(:hover) .selected,\n:host(:focus) .selected,\n:host(:focus-within) .selected {\n  color: var(--theme-base7);\n}\n\n:host([fit]) ion-icon {\n  right: 1em;\n}\n\n:host .button:focus,\n:host .button:hover,\n:host(:hover),\n:host(:focus-within) {\n  background: var(--theme-base0);\n}\n\n:host(.current) {\n  background: white\n}\n\n:host([danger]) .button:focus,\n:host([danger]) .button:hover  {\n  background: var(--red5);\n  color: white;\n}\n\n:host([simple]) .button {\n  background: white !important;\n}\n\n:host(.current) ion-icon {\n  display: none;\n}\n\n:host ion-icon.multiple {\n  border: 1px solid var(--border-color);\n  background: var(--background);\n  border-radius: 4px;\n  font-size: calc(var(--item-size) * .55);\n  width: calc(var(--item-size) * .55);\n  height: calc(var(--item-size) * .55);\n  margin: 0 0 0 auto;\n  left: -1rem;\n  position: relative;\n  color: transparent;\n}\n\n:host ion-icon.multiple.selected {\n  color: var(--white);\n  background: var(--theme-base5);\n}\n\n\n:host(.current) .button:focus,\n:host(.current) .button:hover,\n:host(.current:hover),\n:host(.current:focus-within) {\n  background: transparent;\n}\n\n:host([dark]) .button:focus,\n:host([dark]) .button:hover,\n:host([dark]:hover),\n:host([dark]:focus-within) {\n  background: var(--theme-base8);\n}\n\n:host([dark].current) .button:focus,\n:host([dark].current) .button:hover,\n:host([dark].current:hover),\n:host([dark].current:focus-within) {\n  background: transparent;\n}\n\n@keyframes fadeInScale {\n  from {\n    transform: scale(0);\n    opacity: 0;\n  }\n\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n";

const Item = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = "button";
        this.href = "#";
        this.wrap = false;
        this.fit = false;
        this.simple = false;
        this.danger = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        this.selected = false;
        this.multiple = false;
        this.selectable = false;
        this.focused = false;
        this.selectTitle = false;
        this.route = false;
        this.current = false;
        this.selectionChanged = createEvent(this, "selectionChanged", 7);
        this.mounted = createEvent(this, "mounted", 7);
        this.focusChanged = createEvent(this, "focusChanged", 7);
        this.blurChanged = createEvent(this, "blurChanged", 7);
    }
    componentWillLoad() {
        this.select = this.element.closest('stellar-select');
    }
    componentDidLoad() {
        setTimeout(() => {
            if (this.selected) {
                this.mounted.emit(this);
            }
        }, 10);
    }
    componentDidUnload() {
        this.selectionChanged.emit(this);
    }
    componentDidUpdate() {
        if (this.select) {
            this.select.update_values();
        }
    }
    async data() {
        return {
            size: this.size,
            value: this.value,
            type: this.type,
            label: this.label,
            danger: this.danger,
            slotted: this.element.innerHTML
        };
    }
    async apply(data) {
        this.size = data.size;
        this.value = data.value;
        this.type = data.type;
        this.label = data.label;
        this.element.innerHTML = data.slotted;
        if (this.selectTitle) {
            await delay(25);
            this.element.innerHTML = data.slotted;
        }
    }
    async setFocus() {
        this.focused = true;
        // @ts-ignore
        this.element.querySelector('.button').focus();
    }
    handleClick(e) {
        if (this.route) {
            e.preventDefault();
            this.history.push(this.href, {});
        }
        if (!this.current) {
            this.selectionChanged.emit(this);
        }
    }
    handleFocus() {
        if (this.current) {
            this.focusChanged.emit(this);
        }
        this.focused = true;
    }
    handleBlur() {
        if (this.current) {
            this.blurChanged.emit(this);
        }
        this.focused = false;
    }
    classes() {
        let classes = "";
        classes += this.selected ? "selected " : "";
        classes += this.multiple ? "multiple " : "";
        return classes;
    }
    async select_item(state) {
        if (this.selectable) {
            if (state) {
                if (this.selected !== state.selected) {
                    var event = new CustomEvent('click');
                    this.element.shadowRoot.querySelector('.button').dispatchEvent(event);
                }
            }
            else {
                var event = new CustomEvent('click');
                this.element.shadowRoot.querySelector('.button').dispatchEvent(event);
            }
        }
    }
    render() {
        return (h(this.type, { class: "button", type: "button", href: this.href, url: this.href, tabindex: "0", value: this.value, title: this.label, onClick: (e) => this.handleClick(e), onBlur: () => this.handleBlur(), onFocus: () => this.handleFocus() }, h("div", { class: "content" }, h("slot", null)), (this.selected || this.multiple) && h("ion-icon", { class: this.classes(), name: "checkmark" })));
    }
    get element() { return getElement(this); }
    static get style() { return ItemCss; }
};
Tunnel.injectProps(Item, ['dark']);
if (injectHistory) {
    injectHistory(Item);
}

export { Item as stellar_item };
