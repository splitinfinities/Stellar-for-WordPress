import { bars, wave, circle, bars2 } from './visualizations';
import { colors } from '../../../utils';
import hexToHsl from 'hex-to-hsl';
export class WebAudioVisualizer {
    constructor() {
        this.for = "web_audio";
        this.type = "wave";
        this.smoothing = 0.7;
        this.size = 1024;
        this.color = "white";
        this.width = 1024;
        this.height = 1024;
        this.clearBackground = () => {
            this.canvasCTX.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.canvasCTX.fillStyle = "transparent";
            this.canvasCTX.fillRect(0, 0, this.canvas.width, this.canvas.height);
        };
    }
    componentWillLoad() {
        if (["white", "black", "black-alt"].includes(this.color)) {
            this._color = hexToHsl(colors[this.color]);
        }
        else {
            this._color = hexToHsl(colors[this.color][5]);
        }
    }
    componentDidLoad() {
        this.canvas = this.element.shadowRoot.querySelector('canvas');
    }
    async connect(context, destination) {
        this.context = context;
        this.analyser = this.context.createAnalyser();
        if (destination) {
            this.analyser.connect(destination);
        }
        this.freqs = new Uint8Array(this.analyser.frequencyBinCount);
        this.times = new Uint8Array(this.analyser.frequencyBinCount);
        this.canvasCTX = this.canvas.getContext('2d');
        requestAnimationFrame(this.draw.bind(this));
        return this;
    }
    draw() {
        this.analyser.smoothingTimeConstant = this.smoothing;
        this.analyser.fftSize = this.size;
        this.analyser.getByteFrequencyData(this.freqs);
        this.analyser.getByteTimeDomainData(this.times);
        var width = Math.floor(this.freqs.length);
        this.canvas.width = width || this.width;
        this.canvas.height = this.height;
        this.clearBackground();
        if (this.type === "wave") {
            wave(this);
        }
        else if (this.type === "bars") {
            bars(this);
        }
        else if (this.type === "bars2") {
            bars2(this);
        }
        else if (this.type === "circle") {
            circle(this);
        }
        requestAnimationFrame(this.draw.bind(this));
    }
    getFrequencyValue(freq) {
        var nyquist = this.context.sampleRate / 2;
        var index = Math.round(freq / nyquist * this.freqs.length);
        return this.freqs[index];
    }
    render() {
        return (h("canvas", { id: "canvas" }));
    }
    static get is() { return "web-audio-visualizer"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "_bufferLength": {
            "state": true
        },
        "_color": {
            "type": "Any",
            "attr": "_color",
            "mutable": true
        },
        "_dataArray": {
            "state": true
        },
        "analyser": {
            "type": "Any",
            "attr": "analyser",
            "mutable": true
        },
        "canvas": {
            "state": true
        },
        "canvasCTX": {
            "state": true
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "connect": {
            "method": true
        },
        "context": {
            "state": true
        },
        "element": {
            "elementRef": true
        },
        "for": {
            "type": String,
            "attr": "for",
            "reflectToAttr": true,
            "mutable": true
        },
        "fragment": {
            "state": true
        },
        "fragShader": {
            "state": true
        },
        "fragSpectrum": {
            "state": true
        },
        "fragSpectrumArray": {
            "state": true
        },
        "fragTime": {
            "state": true
        },
        "freqs": {
            "state": true
        },
        "height": {
            "type": Number,
            "attr": "height",
            "reflectToAttr": true,
            "mutable": true
        },
        "renderer": {
            "type": "Any",
            "attr": "renderer"
        },
        "size": {
            "type": Number,
            "attr": "size"
        },
        "smoothing": {
            "type": Number,
            "attr": "smoothing"
        },
        "times": {
            "state": true
        },
        "type": {
            "type": String,
            "attr": "type",
            "reflectToAttr": true,
            "mutable": true
        },
        "vertex": {
            "state": true
        },
        "vertexShader": {
            "state": true
        },
        "width": {
            "type": Number,
            "attr": "width",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get style() { return "/**style-placeholder:web-audio-visualizer:**/"; }
}
