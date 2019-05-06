'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-c90f54d2.js');
require('./chunk-ee96ca86.js');
const __chunk_3 = require('./chunk-61a48f92.js');
const __chunk_15 = require('./chunk-6f88c1d7.js');

class Scatter {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
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
        await __chunk_15.delay(time);
    }
    async out() {
        __chunk_3.properties.set({
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
        __chunk_3.properties.set({
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
        return (__chunk_1.h("slot", null));
    }
    get element() { return __chunk_1.getElement(this); }
    static get style() { return ":host{display:block;--animation:fadeIn}:host ::slotted(*){opacity:0}:host([active]) ::slotted(*){-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:var(--ease);animation-timing-function:var(--ease);-webkit-animation-name:var(--animation);animation-name:var(--animation)}"; }
}

exports.stellar_reveal = Scatter;
