import { r as registerInstance, d as createEvent, h, g as getElement } from './index-cc4604b3.js';
import './colors-eb996d31.js';
import './_commonjsHelpers-bccf23a2.js';
import { p as properties } from './css-custom-properties.min-d9d14253.js';
import { R as ResizeObserver, d as delay } from './index-26976b63.js';
import './main-e9832563.js';
import './moment-5e7e00c2.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-dbf484eb.js';
import './utils-06e0aad6.js';
import './index-88205cad.js';

const CardCss = ":host, :host *, :host *:before, :host *:after {\n    box-sizing: border-box;\n}\n\n:host {\n    contain: content;\n    appearance: none;\n    -webkit-appearance: none !important;\n    display: block;\n    background: var(--background);\n    border-radius: var(--border-radius);\n    height: 100%;\n\n    --border: 1px solid var(--gray1);\n    --background: var(--white);\n    --background-active: var(--theme-base0);\n    --flipped-background: var(--white);\n    --flipped-min-height: var(--flipped-min-height, 20rem);\n    --flipped-transition: none;\n    --border-radius: var(--border-radius-sm);\n    --padding: 3rem;\n    --min-height: 10rem;\n    --card-width: auto;\n}\n\n:host([padding=\"none\"]) {\n    --padding: 0rem;\n}\n\n:host([padding=\"tiny\"]) {\n    --padding: 0.5rem;\n}\n\n:host([padding=\"small\"]) {\n    --padding: 1rem;\n}\n\n:host([padding=\"medium\"]) {\n    --padding: 2rem;\n}\n\n:host([padding=\"large\"]) {\n    --padding: 4rem;\n}\n\n:host .wrap {\n    appearance: none;\n    -webkit-appearance: none !important;\n    display: block;\n    border: var(--border);\n    width: var(--card-width);\n    height: 100%;\n    text-decoration: none;\n    outline: none;\n    display: grid;\n    padding: 0;\n    grid-template-columns: var(--padding) 1fr var(--padding);\n    grid-template-rows: auto var(--padding) 1fr var(--padding) auto;\n    grid-template-areas: \"header header header\"\n    \". . .\"\n    \". section .\"\n    \". . .\"\n    \"footer footer footer\";\n    border-radius: var(--border-radius);\n    min-height: var(--min-height);\n    background: var(--background);\n    text-align: inherit;\n    font-size: inherit;\n    color: inherit;\n}\n\n:host([flippable]) .wrap .front,\n:host([flippable]) .wrap .back {\n    height: auto;\n    display: grid;\n    padding: 0;\n    grid-template-columns: var(--padding) 1fr var(--padding);\n    grid-template-rows: auto var(--padding) 1fr var(--padding) auto;\n    grid-template-areas: \"header header header\"\n    \". . .\"\n    \". section .\"\n    \". . .\"\n    \"footer footer footer\";\n    min-height: var(--min-height);\n}\n\n:host .wrap ::slotted(*),\n:host .wrap ::slotted(section) {\n    grid-area: section;\n    max-width: calc(var(--card-width) - (var(--padding) * 2));\n}\n\n:host .wrap ::slotted(*.flush),\n:host .wrap ::slotted(section.flush) {\n    grid-column: 1 / span 3;\n    width: 100% !important;\n    max-width: 100% !important;\n    grid-row: 1 / span 4;\n    padding: 1rem;\n}\n\n:host .wrap ::slotted(header) {\n    padding: 1rem var(--padding);\n    border-bottom: var(--border);\n    border-radius: var(--border-radius) var(--border-radius) 0 0;\n    grid-area: header !important;\n    width: calc(var(--card-width) - 2px);\n    max-width: calc(var(--card-width) - 2px);\n}\n\n:host .wrap ::slotted(header.subhead) {\n    background: var(--theme-base8);\n}\n\n:host .wrap ::slotted(header.sticky) {\n    position: sticky;\n    top: 0;\n    z-index: 999999;\n}\n\n:host .wrap ::slotted(footer) {\n    grid-area: footer !important;\n    padding: 1rem var(--padding);\n    border-top: var(--border);\n    width: calc(var(--card-width) - 2px);\n    max-width: calc(var(--card-width) - 2px);\n}\n\n:host([has*=\"header\"][has*=\"footer\"]) {\n    grid-template-columns: 1rem auto 1rem;\n    grid-template-rows: 1fr auto 1fr;\n}\n\n:host stencil-route-link.wrap a {\n    text-decoration: none;\n}\n\n:host button.wrap:active,\n:host a.wrap:active,\n:host stencil-route-link.wrap:active {\n    background: var(--background-active);\n}\n\n:host([shadow=\"light\"]) {\n    box-shadow: 0 .8rem 3rem -2rem var(--gray1);\n}\n\n:host([shadow=\"heavy\"]) {\n    box-shadow: 0 .8rem 3rem -1rem var(--gray1);\n}\n\n:host([rounded=\"true\"]) {\n    border-radius: 1rem;\n}\n\n\n:host([flippable]) {\n    perspective: 3000px;\n    background: transparent;\n}\n\n:host([flippable]) .wrap {\n    display: block;\n    /* transform-style: preserve-3d; */\n    background: var(--background);\n}\n\n:host([flippable][flip-ready]) .wrap { transition: all 0.5s var(--ease, ease-in-out) 0s, background-color 0s ease 0s; }\n\n:host([flippable]) .wrap .front {\n    backface-visibility: hidden;\n    z-index: 1;\n    opacity: 1;\n    height: 100%;\n}\n\n:host([flippable][flip-ready]) .wrap .front { transition: min-height 0.35s linear 0s, opacity 0.15s linear 0.3s !important; }\n\n:host([flippable]) .wrap .back * {\n    backface-visibility: hidden;\n}\n\n:host([flippable]) .wrap .back {\n    top: 0;\n    left: 0;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    z-index: 0;\n    transform: rotateY(180deg);\n    overflow-y: none;\n    pointer-events: none;\n    opacity: 0;\n}\n\n:host([flippable][flip-ready]) .wrap .back {\n    transition: min-height 0.35s linear 0s, opacity 0.15s linear 0.0s !important;\n}\n\n:host([flippable][flipped][flip-ready]) .wrap .front {\n    transition: min-height 0.35s linear 0s, opacity 0.15s linear 0s !important;\n}\n\n:host([flippable][flipped][flip-ready]) .wrap .back {\n    transition: min-height 0.35s linear 0s, opacity 0.15s linear 0.3s !important;\n}\n\n:host([flippable]) .wrap .flip-button {\n    position: absolute;\n    right: 0.5rem;\n    top: 0.5rem;\n    z-index: 1;\n    transform: translateZ(1px)\n}\n\n:host([flippable][flipped]) {\n    --background: var(--flipped-background, white) !important;\n    --min-height: var(--flipped-min-height) !important;\n    z-index: 1;\n}\n\n:host([flippable][flipped]) .wrap {\n    transform: rotateY(180deg);\n}\n\n:host([flippable][flipped]) .wrap .flip-button {\n    transform: translateZ(-1px)\n}\n\n:host([flippable]) .wrap .back ::slotted(section) {\n    height: calc(100% + var(--padding));\n}\n\n:host([flippable][flipped]) .wrap .front,\n:host([flippable][flipped]) .wrap .back {\n    min-height: var(--min-height);\n}\n\n:host([flippable][flipped]) .wrap .front {\n    pointer-events: none;\n    opacity: 0;\n}\n\n:host([flippable][flipped]) .wrap .back {\n    pointer-events: initial;\n    overflow-y: initial;\n    opacity: 1;\n}\n\n:host([dark]) {\n    --border: 1px solid var(--gray8);\n    --background: var(--gray9);\n    --background-active: var(--gray8);\n    --flipped-background: var(--gray9);\n}\n";

