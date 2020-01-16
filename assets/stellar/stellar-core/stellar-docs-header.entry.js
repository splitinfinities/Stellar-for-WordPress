import { r as registerInstance, h } from './index-cc4604b3.js';
import './index-9ff8bd5c.js';
import './utils-06e0aad6.js';
import './index-88205cad.js';
import { T as Tunnel } from './dependencies-4783cb9f.js';

const DocsHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.theme = "red";
        this.complement = "indigo";
        this.max = 10;
        this.value = 0;
    }
    handleTheming() {
        document.querySelector('body').setAttribute('class', `theme-${this.theme} complement-${this.complement}`);
    }
    render() {
        return this.ready && [
            h("stellar-message", { striped: true, type: "alert", size: "full" }, h("ion-icon", { name: "happy" }), h("p", null, "Stellar is still an alpha product - some things may change! We'll do out best to notify you when something changes."), h("stellar-button", { size: "tiny", pill: true }, "See change log ", h("ion-icon", { name: "arrow-forward", class: "right" }))),
            h("stellar-layout", { size: "large", class: "relative mb5", type: "sidebar-right" }, h("stellar-starscape", null), h("copy-wrap", { class: "mv5" }, h("slot", { name: "title" }, h("h1", { class: "flex fs-massive" }, h("div", { class: "flex mr4 flex-column items-center" }, h("ion-icon", { src: "/global/vector/mark.svg" }), h("stellar-tag", { color: "blue5", class: "mt4" }, "v", this.package && this.package.version)), h("div", null, h("h1", { class: "fw7 lh-solid theme-base0" }, "Stellar"), h("h3", { class: "db fs4 fw7 theme-complement2 w-100" }, "A Beautiful, Complete Design System"), h("stellar-code-block", { simple: true, class: "w-60", codeString: `npm install @stellar-design/core`, language: "bash" }))))), h("stellar-card", null, h("stellar-grid", { compact: true }, h("stellar-select", { label: "Primary color", resize: true, onUpdate: (e) => { this.theme = e.detail; }, size: "small", overlay: true }, h("stellar-item", { value: "red", selected: true }, "Red"), h("stellar-item", { value: "orange" }, "Orange"), h("stellar-item", { value: "yellow" }, "Yellow"), h("stellar-item", { value: "lime" }, "Lime"), h("stellar-item", { value: "green" }, "Green"), h("stellar-item", { value: "teal" }, "Teal"), h("stellar-item", { value: "cyan" }, "Cyan"), h("stellar-item", { value: "blue" }, "Blue"), h("stellar-item", { value: "indigo" }, "Indigo"), h("stellar-item", { value: "violet" }, "Violet"), h("stellar-item", { value: "fuchsia" }, "Fuchsia"), h("stellar-item", { value: "pink" }, "Pink"), h("stellar-item", { value: "gray" }, "Gray")), h("stellar-select", { label: "Secondary color", resize: true, onUpdate: (e) => { this.complement = e.detail; }, size: "small", overlay: true }, h("stellar-item", { value: "red" }, "Red"), h("stellar-item", { value: "orange" }, "Orange"), h("stellar-item", { value: "yellow" }, "Yellow"), h("stellar-item", { value: "lime" }, "Lime"), h("stellar-item", { value: "green" }, "Green"), h("stellar-item", { value: "teal" }, "Teal"), h("stellar-item", { value: "cyan" }, "Cyan"), h("stellar-item", { value: "blue" }, "Blue"), h("stellar-item", { value: "indigo", selected: true }, "Indigo"), h("stellar-item", { value: "violet" }, "Violet"), h("stellar-item", { value: "fuchsia" }, "Fuchsia"), h("stellar-item", { value: "pink" }, "Pink"), h("stellar-item", { value: "gray" }, "Gray")))))
        ];
    }
    static get watchers() { return {
        "theme": ["handleTheming"],
        "complement": ["handleTheming"]
    }; }
};
Tunnel.injectProps(DocsHeader, ['package', 'ready']);

export { DocsHeader as stellar_docs_header };
