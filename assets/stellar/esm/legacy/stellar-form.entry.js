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
import { d as registerInstance, i as createEvent, f as h, g as getElement } from './stellar-core-1e602ba1.js';
import './chunk-40f083d9.js';
import './chunk-d0cf38d8.js';
import { d as asyncForEach, e as form2js } from './chunk-27460e3f.js';
import './chunk-f26db59a.js';
import './chunk-cf2c1f95.js';
var Form = /** @class */ (function () {
    function Form(hostRef) {
        registerInstance(this, hostRef);
        this.ajax = false;
        this.method = "get";
        this.autocomplete = "on";
        this.enctype = "multipart/form-data";
        this.novalidate = false;
        this.selectors = ['stellar-input', 'stellar-toggle', 'stellar-range', 'stellar-switch', 'stellar-select'];
        this.submit = createEvent(this, "submit", 7);
    }
    Form.prototype.handleEnter = function (event) {
        if (event.key === 'enter') {
            this.submit_form();
        }
    };
    Form.prototype.register = function (selectors) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.selectors = this.selectors.concat(selectors);
                return [2 /*return*/];
            });
        });
    };
    Form.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resizeEvent;
            return __generator(this, function (_a) {
                resizeEvent = window.document.createEvent('UIEvents');
                resizeEvent.initUIEvent('resize', true, false, window, 0);
                window.dispatchEvent(resizeEvent);
                return [2 /*return*/];
            });
        });
    };
    Form.prototype.state = function () {
        return __awaiter(this, void 0, void 0, function () {
            var formData, results, valid, els, json;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formData = new FormData();
                        results = [];
                        valid = true;
                        els = Array.from(this.element.querySelectorAll(this.selectors.join(",")));
                        return [4 /*yield*/, asyncForEach(els, function (element) { return __awaiter(_this, void 0, void 0, function () {
                                var result, e_1;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 2, , 3]);
                                            return [4 /*yield*/, element.validate()];
                                        case 1:
                                            result = _a.sent();
                                            results.push(result);
                                            return [3 /*break*/, 3];
                                        case 2:
                                            e_1 = _a.sent();
                                            results.push({
                                                name: "" + element.name,
                                                value: undefined,
                                                valid: false,
                                                errors: [e_1.message],
                                            });
                                            return [3 /*break*/, 3];
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        results.forEach(function (result) {
                            if (result) {
                                if (result.name) {
                                    formData.append(result.name.toString(), result.value);
                                }
                                if (!result.valid) {
                                    valid = false;
                                }
                            }
                        });
                        json = form2js(results.filter(function (i) { return i && i.name; }));
                        return [2 /*return*/, {
                                els: els,
                                json: json,
                                results: results,
                                formData: formData,
                                valid: valid,
                            }];
                }
            });
        });
    };
    Form.prototype.submit_form = function () {
        return __awaiter(this, void 0, void 0, function () {
            var state;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.state()];
                    case 1:
                        state = _a.sent();
                        if (state.valid) {
                            if (this.ajax) {
                                this.submit.emit(state);
                            }
                            else {
                                this.element.querySelector('form').submit();
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Form.prototype.render = function () {
        var _this = this;
        return (h("form", { action: this.action, method: this.method, "accept-charset": this.acceptCharset, autocomplete: this.autocomplete, enctype: this.enctype, name: this.name, novalidate: this.novalidate, target: this.target, onSubmit: function (e) { e.preventDefault(); _this.submit_form(); } }, h("slot", null)));
    };
    Object.defineProperty(Form.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Form, "style", {
        get: function () { return "stellar-form{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return Form;
}());
export { Form as stellar_form };
