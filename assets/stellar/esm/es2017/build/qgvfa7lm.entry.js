import { h } from '../stellar-core.core.js';

import './chunk-7646164d.js';
import { a as properties } from './chunk-340b8099.js';

class Tag {
    constructor() {
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
        return (h("stellar-label", { class: "tag" },
            h("slot", null)));
    }
    static get is() { return "stellar-tag"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "element": {
            "elementRef": true
        },
        "outline": {
            "type": Boolean,
            "attr": "outline",
            "reflectToAttr": true
        },
        "pill": {
            "type": Boolean,
            "attr": "pill",
            "reflectToAttr": true
        },
        "size": {
            "type": String,
            "attr": "size",
            "reflectToAttr": true
        },
        "textColor": {
            "type": String,
            "attr": "text-color"
        }
    }; }
    static get style() { return ":host{display:inline-block;--font-size:1rem;--color:var(--color,var(--white));--background-color:var(--background-color,var(--blue5))}:host([size=tiny]){--font-size:.625rem}:host([size=small]){--font-size:.825rem}:host([size=medium]){--font-size:1.25rem}:host([size=large]){--font-size:1.5rem}:host([color*=\"0\"]),:host([color*=\"1\"]),:host([color*=\"2\"]),:host([color*=\"3\"]),:host([color*=\"4\"]){--color:var(--black)!important}:host .tag{display:block;border:2px solid var(--background-color);background-color:var(--background-color);padding:.175em .55em .2em;text-transform:uppercase;line-height:1;letter-spacing:.125em;white-space:nowrap;color:var(--color);font-size:var(--font-size);font-weight:700;overflow:hidden;text-overflow:ellipsis;margin:0}:host([pill]) .tag{border-radius:5rem}:host-context(.dark-mode):host([color*=\"5\"]),:host-context(.dark-mode):host([color*=\"6\"]),:host-context(.dark-mode):host([color*=\"7\"]),:host-context(.dark-mode):host([color*=\"8\"]),:host-context(.dark-mode):host([color*=\"9\"]){--color:var(--black)!important}:host-context(.dark-mode):host([color*=\"\"])"; }
}

export { Tag as StellarTag };
