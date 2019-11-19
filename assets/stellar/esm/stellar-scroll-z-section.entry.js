import { d as registerInstance, f as h, g as getElement } from './stellar-core-1e602ba1.js';

class ScrollZSection {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("slot", null);
    }
    get element() { return getElement(this); }
}

export { ScrollZSection as stellar_scroll_z_section };