const Card = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.flip = createEvent(this, "flip", 7);
    }
    componentDidLoad() {
        this.updateFlippableCardHeight();
        this.addResizeObserver();
    }
    addResizeObserver() {
        if (!this.noresize) {
            this.ro = new ResizeObserver(async (entries) => {
                for (const entry of entries) {
                    const { width } = entry.contentRect;
                    properties.set({ '--card-width': `${width}px` }, entry.target);
                }
            });
            this.ro.observe(this.element);
        }
    }
    async updateFlippableCardHeight() {
        await delay(100);
        if (this.flippable) {
            const front = this.element.shadowRoot.querySelector('.front');
            const back = this.element.shadowRoot.querySelector('.back');
            const front_height = front.offsetHeight;
            const back_height = back.scrollHeight;
            if (!this.originalHeight) {
                this.originalHeight = back_height;
            }
            properties.set({ '--min-height': `${front_height}px` }, this.element);
            properties.set({ '--flipped-min-height': `${back_height}px` }, this.element);
        }
        else {
            properties.unset('--flipped-min-height', this.element);
            properties.unset('--min-height', this.element);
            this.originalHeight = undefined;
        }
    }
    async updateBackCardHeight() {
        if (this.flippable) {
            const back = this.element.shadowRoot.querySelector('.back');
            const back_height = back.scrollHeight;
            properties.set({ '--flipped-min-height': `${back_height}px` }, this.element);
        }
        return true;
    }
    async handleKeyUp() {
        this.flipReady = false;
        properties.set({ '--flipped-min-height': `${this.originalHeight}px` }, this.element);
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
        await delay(350);
        this.flipReady = false;
        properties.set({ '--flipped-min-height': `${this.originalHeight}px` }, this.element);
        await delay(100);
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
        return (h(this.tag, Object.assign({}, childProps, { class: "stencil-route-link" !== this.tag ? "wrap" : "", anchorClass: "stencil-route-link" === this.tag ? "wrap" : "", onClick: (e) => { this.click(e); } }), this.flippable && [
            this.flipIcon && this.flipIcon !== "false" && h("stellar-button", { tag: "button", ghost: true, class: "flip-button", onClick: (e) => { e.stopPropagation(); e.preventDefault(); this.flip_card(e); } }, h("ion-icon", { name: this.flipped ? "close" : this.flipIcon, class: "ma0" })),
            h("div", { class: "front" }, h("slot", null)),
            h("div", { class: "back" }, h("slot", { name: "back" }))
        ], !this.flippable && h("slot", null)));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "flippable": ["updateFlippableCardHeight"],
        "flipped": ["handleFlipped"]
    }; }
    static get style() { return CardCss; }
};
Tunnel.injectProps(Card, ['dark']);

export { Card as stellar_card };
