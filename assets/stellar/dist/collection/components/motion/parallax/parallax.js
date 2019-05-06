import Rellax from 'rellax';
export class Parallax {
    componentWillLoad() {
        this.relax = new Rellax('stellar-parallax-section', {
            center: true
        });
    }
    componentDidLoad() {
        this.reload();
    }
    async reload() {
        this.relax.refresh();
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "stellar-parallax"; }
    static get properties() { return {
        "relax": {
            "state": true
        },
        "reload": {
            "method": true
        }
    }; }
    static get style() { return "/**style-placeholder:stellar-parallax:**/"; }
}
