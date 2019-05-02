import { h } from '../stellar-core.core.js';

import './chunk-7646164d.js';
import './chunk-340b8099.js';
import './chunk-9f751763.js';
import { f as focusWithin, a as blurringEase } from './chunk-a955a305.js';
import './chunk-5ce278cb.js';

focusWithin(document);
class Dropdown {
    constructor() {
        this.position = "center";
        this.icon = false;
        this.label = "Dropdown";
        this.open = false;
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
        this.blur = 0;
    }
    componentDidLoad() {
        focusWithin(document);
    }
    observeOpen() {
        this.ease.start();
    }
    onToggle() {
        this.open = !this.open;
    }
    render() {
        return (h("div", { "aria-label": this.label, class: "dropdown", title: this.label },
            h("div", { class: "toggle" },
                h("slot", { name: "handle" }),
                !this.icon && h("stellar-asset", { name: "arrow-down", class: "caret" })),
            h("stellar-blur", { vertical: this.blur },
                h("div", { class: "list-wrap" },
                    h("ul", { class: "list" },
                        h("slot", null),
                        h("div", { class: "footer" },
                            h("slot", { name: "footer" })))))));
    }
    static get is() { return "stellar-dropdown"; }
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
        "icon": {
            "type": Boolean,
            "attr": "icon"
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "open": {
            "type": Boolean,
            "attr": "open",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["observeOpen"]
        },
        "position": {
            "type": String,
            "attr": "position",
            "reflectToAttr": true,
            "mutable": true
        },
        "timeout": {
            "state": true
        }
    }; }
    static get style() { return ".sc-stellar-dropdown-h, .sc-stellar-dropdown-h   *.sc-stellar-dropdown, .sc-stellar-dropdown-h   .sc-stellar-dropdown:after, .sc-stellar-dropdown-h   .sc-stellar-dropdown:before{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-stellar-dropdown-h{--dropdown-color:var(--theme-base7);--dropdown-hover-color:var(--theme-base8);--dropdown-width:20rem;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;outline:0;height:100%;color:var(--dropdown-color);-webkit-transition:z-index 0ms linear .2s;transition:z-index 0ms linear .2s}.sc-stellar-dropdown-h   .list-wrap.sc-stellar-dropdown, .sc-stellar-dropdown-h   stellar-blur.sc-stellar-dropdown{width:var(--dropdown-width)}.sc-stellar-dropdown-h   .list-wrap.sc-stellar-dropdown{position:absolute;top:calc(100% - .5rem);right:50%;left:50%;-webkit-transition:all .11s var(--ease) .25s;transition:all .11s var(--ease) .25s;z-index:10;height:auto;display:initial;-webkit-clip-path:polygon(0 0,100% 0,100% 0,0 0);clip-path:polygon(0 0,100% 0,100% 0,0 0)}.sc-stellar-dropdown-h   .caret.sc-stellar-dropdown{color:var(--dropdown-color);margin-left:1.5rem;-webkit-transition:all .21s var(--ease);transition:all .21s var(--ease)}.sc-stellar-dropdown-h:focus-within   .caret.sc-stellar-dropdown, .sc-stellar-dropdown-h:hover   .caret.sc-stellar-dropdown{-webkit-transform:scale(1) rotate(180deg);transform:scale(1) rotate(180deg);color:var(--dropdown-hover-color)}.sc-stellar-dropdown-h:active, .sc-stellar-dropdown-h:focus-within, .sc-stellar-dropdown-h:hover{z-index:6;color:var(--dropdown-hover-color)}.sc-stellar-dropdown-h:active   .toggle.sc-stellar-dropdown:after, .sc-stellar-dropdown-h:focus-within   .toggle.sc-stellar-dropdown:after, .sc-stellar-dropdown-h:hover   .toggle.sc-stellar-dropdown:after{margin-top:-2px;background:var(--dropdown-hover-color);height:2px}.toggle.sc-stellar-dropdown-h:active, .toggle.sc-stellar-dropdown-h:hover{z-index:6;color:var(--dropdown-hover-color)}.toggle.sc-stellar-dropdown-h:active:after, .toggle.sc-stellar-dropdown-h:hover:after{margin-top:-2px;background:var(--dropdown-hover-color);height:2px}.sc-stellar-dropdown-h:active   .list-wrap.sc-stellar-dropdown, .sc-stellar-dropdown-h:focus-within   .list-wrap.sc-stellar-dropdown, .sc-stellar-dropdown-h:hover   .list-wrap.sc-stellar-dropdown{-webkit-clip-path:polygon(0 0,100% 0,100% 100%,0 100%);clip-path:polygon(0 0,100% 0,100% 100%,0 100%)}.sc-stellar-dropdown-h   .dropdown-placeholder.sc-stellar-dropdown{margin:0;width:3rem;height:3rem}.sc-stellar-dropdown-h   .toggle.sc-stellar-dropdown{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;min-height:3rem}.sc-stellar-dropdown-h   stellar-asset[slot=handle].sc-stellar-dropdown{color:var(--dropdown-color)}.sc-stellar-dropdown-h:focus-within   stellar-asset[slot=handle].sc-stellar-dropdown, [focus-within].sc-stellar-dropdown-h   stellar-asset[slot=handle].sc-stellar-dropdown, .sc-stellar-dropdown-h   stellar-asset[slot=handle].sc-stellar-dropdown:active, .sc-stellar-dropdown-h   stellar-asset[slot=handle].sc-stellar-dropdown:hover{color:var(--dropdown-color)}.sc-stellar-dropdown-h   .toggle.sc-stellar-dropdown   span.sc-stellar-dropdown{color:inherit}.sc-stellar-dropdown-h   .toggle.sc-stellar-dropdown   .hidden.sc-stellar-dropdown{display:inline-block!important}.sc-stellar-dropdown-h   .list.sc-stellar-dropdown{margin-top:0;margin-left:0;-webkit-transition:all .11s var(--ease) .25s;transition:all .11s var(--ease) .25s;-webkit-box-shadow:0 0 2px 0 hsla(0,0%,50.2%,.35);box-shadow:0 0 2px 0 hsla(0,0%,50.2%,.35);background:#fff;list-style-type:none;padding:0}.sc-stellar-dropdown-h .list .sc-stellar-dropdown-s > stellar-item{--item-size:3.25rem}.sc-stellar-dropdown-h   .list.sc-stellar-dropdown   .loader.sc-stellar-dropdown{cursor:wait;display:none}.sc-stellar-dropdown-h   .list.sc-stellar-dropdown   .separator.sc-stellar-dropdown{position:relative}.sc-stellar-dropdown-h   .list.sc-stellar-dropdown   .separator.sc-stellar-dropdown:after{content:\"\";display:block;position:absolute;top:calc(50% - .5px);background:var(--gray5);width:100%;height:.1rem}.sc-stellar-dropdown-h   .icon.sc-stellar-dropdown{margin-right:1em}.sc-stellar-dropdown-h   .icon.sc-stellar-dropdown, .sc-stellar-dropdown-h   .thumb.sc-stellar-dropdown{-ms-flex:0 0 2.25em;flex:0 0 2.25em;-ms-flex-order:-1;order:-1;-webkit-transition:all .05s var(--ease) 0s;transition:all .05s var(--ease) 0s}.sc-stellar-dropdown-h   .thumb.sc-stellar-dropdown{margin-right:1rem;width:2.25em;height:2.25em}.sc-stellar-dropdown-h   .notification.sc-stellar-dropdown{display:inline-block;margin:0 0 0 .8rem;border-radius:50%;background:var(--yellow5);width:.8rem;height:.8rem}.sc-stellar-dropdown-h .sc-stellar-dropdown-s > stellar-item{border:0;overflow:hidden;color:var(--gray9);font-size:1rem}.sc-stellar-dropdown-h   .footer.sc-stellar-dropdown{border-top:1px solid var(--theme-base1);margin-top:.5rem}.sc-stellar-dropdown-h .footer .sc-stellar-dropdown-s > *{background:transparent!important}.sc-stellar-dropdown-h   .footer.sc-stellar-dropdown:empty{display:none}[position=left].sc-stellar-dropdown-h   .list-wrap.sc-stellar-dropdown{left:0;right:auto}[position=left][icon].sc-stellar-dropdown-h   .list-wrap.sc-stellar-dropdown{left:var(--dropdown-offset,-3rem)}[position=left].sc-stellar-dropdown-h   .list.sc-stellar-dropdown:after, [position=left].sc-stellar-dropdown-h   .list.sc-stellar-dropdown:before{right:0;left:4rem}[position=right].sc-stellar-dropdown-h   .list-wrap.sc-stellar-dropdown{left:auto;right:0}[position=right][icon].sc-stellar-dropdown-h   .list-wrap.sc-stellar-dropdown{right:var(--dropdown-offset,3rem)}[position=right].sc-stellar-dropdown-h   .list.sc-stellar-dropdown:after, [position=right].sc-stellar-dropdown-h   .list.sc-stellar-dropdown:before{right:3rem;left:auto}.dark-mode.sc-stellar-dropdown-h -no-combinator.sc-stellar-dropdown-h   .list.sc-stellar-dropdown, .dark-mode   .sc-stellar-dropdown-h -no-combinator.sc-stellar-dropdown-h   .list.sc-stellar-dropdown{background:var(--gray9)}.sc-stellar-dropdown-h.dark-mode.sc-stellar-dropdown-h .sc-stellar-dropdown-s > stellar-item, .dark-mode .sc-stellar-dropdown-h.sc-stellar-dropdown-h .sc-stellar-dropdown-s > stellar-item{color:var(--gray0)}.dark-mode.sc-stellar-dropdown-h -no-combinator.sc-stellar-dropdown-h   .footer.sc-stellar-dropdown, .dark-mode   .sc-stellar-dropdown-h -no-combinator.sc-stellar-dropdown-h   .footer.sc-stellar-dropdown{border-top-color:var(--black)}"; }
}

export { Dropdown as StellarDropdown };
