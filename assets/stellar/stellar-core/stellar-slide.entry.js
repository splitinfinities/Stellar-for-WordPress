import { c as registerInstance, d as h, g as Host } from './stellar-core-d63b686e.js';

class Slide {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h(Host, { class: {
                'slide-zoom': true,
                'swiper-slide': true
            } }, h("slot", null));
    }
    static get style() { return "stellar-slide {\n  display: block;\n\n  width: 100%;\n  height: 100%;\n}\n\n.slide-zoom {\n  text-align: center;\n\n  display: block;\n\n  width: 100%;\n}\n\n.swiper-slide {\n  text-align: center;\n\n  -webkit-box-sizing: border-box;\n\n  box-sizing: border-box;\n  position: relative;\n\n  display: -ms-flexbox;\n\n  display: flex;\n\n  -ms-flex-negative: 0;\n\n  flex-shrink: 0;\n\n  -ms-flex-align: center;\n\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n\n  width: 100%;\n  height: 100%;\n\n  font-size: 18px;\n}\n\n.swiper-slide img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 100%;\n}"; }
}

export { Slide as stellar_slide };
