'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');
const index$1 = require('./index-d326a972.js');
require('./_commonjsHelpers-3fc1f64e.js');
require('./css-custom-properties.min-d46e7f9d.js');
require('./main-6214461c.js');
require('./moment-fd045425.js');

const ColorLibraryCss = "stellar-color-library{contain:content}";

const ColorLibrary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this._colors = index$1.colors;
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
            index.h("stellar-grid", { cols: "6", class: "pa4" }, range.map((code, index$1) => {
                return (index.h("stellar-card", { padding: "tiny", class: `theme-${color} s-${this.shape}`, style: { "--background": `var(--theme-base${index$1})`, "--border": "none" } }, index.h("section", { class: "aspect-ratio aspect-ratio--1x1" }, index.h("h6", { class: this.hexStyle(`theme-base${index$1}`) }, code))));
            }))
        ];
    }
    render() {
        return (index.h(index.Host, null, index.h("stellar-grid", { class: "pa4" }, this._colors.base && index.h("stellar-card", { padding: "tiny", class: `s-${this.shape}`, style: { "--background": `var(--base)`, "--border": "none" } }, index.h("section", { class: "aspect-ratio aspect-ratio--1x1" }, index.h("h6", { class: this.hexStyle(`base`) }, this._colors.base))), this._colors.white && index.h("stellar-card", { padding: "tiny", class: `s-${this.shape}`, style: { "--background": `var(--white)`, "--border": "none" } }, index.h("section", { class: "aspect-ratio aspect-ratio--1x1 flex items-center" }, index.h("h6", { class: this.hexStyle(`white`) }, this._colors.white))), this._colors.black && index.h("stellar-card", { padding: "tiny", class: `s-${this.shape}`, style: { "--background": `var(--black)`, "--border": "none" } }, index.h("section", { class: "aspect-ratio aspect-ratio--1x1 flex items-center" }, index.h("h6", { class: this.hexStyle(`black`) }, this._colors.black))), this._colors["black-alt"] && index.h("stellar-card", { padding: "tiny", class: `s-${this.shape}`, style: { "--background": `var(--black-alt)`, "--border": "none" } }, index.h("section", { class: "aspect-ratio aspect-ratio--1x1 flex items-center" }, index.h("h6", { class: this.hexStyle('black-alt') }, this._colors["black-alt"])))), this._colors.gray && this.renderColorPallette("gray"), this._colors.red && this.renderColorPallette("red"), this._colors.orange && this.renderColorPallette("orange"), this._colors.yellow && this.renderColorPallette("yellow"), this._colors.lime && this.renderColorPallette("lime"), this._colors.green && this.renderColorPallette("green"), this._colors.teal && this.renderColorPallette("teal"), this._colors.cyan && this.renderColorPallette("cyan"), this._colors.blue && this.renderColorPallette("blue"), this._colors.indigo && this.renderColorPallette("indigo"), this._colors.violet && this.renderColorPallette("violet"), this._colors.fuschia && this.renderColorPallette("fuschia"), this._colors.pink && this.renderColorPallette("pink")));
    }
    static get style() { return ColorLibraryCss; }
};

exports.stellar_color_library = ColorLibrary;
