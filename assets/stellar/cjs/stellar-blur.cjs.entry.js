'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');

const BlurCss = "stellar-blur,stellar-blur *,stellar-blur *:before,stellar-blur *:after{-webkit-box-sizing:border-box;box-sizing:border-box}stellar-blur{-webkit-filter:var(--blur-url);filter:var(--blur-url);display:block;overflow:initial;contain:content}stellar-blur .blur-svg{display:none}@media (prefers-reduced-motion: reduce){stellar-blur{-webkit-filter:none !important;filter:none !important}}";

const Blur = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.vertical = 0;
        this.horizontal = 0;
    }
    componentWillLoad() {
        if (this.supported()) {
            this.generatedId = this.element.id || this.generateId();
        }
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
    generateId() {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        return `blur-${getRandomInt(0, 1000)}`;
    }
    render() {
        return index.h(index.Host, { id: this.element.id || this.generatedId, style: { "--blur-url": `url('#${this.generatedId}-filter')` } }, index.h("slot", null), this.supported() && index.h("svg", { class: "blur-svg" }, index.h("defs", null, index.h("filter", { id: this.generatedId + "-filter" }, index.h("feGaussianBlur", { id: this.generatedId + "-gaussian", in: "SourceGraphic", stdDeviation: `${this.horizontal},${this.vertical}` })))));
    }
    get element() { return index.getElement(this); }
    static get style() { return BlurCss; }
};

exports.stellar_blur = Blur;
