import { c as registerInstance, d as h, g as Host, f as getElement } from './stellar-core-d63b686e.js';
import './chunk-452e3210.js';
import { a as properties } from './chunk-aefb00c1.js';

class Blur {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.vertical = 0;
        this.horizontal = 0;
    }
    supported_match() {
        return navigator.userAgent.toLowerCase().indexOf('firefox') === -1 &&
            !(/iPad|iPhone|iPod/.test(navigator.platform));
    }
    supported() {
        const criteria = () => {
            let result;
            try {
                if (sessionStorage.getItem('blur-supported') === "true") {
                    return sessionStorage.getItem('blur-supported') === "true";
                }
                result = this.supported_match();
                sessionStorage.setItem('blur-supported', result ? "true" : "false");
            }
            catch (e) {
                result = this.supported_match();
            }
            return result;
        };
        try {
            sessionStorage.clear();
        }
        catch (e) { }
        return criteria();
    }
    async setBlurFilter() {
        properties.set({
            "--blur-url": `url('#${this.generatedId}-filter')`
        }, this.element);
    }
    componentDidLoad() {
        if (this.supported()) {
            this.generatedId = this.element.id || this.generateId();
            setTimeout(() => {
                this.setBlurFilter();
            }, 10);
        }
    }
    generateId() {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        return `blur-${getRandomInt(0, 1000)}`;
    }
    render() {
        return h(Host, { id: this.element.id || this.generatedId }, h("slot", null), this.supported() && h("svg", { class: "blur-svg" }, h("defs", null, h("filter", { id: this.generatedId + "-filter" }, h("feGaussianBlur", { id: this.generatedId + "-gaussian", in: "SourceGraphic", stdDeviation: `${this.horizontal},${this.vertical}` })))));
    }
    get element() { return getElement(this); }
    static get style() { return "stellar-blur, stellar-blur *, stellar-blur *:before, stellar-blur *:after {\n	-webkit-box-sizing: border-box;\n	box-sizing: border-box;\n}\n\nstellar-blur {\n	-webkit-filter: var(--blur-url);\n	filter: var(--blur-url);\n	display: block;\n	overflow: initial;\n}\n\nstellar-blur .blur-svg {\n	display: none;\n}\n\n\n\@media (prefers-reduced-motion: reduce) {\n	stellar-blur {\n		-webkit-filter: none !important;\n		filter: none !important;\n	}\n}"; }
}

export { Blur as stellar_blur };