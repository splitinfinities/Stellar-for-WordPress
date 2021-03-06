var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
import { r as registerInstance, h, d as getElement } from './index-bcfb4a9f.js';
import './_commonjsHelpers-ae1b5db5.js';
import { p as properties } from './css-custom-properties.min-dfcc36c1.js';
var LongShadowCss = ":host{contain:content}:host,:host ::slotted(*){text-shadow:var(--text-shadow);-webkit-transition:text-shadow 350ms var(--ease) 350ms;transition:text-shadow 350ms var(--ease) 350ms}";
var LongShadow = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.direction = "top-left";
        this.length = 100;
        this.delay = 100;
        this.timing = 50;
        this.active = false;
    }
    class_1.prototype.componentWillLoad = function () {
        this.children = Array.from(this.element.children);
    };
    class_1.prototype.handleChanges = function () {
        this.in();
    };
    class_1.prototype.getShadowCSS = function () {
        var vertical = this.direction.includes("top");
        var horizontal = this.direction.includes("left");
        // @ts-ignore
        var css = Array(this.length).fill("").map(function (item, index) {
            var y = index * (horizontal ? -1 : 1);
            var x = index * (vertical ? -1 : 1);
            return y + "px " + x + "px var(--theme-complement7)";
        });
        return css.join();
    };
    class_1.prototype.out = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                properties.set({ "--text-shadow": "none" }, this.element);
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.in = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                properties.set({ "--text-shadow": this.getShadowCSS() }, this.element);
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        return h("stellar-intersection", { element: this.element, multiple: true, in: this.in.bind(this), out: this.out.bind(this) }, h("slot", null));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "length": ["handleChanges"],
                "direction": ["handleChanges"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return LongShadowCss; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { LongShadow as stellar_long_shadow };
