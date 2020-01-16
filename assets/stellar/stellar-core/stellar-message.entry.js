import { r as registerInstance, h, H as Host, g as getElement } from './index-cc4604b3.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-dbf484eb.js';
import './utils-06e0aad6.js';
import './index-88205cad.js';

const MessageCss = ":host {\n  display: block;\n  position: relative;\n  padding: 0 20px;\n  transition: all 350ms var(--ease) 0s;\n  width: 100%;\n  height: 60px;\n  overflow: hidden;\n  contain: content;\n  background-color: var(--theme-base4, var(--gray5));\n}\n\n:host([striped])::after {\n  content: \"\";\n  position: absolute;\n  width: 120%;\n  top: 0;\n  left: -10%;\n  right: 0;\n  bottom: 0;\n  z-index: 0;\n  background: repeating-linear-gradient(45deg, var(--theme-base0), var(--theme-base0) 2rem, var(--theme-base1) 0, var(--theme-base1) 4rem);\n  mix-blend-mode: multiply;\n  animation: moveStripes 10s linear both infinite;\n}\n\n:host([visible=\"false\"]) {\n  height: 0;\n  overflow: hidden;\n}\n\n:host([visible=\"false\"]) * {\n  opacity: 0;\n}\n\n:host .wrap {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 auto;\n  position: relative;\n  width: 100%;\n  max-width: 1200px;\n  height: 100%;\n  z-index: 1;\n  overflow: auto;\n}\n\n:host([size=\"full\"]) .wrap {\n  min-width: 30rem;\n  max-width: 100%;\n}\n\n:host a {\n  color: white;\n}\n\n:host a:hover,\n:host a:active {\n  color: var(--theme-base1);\n}\n\n:host p {\n  color: var(--theme-base9);\n}\n\n:host .wrap ion-icon {\n  font-size: 2rem;\n  color: var(--theme-base9);\n}\n\n:host button {\n  margin-right: 0;\n  margin-left: auto;\n  appearance: none;\n  color: white;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  outline: 0;\n}\n\n:host button[icon] ion-icon {\n  margin-right: 0;\n  margin-left: 1rem;\n  color: black;\n  background: transparent;\n  border: none;\n}\n\n:host([dark]) {\n  background-color: var(--theme-base7, var(--gray7));\n}\n\n:host([dark][striped])::after {\n  background: repeating-linear-gradient(45deg, var(--theme-base7), var(--theme-base7) 2rem, var(--theme-base8) 0, var(--theme-base8) 4rem);\n}\n\n\n:host([dark]) .wrap ion-icon {\n  color: var(--theme-base1);\n}\n";

const Message = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closable = true;
        this.remember = true;
        this.name = "stellar";
        this.shown = true;
        this.striped = false;
        this.dark = false;
        this.theme = "gray";
    }
    componentWillLoad() {
        if (this.remember) {
            const string = this.element.innerHTML;
            if (window && window.btoa) {
                this.name = this.name + "_" + btoa(unescape(encodeURIComponent(string)));
            }
            if (localStorage.getItem(this.name)) {
                this.shown = !(localStorage.getItem(this.name) === "hidden");
            }
        }
        switch (this.type) {
            case "alert":
                this.theme = "yellow";
                break;
            case "error":
                this.theme = "red";
                break;
            case "info":
                this.theme = "cyan";
                break;
            case "success":
                this.theme = "green";
                break;
        }
    }
    handleClose() {
        this.shown = false;
        if (this.remember) {
            localStorage.setItem(this.name, "hidden");
        }
    }
    render() {
        return h(Host, { class: `theme-${this.theme} ${this.shown ? "db" : "dn"}` }, h("div", { class: "wrap" }, h("slot", null), this.closable && h("button", { "aria-label": "Close", onClick: () => { this.handleClose(); } }, h("ion-icon", { name: "close" }))));
    }
    get element() { return getElement(this); }
    static get style() { return MessageCss; }
};
Tunnel.injectProps(Message, ['dark']);

export { Message as stellar_message };
