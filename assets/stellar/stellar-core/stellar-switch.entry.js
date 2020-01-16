import { r as registerInstance, d as createEvent, h, g as getElement } from './index-cc4604b3.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-dbf484eb.js';
import './utils-06e0aad6.js';
import './index-88205cad.js';

const SwitchCss = "stellar-switch {\n  contain: content;\n  display: block;\n  --border-radius: 200px;\n  --font-size: 1.2rem;\n}\n\nstellar-switch .label {\n  -webkit-tap-highlight-color: transparent;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin: 1.1rem 0;\n}\n\nstellar-switch button ::-moz-selection { background: transparent; }\nstellar-switch button ::selection { background: transparent; }\n\nstellar-switch .label button {\n  font-size: var(--font-size);\n  display: inline-block;\n  position: relative;\n  transition: all .2s var(--ease) 0s;\n  margin-right: 1em;\n  background-color: var(--gray2);\n  width: 4rem;\n  height: .8rem;\n  vertical-align: text-bottom;\n  border-radius: var(--border-radius);\n  border: 0;\n  cursor: pointer;\n  outline: 0;\n}\n\nstellar-switch .label button:focus {\n  background-color: var(--theme-base3);\n}\n\nstellar-switch .label button:focus::after {\n  box-shadow: 0 0 0 3px rgba(0, 0, 0, .125), 0 0 3px 0 rgba(0, 0, 0, 0.3);\n}\n\nstellar-switch .label button span {\n  transition: all .2s var(--ease) 0s;\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--gray7);\n  position: absolute;\n  left: 0;\n  top: 0;\n  font-style: normal;\n  text-transform: uppercase;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 0;\n  pointer-events: none;\n  z-index: 1;\n}\n\nstellar-switch .label button::after {\n  content: \"\";\n  position: absolute;\n  top: -0.8rem;\n  left: -0.2rem;\n  transform: translate3d(.125em, .125em, 0);\n  transition: all .2s var(--ease) 0s;\n  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);\n  background-color: white;\n  border-radius: var(--border-radius);\n  width: 2.1rem;\n  height: 2.1rem;\n}\n\nstellar-switch .label:active button::after {\n  transform: translate3d(2px, .125rem, 0);\n  width: 2.3rem;\n}\n\nstellar-switch .label:active input:checked + button::after {\n  transform: translate3d(1.9rem, .125rem, 0);\n}\n\nstellar-switch .label input {\n  pointer-events: none;\n  position: absolute;\n  opacity: 0;\n}\n\nstellar-switch .label input:checked + button {\n  background-color: var(--theme-base6);\n  color: white;\n}\n\nstellar-switch .label input:checked + button span {\n  padding: 0 0 0 2.1rem;\n  color: white;\n}\n\nstellar-switch .label input:checked + button::after {\n  transform: translate3d(2.25rem, .125rem, 0);\n  background: var(--theme-base5);\n}\n\nstellar-switch[dark] .label input:checked + button,\nstellar-switch[dark] .label input:checked + button span {\n  color: var(--black)\n}\n";

const Switch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.checked = false;
        this.checkedDefault = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        this.update = createEvent(this, "update", 7);
    }
    componentDidLoad() {
        if (this.checkedDefault) {
            this.checked = this.checkedDefault;
        }
    }
    async validate() {
        const status = {
            name: this.name,
            value: this.checked,
            valid: true,
            errors: [],
        };
        if (!this.novalidate) {
            // @ts-ignore
            if (!this.checked && this.required) {
                status.valid = false;
                status.errors.push({ message: 'This field is required.' });
            }
        }
        this.status = status;
        return this.status;
    }
    async activate() {
        this.checked = !this.checked;
    }
    handleChecked() {
        this.update.emit({
            checked: this.checked
        });
    }
    render() {
        return (h("label", { class: "label", htmlFor: this.name, onClick: () => { this.activate(); } }, h("input", { type: "checkbox", name: this.name, id: this.name, checked: this.checked, tabindex: "-1", onClick: () => { this.activate(); } }), h("button", { type: "button" }, h("span", null, h("ion-icon", { name: this.checked ? "checkmark" : "close" }))), h("slot", null)));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "checked": ["handleChecked"]
    }; }
    static get style() { return SwitchCss; }
};
Tunnel.injectProps(Switch, ['dark']);

export { Switch as stellar_switch };
