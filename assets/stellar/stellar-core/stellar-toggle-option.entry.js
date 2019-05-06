import { c as registerInstance, h as createEvent, d as h, f as getElement } from './stellar-core-d63b686e.js';
import './chunk-452e3210.js';
import './chunk-aefb00c1.js';
import { a as blurringEase } from './chunk-15cea9da.js';
import './chunk-f26db59a.js';

class ToggleOption {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = "checkbox";
        this.checked = false;
        this.checkedDefault = false;
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
        this.change = createEvent(this, "change", 7);
    }
    componentWillLoad() {
        this.updateRealType();
    }
    componentDidLoad() {
        this.input = this.element.querySelector('input.input');
        if (this.checkedDefault) {
            this.checked = this.checkedDefault;
            this.change.emit({ element: this.element, value: this.value, checked: this.input.checked });
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
        console.log(this.input);
        if (this.input.checked !== this.checked) {
            this.checked = this.input.checked;
        }
    }
    async updateSelected(value) {
        this.input.checked = value;
        this.checked = value;
        this.change.emit({ element: this.element, value: this.value, checked: this.input.checked });
    }
    onToggleChange(e) {
        e.stopPropagation();
        this.checked = this.input.checked;
        this.ease.start();
        this.change.emit({ element: this.element, value: this.value, checked: this.checked });
    }
    onFocus() {
        this.focused = true;
    }
    onBlur() {
        this.focused = false;
    }
    onKeyUp(e) {
        if (e.key === "Enter") {
            this.input.checked = !this.input.checked;
            this.onToggleChange(e);
        }
    }
    renderCheckbox() {
        if (this.type === "checkbox" || this.type === "radio") {
            return (h("div", { class: this.focused ? "box focused" : "box" }, h("div", { class: this.checked ? "indicator active" : "indicator" }, this.type === "checkbox" && h("stellar-asset", { name: "checkmark" }))));
        }
    }
    renderRadioBlock() {
        if (this.type === "radio-block") {
            return (h("div", { class: "wrapper" }, h("div", { class: this.focused ? "box focused" : "box" }, h("div", { class: this.checked ? "indicator active" : "indicator" })), h("div", { class: "block-content" }, h("slot", null))));
        }
    }
    renderCheckBlock() {
        if (this.type === "checkbox-block") {
            return (h("div", { class: "wrapper" }, h("div", { class: this.focused ? "box focused" : "box" }, h("div", { class: this.checked ? "indicator active" : "indicator" }, h("stellar-asset", { name: "checkmark", block: true }))), h("div", { class: "block-content" }, h("slot", null))));
        }
    }
    render() {
        return (h("label", null, h("input", { type: "hidden", name: `${this.for}[${this.name}]`, value: this.default }), h("input", { class: "input", type: this._type, id: `${this.for}_${this.name}_${this.value}`, name: `${this.for}[${this.name}]`, checked: this.checked, value: this.value, required: this.required, onChange: e => this.onToggleChange(e), onFocus: () => this.onFocus(), onBlur: () => this.onBlur(), onKeyUp: e => this.onKeyUp(e), onClick: e => { e.stopPropagation(); } }), this.renderCheckbox(), ["radio", "checkbox"].indexOf(this.type) !== -1 && h("p", null, h("slot", null)), this.renderRadioBlock(), this.renderCheckBlock(), ["radio", "checkbox"].indexOf(this.type) === -1 &&
            h("stellar-blur", { horizontal: this.blur, class: this.checked ? "status active" : "status" }, h("stellar-tag", { size: "small", color: "theme-base5" }, this.selectedCopy)), this.tooltip && h("stellar-tooltip", { align: "bottom-left" }, this.tooltip)));
    }
    get element() { return getElement(this); }
    static get style() { return "stellar-toggle-option {\n  --background: var(--gray0);\n  --hover-background: var(--gray1);\n  --border: var(--gray1);\n  --focus: var(--gray5);\n  --check-bg: var(--white);\n  --check-subject-bg: var(--theme-base5);\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  font-family: inherit;\n  position: relative;\n}\n\nstellar-toggle-option[type*=\"block\"] {\n  overflow: hidden;\n}\n\nstellar-toggle-option * {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\nstellar-toggle-option + stellar-toggle-option {\n  margin-top: 10px;\n}\n\nstellar-toggle-option[type=\"radio-block\"] + stellar-toggle-option[type=\"radio-block\"],\nstellar-toggle-option[type=\"checkbox-block\"] + stellar-toggle-option[type=\"checkbox-block\"] {\n  margin-top: 0;\n}\n\nstellar-toggle-option stellar-asset {\n  --icon-color: white;\n}\n\nstellar-toggle-option input {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  width: 0;\n  height: 0;\n  opacity: 0;\n}\n\nstellar-toggle-option span {\n  color: var(--gray9);\n  font-weight: 300;\n}\n\nstellar-toggle-option .box {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  position: relative;\n  -ms-flex: 0 0 2rem;\n  flex: 0 0 2rem;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-transition: all 150ms var(--ease) 0s;\n  transition: all 150ms var(--ease) 0s;\n  margin: 0 7.5px 0 0.2px;\n  border: 1px solid var(--background);\n  -webkit-box-shadow: 0 0 0 1px var(--border);\n  box-shadow: 0 0 0 1px var(--border);\n  background: var(--check-bg) 50% 50% / 5px 4px no-repeat;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 100%;\n  overflow: hidden;\n}\n\nstellar-toggle-option:focus-within .box,\nstellar-toggle-option[checked] .box,\nstellar-toggle-option:hover .box {\n  border: 1px solid var(--background);\n  -webkit-box-shadow: 0 0 0 1px var(--focus), 0 0 0 3px rgba(0, 0, 0, .125);\n  box-shadow: 0 0 0 1px var(--focus), 0 0 0 3px rgba(0, 0, 0, .125);\n}\n\nstellar-toggle-option .box .indicator {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 100%;\n  width: 100%;\n  -webkit-transform: translate(-50%, -50%) scale(0);\n  transform: translate(-50%, -50%) scale(0);\n  -webkit-transform-origin: 50% 50%;\n  transform-origin: 50% 50%;\n  -webkit-transition: all 150ms var(--ease) 0s;\n  transition: all 150ms var(--ease) 0s;\n}\n\nstellar-toggle-option img {\n  min-width: 4rem;\n}\n\nstellar-toggle-option .box .indicator * {\n  height: 100%;\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n}\n\nstellar-toggle-option .box.focus {\n  border: 1px solid black;\n  -webkit-box-shadow: 0 0 0 2px var(--theme-base3);\n  box-shadow: 0 0 0 2px var(--theme-base3);\n}\n\nstellar-toggle-option label {\n  cursor: pointer;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\nstellar-toggle-option[type=\"radio\"] .box .bg,\nstellar-toggle-option[type*=\"checkbox\"] .box .bg {\n  background: var(--check-subject-bg);\n  color: var(--background);\n}\n\nstellar-toggle-option[type=\"radio\"] .box .active,\nstellar-toggle-option[type*=\"checkbox\"] .box .active {\n  -webkit-transform: translate(-50%, -50%) scale(1);\n  transform: translate(-50%, -50%) scale(1);\n  background: var(--check-subject-bg);\n  color: var(--background);\n  width: calc(100% - 0.5rem);\n  height: calc(100% - 0.5rem);\n  border-radius: 100%;\n}\n\nstellar-toggle-option[type*=\"checkbox\"] .box .active {\n  border-radius: 2px;\n  width: calc(100% + 2px);\n  height: calc(100% + 2px);\n}\n\nstellar-toggle-option[type*=\"checkbox\"] .box {\n  -ms-flex: 0 0 2rem;\n  flex: 0 0 2rem;\n  width: 2rem;\n  height: 2rem;\n  font-size: 2rem;\n  color: var(--check-bg);\n  border-radius: 0.3rem;\n}\n\nstellar-toggle-option[type*=\"checkbox\"] .box stellar-asset {\n  -webkit-transition: -webkit-transform 350ms var(--ease) 0ms;\n  transition: -webkit-transform 350ms var(--ease) 0ms;\n  transition: transform 350ms var(--ease) 0ms;\n  transition: transform 350ms var(--ease) 0ms, -webkit-transform 350ms var(--ease) 0ms;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n\nstellar-toggle-option[type=\"checkbox-block\"] .box stellar-asset {\n  height: 3rem;\n  width: 3rem;\n  font-size: 3rem;\n  -ms-flex-item-align: center;\n  align-self: center;\n  margin: auto;\n  display: -ms-flexbox;\n  display: flex;\n}\n\nstellar-toggle-option .status stellar-tag {\n  display: block;\n}\n\nstellar-toggle-option .status {\n  position: absolute;\n  right: 0;\n  top: 0;\n  -webkit-transform: translate(calc(100% + 1rem), 0%);\n  transform: translate(calc(100% + 1rem), 0%);\n  -webkit-transition: all 125ms var(--ease) 0ms;\n  transition: all 125ms var(--ease) 0ms;\n}\n\nstellar-toggle-option .status.active {\n  -webkit-transform: translate(0%, 0%);\n  transform: translate(0%, 0%);\n}\n\nstellar-toggle-option[type=\"checkbox\"] .box .active {\n  -webkit-transform: translate(-50%, -50%) scale(1);\n  transform: translate(-50%, -50%) scale(1);\n}\n\nstellar-toggle-option[type*=\"checkbox\"] .box .active stellar-asset {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n}\n\nstellar-toggle-option[type*=\"block\"] label {\n  position: relative;\n  border: 1px solid var(--border);\n  -webkit-transition: all 200ms var(--ease) 0s;\n  transition: all 200ms var(--ease) 0s;\n  width: 100%;\n  height: 100%;\n}\n\nstellar-toggle-option[type*=\"block\"] label .wrapper {\n  -webkit-transition: all 200ms var(--ease) 0s;\n  transition: all 200ms var(--ease) 0s;\n}\n\nstellar-toggle-option[type*=\"block\"]:hover,\nstellar-toggle-option[type*=\"block\"]:focus {\n  -webkit-box-shadow: 0 2px 6px 0 rgba(72, 72, 73, 0.15);\n  box-shadow: 0 2px 6px 0 rgba(72, 72, 73, 0.15);\n}\n\nstellar-toggle-option[type*=\"block\"]:focus-within .wrapper,\nstellar-toggle-option[type*=\"block\"] label:hover .wrapper,\nstellar-toggle-option[type*=\"block\"] label:focus .wrapper {\n  background: var(--hover-background);\n}\n\nstellar-toggle-option[type*=\"block\"] label:active {\n  border-color: var(--gray2);\n}\n\nstellar-toggle-option[type*=\"block\"] .wrapper {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  background: var(--background);\n  padding: 1.5rem;\n  width: 100%;\n  height: 100%;\n}\n\nstellar-toggle-option[type*=\"block\"] .block-content {\n  display: grid;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  margin-right: 10px;\n  grid-template-columns: 1fr;\n  grid-gap: 1rem;\n}\n\nstellar-toggle-option[type*=\"block\"] .box {\n  -ms-flex: 0 0 3rem;\n  flex: 0 0 3rem;\n  -ms-flex-order: -1;\n  order: -1;\n  margin-right: 1.5rem;\n  width: 3rem;\n  height: 3rem;\n  color: var(--theme-base5);\n  background: var(--check-bg);\n}\n\nstellar-toggle-option[type*=\"block\"] .box .active {\n  -webkit-transform: translate(-50%, -50%) scale(1);\n  transform: translate(-50%, -50%) scale(1);\n}\n\nstellar-toggle-option[type*=\"block\"][icon] .wrapper {\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\nstellar-toggle-option[type*=\"block\"][icon] .block-content {\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  grid-template-columns: 1fr 4fr;\n}\n\nstellar-toggle-option[type*=\"block\"][icon] .box {\n  -ms-flex-order: 3;\n  order: 3;\n  margin-right: 0;\n  margin-left: 1.5rem;\n}\n\nstellar-toggle-option[type*=\"block\"] copy-wrap {\n  position: relative;\n  z-index: 2;\n}\n\nstellar-toggle-option[type*=\"block\"][inline] {\n  margin: 0;\n}\n\nstellar-toggle-option[type*=\"block\"][inline] label {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n\nstellar-toggle-option[type*=\"block\"][size=\"small\"] label {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n\nstellar-toggle-option[type*=\"block\"][checked] {\n  z-index: 3;\n  border-color: var(--background);\n}\n\nstellar-toggle-option[type*=\"block\"][checked] .box {\n  border: 0;\n  -webkit-box-shadow: 0 0 0 1px var(--border);\n  box-shadow: 0 0 0 1px var(--border);\n  background: var(--background);\n  color: white;\n}\n\nstellar-toggle-option[type=\"radio-block\"] .box .active {\n  -webkit-transform: translate(-50%, -50%) scale(1);\n  transform: translate(-50%, -50%) scale(1);\n  background: var(--theme-base5);\n  width: calc(100% - 0.5rem);\n  height: calc(100% - 0.5rem);\n  border-radius: 100%;\n}\n\nstellar-toggle-option[type=\"radio-block\"][checked] .box .indicator {\n  background: white;\n}\n\nstellar-toggle-option[inline] {\n  margin-top: 0;\n  margin-right: 3rem;\n}\n\nstellar-toggle-option[single] {\n  margin: 0;\n}\n\nstellar-toggle-option[inline] label {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n\nstellar-toggle-option[single] .box {\n  margin: 0;\n}\n\nstellar-toggle-option[disabled] {\n  opacity: 0.75;\n  -webkit-filter: grayscale(100%);\n  filter: grayscale(100%);\n  pointer-events: none;\n}\n\nstellar-toggle-option copy-wrap * {\n  color: var(--black);\n}\n\n.dark-mode stellar-toggle-option {\n  --background: var(--black-alt);\n  --hover-background: var(--black-alt);\n  --border: var(--gray9)\n}\n\n.dark-mode stellar-toggle-option copy-wrap * {\n  color: white;\n}\n\n\n.dark-mode stellar-toggle-option .box {\n  background: var(--black)\n}\n\n.dark-mode stellar-toggle-option[type*=\"checkbox\"] .box .active stellar-asset {\n  color: var(--black);\n}"; }
}

export { ToggleOption as stellar_toggle_option };
