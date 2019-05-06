import { c as registerInstance, d as h, f as getElement } from './stellar-core-d63b686e.js';
import './chunk-452e3210.js';
import { a as properties } from './chunk-aefb00c1.js';

class SkeletonText {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.as = 'p';
        this.width = 100;
        this.loading = false;
    }
    componentWillLoad() {
        properties.set({
            '--width': `${this.width}%`
        }, this.element);
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
        return h("span", null, "\u00A0");
    }
    get element() { return getElement(this); }
    static get style() { return "skeleton-text {\n	-webkit-user-select: none;\n	-moz-user-select: none;\n	-ms-user-select: none;\n	user-select: none;\n	pointer-events: none;\n	display: inline-block;\n	margin-bottom: 1rem;\n	width: 100%;\n	--line-height: 1.2;\n	--font-size: 1rem;\n}\n\nskeleton-text span {\n	display: inline-block;\n	border-radius: 4px;\n	background-color: var(--theme-base5);\n	overflow: hidden;\n	font-size: var(--font-size, 1rem);\n	width: var(--width);\n	line-height: var(--line-height);\n}\n\nskeleton-text[loading] span {\n	position: relative;\n}\n\nskeleton-text[loading] span::before {\n	content: \"\";\n	display: block;\n	position: absolute;\n	top: 0;\n	right: 0;\n	bottom: 0;\n	left: 0;\n	background-color: var(--theme-base5);\n	background-image: linear-gradient(45deg, var(--theme-base5) 0%, var(--theme-base5) 20%, var(--theme-base3) 40%, var(--theme-base4) 61%, var(--theme-base5) 80%, var(--theme-base5) 100%);	background-repeat: no-repeat;\n	width: 300%;\n	height: 100%;\n}\n\nskeleton-text[loading].visible span::before {\n  -webkit-animation: 2.75s linear 0s shimmer infinite forwards;\n  animation: 2.75s linear 0s shimmer infinite forwards;\n}\n\nskeleton-text[as=\"h1\"] {\n	--font-size: 2.8rem;\n}\n\nskeleton-text[as=\"h2\"] {\n	--font-size: 2.4rem;\n	--line-height: 1.33;\n}\n\nskeleton-text[as=\"h3\"] {\n	--font-size: 2rem;\n	--line-height: 1.4;\n}\n\nskeleton-text[as=\"h4\"] {\n	--font-size: 1.8rem;\n	--line-height: 1.6;\n}\n\nskeleton-text[as=\"h5\"] {\n	--font-size: 1.4rem;\n	--line-height: 1.22;\n}\n\nskeleton-text[as=\"h6\"] {\n	--line-height: 1.5;\n	--font-size: 1.2rem;\n}\n\n\@-webkit-keyframes shimmer {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(calc(var(--width) * -1.75));\n    transform: translateX(calc(var(--width) * -1.75));\n  }\n  10% {\n    opacity: 1;\n  }\n\n  90% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(calc(var(--width) * 1.75));\n    transform: translateX(calc(var(--width) * 1.75));\n  }\n}\n\n\@keyframes shimmer {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(calc(var(--width) * -1.75));\n    transform: translateX(calc(var(--width) * -1.75));\n  }\n  10% {\n    opacity: 1;\n  }\n\n  90% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(calc(var(--width) * 1.75));\n    transform: translateX(calc(var(--width) * 1.75));\n  }\n}"; }
}

export { SkeletonText as skeleton_text };
