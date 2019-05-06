import { c as registerInstance, h as createEvent, d as h, f as getElement } from './stellar-core-d63b686e.js';
import './chunk-452e3210.js';
import { a as properties } from './chunk-aefb00c1.js';
import { d as ResizeObserver } from './chunk-15cea9da.js';
import './chunk-f26db59a.js';

class Card {
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
         * Sets the href on the anchor tag if the button is a link.
         */
        this.flip_icon = "cog";
        this.rotationLimit = 0.75;
        this.transition = false;
        this.flip = createEvent(this, "flip", 7);
    }
    refresh() {
        this.width = this.element.offsetWidth;
        this.height = this.element.offsetHeight;
        this.middleX = this.width / 2;
        this.middleY = this.height / 2;
    }
    componentDidLoad() {
        if (this.tag === "a") {
            setTimeout(() => { this.refresh(); }, 10);
            this.element.addEventListener('mouseenter', this.addRotation.bind(this));
            this.element.addEventListener('mousemove', this.animateRotation.bind(this));
            this.element.addEventListener('mouseleave', this.removeRotation.bind(this));
        }
        this.updateFlippableCardHeight();
        this.addResizeObserver();
    }
    addResizeObserver() {
        this.ro = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const { width } = entry.contentRect;
                properties.set({ '--card-width': `${width}px` }, entry.target);
            }
        });
        this.ro.observe(this.element);
    }
    updateFlippableCardHeight() {
        if (this.flippable) {
            const front = this.element.shadowRoot.querySelector('.front');
            const front_height = front.offsetHeight;
            properties.set({ '--min-height': `${front_height}px` }, this.element);
            const back = this.element.shadowRoot.querySelector('.back');
            const back_height = back.scrollHeight;
            properties.set({ '--flipped-min-height': `${back_height + 50}px` }, this.element);
        }
    }
    addRotation() {
        this.refresh();
        this.transition = true;
        setTimeout(() => {
            this.transition = false;
        }, 250);
    }
    async animateRotation(event) {
        const x = event.offsetX;
        const y = event.offsetY;
        const rotateX = (x - this.middleX) * (this.rotationLimit / this.middleX);
        const rotateY = (this.middleY - y) * (this.rotationLimit / this.middleY);
        properties.set({
            "--card-transform": `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`,
            "--card-hover-top": `${(rotateY / this.rotationLimit)}rem`,
            "--card-hover-right": `${((rotateX / this.rotationLimit) * -1)}rem`
        }, this.element);
    }
    async removeRotation() {
        this.refresh();
        this.transition = true;
        setTimeout(() => {
            this.transition = false;
            properties.set({
                "--card-transform": `rotateX(0deg) rotateY(0deg)`,
                "--card-hover-top": `0px`,
                "--card-hover-right": `0px`
            }, this.element);
        }, 250);
    }
    async click(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
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
    async flip_card(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (this.flippable) {
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
            h("stellar-button", { tag: "button", ghost: true, class: "flip-button", onClick: (e) => { e.stopPropagation(); e.preventDefault(); this.flip_card(e); } }, h("stellar-asset", { name: this.flipped ? "close" : this.flip_icon, class: "ma0" })),
            h("div", { class: "front" }, h("slot", null)),
            h("div", { class: "back" }, h("slot", { name: "back" }))
        ], !this.flippable && h("slot", null)));
    }
    get element() { return getElement(this); }
    static get style() { return ":host, :host *, :host *:before, :host *:after {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n:host {\n    -moz-appearance: none;\n    appearance: none;\n    -webkit-appearance: none !important;\n    display: block;\n    background: var(--background);\n    border-radius: var(--border-radius);\n    height: 100%;\n\n    --border: 1px solid var(--gray1);\n    --background: var(--white);\n    --flipped-background: var(--white);\n    --flipped-min-height: var(--flipped-min-height, 20rem);\n    --border-radius: var(--border-radius-sm);\n    --padding: 3rem;\n    --min-height: 10rem;\n    --card-width: auto;\n}\n\n:host([tag=\"a\"]) {\n    background: transparent;\n}\n\n:host([padding=\"small\"]) {\n    --padding: 1rem;\n}\n\n:host([padding=\"medium\"]) {\n    --padding: 2rem;\n}\n\n:host([padding=\"large\"]) {\n    --padding: 4rem;\n}\n\n:host .wrap {\n    -moz-appearance: none;\n    appearance: none;\n    -webkit-appearance: none !important;\n    display: block;\n    border: var(--border);\n    width: var(--card-width);\n    height: 100%;\n    text-decoration: none;\n    outline: none;\n    display: grid;\n    padding: 0;\n    grid-template-columns: var(--padding) 1fr var(--padding);\n    grid-template-rows: auto var(--padding) 1fr var(--padding) auto;\n    grid-template-areas: \"header header header\"\n    \". . .\"\n    \". section .\"\n    \". . .\"\n    \"footer footer footer\";\n    border-radius: var(--border-radius);\n    min-height: var(--min-height);\n}\n\n:host([flippable]) .wrap .front,\n:host([flippable]) .wrap .back {\n    height: auto;\n    display: grid;\n    padding: 0;\n    grid-template-columns: var(--padding) 1fr var(--padding);\n    grid-template-rows: auto var(--padding) 1fr var(--padding) auto;\n    grid-template-areas: \"header header header\"\n    \". . .\"\n    \". section .\"\n    \". . .\"\n    \"footer footer footer\";\n    min-height: var(--min-height);\n}\n\n:host .wrap ::slotted(*),\n:host .wrap ::slotted(section) {\n    grid-area: section;\n    max-width: calc(var(--card-width) - (var(--padding) * 2));\n}\n\n:host .wrap ::slotted(header) {\n    padding: 1rem var(--padding);\n    border-bottom: var(--border);\n    border-radius: var(--border-radius) var(--border-radius) 0 0;\n    grid-area: header !important;\n    width: calc(var(--card-width) - 2px);\n    max-width: calc(var(--card-width) - 2px);\n}\n\n:host .wrap ::slotted(header.subhead) {\n    background: var(--theme-base7);\n}\n\n:host .wrap ::slotted(header.sticky) {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 999999;\n}\n\n:host .wrap ::slotted(footer) {\n    grid-area: footer !important;\n    padding: 1rem var(--padding);\n    border-top: var(--border);\n    width: calc(var(--card-width) - 2px);\n    max-width: calc(var(--card-width) - 2px);\n}\n\n:host([has*=\"header\"][has*=\"footer\"]) {\n    grid-template-columns: 1rem auto 1rem;\n    grid-template-rows: 1fr auto 1fr;\n}\n\n:host stencil-route-link.wrap a {\n    text-decoration: none;\n}\n\n:host button.wrap:active,\n:host a.wrap:active,\n:host stencil-route-link.wrap:active {\n    background: var(--theme-base0);\n}\n\n:host([shadow=\"light\"]) {\n    -webkit-box-shadow: 0 .8rem 3rem -2rem var(--gray1);\n    box-shadow: 0 .8rem 3rem -2rem var(--gray1);\n}\n\n:host([shadow=\"heavy\"]) {\n    -webkit-box-shadow: 0 .8rem 3rem -1rem var(--gray1);\n    box-shadow: 0 .8rem 3rem -1rem var(--gray1);\n}\n\n:host([rounded=\"true\"]) {\n    border-radius: 1rem;\n}\n\n\n:host([flippable]) {\n    -webkit-perspective: 3000px;\n    perspective: 3000px;\n    background: transparent;\n}\n\n:host([flippable]) .wrap {\n    display: block;\n    /* transform-style: preserve-3d; */\n    background: var(--background);\n    -webkit-transition: all 0.5s var(--ease, ease-in-out) 0s, background-color 0s ease 0s;\n    transition: all 0.5s var(--ease, ease-in-out) 0s, background-color 0s ease 0s;\n}\n\n:host([flippable]) .wrap .front {\n    -webkit-transition: min-height 0.35s linear 0s, opacity 0.15s linear 0.3s !important;\n    transition: min-height 0.35s linear 0s, opacity 0.15s linear 0.3s !important;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    z-index: 1;\n    opacity: 1;\n    height: 100%;\n}\n\n:host([flippable]) .wrap .back * {\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n}\n\n:host([flippable]) .wrap .back {\n    -webkit-transition: min-height 0.35s linear 0s, opacity 0.15s linear 0.0s !important;\n    transition: min-height 0.35s linear 0s, opacity 0.15s linear 0.0s !important;\n    top: 0;\n    left: 0;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    z-index: 0;\n    -webkit-transform: rotateY(180deg);\n    transform: rotateY(180deg);\n    overflow-y: none;\n    pointer-events: none;\n    opacity: 0;\n}\n\n:host([flippable][flipped]) .wrap .front {\n    -webkit-transition: min-height 0.35s linear 0s, opacity 0.15s linear 0s !important;\n    transition: min-height 0.35s linear 0s, opacity 0.15s linear 0s !important;\n}\n\n:host([flippable][flipped]) .wrap .back {\n    -webkit-transition: min-height 0.35s linear 0s, opacity 0.15s linear 0.3s !important;\n    transition: min-height 0.35s linear 0s, opacity 0.15s linear 0.3s !important;\n}\n\n:host([flippable]) .wrap .flip-button {\n    position: absolute;\n    right: 0.5rem;\n    top: 0.5rem;\n    z-index: 1;\n    -webkit-transform: translateZ(1px);\n    transform: translateZ(1px)\n}\n\n:host([flippable][flipped]) {\n    --background: var(--flipped-background, white) !important;\n    --min-height: var(--flipped-min-height) !important;\n    z-index: 1;\n}\n\n:host([flippable][flipped]) .wrap {\n    -webkit-transform: rotateY(180deg);\n    transform: rotateY(180deg);\n}\n\n:host([flippable][flipped]) .wrap .flip-button {\n    -webkit-transform: translateZ(-1px);\n    transform: translateZ(-1px)\n}\n\n:host([flippable][flipped]) .wrap .front,\n:host([flippable][flipped]) .wrap .back {\n    min-height: var(--min-height);\n}\n\n:host([flippable][flipped]) .wrap .front {\n    pointer-events: none;\n    opacity: 0;\n}\n\n:host([flippable][flipped]) .wrap .back {\n    pointer-events: initial;\n    overflow-y: initial;\n    opacity: 1;\n}\n\n:host-context(.dark-mode) {\n    --border: 1px solid var(--gray8);\n    --background: var(--gray9);\n    --flipped-background: var(--gray9);\n}"; }
}

export { Card as stellar_card };
