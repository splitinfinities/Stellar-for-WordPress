'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-88c31836.js');
const moment = require('./moment-fd045425.js');

const TimeCss = "stellar-time{contain:content;all:inherit}";

const Time = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.format = "MMMM Do YYYY, h:mm:ss a";
        this.relative = false;
    }
    componentWillLoad() {
        this.prepareResult();
    }
    prepareResult() {
        this.instance = moment.moment(this.value);
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
    static get style() { return TimeCss; }
};

exports.stellar_time = Time;
