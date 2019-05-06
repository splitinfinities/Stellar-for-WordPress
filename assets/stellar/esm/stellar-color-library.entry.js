import { c as registerInstance, d as h } from './stellar-core-3af17cd6.js';
import './chunk-c16f1b5d.js';
import './chunk-80aceae1.js';
import { a as colors } from './chunk-a45d5d95.js';
import './chunk-091920a9.js';

class ColorLibrary {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    renderColorPallette(color) {
        const range = colors[color];
        return [
            h("stellar-grid", { cols: "6" }, range.map((code, index) => {
                return (h("stellar-card", { padding: "tiny" }, h("div", { class: `aspect-ratio aspect-ratio--16x9 flex items-center justify-around`, style: { "background-color": `var(--${color}${index})` } }, h("div", { class: "aspect-ratio--object flex items-center justify-around " }, h("h5", { class: `f-invert fw6 ttu ${color}${index}` }, code))), h("div", { class: "pv3 ph4 tc nt4 bg-white relative" }, h("div", { class: "dt w-100" }, h("div", { class: "dtc" }, h("p", { class: "f5 f4-ns mv0 black" }, "var(--", color, index, ")"))))));
            }))
        ];
    }
    render() {
        return (h("div", null, this.renderColorPallette("gray"), this.renderColorPallette("red"), this.renderColorPallette("orange"), this.renderColorPallette("yellow"), this.renderColorPallette("lime"), this.renderColorPallette("green"), this.renderColorPallette("teal"), this.renderColorPallette("cyan"), this.renderColorPallette("blue"), this.renderColorPallette("indigo"), this.renderColorPallette("violet"), this.renderColorPallette("fuchsia"), this.renderColorPallette("pink")));
    }
    static get style() { return ""; }
}

export { ColorLibrary as stellar_color_library };
