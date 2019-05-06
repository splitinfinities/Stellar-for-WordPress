import { blurringEase } from "../../../utils";
export class ToggleOption {
    constructor() {
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
            return (h("div", { class: this.focused ? "box focused" : "box" },
                h("div", { class: this.checked ? "indicator active" : "indicator" }, this.type === "checkbox" && h("stellar-asset", { name: "checkmark" }))));
        }
    }
    renderRadioBlock() {
        if (this.type === "radio-block") {
            return (h("div", { class: "wrapper" },
                h("div", { class: this.focused ? "box focused" : "box" },
                    h("div", { class: this.checked ? "indicator active" : "indicator" })),
                h("div", { class: "block-content" },
                    h("slot", null))));
        }
    }
    renderCheckBlock() {
        if (this.type === "checkbox-block") {
            return (h("div", { class: "wrapper" },
                h("div", { class: this.focused ? "box focused" : "box" },
                    h("div", { class: this.checked ? "indicator active" : "indicator" },
                        h("stellar-asset", { name: "checkmark", block: true }))),
                h("div", { class: "block-content" },
                    h("slot", null))));
        }
    }
    render() {
        return (h("label", null,
            h("input", { type: "hidden", name: `${this.for}[${this.name}]`, value: this.default }),
            h("input", { class: "input", type: this._type, id: `${this.for}_${this.name}_${this.value}`, name: `${this.for}[${this.name}]`, checked: this.checked, value: this.value, required: this.required, onChange: e => this.onToggleChange(e), onFocus: () => this.onFocus(), onBlur: () => this.onBlur(), onKeyUp: e => this.onKeyUp(e), onClick: e => { e.stopPropagation(); } }),
            this.renderCheckbox(),
            ["radio", "checkbox"].indexOf(this.type) !== -1 && h("p", null,
                h("slot", null)),
            this.renderRadioBlock(),
            this.renderCheckBlock(),
            ["radio", "checkbox"].indexOf(this.type) === -1 &&
                h("stellar-blur", { horizontal: this.blur, class: this.checked ? "status active" : "status" },
                    h("stellar-tag", { size: "small", color: "theme-base5" }, this.selectedCopy)),
            this.tooltip && h("stellar-tooltip", { align: "bottom-left" }, this.tooltip)));
    }
    static get is() { return "stellar-toggle-option"; }
    static get properties() { return {
        "_type": {
            "state": true
        },
        "blur": {
            "state": true
        },
        "checked": {
            "type": Boolean,
            "attr": "checked",
            "reflectToAttr": true,
            "mutable": true
        },
        "checkedDefault": {
            "type": Boolean,
            "attr": "checked-default"
        },
        "confirm": {
            "method": true
        },
        "default": {
            "type": String,
            "attr": "default"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "reflectToAttr": true,
            "mutable": true
        },
        "ease": {
            "state": true
        },
        "element": {
            "elementRef": true
        },
        "focused": {
            "state": true
        },
        "for": {
            "type": String,
            "attr": "for"
        },
        "icon": {
            "type": Boolean,
            "attr": "icon",
            "reflectToAttr": true
        },
        "inline": {
            "type": Boolean,
            "attr": "inline"
        },
        "input": {
            "state": true
        },
        "name": {
            "type": String,
            "attr": "name",
            "reflectToAttr": true,
            "mutable": true
        },
        "required": {
            "type": Boolean,
            "attr": "required"
        },
        "selectedCopy": {
            "type": String,
            "attr": "selected-copy"
        },
        "single": {
            "type": Boolean,
            "attr": "single",
            "reflectToAttr": true
        },
        "size": {
            "type": Boolean,
            "attr": "size"
        },
        "tooltip": {
            "type": String,
            "attr": "tooltip",
            "mutable": true
        },
        "type": {
            "type": String,
            "attr": "type",
            "reflectToAttr": true
        },
        "updateSelected": {
            "method": true
        },
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
    static get events() { return [{
            "name": "change",
            "method": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:stellar-toggle-option:**/"; }
}
