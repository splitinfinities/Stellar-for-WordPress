import { c as registerInstance, d as h, f as getElement } from './stellar-core-d63b686e.js';
import './chunk-452e3210.js';
import { a as properties } from './chunk-aefb00c1.js';

class Tag {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.pill = false;
        this.outline = false;
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
        return (h("stellar-label", { class: "tag" }, h("slot", null)));
    }
    get element() { return getElement(this); }
    static get style() { return ":host {\n  display: inline-block;\n  --font-size: 1rem;\n  --color: var(--color, var(--white));\n  --background-color: var(--background-color, var(--blue5));\n}\n\n:host([size=\"tiny\"]) {\n  --font-size: .625rem;\n}\n\n:host([size=\"small\"]) {\n  --font-size: .825rem;\n}\n\n:host([size=\"medium\"]) {\n  --font-size: 1.25rem;\n}\n\n:host([size=\"large\"]) {\n  --font-size: 1.5rem;\n}\n\n:host([color*=\"0\"]),\n:host([color*=\"1\"]),\n:host([color*=\"2\"]),\n:host([color*=\"3\"]),\n:host([color*=\"4\"]) {\n  --color: var(--black) !important;\n}\n\n:host .tag {\n  display: block;\n  border: 2px solid var(--background-color);\n  background-color: var(--background-color);\n  padding: .175em .55em .2em;\n  text-transform: uppercase;\n  line-height: 1;\n  letter-spacing: 0.125em;\n  white-space: nowrap;\n  color: var(--color);\n  font-size: var(--font-size);\n  font-weight: 700;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 0;\n}\n\n:host([pill]) .tag {\n  border-radius: 5rem;\n}\n\n\n:host-context(.dark-mode):host([color*=\"5\"]),\n:host-context(.dark-mode):host([color*=\"6\"]),\n:host-context(.dark-mode):host([color*=\"7\"]),\n:host-context(.dark-mode):host([color*=\"8\"]),\n:host-context(.dark-mode):host([color*=\"9\"]) {\n  --color: var(--black) !important;\n}\n\n:host-context(.dark-mode):host([color*=\"\"])"; }
}

export { Tag as stellar_tag };
