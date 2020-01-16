import { r as registerInstance } from './index-cc4604b3.js';

const ParallaxSectionCss = "stellar-parallax-section {\n\tgrid-area: 1/1;\n\ttransform: translateY(var(--ty));\n\twill-change: transform;\n\tcontain: content;\n}\n\nstellar-parallax-section.double {\n\ttransform: translateY(var(--ty)) scale(1.125);\n}";

const ParallaxSection = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.speed = 1;
    }
    static get style() { return ParallaxSectionCss; }
};

export { ParallaxSection as stellar_parallax_section };
