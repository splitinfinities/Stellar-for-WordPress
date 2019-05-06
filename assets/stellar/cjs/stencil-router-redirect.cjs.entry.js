'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-c90f54d2.js');
const __chunk_12 = require('./chunk-140cc5da.js');

function getUrl(url, root) {
    if (url.charAt(0) == '/' && root.charAt(root.length - 1) == '/') {
        return root.slice(0, root.length - 1) + url;
    }
    return root + url;
}
class Redirect {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    componentWillLoad() {
        if (this.history && this.root && this.url) {
            return this.history.replace(getUrl(this.url, this.root));
        }
    }
    get el() { return __chunk_1.getElement(this); }
}
__chunk_12.ActiveRouter.injectProps(Redirect, [
    'history',
    'root'
]);

exports.stencil_router_redirect = Redirect;
