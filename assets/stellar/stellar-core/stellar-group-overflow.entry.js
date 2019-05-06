import { c as registerInstance, d as h, f as getElement } from './stellar-core-d63b686e.js';

class GroupOverflow {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.size = "medium";
    }
    render() {
        return (h("div", { class: "wrapper" }, h("div", { class: "content" }, h("div", { class: "count" }, "+", this.count, " more"), h("div", { class: "spacer" })), h("stellar-tooltip", null, h("slot", null))));
    }
    get element() { return getElement(this); }
    static get style() { return ":host, :host *, :host *:before, :host *:after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:host {\n  display: inline-block;\n  width: calc(var(--group-overflow-size) * 2);\n  max-height: var(--group-overflow-size);\n  font-size: var(--group-overflow-font-size);\n  --group-overflow-size: 2.2em;\n  --group-overflow-font-size: 1.8rem;\n}\n\n:host([size=\"large\"]) {\n  --group-overflow-font-size: 3.6rem;\n}\n\n:host([size=\"medium\"]) {\n  --group-overflow-font-size: 1.8rem;\n}\n\n:host([size=\"small\"]) {\n  --group-overflow-font-size: 1rem;\n}\n\n:host([size=\"tiny\"]) {\n  --group-overflow-font-size: .8rem;\n}\n\n:host .wrapper {\n  display: block;\n  position: relative;\n  z-index: 0;\n  width: 100%;\n  max-width: calc(var(--group-overflow-size) * 2);\n  font: inherit;\n  font-size: var(--group-overflow-font-size);\n}\n\n:host .content {\n  overflow: hidden;\n  position: relative;\n}\n\n:host .spacer {\n  display: block;\n  padding-top: 50%;\n  width: 100%;\n  height: 0;\n}\n\n:host .count {\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  text-align: left;\n  line-height: 100%;\n  padding: 0.2em 0.4em;\n  color: var(--theme-complement9);\n  font-size: calc(var(--group-overflow-font-size) * .825);\n  font-weight: 600;\n}"; }
}

export { GroupOverflow as stellar_group_overflow };
