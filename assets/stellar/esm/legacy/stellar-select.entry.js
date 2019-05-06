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
import { c as registerInstance, h as createEvent, d as h, f as getElement } from './stellar-core-3af17cd6.js';
import { a as delay } from './chunk-4a053c09.js';
var Select = /** @class */ (function () {
    function Select(hostRef) {
        registerInstance(this, hostRef);
        this.name = "select";
        this.placeholder = "Choose something...";
        this.required = false;
        this.open = false;
        this.verbiage = "selection";
        this.valueLabel = undefined;
        this.blur = 0;
        this.clear_confirm = false;
        this.values = [];
        this.change = createEvent(this, "change", 7);
    }
    Select.prototype.componentWillLoad = function () {
        if (this.multiple) {
            this.value = [];
        }
        this.listen_to_values();
    };
    Select.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.current = this.element.shadowRoot.querySelector('stellar-item.current');
                        if (!this.multiple) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.option_elements()];
                    case 1:
                        options = _a.sent();
                        // @ts-ignore
                        options.forEach(function (element) {
                            element.multiple = true;
                        });
                        _a.label = 2;
                    case 2:
                        if (this.default) {
                            if (typeof this.default === "object" && this.default.constructor.name === "Array") {
                                this.default.forEach(function (value) {
                                    // @ts-ignore
                                    _this.element.querySelector("stellar-item[value=\"" + value + "\"]").select_item();
                                });
                            }
                            else {
                                // @ts-ignore
                                this.element.querySelector("stellar-item[value=\"" + this.default + "\"]").select_item();
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Select.prototype.clearValue = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.clear_confirm) return [3 /*break*/, 3];
                        return [4 /*yield*/, delay(100)];
                    case 1:
                        _a.sent();
                        this.clear_confirm = false;
                        this.value = [];
                        this.values = [];
                        return [4 /*yield*/, this.option_elements()];
                    case 2:
                        options = _a.sent();
                        Array.from(options).forEach(function (element) {
                            element.selected = false;
                        });
                        this.change.emit(this.value);
                        return [3 /*break*/, 4];
                    case 3:
                        this.clear_confirm = true;
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Select.prototype.handleOpenChange = function () {
        // @ts-ignore
        this.element.shadowRoot.querySelector('button.select-title').focus();
    };
    Select.prototype.handleMultipleChange = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.option_elements()];
                    case 1:
                        options = _a.sent();
                        // @ts-ignore
                        options.forEach(function (element) {
                            element.multiple = value;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Select.prototype.mountedHandler = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var data, option_elements, values_1, options;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = event.detail;
                        if (!this.multiple) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.option_elements()];
                    case 1:
                        option_elements = _a.sent();
                        values_1 = [];
                        // @ts-ignore
                        option_elements.forEach(function (option) {
                            option.selectable = true;
                            if (_this.value && _this.value.includes(option.value) && !data.element.selected) {
                                option.selected = true;
                            }
                            if (option.selected) {
                                values_1.push(option.value);
                            }
                        });
                        this.value = values_1;
                        return [3 /*break*/, 4];
                    case 2:
                        this.value = data.element.selected ? data.element.value : this.value;
                        if (!this.value) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.option_elements()];
                    case 3:
                        options = _a.sent();
                        // @ts-ignore
                        options.forEach(function (element) {
                            element.selectable = true;
                            if (_this.value === element.value) {
                                element.selected = true;
                            }
                        });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Select.prototype.selectionChangedHandler = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var data, option_elements, values_2, options, _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        data = event.detail;
                        if (!this.multiple) return [3 /*break*/, 2];
                        data.selected = !data.selected;
                        return [4 /*yield*/, this.option_elements()];
                    case 1:
                        option_elements = _c.sent();
                        values_2 = [];
                        // @ts-ignore
                        option_elements.forEach(function (option) {
                            if (_this.value && _this.value.includes(option.value) && data.value !== option.value) {
                                option.selected = true;
                            }
                            if (option.selected) {
                                values_2.push(option.value);
                            }
                        });
                        this.value = values_2;
                        this.change.emit(this.value);
                        return [3 /*break*/, 6];
                    case 2:
                        if (!!data.element.classList.contains("current")) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.option_elements()];
                    case 3:
                        options = _c.sent();
                        // @ts-ignore
                        options.forEach(function (element) {
                            element.selected = false;
                        });
                        data.selected = true;
                        this.value = data.value;
                        this.change.emit(this.value);
                        if (!this.current) return [3 /*break*/, 5];
                        _b = (_a = this.current).apply;
                        return [4 /*yield*/, data.data()];
                    case 4:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 5;
                    case 5:
                        setTimeout(function () {
                            _this.open = false;
                        }, 200);
                        _c.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Select.prototype.selectedFocusChangedHandler = function () {
        this.focused = true;
    };
    Select.prototype.selectedBlurChangedHandler = function () {
        this.focused = false;
    };
    Select.prototype.handleTitleFocus = function () {
        this.focused = true;
    };
    Select.prototype.handleTitleBlur = function () {
        this.focused = false;
    };
    Select.prototype.handleNotClick = function (e) {
        if (e.target !== this.element && !this.element.contains(e.target)) {
            if (this.open) {
                this.open = false;
            }
        }
    };
    Select.prototype.handleEscapeKey = function (event) {
        if (event.key === "space" && this.open) {
            this.open = false;
        }
    };
    Select.prototype.handleArrowKeys = function (ev) {
        if (ev.keyCode === 40 || ev.keyCode === 38) {
            if (this.open) {
                ev.preventDefault();
                ev.stopPropagation();
                if (ev.keyCode === 40) {
                    this.focusNextOption();
                }
                else {
                    this.focusPreviousOption();
                }
            }
        }
    };
    Select.prototype.readable_value = function () {
        // @ts-ignore
        if (typeof this.value === "object") {
            if (this.value.length === 0) {
                if (this.placeholderInverted) {
                    return "All " + this.verbiage + "(s) selected";
                }
                else {
                    return "No " + this.verbiage + "(s) selected";
                }
            }
            return this.value.length + " " + this.verbiage + (this.value.length > 1 ? "s" : "");
        }
        else if (typeof this.value === "string") {
            return this.valueLabel || this.value.toString() || "Select " + (this.verbiageAn ? "an" : "a") + " " + this.verbiage;
        }
        else {
            return this.valueLabel || this.value;
        }
    };
    Select.prototype.validate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status, options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        status = {
                            name: "" + this.name,
                            value: this.value,
                            valid: true,
                            errors: [],
                        };
                        if (!!this.novalidate) return [3 /*break*/, 2];
                        // @ts-ignore
                        if (!this.value) {
                            status.valid = false;
                            status.errors.push({ message: 'This field is required.' });
                        }
                        return [4 /*yield*/, this.options()];
                    case 1:
                        options = _a.sent();
                        // @ts-ignore
                        if (!options.includes(this.value)) {
                            status.valid = false;
                            status.errors.push({ message: "\"" + this.value + "\" isn't a valid option." });
                        }
                        _a.label = 2;
                    case 2:
                        this.status = status;
                        return [2 /*return*/, this.status];
                }
            });
        });
    };
    Select.prototype.listen_to_values = function () {
        var _this = this;
        var targetNode = this.element;
        var config = { childList: true, subtree: true };
        var callback = function (mutationsList) {
            for (var _i = 0, mutationsList_1 = mutationsList; _i < mutationsList_1.length; _i++) {
                var mutation = mutationsList_1[_i];
                if (mutation.type == 'childList') {
                    _this.update_values();
                }
            }
        };
        this.observer = new MutationObserver(callback);
        this.observer.observe(targetNode, config);
    };
    Select.prototype.update_values = function () {
        return __awaiter(this, void 0, void 0, function () {
            var values;
            var _this = this;
            return __generator(this, function (_a) {
                values = Array.from(this.element.querySelectorAll('stellar-item'));
                this.values = values.map(function (element) {
                    if (_this.multiple) {
                        element.multiple = true;
                    }
                    if (element.valueLabel && element.selected) {
                        _this.valueLabel = element.valueLabel;
                    }
                    return element.value;
                });
                return [2 /*return*/];
            });
        });
    };
    Select.prototype.option_elements = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.element.querySelectorAll('stellar-item:not(.current)')];
            });
        });
    };
    Select.prototype.options = function () {
        return __awaiter(this, void 0, void 0, function () {
            var elements, options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.option_elements()];
                    case 1:
                        elements = _a.sent();
                        options = [];
                        // @ts-ignore
                        elements.forEach(function (option) {
                            options.push(option.value);
                        });
                        return [2 /*return*/, options];
                }
            });
        });
    };
    Select.prototype.focusPaths = function () {
        return __awaiter(this, void 0, void 0, function () {
            var current, next, previous, elements, first;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        current = undefined;
                        next = undefined;
                        previous = undefined;
                        return [4 /*yield*/, this.options()];
                    case 1:
                        elements = _a.sent();
                        // @ts-ignore
                        elements.forEach(function (element, index) {
                            // @ts-ignore
                            if (element.hasFocus()) {
                                previous = elements[index - 1];
                                current = element;
                                next = elements[index + 1];
                            }
                        });
                        if (!current) {
                            first = elements[0];
                            this.focusElement(first);
                            current = first;
                        }
                        return [2 /*return*/, { previous: previous, current: current, next: next }];
                }
            });
        });
    };
    Select.prototype.focusFirstItem = function () {
        //@ts-ignore
        this.element.querySelector('.select-list stellar-item:first-of-type').focus();
    };
    Select.prototype.focusElement = function (element) {
        element.focus();
    };
    Select.prototype.focusNextOption = function () {
        return __awaiter(this, void 0, void 0, function () {
            var elements;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.focusPaths()];
                    case 1:
                        elements = _a.sent();
                        if (elements.next) {
                            this.focusElement(elements.next);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Select.prototype.focusPreviousOption = function () {
        return __awaiter(this, void 0, void 0, function () {
            var elements;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.focusPaths()];
                    case 1:
                        elements = _a.sent();
                        if (elements.previous) {
                            this.focusElement(elements.previous);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Select.prototype.closeOthers = function () {
        var _this = this;
        var selects = document.querySelectorAll('stellar-select[open]');
        Array.from(selects).forEach(function (s) {
            if (s !== _this.element) {
                s.open = false;
            }
        });
    };
    Select.prototype.handleTitleClick = function () {
        this.closeOthers();
        this.open = !this.open;
    };
    Select.prototype.renderLabel = function () {
        var _this = this;
        if (this.label) {
            return h("div", { class: "label-wrapper" }, h("stellar-label", { onClick: function () { _this.focusFirstItem(); } }, this.label), this.renderEmptyButton());
        }
    };
    Select.prototype.renderErrors = function () {
        if (this.status && this.status.errors && this.status.errors.length !== 0) {
            return (h("p", { class: "validation" }, this.status.errors.map(function (error) { return h("span", null, error.message); })));
        }
    };
    Select.prototype.renderEmptyButton = function () {
        var _this = this;
        return this.multiple && this.value && this.value.length > 0 && h("stellar-button", { tag: "button", size: "tiny", ghost: true, class: "theme-red", onClick: function (e) { e.stopPropagation(); _this.clearValue(); } }, h("stellar-asset", { name: "close", class: "fs4 mr1" }), this.clear_confirm ? "Clear " + this.value.length + " selections?" : "Clear");
    };
    Select.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "wrapper" }, this.renderLabel(), h("div", { class: "select" }, h("button", { type: "button", class: "select-title", onClick: function () { return _this.handleTitleClick(); }, onFocus: function () { return _this.handleTitleFocus(); }, onBlur: function () { return _this.handleTitleBlur(); } }, h("stellar-item", { class: "current", type: "button", value: this.value ? this.value.toString() : "", tabindex: "-1", selectable: false, label: this.readable_value() }, this.readable_value()), h("stellar-asset", { name: "arrow-down" }), this.name && h("input", { type: "text", tabindex: "-1", value: this.value, name: this.name.toString(), required: this.required })), this.tooltip && h("stellar-tooltip", { align: "bottom-left", onClick: function () { return _this.handleTitleClick(); } }, this.tooltip), h("stellar-blur", { vertical: this.blur, class: "select-list" }, h("div", { class: "select-list-header" }, h("slot", { name: "header" })), h("div", { class: "select-list-body" }, h("slot", null)), this.footer && h("div", { class: "select-list-footer" }, h("slot", { name: "footer" })))), h("stellar-label", { size: "small", underneath: true }, this.description), !this.novalidate && this.renderErrors()));
    };
    Object.defineProperty(Select.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Select, "watchers", {
        get: function () {
            return {
                "open": ["handleOpenChange"],
                "multiple": ["handleMultipleChange"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Select, "style", {
        get: function () { return ":host{--color:var(--black);--border-radius:0.3rem;--item-size:4.25rem;--background:var(--white);--border-color:var(--gray1);-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;font-family:inherit;position:relative}:host(:not(.hydrated)){display:none}:host ::slotted(stellar-item),:host stellar-item{--item-size:4.2rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:inherit}:host .select{display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column}:host .select-title{cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;outline:none;border:1px solid var(--border-color);border-radius:var(--border-radius);padding:0;width:100%;height:var(--item-size);overflow:hidden;line-height:1.4;color:var(--color);font-weight:500;background:var(--background)}:host([focused]) .select-title,:host .select-title:focus,:host .wrapper:hover .select-title{border-color:var(--theme-base5);-webkit-box-shadow:0 0 0 1px var(--theme-base5);box-shadow:0 0 0 1px var(--theme-base5)}:host .select-title stellar-item{background:var(--background)!important;color:var(--color)!important}:host .select-title input{display:none}:host .select-title stellar-asset{position:absolute;right:2rem;-webkit-transition:-webkit-transform .1s var(--ease) 0s;transition:-webkit-transform .1s var(--ease) 0s;transition:transform .1s var(--ease) 0s;transition:transform .1s var(--ease) 0s,-webkit-transform .1s var(--ease) 0s;font-size:1.6rem;color:var(--theme-base5);background:transparent;border:0}:host .select-title .button stellar-asset{display:none}:host([open]) .select-title stellar-asset{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host .select-list{display:-ms-flexbox;display:flex;position:relative;top:0;left:0;-ms-flex-direction:column;flex-direction:column;-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transition:opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s,-webkit-transform .2s var(--ease) .35s;transition:opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s,-webkit-transform .2s var(--ease) .35s;transition:transform .2s var(--ease) .35s,opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s;transition:transform .2s var(--ease) .35s,opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s,-webkit-transform .2s var(--ease) .35s;opacity:0;z-index:3;background:var(--background);width:100%;max-height:0;overflow-x:hidden;overflow-y:hidden;color:var(--theme-base5);border:1px solid var(--border-color);pointer-events:none;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.15);box-shadow:0 1px 2px rgba(0,0,0,.15);border-radius:.3rem}:host .select-list ::slotted(stellar-item){color:var(--color);border-bottom:1px solid var(--border-color)}:host .select-list ::slotted(stellar-item:last-child){border-bottom:none}:host .label-wrapper{width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:1rem;height:1.8rem}:host .label-wrapper stellar-label{margin:0}:host .select-list-footer{-ms-flex-order:3;order:3;height:4rem;border-top:1px solid var(--theme-base5)}stellar-input .validation{margin-bottom:0;color:var(--red5);font-size:var(--complementing-font-size);font-weight:500}stellar-input .validation span{display:block;padding:1.4rem 0;line-height:1.4}stellar-input .validation span+span{border-top:1px solid var(--border-color)}:host([open]) .select-list,:host .select-list:focus-within{-webkit-transition:opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms,-webkit-transform .2s var(--ease) 0ms;transition:opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms,-webkit-transform .2s var(--ease) 0ms;transition:transform .2s var(--ease) 0ms,opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms;transition:transform .2s var(--ease) 0ms,opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms,-webkit-transform .2s var(--ease) 0ms;opacity:1;pointer-events:auto;max-height:20rem;overflow-y:auto}:host([size=small]) .select-title{height:3.5rem}:host([size=small]) .select-title stellar-asset{right:1rem}:host([size=small]) .label{font-size:.75rem}:host([size=small]) stellar-item{--font-size:1.4rem;--item-size:3.5rem}:host([size=small]) .select-list:focus-within,:host([size=small][open]) .select-list{max-height:11rem}:host([overlay]) .select-list{position:absolute;top:calc((var(--item-size) * .75) + .5rem)}:host stellar-tooltip{cursor:pointer}:host stellar-item stellar-tooltip{display:none}:host-context(.dark-mode){--background:var(--black-alt);--color:var(--white);--border-color:var(--gray9)}:host ::selection{background:var(--theme-base0)!important}"; },
        enumerable: true,
        configurable: true
    });
    return Select;
}());
export { Select as stellar_select };
