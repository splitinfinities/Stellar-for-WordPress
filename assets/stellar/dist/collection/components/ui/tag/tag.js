import properties from 'css-custom-properties';
export class Tag {
    constructor() {
        this.pill = false;
        this.outline = false;
        this.color = "cyan5";
        this.textColor = "white";
    }
    componentWillLoad() {
        properties.set({
            '--background-color': `var(--${this.color})`,
            '--color': `var(--${this.textColor})`,
        }, this.element);
    }
    render() {
        return (h("stellar-label", { class: "tag" },
            h("slot", null)));
    }
    static get is() { return "stellar-tag"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "element": {
            "elementRef": true
        },
        "outline": {
            "type": Boolean,
            "attr": "outline",
            "reflectToAttr": true
        },
        "pill": {
            "type": Boolean,
            "attr": "pill",
            "reflectToAttr": true
        },
        "size": {
            "type": String,
            "attr": "size",
            "reflectToAttr": true
        },
        "textColor": {
            "type": String,
            "attr": "text-color"
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-tag:**/"; }
}
