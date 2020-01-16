import { r as registerInstance, d as createEvent, h, g as getElement } from './index-cc4604b3.js';
import './colors-eb996d31.js';
import './_commonjsHelpers-bccf23a2.js';
import './css-custom-properties.min-d9d14253.js';
import { b as blurringEase } from './index-26976b63.js';
import './main-e9832563.js';
import './moment-5e7e00c2.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-dbf484eb.js';
import './utils-06e0aad6.js';
import './index-88205cad.js';

const ToggleOptionCss = "stellar-toggle-option {\n  contain: content;\n  --background: var(--gray0);\n  --hover-background: var(--gray1);\n  --border: var(--gray1);\n  --focus: var(--gray5);\n  --check-bg: var(--white);\n  --check-subject-bg: var(--theme-base5);\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  font-family: inherit;\n  position: relative;\n}\n\nstellar-toggle-option[type*=\"block\"] {\n  overflow: hidden;\n}\n\nstellar-toggle-option * {\n  box-sizing: border-box;\n}\n\nstellar-toggle-option + stellar-toggle-option {\n  margin-top: 10px;\n}\n\nstellar-toggle-option[type=\"radio-block\"] + stellar-toggle-option[type=\"radio-block\"],\nstellar-toggle-option[type=\"checkbox-block\"] + stellar-toggle-option[type=\"checkbox-block\"] {\n  margin-top: 0;\n}\n\nstellar-toggle-option ion-icon {\n  --icon-color: white;\n}\n\nstellar-toggle-option input {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  width: 0;\n  height: 0;\n  opacity: 0;\n}\n\nstellar-toggle-option span {\n  color: var(--gray9);\n  font-weight: 300;\n}\n\nstellar-toggle-option .box {\n  display: inline-flex;\n  position: relative;\n  flex: 0 0 2rem;\n  align-items: center;\n  justify-content: center;\n  transition: all 150ms var(--ease) 0s;\n  margin: 0 7.5px 0 0.2px;\n  border: 1px solid var(--background);\n  box-shadow: 0 0 0 1px var(--border);\n  background: var(--check-bg) 50% 50% / 5px 4px no-repeat;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 100%;\n  overflow: hidden;\n}\n\nstellar-toggle-option:focus-within .box,\nstellar-toggle-option[checked] .box,\nstellar-toggle-option:hover .box {\n  border: 1px solid var(--background);\n  box-shadow: 0 0 0 1px var(--focus), 0 0 0 3px rgba(0, 0, 0, .125);\n}\n\nstellar-toggle-option .box .indicator {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 100%;\n  width: 100%;\n  transform: translate(-50%, -50%) scale(0);\n  transform-origin: 50% 50%;\n  transition: all 150ms var(--ease) 0s;\n}\n\nstellar-toggle-option img {\n  min-width: 4rem;\n}\n\nstellar-toggle-option .box .indicator * {\n  height: 100%;\n  width: 100%;\n  display: flex;\n}\n\nstellar-toggle-option .box.focus {\n  border: 1px solid black;\n  box-shadow: 0 0 0 2px var(--theme-base3);\n}\n\nstellar-toggle-option button {\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  appearance: none;\n  background: none;\n  border: 0;\n  outline: 0;\n}\n\nstellar-toggle-option[type=\"radio\"] .box .bg,\nstellar-toggle-option[type*=\"checkbox\"] .box .bg {\n  background: var(--check-subject-bg);\n  color: var(--background);\n}\n\nstellar-toggle-option[type=\"radio\"] .box .active,\nstellar-toggle-option[type*=\"checkbox\"] .box .active {\n  transform: translate(-50%, -50%) scale(1);\n  background: var(--check-subject-bg);\n  color: var(--background);\n  width: calc(100% - 0.5rem);\n  height: calc(100% - 0.5rem);\n  border-radius: 100%;\n}\n\nstellar-toggle-option[type*=\"checkbox\"] .box .active {\n  border-radius: 2px;\n  width: calc(100% + 2px);\n  height: calc(100% + 2px);\n}\n\nstellar-toggle-option[type*=\"checkbox\"] .box {\n  flex: 0 0 2rem;\n  width: 2rem;\n  height: 2rem;\n  font-size: 2rem;\n  color: var(--check-bg);\n  border-radius: 0.3rem;\n}\n\nstellar-toggle-option[type*=\"checkbox\"] .box ion-icon {\n  transition: transform 350ms var(--ease) 0ms;\n  transform: scale(0);\n}\n\nstellar-toggle-option[type=\"checkbox-block\"] .box ion-icon {\n  height: 3rem;\n  width: 3rem;\n  font-size: 3rem;\n  align-self: center;\n  margin: auto;\n  display: flex;\n}\n\nstellar-toggle-option .status stellar-tag {\n  display: block;\n}\n\nstellar-toggle-option .status {\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: translate(calc(100% + 1rem), 0%);\n  transition: all 125ms var(--ease) 0ms;\n}\n\nstellar-toggle-option .status.active {\n  transform: translate(0%, 0%);\n}\n\nstellar-toggle-option[type=\"checkbox\"] .box .active {\n  transform: translate(-50%, -50%) scale(1);\n}\n\nstellar-toggle-option[type*=\"checkbox\"] .box .active ion-icon {\n  transform: scale(1);\n}\n\nstellar-toggle-option[type*=\"block\"] button {\n  position: relative;\n  border: 1px solid var(--border);\n  transition: all 200ms var(--ease) 0s;\n  width: 100%;\n  height: 100%;\n}\n\nstellar-toggle-option[type*=\"block\"] button .wrapper {\n  transition: all 200ms var(--ease) 0s;\n}\n\nstellar-toggle-option[type*=\"block\"]:hover,\nstellar-toggle-option[type*=\"block\"]:focus {\n  box-shadow: 0 2px 6px 0 rgba(72, 72, 73, 0.15);\n}\n\nstellar-toggle-option[type*=\"block\"]:focus-within .wrapper,\nstellar-toggle-option[type*=\"block\"] button:hover .wrapper,\nstellar-toggle-option[type*=\"block\"] button:focus .wrapper {\n  background: var(--hover-background);\n}\n\nstellar-toggle-option[type*=\"block\"] button:active {\n  border-color: var(--gray2);\n}\n\nstellar-toggle-option[type*=\"block\"] .wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  background: var(--background);\n  padding: 1.5rem;\n  width: 100%;\n  height: 100%;\n}\n\nstellar-toggle-option[type*=\"block\"] .block-content {\n  display: grid;\n  align-items: center;\n  justify-content: space-between;\n  margin-right: 10px;\n  grid-template-columns: 1fr;\n  grid-gap: 1rem;\n}\n\nstellar-toggle-option[type*=\"block\"] .box {\n  flex: 0 0 3rem;\n  order: -1;\n  margin-right: 1.5rem;\n  width: 3rem;\n  height: 3rem;\n  color: var(--theme-base5);\n  background: var(--check-bg);\n}\n\nstellar-toggle-option[type*=\"block\"] .box .active {\n  transform: translate(-50%, -50%) scale(1);\n}\n\nstellar-toggle-option[type*=\"block\"][icon] .wrapper {\n  justify-content: space-between;\n}\n\nstellar-toggle-option[type*=\"block\"][icon] .block-content {\n  justify-content: space-between;\n  grid-template-columns: 1fr 4fr;\n}\n\nstellar-toggle-option[type*=\"block\"][icon] .box {\n  order: 3;\n  margin-right: 0;\n  margin-left: 1.5rem;\n}\n\nstellar-toggle-option[type*=\"block\"] copy-wrap {\n  position: relative;\n  z-index: 2;\n}\n\nstellar-toggle-option[type*=\"block\"][inline] {\n  margin: 0;\n}\n\nstellar-toggle-option[type*=\"block\"][inline] button {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n\nstellar-toggle-option[type*=\"block\"][size=\"small\"] button {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n\nstellar-toggle-option[type*=\"block\"][checked] {\n  z-index: 3;\n  border-color: var(--background);\n}\n\nstellar-toggle-option[type*=\"block\"][checked] .box {\n  border: 0;\n  box-shadow: 0 0 0 1px var(--border);\n  background: var(--background);\n  color: white;\n}\n\nstellar-toggle-option[type=\"radio-block\"] .box .active {\n  transform: translate(-50%, -50%) scale(1);\n  background: var(--theme-base5);\n  width: calc(100% - 0.5rem);\n  height: calc(100% - 0.5rem);\n  border-radius: 100%;\n}\n\nstellar-toggle-option[type=\"radio-block\"][checked] .box .indicator {\n  background: white;\n}\n\nstellar-toggle-option[inline] {\n  margin-top: 0;\n  margin-right: 3rem;\n}\n\nstellar-toggle-option[single] {\n  margin: 0;\n}\n\nstellar-toggle-option[inline] button {\n  display: inline-flex;\n}\n\nstellar-toggle-option[single] .box {\n  margin: 0;\n}\n\nstellar-toggle-option[disabled] {\n  opacity: 0.75;\n  filter: grayscale(100%);\n  pointer-events: none;\n}\n\nstellar-toggle-option copy-wrap * {\n  color: var(--black);\n}\n\nstellar-toggle-option[dark] {\n  --background: var(--black-alt);\n  --hover-background: var(--black-alt);\n  --border: var(--gray9)\n}\n\nstellar-toggle-option[dark] copy-wrap * {\n  color: white;\n}\n\n\nstellar-toggle-option[dark] .box {\n  background: var(--black)\n}\n\nstellar-toggle-option[dark][type*=\"checkbox\"] .box .active ion-icon {\n  color: var(--black);\n}\n";

