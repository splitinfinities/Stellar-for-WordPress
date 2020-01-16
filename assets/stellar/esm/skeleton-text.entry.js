import { r as registerInstance, h, H as Host, d as getElement } from './index-bcfb4a9f.js';

const SkeletonTextCss = "skeleton-text{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;display:inline-block;margin-bottom:1rem;width:100%;--line-height:1.2;--font-size:1rem;contain:content}skeleton-text span{display:inline-block;border-radius:4px;background-color:var(--theme-base5);overflow:hidden;font-size:var(--font-size, 1rem);width:var(--width);line-height:var(--line-height)}skeleton-text[loading] span{position:relative}skeleton-text[loading] span::before{content:\"\";display:block;position:absolute;top:0;right:0;bottom:0;left:0;background-color:var(--theme-base5);background-image:linear-gradient(45deg, var(--theme-base5) 0%, var(--theme-base5) 20%, var(--theme-base3) 40%, var(--theme-base4) 61%, var(--theme-base5) 80%, var(--theme-base5) 100%);background-repeat:no-repeat;width:300%;height:100%}skeleton-text[loading].visible span::before{-webkit-animation:2.75s linear 0s shimmer infinite forwards;animation:2.75s linear 0s shimmer infinite forwards}skeleton-text[as=\"h1\"]{--font-size:2.8rem}skeleton-text[as=\"h2\"]{--font-size:2.4rem;--line-height:1.33}skeleton-text[as=\"h3\"]{--font-size:2rem;--line-height:1.4}skeleton-text[as=\"h4\"]{--font-size:1.8rem;--line-height:1.6}skeleton-text[as=\"h5\"]{--font-size:1.4rem;--line-height:1.22}skeleton-text[as=\"h6\"]{--line-height:1.5;--font-size:1.2rem}@-webkit-keyframes shimmer{0%{opacity:0;-webkit-transform:translateX(calc(var(--width) * -1.75));transform:translateX(calc(var(--width) * -1.75))}10%{opacity:1}90%{opacity:1}100%{opacity:0;-webkit-transform:translateX(calc(var(--width) * 1.75));transform:translateX(calc(var(--width) * 1.75))}}@keyframes shimmer{0%{opacity:0;-webkit-transform:translateX(calc(var(--width) * -1.75));transform:translateX(calc(var(--width) * -1.75))}10%{opacity:1}90%{opacity:1}100%{opacity:0;-webkit-transform:translateX(calc(var(--width) * 1.75));transform:translateX(calc(var(--width) * 1.75))}}";

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
