import { r as registerInstance, h } from './index-bcfb4a9f.js';

const WebAudioDebuggerCss = "web-audio-debugger{display:block;position:fixed;top:0;right:0;width:160px;height:300px;overflow:auto;text-align:right;padding:1rem;border:2px solid black}web-audio-debugger p{font-size:12px;margin:0 0 1em 0}";

const WebAudioDebugger = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.history = [];
        this.count = 50;
    }
    async addHistory(string) {
        let our_history = [
            string,
            ...this.history
        ];
        if (our_history.length > this.count) {
            this.history = our_history.slice(1, this.count);
        }
        else {
            this.history = our_history;
        }
    }
    render() {
        return (h("div", null, this.history.map((log) => h("div", null, h("p", null, log)))));
    }
    static get style() { return WebAudioDebuggerCss; }
};

export { WebAudioDebugger as W };
