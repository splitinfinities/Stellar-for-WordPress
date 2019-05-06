import { c as registerInstance, d as h, f as getElement } from './stellar-core-d63b686e.js';
import './chunk-452e3210.js';
import { a as properties } from './chunk-aefb00c1.js';

class SkeletonImg {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.width = 600;
        this.height = 300;
        this.block = false;
        this.loading = false;
        this.icon = false;
    }
    componentWillLoad() {
        if (this.block) {
        }
        else {
            properties.set({
                '--width': `${this.width}px`,
                '--height': `${this.height}px`
            }, this.element);
        }
        this.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    this.element.classList.add('visible');
                }
                else {
                    this.element.classList.remove('visible');
                }
            });
        });
        this.observer.observe(this.element);
    }
    render() {
        return [
            this.loading && this.icon && h("stellar-asset", { name: "spinning-bubbles", color: "gray25" }),
            h("svg", { width: this.width, height: this.height }, h("rect", { width: this.width, height: this.height }))
        ];
    }
    get element() { return getElement(this); }
    static get style() { return "skeleton-img {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  pointer-events: none;\n  display: block;\n  position: relative;\n  margin-bottom: 1rem;\n  border-radius: 4px;\n  overflow: hidden;\n  max-width: var(--width);\n  max-height: var(--height);\n}\n\nskeleton-img svg {\n  display: block;\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n}\n\nskeleton-img svg rect {\n  fill: var(--theme-base5);\n}\n\nskeleton-img[loading] {\n  position: relative;\n}\n\nskeleton-img[loading]::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: -100%;\n  background-color: var(--theme-base5);\n  background-image: linear-gradient(45deg, var(--theme-base5) 0%, var(--theme-base5) 20%, var(--theme-base3) 40%, var(--theme-base4) 61%, var(--theme-base5) 80%, var(--theme-base5) 100%);\n  width: 300%;\n  height: 100%;\n  -webkit-transform: translateX(calc(var(--width) * -1.75));\n  transform: translateX(calc(var(--width) * -1.75));\n}\n\nskeleton-img[loading].visible::before {\n  -webkit-animation: 1.25s linear 0s shimmer infinite forwards;\n  animation: 1.25s linear 0s shimmer infinite forwards;\n}\n\nskeleton-img stellar-asset {\n  position: absolute;\n  top: 50%;\n  right: 50%;\n  bottom: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  width: var(--icon-width);\n  height: var(--icon-height);\n}\n\n\@-webkit-keyframes shimmer {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(calc(var(--width) * -1.75));\n    transform: translateX(calc(var(--width) * -1.75));\n  }\n  10% {\n    opacity: 1;\n  }\n\n  90% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(calc(var(--width) * 1.75));\n    transform: translateX(calc(var(--width) * 1.75));\n  }\n}\n\n\@keyframes shimmer {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(calc(var(--width) * -1.75));\n    transform: translateX(calc(var(--width) * -1.75));\n  }\n  10% {\n    opacity: 1;\n  }\n\n  90% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(calc(var(--width) * 1.75));\n    transform: translateX(calc(var(--width) * 1.75));\n  }\n}"; }
}

export { SkeletonImg as skeleton_img };
