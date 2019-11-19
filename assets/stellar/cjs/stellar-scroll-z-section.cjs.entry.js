'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-f620c3d3.js');

class ScrollZSection {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    render() {
        return __chunk_1.h("slot", null);
    }
    get element() { return __chunk_1.getElement(this); }
}

exports.stellar_scroll_z_section = ScrollZSection;
