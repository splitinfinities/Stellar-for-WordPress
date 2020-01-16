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
import { r as registerInstance, g as getElement, h } from './index-d1f18b4d.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-ea971d04.js';
import { m as matchPath } from './match-path-fd602b4d.js';
import { i as isModifiedEvent } from './dom-utils-c19d19f4.js';
import { A as ActiveRouter } from './active-router-d86e1937.js';
var ContextConsumer = /** @class */ (function () {
    function ContextConsumer(hostRef) {
        registerInstance(this, hostRef);
        this.context = {};
        this.renderer = function () { return null; };
    }
    ContextConsumer.prototype.connectedCallback = function () {
        if (this.subscribe != null) {
            this.unsubscribe = this.subscribe(this.el, 'context');
        }
    };
    ContextConsumer.prototype.disconnectedCallback = function () {
        if (this.unsubscribe != null) {
            this.unsubscribe();
        }
    };
    ContextConsumer.prototype.render = function () {
        return this.renderer(Object.assign({}, this.context));
    };
    Object.defineProperty(ContextConsumer.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return ContextConsumer;
}());
var CopyWrapCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;display:block}:host([align=\"left\"]){text-align:left !important}:host([align=\"left\"]) ::slotted(*){margin-right:auto !important}:host([align=\"center\"]){text-align:center !important}:host([align=\"center\"]) ::slotted(*){margin-right:auto !important;margin-left:auto !important}:host([align=\"right\"]){text-align:right !important}:host([align=\"right\"]) ::slotted(*){margin-left:auto !important}:host ::slotted(stellar-button){display:inline-block}:host ::slotted(img),:host ::slotted(stellar-code-block){margin-bottom:2rem}:host ::slotted(*:last-child){margin-bottom:0}:host([full]) ::slotted(*){max-width:100%}:host ::slotted(ul),:host ::slotted(ol){margin:.25em 0;display:inline-block;text-align:left}:host ::slotted(li){margin-top:0.5em}";
var CopyWrap = /** @class */ (function () {
    function CopyWrap(hostRef) {
        registerInstance(this, hostRef);
        this.align = "left";
        this.full = false;
    }
    CopyWrap.prototype.render = function () {
        return h("slot", null);
    };
    Object.defineProperty(CopyWrap, "style", {
        get: function () { return CopyWrapCss; },
        enumerable: true,
        configurable: true
    });
    return CopyWrap;
}());
var AssetCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;display:block;-webkit-transform-origin:.5em .5em;transform-origin:.5em .5em}:host .icon-wrap{display:-ms-flexbox;display:flex}";
var Asset = /** @class */ (function () {
    function Asset(hostRef) {
        registerInstance(this, hostRef);
        this.name = "person";
        this.language = "ios-";
        this.block = false;
    }
    Asset.prototype.componentWillLoad = function () {
        this.ariaLabel = this.name
            .replace('ios-', '')
            .replace('md-', '')
            .replace(/\-/g, ' ');
    };
    Asset.prototype.render = function () {
        return (h("div", { class: "icon-wrap" }, h("ion-icon", { src: this.src, name: this.name, ariaLabel: this.ariaLabel, "aria-label": this.ariaLabel })));
    };
    Object.defineProperty(Asset, "style", {
        get: function () { return AssetCss; },
        enumerable: true,
        configurable: true
    });
    return Asset;
}());
var ButtonCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;-moz-appearance:none !important;appearance:none !important;-webkit-appearance:none !important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:var(--wrap-display, inline-block);font-family:var(--font-heading);text-align:center;vertical-align:baseline;-ms-flex-item-align:center;align-self:center;--width:auto;--height:auto;--padding-vertical:var(--ms0);--padding-horizontal:var(--ms2);--padding:var(--padding-vertical) var(--padding-horizontal);--background:var(--theme-base5);--color:var(--white);--border:none;--active-background:var(--theme-base7);--active-color:var(--white);--active-border:none;--border:none;--border-radius:0;--font-size:var(--ms0);--text-decoration:none}:host([outline]){--background:transparent;--color:var(--theme-base5);--border:2px solid currentColor;--active-background:var(--theme-base0);--active-color:var(--theme-base7);--active-border:2px solid currentColor}:host([ghost]){--padding-vertical:0;--padding-horizontal:0;--background:none;--color:var(--theme-base5);--border:none;--active-background:none;--active-color:var(--theme-base7);--active-border:none}:host([outline][invert]){--background:transparent;--border:2px solid currentColor;--active-background:var(--theme-base0);--active-border:2px solid currentColor}:host([ghost][invert]){--background:none;--color:var(--theme-base2);--border:none;--active-background:none;--active-color:var(--theme-base5);--active-border:none}:host([invert]){--background:var(--white);--color:var(--theme-base2);--border:none;--active-background:var(--theme-base0);--active-color:var(--theme-base5);--active-border:none}:host([contrast]){--background:var(--theme-base7);--color:var(--white);--border:none;--active-background:var(--theme-base9);--active-color:var(--theme-base0);--active-border:none}:host([pill]){--border-radius:1000px}:host([size=\"tiny\"]){--font-size:var(--ms-2)}:host([size=\"small\"]){--font-size:var(--ms-1)}:host([size=\"medium\"]){--font-size:var(--ms1)}:host([size=\"large\"]){--font-size:var(--ms2)}:host([padding=\"tiny\"]){--padding-vertical:var(--ms-2);--padding-horizontal:var(--ms0)}:host([padding=\"small\"]){--padding-vertical:var(--ms-1);--padding-horizontal:var(--ms1)}:host([padding=\"medium\"]){--padding-vertical:var(--ms1);--padding-horizontal:var(--ms3)}:host([padding=\"large\"]){--padding-vertical:var(--ms2);--padding-horizontal:var(--ms4)}:host(:active){-webkit-transform:scale(0.925);transform:scale(0.925)}:host(.h-auto){--height:100%;--padding-vertical:0}:host .button{cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;outline:0;border:var(--border);background:var(--background);padding:var(--padding);width:var(--width);height:var(--height);vertical-align:bottom;-webkit-text-decoration:var(--text-decoration);text-decoration:var(--text-decoration);line-height:1;letter-spacing:var(--letter-spacing, 0.0275em);white-space:nowrap;color:var(--color);font-family:inherit;font-size:var(--font-size);font-weight:600;border-radius:var(--border-radius, 0)}:host a.button,:host span.button{width:auto}:host .button:hover,:host .button:focus{border:var(--active-border);background-color:var(--active-background);color:var(--active-color)}:host .button .content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host([block]),:host([block]) .button{display:block;width:100%}:host ::slotted(*){line-height:1 !important;font-family:inherit}:host([icon]) .button .content{display:inline-grid;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;grid-template-columns:auto auto;grid-gap:0.1em}:host ::slotted(img),:host ::slotted(stellar-asset){display:inline-block;float:none;width:1em;height:1em;font-size:1.75em;margin:calc(var(--padding-vertical) * -0.5) 0 calc(var(--padding-vertical) * -0.5) calc(var(--padding-vertical) * -0.5)}:host([ghost]) ::slotted(img),:host([ghost]) ::slotted(stellar-asset){font-size:1.65em}:host ::slotted(img[align=\"left\"]),:host ::slotted(stellar-asset[align=\"left\"]){-ms-flex-order:-1;order:-1;margin-right:var(--ms-7)}:host ::slotted(img[align=\"right\"]),:host ::slotted(stellar-asset[align=\"right\"]){-ms-flex-order:2;order:2;margin-left:var(--ms-7)}:host([dark]){--background:var(--theme-base7);--color:var(--white);--active-background:var(--theme-base9);--active-color:var(--white);--active-border:none}:host([dark][outline]){--background:transparent;--color:var(--white);--border:2px solid var(--theme-base5);--active-background:var(--theme-base9);--active-color:var(--theme-base0);--active-border:2px solid var(--theme-base9)}:host([dark][ghost]){--padding:0.05em 0 0.125em;--background:none;--color:var(--theme-base5);--border:none;--active-background:none;--active-color:var(--theme-base7);--active-border:none}";
var Button = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Allows the button to render for different tags.
         */
        this.tag = "link";
        /**
         * Sets accessibility options on the buttons
         */
        this.label = 'Submit';
        /**
         * Sets the name on the button if the button is an input. Allows the button to act as an item in a form.
         */
        this.name = '';
        /**
         * Sets the value on the button if the button is an input.
         */
        this.value = '';
        /**
         * Sets the href on the anchor tag if the button is a link.
         */
        this.href = '#';
        /**
         * Sets the target on the anchor tag if the button is a link.
         */
        this.target = '_self';
        /**
         * Sets the button or link as a button with only an icon.
         */
        this.icon = false;
        /**
         * Sets the button or link as an active state.
         */
        this.active = false;
        /**
         * Sets the button or link as disabled and not-interactable.
         */
        this.disabled = false;
        /**
         * Sets the button or link to provide the affordance of a dangerous action.
         */
        this.danger = false;
        /**
         * Sets the button or link to render as a pill.
         */
        this.pill = false;
        /**
         * Sets the button or link to render at full width to the parent.
         */
        this.block = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.outline = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.invert = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.contrast = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.pjax = false;
        /**
         * Sets the button or link as processing when clicked.
         */
        this.processable = false;
        this.processing = false;
        this.ghost = false;
    }
    class_1.prototype.componentWillLoad = function () {
        if (!this.element.getAttribute("title")) {
            this.label = this.element.innerText;
        }
        else {
            this.label = this.element.getAttribute("title");
        }
        this.icon = this.element.querySelectorAll('stellar-asset').length > 0;
    };
    class_1.prototype.click = function () {
        return __awaiter(this, void 0, void 0, function () {
            var target, modal;
            return __generator(this, function (_a) {
                if (this.processable) {
                    this.processing = true;
                }
                if (this.for) {
                    target = this.for.split(":");
                    if (target[0] === "modal") {
                        modal = document.querySelector("stellar-modal[name=\"" + target[1] + "\"]");
                        modal.open();
                    }
                }
                if (this.tag === "submit") {
                    // @ts-ignore
                    this.element.closest('stellar-form').submit_form();
                }
                if (this.tag === "link") {
                    window.location.href = this.href;
                }
                if (this.tag === "pjax") {
                    document.querySelector('stellar-pjax').pjax.loadUrl(this.href);
                }
                return [2 /*return*/, true];
            });
        });
    };
    class_1.prototype.renderSVG = function () {
        return (h("stellar-asset", { src: "Loading", color: "white" }));
    };
    class_1.prototype.renderButton = function () {
        var _this = this;
        return (h("button", { type: "button", class: "button", title: this.label, disabled: this.disabled, onClick: function () { _this.click(); } }, h("div", { class: "content" }, h("slot", null, "Submit")), this.processing && h("div", { class: "processing" }, this.renderSVG())));
    };
    class_1.prototype.renderSubmit = function () {
        var _this = this;
        return (h("button", { type: "submit", class: "button", title: this.label, disabled: this.disabled, name: this.name, value: this.value, onClick: function () { _this.click(); } }, h("div", { class: "content" }, h("slot", null, "Submit")), this.processing && h("div", { class: "processing" }, this.renderSVG())));
    };
    class_1.prototype.renderLink = function () {
        var _this = this;
        return (h("a", { href: this.href, target: this.target, class: "button", "data-disabled": this.disabled, title: this.label, onClick: function () { _this.click(); } }, h("div", { class: "content" }, h("slot", null, "Submit")), this.processing && h("div", { class: "processing" }, this.renderSVG())));
    };
    class_1.prototype.renderAppLink = function () {
        var _this = this;
        return (h("stencil-route-link", { url: this.href, anchorClass: "button", "data-disabled": this.disabled, title: this.label, onClick: function () { _this.click(); } }, h("div", { class: "content" }, h("slot", null, "Submit")), this.processing && h("div", { class: "processing" }, this.renderSVG())));
    };
    class_1.prototype.renderSpan = function () {
        var _this = this;
        return (h("span", { class: "button", title: this.label, "data-disabled": this.disabled, "aria-label": "Button " + this.label + " " + this.element.textContent, tabIndex: 0, onClick: function () { _this.click(); } }, h("div", { class: "content" }, h("slot", null, "Submit")), this.processing && h("div", { class: "processing" }, this.renderSVG())));
    };
    class_1.prototype.render = function () {
        return [
            this.tag === "button" && this.renderButton(),
            this.tag === "submit" && this.renderSubmit(),
            this.tag === "link" && this.renderLink(),
            this.tag === "route-link" && this.renderAppLink(),
            this.tag === "span" && this.renderSpan(),
            this.tag === "pjax" && this.renderSpan()
        ];
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ButtonCss; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
Tunnel.injectProps(Button, ['dark']);
var getUrl = function (url, root) {
    // Don't allow double slashes
    if (url.charAt(0) == '/' && root.charAt(root.length - 1) == '/') {
        return root.slice(0, root.length - 1) + url;
    }
    return root + url;
};
var RouteLink = /** @class */ (function () {
    function RouteLink(hostRef) {
        registerInstance(this, hostRef);
        this.unsubscribe = function () { return; };
        this.activeClass = 'link-active';
        this.exact = false;
        this.strict = true;
        /**
          *  Custom tag to use instead of an anchor
          */
        this.custom = 'a';
        this.match = null;
    }
    RouteLink.prototype.componentWillLoad = function () {
        this.computeMatch();
    };
    // Identify if the current route is a match.
    RouteLink.prototype.computeMatch = function () {
        if (this.location) {
            this.match = matchPath(this.location.pathname, {
                path: this.urlMatch || this.url,
                exact: this.exact,
                strict: this.strict
            });
        }
    };
    RouteLink.prototype.handleClick = function (e) {
        if (isModifiedEvent(e) || !this.history || !this.url || !this.root) {
            return;
        }
        e.preventDefault();
        return this.history.push(getUrl(this.url, this.root));
    };
    // Get the URL for this route link without the root from the router
    RouteLink.prototype.render = function () {
        var _a;
        var anchorAttributes = {
            class: (_a = {},
                _a[this.activeClass] = this.match !== null,
                _a),
            onClick: this.handleClick.bind(this)
        };
        if (this.anchorClass) {
            anchorAttributes.class[this.anchorClass] = true;
        }
        if (this.custom === 'a') {
            anchorAttributes = Object.assign({}, anchorAttributes, { href: this.url, title: this.anchorTitle, role: this.anchorRole, tabindex: this.anchorTabIndex, 'aria-haspopup': this.ariaHaspopup, id: this.anchorId, 'aria-posinset': this.ariaPosinset, 'aria-setsize': this.ariaSetsize, 'aria-label': this.ariaLabel });
        }
        return (h(this.custom, Object.assign({}, anchorAttributes), h("slot", null)));
    };
    Object.defineProperty(RouteLink.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteLink, "watchers", {
        get: function () {
            return {
                "location": ["computeMatch"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return RouteLink;
}());
ActiveRouter.injectProps(RouteLink, [
    'history',
    'location',
    'root'
]);
export { ContextConsumer as context_consumer, CopyWrap as copy_wrap, Asset as stellar_asset, Button as stellar_button, RouteLink as stencil_route_link };
