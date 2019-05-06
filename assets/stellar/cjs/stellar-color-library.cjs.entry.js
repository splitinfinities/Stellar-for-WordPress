'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-c90f54d2.js');
require('./chunk-ee96ca86.js');
require('./chunk-61a48f92.js');
const __chunk_5 = require('./chunk-3ed86bb7.js');
require('./chunk-e7b3928a.js');

class ColorLibrary {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    renderColorPallette(color) {
        const range = __chunk_5.colors[color];
        return [
            __chunk_1.h("stellar-grid", { cols: "6" }, range.map((code, index) => {
                return (__chunk_1.h("stellar-card", { padding: "tiny" }, __chunk_1.h("div", { class: `aspect-ratio aspect-ratio--16x9 flex items-center justify-around`, style: { "background-color": `var(--${color}${index})` } }, __chunk_1.h("div", { class: "aspect-ratio--object flex items-center justify-around " }, __chunk_1.h("h5", { class: `f-invert fw6 ttu ${color}${index}` }, code))), __chunk_1.h("div", { class: "pv3 ph4 tc nt4 bg-white relative" }, __chunk_1.h("div", { class: "dt w-100" }, __chunk_1.h("div", { class: "dtc" }, __chunk_1.h("p", { class: "f5 f4-ns mv0 black" }, "var(--", color, index, ")"))))));
            }))
        ];
    }
    render() {
        return (__chunk_1.h("div", null, this.renderColorPallette("gray"), this.renderColorPallette("red"), this.renderColorPallette("orange"), this.renderColorPallette("yellow"), this.renderColorPallette("lime"), this.renderColorPallette("green"), this.renderColorPallette("teal"), this.renderColorPallette("cyan"), this.renderColorPallette("blue"), this.renderColorPallette("indigo"), this.renderColorPallette("violet"), this.renderColorPallette("fuchsia"), this.renderColorPallette("pink")));
    }
    static get style() { return ""; }
}

exports.stellar_color_library = ColorLibrary;
