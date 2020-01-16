import { r as registerInstance, h, H as Host, d as getElement } from './index-bcfb4a9f.js';
var InterstitialCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;position:fixed;z-index:999999;height:auto;top:0;left:0;right:0;bottom:0;background:var(--black);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);display:grid;padding:2rem;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100vh;width:100vw;opacity:1;-webkit-transition:all 100ms ease 0s;transition:all 100ms ease 0s}:host(.hide){opacity:0}:host ::slotted(*){max-width:60rem;height:auto;width:90%;top:0;left:0;right:0;bottom:0;margin:auto}:host([fullscreen]),:host([fullscreen=\"\"]){padding:0}:host([fullscreen]) ::slotted(*),:host([fullscreen=\"\"]) ::slotted(*){max-width:100%;width:100%;height:100%}";
var Interstitial = /** @class */ (function () {
    function Interstitial(hostRef) {
        registerInstance(this, hostRef);
        this.shown = true;
        this.hash = "";
    }
    Interstitial.prototype.componentWillLoad = function () {
        this.hash = btoa(unescape(encodeURIComponent(this.el.innerText)));
        if (this.remember && localStorage.getItem(this.hash)) {
            this.shown = !(localStorage.getItem(this.hash) === "hidden");
        }
    };
    Interstitial.prototype.handleClose = function () {
        this.shown = false;
        if (this.remember) {
            localStorage.setItem(this.hash, "hidden");
        }
    };
    Interstitial.prototype.render = function () {
        return (h(Host, { class: "" + (this.shown ? "show" : "hide") }, h("slot", null)));
    };
    Object.defineProperty(Interstitial.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Interstitial, "style", {
        get: function () { return InterstitialCss; },
        enumerable: true,
        configurable: true
    });
    return Interstitial;
}());
export { Interstitial as stellar_interstitial };
