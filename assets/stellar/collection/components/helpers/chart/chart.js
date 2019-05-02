import Highcharts from 'highcharts';
import Data from 'highcharts/modules/data';
import merge from 'deepmerge';
import { theme, HighchartsModel } from './options';
Data(Highcharts);
export class Chart {
    constructor() {
        this.__options = {};
        this.__data = {};
        this.config = new HighchartsModel;
    }
    handleConfig() {
        if (this.config) {
            this.options(this.config.serialize());
        }
    }
    handleAttrs() {
        this.options({});
    }
    componentDidLoad() {
        this.options(theme);
        this.refresh();
    }
    options(newOptions) {
        this.__options = Object.assign({}, this.__options, { chart: {
                type: this.type
            }, data: {
                table: this.for
            }, series: [] }, { xAxis: { categories: [] } }, { yAxis: { categories: [] } });
        this.__options = merge.all([this.__options, newOptions, theme]);
        Highcharts.setOptions({
            lang: {
                thousandsSep: ','
            }
        });
        this.refresh();
    }
    get_options() {
        return this.__options;
    }
    refresh() {
        this.__chart = this.element.shadowRoot.querySelector('.highchart');
        if (this.__chart) {
            this.__highchart = Highcharts.chart(this.__chart, this.__options);
        }
    }
    render() {
        return h("div", { class: "highchart" });
    }
    static get is() { return "stellar-chart"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "__chart": {
            "state": true
        },
        "__data": {
            "state": true
        },
        "__highchart": {
            "state": true
        },
        "__informant": {
            "state": true
        },
        "__options": {
            "state": true
        },
        "config": {
            "type": "Any",
            "attr": "config",
            "watchCallbacks": ["handleConfig"]
        },
        "element": {
            "elementRef": true
        },
        "for": {
            "type": String,
            "attr": "for",
            "watchCallbacks": ["handleAttrs"]
        },
        "get_options": {
            "method": true
        },
        "options": {
            "method": true
        },
        "refresh": {
            "method": true
        },
        "remote": {
            "type": String,
            "attr": "remote"
        },
        "type": {
            "type": String,
            "attr": "type",
            "watchCallbacks": ["handleAttrs"]
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-chart:**/"; }
}
