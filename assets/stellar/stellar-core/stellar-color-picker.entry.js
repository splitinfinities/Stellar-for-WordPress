import { c as registerInstance, h as createEvent, d as h, f as getElement } from './stellar-core-d63b686e.js';
import './chunk-452e3210.js';
import { a as properties } from './chunk-aefb00c1.js';
import { b as colors } from './chunk-15cea9da.js';
import './chunk-f26db59a.js';

class ColorPicker {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.val = "none";
        this.change = createEvent(this, "change", 7);
    }
    componentWillLoad() {
        this.options = Object.keys(colors).filter((color) => {
            // @ts-ignore
            return !["base", "white", "black"].includes(color);
        });
        properties.set({
            "--selected-color": `var(--${this.val}5)`
        }, this.element);
    }
    valueChangedHandler(val) {
        this.change.emit(val);
        properties.set({
            "--selected-color": `var(--${this.val}5)`
        }, this.element);
    }
    updateValue(color) {
        this.val = color;
    }
    render() {
        return h("div", { class: "wrap" }, this.options.map(option => h("button", { value: option, class: option, style: { "background": `var(--${option}5)` }, onClick: () => { this.updateValue(option); } })), h("button", { value: "none", class: "none", style: { "background": `var(--white)` }, onClick: () => { this.updateValue("none"); } }), h("div", { class: "placeholder" }));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "val": ["valueChangedHandler"]
    }; }
    static get style() { return ":host, :host *, :host *:before, :host *:after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:host {\n  display: block;\n  width: 32px;\n  height: 32px;\n  background: var(--selected-color, var(--red5));\n  border: 2px solid var(--selected-color, var(--red5));\n  border-radius: 100%;\n}\n\n:host .wrap {\n  width: 32px;\n  height: 32px;\n  border-radius: 100%;\n}\n\n:host .placeholder {\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition: opacity 200ms var(--ease, ease-out) 100ms, width 200ms var(--ease, ease-out) 100ms, z-index 200ms var(--ease, ease-out) 100ms;\n  transition: opacity 200ms var(--ease, ease-out) 100ms, width 200ms var(--ease, ease-out) 100ms, z-index 200ms var(--ease, ease-out) 100ms;\n  opacity: 1;\n  z-index: 0;\n  background: white;\n  width: 32px;\n  height: 32px;\n  border-radius: 100%;\n}\n\n:host .placeholder[data-selected=\"true\"] {\n  opacity: 1;\n  z-index: 9;\n}\n\n:host button {\n  cursor: pointer;\n  display: block;\n  position: absolute;\n  -webkit-transition: all 400ms var(--ease, ease-out) 100ms;\n  transition: all 400ms var(--ease, ease-out) 100ms;\n  opacity: 0;\n  border: 0;\n  width: 32px;\n  height: 32px;\n  border-radius: 100%;\n  -webkit-transform: translate3d(34px, 0, 0);\n  transform: translate3d(34px, 0, 0);\n}\n\n:host button.current {\n  position: relative;\n  border: 2px solid var(--gray2);\n  background: var(--white);\n  overflow: hidden;\n}\n\n:host button.current::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  background: var(--red);\n  width: 32px;\n  height: 4px;\n}\n\n:host([val=\"none\"]),\n:host button.none {\n  background: white;\n  border: 2px solid var(--black);\n}\n\n:host([val=\"none\"])::after,\n:host button.none::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: calc(50% - 2px);\n  top: calc(0% - .2rem);\n  width: 4px;\n  height: calc(100% + .4rem);\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  background: var(--red5)\n}\n\n:host button[data-selected=\"true\"] {\n  opacity: 1;\n  z-index: 9;\n}\n\n:host .wrap {\n  position: relative;\n  left: -34px;\n}\n\n:host .wrap .placeholder {\n  opacity: 0;\n  z-index: -1;\n}\n\n:host .wrap:hover {\n  width: 96px;\n  height: 204px;\n  border-radius: 100%;\n}\n\n:host .wrap:hover button {\n  opacity: 1;\n  z-index: 99;\n  height: 32px;\n}\n\n:host .wrap:hover button:nth-of-type(1) {\n  -webkit-transform: translate3d(0px, 34px, 0);\n  transform: translate3d(0px, 34px, 0);\n}\n\n:host .wrap:hover button:nth-of-type(2) {\n  -webkit-transform: translate3d(34px, 34px, 0);\n  transform: translate3d(34px, 34px, 0);\n}\n\n:host .wrap:hover button:nth-of-type(3) {\n  -webkit-transform: translate3d(68px, 34px, 0);\n  transform: translate3d(68px, 34px, 0);\n}\n\n:host .wrap:hover button:nth-of-type(4) {\n  -webkit-transform: translate3d(0px, 68px, 0);\n  transform: translate3d(0px, 68px, 0);\n}\n\n:host .wrap:hover button:nth-of-type(5) {\n  -webkit-transform: translate3d(34px, 68px, 0);\n  transform: translate3d(34px, 68px, 0);\n}\n\n:host .wrap:hover button:nth-of-type(6) {\n  -webkit-transform: translate3d(68px, 68px, 0);\n  transform: translate3d(68px, 68px, 0);\n}\n\n:host .wrap:hover button:nth-of-type(7) {\n  -webkit-transform: translate3d(0, 102px, 0);\n  transform: translate3d(0, 102px, 0);\n}\n\n:host .wrap:hover button:nth-of-type(8) {\n  -webkit-transform: translate3d(34px, 102px, 0);\n  transform: translate3d(34px, 102px, 0);\n}\n\n:host .wrap:hover button:nth-of-type(9) {\n  -webkit-transform: translate3d(68px, 102px, 0);\n  transform: translate3d(68px, 102px, 0);\n}\n\n:host .wrap:hover button:nth-of-type(10) {\n  -webkit-transform: translate3d(0px, 136px, 0);\n  transform: translate3d(0px, 136px, 0);\n}\n\n:host .wrap:hover button:nth-of-type(11) {\n  -webkit-transform: translate3d(34px, 136px, 0);\n  transform: translate3d(34px, 136px, 0);\n}\n\n:host .wrap:hover button:nth-of-type(12) {\n  -webkit-transform: translate3d(68px, 136px, 0);\n  transform: translate3d(68px, 136px, 0);\n}\n\n:host .wrap:hover button:nth-of-type(13) {\n  -webkit-transform: translate3d(0, 170px, 0);\n  transform: translate3d(0, 170px, 0);\n}\n\n:host .wrap:hover button:nth-of-type(14) {\n  -webkit-transform: translate3d(34px, 170px, 0);\n  transform: translate3d(34px, 170px, 0);\n}\n\n:host-context(.dark-mode):host([val=\"none\"]),\n:host-context(.dark-mode):host button.none {\n  background: var(--black) !important;\n  border: 2px solid var(--white) !important;\n}"; }
}

export { ColorPicker as stellar_color_picker };
