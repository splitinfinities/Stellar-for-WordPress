import { r as registerInstance, h, H as Host, g as getElement } from './index-cc4604b3.js';
import './utils-06e0aad6.js';
import './index-88205cad.js';

const SkeletonImgCss = "skeleton-img {\n  user-select: none;\n  pointer-events: none;\n  display: block;\n  position: relative;\n  margin-bottom: 1rem;\n  border-radius: 4px;\n  overflow: hidden;\n  max-width: var(--width);\n  max-height: var(--height);\n  contain: content;\n}\n\nskeleton-img svg {\n  display: block;\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n}\n\nskeleton-img svg rect {\n  fill: var(--theme-base5);\n}\n\nskeleton-img[loading] {\n  position: relative;\n}\n\nskeleton-img[loading]::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: -100%;\n  background-color: var(--theme-base5);\n  background-image: linear-gradient(45deg, var(--theme-base5) 0%, var(--theme-base5) 20%, var(--theme-base3) 40%, var(--theme-base4) 61%, var(--theme-base5) 80%, var(--theme-base5) 100%);\n  width: 300%;\n  height: 100%;\n  transform: translateX(calc(var(--width) * -1.75));\n}\n\nskeleton-img[loading].visible::before {\n  animation: 1.25s linear 0s shimmer infinite forwards;\n}\n\nskeleton-img ion-icon {\n  position: absolute;\n  top: 50%;\n  right: 50%;\n  bottom: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: var(--icon-width);\n  height: var(--icon-height);\n}\n\n@keyframes shimmer {\n  0% {\n    opacity: 0;\n    transform: translateX(calc(var(--width) * -1.75));\n  }\n  10% {\n    opacity: 1;\n  }\n\n  90% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateX(calc(var(--width) * 1.75));\n  }\n}\n";

const SkeletonImg = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.width = 600;
        this.height = 300;
        this.block = false;
        this.loading = false;
        this.icon = false;
    }
    in() {
        this.element.classList.add('visible');
    }
    out() {
        this.element.classList.remove('visible');
    }
    render() {
        return h(Host, { style: !this.block && { '--width': `${this.width}px`, '--height': `${this.height}px` } }, this.loading && this.icon && h("ion-icon", { name: "spinning-bubbles", color: "gray25" }), h("svg", { width: this.width, height: this.height }, h("rect", { width: this.width, height: this.height })), h("stellar-intersection", { element: this.element, multiple: true, in: this.in.bind(this), out: this.out.bind(this) }));
    }
    get element() { return getElement(this); }
    static get style() { return SkeletonImgCss; }
};

export { SkeletonImg as skeleton_img };
