import { h } from '../stellar-core.core.js';

import { a as delay } from './chunk-e7da9887.js';

function u(n, t) { for (var e, r, i = null, o = !1, u = !1, f = arguments.length; f-- > 2;)
    T.push(arguments[f]); for (; T.length > 0;) {
    var c = T.pop();
    if (c && void 0 !== c.pop)
        for (f = c.length; f--;)
            T.push(c[f]);
    else
        "boolean" == typeof c && (c = null), (u = "function" != typeof n) && (null == c ? c = "" : "number" == typeof c ? c = String(c) : "string" != typeof c && (u = !1)), u && o ? i[i.length - 1].vtext += c : null === i ? i = [u ? { vtext: c } : c] : i.push(u ? { vtext: c } : c), o = u;
} if (null != t) {
    if (t.className && (t.class = t.className), "object" == typeof t.class) {
        for (f in t.class)
            t.class[f] && T.push(f);
        t.class = T.join(" "), T.length = 0;
    }
    null != t.key && (e = t.key), null != t.name && (r = t.name);
} return "function" == typeof n ? n(t, i || [], W) : { vtag: n, vchildren: i, vtext: void 0, vattrs: t, vkey: e, vname: r, w: void 0, g: !1 }; }
function f(n) { return { vtag: n.vtag, vchildren: n.vchildren, vtext: n.vtext, vattrs: n.vattrs, vkey: n.vkey, vname: n.vname }; }
var T = [], W = { forEach: function (n, t) { n.forEach(function (n, e, r) { return t(f(n), e, r); }); }, map: function (n, t) { return n.map(function (n, e, r) { return function i(n) { return { vtag: n.vtag, vchildren: n.vchildren, vtext: n.vtext, vattrs: n.vattrs, vkey: n.vkey, vname: n.vname }; }(t(f(n), e, r)); }); } };
/*! Built with http://stenciljs.com */
var __rest = function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
            if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
    return t;
};
function defaultConsumerRender(subscribe, renderer) {
    return u("context-consumer", { subscribe: subscribe, renderer: renderer });
}
function createProviderConsumer(defaultState, consumerRender) {
    if (consumerRender === void 0) {
        consumerRender = defaultConsumerRender;
    }
    var listeners = new Map();
    var currentState = defaultState;
    function notifyConsumers() {
        listeners.forEach(updateListener);
    }
    function updateListener(fields, listener) {
        if (Array.isArray(fields)) {
            fields.slice().forEach(function (fieldName) {
                listener[fieldName] = currentState[fieldName];
            });
        }
        else {
            listener[fields] = Object.assign({}, currentState);
        }
        listener.forceUpdate();
    }
    function attachListener(propList) {
        return function (el) {
            if (listeners.has(el)) {
                return;
            }
            listeners.set(el, propList);
            updateListener(propList, el);
        };
    }
    function subscribe(el, propList) {
        attachListener(propList)(el);
        return function () {
            listeners.delete(el);
        };
    }
    var Provider = function (_b, children) {
        var state = _b.state;
        currentState = state;
        notifyConsumers();
        return children;
    };
    var Consumer = function (props, children) {
        return consumerRender(subscribe, children[0]);
    };
    function wrapConsumer(childComponent, fieldList) {
        var Child = childComponent.is;
        return function (_a) {
            var children = _a.children, props = __rest(_a, ["children"]);
            return (u(Child, Object.assign({ ref: attachListener(fieldList) }, props), children));
        };
    }
    function injectProps(childComponent, fieldList) {
        var unsubscribe = null;
        var elementRefName = Object.keys(childComponent.properties).find(function (propName) {
            return childComponent.properties[propName].elementRef == true;
        });
        if (elementRefName == undefined) {
            throw new Error("Please ensure that your Component " + childComponent.is + " has an attribute with an \"@Element\" decorator. " +
                "This is required to be able to inject properties.");
        }
        var prevComponentWillLoad = childComponent.prototype.componentWillLoad;
        childComponent.prototype.componentWillLoad = function () {
            unsubscribe = subscribe(this[elementRefName], fieldList);
            if (prevComponentWillLoad) {
                return prevComponentWillLoad.bind(this)();
            }
        };
        var prevComponentDidUnload = childComponent.prototype.componentDidUnload;
        childComponent.prototype.componentDidUnload = function () {
            unsubscribe();
            if (prevComponentDidUnload) {
                return prevComponentDidUnload.bind(this)();
            }
        };
    }
    return {
        Provider: Provider,
        Consumer: Consumer,
        wrapConsumer: wrapConsumer,
        injectProps: injectProps
    };
}
// StencilStateTunnel: ES Module
var ActiveRouter = createProviderConsumer({
    historyType: 'browser',
    location: {
        pathname: '',
        query: {},
        key: ''
    },
    titleSuffix: '',
    root: '/',
    routeViewsUpdated: function () { }
});

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}

