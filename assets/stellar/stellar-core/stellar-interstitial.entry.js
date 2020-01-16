import { r as registerInstance, h, H as Host, g as getElement } from './index-cc4604b3.js';

const InterstitialCss = ":host, :host *, :host *:before, :host *:after {\n  box-sizing: border-box;\n}\n\n:host {\n  display: block;\n  position: fixed;\n  z-index: 999999;\n  height: auto;\n  top: 0; left: 0; right: 0; bottom: 0;\n  background: var(--black);\n  backdrop-filter: blur(10px);\n  display: grid;\n  padding: 2rem;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  opacity: 1;\n  transition: all 100ms ease 0s;\n}\n\n:host(.hide) {\n  opacity: 0;\n}\n\n:host ::slotted(*) {\n  max-width: 60rem;\n  height: auto;\n  width: 90%;\n  top: 0; left: 0; right: 0; bottom: 0;\n  margin: auto;\n}\n\n\n:host([fullscreen]),\n:host([fullscreen=\"\"]) {\n  padding: 0;\n}\n\n:host([fullscreen]) ::slotted(*),\n:host([fullscreen=\"\"]) ::slotted(*) {\n  max-width: 100%;\n  width: 100%;\n  height: 100%;\n}";

const Interstitial = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.shown = true;
        this.hash = "";
    }
    componentWillLoad() {
        this.hash = btoa(unescape(encodeURIComponent(this.el.innerText)));
        if (this.remember && localStorage.getItem(this.hash)) {
            this.shown = !(localStorage.getItem(this.hash) === "hidden");
        }
    }
    handleClose() {
        this.shown = false;
        if (this.remember) {
            localStorage.setItem(this.hash, "hidden");
        }
    }
    render() {
        return (h(Host, { class: `${this.shown ? "show" : "hide"}` }, h("slot", null)));
    }
    get el() { return getElement(this); }
    static get style() { return InterstitialCss; }
};

export { Interstitial as stellar_interstitial };
