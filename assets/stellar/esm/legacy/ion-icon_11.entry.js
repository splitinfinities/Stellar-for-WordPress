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
import { d as registerInstance, e as getContext, f as h, g as getElement, h as Host, i as createEvent } from './stellar-core-1e602ba1.js';
import { a as createCommonjsModule, b as commonjsRequire, c as commonjsGlobal } from './chunk-40f083d9.js';
import { a as properties } from './chunk-d0cf38d8.js';
import { a as ActiveRouter } from './chunk-8013bf55.js';
import { a as matchPath } from './chunk-252e4780.js';
import './chunk-7be683ab.js';
import { a as delay } from './chunk-4a053c09.js';
import { a as isModifiedEvent } from './chunk-7e89c2ea.js';
var CACHED_MAP;
function getIconMap() {
    if (!CACHED_MAP) {
        var win = window;
        win.Ionicons = win.Ionicons || {};
        CACHED_MAP = win.Ionicons.map = win.Ionicons.map || new Map();
    }
    return CACHED_MAP;
}
function getName(name, mode, ios, md) {
    mode = (mode || 'md').toLowerCase();
    mode = mode === 'ios' ? 'ios' : 'md';
    if (ios && mode === 'ios') {
        name = ios.toLowerCase();
    }
    else if (md && mode === 'md') {
        name = md.toLowerCase();
    }
    else if (name) {
        name = name.toLowerCase();
        if (!/^md-|^ios-|^logo-/.test(name)) {
            name = mode + "-" + name;
        }
    }
    if (typeof name !== 'string' || name.trim() === '') {
        return null;
    }
    var invalidChars = name.replace(/[a-z]|-|\d/gi, '');
    if (invalidChars !== '') {
        return null;
    }
    return name;
}
function getSrc(src) {
    if (typeof src === 'string') {
        src = src.trim();
        if (isSrc(src)) {
            return src;
        }
    }
    return null;
}
function isSrc(str) {
    return str.length > 0 && /(\/|\.)/.test(str);
}
function isValid(elm) {
    if (elm.nodeType === 1) {
        if (elm.nodeName.toLowerCase() === 'script') {
            return false;
        }
        for (var i = 0; i < elm.attributes.length; i++) {
            var val = elm.attributes[i].value;
            if (typeof val === 'string' && val.toLowerCase().indexOf('on') === 0) {
                return false;
            }
        }
        for (var i = 0; i < elm.childNodes.length; i++) {
            if (!isValid(elm.childNodes[i])) {
                return false;
            }
        }
    }
    return true;
}
var Icon = /** @class */ (function () {
    function Icon(hostRef) {
        registerInstance(this, hostRef);
        this.isVisible = false;
        this.lazy = false;
        this.isServer = getContext(this, "isServer");
        this.resourcesUrl = getContext(this, "resourcesUrl");
        this.doc = getContext(this, "document");
        this.win = getContext(this, "window");
    }
    Icon.prototype.componentWillLoad = function () {
        var _this = this;
        this.waitUntilVisible(this.el, '50px', function () {
            _this.isVisible = true;
            _this.loadIcon();
        });
    };
    Icon.prototype.componentDidUnload = function () {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    };
    Icon.prototype.waitUntilVisible = function (el, rootMargin, cb) {
        var _this = this;
        if (this.lazy && this.win && this.win.IntersectionObserver) {
            var io_1 = this.io = new this.win.IntersectionObserver(function (data) {
                if (data[0].isIntersecting) {
                    io_1.disconnect();
                    _this.io = undefined;
                    cb();
                }
            }, { rootMargin: rootMargin });
            io_1.observe(el);
        }
        else {
            cb();
        }
    };
    Icon.prototype.loadIcon = function () {
        var _this = this;
        if (!this.isServer && this.isVisible) {
            var url = this.getUrl();
            if (url) {
                getSvgContent(this.doc, url, 's-ion-icon')
                    .then(function (svgContent) { return _this.svgContent = svgContent; });
            }
            else {
                console.error('icon was not resolved');
            }
        }
        if (!this.ariaLabel) {
            var name = getName(this.getName(), this.mode, this.ios, this.md);
            if (name) {
                this.ariaLabel = name
                    .replace('ios-', '')
                    .replace('md-', '')
                    .replace(/\-/g, ' ');
            }
        }
    };
    Icon.prototype.getName = function () {
        if (this.name !== undefined) {
            return this.name;
        }
        if (this.icon && !isSrc(this.icon)) {
            return this.icon;
        }
        return undefined;
    };
    Icon.prototype.getUrl = function () {
        var url = getSrc(this.src);
        if (url) {
            return url;
        }
        url = getName(this.getName(), this.mode, this.ios, this.md);
        if (url) {
            return this.getNamedUrl(url);
        }
        url = getSrc(this.icon);
        if (url) {
            return url;
        }
        return null;
    };
    Icon.prototype.getNamedUrl = function (name) {
        var url = getIconMap().get(name);
        if (url) {
            return url;
        }
        return this.resourcesUrl + "svg/" + name + ".svg";
    };
    Icon.prototype.hostData = function () {
        var _a;
        var flipRtl = this.flipRtl || (this.ariaLabel && this.ariaLabel.indexOf('arrow') > -1 && this.flipRtl !== false);
        return {
            'role': 'img',
            class: Object.assign({}, createColorClasses(this.color), (_a = {}, _a["icon-" + this.size] = !!this.size, _a['flip-rtl'] = flipRtl && this.doc.dir === 'rtl', _a))
        };
    };
    Icon.prototype.__stencil_render = function () {
        if (!this.isServer && this.svgContent) {
            return h("div", { class: "icon-inner", innerHTML: this.svgContent });
        }
        return h("div", { class: "icon-inner" });
    };
    Object.defineProperty(Icon.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Icon, "watchers", {
        get: function () {
            return {
                "icon": ["loadIcon"],
                "name": ["loadIcon"],
                "src": ["loadIcon"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Icon.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
    Object.defineProperty(Icon, "style", {
        get: function () { return ":host{display:inline-block;width:1em;height:1em;contain:strict;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}.icon-inner,svg{display:block;fill:currentColor;stroke:currentColor;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px!important}:host(.icon-large){font-size:32px!important}:host(.ion-color){color:var(--ion-color-base)!important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary,#3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary,#0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary,#f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success,#10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning,#ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger,#f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light,#f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium,#989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark,#222428)}"; },
        enumerable: true,
        configurable: true
    });
    return Icon;
}());
var requests = new Map();
function getSvgContent(doc, url, scopedId) {
    var req = requests.get(url);
    if (!req) {
        req = fetch(url, { cache: 'force-cache' }).then(function (rsp) {
            if (isStatusValid(rsp.status)) {
                return rsp.text();
            }
            return Promise.resolve(null);
        }).then(function (svgContent) { return validateContent(doc, svgContent, scopedId); });
        requests.set(url, req);
    }
    return req;
}
function isStatusValid(status) {
    return status <= 299;
}
function validateContent(document, svgContent, scopeId) {
    if (svgContent) {
        var frag = document.createDocumentFragment();
        var div = document.createElement('div');
        div.innerHTML = svgContent;
        frag.appendChild(div);
        for (var i = div.childNodes.length - 1; i >= 0; i--) {
            if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
                div.removeChild(div.childNodes[i]);
            }
        }
        var svgElm = div.firstElementChild;
        if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
            if (scopeId) {
                svgElm.setAttribute('class', scopeId);
            }
            if (isValid(svgElm)) {
                return div.innerHTML;
            }
        }
    }
    return '';
}
function createColorClasses(color) {
    var _a;
    return (color) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : null;
}
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
        return (h("div", { class: "icon-wrap" }, h("ion-icon", { src: !this.name && this.src ? this.src : undefined, name: !this.src && this.name ? this.language + this.name : undefined, ariaLabel: this.ariaLabel, "aria-label": this.ariaLabel })));
    };
    Object.defineProperty(Asset, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;-webkit-transform-origin:.5em .5em;transform-origin:.5em .5em}:host .icon-wrap{display:-ms-flexbox;display:flex}:host([block]),:host([block]) ion-icon,:host([block]) ion-icon .icon-inner,:host([block]) ion-icon .icon-inner svg{width:100%;height:auto}"; },
        enumerable: true,
        configurable: true
    });
    return Asset;
}());
var Blur = /** @class */ (function () {
    function Blur(hostRef) {
        registerInstance(this, hostRef);
        this.vertical = 0;
        this.horizontal = 0;
    }
    Blur.prototype.supported_match = function () {
        return navigator.userAgent.toLowerCase().indexOf('firefox') === -1 &&
            !(/iPad|iPhone|iPod/.test(navigator.platform));
    };
    Blur.prototype.supported = function () {
        var _this = this;
        var criteria = function () {
            var result;
            try {
                if (sessionStorage.getItem('blur-supported') === "true") {
                    return sessionStorage.getItem('blur-supported') === "true";
                }
                result = _this.supported_match();
                sessionStorage.setItem('blur-supported', result ? "true" : "false");
            }
            catch (e) {
                result = _this.supported_match();
            }
            return result;
        };
        try {
            sessionStorage.clear();
        }
        catch (e) { }
        return criteria();
    };
    Blur.prototype.setBlurFilter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                properties.set({
                    "--blur-url": "url('#" + this.generatedId + "-filter')"
                }, this.element);
                return [2 /*return*/];
            });
        });
    };
    Blur.prototype.componentDidLoad = function () {
        var _this = this;
        if (this.supported()) {
            this.generatedId = this.element.id || this.generateId();
            setTimeout(function () {
                _this.setBlurFilter();
            }, 10);
        }
    };
    Blur.prototype.generateId = function () {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        return "blur-" + getRandomInt(0, 1000);
    };
    Blur.prototype.render = function () {
        return h(Host, { id: this.element.id || this.generatedId }, h("slot", null), this.supported() && h("svg", { class: "blur-svg" }, h("defs", null, h("filter", { id: this.generatedId + "-filter" }, h("feGaussianBlur", { id: this.generatedId + "-gaussian", in: "SourceGraphic", stdDeviation: this.horizontal + "," + this.vertical })))));
    };
    Object.defineProperty(Blur.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Blur, "style", {
        get: function () { return "stellar-blur,stellar-blur *,stellar-blur :after,stellar-blur :before{-webkit-box-sizing:border-box;box-sizing:border-box}stellar-blur{-webkit-filter:var(--blur-url);filter:var(--blur-url);display:block;overflow:initial}stellar-blur .blur-svg{display:none}\@media (prefers-reduced-motion:reduce){stellar-blur{-webkit-filter:none!important;filter:none!important}}"; },
        enumerable: true,
        configurable: true
    });
    return Blur;
}());
var Breadcrumb = /** @class */ (function () {
    function Breadcrumb(hostRef) {
        registerInstance(this, hostRef);
        this.href = "/";
        this.tag = "link";
        this.target = "_self";
        this.label = "Breadcrumb link";
        this.disabled = false;
    }
    Breadcrumb.prototype.componentDidLoad = function () {
        this.label += " for " + this.element.textContent;
    };
    Breadcrumb.prototype.getTag = function () {
        if (this.tag === "link") {
            return "a";
        }
        if (this.tag === "route") {
            return "stencil-route-link";
        }
    };
    Breadcrumb.prototype.render = function () {
        var Tag = this.getTag();
        // @ts-ignore
        return h(Tag, { class: "button", href: this.href, url: this.href, target: this.target, "aria-label": this.label, title: this.label, "data-disabled": this.disabled }, h("slot", null));
    };
    Object.defineProperty(Breadcrumb.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Breadcrumb, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--clip-path:polygon(1em 100%,0% 0%,calc(100% - 1em) 0%,100% 100%,calc(100% - 1em) 100%,0% 100%);--clip-path-first:polygon(0 100%,0% 0%,calc(100% - 1em) 0%,100% 100%,calc(100% - 1em) 100%,0% 100%);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-clip-path:var(--clip-path);clip-path:var(--clip-path);margin:0 0 0 -.35em;background:var(--white);text-align:center;text-decoration:none;color:var(--theme-base8)}:host(:focus-within),:host a:focus,:host a:hover{background:var(--theme-base0);color:var(--theme-base9)}:host([first]) a:focus,:host([first]) a:hover,:host([first]:focus-within){background:var(--theme-base9);color:#fff}:host ::slotted(*){--margin:0}:host a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:1em 1.75em;height:auto;text-decoration:none;white-space:nowrap;color:currentColor;font-size:var(--font-size);font-weight:600}:host a stellar-asset{margin-right:.25em}:host(:focus),:host(:hover){color:var(--white);background:var(--theme-base5)}:host([first]){background:var(--theme-base7);color:var(--white);margin:0 -.25rem 0 -.15em;position:-webkit-sticky;position:sticky;left:-.5rem;z-index:2;-webkit-clip-path:var(--clip-path-first);clip-path:var(--clip-path-first)}:host([first]) a{padding-left:1.5em;padding-right:1.75em}:host([first]) a stellar-asset{margin:0}:host([last]){color:var(--gray9);background:var(--white)}:host([last]) a:focus,:host([last]) a:hover,:host([last]:focus),:host([last]:hover){background:#fff;color:var(--gray9)}:host-context(.dark-mode){background:var(--black);color:var(--theme-base0)}:host-context(.dark-mode):host(:focus),:host-context(.dark-mode):host(:focus-within),:host-context(.dark-mode):host(:hover),:host-context(.dark-mode):host a:focus,:host-context(.dark-mode):host a:hover{color:var(--white);background:var(--theme-base7)}:host-context(.dark-mode):host([last]){color:#fff;background:var(--black)}:host-context(.dark-mode):host([first]){background:var(--theme-base9)}:host-context(.dark-mode):host([last]) a:focus,:host-context(.dark-mode):host([last]) a:hover,:host-context(.dark-mode):host([last]:focus),:host-context(.dark-mode):host([last]:hover){background:var(--black);color:#fff}"; },
        enumerable: true,
        configurable: true
    });
    return Breadcrumb;
}());
var Breadcrumbs = /** @class */ (function () {
    function Breadcrumbs(hostRef) {
        registerInstance(this, hostRef);
        this.icon = 'analytics';
        this.icon_size = 0.85;
        this.tag = "link";
        this.home = "/";
        this.label = "Home";
        this.description = "An icon that shows the main page you're on";
        this.color = "blue5";
    }
    Breadcrumbs.prototype.componentWillLoad = function () {
        this.updateBreadcrumbs();
    };
    Breadcrumbs.prototype.updateBreadcrumbs = function () {
        var last_breadcrumb = this.el.querySelector('stellar-breadcrumb:last-of-type');
        var breadcrumbs = this.el.querySelectorAll('stellar-breadcrumb');
        Array.from(breadcrumbs).forEach(function (breadcrumb) {
            breadcrumb.last = false;
        });
        if (last_breadcrumb) {
            last_breadcrumb.last = true;
        }
    };
    Breadcrumbs.prototype.render = function () {
        return (h("div", { id: "breadcumb_wrapper", class: "breadcrumbs" }, h("div", { class: "flush-left" }), h("stellar-breadcrumb", { first: true, tag: this.tag }, h("stellar-asset", { id: "icon", name: this.icon, src: this.icon_src, color: this.color }), h("stellar-label", null, this.label)), h("slot", null), h("div", { class: "flush" })));
    };
    Object.defineProperty(Breadcrumbs.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Breadcrumbs, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--background:#fff;--clip-path:polygon(0 100%,0% 0%,calc(100% - 1em) 0%,100% 100%,calc(100% - 1em) 100%,0% 100%);display:inline-block;border-bottom:1px solid var(--background);background:var(--white);height:3rem;overflow-x:auto;overflow-y:hidden;font-size:var(--font-size,1rem);-webkit-clip-path:var(--clip-path);clip-path:var(--clip-path)}:host stellar-asset{font-size:2rem;line-height:0}:host stellar-label{line-height:1;margin:0 0 0 .25rem;color:#fff}:host .breadcrumbs{display:-ms-inline-flexbox;display:inline-flex;position:relative;background:var(--background);width:auto;height:100%}:host .breadcrumbs .flush{right:0;margin-left:-2rem}:host .breadcrumbs .flush,:host .breadcrumbs .flush-left{display:block;-ms-flex:0 0 2rem;flex:0 0 2rem;background:transparent;width:2rem;height:inherit}:host .breadcrumbs .flush-left{left:0;margin-right:-2.5rem}:host-context(.dark-mode){--background:linear-gradient(45deg,var(--theme-base7),var(--theme-base9))}"; },
        enumerable: true,
        configurable: true
    });
    return Breadcrumbs;
}());
var Button = /** @class */ (function () {
    function Button(hostRef) {
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
         * Sets the size of the button. Can be tiny, small, medium, or large.
         */
        this.size = "medium";
        /**
         * Sets the padding inside of the button. Can be small, medium, or large.
         */
        this.padding = "medium";
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
        this.dark = false;
        /**
         * Sets the button or link as processing when clicked.
         */
        this.processable = false;
        this.processing = false;
        this.ghost = false;
    }
    Button.prototype.click = function () {
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
                return [2 /*return*/, true];
            });
        });
    };
    Button.prototype.renderSVG = function () {
        return (h("stellar-asset", { src: "Loading", color: "white" }));
    };
    Button.prototype.renderButton = function () {
        var _this = this;
        return (h("button", { type: "button", class: "button", title: this.label, disabled: this.disabled, onClick: function () { _this.click(); } }, h("div", { class: "content" }, h("slot", null, "Submit")), this.processing && h("div", { class: "processing" }, this.renderSVG())));
    };
    Button.prototype.renderSubmit = function () {
        var _this = this;
        return (h("button", { type: "submit", class: "button", title: this.label, disabled: this.disabled, name: this.name, value: this.value, onClick: function () { _this.click(); } }, h("div", { class: "content" }, h("slot", null, "Submit")), this.processing && h("div", { class: "processing" }, this.renderSVG())));
    };
    Button.prototype.renderLink = function () {
        var _this = this;
        return (h("a", { href: this.href, target: this.target, class: "button", "data-disabled": this.disabled, title: this.label, onClick: function () { _this.click(); } }, h("div", { class: "content" }, h("slot", null, "Submit")), this.processing && h("div", { class: "processing" }, this.renderSVG())));
    };
    Button.prototype.renderAppLink = function () {
        var _this = this;
        return (h("stencil-route-link", { url: this.href, anchorClass: "button", "data-disabled": this.disabled, title: this.label, onClick: function () { _this.click(); } }, h("div", { class: "content" }, h("slot", null, "Submit")), this.processing && h("div", { class: "processing" }, this.renderSVG())));
    };
    Button.prototype.renderSpan = function () {
        var _this = this;
        return (h("span", { class: "button", title: this.label, "data-disabled": this.disabled, "aria-label": "Button " + this.label + " " + this.element.textContent, tabIndex: 0, onClick: function () { _this.click(); } }, h("div", { class: "content" }, h("slot", null, "Submit")), this.processing && h("div", { class: "processing" }, this.renderSVG())));
    };
    Button.prototype.render = function () {
        return [
            this.tag === "button" && this.renderButton(),
            this.tag === "submit" && this.renderSubmit(),
            this.tag === "link" && this.renderLink(),
            this.tag === "route-link" && this.renderAppLink(),
            this.tag === "span" && this.renderSpan()
        ];
    };
    Object.defineProperty(Button.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{-moz-appearance:none!important;appearance:none!important;-webkit-appearance:none!important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:var(--wrap-display,inline-block);font-family:var(--font-heading);text-align:center;vertical-align:middle;-ms-flex-item-align:center;align-self:center;--width:auto;--padding:1.0625em 2em 1.1em 2em;--background:var(--theme-base5);--color:var(--white);--active-background:var(--theme-base7);--active-color:var(--white);--active-border:none;--border:none;--border-radius:0;--font-size:1.8rem;--text-decoration:none}:host([outline]){--background:transparent;--border:2px solid currentColor;--active-background:var(--theme-base0);--active-border:2px solid currentColor}:host([ghost]),:host([outline]){--color:var(--theme-base5);--active-color:var(--theme-base7)}:host([ghost]){--padding:0.05em 0 0.125em;--background:none;--border:none;--active-background:none;--active-border:none}:host([outline][invert]){--background:transparent;--border:2px solid currentColor;--active-background:var(--theme-base0);--active-border:2px solid currentColor}:host([ghost][invert]){--background:none;--active-background:none}:host([ghost][invert]),:host([invert]){--color:var(--theme-base2);--border:none;--active-color:var(--theme-base5);--active-border:none}:host([invert]){--background:var(--white);--active-background:var(--theme-base0)}:host([dark]){--background:var(--theme-base7);--color:var(--white);--border:none;--active-background:var(--theme-base9);--active-color:var(--theme-base0);--active-border:none}:host([pill]){--border-radius:1000px}:host([size=tiny]){--font-size:1rem}:host([size=small]){--font-size:1.4rem}:host([size=large]){--font-size:2rem}:host([padding=tiny]){--padding:.55em 1.125em .61875em}:host([padding=small]){--padding:.7875em 1.5em .825em}:host([padding=large]){--padding:1.3125em 2.5em 1.375em}:host(:active){-webkit-transform:scale(.925);transform:scale(.925)}:host .button{cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;outline:0;border:var(--border);background:var(--background);padding:var(--padding);width:var(--width);height:auto;vertical-align:bottom;-webkit-text-decoration:var(--text-decoration);text-decoration:var(--text-decoration);line-height:1;letter-spacing:var(--letter-spacing,.0275em);white-space:nowrap;color:var(--color);font-family:inherit;font-size:var(--font-size);font-weight:600;border-radius:var(--border-radius,0)}:host a.button,:host span.button{width:auto}:host .button:focus,:host .button:hover{border:var(--active-border);background-color:var(--active-background);color:var(--active-color)}:host .button .content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host([block]),:host([block]) .button{display:block;width:100%}:host ::slotted(*){font-family:inherit}:host ::slotted(img),:host ::slotted(stellar-asset){display:inline-block;float:none;width:1em;height:1em}:host ::slotted(img[align=left]),:host ::slotted(stellar-asset[align=left]){-ms-flex-order:-1;order:-1;margin-right:.75em}:host ::slotted(img[align=right]),:host ::slotted(stellar-asset[align=right]){-ms-flex-order:2;order:2;margin-left:.75em}:host-context(.dark-mode){--background:var(--theme-base7);--color:var(--white);--active-background:var(--theme-base9);--active-color:var(--white);--active-border:none}:host-context(.dark-mode):host([outline]){--background:transparent;--color:var(--white);--border:2px solid var(--theme-base5);--active-background:var(--theme-base9);--active-color:var(--theme-base0);--active-border:2px solid var(--theme-base9)}:host-context(.dark-mode):host([ghost]){--padding:0.05em 0 0.125em;--background:none;--color:var(--theme-base5);--border:none;--active-background:none;--active-color:var(--theme-base7);--active-border:none}"; },
        enumerable: true,
        configurable: true
    });
    return Button;
}());
function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
var Item = /** @class */ (function () {
    function Item(hostRef) {
        registerInstance(this, hostRef);
        this.type = "button";
        this.href = "#";
        this.wrap = false;
        this.fit = false;
        this.simple = false;
        this.danger = false;
        this.selected = false;
        this.multiple = false;
        this.selectable = false;
        this.focused = false;
        this.route = false;
        this.current = false;
        this.selectionChanged = createEvent(this, "selectionChanged", 7);
        this.mounted = createEvent(this, "mounted", 7);
        this.focusChanged = createEvent(this, "focusChanged", 7);
        this.blurChanged = createEvent(this, "blurChanged", 7);
    }
    Item.prototype.componentWillLoad = function () {
        this.slotted = this.element.innerHTML;
    };
    Item.prototype.componentDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.selected) {
                _this.mounted.emit(_this);
            }
        }, 10);
    };
    Item.prototype.componentDidUnload = function () {
        this.selectionChanged.emit(this);
    };
    Item.prototype.data = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {
                        size: this.size,
                        value: this.value,
                        type: this.type,
                        label: this.label,
                        danger: this.danger,
                        slotted: this.slotted
                    }];
            });
        });
    };
    Item.prototype.apply = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                this.size = data.size;
                this.value = data.value;
                this.type = data.type;
                this.label = data.label;
                button = this.element.shadowRoot.querySelector('.button');
                button.innerHTML = data.slotted;
                return [2 /*return*/];
            });
        });
    };
    Item.prototype.setFocus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.focused = true;
                // @ts-ignore
                this.element.querySelector('.button').focus();
                return [2 /*return*/];
            });
        });
    };
    Item.prototype.handleClick = function (e) {
        if (this.route) {
            e.preventDefault();
            this.history.push(this.href, {});
        }
        if (!this.current) {
            this.selectionChanged.emit(this);
        }
    };
    Item.prototype.handleFocus = function () {
        if (this.current) {
            this.focusChanged.emit(this);
        }
        this.focused = true;
    };
    Item.prototype.handleBlur = function () {
        if (this.current) {
            this.blurChanged.emit(this);
        }
        this.focused = false;
    };
    Item.prototype.classes = function () {
        var classes = "";
        classes += this.selected ? "selected " : "";
        classes += this.multiple ? "multiple " : "";
        return classes;
    };
    Item.prototype.select_item = function (state) {
        return __awaiter(this, void 0, void 0, function () {
            var event, event;
            return __generator(this, function (_a) {
                if (this.selectable) {
                    if (state) {
                        if (this.selected !== state.selected) {
                            event = new CustomEvent('click');
                            this.element.shadowRoot.querySelector('.button').dispatchEvent(event);
                        }
                    }
                    else {
                        event = new CustomEvent('click');
                        this.element.shadowRoot.querySelector('.button').dispatchEvent(event);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    Item.prototype.render = function () {
        var _this = this;
        return (h(this.type, { class: "button", type: "button", href: this.href, url: this.href, tabindex: "0", value: this.value, title: this.label, onClick: function (e) { return _this.handleClick(e); }, onBlur: function () { return _this.handleBlur(); }, onFocus: function () { return _this.handleFocus(); } }, h("slot", null), (this.selected || this.multiple) && h("stellar-asset", { class: this.classes(), name: "checkmark", block: true })));
    };
    Object.defineProperty(Item.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--item-size:2.356em;--font-size:1.4rem;display:block;width:100%;height:var(--item-size);color:var(--theme-base9);font-family:inherit;visibility:visible!important;font-size:var(--font-size);text-align:left;position:relative}:host([fit]){--item-size:auto}:host([fit]) a.button,:host([fit]) button.button,:host([fit]) stencil-route-link a{padding:1.4rem 0 1.4rem 1.4rem}:host([wrap]) .button{white-space:normal;text-align:left}:host([danger]) .button{color:var(--red5)}:host a.button,:host button.button,:host stencil-route-link a{text-decoration:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;outline:0;border:0;background:transparent;padding:0 0 0 1em;width:100%;height:calc(var(--item-size) - 1px);color:currentColor;font-weight:500;font-size:inherit}:host stencil-route-link{padding:0}:host .button a{color:inherit;background:inherit;text-decoration:none}:host .button ::slotted(stellar-avatar){margin-right:.5rem;background:var(--theme-base9);visibility:visible!important;display:block!important;width:2rem;height:2rem}:host .button stellar-tag{margin:auto .5rem auto auto}:host .button stellar-asset{margin-left:1rem;background:radial-gradient(ellipse at center,#fff 0,#fff 50%,hsla(0,0%,100%,0) 80%,hsla(0,0%,100%,0) 100%)}:host .button span{margin:auto auto auto 0;width:100%;text-overflow:ellipsis;white-space:nowrap}:host([size=small]) .button{padding:0 1rem;height:3rem}:host .selected{-webkit-animation:fadeInLeft .2s ease;animation:fadeInLeft .2s ease;font-size:var(--item-size);margin-left:auto!important;background:transparent;color:var(--theme-base5);height:calc(var(--item-size) - 1px)}:host(:focus) .selected,:host(:focus-within) .selected,:host(:hover) .selected{color:var(--theme-base7)}:host([fit]) .selected{right:.75rem;font-size:3em;height:auto}:host([fit]) .selected,:host([fit][multiple]) stellar-asset{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}:host([fit][multiple]) stellar-asset{right:1rem}:host([fit][multiple]) .selected{right:1rem;height:2.5rem;width:2.5rem;font-size:2.5rem}:host(:focus-within),:host(:hover),:host .button:focus,:host .button:hover{background:var(--theme-base0)}:host(.current){background:#fff}:host([danger]) .button:focus,:host([danger]) .button:hover{background:var(--red5);color:#fff}:host([simple]) .button{background:#fff!important}:host(.current) stellar-asset{display:none}:host stellar-asset.multiple{border:1px solid var(--border-color);background:var(--background);border-radius:4px;font-size:2.5rem;width:2.5rem;height:2.5rem;margin:0 0 0 auto;left:-1rem;position:relative;color:transparent}:host stellar-asset.multiple.selected{color:var(--white);background:var(--theme-base5)}:host(.current) .button:focus,:host(.current) .button:hover,:host(.current:focus-within),:host(.current:hover){background:transparent}:host-context(.dark-mode):host(:focus-within),:host-context(.dark-mode):host(:hover),:host-context(.dark-mode):host .button:focus,:host-context(.dark-mode):host .button:hover{background:var(--theme-base8)}:host-context(.dark-mode):host(.current) .button:focus,:host-context(.dark-mode):host(.current) .button:hover,:host-context(.dark-mode):host(.current:focus-within),:host-context(.dark-mode):host(.current:hover){background:transparent}"; },
        enumerable: true,
        configurable: true
    });
    return Item;
}());
if (injectHistory) {
    injectHistory(Item);
}
var Label = /** @class */ (function () {
    function Label(hostRef) {
        registerInstance(this, hostRef);
    }
    Label.prototype.render = function () {
        // @ts-ignore
        return h("label", { for: this.for }, h("slot", null));
    };
    Object.defineProperty(Label, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--margin:.75em;line-height:1.3;color:var(--gray9);font-size:1.4rem;display:block;font-weight:600;letter-spacing:.05em;margin-bottom:var(--margin);cursor:pointer}:host([underneath]){margin-top:var(--margin);margin-bottom:0;color:var(--gray5);font-weight:600;text-transform:none}:host([size=small]){font-size:1.2rem}:host([size=tiny]){font-size:1rem}:host label{all:inherit}:host-context(.dark-mode):host{color:var(--gray0)}:host-context(.dark-mode):host([underneath]){color:var(--gray5)}"; },
        enumerable: true,
        configurable: true
    });
    return Label;
}());
var pluralize = createCommonjsModule(function (module, exports) {
    /* global define */
    (function (root, pluralize) {
        /* istanbul ignore else */
        if (typeof commonjsRequire === 'function' && 'object' === 'object' && 'object' === 'object') {
            // Node.
            module.exports = pluralize();
        }
        else {
            // Browser global.
            root.pluralize = pluralize();
        }
    })(commonjsGlobal, function () {
        // Rule storage - pluralize and singularize need to be run sequentially,
        // while other rules can be optimized using an object for instant lookups.
        var pluralRules = [];
        var singularRules = [];
        var uncountables = {};
        var irregularPlurals = {};
        var irregularSingles = {};
        /**
         * Sanitize a pluralization rule to a usable regular expression.
         *
         * @param  {(RegExp|string)} rule
         * @return {RegExp}
         */
        function sanitizeRule(rule) {
            if (typeof rule === 'string') {
                return new RegExp('^' + rule + '$', 'i');
            }
            return rule;
        }
        /**
         * Pass in a word token to produce a function that can replicate the case on
         * another word.
         *
         * @param  {string}   word
         * @param  {string}   token
         * @return {Function}
         */
        function restoreCase(word, token) {
            // Tokens are an exact match.
            if (word === token)
                return token;
            // Lower cased words. E.g. "hello".
            if (word === word.toLowerCase())
                return token.toLowerCase();
            // Upper cased words. E.g. "WHISKY".
            if (word === word.toUpperCase())
                return token.toUpperCase();
            // Title cased words. E.g. "Title".
            if (word[0] === word[0].toUpperCase()) {
                return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();
            }
            // Lower cased words. E.g. "test".
            return token.toLowerCase();
        }
        /**
         * Interpolate a regexp string.
         *
         * @param  {string} str
         * @param  {Array}  args
         * @return {string}
         */
        function interpolate(str, args) {
            return str.replace(/\$(\d{1,2})/g, function (match, index) {
                return args[index] || '';
            });
        }
        /**
         * Replace a word using a rule.
         *
         * @param  {string} word
         * @param  {Array}  rule
         * @return {string}
         */
        function replace(word, rule) {
            return word.replace(rule[0], function (match, index) {
                var result = interpolate(rule[1], arguments);
                if (match === '') {
                    return restoreCase(word[index - 1], result);
                }
                return restoreCase(match, result);
            });
        }
        /**
         * Sanitize a word by passing in the word and sanitization rules.
         *
         * @param  {string}   token
         * @param  {string}   word
         * @param  {Array}    rules
         * @return {string}
         */
        function sanitizeWord(token, word, rules) {
            // Empty string or doesn't need fixing.
            if (!token.length || uncountables.hasOwnProperty(token)) {
                return word;
            }
            var len = rules.length;
            // Iterate over the sanitization rules and use the first one to match.
            while (len--) {
                var rule = rules[len];
                if (rule[0].test(word))
                    return replace(word, rule);
            }
            return word;
        }
        /**
         * Replace a word with the updated word.
         *
         * @param  {Object}   replaceMap
         * @param  {Object}   keepMap
         * @param  {Array}    rules
         * @return {Function}
         */
        function replaceWord(replaceMap, keepMap, rules) {
            return function (word) {
                // Get the correct token and case restoration functions.
                var token = word.toLowerCase();
                // Check against the keep object map.
                if (keepMap.hasOwnProperty(token)) {
                    return restoreCase(word, token);
                }
                // Check against the replacement map for a direct word replacement.
                if (replaceMap.hasOwnProperty(token)) {
                    return restoreCase(word, replaceMap[token]);
                }
                // Run all the rules against the word.
                return sanitizeWord(token, word, rules);
            };
        }
        /**
         * Check if a word is part of the map.
         */
        function checkWord(replaceMap, keepMap, rules, bool) {
            return function (word) {
                var token = word.toLowerCase();
                if (keepMap.hasOwnProperty(token))
                    return true;
                if (replaceMap.hasOwnProperty(token))
                    return false;
                return sanitizeWord(token, token, rules) === token;
            };
        }
        /**
         * Pluralize or singularize a word based on the passed in count.
         *
         * @param  {string}  word      The word to pluralize
         * @param  {number}  count     How many of the word exist
         * @param  {boolean} inclusive Whether to prefix with the number (e.g. 3 ducks)
         * @return {string}
         */
        function pluralize(word, count, inclusive) {
            var pluralized = count === 1
                ? pluralize.singular(word) : pluralize.plural(word);
            return (inclusive ? count + ' ' : '') + pluralized;
        }
        /**
         * Pluralize a word.
         *
         * @type {Function}
         */
        pluralize.plural = replaceWord(irregularSingles, irregularPlurals, pluralRules);
        /**
         * Check if a word is plural.
         *
         * @type {Function}
         */
        pluralize.isPlural = checkWord(irregularSingles, irregularPlurals, pluralRules);
        /**
         * Singularize a word.
         *
         * @type {Function}
         */
        pluralize.singular = replaceWord(irregularPlurals, irregularSingles, singularRules);
        /**
         * Check if a word is singular.
         *
         * @type {Function}
         */
        pluralize.isSingular = checkWord(irregularPlurals, irregularSingles, singularRules);
        /**
         * Add a pluralization rule to the collection.
         *
         * @param {(string|RegExp)} rule
         * @param {string}          replacement
         */
        pluralize.addPluralRule = function (rule, replacement) {
            pluralRules.push([sanitizeRule(rule), replacement]);
        };
        /**
         * Add a singularization rule to the collection.
         *
         * @param {(string|RegExp)} rule
         * @param {string}          replacement
         */
        pluralize.addSingularRule = function (rule, replacement) {
            singularRules.push([sanitizeRule(rule), replacement]);
        };
        /**
         * Add an uncountable word rule.
         *
         * @param {(string|RegExp)} word
         */
        pluralize.addUncountableRule = function (word) {
            if (typeof word === 'string') {
                uncountables[word.toLowerCase()] = true;
                return;
            }
            // Set singular and plural references for the word.
            pluralize.addPluralRule(word, '$0');
            pluralize.addSingularRule(word, '$0');
        };
        /**
         * Add an irregular word definition.
         *
         * @param {string} single
         * @param {string} plural
         */
        pluralize.addIrregularRule = function (single, plural) {
            plural = plural.toLowerCase();
            single = single.toLowerCase();
            irregularSingles[single] = plural;
            irregularPlurals[plural] = single;
        };
        /**
         * Irregular rules.
         */
        [
            // Pronouns.
            ['I', 'we'],
            ['me', 'us'],
            ['he', 'they'],
            ['she', 'they'],
            ['them', 'them'],
            ['myself', 'ourselves'],
            ['yourself', 'yourselves'],
            ['itself', 'themselves'],
            ['herself', 'themselves'],
            ['himself', 'themselves'],
            ['themself', 'themselves'],
            ['is', 'are'],
            ['was', 'were'],
            ['has', 'have'],
            ['this', 'these'],
            ['that', 'those'],
            // Words ending in with a consonant and `o`.
            ['echo', 'echoes'],
            ['dingo', 'dingoes'],
            ['volcano', 'volcanoes'],
            ['tornado', 'tornadoes'],
            ['torpedo', 'torpedoes'],
            // Ends with `us`.
            ['genus', 'genera'],
            ['viscus', 'viscera'],
            // Ends with `ma`.
            ['stigma', 'stigmata'],
            ['stoma', 'stomata'],
            ['dogma', 'dogmata'],
            ['lemma', 'lemmata'],
            ['schema', 'schemata'],
            ['anathema', 'anathemata'],
            // Other irregular rules.
            ['ox', 'oxen'],
            ['axe', 'axes'],
            ['die', 'dice'],
            ['yes', 'yeses'],
            ['foot', 'feet'],
            ['eave', 'eaves'],
            ['goose', 'geese'],
            ['tooth', 'teeth'],
            ['quiz', 'quizzes'],
            ['human', 'humans'],
            ['proof', 'proofs'],
            ['carve', 'carves'],
            ['valve', 'valves'],
            ['looey', 'looies'],
            ['thief', 'thieves'],
            ['groove', 'grooves'],
            ['pickaxe', 'pickaxes'],
            ['passerby', 'passersby']
        ].forEach(function (rule) {
            return pluralize.addIrregularRule(rule[0], rule[1]);
        });
        /**
         * Pluralization rules.
         */
        [
            [/s?$/i, 's'],
            [/[^\u0000-\u007F]$/i, '$0'],
            [/([^aeiou]ese)$/i, '$1'],
            [/(ax|test)is$/i, '$1es'],
            [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, '$1es'],
            [/(e[mn]u)s?$/i, '$1s'],
            [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, '$1'],
            [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'],
            [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
            [/(seraph|cherub)(?:im)?$/i, '$1im'],
            [/(her|at|gr)o$/i, '$1oes'],
            [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'],
            [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'],
            [/sis$/i, 'ses'],
            [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
            [/([^aeiouy]|qu)y$/i, '$1ies'],
            [/([^ch][ieo][ln])ey$/i, '$1ies'],
            [/(x|ch|ss|sh|zz)$/i, '$1es'],
            [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
            [/\b((?:tit)?m|l)(?:ice|ouse)$/i, '$1ice'],
            [/(pe)(?:rson|ople)$/i, '$1ople'],
            [/(child)(?:ren)?$/i, '$1ren'],
            [/eaux$/i, '$0'],
            [/m[ae]n$/i, 'men'],
            ['thou', 'you']
        ].forEach(function (rule) {
            return pluralize.addPluralRule(rule[0], rule[1]);
        });
        /**
         * Singularization rules.
         */
        [
            [/s$/i, ''],
            [/(ss)$/i, '$1'],
            [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'],
            [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
            [/ies$/i, 'y'],
            [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, '$1ie'],
            [/\b(mon|smil)ies$/i, '$1ey'],
            [/\b((?:tit)?m|l)ice$/i, '$1ouse'],
            [/(seraph|cherub)im$/i, '$1'],
            [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, '$1'],
            [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, '$1sis'],
            [/(movie|twelve|abuse|e[mn]u)s$/i, '$1'],
            [/(test)(?:is|es)$/i, '$1is'],
            [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'],
            [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, '$1um'],
            [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, '$1on'],
            [/(alumn|alg|vertebr)ae$/i, '$1a'],
            [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],
            [/(matr|append)ices$/i, '$1ix'],
            [/(pe)(rson|ople)$/i, '$1rson'],
            [/(child)ren$/i, '$1'],
            [/(eau)x?$/i, '$1'],
            [/men$/i, 'man']
        ].forEach(function (rule) {
            return pluralize.addSingularRule(rule[0], rule[1]);
        });
        /**
         * Uncountable rules.
         */
        [
            // Singular words with no plurals.
            'adulthood',
            'advice',
            'agenda',
            'aid',
            'aircraft',
            'alcohol',
            'ammo',
            'analytics',
            'anime',
            'athletics',
            'audio',
            'bison',
            'blood',
            'bream',
            'buffalo',
            'butter',
            'carp',
            'cash',
            'chassis',
            'chess',
            'clothing',
            'cod',
            'commerce',
            'cooperation',
            'corps',
            'debris',
            'diabetes',
            'digestion',
            'elk',
            'energy',
            'equipment',
            'excretion',
            'expertise',
            'firmware',
            'flounder',
            'fun',
            'gallows',
            'garbage',
            'graffiti',
            'hardware',
            'headquarters',
            'health',
            'herpes',
            'highjinks',
            'homework',
            'housework',
            'information',
            'jeans',
            'justice',
            'kudos',
            'labour',
            'literature',
            'machinery',
            'mackerel',
            'mail',
            'media',
            'mews',
            'moose',
            'music',
            'mud',
            'manga',
            'news',
            'only',
            'personnel',
            'pike',
            'plankton',
            'pliers',
            'police',
            'pollution',
            'premises',
            'rain',
            'research',
            'rice',
            'salmon',
            'scissors',
            'series',
            'sewage',
            'shambles',
            'shrimp',
            'software',
            'species',
            'staff',
            'swine',
            'tennis',
            'traffic',
            'transportation',
            'trout',
            'tuna',
            'wealth',
            'welfare',
            'whiting',
            'wildebeest',
            'wildlife',
            'you',
            /pok[eé]mon$/i,
            // Regexes.
            /[^aeiou]ese$/i,
            /deer$/i,
            /fish$/i,
            /measles$/i,
            /o[iu]s$/i,
            /pox$/i,
            /sheep$/i
        ].forEach(pluralize.addUncountableRule);
        return pluralize;
    });
});
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
        this.change = createEvent(this, "change", 7);
    }
    Select.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.multiple) {
                            this.value = [];
                        }
                        return [4 /*yield*/, this.option_elements()];
                    case 1:
                        options = _a.sent();
                        // @ts-ignore
                        options.forEach(function (element) {
                            element.selectable = true;
                            if (_this.multiple) {
                                element.multiple = true;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Select.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.listen_to_values();
                this.current = this.element.shadowRoot.querySelector('stellar-item.current');
                if (this.default) {
                    if (typeof this.default === "object" && this.default.constructor.name === "Array") {
                        this.default.forEach(function (value) {
                            // @ts-ignore
                            _this.element.querySelector("stellar-item[value=\"" + value + "\"]").select_item({ selected: true });
                        });
                    }
                    else {
                        // @ts-ignore
                        this.element.querySelector("stellar-item[value=\"" + this.default + "\"]").select_item({ selected: true });
                    }
                }
                return [2 /*return*/];
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
    Select.prototype.update_values = function () {
        return __awaiter(this, void 0, void 0, function () {
            var option_elements, values_1, options;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.multiple) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.option_elements()];
                    case 1:
                        option_elements = _a.sent();
                        values_1 = [];
                        // @ts-ignore
                        option_elements.forEach(function (option) {
                            if (!option.multiple) {
                                option.multiple = true;
                            }
                            if (option.selected) {
                                values_1.push(option.value);
                            }
                        });
                        this.value = values_1;
                        this.change.emit(this.value);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.option_elements()];
                    case 3:
                        options = _a.sent();
                        Array.from(options).forEach(function (el) {
                            if (el.classList.contains('current')) {
                                _this.value = el.value;
                            }
                        });
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
            var data, option_elements, values_2, options;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = event.detail;
                        if (!this.multiple) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.option_elements()];
                    case 1:
                        option_elements = _a.sent();
                        values_2 = [];
                        // @ts-ignore
                        option_elements.forEach(function (option) {
                            option.selectable = true;
                            if (_this.value && _this.value.includes(option.value) && !data.element.selected) {
                                option.selected = true;
                            }
                            if (option.selected) {
                                values_2.push(option.value);
                            }
                        });
                        this.value = values_2;
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
            var data, option_elements, values_3, options, _a, _b;
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
                        values_3 = [];
                        // @ts-ignore
                        option_elements.forEach(function (option) {
                            if (_this.value && _this.value.includes(option.value) && data.value !== option.value) {
                                option.selected = true;
                            }
                            if (option.selected) {
                                values_3.push(option.value);
                            }
                        });
                        this.value = values_3;
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
        var language;
        // @ts-ignore
        if (typeof this.value === "object") {
            if (this.value.length === 0) {
                language = pluralize(this.verbiage, this.value.length);
                if (this.placeholderInverted) {
                    return "All " + language + " selected";
                }
                else {
                    return "No " + language + " selected";
                }
            }
            language = pluralize(this.verbiage, this.value.length, true);
            return language + " selected";
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
                if (mutation.type == 'childList' || mutation.type == 'subtree') {
                    _this.update_values();
                }
            }
        };
        this.observer = new MutationObserver(callback);
        this.observer.observe(targetNode, config);
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
            return h("div", { class: "label-wrapper" }, h("stellar-label", { size: this.size, onClick: function () { _this.focusFirstItem(); } }, this.label), this.renderEmptyButton());
        }
    };
    Select.prototype.renderErrors = function () {
        if (this.status && this.status.errors && this.status.errors.length !== 0) {
            return (h("p", { class: "validation" }, this.status.errors.map(function (error) { return h("span", null, error.message); })));
        }
    };
    Select.prototype.renderEmptyButton = function () {
        var _this = this;
        return this.multiple && this.value && this.value.length > 0 && h("stellar-button", { class: "clear-button", tag: "button", size: "tiny", ghost: true, onClick: function (e) { e.stopPropagation(); _this.clearValue(); } }, h("stellar-asset", { name: "close", class: "fs4 mr1" }), this.clear_confirm ? "Clear " + this.value.length + " selections?" : "Clear");
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
        get: function () { return ":host{--color:var(--black);--border-radius:0.3rem;--item-size:5rem;--background:var(--white);--border-color:var(--gray1);-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;font-family:inherit;position:relative}:host(:not(.hydrated)){display:none}:host ::slotted(stellar-item),:host stellar-item{--item-size:5rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:inherit}:host .select{display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column}:host .select-title{cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;outline:none;border:1px solid var(--border-color);border-radius:var(--border-radius);padding:0;width:100%;height:var(--item-size);overflow:hidden;line-height:1.4;color:var(--color);font-weight:500;background:var(--background)}:host([focused]) .select-title,:host .select-title:focus,:host .wrapper:hover .select-title{border-color:var(--theme-base5);-webkit-box-shadow:0 0 0 1px var(--theme-base5);box-shadow:0 0 0 1px var(--theme-base5)}:host .select-title stellar-item{background:var(--background)!important;color:var(--color)!important}:host .select-title input{display:none}:host .select-title stellar-asset{position:absolute;right:2rem;-webkit-transition:-webkit-transform .1s var(--ease) 0s;transition:-webkit-transform .1s var(--ease) 0s;transition:transform .1s var(--ease) 0s;transition:transform .1s var(--ease) 0s,-webkit-transform .1s var(--ease) 0s;font-size:1.6rem;color:var(--theme-base5);background:transparent;border:0}:host .select-title .button stellar-asset{display:none}:host([open]) .select-title stellar-asset{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host .select-list{display:-ms-flexbox;display:flex;position:relative;top:0;left:0;-ms-flex-direction:column;flex-direction:column;-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transition:opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s,-webkit-transform .2s var(--ease) .35s;transition:opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s,-webkit-transform .2s var(--ease) .35s;transition:transform .2s var(--ease) .35s,opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s;transition:transform .2s var(--ease) .35s,opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s,-webkit-transform .2s var(--ease) .35s;opacity:0;z-index:3;background:var(--background);width:100%;max-height:0;overflow-x:hidden;overflow-y:hidden;color:var(--theme-base5);border:1px solid var(--border-color);pointer-events:none;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.15);box-shadow:0 1px 2px rgba(0,0,0,.15)}:host .select-list ::slotted(stellar-item){color:var(--color);border-bottom:1px solid var(--border-color)}:host .select-list ::slotted(stellar-item:last-child){border-bottom:none}:host .label-wrapper{width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:1rem;height:1.8rem}:host .label-wrapper stellar-label{margin:0}:host .select-list-footer{-ms-flex-order:3;order:3;height:4rem;border-top:1px solid var(--theme-base5)}stellar-input .validation{margin-bottom:0;color:var(--red5);font-size:var(--complementing-font-size);font-weight:500}stellar-input .validation span{display:block;padding:1.4rem 0;line-height:1.4}stellar-input .validation span+span{border-top:1px solid var(--border-color)}:host([open]) .select-list,:host .select-list:focus-within{-webkit-transition:opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms,-webkit-transform .2s var(--ease) 0ms;transition:opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms,-webkit-transform .2s var(--ease) 0ms;transition:transform .2s var(--ease) 0ms,opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms;transition:transform .2s var(--ease) 0ms,opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms,-webkit-transform .2s var(--ease) 0ms;opacity:1;pointer-events:auto;max-height:20rem;overflow-y:auto}:host([size=small]) .select-title{height:3.5rem}:host([size=small]) .select-title stellar-asset{right:1rem}:host([size=small]) .label{font-size:.75rem}:host([size=small]) stellar-item{--font-size:1.4rem;--item-size:3.5rem}:host([size=small]) .select-list:focus-within,:host([size=small][open]) .select-list{max-height:11rem}:host([overlay]) .select-list{position:absolute;top:calc((var(--item-size) * .75) + 1rem)}:host stellar-tooltip{cursor:pointer}:host stellar-item stellar-tooltip{display:none}:host .clear-button{--color:var(--red5);--active-color:var(--red7)}:host .clear-button stellar-asset{font-size:1.75rem}:host-context(.dark-mode){--background:var(--black-alt);--color:var(--white);--border-color:var(--gray9)}:host ::-moz-selection{background:var(--theme-base0)!important}:host ::selection{background:var(--theme-base0)!important}"; },
        enumerable: true,
        configurable: true
    });
    return Select;
}());
var Tooltip = /** @class */ (function () {
    function Tooltip(hostRef) {
        registerInstance(this, hostRef);
        this.align = "center";
    }
    Tooltip.prototype.render = function () {
        return (h("div", { class: "wrap" }, h("div", { class: "after" }), h("slot", null)));
    };
    Object.defineProperty(Tooltip.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tooltip, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;position:absolute;width:100%;height:100%;top:0;z-index:2;font-size:1rem}:host .wrap{pointer-events:none;white-space:nowrap;top:-16px;left:50%;-webkit-transform:scale(.7) translateY(-80%) translateX(-50%) translateZ(0);transform:scale(.7) translateY(-80%) translateX(-50%) translateZ(0);-webkit-transform-origin:0 10px;transform-origin:0 10px;-webkit-transition:all .25s var(--ease) 50ms;transition:all .25s var(--ease) 50ms;opacity:0;padding:.65em .65em;width:auto;line-height:1.2;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-align:left;color:#fff}:host .wrap,:host .wrap .after{position:absolute;margin:0 auto;background:var(--theme-complement9)}:host .wrap .after{right:0;bottom:-.475em;left:0;-webkit-transform:rotate(45deg);transform:rotate(45deg);width:1em;height:1em;z-index:-1}:host(:hover) .wrap,:host([hover]) .wrap{-webkit-transform:scale(1) translateY(-100%) translateX(-50%) translateZ(0);transform:scale(1) translateY(-100%) translateX(-50%) translateZ(0);opacity:1}:host([align=left]) .wrap,:host([align=top-left]) .wrap{-webkit-transform:scale(.7) translateY(-100%) translateX(0) translateZ(0);transform:scale(.7) translateY(-100%) translateX(0) translateZ(0);left:0;-webkit-transform-origin:22px 22px;transform-origin:22px 22px}:host([align=left]) .wrap .after,:host([align=top-left]) .wrap .after{right:auto;left:1rem}:host([align=left]:hover) .wrap,:host([align=left][hover]) .wrap,:host([align=top-left]:hover) .wrap,:host([align=top-left][hover]) .wrap{-webkit-transform:scale(1) translateY(-100%) translateX(0) translateZ(0);transform:scale(1) translateY(-100%) translateX(0) translateZ(0)}:host([align=right]) .wrap,:host([align=top-right]) .wrap{-webkit-transform:scale(.7) translateY(-100%) translateX(-100%) translateZ(0);transform:scale(.7) translateY(-100%) translateX(-100%) translateZ(0);left:100%;-webkit-transform-origin:-22px 22px;transform-origin:-22px 22px}:host([align=right]) .wrap .after,:host([align=top-right]) .wrap .after{right:1rem;left:auto}:host([align=right]:hover) .wrap,:host([align=right][hover]) .wrap,:host([align=top-right]:hover) .wrap,:host([align=top-right][hover]) .wrap{-webkit-transform:scale(1) translateY(-100%) translateX(-100%) translateZ(0);transform:scale(1) translateY(-100%) translateX(-100%) translateZ(0)}:host([align=middle-left]) .wrap{-webkit-transform:scale(.7) translateY(-50%) translateX(-100%) translateZ(0);transform:scale(.7) translateY(-50%) translateX(-100%) translateZ(0);top:50%;left:0;-webkit-transform-origin:-30px 0;transform-origin:-30px 0}:host([align=middle-left]) .wrap .after{right:auto;left:calc(100% - 8px);top:calc(50% - 8px)}:host([align=middle-left]:hover) .wrap,:host([align=middle-left][hover]) .wrap{-webkit-transform:scale(1) translateY(-50%) translateX(calc(-100% - 22px)) translateZ(0);transform:scale(1) translateY(-50%) translateX(calc(-100% - 22px)) translateZ(0)}:host([align=middle-right]) .wrap{-webkit-transform:scale(.7) translateY(-50%) translateX(100%) translateZ(0);transform:scale(.7) translateY(-50%) translateX(100%) translateZ(0);top:50%;right:0;left:auto;-webkit-transform-origin:30px 0;transform-origin:30px 0}:host([align=middle-right]) .wrap .after{left:auto;right:calc(100% - 8px);top:calc(50% - 8px)}:host([align=middle-right]:hover) .wrap,:host([align=middle-right][hover]) .wrap{-webkit-transform:scale(1) translateY(-50%) translateX(calc(100% + 22px)) translateZ(0);transform:scale(1) translateY(-50%) translateX(calc(100% + 22px)) translateZ(0)}:host([align=bottom-left]) .wrap{-webkit-transform:scale(.7) translateY(100%) translateX(0) translateZ(0);transform:scale(.7) translateY(100%) translateX(0) translateZ(0);top:auto;bottom:-1.2rem;left:0;-webkit-transform-origin:22px 22px;transform-origin:22px 22px}:host([align=bottom-left]) .wrap .after{right:auto;left:16px;top:-.475em;bottom:auto}:host([align=bottom-left]:hover) .wrap,:host([align=bottom-left][hover]) .wrap{-webkit-transform:scale(1) translateY(100%) translateX(0) translateZ(0);transform:scale(1) translateY(100%) translateX(0) translateZ(0)}:host([align=bottom-center]) .wrap{-webkit-transform:scale(.7) translateY(100%) translateX(-50%) translateZ(0);transform:scale(.7) translateY(100%) translateX(-50%) translateZ(0);top:auto;bottom:-1.2rem}:host([align=bottom-center]) .wrap .after{right:auto;left:calc(50% - 8px);top:-.475em;bottom:auto}:host([align=bottom-center]:hover) .wrap,:host([align=bottom-center][hover]) .wrap{-webkit-transform:scale(1) translateY(100%) translateX(-50%) translateZ(0);transform:scale(1) translateY(100%) translateX(-50%) translateZ(0)}:host([align=bottom-right]) .wrap{-webkit-transform:scale(.7) translateY(100%) translateX(-100%) translateZ(0);transform:scale(.7) translateY(100%) translateX(-100%) translateZ(0);top:auto;bottom:-1.2rem;left:100%;-webkit-transform-origin:-22px 22px;transform-origin:-22px 22px}:host([align=bottom-right]) .wrap .after{left:auto;right:16px;top:-.475em;bottom:auto}:host([align=bottom-right]:hover) .wrap,:host([align=bottom-right][hover]) .wrap{-webkit-transform:scale(1) translateY(100%) translateX(-100%) translateZ(0);transform:scale(1) translateY(100%) translateX(-100%) translateZ(0)}:host-context(.dark-mode):host .wrap,:host-context(.dark-mode):host .wrap .after{background:var(--theme-complement7)}"; },
        enumerable: true,
        configurable: true
    });
    return Tooltip;
}());
var getUrl = function (url, root) {
    // Don't allow double slashes
    if (url.charAt(0) == '/' && root.charAt(root.length - 1) == '/') {
        return root.slice(0, root.length - 1) + url;
    }
    return root + url;
};
/**
  * @name Route
  * @module ionic
  * @description
 */
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
export { Icon as ion_icon, Asset as stellar_asset, Blur as stellar_blur, Breadcrumb as stellar_breadcrumb, Breadcrumbs as stellar_breadcrumbs, Button as stellar_button, Item as stellar_item, Label as stellar_label, Select as stellar_select, Tooltip as stellar_tooltip, RouteLink as stencil_route_link };