// stencilrouter: ES Module

class Item {
    constructor() {
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
    }
    componentWillLoad() {
        this.slotted = this.element.innerHTML;
    }
    componentDidLoad() {
        setTimeout(() => {
            if (this.selected) {
                this.mounted.emit(this);
            }
        }, 10);
    }
    async data() {
        return {
            size: this.size,
            value: this.value,
            type: this.type,
            label: this.label,
            danger: this.danger,
            slotted: this.slotted
        };
    }
    async apply(data) {
        this.size = data.size;
        this.value = data.value;
        this.type = data.type;
        this.label = data.label;
        const button = this.element.shadowRoot.querySelector('.button');
        button.innerHTML = data.slotted;
    }
    async setFocus() {
        this.focused = true;
        this.element.querySelector('.button').focus();
    }
    handleClick(e) {
        if (this.route) {
            e.preventDefault();
            this.history.push(this.href, {});
        }
        if (!this.current) {
            this.selectionChanged.emit(this);
        }
    }
    handleFocus() {
        if (this.current) {
            this.focusChanged.emit(this);
        }
        this.focused = true;
    }
    handleBlur() {
        if (this.current) {
            this.blurChanged.emit(this);
        }
        this.focused = false;
    }
    classes() {
        let classes = "";
        classes += this.selected ? "selected " : "";
        classes += this.multiple ? "multiple " : "";
        return classes;
    }
    async select_item(state) {
        if (this.selectable) {
            if (state) {
                if (this.selected !== state.selected) {
                    var event = new CustomEvent('click');
                    this.element.querySelector('.button').dispatchEvent(event);
                }
            }
            else {
                var event = new CustomEvent('click');
                this.element.querySelector('.button').dispatchEvent(event);
            }
        }
    }
    render() {
        return (h(this.type, { class: "button", type: "button", href: this.href, url: this.href, tabindex: "0", value: this.value, title: this.label, onClick: (e) => this.handleClick(e), onBlur: () => this.handleBlur(), onFocus: () => this.handleFocus() },
            h("slot", null),
            (this.selected || this.multiple) && h("stellar-asset", { class: this.classes(), name: "checkmark", block: true })));
    }
    static get is() { return "stellar-item"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "apply": {
            "method": true
        },
        "current": {
            "state": true
        },
        "danger": {
            "type": Boolean,
            "attr": "danger",
            "reflectToAttr": true,
            "mutable": true
        },
        "data": {
            "method": true
        },
        "element": {
            "elementRef": true
        },
        "fit": {
            "type": Boolean,
            "attr": "fit",
            "reflectToAttr": true,
            "mutable": true
        },
        "focused": {
            "type": Boolean,
            "attr": "focused",
            "reflectToAttr": true,
            "mutable": true
        },
        "history": {
            "type": "Any",
            "attr": "history"
        },
        "href": {
            "type": String,
            "attr": "href",
            "reflectToAttr": true,
            "mutable": true
        },
        "label": {
            "type": String,
            "attr": "label",
            "reflectToAttr": true,
            "mutable": true
        },
        "location": {
            "type": "Any",
            "attr": "location"
        },
        "multiple": {
            "type": Boolean,
            "attr": "multiple",
            "reflectToAttr": true,
            "mutable": true
        },
        "route": {
            "type": Boolean,
            "attr": "route"
        },
        "select_item": {
            "method": true
        },
        "selectable": {
            "type": Boolean,
            "attr": "selectable",
            "reflectToAttr": true,
            "mutable": true
        },
        "selected": {
            "type": Boolean,
            "attr": "selected",
            "reflectToAttr": true,
            "mutable": true
        },
        "setFocus": {
            "method": true
        },
        "simple": {
            "type": Boolean,
            "attr": "simple",
            "reflectToAttr": true,
            "mutable": true
        },
        "size": {
            "type": String,
            "attr": "size",
            "mutable": true
        },
        "slotted": {
            "state": true
        },
        "type": {
            "type": String,
            "attr": "type",
            "reflectToAttr": true,
            "mutable": true
        },
        "value": {
            "type": String,
            "attr": "value",
            "reflectToAttr": true,
            "mutable": true
        },
        "valueLabel": {
            "type": String,
            "attr": "value-label",
            "reflectToAttr": true,
            "mutable": true
        },
        "wrap": {
            "type": Boolean,
            "attr": "wrap",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "selectionChanged",
            "method": "selectionChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "mounted",
            "method": "mounted",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "focusChanged",
            "method": "focusChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "blurChanged",
            "method": "blurChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".sc-stellar-item-h, .sc-stellar-item-h   *.sc-stellar-item, .sc-stellar-item-h   .sc-stellar-item:after, .sc-stellar-item-h   .sc-stellar-item:before{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-stellar-item-h{--item-size:2.356em;--font-size:1.4rem;display:block;width:100%;height:var(--item-size);color:var(--theme-base9);font-family:inherit;visibility:visible!important;font-size:var(--font-size);text-align:left;position:relative}[fit].sc-stellar-item-h{--item-size:auto}[fit].sc-stellar-item-h   a.button.sc-stellar-item, [fit].sc-stellar-item-h   button.button.sc-stellar-item, [fit].sc-stellar-item-h   stencil-route-link.sc-stellar-item   a.sc-stellar-item{padding:1.4rem 0 1.4rem 1.4rem}[wrap].sc-stellar-item-h   .button.sc-stellar-item{white-space:normal;text-align:left}[danger].sc-stellar-item-h   .button.sc-stellar-item{color:var(--red5)}.sc-stellar-item-h   a.button.sc-stellar-item, .sc-stellar-item-h   button.button.sc-stellar-item, .sc-stellar-item-h   stencil-route-link.sc-stellar-item   a.sc-stellar-item{text-decoration:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;outline:0;border:0;background:transparent;padding:0 0 0 .6rem;width:100%;height:calc(var(--item-size) - 1px);color:currentColor;font-weight:500;font-size:inherit}.sc-stellar-item-h   stencil-route-link.sc-stellar-item{padding:0}.sc-stellar-item-h   .button.sc-stellar-item   a.sc-stellar-item{color:inherit;background:inherit;text-decoration:none}.sc-stellar-item-h .button .sc-stellar-item-s > stellar-avatar{margin-right:.5rem;background:var(--theme-base9);visibility:visible!important;display:block!important;width:2rem;height:2rem}.sc-stellar-item-h   .button.sc-stellar-item   stellar-tag.sc-stellar-item{margin:auto .5rem auto auto}.sc-stellar-item-h   .button.sc-stellar-item   stellar-asset.sc-stellar-item{margin-left:1rem}.sc-stellar-item-h   .button.sc-stellar-item   span.sc-stellar-item{margin:auto auto auto 0;width:100%;text-overflow:ellipsis;white-space:nowrap}[size=small].sc-stellar-item-h   .button.sc-stellar-item{padding:0 1rem;height:3rem}.sc-stellar-item-h   .selected.sc-stellar-item{-webkit-animation:fadeInLeft .2s ease;animation:fadeInLeft .2s ease;font-size:var(--item-size);margin-left:auto!important;background:transparent;color:var(--theme-base5);height:calc(var(--item-size) - 1px)}.sc-stellar-item-h:focus   .selected.sc-stellar-item, .sc-stellar-item-h:focus-within   .selected.sc-stellar-item, .sc-stellar-item-h:hover   .selected.sc-stellar-item{color:#fff}[fit].sc-stellar-item-h   .selected.sc-stellar-item{position:absolute;top:.625rem;right:.25rem;font-size:3rem}[fit][multiple].sc-stellar-item-h   .selected.sc-stellar-item{right:auto}.sc-stellar-item-h:focus-within, .sc-stellar-item-h:hover, .sc-stellar-item-h   .button.sc-stellar-item:focus, .sc-stellar-item-h   .button.sc-stellar-item:hover{background:var(--theme-base1)}.current.sc-stellar-item-h{background:#fff}[danger].sc-stellar-item-h   .button.sc-stellar-item:focus, [danger].sc-stellar-item-h   .button.sc-stellar-item:hover{background:var(--red5);color:#fff}[simple].sc-stellar-item-h   .button.sc-stellar-item{background:#fff!important}.current.sc-stellar-item-h   stellar-asset.sc-stellar-item{display:none}.sc-stellar-item-h   stellar-asset.multiple.sc-stellar-item{border:1px solid var(--border-color);background:var(--background);border-radius:4px;font-size:2.5rem;width:2.5rem;height:2.5rem;margin:0 0 0 auto;left:-1rem;position:relative;color:transparent}.sc-stellar-item-h   stellar-asset.multiple.selected.sc-stellar-item{color:var(--theme-base5)}.current.sc-stellar-item-h   .button.sc-stellar-item:focus, .current.sc-stellar-item-h   .button.sc-stellar-item:hover, .current.sc-stellar-item-h:focus-within, .current.sc-stellar-item-h:hover{background:transparent}.dark-mode.sc-stellar-item-h -no-combinator.sc-stellar-item-h:focus-within, .dark-mode   .sc-stellar-item-h -no-combinator.sc-stellar-item-h:focus-within, .dark-mode.sc-stellar-item-h -no-combinator.sc-stellar-item-h:hover, .dark-mode   .sc-stellar-item-h -no-combinator.sc-stellar-item-h:hover, .dark-mode.sc-stellar-item-h -no-combinator.sc-stellar-item-h   .button.sc-stellar-item:focus, .dark-mode   .sc-stellar-item-h -no-combinator.sc-stellar-item-h   .button.sc-stellar-item:focus, .dark-mode.sc-stellar-item-h -no-combinator.sc-stellar-item-h   .button.sc-stellar-item:hover, .dark-mode   .sc-stellar-item-h -no-combinator.sc-stellar-item-h   .button.sc-stellar-item:hover{background:var(--theme-base8)}.dark-mode.sc-stellar-item-h -no-combinator.current.sc-stellar-item-h   .button.sc-stellar-item:focus, .dark-mode   .sc-stellar-item-h -no-combinator.current.sc-stellar-item-h   .button.sc-stellar-item:focus, .dark-mode.sc-stellar-item-h -no-combinator.current.sc-stellar-item-h   .button.sc-stellar-item:hover, .dark-mode   .sc-stellar-item-h -no-combinator.current.sc-stellar-item-h   .button.sc-stellar-item:hover, .dark-mode.sc-stellar-item-h -no-combinator.current.sc-stellar-item-h:focus-within, .dark-mode   .sc-stellar-item-h -no-combinator.current.sc-stellar-item-h:focus-within, .dark-mode.sc-stellar-item-h -no-combinator.current.sc-stellar-item-h:hover, .dark-mode   .sc-stellar-item-h -no-combinator.current.sc-stellar-item-h:hover{background:transparent}"; }
}
if (injectHistory) {
    injectHistory(Item);
}

class Select {
    constructor() {
        this.name = "select";
        this.placeholder = "Choose something...";
        this.required = false;
        this.open = false;
        this.verbiage = "selection";
        this.valueLabel = undefined;
        this.blur = 0;
        this.clear_confirm = false;
        this.values = [];
    }
    componentWillLoad() {
        if (this.multiple) {
            this.value = [];
        }
        this.listen_to_values();
    }
    async componentDidLoad() {
        this.current = this.element.shadowRoot.querySelector('stellar-item.current');
        if (this.multiple) {
            const options = await this.option_elements();
            options.forEach((element) => {
                element.multiple = true;
            });
        }
        if (this.default) {
            if (typeof this.default === "object" && this.default.constructor.name === "Array") {
                this.default.forEach((value) => {
                    this.element.querySelector(`stellar-item[value="${value}"]`).select_item();
                });
            }
            else {
                this.element.querySelector(`stellar-item[value="${this.default}"]`).select_item();
            }
        }
    }
    async clearValue() {
        if (this.clear_confirm) {
            await delay(100);
            this.clear_confirm = false;
            this.value = [];
            this.values = [];
            const options = await this.option_elements();
            Array.from(options).forEach((element) => {
                element.selected = false;
            });
            this.change.emit(this.value);
        }
        else {
            this.clear_confirm = true;
        }
    }
    handleOpenChange() {
        this.element.shadowRoot.querySelector('button.select-title').focus();
    }
    async handleMultipleChange(value) {
        const options = await this.option_elements();
        options.forEach((element) => {
            element.multiple = value;
        });
    }
    async mountedHandler(event) {
        const data = event.detail;
        if (this.multiple) {
            const option_elements = await this.option_elements();
            let values = [];
            option_elements.forEach((option) => {
                option.selectable = true;
                if (this.value && this.value.includes(option.value) && !data.element.selected) {
                    option.selected = true;
                }
                if (option.selected) {
                    values.push(option.value);
                }
            });
            this.value = values;
        }
        else {
            this.value = data.element.selected ? data.element.value : this.value;
            if (this.value) {
                const options = await this.option_elements();
                options.forEach((element) => {
                    element.selectable = true;
                    if (this.value === element.value) {
                        element.selected = true;
                    }
                });
            }
        }
    }
    async selectionChangedHandler(event) {
        const data = event.detail;
        if (this.multiple) {
            data.selected = !data.selected;
            const option_elements = await this.option_elements();
            let values = [];
            option_elements.forEach((option) => {
                if (this.value && this.value.includes(option.value) && data.value !== option.value) {
                    option.selected = true;
                }
                if (option.selected) {
                    values.push(option.value);
                }
            });
            this.value = values;
            this.change.emit(this.value);
        }
        else {
            if (!data.element.classList.contains("current")) {
                const options = await this.option_elements();
                options.forEach((element) => {
                    element.selected = false;
                });
                data.selected = true;
                this.value = data.value;
                this.change.emit(this.value);
                if (this.current) {
                    this.current.apply(await data.data());
                }
                setTimeout(() => {
                    this.open = false;
                }, 200);
            }
        }
    }
    selectedFocusChangedHandler() {
        this.focused = true;
    }
    selectedBlurChangedHandler() {
        this.focused = false;
    }
    handleTitleFocus() {
        this.focused = true;
    }
    handleTitleBlur() {
        this.focused = false;
    }
    handleNotClick(e) {
        if (e.target !== this.element && !this.element.contains(e.target)) {
            if (this.open) {
                this.open = false;
            }
        }
    }
    handleEscapeKey(event) {
        if (event.key === "space" && this.open) {
            this.open = false;
        }
    }
    handleArrowKeys(ev) {
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
    }
    readable_value() {
        if (typeof this.value === "object") {
            if (this.value.length === 0) {
                if (this.placeholderInverted) {
                    return `All ${this.verbiage}(s) selected`;
                }
                else {
                    return `No ${this.verbiage}(s) selected`;
                }
            }
            return `${this.value.length} ${this.verbiage}${this.value.length > 1 ? "s" : ""}`;
        }
        else if (typeof this.value === "string") {
            return this.valueLabel || this.value.toString() || `Select ${this.verbiageAn ? "an" : "a"} ${this.verbiage}`;
        }
        else {
            return this.valueLabel || this.value;
        }
    }
    async validate() {
        const status = {
            name: `${this.name}`,
            value: this.value,
            valid: true,
            errors: [],
        };
        if (!this.novalidate) {
            if (!this.value) {
                status.valid = false;
                status.errors.push({ message: 'This field is required.' });
            }
            const options = await this.options();
            if (!options.includes(this.value)) {
                status.valid = false;
                status.errors.push({ message: `"${this.value}" isn't a valid option.` });
            }
        }
        this.status = status;
        return this.status;
    }
    listen_to_values() {
        var targetNode = this.element;
        var config = { childList: true, subtree: true };
        var callback = (mutationsList) => {
            for (var mutation of mutationsList) {
                if (mutation.type == 'childList') {
                    this.update_values();
                }
            }
        };
        this.observer = new MutationObserver(callback);
        this.observer.observe(targetNode, config);
    }
    async update_values() {
        const values = Array.from(this.element.querySelectorAll('stellar-item'));
        this.values = values.map((element) => {
            if (this.multiple) {
                element.multiple = true;
            }
            if (element.valueLabel && element.selected) {
                this.valueLabel = element.valueLabel;
            }
            return element.value;
        });
    }
    async option_elements() {
        return this.element.querySelectorAll('stellar-item:not(.current)');
    }
    async options() {
        const elements = await this.option_elements();
        const options = [];
        elements.forEach((option) => {
            options.push(option.value);
        });
        return options;
    }
    async focusPaths() {
        let current = undefined;
        let next = undefined;
        let previous = undefined;
        const elements = await this.options();
        elements.forEach((element, index) => {
            if (element.hasFocus()) {
                previous = elements[index - 1];
                current = element;
                next = elements[index + 1];
            }
        });
        if (!current) {
            var first = elements[0];
            this.focusElement(first);
            current = first;
        }
        return { previous, current, next };
    }
    focusFirstItem() {
        this.element.querySelector('.select-list stellar-item:first-of-type').focus();
    }
    focusElement(element) {
        element.focus();
    }
    async focusNextOption() {
        const elements = await this.focusPaths();
        if (elements.next) {
            this.focusElement(elements.next);
        }
    }
    async focusPreviousOption() {
        const elements = await this.focusPaths();
        if (elements.previous) {
            this.focusElement(elements.previous);
        }
    }
    closeOthers() {
        const selects = document.querySelectorAll('stellar-select[open]');
        Array.from(selects).forEach((s) => {
            if (s !== this.element) {
                s.open = false;
            }
        });
    }
    handleTitleClick() {
        this.closeOthers();
        this.open = !this.open;
    }
    renderLabel() {
        if (this.label) {
            return h("div", { class: "label-wrapper" },
                h("stellar-label", { onClick: () => { this.focusFirstItem(); } }, this.label),
                this.renderEmptyButton());
        }
    }
    renderErrors() {
        if (this.status && this.status.errors && this.status.errors.length !== 0) {
            return (h("p", { class: "validation" }, this.status.errors.map(error => h("span", null, error.message))));
        }
    }
    renderEmptyButton() {
        return this.multiple && this.value && this.value.length > 0 && h("stellar-button", { tag: "button", size: "tiny", ghost: true, class: "theme-red", onClick: (e) => { e.stopPropagation(); this.clearValue(); } },
            h("stellar-asset", { name: "close", class: "fs4 mr1" }),
            this.clear_confirm ? `Clear ${this.value.length} selections?` : `Clear`);
    }
    render() {
        return (h("div", { class: "wrapper" },
            this.renderLabel(),
            h("div", { class: "select" },
                h("button", { type: "button", class: "select-title", onClick: () => this.handleTitleClick(), onFocus: () => this.handleTitleFocus(), onBlur: () => this.handleTitleBlur() },
                    h("stellar-item", { class: "current", type: "button", value: this.value ? this.value.toString() : "", tabindex: "-1", selectable: false, label: this.readable_value() }, this.readable_value()),
                    h("stellar-asset", { name: "arrow-down" }),
                    this.name && h("input", { type: "text", tabindex: "-1", value: this.value, name: this.name.toString(), required: this.required })),
                this.tooltip && h("stellar-tooltip", { align: "bottom-left", onClick: () => this.handleTitleClick() }, this.tooltip),
                h("stellar-blur", { vertical: this.blur, class: "select-list" },
                    h("div", { class: "select-list-header" },
                        h("slot", { name: "header" })),
                    h("div", { class: "select-list-body" },
                        h("slot", null)),
                    this.footer && h("div", { class: "select-list-footer" },
                        h("slot", { name: "footer" })))),
            h("stellar-label", { size: "small", underneath: true }, this.description),
            !this.novalidate && this.renderErrors()));
    }
    static get is() { return "stellar-select"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "blur": {
            "state": true
        },
        "clear_confirm": {
            "state": true
        },
        "current": {
            "state": true
        },
        "default": {
            "type": "Any",
            "attr": "default"
        },
        "description": {
            "type": String,
            "attr": "description",
            "mutable": true
        },
        "element": {
            "elementRef": true
        },
        "focused": {
            "type": Boolean,
            "attr": "focused",
            "reflectToAttr": true,
            "mutable": true
        },
        "footer": {
            "type": Boolean,
            "attr": "footer"
        },
        "inline": {
            "type": Boolean,
            "attr": "inline",
            "reflectToAttr": true,
            "mutable": true
        },
        "label": {
            "type": String,
            "attr": "label",
            "mutable": true
        },
        "multiple": {
            "type": Boolean,
            "attr": "multiple",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["handleMultipleChange"]
        },
        "name": {
            "type": "Any",
            "attr": "name",
            "reflectToAttr": true,
            "mutable": true
        },
        "novalidate": {
            "type": Boolean,
            "attr": "novalidate"
        },
        "observer": {
            "state": true
        },
        "open": {
            "type": Boolean,
            "attr": "open",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["handleOpenChange"]
        },
        "option_elements": {
            "method": true
        },
        "options": {
            "method": true
        },
        "other": {
            "type": Boolean,
            "attr": "other"
        },
        "overlay": {
            "type": Boolean,
            "attr": "overlay",
            "reflectToAttr": true
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder",
            "mutable": true
        },
        "placeholderInverted": {
            "type": Boolean,
            "attr": "placeholder-inverted"
        },
        "processing": {
            "type": Boolean,
            "attr": "processing"
        },
        "required": {
            "type": Boolean,
            "attr": "required"
        },
        "size": {
            "type": String,
            "attr": "size",
            "reflectToAttr": true,
            "mutable": true
        },
        "status": {
            "state": true
        },
        "tooltip": {
            "type": String,
            "attr": "tooltip",
            "mutable": true
        },
        "validate": {
            "method": true
        },
        "value": {
            "type": String,
            "attr": "value",
            "reflectToAttr": true,
            "mutable": true
        },
        "valueLabel": {
            "type": String,
            "attr": "value-label"
        },
        "values": {
            "state": true
        },
        "verbiage": {
            "type": String,
            "attr": "verbiage"
        },
        "verbiageAn": {
            "type": Boolean,
            "attr": "verbiage-an"
        }
    }; }
    static get events() { return [{
            "name": "change",
            "method": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "mounted",
            "method": "mountedHandler"
        }, {
            "name": "selectionChanged",
            "method": "selectionChangedHandler"
        }, {
            "name": "focusChanged",
            "method": "selectedFocusChangedHandler"
        }, {
            "name": "blurChanged",
            "method": "selectedBlurChangedHandler"
        }, {
            "name": "window:click",
            "method": "handleNotClick"
        }, {
            "name": "keydown",
            "method": "handleEscapeKey"
        }, {
            "name": "keydown",
            "method": "handleArrowKeys"
        }]; }
    static get style() { return ".sc-stellar-select-h{--color:var(--black);--border-radius:0.3rem;--item-size:4.25rem;--background:var(--white);--border-color:var(--gray1);-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;font-family:inherit;position:relative}.sc-stellar-select-h:not(.hydrated){display:none}.sc-stellar-select-h .sc-stellar-select-s > stellar-item, .sc-stellar-select-h   stellar-item.sc-stellar-select{--item-size:4.2rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}.sc-stellar-select-h   *.sc-stellar-select, .sc-stellar-select-h   .sc-stellar-select:after, .sc-stellar-select-h   .sc-stellar-select:before{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:inherit}.sc-stellar-select-h   .select.sc-stellar-select{display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column}.sc-stellar-select-h   .select-title.sc-stellar-select{cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;outline:none;border:1px solid var(--border-color);border-radius:var(--border-radius);padding:0;width:100%;height:var(--item-size);overflow:hidden;line-height:1.4;color:var(--color);font-weight:500;background:var(--background)}[focused].sc-stellar-select-h   .select-title.sc-stellar-select, .sc-stellar-select-h   .select-title.sc-stellar-select:focus, .sc-stellar-select-h   .wrapper.sc-stellar-select:hover   .select-title.sc-stellar-select{border-color:var(--theme-base5);-webkit-box-shadow:0 0 0 1px var(--theme-base5);box-shadow:0 0 0 1px var(--theme-base5)}.sc-stellar-select-h   .select-title.sc-stellar-select   stellar-item.sc-stellar-select{background:var(--background)!important;color:var(--color)!important}.sc-stellar-select-h   .select-title.sc-stellar-select   input.sc-stellar-select{display:none}.sc-stellar-select-h   .select-title.sc-stellar-select   stellar-asset.sc-stellar-select{position:absolute;right:2rem;-webkit-transition:-webkit-transform .1s var(--ease) 0s;transition:-webkit-transform .1s var(--ease) 0s;transition:transform .1s var(--ease) 0s;transition:transform .1s var(--ease) 0s,-webkit-transform .1s var(--ease) 0s;font-size:1.6rem;color:var(--theme-base5);background:transparent;border:0}.sc-stellar-select-h   .select-title.sc-stellar-select   .button.sc-stellar-select   stellar-asset.sc-stellar-select{display:none}[open].sc-stellar-select-h   .select-title.sc-stellar-select   stellar-asset.sc-stellar-select{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sc-stellar-select-h   .select-list.sc-stellar-select{display:-ms-flexbox;display:flex;position:relative;top:0;left:0;-ms-flex-direction:column;flex-direction:column;-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transition:opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s,-webkit-transform .2s var(--ease) .35s;transition:opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s,-webkit-transform .2s var(--ease) .35s;transition:transform .2s var(--ease) .35s,opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s;transition:transform .2s var(--ease) .35s,opacity .25s var(--ease) .35s,max-height .2s var(--ease) .35s,-webkit-transform .2s var(--ease) .35s;opacity:0;z-index:3;background:var(--background);width:100%;max-height:0;overflow-x:hidden;overflow-y:hidden;color:var(--theme-base5);border:1px solid var(--border-color);pointer-events:none;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.15);box-shadow:0 1px 2px rgba(0,0,0,.15);border-radius:.3rem}.sc-stellar-select-h .select-list .sc-stellar-select-s > stellar-item{color:var(--color);border-bottom:1px solid var(--border-color)}.sc-stellar-select-h .select-list .sc-stellar-select-s > stellar-item:last-child{border-bottom:none}.sc-stellar-select-h   .label-wrapper.sc-stellar-select{width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:1rem;height:1.8rem}.sc-stellar-select-h   .label-wrapper.sc-stellar-select   stellar-label.sc-stellar-select{margin:0}.sc-stellar-select-h   .select-list-footer.sc-stellar-select{-ms-flex-order:3;order:3;height:4rem;border-top:1px solid var(--theme-base5)}stellar-input.sc-stellar-select   .validation.sc-stellar-select{margin-bottom:0;color:var(--red5);font-size:var(--complementing-font-size);font-weight:500}stellar-input.sc-stellar-select   .validation.sc-stellar-select   span.sc-stellar-select{display:block;padding:1.4rem 0;line-height:1.4}stellar-input.sc-stellar-select   .validation.sc-stellar-select   span.sc-stellar-select + span.sc-stellar-select{border-top:1px solid var(--border-color)}[open].sc-stellar-select-h   .select-list.sc-stellar-select, .sc-stellar-select-h   .select-list.sc-stellar-select:focus-within{-webkit-transition:opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms,-webkit-transform .2s var(--ease) 0ms;transition:opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms,-webkit-transform .2s var(--ease) 0ms;transition:transform .2s var(--ease) 0ms,opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms;transition:transform .2s var(--ease) 0ms,opacity .25s var(--ease) 0ms,max-height .2s var(--ease) 0ms,-webkit-transform .2s var(--ease) 0ms;opacity:1;pointer-events:auto;max-height:20rem;overflow-y:auto}[size=small].sc-stellar-select-h   .select-title.sc-stellar-select{height:3.5rem}[size=small].sc-stellar-select-h   .select-title.sc-stellar-select   stellar-asset.sc-stellar-select{right:1rem}[size=small].sc-stellar-select-h   .label.sc-stellar-select{font-size:.75rem}[size=small].sc-stellar-select-h   stellar-item.sc-stellar-select{--font-size:1.4rem;--item-size:3.5rem}[size=small].sc-stellar-select-h   .select-list.sc-stellar-select:focus-within, [size=small][open].sc-stellar-select-h   .select-list.sc-stellar-select{max-height:11rem}[overlay].sc-stellar-select-h   .select-list.sc-stellar-select{position:absolute;top:calc((var(--item-size) * .75) + .5rem)}.sc-stellar-select-h   stellar-tooltip.sc-stellar-select{cursor:pointer}.sc-stellar-select-h   stellar-item.sc-stellar-select   stellar-tooltip.sc-stellar-select{display:none}.dark-mode.sc-stellar-select-h, .dark-mode   .sc-stellar-select-h{--background:var(--black-alt);--color:var(--white);--border-color:var(--gray9)}.sc-stellar-select-h   .sc-stellar-select::selection{background:var(--theme-base0)!important}"; }
}

export { Item as StellarItem, Select as StellarSelect };
