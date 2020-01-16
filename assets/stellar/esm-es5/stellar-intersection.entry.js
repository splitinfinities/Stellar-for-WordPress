import { r as registerInstance, g as getElement } from './index-36b06d19.js';
var Intersection = /** @class */ (function () {
    function Intersection(hostRef) {
        registerInstance(this, hostRef);
        this.in = function () { };
        this.out = function () { };
        this.margin = "0%";
    }
    Intersection.prototype.componentWillLoad = function () {
        if (!this.element) {
            this.element = this.el;
        }
        this.addIntersectionObserver();
    };
    Intersection.prototype.componentDidUnload = function () {
        this.removeIntersectionObserver();
    };
    Intersection.prototype.addIntersectionObserver = function () {
        var _this = this;
        try {
            if ('IntersectionObserver' in window) {
                this.io = new IntersectionObserver(function (data) {
                    if (!_this.multiple) {
                        if (data[0].isIntersecting) {
                            _this.in();
                            _this.removeIntersectionObserver();
                        }
                    }
                    else {
                        if (data[0].isIntersecting) {
                            _this.in();
                        }
                        else {
                            _this.out();
                        }
                    }
                }, {
                    rootMargin: this.margin,
                    threshold: [0]
                });
                if (typeof this.element === "string" && this.element.constructor.name === "String") {
                    this.io.observe(document.querySelector(this.element));
                }
                else {
                    this.io.observe(this.element);
                }
            }
        }
        catch (e) {
            // no intersection observer
        }
    };
    Intersection.prototype.removeIntersectionObserver = function () {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    };
    Object.defineProperty(Intersection.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return Intersection;
}());
export { Intersection as stellar_intersection };
