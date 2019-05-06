import { c as registerInstance, d as h, g as Host, f as getElement } from './stellar-core-d63b686e.js';
import './chunk-452e3210.js';
import './chunk-aefb00c1.js';
import { b as colors, c as titleCase } from './chunk-15cea9da.js';
import './chunk-f26db59a.js';

class Avatar {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tooltip = false;
        this.size = "medium";
        this.color = "auto";
        this.name = "Stellar";
        this.initials = "ST";
        this.shape = "square";
        this.processing = false;
        this.colorAuto = false;
    }
    componentWillLoad() {
        this.colors = Object.keys(colors).filter((color) => {
            // @ts-ignore
            return !["base", "white", "black"].includes(color);
        });
        if (this.color === "auto") {
            this.colorAuto = true;
        }
        this.formatName();
    }
    formatName() {
        if (this.processing) {
            this.initials = "";
            return;
        }
        if (this.color === "auto" || this.colorAuto) {
            this.colorAuto = true;
            this.color = this.colors[this.name.length % this.colors.length];
        }
        if (!this.name.length) {
            this.initials = "ST";
        }
        else {
            var the_name = titleCase(this.name);
            if (this.size === "large" || this.size === "medium") {
                this.initials = the_name.replace(/[^A-Z]/g, '').substring(0, 2);
            }
            else {
                this.initials = the_name.substring(0, 1);
            }
        }
        if (this.shape === "star" || this.shape === "diamond") {
            this.initials = this.initials.substring(0, 1);
        }
    }
    render() {
        return h(Host, { class: `theme-${this.color}` }, h("button", { class: "wrapper", title: `You tabbed on an Avatar for ${this.name}` }, this.processing && h("div", { class: "processing" }, h("stellar-avatar", { src: "Loading" })), h("div", { class: "content" }, h("div", { class: "spacer" }), h("div", { class: "letter", title: this.name }, this.initials), this.src && h("img", { src: this.src, alt: this.name })), this.tooltip && h("stellar-tooltip", null, this.name)));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "name": ["formatName"]
    }; }
    static get style() { return ":host, :host *, :host *:before, :host *:after {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n:host {\n    display: inline-block;\n    width: var(--avatar-size);\n    max-height: var(--avatar-size);\n    font-size: var(--avatar-font-size);\n    --avatar-color: var(--theme-base7, var(--red7));\n    --avatar-color-dark: var(--theme-base5, var(--red5));\n    --avatar-font-color: var(--white);\n    --avatar-size: 2.2em;\n    --avatar-font-size: 1.8rem;\n    --avatar-text-shadow: 0 0 0px rgba(255, 255, 255, .4);\n    -webkit-filter: drop-shadow(var(--drop-shadow));\n    filter: drop-shadow(var(--drop-shadow));\n}\n\n:host([size=\'large\']) {\n    --avatar-font-size: 3.6rem;\n}\n\n:host([size=\'medium\']) {\n    --avatar-font-size: 1.8rem;\n}\n\n:host([size=\'small\']) {\n    --avatar-font-size: 1rem;\n}\n\n:host([size=\'tiny\']) {\n    --avatar-font-size: .8rem;\n}\n\n:host .wrapper {\n    display: block;\n    position: relative;\n    z-index: 0;\n    width: 100%;\n    max-width: 2.2em;\n    font: inherit;\n    font-size: var(--avatar-font-size);\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    border: none;\n    padding: 0;\n    background: transparent;\n}\n\n:host .content {\n    overflow: hidden;\n    position: relative;\n}\n\n:host .spacer {\n    display: block;\n    background: var(--avatar-color);\n    background: linear-gradient(45deg, var(--avatar-color) 0%, var(--avatar-color-dark) 100%);;\n    padding-top: 100%;\n    width: 100%;\n    height: 0;\n}\n\n:host .letter {\n    display: -ms-flexbox;\n    display: flex;\n    position: absolute;\n    top: 0;\n    left: 0;\n    -ms-flex-align: center;\n    align-items: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    text-transform: lowercase;\n    line-height: 100%;\n    padding: 0.35em 0.4em 0.2em;\n    color: var(--avatar-font-color);\n    font-size: var(--avatar-font-size);\n    font-weight: 600;\n    text-shadow: var(--avatar-text-shadow);\n}\n\n:host img {\n    position: absolute;\n    top: 50%;\n    right: 50%;\n    bottom: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    z-index: 1;\n    border-radius: inherit;\n    background: var(--white);\n    width: 100%;\n    height: auto;\n    color: transparent;\n    -o-object-fit: cover;\n    object-fit: cover;\n}\n\n/* Shapes */\n\n/* Shapes: Square */\n:host([shape=\'circle\']) .wrapper,\n:host([shape=\'circle\']) .content,\n:host([shape=\'circle\']) .spacer {\n    border-radius: 100%;\n}\n\n/* Shapes: Rectangle */\n:host([shape=\'rectangle\']) .spacer {\n    padding-top: 60%;\n}\n\n/* Shapes: Diamond */\n:host([shape=\'diamond\']) .spacer {\n    -webkit-clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);\n    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);\n}\n\n/* Shapes: Diamond */\n:host([shape=\'hexagon\']) .spacer {\n    -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n}\n\n/* Shapes: Star */\n:host([shape=\'star\']) .spacer {\n    -webkit-clip-path: polygon(50% 0%, 64% 27%, 98% 35%, 74% 57%, 79% 91%, 50% 76%, 21% 91%, 25% 57%, 2% 35%, 36% 28%);\n    clip-path: polygon(50% 0%, 64% 27%, 98% 35%, 74% 57%, 79% 91%, 50% 76%, 21% 91%, 25% 57%, 2% 35%, 36% 28%);\n}\n\n/* Shapes: Message */\n:host([shape=\'message\']) .spacer {\n    -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);\n    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);\n}\n\n/* Processing */\n:host([processing]) .letter {\n    background: url(\"spinner.svg\") no-repeat 50% 50%/50% 50%;\n    color: transparent;\n}\n\n:host([processing][size=\'large\']) .letter {\n    background-size: 32px;\n}\n\n:host([processing][size=\'medium\']) .letter {\n    background-size: 16px;\n}\n\n\n:host-context(.dark-mode):host {\n    --avatar-color: var(--theme-base8, var(--red8));\n    --avatar-color-dark: var(--theme-base6, var(--red6));\n    --avatar-font-color: var(--black);\n    --avatar-text-shadow: 0 0 0px rgba(0, 0, 0, .4)\n}"; }
}

export { Avatar as stellar_avatar };
