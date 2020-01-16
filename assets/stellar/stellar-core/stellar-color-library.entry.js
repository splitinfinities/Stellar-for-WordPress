import { r as registerInstance, h, H as Host } from './index-cc4604b3.js';
import { c as colors } from './colors-eb996d31.js';
import './_commonjsHelpers-bccf23a2.js';
import './css-custom-properties.min-d9d14253.js';
import './index-26976b63.js';
import './main-e9832563.js';
import './moment-5e7e00c2.js';

const ColorLibraryCss = "stellar-color-library {\n  contain: content;\n}\n";

const ColorLibrary = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
                return (h("stellar-card", { padding: "tiny", class: `theme-${color} s-${this.shape}`, style: { "--background": `var(--theme-base${index})`, "--border": "none" } }, h("section", { class: "aspect-ratio aspect-ratio--1x1" }, h("h6", { class: this.hexStyle(`theme-base${index}`) }, code))));
            }))
        ];
    }
    render() {
        return (h(Host, null, h("stellar-grid", { class: "pa4" }, this._colors.base && h("stellar-card", { padding: "tiny", class: `s-${this.shape}`, style: { "--background": `var(--base)`, "--border": "none" } }, h("section", { class: "aspect-ratio aspect-ratio--1x1" }, h("h6", { class: this.hexStyle(`base`) }, this._colors.base))), this._colors.white && h("stellar-card", { padding: "tiny", class: `s-${this.shape}`, style: { "--background": `var(--white)`, "--border": "none" } }, h("section", { class: "aspect-ratio aspect-ratio--1x1 flex items-center" }, h("h6", { class: this.hexStyle(`white`) }, this._colors.white))), this._colors.black && h("stellar-card", { padding: "tiny", class: `s-${this.shape}`, style: { "--background": `var(--black)`, "--border": "none" } }, h("section", { class: "aspect-ratio aspect-ratio--1x1 flex items-center" }, h("h6", { class: this.hexStyle(`black`) }, this._colors.black))), this._colors["black-alt"] && h("stellar-card", { padding: "tiny", class: `s-${this.shape}`, style: { "--background": `var(--black-alt)`, "--border": "none" } }, h("section", { class: "aspect-ratio aspect-ratio--1x1 flex items-center" }, h("h6", { class: this.hexStyle('black-alt') }, this._colors["black-alt"])))), this._colors.gray && this.renderColorPallette("gray"), this._colors.red && this.renderColorPallette("red"), this._colors.orange && this.renderColorPallette("orange"), this._colors.yellow && this.renderColorPallette("yellow"), this._colors.lime && this.renderColorPallette("lime"), this._colors.green && this.renderColorPallette("green"), this._colors.teal && this.renderColorPallette("teal"), this._colors.cyan && this.renderColorPallette("cyan"), this._colors.blue && this.renderColorPallette("blue"), this._colors.indigo && this.renderColorPallette("indigo"), this._colors.violet && this.renderColorPallette("violet"), this._colors.fuschia && this.renderColorPallette("fuschia"), this._colors.pink && this.renderColorPallette("pink")));
    }
    static get style() { return ColorLibraryCss; }
};

export { ColorLibrary as stellar_color_library };
