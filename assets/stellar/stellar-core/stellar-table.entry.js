import { c as registerInstance, d as h, f as getElement } from './stellar-core-d63b686e.js';

class Table {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            this.upgrade ? h("complete-table", { name: this.name }, h("slot", null)) : h("slot", null)
        ];
    }
    get element() { return getElement(this); }
    static get style() { return "stellar-table {\n  display: block;\n}\n\nstellar-table complete-table .table,\nstellar-table table {\n  --font-size: 14px;\n\n  border: 0;\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n  font-size: 14px;\n}\n\nstellar-table complete-table .table td,\nstellar-table table td {\n\n}\n\nstellar-table complete-table .table .options,\nstellar-table table .options {\n  border: none !important;\n}\n\nstellar-table complete-table .table .thead,\nstellar-table complete-table .table thead,\nstellar-table table .thead,\nstellar-table table thead {\n  border-bottom: 1px solid var(--gray2);\n}\n\nstellar-table complete-table .table .thead .th,\nstellar-table complete-table .table .thead th,\nstellar-table complete-table .table thead .th,\nstellar-table complete-table .table thead th,\nstellar-table table .thead .th,\nstellar-table table .thead th,\nstellar-table table thead .th,\nstellar-table table thead th {\n  --font-size: 13px;\n\n  border: 0 !important;\n  padding: 27px 15px 27px 65px;\n  text-align: left;\n  color: var(--gray);\n  font-size: 13px;\n  font-weight: 600;\n}\n\nstellar-table complete-table .table .thead .th:last-child,\nstellar-table complete-table .table .thead th:last-child,\nstellar-table complete-table .table thead .th:last-child,\nstellar-table complete-table .table thead th:last-child,\nstellar-table table .thead .th:last-child,\nstellar-table table .thead th:last-child,\nstellar-table table thead .th:last-child,\nstellar-table table thead th:last-child {\n  text-align: right;\n}\n\nstellar-table complete-table .table .tbody tr:first-child td,\nstellar-table complete-table .table tbody tr:first-child td,\nstellar-table table .tbody tr:first-child td,\nstellar-table table tbody tr:first-child td {\n  padding-top: 27px;\n}\n\nstellar-table complete-table .table .tbody .td,\nstellar-table complete-table .table .tbody td,\nstellar-table complete-table .table tbody .td,\nstellar-table complete-table .table tbody td,\nstellar-table table .tbody .td,\nstellar-table table .tbody td,\nstellar-table table tbody .td,\nstellar-table table tbody td {\n  border-right: none !important;\n  border-left: none !important;\n  padding: 20px 15px 20px 65px;\n}\n\nstellar-table complete-table .table .tbody .td:last-child,\nstellar-table complete-table .table .tbody td:last-child,\nstellar-table complete-table .table tbody .td:last-child,\nstellar-table complete-table .table tbody td:last-child,\nstellar-table table .tbody .td:last-child,\nstellar-table table .tbody td:last-child,\nstellar-table table tbody .td:last-child,\nstellar-table table tbody td:last-child {\n  text-align: right;\n}\n\nstellar-table[striped] complete-table .table .tbody tr,\nstellar-table[striped] complete-table .table tbody tr,\nstellar-table[striped] table .tbody tr,\nstellar-table[striped] table tbody tr {\n  border-bottom: 1px solid var(--gray2);\n}\n\n\nstellar-table[striped] complete-table .table .tbody tr:nth-child(odd),\nstellar-table[striped] complete-table .table tbody tr:nth-child(odd),\nstellar-table[striped] table .tbody tr:nth-child(odd),\nstellar-table[striped] table tbody tr:nth-child(odd) {\n  background: var(--gray1);\n}"; }
}

export { Table as stellar_table };
