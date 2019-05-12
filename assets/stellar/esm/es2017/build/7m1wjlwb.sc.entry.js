import { h } from '../stellar-core.core.js';

import { a as assert } from './chunk-ee695030.js';

const buildBiquadFilterNode = function (context, effectWC) {
    const biquadFilter = context.createBiquadFilter();
    biquadFilter.type = effectWC.method;
    biquadFilter.gain.value = 1.0;
    responsiveTo(biquadFilter, effectWC);
    return biquadFilter;
};
const buildDelayNode = function (context, effectWC) {
    const delay = context.createDelay(5.0);
    delay.delayTime.value = 3.0;
    responsiveTo(delay, effectWC);
    return delay;
};
const buildReverbNode = async function (context, effectWC) {
    const convolver = context.createConvolver();
    var source = effectWC._use;
    const buffer = await source.getBuffer();
    if (buffer) {
        convolver.buffer = buffer;
    }
    return convolver;
};
const responsiveTo = function (effect, effectWC) {
    if (effectWC.midicontroller !== false) {
        biquadResponsiveToMidi(effect, effectWC);
    }
    else if (effectWC.responds === "mouse") {
        biquadResponsiveToMouse(effect, effectWC);
    }
    else {
        effect.frequency.value = effectWC.value;
    }
};
const handleMouseMove = function (event) {
    var eventDoc, doc, body;
    event = event || window.event;
    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;
        event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
            (doc && doc.scrollTop || body && body.scrollTop || 0) -
            (doc && doc.clientTop || body && body.clientTop || 0);
    }
    return {
        toTop: event.pageY,
        toRight: (window.innerWidth - event.pageX),
        toBottom: (window.innerHeight - event.pageY),
        toLeft: event.pageX,
    };
};
const getMousePosition = function () {
    if (window["mousePos"]) {
        var event = new CustomEvent('mouse-update', { detail: window["mousePos"] });
        document.dispatchEvent(event);
    }
};
const biquadResponsiveToMidi = function (effect, effectWC) {
    document.addEventListener('midi-controller-update', (e) => {
        if (effectWC.midicontroller === e.detail.controller.number) {
            effect.frequency.value = ((e.detail.value + 1) / 128) * 3000;
        }
    });
};
const biquadResponsiveToMouse = function (effect, effectWC) {
    document.addEventListener('mouse-update', (e) => {
        if (effectWC.axis === "x") {
            effect.frequency.value = (e.detail.toLeft * 1.5) || 1000;
        }
        else if (effectWC.axis === "x-reverse") {
            effect.frequency.value = (e.detail.toRight * 1.5) || 1000;
        }
        else if (effectWC.axis === "y") {
            effect.frequency.value = (e.detail.toTop * 1.5) || 1000;
        }
        else if (effectWC.axis === "y-reverse") {
            effect.frequency.value = (e.detail.toBottom * 1.5) || 1000;
        }
        else if (effectWC.axis === "bi") {
            effect.frequency.value = ((e.detail.toRight + e.detail.toTop)) || 1000;
        }
        else if (effectWC.axis === "bi-reverse") {
            effect.frequency.value = ((e.detail.toLeft + e.detail.toRight)) || 1000;
        }
    }, false);
    (function () {
        if (!window["mouseInitialized"]) {
            window["mouseInitialized"] = true;
            document.onmousemove = handleMouseMove;
            setInterval(getMousePosition, 100);
        }
    })();
};

class WebAudioEffect {
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
            if (this.type === "panner") ;
            else if (this.type === "listener") ;
            else if (this.type === "reverb") {
                this.effect = await buildReverbNode(this.context, this);
            }
            else if (this.type === "filter") {
                this.effect = buildBiquadFilterNode(this.context, this);
            }
            else if (this.type === "delay") {
                this.effect = buildDelayNode(this.context, this);
            }
            else if (this.type === "compression") ;
            else if (this.type === "distortion") ;
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

export { WebAudioEffect };