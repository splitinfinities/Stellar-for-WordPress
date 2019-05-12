import { properties, ResizeObserver } from '../../../utils';
export class Card {
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
    async click() {
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
    static get style() { return "/**style-placeholder:stellar-card:**/"; }
}
