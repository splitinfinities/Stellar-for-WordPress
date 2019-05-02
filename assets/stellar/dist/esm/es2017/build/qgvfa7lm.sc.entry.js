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
    static get style() { return ".sc-stellar-tag-h{display:inline-block;--font-size:1rem;--color:var(--color,var(--white));--background-color:var(--background-color,var(--blue5))}[size=tiny].sc-stellar-tag-h{--font-size:.625rem}[size=small].sc-stellar-tag-h{--font-size:.825rem}[size=medium].sc-stellar-tag-h{--font-size:1.25rem}[size=large].sc-stellar-tag-h{--font-size:1.5rem}[color*=\"0\"].sc-stellar-tag-h, [color*=\"1\"].sc-stellar-tag-h, [color*=\"2\"].sc-stellar-tag-h, [color*=\"3\"].sc-stellar-tag-h, [color*=\"4\"].sc-stellar-tag-h{--color:var(--black)!important}.sc-stellar-tag-h   .tag.sc-stellar-tag{display:block;border:2px solid var(--background-color);background-color:var(--background-color);padding:.175em .55em .2em;text-transform:uppercase;line-height:1;letter-spacing:.125em;white-space:nowrap;color:var(--color);font-size:var(--font-size);font-weight:700;overflow:hidden;text-overflow:ellipsis;margin:0}[pill].sc-stellar-tag-h   .tag.sc-stellar-tag{border-radius:5rem}.dark-mode.sc-stellar-tag-h -no-combinator[color*=\"5\"].sc-stellar-tag-h, .dark-mode   .sc-stellar-tag-h -no-combinator[color*=\"5\"].sc-stellar-tag-h, .dark-mode.sc-stellar-tag-h -no-combinator[color*=\"6\"].sc-stellar-tag-h, .dark-mode   .sc-stellar-tag-h -no-combinator[color*=\"6\"].sc-stellar-tag-h, .dark-mode.sc-stellar-tag-h -no-combinator[color*=\"7\"].sc-stellar-tag-h, .dark-mode   .sc-stellar-tag-h -no-combinator[color*=\"7\"].sc-stellar-tag-h, .dark-mode.sc-stellar-tag-h -no-combinator[color*=\"8\"].sc-stellar-tag-h, .dark-mode   .sc-stellar-tag-h -no-combinator[color*=\"8\"].sc-stellar-tag-h, .dark-mode.sc-stellar-tag-h -no-combinator[color*=\"9\"].sc-stellar-tag-h, .dark-mode   .sc-stellar-tag-h -no-combinator[color*=\"9\"].sc-stellar-tag-h{--color:var(--black)!important}.sc-stellar-tag-h.dark-mode.sc-stellar-tag-h[color*=\"\"], .dark-mode .sc-stellar-tag-h.sc-stellar-tag-h[color*=\"\"]"; }
}

export { Tag as StellarTag };
