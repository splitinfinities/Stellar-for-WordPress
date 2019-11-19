'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-f620c3d3.js');

// import { blurringEase } from '../../../utils';
class AnimateText {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.method = "lettering";
        this.verticalBlur = 0;
        this.horizontalBlur = 0;
    }
    blurHorizontal() {
        // blurringEase((e: number) => {
        //   this.horizontalBlur = e * 4
        // }, 450, 0, 'exponential', { invert: true })
    }
    blurVertical() {
        // blurringEase((e: number) => {
        //   this.verticalBlur = e * 4
        // }, 450, 0, 'exponential', { invert: true })
    }
    componentWillLoad() {
        if (this.method === "lettering") {
            this.horizontalBlur = 4;
        }
    }
    componentDidLoad() {
        if (this.method === "lettering") {
            this.blurHorizontal();
        }
    }
    render() {
        return (__chunk_1.h("stellar-blur", { vertical: this.verticalBlur, horizontal: this.horizontalBlur }, __chunk_1.h("slot", null)));
    }
    get element() { return __chunk_1.getElement(this); }
    static get style() { return "stellar-animate-text{display:inline-block;-webkit-transition:opacity .1s linear 50ms;transition:opacity .1s linear 50ms;opacity:0}stellar-animate-text.hydrated{opacity:1}stellar-animate-text[method*=weight]{-webkit-animation:weight 3.3s linear infinite alternate;animation:weight 3.3s linear infinite alternate}stellar-animate-text[method*=glitch]{-webkit-animation:glitch 3s infinite alternate;animation:glitch 3s infinite alternate;mix-blend-mode:soft-light}stellar-animate-text[method*=lettering] h1{-webkit-animation:lettering-h1 .65s var(--ease) 1 forwards;animation:lettering-h1 .65s var(--ease) 1 forwards;letter-spacing:.1em}stellar-animate-text[method*=lettering] h2,stellar-animate-text[method*=lettering] h3,stellar-animate-text[method*=lettering] h4{-webkit-animation:lettering-h2 .65s var(--ease) 1 forwards;animation:lettering-h2 .65s var(--ease) 1 forwards;letter-spacing:.2em}stellar-animate-text[method*=lettering] h5{-webkit-animation:lettering-h5 .65s var(--ease) 1 forwards;animation:lettering-h5 .65s var(--ease) 1 forwards;letter-spacing:.4em}stellar-animate-text[method*=lettering] h6{-webkit-animation:lettering-h6 .65s var(--ease) 1 forwards;animation:lettering-h6 .65s var(--ease) 1 forwards;letter-spacing:.4em}stellar-animate-text[method*=lettering] p{-webkit-animation:lettering-p .65s var(--ease) 1 forwards;animation:lettering-p .65s var(--ease) 1 forwards}\@-webkit-keyframes lettering-h1{0%{letter-spacing:.1em}to{letter-spacing:.02em}}\@keyframes lettering-h1{0%{letter-spacing:.1em}to{letter-spacing:.02em}}\@-webkit-keyframes lettering-h2{0%{letter-spacing:.2em}to{letter-spacing:.01em}}\@keyframes lettering-h2{0%{letter-spacing:.2em}to{letter-spacing:.01em}}\@-webkit-keyframes lettering-h5{0%{letter-spacing:.4em}to{letter-spacing:.0225em}}\@keyframes lettering-h5{0%{letter-spacing:.4em}to{letter-spacing:.0225em}}\@-webkit-keyframes lettering-h6{0%{letter-spacing:.4em}to{letter-spacing:.025em}}\@keyframes lettering-h6{0%{letter-spacing:.4em}to{letter-spacing:.025em}}\@-webkit-keyframes weight{0%{font-weight:100}20%{font-weight:300}40%{font-weight:400}60%{font-weight:500}80%{font-weight:600}to{font-weight:700}}\@keyframes weight{0%{font-weight:100}20%{font-weight:300}40%{font-weight:400}60%{font-weight:500}80%{font-weight:600}to{font-weight:700}}\@-webkit-keyframes glitch{0%{-webkit-transform:skew(-86deg);transform:skew(-86deg)}5%{-webkit-transform:skew(-37deg);transform:skew(-37deg)}10%{-webkit-transform:skew(75deg);transform:skew(75deg)}15%{-webkit-transform:skew(-42deg);transform:skew(-42deg)}20%{-webkit-transform:skew(-79deg);transform:skew(-79deg)}25%{-webkit-transform:skew(-82deg);transform:skew(-82deg)}30%{-webkit-transform:skew(7deg);transform:skew(7deg)}35%{-webkit-transform:skew(-7deg);transform:skew(-7deg)}40%{-webkit-transform:skew(24deg);transform:skew(24deg)}45%{-webkit-transform:skew(-3deg);transform:skew(-3deg)}50%{-webkit-transform:skew(-72deg);transform:skew(-72deg)}55%{-webkit-transform:skew(72deg);transform:skew(72deg)}60%{-webkit-transform:skew(-60deg);transform:skew(-60deg)}65%{-webkit-transform:skew(-40deg);transform:skew(-40deg)}70%{-webkit-transform:skew(75deg);transform:skew(75deg)}75%{-webkit-transform:skew(-51deg);transform:skew(-51deg)}80%{-webkit-transform:skew(-84deg);transform:skew(-84deg)}85%{-webkit-transform:skew(45deg);transform:skew(45deg)}90%{-webkit-transform:skew(-27deg);transform:skew(-27deg)}95%{-webkit-transform:skew(-21deg);transform:skew(-21deg)}}\@keyframes glitch{0%{-webkit-transform:skew(-86deg);transform:skew(-86deg)}5%{-webkit-transform:skew(-37deg);transform:skew(-37deg)}10%{-webkit-transform:skew(75deg);transform:skew(75deg)}15%{-webkit-transform:skew(-42deg);transform:skew(-42deg)}20%{-webkit-transform:skew(-79deg);transform:skew(-79deg)}25%{-webkit-transform:skew(-82deg);transform:skew(-82deg)}30%{-webkit-transform:skew(7deg);transform:skew(7deg)}35%{-webkit-transform:skew(-7deg);transform:skew(-7deg)}40%{-webkit-transform:skew(24deg);transform:skew(24deg)}45%{-webkit-transform:skew(-3deg);transform:skew(-3deg)}50%{-webkit-transform:skew(-72deg);transform:skew(-72deg)}55%{-webkit-transform:skew(72deg);transform:skew(72deg)}60%{-webkit-transform:skew(-60deg);transform:skew(-60deg)}65%{-webkit-transform:skew(-40deg);transform:skew(-40deg)}70%{-webkit-transform:skew(75deg);transform:skew(75deg)}75%{-webkit-transform:skew(-51deg);transform:skew(-51deg)}80%{-webkit-transform:skew(-84deg);transform:skew(-84deg)}85%{-webkit-transform:skew(45deg);transform:skew(45deg)}90%{-webkit-transform:skew(-27deg);transform:skew(-27deg)}95%{-webkit-transform:skew(-21deg);transform:skew(-21deg)}}"; }
}

exports.stellar_animate_text = AnimateText;
