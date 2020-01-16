import { r as registerInstance, h, g as getElement } from './index-cc4604b3.js';

const StarscapeCss = "stellar-starscape {\n  contain: content;\n  background: linear-gradient(50deg, var(--theme-base7), var(--theme-complement7), var(--theme-base7), var(--theme-complement7));\n  background-size: 400% 400%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: -1;\n  overflow: hidden;\n}\n\nstellar-starscape .stars {\n  position: absolute;\n  height: 200vh;\n  width: 200vw;\n  top: -10vh;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1;\n  opacity: 0.75;\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAgMAAADQNkYNAAAADFBMVEUAAAD///////////84wDuoAAAAA3RSTlMACzOmUnwDAAABMklEQVR4Ae1ZB05FMQyrLIUNvZpZ97/COwLaCBN2Kur+Wqt7OqNNO5oiNC9laPU4KrtMgKjvsjD4bvvY17EqpaXwSOoxu0jyNxwXFPUOlZdKdJ1lRtTfzATgT9iLZgw3y9u/PwLKthMDb5+aT5UzLIQ2kgtioxwiSheaV4eNVDLhmxQN30uEpx7rFV02DMAf+WTYxtJ8N/sJyUJXIkcf5F08fyGV27Vllkoaw13V1E8bkuVbnsNSzzGVWEzp6RcchDmprRCf7xpDzp3CHZyY4V3fF6cwIaRIOOZt0+OV0CgjVh/2p8RvBu+wZNhwIzIuhLIOBq4RQ3mTUxzzuv//6KPEJ+oAzlaU4l0Y7OS7N4MJV18/lL9Xv39hKccetI2KqqbWKnr+Kri+Z66+vVvMqvRfAGkGHx/jJEqXAAAAAElFTkSuQmCC') 50% 50% / 100px 100px;\n}\n\nstellar-starscape stellar-parallax-section:nth-of-type(1) .stars {\n  opacity: 0.25;\n  left: 17px;\n}\n\nstellar-starscape stellar-parallax-section:nth-of-type(2) .stars {\n  opacity: 0.45;\n  left: 24px;\n}\n";

const Starscape = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("stellar-parallax", { horizontal: true }, h("stellar-parallax-section", { speed: 5 }, h("div", { class: "stars" })), h("stellar-parallax-section", { speed: -10 }, h("div", { class: "stars" })), h("stellar-parallax-section", { speed: -4 }, h("div", { class: "stars" }))));
    }
    get element() { return getElement(this); }
    static get style() { return StarscapeCss; }
};

export { Starscape as stellar_starscape };
