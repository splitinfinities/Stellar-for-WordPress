var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { d as registerInstance, f as h, g as getElement } from './stellar-core-1e602ba1.js';
import './chunk-40f083d9.js';
import { a as properties } from './chunk-d0cf38d8.js';
import { a as delay } from './chunk-4a053c09.js';
var Scatter = /** @class */ (function () {
    function Scatter(hostRef) {
        registerInstance(this, hostRef);
        this.animation = "fadeInUp";
        this.outAnimation = "fadeOut";
        this.delay = 100;
        this.timing = 50;
        this.active = false;
    }
    Scatter.prototype.componentWillLoad = function () {
        this.children = Array.from(this.element.children);
    };
    Scatter.prototype.componentDidLoad = function () {
        this.addIntersectionObserver();
    };
    Scatter.prototype.addIntersectionObserver = function () {
        var _this = this;
        if ('IntersectionObserver' in window) {
            this.io = new IntersectionObserver(function (data) {
                // because there will only ever be one instance
                // of the element we are observing
                // we can just use data[0]
                if (data[0].isIntersecting) {
                    setTimeout(function () {
                        _this.active = true;
                        _this.in();
                    }, 350);
                    _this.removeIntersectionObserver();
                }
            }, {
                rootMargin: '50%',
                threshold: [0]
            });
            this.io.observe(this.element.parentElement);
        }
        else {
            // fall back to setTimeout for Safari and IE
            setTimeout(function () {
                _this.in();
            }, 300);
        }
    };
    Scatter.prototype.removeIntersectionObserver = function () {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    };
    Scatter.prototype.calculateTiming = function () {
        return __awaiter(this, void 0, void 0, function () {
            var time;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        time = 1000 + (this.children.length * this.delay);
                        return [4 /*yield*/, delay(time)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Scatter.prototype.out = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        properties.set({
                            "--animation": this.outAnimation
                        }, this.element);
                        this.children.forEach(function (element, index) {
                            // @ts-ignore
                            element.style.setProperty('animation-delay', _this.delay * index + "ms");
                            element.style.setProperty('animation-timing', _this.timing + "ms");
                        });
                        return [4 /*yield*/, this.calculateTiming()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Scatter.prototype.in = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        properties.set({
                            "--animation": this.animation
                        }, this.element);
                        this.children.forEach(function (element, index) {
                            // @ts-ignore
                            element.style.setProperty('animation-delay', _this.delay * index + "ms");
                            element.style.setProperty('animation-timing', _this.timing + "ms");
                        });
                        return [4 /*yield*/, this.calculateTiming()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Scatter.prototype.render = function () {
        return (h("slot", null));
    };
    Object.defineProperty(Scatter.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scatter, "style", {
        get: function () { return ":host{display:contents;--animation:fadeIn}:host ::slotted(*){opacity:0}:host([active]) ::slotted(*){-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:var(--ease);animation-timing-function:var(--ease);-webkit-animation-name:var(--animation);animation-name:var(--animation)}"; },
        enumerable: true,
        configurable: true
    });
    return Scatter;
}());
export { Scatter as stellar_reveal };
