import { c as registerInstance, f as getElement } from './stellar-core-3af17cd6.js';

class ContextConsumer {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.context = {};
        this.renderer = () => null;
    }
    componentWillLoad() {
        this.unsubscribe = () => {
            if (this.subscribe != null) {
                this.subscribe(this.el, 'context');
            }
        };
    }
    componentDidUnload() {
        if (this.unsubscribe != null) {
            this.unsubscribe();
        }
    }
    render() {
        return this.renderer(Object.assign({}, this.context));
    }
    get el() { return getElement(this); }
}

export { ContextConsumer as context_consumer };
