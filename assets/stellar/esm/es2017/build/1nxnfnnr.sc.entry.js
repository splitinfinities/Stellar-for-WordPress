import { h } from '../stellar-core.core.js';

class WebAudioVisualizerShader {
    render() {
        return '';
    }
    static get is() { return "web-audio-visualizer-shader"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "type": {
            "type": String,
            "attr": "type"
        }
    }; }
}

export { WebAudioVisualizerShader };