const ToggleOption = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = "checkbox";
        this.checked = false;
        this.checkedDefault = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        this.for = "";
        this.default = "";
        this.selectedCopy = "Selected!";
        this._type = "checkbox";
        this.focused = false;
        this.blur = 0;
        this.ease = blurringEase({
            end: 10,
            start: -1,
            duration: 250,
            tick: (args) => {
                this.blur = args.value;
            },
            complete: () => {
                this.blur = 0;
            },
        });
        this.changeToggle = createEvent(this, "changeToggle", 7);
    }
    componentWillLoad() {
        this.updateRealType();
    }
    componentDidLoad() {
        this.input = this.element.querySelector('input.input');
        if (this.checkedDefault) {
            this.checked = this.checkedDefault;
            this.changeToggle.emit({ element: this.element, value: this.value, checked: this.checked });
        }
    }
    updateRealType() {
        if (this.type === "radio-block") {
            this._type = "radio";
        }
        else if (this.type === "checkbox-block") {
            this._type = "checkbox";
        }
        else {
            this._type = this.type;
        }
    }
    async confirm() {
        if (this.input.checked !== this.checked) {
            this.checked = this.input.checked;
        }
    }
    async updateSelected(value) {
        this.input.checked = value;
        this.onToggleChange();
    }
    onToggleChange() {
        this.checked = this.input.checked;
        this.ease.start();
        this.changeToggle.emit({ element: this.element, value: this.checked ? this.value : undefined, checked: this.checked });
    }
    onFocus() {
        this.focused = true;
    }
    onBlur() {
        this.focused = false;
    }
    onClick() {
        this.input.checked = !this.input.checked;
        this.onToggleChange();
    }
    onKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            this.input.checked = !this.input.checked;
            this.onToggleChange();
        }
    }
    renderCheckbox() {
        if (this.type === "checkbox" || this.type === "radio") {
            return (h("div", { class: this.focused ? "box focused" : "box" }, h("div", { class: this.checked ? "indicator active" : "indicator" }, this.type === "checkbox" && h("ion-icon", { name: "checkmark" }))));
        }
    }
    renderRadioBlock() {
        if (this.type === "radio-block") {
            return (h("div", { class: "wrapper" }, h("div", { class: this.focused ? "box focused" : "box" }, h("div", { class: this.checked ? "indicator active" : "indicator" })), h("div", { class: "block-content" }, h("slot", null))));
        }
    }
    renderCheckBlock() {
        if (this.type === "checkbox-block") {
            return (h("div", { class: "wrapper" }, h("div", { class: this.focused ? "box focused" : "box" }, h("div", { class: this.checked ? "indicator active" : "indicator" }, h("ion-icon", { name: "checkmark" }))), h("div", { class: "block-content" }, h("slot", null))));
        }
    }
    render() {
        // @ts-ignore
        return h("button", { type: "button", onClick: () => this.onClick(), onKeyDown: e => this.onKeyDown(e) }, h("input", { type: "hidden", name: `${this.for}[${this.name}]`, value: this.default }), h("input", { class: "input", type: this._type, id: `${this.for}_${this.name}_${this.value}`, name: `${this.for}[${this.name}]`, checked: this.checked, value: this.value, required: this.required, onChange: (e) => { e.stopPropagation(); e.preventDefault(); }, onKeyDown: e => this.onKeyDown(e) }), this.renderCheckbox(), ["radio", "checkbox"].indexOf(this.type) !== -1 && h("p", null, h("slot", null)), this.renderRadioBlock(), this.renderCheckBlock(), ["radio", "checkbox"].indexOf(this.type) === -1 &&
            h("stellar-blur", { horizontal: this.blur, class: this.checked ? "status active" : "status" }, h("stellar-tag", { size: "small", color: "theme-base5" }, this.selectedCopy)), this.tooltip && h("stellar-tooltip", { align: "bottom-left" }, this.tooltip));
    }
    get element() { return getElement(this); }
    static get style() { return ToggleOptionCss; }
};
Tunnel.injectProps(ToggleOption, ['dark']);

export { ToggleOption as stellar_toggle_option };
