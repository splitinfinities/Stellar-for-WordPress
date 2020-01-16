import { r as registerInstance, h, d as getElement } from './index-bcfb4a9f.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-0e374e95.js';
var BreadcrumbCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;--clip-path:polygon(1em 100%, 0% 0%, calc(100% - 1em) 0%, 100% 100%, calc(100% - 1em) 100%, 0% 100%);--clip-path-first:polygon(0 100%, 0% 0%, calc(100% - 1em) 0%, 100% 100%, calc(100% - 1em) 100%, 0% 100%);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-clip-path:var(--clip-path);clip-path:var(--clip-path);margin:0 0 0 -0.35em;background:var(--white);text-align:center;text-decoration:none;color:var(--theme-base8)}:host a:hover,:host a:focus,:host(:focus-within){background:var(--theme-base0);color:var(--theme-base9)}:host([first]) a:hover,:host([first]) a:focus,:host([first]:focus-within){background:var(--theme-base9);color:white}:host ::slotted(*){--margin:0}:host a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:1em 1.75em;height:auto;text-decoration:none;white-space:nowrap;color:currentColor;font-size:var(--font-size);font-weight:600}:host a ion-icon{margin-right:.25em}:host(:hover),:host(:focus){color:var(--white);background:var(--theme-base5)}:host([first]){background:var(--theme-base7);color:var(--white);margin:0 -0.25rem 0 -0.15em;position:-webkit-sticky;position:sticky;left:-.5rem;z-index:2;-webkit-clip-path:var(--clip-path-first);clip-path:var(--clip-path-first)}:host([first]) a{padding-left:1.5em;padding-right:1.75em}:host([first]) a ion-icon{margin:0}:host([last]){color:var(--gray9);background:var(--white)}:host([last]:hover),:host([last]:focus),:host([last]) a:hover,:host([last]) a:focus{background:white;color:var(--gray9)}:host([dark]){background:var(--black);color:var(--theme-base0)}:host([dark]:hover),:host([dark]:focus),:host([dark]) a:hover,:host([dark]) a:focus,:host([dark]:focus-within){color:var(--white);background:var(--theme-base7)}:host([dark][last]){color:white;background:var(--black)}:host([dark][first]){background:var(--theme-base9)}:host([dark][last]:hover),:host([dark][last]:focus),:host([dark][last]) a:hover,:host([dark][last]) a:focus{background:var(--black);color:white}";
var Breadcrumb = /** @class */ (function () {
    function Breadcrumb(hostRef) {
        registerInstance(this, hostRef);
        this.href = "/";
        this.tag = "link";
        this.target = "_self";
        this.label = "Breadcrumb link";
        this.disabled = false;
        this.dark = false;
    }
    Breadcrumb.prototype.componentDidLoad = function () {
        this.label += " for " + this.element.textContent;
    };
    Breadcrumb.prototype.getTag = function () {
        if (this.tag === "link") {
            return "a";
        }
        if (this.tag === "route") {
            return "stencil-route-link";
        }
    };
    Breadcrumb.prototype.render = function () {
        var Tag = this.getTag();
        // @ts-ignore
        return h(Tag, { class: "button", href: this.href, url: this.href, target: this.target, "aria-label": this.label, title: this.label, "data-disabled": this.disabled }, h("slot", null));
    };
    Object.defineProperty(Breadcrumb.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Breadcrumb, "style", {
        get: function () { return BreadcrumbCss; },
        enumerable: true,
        configurable: true
    });
    return Breadcrumb;
}());
Tunnel.injectProps(Breadcrumb, ['dark']);
export { Breadcrumb as stellar_breadcrumb };
