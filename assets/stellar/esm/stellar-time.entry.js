import { r as registerInstance } from './index-bcfb4a9f.js';
import { m as moment } from './moment-b6827264.js';

const TimeCss = "stellar-time{contain:content;all:inherit}";

const Time = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.format = "MMMM Do YYYY, h:mm:ss a";
        this.relative = false;
    }
    componentWillLoad() {
        this.prepareResult();
    }
    prepareResult() {
        this.instance = moment(this.value);
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

export { Time as stellar_time };
