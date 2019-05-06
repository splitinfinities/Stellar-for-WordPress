import { c as registerInstance, f as getElement } from './stellar-core-3af17cd6.js';
import { a as ActiveRouter } from './chunk-75188364.js';

function getUrl(url, root) {
    if (url.charAt(0) == '/' && root.charAt(root.length - 1) == '/') {
        return root.slice(0, root.length - 1) + url;
    }
    return root + url;
}
class Redirect {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        if (this.history && this.root && this.url) {
            return this.history.replace(getUrl(this.url, this.root));
        }
    }
    get el() { return getElement(this); }
}
ActiveRouter.injectProps(Redirect, [
    'history',
    'root'
]);

export { Redirect as stencil_router_redirect };
