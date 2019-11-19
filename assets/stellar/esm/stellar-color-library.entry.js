import { d as registerInstance, f as h } from './stellar-core-1e602ba1.js';
import './chunk-40f083d9.js';
import './chunk-d0cf38d8.js';
import { b as colors } from './chunk-27460e3f.js';
import './chunk-f26db59a.js';
import './chunk-cf2c1f95.js';

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
