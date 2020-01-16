import { r as registerInstance, h, d as getElement } from './index-bcfb4a9f.js';
import './index-320c6878.js';
import './_commonjsHelpers-ae1b5db5.js';
import { p as properties } from './css-custom-properties.min-dfcc36c1.js';
import './main-07539eea.js';
import './moment-b6827264.js';
var KeyframesCss = ":host{--position:var(--position, 0);display:block;width:100%;height:100%;max-width:var(--width);max-height:var(--height);contain:content}:host .background{background-position:var(--position);background-size:cover;width:var(--width);height:var(--height);display:block}";
var Keyframes = /** @class */ (function () {
    function Keyframes(hostRef) {
        registerInstance(this, hostRef);
        this.width = 400;
        this.height = 400;
        this.frame = 1;
    }
    Keyframes.prototype.componentWillLoad = function () {
        this.update();
    };
    Keyframes.prototype.update = function () {
        properties.set({
            '--width': this.width + "px",
            '--height': this.height + "px",
            '--aspect-ratio': this.width / this.height * 100 + "%",
            '--position': "0 " + this.height * -(this.frame - 1) + "px"
        }, this.element);
    };
    Keyframes.prototype.render = function () {
        return h("div", { class: "background", style: { "background-image": "url(" + this.src + ")" } });
    };
    Object.defineProperty(Keyframes.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Keyframes, "watchers", {
        get: function () {
            return {
                "frame": ["update"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Keyframes, "style", {
        get: function () { return KeyframesCss; },
        enumerable: true,
        configurable: true
    });
    return Keyframes;
}());
export { Keyframes as stellar_keyframes };
