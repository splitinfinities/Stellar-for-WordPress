import { r as registerInstance, h, H as Host } from './index-cc4604b3.js';
import { c as colors } from './colors-eb996d31.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-dbf484eb.js';

const Theme = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dark = false;
        this.light = false;
        this.body = false;
        this.system = false;
        this.base = "indigo";
        this.complement = "red";
        this.htmlEl = document.querySelector('html');
        this.bodyEl = document.querySelector('body');
    }
    componentWillLoad() {
        if (this.system) {
            this.dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.light = window.matchMedia('(prefers-color-scheme: light)').matches;
        }
        this.observeDark();
        this.observeColors();
    }
    observeColors() {
        const options = Object.keys(colors);
        if (this.body) {
            options.forEach((color) => {
                this.htmlEl.classList.remove(`theme-${color}`);
                this.htmlEl.classList.remove(`complement-${color}`);
                this.bodyEl.classList.remove(`theme-${color}`);
                this.bodyEl.classList.remove(`complement-${color}`);
            });
            this.bodyEl.classList.add(`theme-${this.base}`);
            this.bodyEl.classList.add(`complement-${this.complement}`);
        }
    }
    observeDark() {
        if (this.body && this.dark) {
            this.htmlEl.classList.add('dark-mode');
            this.bodyEl.classList.add('dark-mode');
        }
        else {
            this.htmlEl.classList.remove('dark-mode');
            this.bodyEl.classList.remove('dark-mode');
        }
        if (this.body && this.light) {
            this.htmlEl.classList.add('light-mode');
            this.bodyEl.classList.add('light-mode');
        }
        else {
            this.htmlEl.classList.remove('light-mode');
            this.bodyEl.classList.remove('light-mode');
        }
    }
    render() {
        return h(Host, { class: `${this.dark ? "dark-mode" : ""} ${this.light ? "light-mode" : ""} theme-${this.base} complement-${this.complement}` }, h(Tunnel.Provider, { state: { dark: this.dark, light: this.light } }));
    }
    static get watchers() { return {
        "base": ["observeColors"],
        "complement": ["observeColors"],
        "dark": ["observeDark"]
    }; }
};

export { Theme as stellar_theme };
