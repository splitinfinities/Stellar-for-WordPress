import { r as registerInstance, h, H as Host, g as getElement } from './index-cc4604b3.js';

const SkeletonTextCss = "skeleton-text {\n\tuser-select: none;\n\tpointer-events: none;\n\tdisplay: inline-block;\n\tmargin-bottom: 1rem;\n\twidth: 100%;\n\t--line-height: 1.2;\n\t--font-size: 1rem;\n\tcontain: content;\n}\n\nskeleton-text span {\n\tdisplay: inline-block;\n\tborder-radius: 4px;\n\tbackground-color: var(--theme-base5);\n\toverflow: hidden;\n\tfont-size: var(--font-size, 1rem);\n\twidth: var(--width);\n\tline-height: var(--line-height);\n}\n\nskeleton-text[loading] span {\n\tposition: relative;\n}\n\nskeleton-text[loading] span::before {\n\tcontent: \"\";\n\tdisplay: block;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: var(--theme-base5);\n\tbackground-image: linear-gradient(45deg, var(--theme-base5) 0%, var(--theme-base5) 20%, var(--theme-base3) 40%, var(--theme-base4) 61%, var(--theme-base5) 80%, var(--theme-base5) 100%);\tbackground-repeat: no-repeat;\n\twidth: 300%;\n\theight: 100%;\n}\n\nskeleton-text[loading].visible span::before {\n  animation: 2.75s linear 0s shimmer infinite forwards;\n}\n\nskeleton-text[as=\"h1\"] {\n\t--font-size: 2.8rem;\n}\n\nskeleton-text[as=\"h2\"] {\n\t--font-size: 2.4rem;\n\t--line-height: 1.33;\n}\n\nskeleton-text[as=\"h3\"] {\n\t--font-size: 2rem;\n\t--line-height: 1.4;\n}\n\nskeleton-text[as=\"h4\"] {\n\t--font-size: 1.8rem;\n\t--line-height: 1.6;\n}\n\nskeleton-text[as=\"h5\"] {\n\t--font-size: 1.4rem;\n\t--line-height: 1.22;\n}\n\nskeleton-text[as=\"h6\"] {\n\t--line-height: 1.5;\n\t--font-size: 1.2rem;\n}\n\n@keyframes shimmer {\n  0% {\n    opacity: 0;\n    transform: translateX(calc(var(--width) * -1.75));\n  }\n  10% {\n    opacity: 1;\n  }\n\n  90% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateX(calc(var(--width) * 1.75));\n  }\n}\n";

const SkeletonText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.as = 'p';
        this.width = 100;
        this.loading = false;
    }
    in() { this.element.classList.add('visible'); }
    out() { this.element.classList.remove('visible'); }
    render() {
        return h(Host, { style: { '--width': `${this.width}%` } }, h("span", null, "\u00A0", h("stellar-intersection", { element: this.element, multiple: true, in: this.in.bind(this), out: this.out.bind(this) })));
    }
    get element() { return getElement(this); }
    static get style() { return SkeletonTextCss; }
};

export { SkeletonText as skeleton_text };
