import { r as registerInstance, h, g as getElement } from './index-cc4604b3.js';
import './_commonjsHelpers-bccf23a2.js';
import { p as properties } from './css-custom-properties.min-d9d14253.js';
import { d as delay } from './index-94a07eae.js';

const RevealListCss = ":host {\n  contain: content;\n}\n\n:host,\n:host stellar-intersection {\n  display: contents;\n  --animation: fadeIn;\n}\n\n:host ::slotted(*) {\n  opacity: 0;\n}\n\n:host([active]) ::slotted(*) {\n  animation-duration: 1s;\n  animation-iteration-count: 1;\n  animation-fill-mode: both;\n  animation-timing-function: var(--ease);\n  animation-name: var(--animation);\n}\n";

const RevealList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.animation = "fadeInUp";
        this.outAnimation = "fadeOut";
        this.delay = 100;
        this.timing = 20;
        this.active = false;
    }
    componentWillLoad() {
        this.children = Array.from(this.element.children);
    }
    async calculateTiming() {
        const time = 1000 + (this.children.length * this.delay);
        await delay(time);
    }
    async out() {
        properties.set({
            "--animation": this.outAnimation
        }, this.element);
        this.children.forEach((element, index) => {
            // @ts-ignore
            element.style.setProperty('animation-delay', `${this.delay * index}ms`);
            element.style.setProperty('animation-timing', `${this.timing}ms`);
        });
        return await this.calculateTiming();
    }
    async in() {
        this.active = true;
        properties.set({
            "--animation": this.animation
        }, this.element);
        this.children.forEach((element, index) => {
            // @ts-ignore
            element.style.setProperty('animation-delay', `${this.delay * index}ms`);
            element.style.setProperty('animation-timing', `${this.timing}ms`);
        });
        return await this.calculateTiming();
    }
    render() {
        return [
            h("stellar-intersection", { element: this.element.parentElement, in: this.in.bind(this) }),
            h("slot", null)
        ];
    }
    get element() { return getElement(this); }
    static get style() { return RevealListCss; }
};

export { RevealList as stellar_reveal_list };
