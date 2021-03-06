'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');
require('./index-9b3c8604.js');
const index$1$1 = require('./index-d326a972.js');
require('./_commonjsHelpers-3fc1f64e.js');
const cssCustomProperties_min = require('./css-custom-properties.min-d46e7f9d.js');
require('./main-6214461c.js');
require('./moment-fd045425.js');
require('./index-9d31ce96.js');
const theme$1 = require('./theme-1038bd3c.js');

const ButtonCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;-moz-appearance:none !important;appearance:none !important;-webkit-appearance:none !important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:var(--wrap-display, inline-block);font-family:var(--font-heading);text-align:center;vertical-align:baseline;-ms-flex-item-align:center;align-self:center;--width:auto;--height:auto;--padding-vertical:var(--ms0);--padding-horizontal:var(--ms2);--padding:var(--padding-vertical) var(--padding-horizontal);--background:var(--theme-base5);--color:var(--white);--border:none;--active-background:var(--theme-base7);--active-color:var(--white);--active-border:none;--border:none;--border-radius:0;--font-size:var(--ms0);--text-decoration:none}:host([outline]){--background:transparent;--color:var(--theme-base5);--border:2px solid currentColor;--active-background:var(--theme-base0);--active-color:var(--theme-base7);--active-border:2px solid currentColor}:host([ghost]){--padding-vertical:0;--padding-horizontal:0;--background:none;--color:var(--theme-base5);--border:none;--active-background:none;--active-color:var(--theme-base7);--active-border:none}:host([outline][invert]){--background:transparent;--border:2px solid currentColor;--active-background:var(--theme-base0);--active-border:2px solid currentColor}:host([ghost][invert]){--background:none;--color:var(--theme-base2);--border:none;--active-background:none;--active-color:var(--theme-base5);--active-border:none}:host([invert]){--background:var(--white);--color:var(--theme-base2);--border:none;--active-background:var(--theme-base0);--active-color:var(--theme-base5);--active-border:none}:host([contrast]){--background:var(--theme-base7);--color:var(--white);--border:none;--active-background:var(--theme-base9);--active-color:var(--theme-base0);--active-border:none}:host([pill]){--border-radius:1000px}:host([size=\"tiny\"]){--font-size:var(--ms-2)}:host([size=\"small\"]){--font-size:var(--ms-1)}:host([size=\"medium\"]){--font-size:var(--ms1)}:host([size=\"large\"]){--font-size:var(--ms2)}:host([padding=\"tiny\"]){--padding-vertical:var(--ms-2);--padding-horizontal:var(--ms0)}:host([padding=\"small\"]){--padding-vertical:var(--ms-1);--padding-horizontal:var(--ms1)}:host([padding=\"medium\"]){--padding-vertical:var(--ms1);--padding-horizontal:var(--ms3)}:host([padding=\"large\"]){--padding-vertical:var(--ms2);--padding-horizontal:var(--ms4)}:host(:active){-webkit-transform:scale(0.925);transform:scale(0.925)}:host(.h-auto){--height:100%;--padding-vertical:0}:host .button{cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;outline:0;border:var(--border);background:var(--background);padding:var(--padding);width:var(--width);height:var(--height);vertical-align:bottom;-webkit-text-decoration:var(--text-decoration);text-decoration:var(--text-decoration);line-height:1;letter-spacing:var(--letter-spacing, 0.0275em);white-space:nowrap;color:var(--color);font-family:inherit;font-size:var(--font-size);font-weight:600;border-radius:var(--border-radius, 0)}:host a.button,:host span.button{width:auto}:host .button:hover,:host .button:focus{border:var(--active-border);background-color:var(--active-background);color:var(--active-color)}:host .button .content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host([block]),:host([block]) .button{display:block;width:100%}:host ::slotted(*){line-height:1 !important;font-family:inherit}:host([icon]) .button .content{display:inline-grid;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;grid-template-columns:auto auto auto;grid-gap:0.1em}:host ::slotted(img),:host ::slotted(ion-icon){display:inline-block;float:none;width:1em;height:1em;font-size:1.75em;margin:calc(var(--padding-vertical) * -0.5) 0 calc(var(--padding-vertical) * -0.5) calc(var(--padding-vertical) * -0.5)}:host([ghost]) ::slotted(img),:host([ghost]) ::slotted(ion-icon){font-size:1.65em}:host ::slotted(.align-left){-ms-flex-order:-1;order:-1;margin-right:var(--ms-7)}:host ::slotted(.align-right){-ms-flex-order:2;order:2;margin-left:var(--ms-7)}:host([dark]){--background:var(--theme-base7);--color:var(--white);--active-background:var(--theme-base9);--active-color:var(--white);--active-border:none}:host([dark][outline]){--background:transparent;--color:var(--white);--border:2px solid var(--theme-base5);--active-background:var(--theme-base9);--active-color:var(--theme-base0);--active-border:2px solid var(--theme-base9)}:host([dark][ghost]){--padding:0.05em 0 0.125em;--background:none;--color:var(--theme-base5);--border:none;--active-background:none;--active-color:var(--theme-base7);--active-border:none}";

const Button = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        this.icon = this.element.querySelectorAll('ion-icon').length > 0;
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
        return (index.h("ion-icon", { src: "loading", style: { color: "var(--white)" } }));
    }
    renderButton() {
        return (index.h("button", { type: "button", class: "button", title: this.label, disabled: this.disabled, onClick: () => { this.click(); } }, index.h("div", { class: "content" }, index.h("slot", null, "Submit")), this.processing && index.h("div", { class: "processing" }, this.renderSVG())));
    }
    renderSubmit() {
        return (index.h("button", { type: "submit", class: "button", title: this.label, disabled: this.disabled, name: this.name, value: this.value, onClick: () => { this.click(); } }, index.h("div", { class: "content" }, index.h("slot", null, "Submit")), this.processing && index.h("div", { class: "processing" }, this.renderSVG())));
    }
    renderLink() {
        return (index.h("a", { href: this.href, target: this.target, class: "button", "data-disabled": this.disabled, title: this.label, onClick: () => { this.click(); } }, index.h("div", { class: "content" }, index.h("slot", null, "Submit")), this.processing && index.h("div", { class: "processing" }, this.renderSVG())));
    }
    renderAppLink() {
        return (index.h("stencil-route-link", { url: this.href, anchorClass: "button", "data-disabled": this.disabled, title: this.label, onClick: () => { this.click(); } }, index.h("div", { class: "content" }, index.h("slot", null, "Submit")), this.processing && index.h("div", { class: "processing" }, this.renderSVG())));
    }
    renderSpan() {
        return (index.h("span", { class: "button", title: this.label, "data-disabled": this.disabled, "aria-label": `Button ${this.label} ${this.element.textContent}`, tabIndex: 0, onClick: () => { this.click(); } }, index.h("div", { class: "content" }, index.h("slot", null, "Submit")), this.processing && index.h("div", { class: "processing" }, this.renderSVG())));
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
    get element() { return index.getElement(this); }
    static get style() { return ButtonCss; }
};
theme$1.Tunnel.injectProps(Button, ['dark']);

const CardCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;-moz-appearance:none;appearance:none;-webkit-appearance:none !important;display:block;background:var(--background);border-radius:var(--border-radius);height:100%;--border:1px solid var(--gray1);--background:var(--white);--background-active:var(--theme-base0);--flipped-background:var(--white);--flipped-min-height:var(--flipped-min-height, 20rem);--flipped-transition:none;--border-radius:var(--border-radius-sm);--padding:3rem;--min-height:10rem;--card-width:auto}:host([padding=\"none\"]){--padding:0rem}:host([padding=\"tiny\"]){--padding:0.5rem}:host([padding=\"small\"]){--padding:1rem}:host([padding=\"medium\"]){--padding:2rem}:host([padding=\"large\"]){--padding:4rem}:host .wrap{-moz-appearance:none;appearance:none;-webkit-appearance:none !important;display:block;border:var(--border);width:var(--card-width);height:100%;text-decoration:none;outline:none;display:grid;padding:0;grid-template-columns:var(--padding) 1fr var(--padding);grid-template-rows:auto var(--padding) 1fr var(--padding) auto;grid-template-areas:\"header header header\"\n    \". . .\"\n    \". section .\"\n    \". . .\"\n    \"footer footer footer\";border-radius:var(--border-radius);min-height:var(--min-height);background:var(--background);text-align:inherit;font-size:inherit;color:inherit}:host([flippable]) .wrap .front,:host([flippable]) .wrap .back{height:auto;display:grid;padding:0;grid-template-columns:var(--padding) 1fr var(--padding);grid-template-rows:auto var(--padding) 1fr var(--padding) auto;grid-template-areas:\"header header header\"\n    \". . .\"\n    \". section .\"\n    \". . .\"\n    \"footer footer footer\";min-height:var(--min-height)}:host .wrap ::slotted(*),:host .wrap ::slotted(section){grid-area:section;max-width:calc(var(--card-width) - (var(--padding) * 2))}:host .wrap ::slotted(*.flush),:host .wrap ::slotted(section.flush){grid-column:1 / span 3;width:100% !important;max-width:100% !important;grid-row:1 / span 4;padding:1rem}:host .wrap ::slotted(header){padding:1rem var(--padding);border-bottom:var(--border);border-radius:var(--border-radius) var(--border-radius) 0 0;grid-area:header !important;width:calc(var(--card-width) - 2px);max-width:calc(var(--card-width) - 2px)}:host .wrap ::slotted(header.subhead){background:var(--theme-base8)}:host .wrap ::slotted(header.sticky){position:-webkit-sticky;position:sticky;top:0;z-index:999999}:host .wrap ::slotted(footer){grid-area:footer !important;padding:1rem var(--padding);border-top:var(--border);width:calc(var(--card-width) - 2px);max-width:calc(var(--card-width) - 2px)}:host([has*=\"header\"][has*=\"footer\"]){grid-template-columns:1rem auto 1rem;grid-template-rows:1fr auto 1fr}:host stencil-route-link.wrap a{text-decoration:none}:host button.wrap:active,:host a.wrap:active,:host stencil-route-link.wrap:active{background:var(--background-active)}:host([shadow=\"light\"]){-webkit-box-shadow:0 .8rem 3rem -2rem var(--gray1);box-shadow:0 .8rem 3rem -2rem var(--gray1)}:host([shadow=\"heavy\"]){-webkit-box-shadow:0 .8rem 3rem -1rem var(--gray1);box-shadow:0 .8rem 3rem -1rem var(--gray1)}:host([rounded=\"true\"]){border-radius:1rem}:host([flippable]){-webkit-perspective:3000px;perspective:3000px;background:transparent}:host([flippable]) .wrap{display:block;background:var(--background)}:host([flippable][flip-ready]) .wrap{-webkit-transition:all 0.5s var(--ease, ease-in-out) 0s, background-color 0s ease 0s;transition:all 0.5s var(--ease, ease-in-out) 0s, background-color 0s ease 0s}:host([flippable]) .wrap .front{-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;opacity:1;height:100%}:host([flippable][flip-ready]) .wrap .front{-webkit-transition:min-height 0.35s linear 0s, opacity 0.15s linear 0.3s !important;transition:min-height 0.35s linear 0s, opacity 0.15s linear 0.3s !important}:host([flippable]) .wrap .back *{-webkit-backface-visibility:hidden;backface-visibility:hidden}:host([flippable]) .wrap .back{top:0;left:0;position:absolute;height:100%;width:100%;z-index:0;-webkit-transform:rotateY(180deg);transform:rotateY(180deg);overflow-y:none;pointer-events:none;opacity:0}:host([flippable][flip-ready]) .wrap .back{-webkit-transition:min-height 0.35s linear 0s, opacity 0.15s linear 0.0s !important;transition:min-height 0.35s linear 0s, opacity 0.15s linear 0.0s !important}:host([flippable][flipped][flip-ready]) .wrap .front{-webkit-transition:min-height 0.35s linear 0s, opacity 0.15s linear 0s !important;transition:min-height 0.35s linear 0s, opacity 0.15s linear 0s !important}:host([flippable][flipped][flip-ready]) .wrap .back{-webkit-transition:min-height 0.35s linear 0s, opacity 0.15s linear 0.3s !important;transition:min-height 0.35s linear 0s, opacity 0.15s linear 0.3s !important}:host([flippable]) .wrap .flip-button{position:absolute;right:0.5rem;top:0.5rem;z-index:1;-webkit-transform:translateZ(1px);transform:translateZ(1px)}:host([flippable][flipped]){--background:var(--flipped-background, white) !important;--min-height:var(--flipped-min-height) !important;z-index:1}:host([flippable][flipped]) .wrap{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}:host([flippable][flipped]) .wrap .flip-button{-webkit-transform:translateZ(-1px);transform:translateZ(-1px)}:host([flippable]) .wrap .back ::slotted(section){height:calc(100% + var(--padding))}:host([flippable][flipped]) .wrap .front,:host([flippable][flipped]) .wrap .back{min-height:var(--min-height)}:host([flippable][flipped]) .wrap .front{pointer-events:none;opacity:0}:host([flippable][flipped]) .wrap .back{pointer-events:initial;overflow-y:initial;opacity:1}:host([dark]){--border:1px solid var(--gray8);--background:var(--gray9);--background-active:var(--gray8);--flipped-background:var(--gray9)}";

const Card = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Renders a shadow on the card
         */
        this.shadow = "medium";
        /**
         * Let's a card be flippable
         */
        this.flippable = false;
        /**
         * Let's a card be flippable
         */
        this.flipReady = false;
        /**
         * Renders a flipped card
         */
        this.flipped = false;
        /**
         * Sets the padding inside of the button. Can be small, medium, or large.
         */
        this.padding = "medium";
        /**
         * Sets the element to render the card as - an anchor tag, a button, or a div.
         */
        this.tag = "div";
        /**
         * Sets the href if the card is a link.
         */
        this.href = "#";
        /**
         * Sets the name if the card is a button.
         */
        this.name = "";
        /**
         * Sets the value if the card is a button.
         */
        this.value = "#";
        /**
         * Removes the resize observer
         */
        this.noresize = false;
        /**
         * Sets the href on the anchor tag if the button is a link.
         */
        this.flipIcon = "cog";
        this.dark = false;
        this.flip = index.createEvent(this, "flip", 7);
    }
    componentDidLoad() {
        this.updateFlippableCardHeight();
        this.addResizeObserver();
    }
    addResizeObserver() {
        if (!this.noresize) {
            this.ro = new index$1$1.ResizeObserver(async (entries) => {
                for (const entry of entries) {
                    const { width } = entry.contentRect;
                    cssCustomProperties_min.properties.set({ '--card-width': `${width}px` }, entry.target);
                }
            });
            this.ro.observe(this.element);
        }
    }
    async updateFlippableCardHeight() {
        await index$1$1.delay(100);
        if (this.flippable) {
            const front = this.element.shadowRoot.querySelector('.front');
            const back = this.element.shadowRoot.querySelector('.back');
            const front_height = front.offsetHeight;
            const back_height = back.scrollHeight;
            if (!this.originalHeight) {
                this.originalHeight = back_height;
            }
            cssCustomProperties_min.properties.set({ '--min-height': `${front_height}px` }, this.element);
            cssCustomProperties_min.properties.set({ '--flipped-min-height': `${back_height}px` }, this.element);
        }
        else {
            cssCustomProperties_min.properties.unset('--flipped-min-height', this.element);
            cssCustomProperties_min.properties.unset('--min-height', this.element);
            this.originalHeight = undefined;
        }
    }
    async updateBackCardHeight() {
        if (this.flippable) {
            const back = this.element.shadowRoot.querySelector('.back');
            const back_height = back.scrollHeight;
            cssCustomProperties_min.properties.set({ '--flipped-min-height': `${back_height}px` }, this.element);
        }
        return true;
    }
    async handleKeyUp() {
        this.flipReady = false;
        cssCustomProperties_min.properties.set({ '--flipped-min-height': `${this.originalHeight}px` }, this.element);
        await this.updateBackCardHeight();
    }
    async click() {
        if (this.for) {
            const target = this.for.split(":");
            if (target[0] === "modal") {
                // @ts-ignore
                const modal = document.querySelector(`stellar-modal[name="${target[1]}"]`);
                modal.open();
            }
        }
        return true;
    }
    async handleFlipped() {
        await index$1$1.delay(350);
        this.flipReady = false;
        cssCustomProperties_min.properties.set({ '--flipped-min-height': `${this.originalHeight}px` }, this.element);
        await index$1$1.delay(100);
        await this.updateBackCardHeight();
    }
    async flip_card(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (this.flippable) {
            this.flipReady = true;
            this.flipped = !this.flipped;
            this.flip.emit();
        }
    }
    render() {
        const childProps = {
            href: this.href,
            url: this.href,
            name: this.name,
            value: this.value,
            type: this.type
        };
        // @ts-ignore
        return (index.h(this.tag, Object.assign({}, childProps, { class: "stencil-route-link" !== this.tag ? "wrap" : "", anchorClass: "stencil-route-link" === this.tag ? "wrap" : "", onClick: (e) => { this.click(e); } }), this.flippable && [
            this.flipIcon && this.flipIcon !== "false" && index.h("stellar-button", { tag: "button", ghost: true, class: "flip-button", onClick: (e) => { e.stopPropagation(); e.preventDefault(); this.flip_card(e); } }, index.h("ion-icon", { name: this.flipped ? "close" : this.flipIcon, class: "ma0" })),
            index.h("div", { class: "front" }, index.h("slot", null)),
            index.h("div", { class: "back" }, index.h("slot", { name: "back" }))
        ], !this.flippable && index.h("slot", null)));
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "flippable": ["updateFlippableCardHeight"],
        "flipped": ["handleFlipped"]
    }; }
    static get style() { return CardCss; }
};
theme$1.Tunnel.injectProps(Card, ['dark']);

exports.stellar_button = Button;
exports.stellar_card = Card;
