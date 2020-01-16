import { r as registerInstance, h, g as getElement } from './index-cc4604b3.js';
import './_commonjsHelpers-bccf23a2.js';
import { p as properties } from './css-custom-properties.min-d9d14253.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-dbf484eb.js';

const TagCss = ":host {\n  contain: content;\n  display: inline-block;\n  --color: var(--color, var(--white));\n  --background-color: var(--background-color, var(--blue5));\n}\n\n:host([color*=\"0\"]),\n:host([color*=\"1\"]),\n:host([color*=\"2\"]),\n:host([color*=\"3\"]),\n:host([color*=\"4\"]) {\n  --color: var(--black) !important;\n}\n\n:host .tag {\n  display: block;\n  border: 2px solid var(--background-color);\n  background-color: var(--background-color);\n  padding: 0 var(--ms-6);\n  text-transform: uppercase;\n  white-space: nowrap;\n  color: var(--color);\n  font-weight: 700;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 0;\n}\n\n:host([size=\"tiny\"]) .tag {\n  padding: 0 var(--ms-8);\n}\n\n:host([size=\"small\"]) .tag {\n  padding: 0 var(--ms-7);\n}\n\n:host([size=\"medium\"]) .tag {\n  padding: 0 var(--ms-5);\n}\n\n:host([size=\"large\"]) .tag {\n  padding: 0 var(--ms-4);\n\n}\n\n:host([pill]) .tag {\n  border-radius: 5rem;\n}\n\n:host([dark][color*=\"5\"]),\n:host([dark][color*=\"6\"]),\n:host([dark][color*=\"7\"]),\n:host([dark][color*=\"8\"]),\n:host([dark][color*=\"9\"]) {\n  --color: var(--black) !important;\n}\n";

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
