import { r as registerInstance, g as getElement } from './index-36b06d19.js';

const Intersection = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.in = () => { };
        this.out = () => { };
        this.margin = "0%";
    }
    componentWillLoad() {
        if (!this.element) {
            this.element = this.el;
        }
        this.addIntersectionObserver();
    }
    componentDidUnload() {
        this.removeIntersectionObserver();
    }
    addIntersectionObserver() {
        try {
            if ('IntersectionObserver' in window) {
                this.io = new IntersectionObserver((data) => {
                    if (!this.multiple) {
                        if (data[0].isIntersecting) {
                            this.in();
                            this.removeIntersectionObserver();
                        }
                    }
                    else {
                        if (data[0].isIntersecting) {
                            this.in();
                        }
                        else {
                            this.out();
                        }
                    }
                }, {
                    rootMargin: this.margin,
                    threshold: [0]
                });
                if (typeof this.element === "string" && this.element.constructor.name === "String") {
                    this.io.observe(document.querySelector(this.element));
                }
                else {
                    this.io.observe(this.element);
                }
            }
        }
        catch (e) {
            // no intersection observer
        }
    }
    removeIntersectionObserver() {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    }
    get el() { return getElement(this); }
};

export { Intersection as stellar_intersection };
