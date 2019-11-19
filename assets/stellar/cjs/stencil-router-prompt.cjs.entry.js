'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-f620c3d3.js');
const __chunk_4 = require('./chunk-ab16519d.js');

class StencilRouterPrompt {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.when = true;
        this.message = '';
    }
    enable(message) {
        if (this.unblock) {
            this.unblock();
        }
        if (this.history) {
            this.unblock = this.history.block(message);
        }
    }
    disable() {
        if (this.unblock) {
            this.unblock();
            this.unblock = undefined;
        }
    }
    componentWillLoad() {
        if (this.when) {
            this.enable(this.message);
        }
    }
    updateMessage(newMessage, prevMessage) {
        if (this.when) {
            if (!this.when || prevMessage !== newMessage) {
                this.enable(this.message);
            }
        }
        else {
            this.disable();
        }
    }
    componentDidUnload() {
        this.disable();
    }
    render() {
        return null;
    }
    get el() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "message": ["updateMessage"],
        "when": ["updateMessage"]
    }; }
}
__chunk_4.ActiveRouter.injectProps(StencilRouterPrompt, [
    'history',
]);

exports.stencil_router_prompt = StencilRouterPrompt;
