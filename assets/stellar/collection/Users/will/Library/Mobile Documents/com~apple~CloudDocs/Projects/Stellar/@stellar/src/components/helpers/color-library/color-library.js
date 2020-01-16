import { Component, h, Prop, Host } from '@stencil/core';
import { colors } from '../../../utils';
export class ColorLibrary {
    constructor() {
        this._colors = colors;
        this.hexStyle = color => `fw6 ttu tc ${color === "base" ? "black" : "base"} aspect-ratio--object flex items-center justify-center`;
    }
    componentWillLoad() {
        if (typeof this.colors === "string" && this.colors.constructor.name === "String") {
            this._colors = JSON.parse(this.colors);
        }
    }
    renderColorPallette(color) {
        const range = this._colors[color];
        return [
            h("stellar-grid", { cols: "6", class: "pa4" }, range.map((code, index) => {
                return (h("stellar-card", { padding: "tiny", class: `theme-${color} s-${this.shape}`, style: { "--background": `var(--theme-base${index})`, "--border": "none" } },
                    h("section", { class: "aspect-ratio aspect-ratio--1x1" },
                        h("h6", { class: this.hexStyle(`theme-base${index}`) }, code))));
            }))
        ];
    }
    render() {
        return (h(Host, null,
            h("stellar-grid", { class: "pa4" },
                this._colors.base && h("stellar-card", { padding: "tiny", class: `s-${this.shape}`, style: { "--background": `var(--base)`, "--border": "none" } },
                    h("section", { class: "aspect-ratio aspect-ratio--1x1" },
                        h("h6", { class: this.hexStyle(`base`) }, this._colors.base))),
                this._colors.white && h("stellar-card", { padding: "tiny", class: `s-${this.shape}`, style: { "--background": `var(--white)`, "--border": "none" } },
                    h("section", { class: "aspect-ratio aspect-ratio--1x1 flex items-center" },
                        h("h6", { class: this.hexStyle(`white`) }, this._colors.white))),
                this._colors.black && h("stellar-card", { padding: "tiny", class: `s-${this.shape}`, style: { "--background": `var(--black)`, "--border": "none" } },
                    h("section", { class: "aspect-ratio aspect-ratio--1x1 flex items-center" },
                        h("h6", { class: this.hexStyle(`black`) }, this._colors.black))),
                this._colors["black-alt"] && h("stellar-card", { padding: "tiny", class: `s-${this.shape}`, style: { "--background": `var(--black-alt)`, "--border": "none" } },
                    h("section", { class: "aspect-ratio aspect-ratio--1x1 flex items-center" },
                        h("h6", { class: this.hexStyle('black-alt') }, this._colors["black-alt"])))),
            this._colors.gray && this.renderColorPallette("gray"),
            this._colors.red && this.renderColorPallette("red"),
            this._colors.orange && this.renderColorPallette("orange"),
            this._colors.yellow && this.renderColorPallette("yellow"),
            this._colors.lime && this.renderColorPallette("lime"),
            this._colors.green && this.renderColorPallette("green"),
            this._colors.teal && this.renderColorPallette("teal"),
            this._colors.cyan && this.renderColorPallette("cyan"),
            this._colors.blue && this.renderColorPallette("blue"),
            this._colors.indigo && this.renderColorPallette("indigo"),
            this._colors.violet && this.renderColorPallette("violet"),
            this._colors.fuschia && this.renderColorPallette("fuschia"),
            this._colors.pink && this.renderColorPallette("pink")));
    }
    static get is() { return "stellar-color-library"; }
    static get originalStyleUrls() { return {
        "$": ["color-library.css"]
    }; }
    static get styleUrls() { return {
        "$": ["color-library.css"]
    }; }
    static get properties() { return {
        "colors": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "colors",
            "reflect": false
        },
        "shape": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "shape",
            "reflect": false
        }
    }; }
}
