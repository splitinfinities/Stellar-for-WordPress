import { r as registerInstance, h, g as getElement } from './index-cc4604b3.js';
import { c as colors } from './colors-eb996d31.js';
import { c as createCommonjsModule, a as commonjsGlobal } from './_commonjsHelpers-bccf23a2.js';
import './css-custom-properties.min-d9d14253.js';
import './index-26976b63.js';
import './main-e9832563.js';
import './moment-5e7e00c2.js';

const bars = (arg) => {
    // Draw the frequency domain chart.
    for (var i = 0; i < arg.analyser.frequencyBinCount; i++) {
        var value = arg.freqs[i];
        var percent = value / 256;
        var height = (arg.height * percent) * 0.75;
        var offset = arg.height - height + 25;
        var barWidth = (arg.width / arg.analyser.frequencyBinCount) + 24;
        arg.canvasCTX.fillStyle = `hsl(${arg._color[0]}, ${arg._color[1]}%, ${percent * 100}%)`;
        arg.canvasCTX.fillRect(i * barWidth, offset, barWidth, height);
    }
};

var BAR_PAD = 4;
var BAR_WIDTH = 4;
var MAX_BARS = 70;
const bars2 = (arg) => {
    const values = arg.freqs;
    const canvas = arg.canvas;
    const ctx = arg.canvasCTX;
    var len = values.length - (~~(values.length / MAX_BARS) * 50);
    var normFac = arg.size;
    var maxValue = normFac;
    var istep = ~~(len / MAX_BARS);
    var step = canvas.width / MAX_BARS;
    var x = BAR_WIDTH;
    var height = (canvas.height - (BAR_PAD * 2));
    for (var i = 0; i < len; i += istep) {
        var v = (values[i] / maxValue);
        var h = v * height;
        var y = height / 2 - h / 2;
        ctx.beginPath();
        ctx.shadowColor = "rgba(24, 24, 24, 0.25)";
        ctx.shadowBlur = 8;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 2;
        ctx.strokeStyle = `hsl(${arg._color[0]}, ${arg._color[1]}%, ${arg._color[2]}%)`;
        ctx.lineWidth = BAR_WIDTH;
        ctx.lineCap = 'round';
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + h);
        ctx.stroke();
        x += step;
    }
};

/**
 *
 * Sound Math stuff
 *
 * Based on https://codepen.io/prakhar625/pen/zddKRj?editors=0010s
 *
*/
function fractionate(val, minVal, maxVal) {
    return (val - minVal) / (maxVal - minVal);
}
function modulate(val, minVal, maxVal, outMin, outMax) {
    const fr = fractionate(val, minVal, maxVal);
    const delta = outMax - outMin;
    return outMin + (fr * delta);
}
function avg(arr) {
    const total = arr.reduce((sum, b) => (sum + b));
    return (total / arr.length);
}
function max(arr) {
    return arr.reduce((a, b) => (Math.max(a, b)));
}
function analyzeSound(dataArray) {
    const lowerHalfArray = dataArray.slice(0, (dataArray.length / 2) - 1);
    const upperHalfArray = dataArray.slice((dataArray.length / 2) - 1, dataArray.length - 1);
    const overallAvg = avg(dataArray);
    const lowerMax = max(lowerHalfArray);
    const lowerAvg = avg(lowerHalfArray);
    const upperMax = max(upperHalfArray);
    const upperAvg = avg(upperHalfArray);
    const lowerMaxFr = lowerMax / lowerHalfArray.length;
    const lowerAvgFr = lowerAvg / lowerHalfArray.length;
    const upperMaxFr = upperMax / upperHalfArray.length;
    const upperAvgFr = upperAvg / upperHalfArray.length;
    return {
        lowerAvg,
        lowerAvgFr,
        lowerMax,
        lowerMaxFr,
        overallAvg,
        upperAvg,
        upperAvgFr,
        upperMax,
        upperMaxFr
    };
}

