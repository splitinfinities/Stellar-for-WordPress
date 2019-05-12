import { h } from '../stellar-core.core.js';

import './chunk-7646164d.js';
import { a as properties } from './chunk-340b8099.js';
import { a as blurringEase } from './chunk-43ad3764.js';
import './chunk-5ce278cb.js';

class Accordion {
    constructor() {
        this.open = false;
        this.tight = false;
        this.name = "accordion";
        this.label = "More Details";
        this.blur = 0;
        this.ease = blurringEase({
            end: 10,
            start: -1,
            duration: 250,
            tick: (args) => {
                this.blur = args.value;
            },
            complete: () => {
                this.blur = 0;
                this.ease.stop();
            },
        });
        this.els = [];
    }
    componentWillLoad() {
        var callback = (mutationsList) => {
            for (var mutation of mutationsList) {
                if (mutation.type == 'childList') {
                    this.refresh();
                }
            }
        };
        this.observer = new MutationObserver(callback);
    }
    componentDidLoad() {
        this.expander = this.element.shadowRoot.querySelector(".expander");
        this.refresh();
        this.attachObserver();
        this.els = Array.from(this.element.querySelectorAll("*:not([slot='label'])"));
        this.updateTabIndex();
    }
    async refresh() {
        properties.set({
            "--accordion-height": `${this.expander.scrollHeight}px`
        }, this.element);
    }
    attachObserver() {
        this.observer.observe(this.element, { childList: true, subtree: true });
    }
    componentWillUnload() {
        this.observer.disconnect();
    }
    currentClasses() {
        return `expander ${this.openClass()}`;
    }
    openClass() {
        return (this.open) ? "open" : "";
    }
    updateTabIndex() {
        this.els.forEach((element) => {
            element.tabIndex = !this.open ? -1 : 0;
        });
    }
    handleClick() {
        this.open = !this.open;
        this.ease.start();
        this.updateTabIndex();
    }
    render() {
        return (h("div", { class: "wrap" },
            h("div", { class: "button-wrap", title: "Selecting this opens the content of this accordion", onClick: () => this.handleClick() },
                h("slot", { name: "label" },
                    h("stellar-button", { id: "button", tag: "button", ghost: true, label: this.label }, this.label)),
                h("stellar-asset", { class: "chevron", name: "arrow-down" })),
            h("stellar-blur", { vertical: this.blur },
                h("div", { class: this.currentClasses(), tabIndex: !this.open ? -1 : 0 },
                    h("slot", null)))));
    }
    static get is() { return "stellar-accordion"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "blur": {
            "state": true
        },
        "ease": {
            "state": true
        },
        "element": {
            "elementRef": true
        },
        "els": {
            "state": true
        },
        "expander": {
            "state": true
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "observer": {
            "state": true
        },
        "open": {
            "type": Boolean,
            "attr": "open",
            "reflectToAttr": true,
            "mutable": true
        },
        "refresh": {
            "method": true
        },
        "tight": {
            "type": Boolean,
            "attr": "tight",
            "reflectToAttr": true
        }
    }; }
    static get style() { return ".sc-stellar-accordion-h, .sc-stellar-accordion-h   *.sc-stellar-accordion, .sc-stellar-accordion-h   .sc-stellar-accordion:after, .sc-stellar-accordion-h   .sc-stellar-accordion:before{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-stellar-accordion-h{display:block;position:relative;--accordion-height:200vh}.sc-stellar-accordion-h, .sc-stellar-accordion-h   .expander.sc-stellar-accordion{width:100%;overflow:hidden}.sc-stellar-accordion-h   .expander.sc-stellar-accordion{-webkit-transition:all .35s ease-out .1s,opacity .25s ease-out 0s;transition:all .35s ease-out .1s,opacity .25s ease-out 0s;opacity:0;padding:0;max-height:50vh;height:0;-webkit-transform:translateY(-60px);transform:translateY(-60px)}.sc-stellar-accordion-h   .expander.open.sc-stellar-accordion{-webkit-transition:all .35s ease-in-out 0s,opacity .175s ease-in-out .175s,overflow 0s ease-in-out .2s;transition:all .35s ease-in-out 0s,opacity .175s ease-in-out .175s,overflow 0s ease-in-out .2s;opacity:1;height:calc(var(--accordion-height) + 6rem);overflow:auto;-webkit-transform:translateY(0);transform:translateY(0)}.sc-stellar-accordion-h   .expander.sc-stellar-accordion   stellar-item.sc-stellar-accordion{padding-left:1rem}.sc-stellar-accordion-h   .expander.sc-stellar-accordion   stellar-item.sc-stellar-accordion:last-of-type{margin-bottom:.5rem}.sc-stellar-accordion-h[tight] .expander .sc-stellar-accordion-s > stellar-item{padding:0 1.5rem;padding:0 .75rem}.sc-stellar-accordion-h   .wrap.sc-stellar-accordion{-webkit-transform:translateZ(0);transform:translateZ(0)}.sc-stellar-accordion-h   .wrap.sc-stellar-accordion   .button-wrap.sc-stellar-accordion{position:relative;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;z-index:9;min-height:3rem;padding:1rem 0;color:var(--theme-base9);background:-webkit-gradient(linear,left top,left bottom,from(var(--white)),to(transparent));background:linear-gradient(var(--white),transparent)}.sc-stellar-accordion-h   .wrap.sc-stellar-accordion   .button-wrap.sc-stellar-accordion   stellar-item.sc-stellar-accordion   button.button.sc-stellar-accordion{padding:0}.sc-stellar-accordion-h   .chevron.sc-stellar-accordion{position:absolute;right:1rem;color:var(--gray4);margin-left:auto;-webkit-transition:all .35s ease-in-out 0s;transition:all .35s ease-in-out 0s}[open].sc-stellar-accordion-h   .chevron.sc-stellar-accordion{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sc-stellar-accordion-h   .wrap.sc-stellar-accordion   .button-wrap.sc-stellar-accordion   stellar-button.sc-stellar-accordion{--color:var(--gray9)}.sc-stellar-accordion-h .sc-stellar-accordion-s > stellar-item[slot=label]{padding-right:2rem}.dark-mode.sc-stellar-accordion-h -no-combinator.sc-stellar-accordion-h   .wrap.sc-stellar-accordion   .button-wrap.sc-stellar-accordion, .dark-mode   .sc-stellar-accordion-h -no-combinator.sc-stellar-accordion-h   .wrap.sc-stellar-accordion   .button-wrap.sc-stellar-accordion{background:-webkit-gradient(linear,left top,left bottom,from(var(--black)),to(transparent));background:linear-gradient(var(--black),transparent);color:var(--theme-base5)}"; }
}

export { Accordion as StellarAccordion };