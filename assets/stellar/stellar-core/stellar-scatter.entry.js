import { r as registerInstance, h, g as getElement } from './index-cc4604b3.js';

const ScatterCss = ":host {\n  contain: content;\n  position: relative;\n  display: contents;\n  width: 100%;\n  height: 100%;\n}\n\n:host ::slotted(*) {\n  position: absolute;\n}\n\n:host([float]) ::slotted(*:nth-of-type(3n+1)) {\n  animation-direction: alternate;\n}\n\n:host([float]) ::slotted(*:nth-of-type(3n+2)) {\n  animation-direction: reverse;\n}\n\n:host([float]) ::slotted(*:nth-of-type(3n+3)) {\n  animation-direction: alternate-reverse;\n}\n\n:host([float]) ::slotted(*:nth-of-type(5n+1)) {\n  animation: floating-x 10s infinite;\n}\n:host([float]) ::slotted(*:nth-of-type(5n+2)) {\n  animation: floating-x-spin 15s infinite;\n}\n:host([float]) ::slotted(*:nth-of-type(5n+3)) {\n  animation: floating-x-full-spin 35s infinite;\n}\n:host([float]) ::slotted(*:nth-of-type(5n+4)) {\n  animation: floating-x-full-spin-rel 20s infinite;\n}\n:host([float]) ::slotted(*:nth-of-type(5n+5)) {\n  animation: floating-x-full-spin 25s infinite;\n}\n";

const Scatter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.float = false;
        this.min = 0;
        this.max = 100;
        this.sizes = false;
        this.colors = false;
    }
    componentWillLoad() {
        const particles = this.element.querySelectorAll('*');
        Array.from(particles).forEach((element) => {
            const top = this.randomFloat();
            const left = this.randomFloat();
            element.setAttribute('style', `top: ${top}%; left: ${left}%`);
            if (this.colors) {
                element.classList.add(`fs${this.fontScale()}`);
            }
            if (this.sizes) {
                element.classList.add(`theme-${this.colorSwatch()}${this.colorScale()}`);
            }
        });
    }
    randomFloat() {
        return this.min + Math.random() * (this.max + 1 - this.min);
    }
    randomNumber(max = 2) {
        return Math.floor(Math.random() * max) + 1;
    }
    fontScale() {
        return this.randomNumber(6);
    }
    colorScale() {
        return this.randomNumber(10);
    }
    colorSwatch() {
        return this.randomNumber() === 1 ? "base" : "complement";
    }
    render() {
        return (h("slot", null));
    }
    get element() { return getElement(this); }
    static get style() { return ScatterCss; }
};

export { Scatter as stellar_scatter };
