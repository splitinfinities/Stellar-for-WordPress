import { c as registerInstance, d as h, f as getElement } from './stellar-core-d63b686e.js';
import './chunk-452e3210.js';
import { a as properties } from './chunk-aefb00c1.js';
import { a as delay } from './chunk-4a053c09.js';

class Scatter {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.animation = "fadeInUp";
        this.outAnimation = "fadeOut";
        this.delay = 100;
        this.timing = 50;
        this.active = false;
    }
    componentWillLoad() {
        this.children = Array.from(this.element.children);
    }
    componentDidLoad() {
        this.addIntersectionObserver();
    }
    addIntersectionObserver() {
        if ('IntersectionObserver' in window) {
            this.io = new IntersectionObserver((data) => {
                // because there will only ever be one instance
                // of the element we are observing
                // we can just use data[0]
                if (data[0].isIntersecting) {
                    setTimeout(() => {
                        this.active = true;
                        this.in();
                    }, 350);
                    this.removeIntersectionObserver();
                }
            }, {
                rootMargin: '50%',
                threshold: [0]
            });
            this.io.observe(this.element);
        }
        else {
            // fall back to setTimeout for Safari and IE
            setTimeout(() => {
                this.in();
            }, 300);
        }
    }
    removeIntersectionObserver() {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
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
        return (h("slot", null));
    }
    get element() { return getElement(this); }
    static get style() { return ":host {\n  display: block;\n  --animation: fadeIn;\n}\n\n:host ::slotted(*) {\n  opacity: 0;\n}\n\n:host([active]) ::slotted(*) {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-timing-function: var(--ease);\n  animation-timing-function: var(--ease);\n  -webkit-animation-name: var(--animation);\n  animation-name: var(--animation);\n}"; }
}

export { Scatter as stellar_reveal };
