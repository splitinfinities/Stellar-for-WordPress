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
import { c as registerInstance, d as h, f as getElement } from './stellar-core-3af17cd6.js';
import './chunk-c16f1b5d.js';
import './chunk-80aceae1.js';
import { d as blurringEase } from './chunk-a45d5d95.js';
import './chunk-091920a9.js';
var Content = /** @class */ (function () {
    function Content(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.open = false;
        this.ease = blurringEase({
            end: 6,
            start: -1,
            duration: 200,
            tick: function (args) {
                _this.blur = args.value;
            },
            complete: function () {
                _this.blur = 0;
                _this.ease.stop();
            },
        });
        this.blur = 0;
    }
    Content.prototype.handleActive = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var contents;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.parent = event.detail.parent;
                        return [4 /*yield*/, this.parent.contents()];
                    case 1:
                        contents = _a.sent();
                        if (event.detail.name !== this.element.id) {
                            contents.forEach(function (element) {
                                element.open = element.id === event.detail.name;
                                if (element.open) {
                                    _this.ease.start();
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Content.prototype.render = function () {
        return (h("stellar-blur", { class: "wrap", role: "tabpanel", vertical: this.blur, "aria-hidden": !this.open ? "true" : "false" }, h("slot", null)));
    };
    Object.defineProperty(Content.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Content, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:none;-webkit-animation-name:fadeInUp;animation-name:fadeInUp;-webkit-animation-timing-function:var(--ease);animation-timing-function:var(--ease);-webkit-animation-duration:.35s;animation-duration:.35s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-transform:translate3d(0,15px,0);transform:translate3d(0,15px,0);opacity:0}:host([open]){display:block;opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}\@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,15px,0);transform:translate3d(0,15px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,15px,0);transform:translate3d(0,15px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}"; },
        enumerable: true,
        configurable: true
    });
    return Content;
}());
export { Content as stellar_content };
