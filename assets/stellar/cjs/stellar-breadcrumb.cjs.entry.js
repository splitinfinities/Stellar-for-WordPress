'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-c90f54d2.js');

class Breadcrumb {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.href = "/";
        this.target = "_self";
        this.label = "Breadcrumb link";
        this.disabled = false;
    }
    componentDidLoad() {
        this.label += ` for ${this.element.textContent}`;
    }
    render() {
        return (__chunk_1.h("a", { class: "button", href: this.href, target: this.target, "aria-label": this.label, title: this.label, "data-disabled": this.disabled }, __chunk_1.h("slot", null)));
    }
    get element() { return __chunk_1.getElement(this); }
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-clip-path:polygon(1em 100%,0 0,calc(100% - 1em) 0,100% 100%,calc(100% - 1em) 100%,0 100%);clip-path:polygon(1em 100%,0 0,calc(100% - 1em) 0,100% 100%,calc(100% - 1em) 100%,0 100%);-webkit-clip-path:polygon(calc(100% - .5em) 0,100% 50%,calc(100% - .5em) 100%,0 100%,calc(0% + .5em) 50%,0 0);clip-path:polygon(calc(100% - .5em) 0,100% 50%,calc(100% - .5em) 100%,0 100%,calc(0% + .5em) 50%,0 0);margin:0 0 0 -.35em;background:var(--white);text-align:center;text-decoration:none;color:var(--theme-base8)}:host(:focus-within),:host a:focus,:host a:hover{background:var(--theme-base5);color:#fff}:host a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:1em 1.75em;height:auto;text-decoration:none;white-space:nowrap;color:currentColor;font-size:var(--font-size);font-weight:600}:host a stellar-asset{margin-right:.25em}:host(:focus),:host(:hover){color:var(--white);background:var(--theme-base5)}:host([first]){background:var(--theme-base7);color:var(--white);margin:0 -.25rem 0 -.15em;position:-webkit-sticky;position:sticky;left:-.5rem;z-index:2}:host([first]) a{padding-left:1.25em;padding-right:1.25em}:host([first]) a stellar-asset{margin:0}:host([last]){color:var(--gray9);background:var(--white)}:host([last]) a:focus,:host([last]) a:hover,:host([last]:focus),:host([last]:hover){background:#fff;color:var(--gray9)}:host-context(.dark-mode){background:var(--black);color:var(--theme-base0)}:host-context(.dark-mode):host(:focus),:host-context(.dark-mode):host(:focus-within),:host-context(.dark-mode):host(:hover),:host-context(.dark-mode):host a:focus,:host-context(.dark-mode):host a:hover{color:var(--white);background:var(--theme-base7)}:host-context(.dark-mode):host([last]){color:#fff;background:var(--black)}:host-context(.dark-mode):host([first]){background:var(--theme-base9)}:host-context(.dark-mode):host([last]) a:focus,:host-context(.dark-mode):host([last]) a:hover,:host-context(.dark-mode):host([last]:focus),:host-context(.dark-mode):host([last]:hover){background:var(--black);color:#fff}"; }
}

exports.stellar_breadcrumb = Breadcrumb;
