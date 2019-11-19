import { d as registerInstance, f as h, g as getElement } from './stellar-core-1e602ba1.js';
import './chunk-40f083d9.js';
import { a as properties } from './chunk-d0cf38d8.js';
import './chunk-27460e3f.js';
import './chunk-f26db59a.js';
import './chunk-cf2c1f95.js';
var Follow = /** @class */ (function () {
    function Follow(hostRef) {
        registerInstance(this, hostRef);
        this.type = "cursor";
        this.distance = 0.5;
        this.padding = 40;
    }
    Follow.prototype.componentWillLoad = function () {
        this.update();
        properties.set({ "--left": "50%", "--top": "-3000px" }, this.element);
    };
    Follow.prototype.componentDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.update();
        }, 200);
    };
    Object.defineProperty(Follow.prototype, "offset", {
        get: function () {
            return window.innerHeight * this.distance;
        },
        enumerable: true,
        configurable: true
    });
    Follow.prototype.update = function () {
        if (this.type === "scroll") {
            this.attachScroll();
        }
        else if (this.type === "cursor") {
            this.attachCursor();
        }
    };
    Follow.prototype.attachScroll = function () {
        var _this = this;
        properties.set({ "--top": window.pageYOffset + this.offset + "px" }, this.element);
        // @ts-ignore
        window.addEventListener("scroll", function () {
            properties.set({ "--top": window.pageYOffset + _this.offset + "px" }, _this.element);
        }, { passive: true });
    };
    Follow.prototype.attachCursor = function () {
        var _this = this;
        // @ts-ignore
        window.addEventListener("mousemove", function (e) {
            properties.set({ "--top": e.clientY + "px" }, _this.element);
            properties.set({ "--left": _this.minmaxx(e.clientX) + "px" }, _this.element);
        }, { passive: true });
        window.addEventListener("deviceorientation", function (e) {
            var z = Math.abs(e.alpha);
            var value = z / 360;
            var percentage = value * 100;
            properties.set({ "--left": _this.minmaxx(percentage) + "px" }, _this.element);
        }, true);
    };
    Follow.prototype.minmaxx = function (x) {
        var left = (this.padding + (this.element.offsetWidth / 2));
        var right = (window.innerWidth - left);
        if (x <= left) {
            x = left;
        }
        else if (x >= right) {
            x = right;
        }
        return x;
    };
    Follow.prototype.render = function () {
        return h("slot", null);
    };
    Object.defineProperty(Follow.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Follow, "watchers", {
        get: function () {
            return {
                "type": ["update"],
                "distance": ["update"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Follow, "style", {
        get: function () { return ":host{--translate-y:calc(-50% + var(--top));--translate-x:calc(-50% + var(--left));position:fixed;top:0;left:0;z-index:20;-webkit-transform:translate3d(var(--translate-x),var(--translate-y),0);transform:translate3d(var(--translate-x),var(--translate-y),0);pointer-events:none}"; },
        enumerable: true,
        configurable: true
    });
    return Follow;
}());
export { Follow as stellar_follow };
