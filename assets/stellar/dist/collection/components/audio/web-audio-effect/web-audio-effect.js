import { assert } from '../helpers';
import { buildBiquadFilterNode, buildDelayNode, buildReverbNode } from '../effects';
export class WebAudioEffect {
    constructor() {
        this.method = "lowshelf";
        this.value = 1.0;
        this.responds = null;
        this.midicontroller = 0;
        this.axis = "x";
    }
    async attachEffect(context, source) {
        this.context = context;
        this.source = source;
        const webaudio = await source.webAudio();
        this._use = webaudio.querySelector(`web-audio-source[name=${this.use}]`);
        if (assert(this.type, `"${this.type}" is not a valid effect - Routing around to masterGain."`)) {
            if (this.type === "panner") {
            }
            else if (this.type === "listener") {
            }
            else if (this.type === "reverb") {
                this.effect = await buildReverbNode(this.context, this);
            }
            else if (this.type === "filter") {
                this.effect = buildBiquadFilterNode(this.context, this);
            }
            else if (this.type === "delay") {
                this.effect = buildDelayNode(this.context, this);
            }
            else if (this.type === "compression") {
            }
            else if (this.type === "distortion") {
            }
        }
        return this.effect;
    }
    effects() {
        return ["panner", "listener", "reverb", "delay", "compression", "distortion", "filter"];
    }
    static get is() { return "web-audio-effect"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "_use": {
            "state": true
        },
        "attachEffect": {
            "method": true
        },
        "axis": {
            "type": String,
            "attr": "axis"
        },
        "context": {
            "state": true
        },
        "effect": {
            "state": true
        },
        "element": {
            "elementRef": true
        },
        "method": {
            "type": String,
            "attr": "method"
        },
        "midicontroller": {
            "type": Number,
            "attr": "midicontroller"
        },
        "parent": {
            "state": true
        },
        "responds": {
            "type": String,
            "attr": "responds"
        },
        "source": {
            "state": true
        },
        "type": {
            "type": String,
            "attr": "type"
        },
        "use": {
            "type": String,
            "attr": "use"
        },
        "value": {
            "type": Number,
            "attr": "value"
        }
    }; }
}
