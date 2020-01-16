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

const AccordionCss = ":host,:host *,:host *:before,:host *:after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{contain:content;display:block;position:relative;width:100%;overflow:hidden;--accordion-height:200vh;--padding-underneath:6rem}:host .expander{-webkit-transition:all 0.35s ease-out 0.1s, opacity 0.25s ease-out 0s;transition:all 0.35s ease-out 0.1s, opacity 0.25s ease-out 0s;opacity:0;padding:0;width:100%;max-height:50vh;height:0;overflow:hidden;-webkit-transform:translateY(-60px);transform:translateY(-60px)}:host .expander.open{-webkit-transition:all 0.35s ease-in-out 0s, opacity 0.175s ease-in-out 0.175s, overflow 0s ease-in-out 0.2s;transition:all 0.35s ease-in-out 0s, opacity 0.175s ease-in-out 0.175s, overflow 0s ease-in-out 0.2s;opacity:1;height:calc(var(--accordion-height) + var(--padding-underneath));overflow:auto;-webkit-transform:translateY(0px);transform:translateY(0px)}:host .expander stellar-item{padding-left:1rem}:host .expander stellar-item:last-of-type{margin-bottom:.5rem}:host([tight]){--padding-underneath:1rem}:host([tight]) .expander ::slotted(stellar-item){padding:0 1.5rem}:host([tight]) .expander ::slotted(stellar-item){padding:0 0.75rem}:host .wrap{-webkit-transform:translateZ(0);transform:translateZ(0)}:host .wrap .button-wrap{position:relative;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;z-index:9;min-height:3rem;padding:1rem 0;color:var(--theme-base9)}:host .wrap .button-wrap stellar-item button.button{padding:0}:host .chevron{position:absolute;right:1rem;color:var(--gray4);margin-left:auto;-webkit-transition:all 350ms ease-in-out 0s;transition:all 350ms ease-in-out 0s}:host([open]) .chevron{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host .wrap .button-wrap stellar-button{--color:var(--gray9)}:host ::slotted(stellar-item[slot=\"label\"]){padding-right:2rem}:host([dark]) ::slotted(stellar-item),:host([dark]) ::slotted(stellar-item[slot=\"label\"]){color:var(--theme-base5)}";

const Accordion = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.open = false;
        this.tight = false;
        this.name = "accordion";
        this.label = "More Details";
        this.dark = false;
        this.blur = 0;
        this.ease = index$1$1.blurringEase({
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
        if (window.MutationObserver) {
            var callback = (mutationsList) => {
                for (var mutation of mutationsList) {
                    if (mutation.type == 'childList') {
                        this.refresh();
                    }
                }
            };
            this.observer = new MutationObserver(callback);
        }
    }
    componentDidLoad() {
        this.expander = this.element.shadowRoot.querySelector(".expander");
        this.refresh();
        this.attachObserver();
        this.els = Array.from(this.element.querySelectorAll("*:not([slot='label'])"));
        this.updateTabIndex();
    }
    async refresh() {
        cssCustomProperties_min.properties.set({
            "--accordion-height": `${this.expander.scrollHeight}px`
        }, this.element);
    }
    attachObserver() {
        if (this.observer) {
            // Start observing the target node for configured mutations
            this.observer.observe(this.element, { childList: true, subtree: true });
        }
    }
    componentWillUnload() {
        if (this.observer) {
            this.observer.disconnect();
        }
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
        return (index.h("div", { class: "wrap" }, index.h("div", { class: "button-wrap", title: "Selecting this opens the content of this accordion", onClick: () => this.handleClick() }, index.h("slot", { name: "label" }, index.h("stellar-button", { id: "button", tag: "button", ghost: true, label: this.label }, this.label)), index.h("ion-icon", { class: "chevron", name: "arrow-down" })), index.h("stellar-blur", { vertical: this.blur }, index.h("div", { class: this.currentClasses(), tabIndex: !this.open ? -1 : 0 }, index.h("slot", null)))));
    }
    get element() { return index.getElement(this); }
    static get style() { return AccordionCss; }
};
theme$1.Tunnel.injectProps(Accordion, ['dark']);

