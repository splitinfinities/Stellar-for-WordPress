'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-c90f54d2.js');
require('./chunk-ee96ca86.js');
const __chunk_3 = require('./chunk-61a48f92.js');

class SkeletonText {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.as = 'p';
        this.width = 100;
        this.loading = false;
    }
    componentWillLoad() {
        __chunk_3.properties.set({
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
        return __chunk_1.h("span", null, "\u00A0");
    }
    get element() { return __chunk_1.getElement(this); }
    static get style() { return "skeleton-text{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;display:inline-block;margin-bottom:1rem;width:100%;--line-height:1.2;--font-size:1rem}skeleton-text span{display:inline-block;border-radius:4px;background-color:var(--theme-base5);overflow:hidden;font-size:var(--font-size,1rem);width:var(--width);line-height:var(--line-height)}skeleton-text[loading] span{position:relative}skeleton-text[loading] span:before{content:\"\";display:block;position:absolute;top:0;right:0;bottom:0;left:0;background-color:var(--theme-base5);background-image:linear-gradient(45deg,var(--theme-base5),var(--theme-base5) 20%,var(--theme-base3) 40%,var(--theme-base4) 61%,var(--theme-base5) 80%,var(--theme-base5));background-repeat:no-repeat;width:300%;height:100%}skeleton-text[loading].visible span:before{-webkit-animation:shimmer 2.75s linear 0s infinite forwards;animation:shimmer 2.75s linear 0s infinite forwards}skeleton-text[as=h1]{--font-size:2.8rem}skeleton-text[as=h2]{--font-size:2.4rem;--line-height:1.33}skeleton-text[as=h3]{--font-size:2rem;--line-height:1.4}skeleton-text[as=h4]{--font-size:1.8rem;--line-height:1.6}skeleton-text[as=h5]{--font-size:1.4rem;--line-height:1.22}skeleton-text[as=h6]{--line-height:1.5;--font-size:1.2rem}\@-webkit-keyframes shimmer{0%{opacity:0;-webkit-transform:translateX(calc(var(--width) * -1.75));transform:translateX(calc(var(--width) * -1.75))}10%{opacity:1}90%{opacity:1}to{opacity:0;-webkit-transform:translateX(calc(var(--width) * 1.75));transform:translateX(calc(var(--width) * 1.75))}}\@keyframes shimmer{0%{opacity:0;-webkit-transform:translateX(calc(var(--width) * -1.75));transform:translateX(calc(var(--width) * -1.75))}10%{opacity:1}90%{opacity:1}to{opacity:0;-webkit-transform:translateX(calc(var(--width) * 1.75));transform:translateX(calc(var(--width) * 1.75))}}"; }
}

exports.skeleton_text = SkeletonText;