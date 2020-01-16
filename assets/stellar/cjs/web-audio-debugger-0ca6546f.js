'use strict';

const index = require('./index-88c31836.js');

const WebAudioDebuggerCss = "web-audio-debugger{display:block;position:fixed;top:0;right:0;width:160px;height:300px;overflow:auto;text-align:right;padding:1rem;border:2px solid black}web-audio-debugger p{font-size:12px;margin:0 0 1em 0}";

const WebAudioDebugger = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("div", null, this.history.map((log) => index.h("div", null, index.h("p", null, log)))));
    }
    static get style() { return WebAudioDebuggerCss; }
};

exports.WebAudioDebugger = WebAudioDebugger;
