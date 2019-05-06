import { c as registerInstance, d as h } from './stellar-core-d63b686e.js';

class WebAudioDebugger {
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
    static get style() { return "web-audio-debugger {\n  display: block;\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 160px;\n  height: 300px;\n  overflow: auto;\n  text-align: right;\n  padding: 1rem;\n  border: 2px solid black;\n}\n\nweb-audio-debugger p {\n  font-size: 12px;\n  margin: 0 0 1em 0;\n}"; }
}

export { WebAudioDebugger as web_audio_debugger };
