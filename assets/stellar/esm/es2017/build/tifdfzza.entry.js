import { h } from '../stellar-core.core.js';

import './chunk-7646164d.js';
import { a as properties } from './chunk-340b8099.js';

class Blur {
    constructor() {
        this.vertical = 0;
        this.horizontal = 0;
    }
    hostData() {
        return {
            id: this.element.id || this.generatedId
        };
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
    setBlurFilter() {
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
        return [
            h("slot", null),
            this.supported() && h("svg", { class: "blur-svg" },
                h("defs", null,
                    h("filter", { id: this.generatedId + "-filter" },
                        h("feGaussianBlur", { id: this.generatedId + "-gaussian", in: "SourceGraphic", stdDeviation: `${this.horizontal},${this.vertical}` }))))
        ];
    }
    static get is() { return "stellar-blur"; }
    static get properties() { return {
        "element": {
            "elementRef": true
        },
        "generatedId": {
            "state": true
        },
        "horizontal": {
            "type": Number,
            "attr": "horizontal",
            "reflectToAttr": true,
            "mutable": true
        },
        "setBlurFilter": {
            "method": true
        },
        "vertical": {
            "type": Number,
            "attr": "vertical",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get style() { return "stellar-blur,stellar-blur *,stellar-blur :after,stellar-blur :before{-webkit-box-sizing:border-box;box-sizing:border-box}stellar-blur{-webkit-filter:var(--blur-url);filter:var(--blur-url);display:block;overflow:initial}stellar-blur .blur-svg{display:none}\@media (prefers-reduced-motion:reduce){stellar-blur{-webkit-filter:none!important;filter:none!important}}"; }
}

export { Blur as StellarBlur };
