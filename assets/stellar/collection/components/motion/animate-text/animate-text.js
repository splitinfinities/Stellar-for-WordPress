import { h } from '@stencil/core';
// import { blurringEase } from '../../../utils';
export class AnimateText {
    constructor() {
        this.method = "lettering";
        this.verticalBlur = 0;
        this.horizontalBlur = 0;
    }
    blurHorizontal() {
        // blurringEase((e: number) => {
        //   this.horizontalBlur = e * 4
        // }, 450, 0, 'exponential', { invert: true })
    }
    blurVertical() {
        // blurringEase((e: number) => {
        //   this.verticalBlur = e * 4
        // }, 450, 0, 'exponential', { invert: true })
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
    static get originalStyleUrls() { return {
        "$": ["animate-text.css"]
    }; }
    static get styleUrls() { return {
        "$": ["animate-text.css"]
    }; }
    static get properties() { return {
        "method": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string|\"glitch\"|\"lettering\"|\"weight\"|\"fade\"",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "method",
            "reflect": false,
            "defaultValue": "\"lettering\""
        }
    }; }
    static get states() { return {
        "verticalBlur": {},
        "horizontalBlur": {}
    }; }
    static get elementRef() { return "element"; }
}
