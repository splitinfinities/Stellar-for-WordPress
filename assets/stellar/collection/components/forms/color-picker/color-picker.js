import { colors } from '../../../utils';
import properties from 'css-custom-properties';
export class ColorPicker {
    constructor() {
        this.val = "none";
    }
    componentWillLoad() {
        this.options = Object.keys(colors).filter((color) => {
            return !["base", "white", "black"].includes(color);
        });
        properties.set({
            "--selected-color": `var(--${this.val}5)`
        }, this.element);
    }
    valueChangedHandler(val) {
        this.change.emit(val);
        properties.set({
            "--selected-color": `var(--${this.val}5)`
        }, this.element);
    }
    updateValue(color) {
        this.val = color;
    }
    render() {
        return h("div", { class: "wrap" },
            this.options.map(option => h("button", { value: option, class: option, style: { "background": `var(--${option}5)` }, onClick: () => { this.updateValue(option); } })),
            h("button", { value: "none", class: "none", style: { "background": `var(--white)` }, onClick: () => { this.updateValue("none"); } }),
            h("div", { class: "placeholder" }));
    }
    static get is() { return "stellar-color-picker"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "element": {
            "elementRef": true
        },
        "options": {
            "state": true
        },
        "val": {
            "type": String,
            "attr": "val",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["valueChangedHandler"]
        }
    }; }
    static get events() { return [{
            "name": "change",
            "method": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:stellar-color-picker:**/"; }
}
