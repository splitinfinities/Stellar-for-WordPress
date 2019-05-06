import { c as registerInstance, d as h, f as getElement } from './stellar-core-3af17cd6.js';

class Starscape {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("stellar-parallax", null, h("stellar-parallax-section", { layer: 2, speed: -5 }, h("div", { class: "stars" })), h("stellar-parallax-section", { layer: 1, speed: -3 }, h("div", { class: "stars" }))));
    }
    get element() { return getElement(this); }
    static get style() { return "stellar-starscape{background:linear-gradient(50deg,var(--theme-base7),var(--theme-complement7),var(--theme-base7),var(--theme-complement7));background-size:400% 400%;position:absolute;top:0;left:0;bottom:0;right:0;z-index:-1;overflow:hidden}stellar-starscape .stars{position:absolute;height:200vh;width:200vw;top:-10vh;left:0;bottom:0;right:0;z-index:1;opacity:.75;background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAgMAAADQNkYNAAAADFBMVEUAAAD///////////84wDuoAAAAA3RSTlMACzOmUnwDAAABMklEQVR4Ae1ZB05FMQyrLIUNvZpZ97/COwLaCBN2Kur+Wqt7OqNNO5oiNC9laPU4KrtMgKjvsjD4bvvY17EqpaXwSOoxu0jyNxwXFPUOlZdKdJ1lRtTfzATgT9iLZgw3y9u/PwLKthMDb5+aT5UzLIQ2kgtioxwiSheaV4eNVDLhmxQN30uEpx7rFV02DMAf+WTYxtJ8N/sJyUJXIkcf5F08fyGV27Vllkoaw13V1E8bkuVbnsNSzzGVWEzp6RcchDmprRCf7xpDzp3CHZyY4V3fF6cwIaRIOOZt0+OV0CgjVh/2p8RvBu+wZNhwIzIuhLIOBq4RQ3mTUxzzuv//6KPEJ+oAzlaU4l0Y7OS7N4MJV18/lL9Xv39hKccetI2KqqbWKnr+Kri+Z66+vVvMqvRfAGkGHx/jJEqXAAAAAElFTkSuQmCC\") 50% 50%/100px 100px}stellar-starscape stellar-parallax-section:first-of-type .stars{opacity:.25;left:14px}"; }
}

export { Starscape as stellar_starscape };