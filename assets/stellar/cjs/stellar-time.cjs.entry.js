'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-f620c3d3.js');
const __chunk_12 = require('./chunk-e87c7d7e.js');

class Time {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.format = "MMMM Do YYYY, h:mm:ss a";
        this.relative = false;
    }
    componentWillLoad() {
        this.prepareResult();
    }
    prepareResult() {
        this.instance = __chunk_12.moment(this.value);
        if (this.relative) {
            this.result = this.instance.fromNow();
        }
        else {
            this.result = this.instance.format(this.format);
        }
    }
    render() {
        return this.result;
    }
    static get watchers() { return {
        "value": ["prepareResult"]
    }; }
    static get style() { return "stellar-time{all:inherit}"; }
}

exports.stellar_time = Time;
