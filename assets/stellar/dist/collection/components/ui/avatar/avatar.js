import { titleCase, colors } from '../../../utils';
export class Avatar {
    constructor() {
        this.tooltip = false;
        this.size = "medium";
        this.color = "auto";
        this.name = "Stellar";
        this.initials = "ST";
        this.shape = "square";
        this.processing = false;
        this.colorAuto = false;
    }
    componentWillLoad() {
        this.colors = Object.keys(colors).filter((color) => {
            return !["base", "white", "black"].includes(color);
        });
        if (this.color === "auto") {
            this.colorAuto = true;
        }
        this.formatName();
    }
    hostData() {
        return {
            class: `theme-${this.color}`
        };
    }
    formatName() {
        if (this.processing) {
            this.initials = "";
            return;
        }
        if (this.color === "auto" || this.colorAuto) {
            this.colorAuto = true;
            this.color = this.colors[this.name.length % this.colors.length];
        }
        if (!this.name.length) {
            this.initials = "ST";
        }
        else {
            var the_name = titleCase(this.name);
            if (this.size === "large" || this.size === "medium") {
                this.initials = the_name.replace(/[^A-Z]/g, '').substring(0, 2);
            }
            else {
                this.initials = the_name.substring(0, 1);
            }
        }
        if (this.shape === "star" || this.shape === "diamond") {
            this.initials = this.initials.substring(0, 1);
        }
    }
    render() {
        return (h("button", { class: "wrapper", title: `You tabbed on an Avatar for ${this.name}` },
            this.processing && h("div", { class: "processing" },
                h("stellar-avatar", { src: "Loading" })),
            h("div", { class: "content" },
                h("div", { class: "spacer" }),
                h("div", { class: "letter", title: this.name }, this.initials),
                this.src && h("img", { src: this.src, alt: this.name })),
            this.tooltip && h("stellar-tooltip", null, this.name)));
    }
    static get is() { return "stellar-avatar"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color",
            "reflectToAttr": true,
            "mutable": true
        },
        "colorAuto": {
            "state": true
        },
        "colors": {
            "state": true
        },
        "element": {
            "elementRef": true
        },
        "initials": {
            "type": String,
            "attr": "initials",
            "reflectToAttr": true,
            "mutable": true
        },
        "name": {
            "type": String,
            "attr": "name",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["formatName"]
        },
        "processing": {
            "type": Boolean,
            "attr": "processing",
            "reflectToAttr": true,
            "mutable": true
        },
        "shape": {
            "type": String,
            "attr": "shape",
            "reflectToAttr": true,
            "mutable": true
        },
        "size": {
            "type": String,
            "attr": "size",
            "reflectToAttr": true,
            "mutable": true
        },
        "src": {
            "type": String,
            "attr": "src"
        },
        "tooltip": {
            "type": Boolean,
            "attr": "tooltip"
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-avatar:**/"; }
}