const MessageCss = ":host{display:block;position:relative;padding:0 20px;-webkit-transition:all 350ms var(--ease) 0s;transition:all 350ms var(--ease) 0s;width:100%;height:60px;overflow:hidden;contain:content;background-color:var(--theme-base4, var(--gray5))}:host([striped])::after{content:\"\";position:absolute;width:120%;top:0;left:-10%;right:0;bottom:0;z-index:0;background:repeating-linear-gradient(45deg, var(--theme-base0), var(--theme-base0) 2rem, var(--theme-base1) 0, var(--theme-base1) 4rem);mix-blend-mode:multiply;-webkit-animation:moveStripes 10s linear both infinite;animation:moveStripes 10s linear both infinite}:host([visible=\"false\"]){height:0;overflow:hidden}:host([visible=\"false\"]) *{opacity:0}:host .wrap{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin:0 auto;position:relative;width:100%;max-width:1200px;height:100%;z-index:1;overflow:auto}:host([size=\"full\"]) .wrap{min-width:30rem;max-width:100%}:host a{color:white}:host a:hover,:host a:active{color:var(--theme-base1)}:host p{color:var(--theme-base9)}:host .wrap ion-icon{font-size:2rem;color:var(--theme-base9)}:host button{margin-right:0;margin-left:auto;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:white;background:transparent;border:none;cursor:pointer;width:3rem;height:3rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;outline:0}:host button[icon] ion-icon{margin-right:0;margin-left:1rem;color:black;background:transparent;border:none}:host([dark]){background-color:var(--theme-base7, var(--gray7))}:host([dark][striped])::after{background:repeating-linear-gradient(45deg, var(--theme-base7), var(--theme-base7) 2rem, var(--theme-base8) 0, var(--theme-base8) 4rem)}:host([dark]) .wrap ion-icon{color:var(--theme-base1)}";

const Message = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closable = true;
        this.remember = true;
        this.name = "stellar";
        this.shown = true;
        this.striped = false;
        this.dark = false;
        this.theme = "gray";
    }
    componentWillLoad() {
        if (this.remember) {
            const string = this.element.innerHTML;
            if (window && window.btoa) {
                this.name = this.name + "_" + btoa(unescape(encodeURIComponent(string)));
            }
            if (localStorage.getItem(this.name)) {
                this.shown = !(localStorage.getItem(this.name) === "hidden");
            }
        }
        switch (this.type) {
            case "alert":
                this.theme = "yellow";
                break;
            case "error":
                this.theme = "red";
                break;
            case "info":
                this.theme = "cyan";
                break;
            case "success":
                this.theme = "green";
                break;
        }
    }
    handleClose() {
        this.shown = false;
        if (this.remember) {
            localStorage.setItem(this.name, "hidden");
        }
    }
    render() {
        return index.h(index.Host, { class: `theme-${this.theme} ${this.shown ? "db" : "dn"}` }, index.h("div", { class: "wrap" }, index.h("slot", null), this.closable && index.h("button", { "aria-label": "Close", onClick: () => { this.handleClose(); } }, index.h("ion-icon", { name: "close" }))));
    }
    get element() { return index.getElement(this); }
    static get style() { return MessageCss; }
};
theme$1.Tunnel.injectProps(Message, ['dark']);

const StarscapeCss = "stellar-starscape{contain:content;background:linear-gradient(50deg, var(--theme-base7), var(--theme-complement7), var(--theme-base7), var(--theme-complement7));background-size:400% 400%;position:absolute;top:0;left:0;bottom:0;right:0;z-index:-1;overflow:hidden}stellar-starscape .stars{position:absolute;height:200vh;width:200vw;top:-10vh;left:0;bottom:0;right:0;z-index:1;opacity:0.75;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAgMAAADQNkYNAAAADFBMVEUAAAD///////////84wDuoAAAAA3RSTlMACzOmUnwDAAABMklEQVR4Ae1ZB05FMQyrLIUNvZpZ97/COwLaCBN2Kur+Wqt7OqNNO5oiNC9laPU4KrtMgKjvsjD4bvvY17EqpaXwSOoxu0jyNxwXFPUOlZdKdJ1lRtTfzATgT9iLZgw3y9u/PwLKthMDb5+aT5UzLIQ2kgtioxwiSheaV4eNVDLhmxQN30uEpx7rFV02DMAf+WTYxtJ8N/sJyUJXIkcf5F08fyGV27Vllkoaw13V1E8bkuVbnsNSzzGVWEzp6RcchDmprRCf7xpDzp3CHZyY4V3fF6cwIaRIOOZt0+OV0CgjVh/2p8RvBu+wZNhwIzIuhLIOBq4RQ3mTUxzzuv//6KPEJ+oAzlaU4l0Y7OS7N4MJV18/lL9Xv39hKccetI2KqqbWKnr+Kri+Z66+vVvMqvRfAGkGHx/jJEqXAAAAAElFTkSuQmCC') 50% 50% / 100px 100px}stellar-starscape stellar-parallax-section:nth-of-type(1) .stars{opacity:0.25;left:17px}stellar-starscape stellar-parallax-section:nth-of-type(2) .stars{opacity:0.45;left:24px}";

const Starscape = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("stellar-parallax", { horizontal: true }, index.h("stellar-parallax-section", { speed: 5 }, index.h("div", { class: "stars" })), index.h("stellar-parallax-section", { speed: -10 }, index.h("div", { class: "stars" })), index.h("stellar-parallax-section", { speed: -4 }, index.h("div", { class: "stars" }))));
    }
    get element() { return index.getElement(this); }
    static get style() { return StarscapeCss; }
};

exports.stellar_accordion = Accordion;
exports.stellar_message = Message;
exports.stellar_starscape = Starscape;