const RENDERED_OBJECTS = {
    BAR: {
        maxHeight: 250
    },
    CIRCLE: {
        radius: 100,
        width: 15
    }
};
const circle = (arg) => {
    const bufferLength = arg.analyser.frequencyBinCount;
    const avgBuffer = avg(arg.freqs);
    const lineWidth = avgBuffer < RENDERED_OBJECTS.CIRCLE.width ? RENDERED_OBJECTS.CIRCLE.width : avgBuffer;
    let rotation = 0;
    let cx = arg.width / 2;
    let cy = arg.height / 2;
    const rectLength = RENDERED_OBJECTS.CIRCLE.radius * 2 * Math.PI;
    let barWidth = (rectLength / bufferLength);
    arg.canvasCTX.beginPath();
    arg.canvasCTX.arc(cx, cy, RENDERED_OBJECTS.CIRCLE.radius, 0, Math.PI * 2);
    arg.canvasCTX.lineWidth = lineWidth;
    arg.canvasCTX.strokeStyle = `hsl(${arg._color[0]}, ${arg._color[1]}%, ${arg._color[2]}%)`;
    arg.canvasCTX.closePath();
    arg.canvasCTX.stroke();
    arg.canvasCTX.save();
    arg.canvasCTX.translate(cx, cy);
    for (var i = 0; i < arg.analyser.frequencyBinCount; i++) {
        const barHeight = arg.freqs[i];
        const fixedBarHeight = barHeight > RENDERED_OBJECTS.BAR.maxHeight ? RENDERED_OBJECTS.BAR.maxHeight : barHeight;
        arg.canvasCTX.rotate(rotation);
        arg.canvasCTX.fillStyle = `hsl(${arg._color[0]}, ${arg._color[1]}%, ${arg._color[2]}%)`;
        arg.canvasCTX.fillRect(RENDERED_OBJECTS.CIRCLE.radius + 100, (barWidth * -1) / 2, fixedBarHeight, barWidth);
        rotation = (rotation / (bufferLength + barWidth)) % 360 + 1;
    }
};

const wave = (arg) => {
    for (var i = 0; i < arg.analyser.frequencyBinCount; i++) {
        var value = arg.times[i];
        var percent = value / 512;
        var height = (arg.height * percent) * 1.25;
        var offset = arg.height - height;
        var barWidth = arg.width / arg.analyser.frequencyBinCount + 16;
        arg.canvasCTX.fillStyle = `hsl(${arg._color[0]}, ${arg._color[1]}%, ${arg._color[2]}%)`;
        arg.canvasCTX.fillRect(i * barWidth, offset, 24, 24);
    }
};

var rgbToHsl = createCommonjsModule(function (module) {
(function() {
  module.exports = function(r, g, b) {
    var d, h, l, max, min, s;
    r /= 255;
    g /= 255;
    b /= 255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    h = 0;
    s = 0;
    l = (max + min) / 2;
    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
      }
      h /= 6;
    }
    h = Math.ceil(h * 360);
    s = (Math.ceil(s * 100)) + "%";
    l = (Math.ceil(l * 100)) + "%";
    return [h, s, l];
  };

}).call(commonjsGlobal);
});

var hexToRgb = function hexToRgb (hex) {

  if (hex.charAt && hex.charAt(0) === '#') {
    hex = removeHash(hex);
  }

  if (hex.length === 3) {
    hex = expand(hex);
  }

  var bigint = parseInt(hex, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return [r, g, b]
};

function removeHash (hex) {

  var arr = hex.split('');
  arr.shift();
  return arr.join('')
}

function expand (hex) {

  return hex
    .split('')
    .reduce(function (accum, value) {

      return accum.concat([value, value])
    }, [])
    .join('')
}

var hexToHsl = function (hex) {
	var hsl = rgbToHsl.apply(rgbToHsl, hexToRgb(hex));
	return [hsl[0], parseInt(hsl[1], 10), parseInt(hsl[2], 10)];
};

const WebAudioVisualizerCss = ":host {\n  display: block\n}\n\n:host canvas {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n";

const WebAudioVisualizer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.handleColorChange();
    }
    componentDidLoad() {
        this.canvas = this.element.shadowRoot.querySelector('canvas');
    }
    handleColorChange() {
        if (["white", "black", "black-alt"].includes(this.color)) {
            this._color = hexToHsl(colors[this.color]);
        }
        else {
            this._color = hexToHsl(colors[this.color][5]);
        }
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
        // Get the frequency data from the currently playing music
        this.analyser.getByteFrequencyData(this.freqs);
        this.analyser.getByteTimeDomainData(this.times);
        this.canvas.width = this.width;
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
    get element() { return getElement(this); }
    static get watchers() { return {
        "color": ["handleColorChange"]
    }; }
    static get style() { return WebAudioVisualizerCss; }
};

export { WebAudioVisualizer as web_audio_visualizer };
