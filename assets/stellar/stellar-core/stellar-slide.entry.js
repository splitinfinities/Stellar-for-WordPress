import { r as registerInstance, d as createEvent, h, H as Host, g as getElement } from './index-cc4604b3.js';

const SlideCss = "stellar-slide {\n  display: block;\n  width: var(--width, 100%);\n  height: 100%;\n  contain: content;\n}\n\nstellar-slide stellar-image,\nstellar-slide stellar-video {\n  height: 100%;\n  --object-fit: cover;\n  --figure-height: 100%;\n}\n\n.slide-zoom {\n  text-align: center;\n  display: block;\n  width: 100%;\n}\n\n.swiper-slide {\n  text-align: center;\n  box-sizing: border-box;\n  position: relative;\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  font-size: 18px;\n}\n\n.swiper-slide img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 100%;\n}\n";

const Slide = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.width = "auto";
        this.swiper = false;
        this.visible = false;
        this.switched = createEvent(this, "switched", 7);
    }
    componentWillLoad() {
        if (this.el.closest('stellar-slides, stellar-simple-slides')) {
            this.swiper = (this.el.closest('stellar-slides, stellar-simple-slides').nodeName === "STELLAR-SLIDES");
        }
    }
    onVisible() {
        this.switched.emit({ slideId: this.slideId, visible: this.visible });
    }
    in() {
        this.visible = true;
    }
    out() {
        this.visible = false;
    }
    render() {
        return h(Host, { style: { '--width': this.width }, class: {
                'slide-zoom': this.swiper,
                'swiper-slide': this.swiper,
            } }, h("slot", null), h("stellar-intersection", { element: this.el, multiple: true, in: this.in.bind(this), out: this.out.bind(this) }));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "visible": ["onVisible"]
    }; }
    static get style() { return SlideCss; }
};

export { Slide as stellar_slide };
