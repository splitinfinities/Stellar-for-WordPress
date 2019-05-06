export class Asset {
    constructor() {
        this.name = "person";
        this.language = "ios-";
        this.block = false;
    }
    componentWillLoad() {
        this.ariaLabel = this.name
            .replace('ios-', '')
            .replace('md-', '')
            .replace(/\-/g, ' ');
    }
    render() {
        return (h("div", { class: "icon-wrap" },
            h("ion-icon", { src: !this.name && this.src ? this.src : undefined, name: !this.src && this.name ? this.language + this.name : undefined, ariaLabel: this.ariaLabel, "aria-label": this.ariaLabel })));
    }
    static get is() { return "stellar-asset"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "align": {
            "type": String,
            "attr": "align",
            "reflectToAttr": true
        },
        "ariaLabel": {
            "type": String,
            "attr": "aria-label",
            "reflectToAttr": true,
            "mutable": true
        },
        "block": {
            "type": Boolean,
            "attr": "block"
        },
        "language": {
            "type": String,
            "attr": "language",
            "reflectToAttr": true
        },
        "name": {
            "type": String,
            "attr": "name",
            "reflectToAttr": true
        },
        "src": {
            "type": String,
            "attr": "src",
            "reflectToAttr": true
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-asset:**/"; }
}
