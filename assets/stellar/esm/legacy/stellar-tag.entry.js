import { d as registerInstance, f as h, g as getElement } from './stellar-core-1e602ba1.js';
import './chunk-40f083d9.js';
import { a as properties } from './chunk-d0cf38d8.js';
var Tag = /** @class */ (function () {
    function Tag(hostRef) {
        registerInstance(this, hostRef);
        this.pill = false;
        this.outline = false;
        this.color = "cyan5";
        this.textColor = "white";
    }
    Tag.prototype.componentWillLoad = function () {
        properties.set({
            '--background-color': "var(--" + this.color + ")",
            '--color': "var(--" + this.textColor + ")",
        }, this.element);
    };
    Tag.prototype.render = function () {
        return (h("stellar-label", { class: "tag" }, h("slot", null)));
    };
    Object.defineProperty(Tag.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tag, "style", {
        get: function () { return ":host{display:inline-block;--font-size:1rem;--color:var(--color,var(--white));--background-color:var(--background-color,var(--blue5))}:host([size=tiny]){--font-size:.625rem}:host([size=small]){--font-size:.825rem}:host([size=medium]){--font-size:1.25rem}:host([size=large]){--font-size:1.5rem}:host([color*=\"0\"]),:host([color*=\"1\"]),:host([color*=\"2\"]),:host([color*=\"3\"]),:host([color*=\"4\"]){--color:var(--black)!important}:host .tag{display:block;border:2px solid var(--background-color);background-color:var(--background-color);padding:.175em .55em .2em;text-transform:uppercase;line-height:1;letter-spacing:.125em;white-space:nowrap;color:var(--color);font-size:var(--font-size);font-weight:700;overflow:hidden;text-overflow:ellipsis;margin:0}:host([pill]) .tag{border-radius:5rem}:host-context(.dark-mode):host([color*=\"5\"]),:host-context(.dark-mode):host([color*=\"6\"]),:host-context(.dark-mode):host([color*=\"7\"]),:host-context(.dark-mode):host([color*=\"8\"]),:host-context(.dark-mode):host([color*=\"9\"]){--color:var(--black)!important}:host-context(.dark-mode):host([color*=\"\"])"; },
        enumerable: true,
        configurable: true
    });
    return Tag;
}());
export { Tag as stellar_tag };
