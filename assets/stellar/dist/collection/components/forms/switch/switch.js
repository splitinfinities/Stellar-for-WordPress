export class Switch {
    constructor() {
        this.checked = false;
        this.checkedDefault = false;
    }
    componentDidLoad() {
        if (this.checkedDefault) {
            this.checked = this.checkedDefault;
        }
    }
    async activate() {
        this.checked = !this.checked;
    }
    handleChecked() {
        this.change.emit({
            checked: this.checked
        });
    }
    render() {
        return (h("label", { class: "label" },
            h("input", { type: "checkbox", checked: this.checked, tabindex: "-1", onClick: () => { this.activate(); } }),
            h("button", { onClick: () => { this.activate(); } },
                h("span", null,
                    this.checked && h("stellar-asset", { name: "checkmark" }),
                    !this.checked && h("stellar-asset", { name: "close" }))),
            h("slot", null)));
    }
    static get is() { return "stellar-switch"; }
    static get properties() { return {
        "activate": {
            "method": true
        },
        "checked": {
            "type": Boolean,
            "attr": "checked",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["handleChecked"]
        },
        "checkedDefault": {
            "type": Boolean,
            "attr": "checked-default"
        },
        "el": {
            "elementRef": true
        }
    }; }
    static get events() { return [{
            "name": "change",
            "method": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:stellar-switch:**/"; }
}
