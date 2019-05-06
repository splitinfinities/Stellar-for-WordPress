export class Slide {
    hostData() {
        return {
            class: {
                'slide-zoom': true,
                'swiper-slide': true
            }
        };
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "stellar-slide"; }
    static get style() { return "/**style-placeholder:stellar-slide:**/"; }
}
