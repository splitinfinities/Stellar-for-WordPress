import { c as registerInstance, d as h, f as getElement } from './stellar-core-d63b686e.js';

class ParallaxSection {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.speed = 1;
        this.layer = 1;
    }
    componentWillLoad() {
        this.element.setAttribute("data-rellax-speed", this.speed.toString());
        if (this.percentage) {
            this.element.setAttribute("data-rellax-percentage", this.percentage.toString());
        }
        this.element.setAttribute("data-rellax-zindex", this.layer.toString());
    }
    render() {
        return (h("slot", null));
    }
    get element() { return getElement(this); }
    static get style() { return "stellar-parallax-section {\n	display: block;\n	position: absolute;\n	width: 100%;\n	height: inherit;\n	display: -ms-flexbox;\n	display: flex;\n	-ms-flex-align: center;\n	align-items: center;\n	-ms-flex-pack: center;\n	justify-content: center;\n}"; }
}

export { ParallaxSection as stellar_parallax_section };
