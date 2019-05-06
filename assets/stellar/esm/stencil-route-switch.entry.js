import { c as registerInstance, e as getContext, d as h, f as getElement } from './stellar-core-3af17cd6.js';
import { a as matchPath } from './chunk-a0d31045.js';
import './chunk-2c7f64d5.js';
import { a as ActiveRouter } from './chunk-75188364.js';

function uuidv4 () {
    return ([1e7].toString() + -1e3.toString() + -4e3.toString() + -8e3.toString() + -1e11.toString()).replace(/[018]/g, function (c) {
        const random = window.crypto.getRandomValues(new Uint8Array(1));
        return (c ^ random[0] & 15 >> c / 4).toString(16);
    });
}

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getUniqueId() {
    if (window.crypto) {
        return uuidv4();
    }
    return ((Math.random() * 10e16).toString().match(/.{4}/g) || []).join('-');
}
function getMatch(pathname, url, exact) {
    return matchPath(pathname, {
        path: url,
        exact: exact,
        strict: true
    });
}
function isHTMLStencilRouteElement(element) {
    return element.tagName.toLowerCase() === 'stencil-route';
}
class RouteSwitch {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.group = getUniqueId();
        this.subscribers = [];
        this.queue = getContext(this, "queue");
    }
    componentWillLoad() {
        if (this.location != null) {
            this.regenerateSubscribers(this.location);
        }
    }
    regenerateSubscribers(newLocation) {
        return __awaiter(this, void 0, void 0, function* () {
            if (newLocation == null) {
                return;
            }
            let newActiveIndex = -1;
            this.subscribers = Array.prototype.slice.call(this.el.children)
                .filter(isHTMLStencilRouteElement)
                .map((childElement, index) => {
                const match = getMatch(newLocation.pathname, childElement.url, childElement.exact);
                if (match && newActiveIndex === -1) {
                    newActiveIndex = index;
                }
                return {
                    el: childElement,
                    match: match
                };
            });
            if (newActiveIndex === -1) {
                return;
            }
            if (this.activeIndex === newActiveIndex) {
                this.subscribers[newActiveIndex].el.match = this.subscribers[newActiveIndex].match;
                return;
            }
            this.activeIndex = newActiveIndex;
            const activeChild = this.subscribers[this.activeIndex];
            if (this.scrollTopOffset) {
                activeChild.el.scrollTopOffset = this.scrollTopOffset;
            }
            activeChild.el.group = this.group;
            activeChild.el.match = activeChild.match;
            activeChild.el.componentUpdated = (routeViewUpdatedOptions) => {
                this.queue.write(() => {
                    this.subscribers.forEach((child, index) => {
                        child.el.componentUpdated = undefined;
                        if (index === this.activeIndex) {
                            return child.el.style.display = '';
                        }
                        if (this.scrollTopOffset) {
                            child.el.scrollTopOffset = this.scrollTopOffset;
                        }
                        child.el.group = this.group;
                        child.el.match = null;
                        child.el.style.display = 'none';
                    });
                });
                if (this.routeViewsUpdated) {
                    this.routeViewsUpdated(Object.assign({ scrollTopOffset: this.scrollTopOffset }, routeViewUpdatedOptions));
                }
            };
        });
    }
    render() {
        return (h("slot", null));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "location": ["regenerateSubscribers"]
    }; }
}
ActiveRouter.injectProps(RouteSwitch, [
    'location',
    'routeViewsUpdated'
]);

export { RouteSwitch as stencil_route_switch };
