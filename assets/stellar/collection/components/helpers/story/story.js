import parallaxis from 'parallaxis';
export class Story {
    constructor() {
        this.target = "story";
    }
    componentWillLoad() {
        parallaxis({ className: this.target });
    }
    static get is() { return "stellar-story"; }
    static get properties() { return {
        "target": {
            "type": String,
            "attr": "target"
        }
    }; }
}
