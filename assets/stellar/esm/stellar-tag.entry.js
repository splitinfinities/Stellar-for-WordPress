import { r as registerInstance, h, d as getElement } from './index-bcfb4a9f.js';
import './_commonjsHelpers-ae1b5db5.js';
import { p as properties } from './css-custom-properties.min-dfcc36c1.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-0e374e95.js';

const TagCss = ":host{contain:content;display:inline-block;--color:var(--color, var(--white));--background-color:var(--background-color, var(--blue5))}:host([color*=\"0\"]),:host([color*=\"1\"]),:host([color*=\"2\"]),:host([color*=\"3\"]),:host([color*=\"4\"]){--color:var(--black) !important}:host .tag{display:block;border:2px solid var(--background-color);background-color:var(--background-color);padding:0 var(--ms-6);text-transform:uppercase;white-space:nowrap;color:var(--color);font-weight:700;overflow:hidden;text-overflow:ellipsis;margin:0}:host([size=\"tiny\"]) .tag{padding:0 var(--ms-8)}:host([size=\"small\"]) .tag{padding:0 var(--ms-7)}:host([size=\"medium\"]) .tag{padding:0 var(--ms-5)}:host([size=\"large\"]) .tag{padding:0 var(--ms-4)}:host([pill]) .tag{border-radius:5rem}:host([dark][color*=\"5\"]),:host([dark][color*=\"6\"]),:host([dark][color*=\"7\"]),:host([dark][color*=\"8\"]),:host([dark][color*=\"9\"]){--color:var(--black) !important}";

const Tag = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.pill = false;
        this.outline = false;
        this.dark = false;
        this.color = "cyan5";
        this.textColor = "white";
    }
    componentWillLoad() {
        properties.set({
            '--background-color': `var(--${this.color})`,
            '--color': `var(--${this.textColor})`,
        }, this.element);
    }
    render() {
        return (h("stellar-label", { class: "tag", size: this.size }, h("slot", null)));
    }
    get element() { return getElement(this); }
    static get style() { return TagCss; }
};
Tunnel.injectProps(Tag, ['dark']);

export { Tag as stellar_tag };
