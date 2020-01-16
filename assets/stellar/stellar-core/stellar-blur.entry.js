import { r as registerInstance, h, H as Host, g as getElement } from './index-cc4604b3.js';

const BlurCss = "stellar-blur, stellar-blur *, stellar-blur *:before, stellar-blur *:after {\n\tbox-sizing: border-box;\n}\n\nstellar-blur {\n\tfilter: var(--blur-url);\n\tdisplay: block;\n\toverflow: initial;\n\tcontain: content;\n}\n\nstellar-blur .blur-svg {\n\tdisplay: none;\n}\n\n@media (prefers-reduced-motion: reduce) {\n\tstellar-blur {\n\t\tfilter: none !important;\n\t}\n}\n";

const Blur = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return h(Host, { id: this.element.id || this.generatedId, style: { "--blur-url": `url('#${this.generatedId}-filter')` } }, h("slot", null), this.supported() && h("svg", { class: "blur-svg" }, h("defs", null, h("filter", { id: this.generatedId + "-filter" }, h("feGaussianBlur", { id: this.generatedId + "-gaussian", in: "SourceGraphic", stdDeviation: `${this.horizontal},${this.vertical}` })))));
    }
    get element() { return getElement(this); }
    static get style() { return BlurCss; }
};

export { Blur as stellar_blur };
