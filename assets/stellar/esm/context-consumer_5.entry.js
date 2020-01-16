import { r as registerInstance, g as getElement, h } from './index-d1f18b4d.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-ea971d04.js';
import { m as matchPath } from './match-path-fd602b4d.js';
import { i as isModifiedEvent } from './dom-utils-c19d19f4.js';
import { A as ActiveRouter } from './active-router-d86e1937.js';

const ContextConsumer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.context = {};
        this.renderer = () => null;
    }
    connectedCallback() {
        if (this.subscribe != null) {
            this.unsubscribe = this.subscribe(this.el, 'context');
        }
    }
    disconnectedCallback() {
        if (this.unsubscribe != null) {
            this.unsubscribe();
        }
    }
    render() {
        return this.renderer(Object.assign({}, this.context));
    }
    get el() { return getElement(this); }
};

const CopyWrapCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;display:block}:host([align=\"left\"]){text-align:left !important}:host([align=\"left\"]) ::slotted(*){margin-right:auto !important}:host([align=\"center\"]){text-align:center !important}:host([align=\"center\"]) ::slotted(*){margin-right:auto !important;margin-left:auto !important}:host([align=\"right\"]){text-align:right !important}:host([align=\"right\"]) ::slotted(*){margin-left:auto !important}:host ::slotted(stellar-button){display:inline-block}:host ::slotted(img),:host ::slotted(stellar-code-block){margin-bottom:2rem}:host ::slotted(*:last-child){margin-bottom:0}:host([full]) ::slotted(*){max-width:100%}:host ::slotted(ul),:host ::slotted(ol){margin:.25em 0;display:inline-block;text-align:left}:host ::slotted(li){margin-top:0.5em}";

const CopyWrap = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.align = "left";
        this.full = false;
    }
    render() {
        return h("slot", null);
    }
    static get style() { return CopyWrapCss; }
};

const AssetCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;display:block;-webkit-transform-origin:.5em .5em;transform-origin:.5em .5em}:host .icon-wrap{display:-ms-flexbox;display:flex}";

const Asset = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.name = "person";
        this.language = "ios-";
        this.block = false;
    }
    componentWillLoad() {
        this.ariaLabel = this.name
            .replace('ios-', '')
            .replace('md-', '')
            .replace(/\-/g, ' ');
    }
    render() {
        return (h("div", { class: "icon-wrap" }, h("ion-icon", { src: this.src, name: this.name, ariaLabel: this.ariaLabel, "aria-label": this.ariaLabel })));
    }
    static get style() { return AssetCss; }
};

const ButtonCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;-moz-appearance:none !important;appearance:none !important;-webkit-appearance:none !important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:var(--wrap-display, inline-block);font-family:var(--font-heading);text-align:center;vertical-align:baseline;-ms-flex-item-align:center;align-self:center;--width:auto;--height:auto;--padding-vertical:var(--ms0);--padding-horizontal:var(--ms2);--padding:var(--padding-vertical) var(--padding-horizontal);--background:var(--theme-base5);--color:var(--white);--border:none;--active-background:var(--theme-base7);--active-color:var(--white);--active-border:none;--border:none;--border-radius:0;--font-size:var(--ms0);--text-decoration:none}:host([outline]){--background:transparent;--color:var(--theme-base5);--border:2px solid currentColor;--active-background:var(--theme-base0);--active-color:var(--theme-base7);--active-border:2px solid currentColor}:host([ghost]){--padding-vertical:0;--padding-horizontal:0;--background:none;--color:var(--theme-base5);--border:none;--active-background:none;--active-color:var(--theme-base7);--active-border:none}:host([outline][invert]){--background:transparent;--border:2px solid currentColor;--active-background:var(--theme-base0);--active-border:2px solid currentColor}:host([ghost][invert]){--background:none;--color:var(--theme-base2);--border:none;--active-background:none;--active-color:var(--theme-base5);--active-border:none}:host([invert]){--background:var(--white);--color:var(--theme-base2);--border:none;--active-background:var(--theme-base0);--active-color:var(--theme-base5);--active-border:none}:host([contrast]){--background:var(--theme-base7);--color:var(--white);--border:none;--active-background:var(--theme-base9);--active-color:var(--theme-base0);--active-border:none}:host([pill]){--border-radius:1000px}:host([size=\"tiny\"]){--font-size:var(--ms-2)}:host([size=\"small\"]){--font-size:var(--ms-1)}:host([size=\"medium\"]){--font-size:var(--ms1)}:host([size=\"large\"]){--font-size:var(--ms2)}:host([padding=\"tiny\"]){--padding-vertical:var(--ms-2);--padding-horizontal:var(--ms0)}:host([padding=\"small\"]){--padding-vertical:var(--ms-1);--padding-horizontal:var(--ms1)}:host([padding=\"medium\"]){--padding-vertical:var(--ms1);--padding-horizontal:var(--ms3)}:host([padding=\"large\"]){--padding-vertical:var(--ms2);--padding-horizontal:var(--ms4)}:host(:active){-webkit-transform:scale(0.925);transform:scale(0.925)}:host(.h-auto){--height:100%;--padding-vertical:0}:host .button{cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;outline:0;border:var(--border);background:var(--background);padding:var(--padding);width:var(--width);height:var(--height);vertical-align:bottom;-webkit-text-decoration:var(--text-decoration);text-decoration:var(--text-decoration);line-height:1;letter-spacing:var(--letter-spacing, 0.0275em);white-space:nowrap;color:var(--color);font-family:inherit;font-size:var(--font-size);font-weight:600;border-radius:var(--border-radius, 0)}:host a.button,:host span.button{width:auto}:host .button:hover,:host .button:focus{border:var(--active-border);background-color:var(--active-background);color:var(--active-color)}:host .button .content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host([block]),:host([block]) .button{display:block;width:100%}:host ::slotted(*){line-height:1 !important;font-family:inherit}:host([icon]) .button .content{display:inline-grid;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;grid-template-columns:auto auto;grid-gap:0.1em}:host ::slotted(img),:host ::slotted(stellar-asset){display:inline-block;float:none;width:1em;height:1em;font-size:1.75em;margin:calc(var(--padding-vertical) * -0.5) 0 calc(var(--padding-vertical) * -0.5) calc(var(--padding-vertical) * -0.5)}:host([ghost]) ::slotted(img),:host([ghost]) ::slotted(stellar-asset){font-size:1.65em}:host ::slotted(img[align=\"left\"]),:host ::slotted(stellar-asset[align=\"left\"]){-ms-flex-order:-1;order:-1;margin-right:var(--ms-7)}:host ::slotted(img[align=\"right\"]),:host ::slotted(stellar-asset[align=\"right\"]){-ms-flex-order:2;order:2;margin-left:var(--ms-7)}:host([dark]){--background:var(--theme-base7);--color:var(--white);--active-background:var(--theme-base9);--active-color:var(--white);--active-border:none}:host([dark][outline]){--background:transparent;--color:var(--white);--border:2px solid var(--theme-base5);--active-background:var(--theme-base9);--active-color:var(--theme-base0);--active-border:2px solid var(--theme-base9)}:host([dark][ghost]){--padding:0.05em 0 0.125em;--background:none;--color:var(--theme-base5);--border:none;--active-background:none;--active-color:var(--theme-base7);--active-border:none}";

const Button = class {
    constructor(hostRef) {
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
    componentWillLoad() {
        if (!this.element.getAttribute("title")) {
            this.label = this.element.innerText;
        }
        else {
            this.label = this.element.getAttribute("title");
        }
        this.icon = this.element.querySelectorAll('stellar-asset').length > 0;
    }
    async click() {
        if (this.processable) {
            this.processing = true;
        }
        if (this.for) {
            const target = this.for.split(":");
            if (target[0] === "modal") {
                // @ts-ignore
                const modal = document.querySelector(`stellar-modal[name="${target[1]}"]`);
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
        return true;
    }
    renderSVG() {
        return (h("stellar-asset", { src: "Loading", color: "white" }));
    }
    renderButton() {
        return (h("button", { type: "button", class: "button", title: this.label, disabled: this.disabled, onClick: () => { this.click(); } }, h("div", { class: "content" }, h("slot", null, "Submit")), this.processing && h("div", { class: "processing" }, this.renderSVG())));
    }
    renderSubmit() {
        return (h("button", { type: "submit", class: "button", title: this.label, disabled: this.disabled, name: this.name, value: this.value, onClick: () => { this.click(); } }, h("div", { class: "content" }, h("slot", null, "Submit")), this.processing && h("div", { class: "processing" }, this.renderSVG())));
    }
    renderLink() {
        return (h("a", { href: this.href, target: this.target, class: "button", "data-disabled": this.disabled, title: this.label, onClick: () => { this.click(); } }, h("div", { class: "content" }, h("slot", null, "Submit")), this.processing && h("div", { class: "processing" }, this.renderSVG())));
    }
    renderAppLink() {
        return (h("stencil-route-link", { url: this.href, anchorClass: "button", "data-disabled": this.disabled, title: this.label, onClick: () => { this.click(); } }, h("div", { class: "content" }, h("slot", null, "Submit")), this.processing && h("div", { class: "processing" }, this.renderSVG())));
    }
    renderSpan() {
        return (h("span", { class: "button", title: this.label, "data-disabled": this.disabled, "aria-label": `Button ${this.label} ${this.element.textContent}`, tabIndex: 0, onClick: () => { this.click(); } }, h("div", { class: "content" }, h("slot", null, "Submit")), this.processing && h("div", { class: "processing" }, this.renderSVG())));
    }
    render() {
        return [
            this.tag === "button" && this.renderButton(),
            this.tag === "submit" && this.renderSubmit(),
            this.tag === "link" && this.renderLink(),
            this.tag === "route-link" && this.renderAppLink(),
            this.tag === "span" && this.renderSpan(),
            this.tag === "pjax" && this.renderSpan()
        ];
    }
    get element() { return getElement(this); }
    static get style() { return ButtonCss; }
};
Tunnel.injectProps(Button, ['dark']);

const getUrl = (url, root) => {
    // Don't allow double slashes
    if (url.charAt(0) == '/' && root.charAt(root.length - 1) == '/') {
        return root.slice(0, root.length - 1) + url;
    }
    return root + url;
};
const RouteLink = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.unsubscribe = () => { return; };
        this.activeClass = 'link-active';
        this.exact = false;
        this.strict = true;
        /**
          *  Custom tag to use instead of an anchor
          */
        this.custom = 'a';
        this.match = null;
    }
    componentWillLoad() {
        this.computeMatch();
    }
    // Identify if the current route is a match.
    computeMatch() {
        if (this.location) {
            this.match = matchPath(this.location.pathname, {
                path: this.urlMatch || this.url,
                exact: this.exact,
                strict: this.strict
            });
        }
    }
    handleClick(e) {
        if (isModifiedEvent(e) || !this.history || !this.url || !this.root) {
            return;
        }
        e.preventDefault();
        return this.history.push(getUrl(this.url, this.root));
    }
    // Get the URL for this route link without the root from the router
    render() {
        let anchorAttributes = {
            class: {
                [this.activeClass]: this.match !== null,
            },
            onClick: this.handleClick.bind(this)
        };
        if (this.anchorClass) {
            anchorAttributes.class[this.anchorClass] = true;
        }
        if (this.custom === 'a') {
            anchorAttributes = Object.assign({}, anchorAttributes, { href: this.url, title: this.anchorTitle, role: this.anchorRole, tabindex: this.anchorTabIndex, 'aria-haspopup': this.ariaHaspopup, id: this.anchorId, 'aria-posinset': this.ariaPosinset, 'aria-setsize': this.ariaSetsize, 'aria-label': this.ariaLabel });
        }
        return (h(this.custom, Object.assign({}, anchorAttributes), h("slot", null)));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "location": ["computeMatch"]
    }; }
};
ActiveRouter.injectProps(RouteLink, [
    'history',
    'location',
    'root'
]);

export { ContextConsumer as context_consumer, CopyWrap as copy_wrap, Asset as stellar_asset, Button as stellar_button, RouteLink as stencil_route_link };
