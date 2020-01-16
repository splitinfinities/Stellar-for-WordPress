import { r as registerInstance, h, H as Host, g as getElement } from './index-cc4604b3.js';
import { c as colors } from './colors-eb996d31.js';
import './_commonjsHelpers-bccf23a2.js';
import './css-custom-properties.min-d9d14253.js';
import { t as titleCase } from './index-26976b63.js';
import './main-e9832563.js';
import './moment-5e7e00c2.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-dbf484eb.js';

const AvatarCss = ":host, :host *, :host *:before, :host *:after {\n    box-sizing: border-box;\n}\n\n:host {\n  contain: content;\n    display: inline-block;\n    width: var(--avatar-size);\n    max-height: var(--avatar-size);\n    font-size: var(--avatar-font-size);\n    --avatar-color: var(--theme-base7, var(--red7));\n    --avatar-color-dark: var(--theme-base5, var(--red5));\n    --avatar-font-color: var(--white);\n    --avatar-size: var(--ms4);\n    --avatar-font-size: var(--ms1);\n    --avatar-text-shadow: 0 0 0px rgba(255, 255, 255, .4);\n    filter: drop-shadow(var(--drop-shadow));\n}\n:host([size='tiny']) {\n    --avatar-size: var(--ms1);\n    --avatar-font-size: var(--ms-2);\n}\n\n:host([size='small']) {\n    --avatar-size: var(--ms3);\n    --avatar-font-size: var(--ms-1);\n}\n\n:host([size='medium']) {\n    --avatar-size: var(--ms6);\n    --avatar-font-size: var(--ms3);\n}\n\n:host([size='large']) {\n    --avatar-size: calc(var(--ms8) + 0.1em);\n    --avatar-font-size: var(--ms5);\n}\n\n:host .wrapper {\n    display: block;\n    position: relative;\n    z-index: 0;\n    width: 100%;\n    max-width: 2.2em;\n    font: inherit;\n    font-size: var(--avatar-font-size);\n    appearance: none;\n    border: none;\n    padding: 0;\n    background: transparent;\n}\n\n:host .content {\n    overflow: hidden;\n    position: relative;\n}\n\n:host .spacer {\n    display: block;\n    background: var(--avatar-color);\n    background: linear-gradient(45deg, var(--avatar-color) 0%, var(--avatar-color-dark) 100%);;\n    padding-top: 100%;\n    width: 100%;\n    height: 0;\n}\n\n:host .letter {\n    display: flex;\n    position: absolute;\n    top: 0;\n    left: 0;\n    align-items: center;\n    justify-content: center;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    text-transform: lowercase;\n    line-height: 100%;\n    padding: 0.35em 0.4em 0.2em;\n    color: var(--avatar-font-color);\n    font-size: var(--avatar-font-size);\n    font-weight: 600;\n    text-shadow: var(--avatar-text-shadow);\n}\n\n:host img {\n    position: absolute;\n    top: 50%;\n    right: 50%;\n    bottom: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n    border-radius: inherit;\n    background: var(--white);\n    width: 100%;\n    height: auto;\n    color: transparent;\n    object-fit: cover;\n}\n\n/* Shapes */\n\n/* Shapes: Square */\n:host([shape='circle']) .wrapper,\n:host([shape='circle']) .content,\n:host([shape='circle']) .spacer {\n    border-radius: 100%;\n}\n\n/* Shapes: Rectangle */\n:host([shape='rectangle']) .spacer {\n    padding-top: 60%;\n}\n\n/* Shapes: Diamond */\n:host([shape='diamond']) .spacer {\n    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);\n}\n\n/* Shapes: Diamond */\n:host([shape='hexagon']) .spacer {\n    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n}\n\n/* Shapes: Star */\n:host([shape='star']) .spacer {\n    clip-path: polygon(50% 0%, 64% 27%, 98% 35%, 74% 57%, 79% 91%, 50% 76%, 21% 91%, 25% 57%, 2% 35%, 36% 28%);\n}\n\n/* Shapes: Message */\n:host([shape='message']) .spacer {\n    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);\n}\n\n/* Processing */\n:host([processing]) .letter {\n    background: url(\"spinner.svg\") no-repeat 50% 50%/50% 50%;\n    color: transparent;\n}\n\n:host([processing][size='large']) .letter {\n    background-size: 32px;\n}\n\n:host([processing][size='medium']) .letter {\n    background-size: 16px;\n}\n\n:host([dark]) {\n    --avatar-color: var(--theme-base8, var(--red8));\n    --avatar-color-dark: var(--theme-base6, var(--red6));\n    --avatar-font-color: var(--black);\n    --avatar-text-shadow: 0 0 0px rgba(0, 0, 0, .4)\n}\n";

const Avatar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.notooltip = false;
        this.color = "auto";
        this.name = "Stellar";
        this.initials = "ST";
        this.shape = "square";
        this.processing = false;
        this.dark = false;
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
        return h(Host, { class: `theme-${this.color}` }, h("button", { class: "wrapper", title: `You tabbed on an Avatar for ${this.name}`, onFocus: () => { this.focus = true; }, onBlur: () => { this.focus = false; } }, this.processing && h("div", { class: "processing" }, h("stellar-avatar", { src: "Loading" })), h("div", { class: "content" }, h("div", { class: "spacer" }), h("div", { class: "letter", title: this.name }, this.initials), this.src && h("img", { src: this.src, alt: this.name })), !this.notooltip && h("stellar-tooltip", { focused: this.focus }, this.name)));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "name": ["formatName"]
    }; }
    static get style() { return AvatarCss; }
};
Tunnel.injectProps(Avatar, ['dark']);

export { Avatar as stellar_avatar };
