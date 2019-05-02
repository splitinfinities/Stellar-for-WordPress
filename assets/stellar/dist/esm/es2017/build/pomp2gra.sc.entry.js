import { h } from '../stellar-core.core.js';

import './chunk-7646164d.js';
import { a as properties } from './chunk-340b8099.js';
import './chunk-9f751763.js';
import { c as ResizeObserver } from './chunk-a955a305.js';
import './chunk-5ce278cb.js';

class Card {
    constructor() {
        this.shadow = "medium";
        this.flippable = false;
        this.flipped = false;
        this.padding = "medium";
        this.tag = "div";
        this.href = "#";
        this.name = "";
        this.value = "#";
        this.flip_icon = "cog";
        this.rotationLimit = 0.75;
        this.transition = false;
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
        return (h(this.tag, Object.assign({}, childProps, { class: "stencil-route-link" !== this.tag ? "wrap" : "", anchorClass: "stencil-route-link" === this.tag ? "wrap" : "", onClick: (e) => { this.click(e); } }),
            this.flippable && [
                h("stellar-button", { tag: "button", ghost: true, class: "flip-button", onClick: (e) => { e.stopPropagation(); e.preventDefault(); this.flip_card(e); } },
                    h("stellar-asset", { name: this.flipped ? "close" : this.flip_icon, class: "ma0" })),
                h("div", { class: "front" },
                    h("slot", null)),
                h("div", { class: "back" },
                    h("slot", { name: "back" }))
            ],
            !this.flippable && h("slot", null)));
    }
    static get is() { return "stellar-card"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "element": {
            "elementRef": true
        },
        "flip_card": {
            "method": true
        },
        "flip_icon": {
            "type": String,
            "attr": "flip_icon"
        },
        "flippable": {
            "type": Boolean,
            "attr": "flippable",
            "reflectToAttr": true
        },
        "flipped": {
            "type": Boolean,
            "attr": "flipped",
            "reflectToAttr": true,
            "mutable": true
        },
        "for": {
            "type": String,
            "attr": "for"
        },
        "height": {
            "state": true
        },
        "href": {
            "type": String,
            "attr": "href"
        },
        "middleX": {
            "state": true
        },
        "middleY": {
            "state": true
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "padding": {
            "type": String,
            "attr": "padding",
            "reflectToAttr": true
        },
        "ro": {
            "state": true
        },
        "rotationLimit": {
            "state": true
        },
        "shadow": {
            "type": String,
            "attr": "shadow"
        },
        "tag": {
            "type": String,
            "attr": "tag"
        },
        "transition": {
            "type": Boolean,
            "attr": "transition",
            "reflectToAttr": true,
            "mutable": true
        },
        "type": {
            "type": String,
            "attr": "type"
        },
        "value": {
            "type": String,
            "attr": "value"
        },
        "width": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "flip",
            "method": "flip",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".sc-stellar-card-h, .sc-stellar-card-h   *.sc-stellar-card, .sc-stellar-card-h   .sc-stellar-card:after, .sc-stellar-card-h   .sc-stellar-card:before{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-stellar-card-h{-moz-appearance:none;appearance:none;-webkit-appearance:none!important;display:block;background:var(--background);border-radius:var(--border-radius);height:100%;--border:1px solid var(--gray1);--background:var(--white);--flipped-background:var(--white);--flipped-min-height:var(--flipped-min-height,20rem);--border-radius:var(--border-radius-sm);--padding:3rem;--min-height:10rem;--card-width:auto}[tag=a].sc-stellar-card-h{background:transparent}[padding=small].sc-stellar-card-h{--padding:1rem}[padding=medium].sc-stellar-card-h{--padding:2rem}[padding=large].sc-stellar-card-h{--padding:4rem}.sc-stellar-card-h   .wrap.sc-stellar-card{-moz-appearance:none;appearance:none;-webkit-appearance:none!important;display:block;border:var(--border);width:var(--card-width);height:100%;text-decoration:none;outline:none;display:grid;border-radius:var(--border-radius)}[flippable].sc-stellar-card-h   .wrap.sc-stellar-card   .back.sc-stellar-card, [flippable].sc-stellar-card-h   .wrap.sc-stellar-card   .front.sc-stellar-card, .sc-stellar-card-h   .wrap.sc-stellar-card{padding:0;grid-template-columns:var(--padding) 1fr var(--padding);grid-template-rows:auto var(--padding) 1fr var(--padding) auto;grid-template-areas:\"header header header\" \". . .\" \". section .\" \". . .\" \"footer footer footer\";min-height:var(--min-height)}[flippable].sc-stellar-card-h   .wrap.sc-stellar-card   .back.sc-stellar-card, [flippable].sc-stellar-card-h   .wrap.sc-stellar-card   .front.sc-stellar-card{height:auto;display:grid}.sc-stellar-card-h .wrap .sc-stellar-card-s > *, .sc-stellar-card-h .wrap .sc-stellar-card-s > section{grid-area:section;max-width:calc(var(--card-width) - (var(--padding) * 2))}.sc-stellar-card-h .wrap .sc-stellar-card-s > header{padding:1rem var(--padding);border-bottom:var(--border);border-radius:var(--border-radius) var(--border-radius) 0 0;grid-area:header!important;width:calc(var(--card-width) - 2px);max-width:calc(var(--card-width) - 2px)}.sc-stellar-card-h .wrap .sc-stellar-card-s > header.subhead{background:var(--theme-base7)}.sc-stellar-card-h .wrap .sc-stellar-card-s > header.sticky{position:-webkit-sticky;position:sticky;top:0;z-index:999999}.sc-stellar-card-h .wrap .sc-stellar-card-s > footer{grid-area:footer!important;padding:1rem var(--padding);border-top:var(--border);width:calc(var(--card-width) - 2px);max-width:calc(var(--card-width) - 2px)}[has*=header][has*=footer].sc-stellar-card-h{grid-template-columns:1rem auto 1rem;grid-template-rows:1fr auto 1fr}.sc-stellar-card-h   stencil-route-link.wrap.sc-stellar-card   a.sc-stellar-card{text-decoration:none}.sc-stellar-card-h   a.wrap.sc-stellar-card:active, .sc-stellar-card-h   button.wrap.sc-stellar-card:active, .sc-stellar-card-h   stencil-route-link.wrap.sc-stellar-card:active{background:var(--theme-base0)}[shadow=light].sc-stellar-card-h{-webkit-box-shadow:0 .8rem 3rem -2rem var(--gray1);box-shadow:0 .8rem 3rem -2rem var(--gray1)}[shadow=heavy].sc-stellar-card-h{-webkit-box-shadow:0 .8rem 3rem -1rem var(--gray1);box-shadow:0 .8rem 3rem -1rem var(--gray1)}[rounded=true].sc-stellar-card-h{border-radius:1rem}[flippable].sc-stellar-card-h{-webkit-perspective:3000px;perspective:3000px;background:transparent}[flippable].sc-stellar-card-h   .wrap.sc-stellar-card{display:block;background:var(--background);-webkit-transition:all .5s var(--ease,ease-in-out) 0s,background-color 0s ease 0s;transition:all .5s var(--ease,ease-in-out) 0s,background-color 0s ease 0s}[flippable].sc-stellar-card-h   .wrap.sc-stellar-card   .front.sc-stellar-card{-webkit-transition:min-height .35s linear 0s,opacity .15s linear .3s!important;transition:min-height .35s linear 0s,opacity .15s linear .3s!important;z-index:1;opacity:1;height:100%}[flippable].sc-stellar-card-h   .wrap.sc-stellar-card   .back.sc-stellar-card   *.sc-stellar-card, [flippable].sc-stellar-card-h   .wrap.sc-stellar-card   .front.sc-stellar-card{-webkit-backface-visibility:hidden;backface-visibility:hidden}[flippable].sc-stellar-card-h   .wrap.sc-stellar-card   .back.sc-stellar-card{top:0;left:0;position:absolute;height:100%;width:100%;z-index:0;-webkit-transform:rotateY(180deg);transform:rotateY(180deg);overflow-y:none;pointer-events:none;opacity:0}[flippable].sc-stellar-card-h   .wrap.sc-stellar-card   .back.sc-stellar-card, [flippable][flipped].sc-stellar-card-h   .wrap.sc-stellar-card   .front.sc-stellar-card{-webkit-transition:min-height .35s linear 0s,opacity .15s linear 0s!important;transition:min-height .35s linear 0s,opacity .15s linear 0s!important}[flippable][flipped].sc-stellar-card-h   .wrap.sc-stellar-card   .back.sc-stellar-card{-webkit-transition:min-height .35s linear 0s,opacity .15s linear .3s!important;transition:min-height .35s linear 0s,opacity .15s linear .3s!important}[flippable].sc-stellar-card-h   .wrap.sc-stellar-card   .flip-button.sc-stellar-card{position:absolute;right:.5rem;top:.5rem;z-index:1;-webkit-transform:translateZ(1px);transform:translateZ(1px)}[flippable][flipped].sc-stellar-card-h{--background:var(--flipped-background,#fff)!important;--min-height:var(--flipped-min-height)!important;z-index:1}[flippable][flipped].sc-stellar-card-h   .wrap.sc-stellar-card{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[flippable][flipped].sc-stellar-card-h   .wrap.sc-stellar-card   .flip-button.sc-stellar-card{-webkit-transform:translateZ(-1px);transform:translateZ(-1px)}[flippable][flipped].sc-stellar-card-h   .wrap.sc-stellar-card   .back.sc-stellar-card, [flippable][flipped].sc-stellar-card-h   .wrap.sc-stellar-card   .front.sc-stellar-card{min-height:var(--min-height)}[flippable][flipped].sc-stellar-card-h   .wrap.sc-stellar-card   .front.sc-stellar-card{pointer-events:none;opacity:0}[flippable][flipped].sc-stellar-card-h   .wrap.sc-stellar-card   .back.sc-stellar-card{pointer-events:auto;overflow-y:initial;opacity:1}.dark-mode.sc-stellar-card-h, .dark-mode   .sc-stellar-card-h{--border:1px solid var(--gray8);--background:var(--gray9);--flipped-background:var(--gray9)}"; }
}

export { Card as StellarCard };
