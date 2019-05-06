import { c as registerInstance, d as h, f as getElement } from './stellar-core-3af17cd6.js';
import { a as matchPath, b as matchesAreEqual } from './chunk-a0d31045.js';
import './chunk-2c7f64d5.js';
import { a as ActiveRouter } from './chunk-75188364.js';

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
class Route {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.group = null;
        this.match = null;
        this.componentProps = {};
        this.exact = false;
        this.scrollOnNextRender = false;
        this.previousMatch = null;
    }
    computeMatch(newLocation) {
        const isGrouped = this.group != null || (this.el.parentElement != null && this.el.parentElement.tagName.toLowerCase() === 'stencil-route-switch');
        if (!newLocation || isGrouped) {
            return;
        }
        this.previousMatch = this.match;
        return this.match = matchPath(newLocation.pathname, {
            path: this.url,
            exact: this.exact,
            strict: true
        });
    }
    loadCompleted() {
        return __awaiter(this, void 0, void 0, function* () {
            let routeViewOptions = {};
            if (this.history && this.history.location.hash) {
                routeViewOptions = {
                    scrollToId: this.history.location.hash.substr(1)
                };
            }
            else if (this.scrollTopOffset) {
                routeViewOptions = {
                    scrollTopOffset: this.scrollTopOffset
                };
            }
            if (typeof this.componentUpdated === 'function') {
                this.componentUpdated(routeViewOptions);
            }
            else if (this.match && !matchesAreEqual(this.match, this.previousMatch) && this.routeViewsUpdated) {
                this.routeViewsUpdated(routeViewOptions);
            }
        });
    }
    componentDidUpdate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadCompleted();
        });
    }
    componentDidLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadCompleted();
        });
    }
    render() {
        if (!this.match || !this.history) {
            return null;
        }
        const childProps = Object.assign({}, this.componentProps, { history: this.history, match: this.match });
        if (this.routeRender) {
            return this.routeRender(Object.assign({}, childProps, { component: this.component }));
        }
        if (this.component) {
            const ChildComponent = this.component;
            return (h(ChildComponent, Object.assign({}, childProps)));
        }
    }
    static get style() { return "/**style-placeholder:stencil-route:**/"; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "location": ["computeMatch"]
    }; }
    static get style() { return "stencil-route.inactive{display:none}"; }
}
ActiveRouter.injectProps(Route, [
    'location',
    'history',
    'historyType',
    'routeViewsUpdated'
]);

export { Route as stencil_route };
