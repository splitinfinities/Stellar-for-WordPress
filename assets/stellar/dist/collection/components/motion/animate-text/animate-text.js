export class AnimateText {
    constructor() {
        this.method = "lettering";
        this.verticalBlur = 0;
        this.horizontalBlur = 0;
    }
    blurHorizontal() {
    }
    blurVertical() {
    }
    componentWillLoad() {
        if (this.method === "lettering") {
            this.horizontalBlur = 4;
        }
    }
    componentDidLoad() {
        if (this.method === "lettering") {
            this.blurHorizontal();
        }
    }
    render() {
        return (h("stellar-blur", { vertical: this.verticalBlur, horizontal: this.horizontalBlur },
            h("slot", null)));
    }
    static get is() { return "stellar-animate-text"; }
    static get properties() { return {
        "element": {
            "elementRef": true
        },
        "horizontalBlur": {
            "state": true
        },
        "method": {
            "type": String,
            "attr": "method"
        },
        "verticalBlur": {
            "state": true
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-animate-text:**/"; }
}
