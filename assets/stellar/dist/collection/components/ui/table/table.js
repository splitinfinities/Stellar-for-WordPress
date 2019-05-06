export class Table {
    constructor() {
        this.upgrade = false;
        this.chart = false;
        this.striped = false;
    }
    tableChangeHandler() {
        if (this.chart) {
            this.element.querySelector('stellar-chart').refresh();
        }
    }
    componentWillLoad() {
        if (this.chart) {
            this.element.querySelector('table').id = this.name;
        }
    }
    componentDidLoad() {
        if (this.chart) {
            this.element.querySelector('stellar-chart').refresh();
        }
    }
    render() {
        return [
            this.chart && h("stellar-chart", { for: this.name }),
            this.upgrade ? h("complete-table", { name: this.name },
                h("slot", null)) : h("slot", null)
        ];
    }
    static get is() { return "stellar-table"; }
    static get properties() { return {
        "chart": {
            "type": Boolean,
            "attr": "chart"
        },
        "element": {
            "elementRef": true
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "striped": {
            "type": Boolean,
            "attr": "striped"
        },
        "upgrade": {
            "type": Boolean,
            "attr": "upgrade"
        }
    }; }
    static get listeners() { return [{
            "name": "change",
            "method": "tableChangeHandler"
        }]; }
    static get style() { return "/**style-placeholder:stellar-table:**/"; }
}
