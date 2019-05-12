import { Swiper } from './vendor/swiper.js';
import { blurringEase } from '../../../utils';
export class Slides {
    constructor() {
        this.effect = "slide";
        this.speed = 300;
        this.direction = "horizontal";
        this.autoHeight = false;
        this.nested = false;
        this.pagination = false;
        this.loop = false;
        this.watchSlidesProgress = false;
        this.watchSlidesVisibility = false;
        this.slidesPerView = 3;
        this.centeredSlides = true;
        this.spaceBetween = 20;
        this.blur = 0;
        this.ease = () => {
            const ease = blurringEase({
                end: 60,
                start: -1,
                duration: (this.speed / 2),
                tick: (args) => {
                    this.blur = args.value;
                },
                complete: () => {
                    this.blur = -1;
                    ease.stop();
                    setTimeout(() => {
                        this.blur = -2;
                    }, 100);
                },
            });
            return ease;
        };
        this.pager = true;
    }
    updateSwiperOptions() {
        const newOptions = this.normalizeOptions();
        this.swiper.params = Object.assign({}, this.swiper.params, newOptions);
        this.update();
    }
    componentDidLoad() {
        setTimeout(this.initSlides.bind(this), 10);
    }
    componentDidUnload() {
        this.swiper.destroy(true, true);
    }
    initSlides() {
        this.container = this.el.children[0];
        const finalOptions = this.normalizeOptions();
        this.swiper = new Swiper(this.container, finalOptions);
        this.el.onmouseenter = () => {
            this.swiper.keyboard.enable();
        };
        this.el.onmouseleave = () => {
            this.swiper.keyboard.disable();
        };
        this.el.onfocus = () => {
            this.swiper.keyboard.enable();
        };
        this.el.onblur = () => {
            this.swiper.keyboard.disable();
        };
    }
    hostData() {
        return {
            "tabIndex": 0
        };
    }
    async update() {
        this.swiper.update();
    }
    async slideTo(index, speed, runCallbacks) {
        this.swiper.slideTo(index, speed, runCallbacks);
    }
    async slideNext(speed, runCallbacks) {
        this.swiper.slideNext(runCallbacks, speed);
    }
    async slidePrev(speed, runCallbacks) {
        this.swiper.slidePrev(runCallbacks, speed);
    }
    async getActiveIndex() {
        return this.swiper.activeIndex;
    }
    async getPreviousIndex() {
        return this.swiper.previousIndex;
    }
    async length() {
        return this.swiper.slides.length;
    }
    async isEnd() {
        return this.swiper.isEnd;
    }
    async isBeginning() {
        return this.swiper.isBeginning;
    }
    async startAutoplay() {
        this.swiper.autoplay.start();
    }
    async stopAutoplay() {
        this.swiper.autoplay.stop();
    }
    async lockSwipeToNext(shouldLockSwipeToNext) {
        if (shouldLockSwipeToNext) {
            return this.swiper.lockSwipeToNext();
        }
        this.swiper.unlockSwipeToNext();
    }
    async lockSwipeToPrev(shouldLockSwipeToPrev) {
        if (shouldLockSwipeToPrev) {
            return this.swiper.lockSwipeToPrev();
        }
        this.swiper.unlockSwipeToPrev();
    }
    async lockSwipes(shouldLockSwipes) {
        if (shouldLockSwipes) {
            return this.swiper.lockSwipes();
        }
        this.swiper.unlockSwipes();
    }
    blurStart() {
        if (!this.slides) {
            this.slides = Array.from(this.el.querySelectorAll('stellar-slide'));
        }
        this.ease().start();
    }
    blurEnd() {
        if (!this.slides) {
            this.slides = Array.from(this.el.querySelectorAll('stellar-slide'));
        }
        this.blur = -1;
        const resize = new Event('resize');
        window.dispatchEvent(resize);
    }
    normalizeOptions() {
        const swiperOptions = {
            effect: this.effect,
            direction: this.direction,
            initialSlide: 0,
            loop: this.loop,
            pager: this.pagination,
            keyboard: {
                enabled: false,
                onlyInViewport: true,
            },
            pagination: '.swiper-pagination',
            paginationType: 'bullets',
            parallax: false,
            slidesPerView: this.slidesPerView,
            spaceBetween: this.spaceBetween,
            speed: this.speed,
            zoom: false,
            nested: this.nested,
            slidesPerColumn: 1,
            slidesPerColumnFill: 'column',
            slidesPerGroup: 1,
            centeredSlides: this.centeredSlides,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            touchEventsTarget: 'container',
            autoplayDisableOnInteraction: true,
            autoplayStopOnLast: false,
            freeMode: false,
            freeModeMomentum: true,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: true,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: false,
            freeModeMinimumVelocity: 0.02,
            autoHeight: this.autoHeight,
            setWrapperSize: false,
            zoomMax: 3,
            zoomMin: 1,
            zoomToggle: true,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: true,
            onlyExternal: false,
            threshold: 0,
            touchMoveStopPropagation: true,
            touchReleaseOnEdges: false,
            iOSEdgeSwipeDetection: false,
            iOSEdgeSwipeThreshold: 20,
            paginationClickable: false,
            paginationHide: false,
            resistance: true,
            resistanceRatio: 0.85,
            watchSlidesProgress: this.watchSlidesProgress,
            watchSlidesVisibility: this.watchSlidesVisibility,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loopAdditionalSlides: 0,
            noSwiping: true,
            runCallbacksOnInit: true,
            controlBy: 'slide',
            controlInverse: false,
            coverflow: {
                rotate: 20,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            },
            flip: {
                slideShadows: true,
                limitRotation: true
            },
            cube: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            fade: {
                crossFade: false
            },
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            grabCursor: true
        };
        const eventOptions = {
            on: {
                slideChangeStart: () => {
                    this.ionSlideWillChange.emit;
                },
                slideChangeEnd: () => {
                    this.ionSlideDidChange.emit;
                },
                slideNextStart: () => {
                    this.ionSlideNextStart.emit;
                },
                slidePrevStart: () => {
                    this.ionSlidePrevStart.emit;
                },
                slideNextEnd: () => {
                    this.blurEnd();
                    this.ionSlideNextEnd.emit;
                },
                slidePrevEnd: () => {
                    this.blurEnd();
                    this.ionSlidePrevEnd.emit;
                },
                transitionStart: () => {
                    this.blurStart();
                    this.ionSlideTransitionStart.emit;
                },
                transitionEnd: () => {
                    this.blurEnd();
                    this.ionSlideTransitionEnd.emit;
                },
                sliderMove: () => {
                    this.ionSlideDrag.emit;
                },
                reachBeginning: () => {
                    this.ionSlideReachStart.emit;
                },
                reachEnd: () => {
                    this.blurEnd();
                    this.ionSlideReachEnd.emit;
                },
                touchStart: () => {
                    this.ionSlideTouchStart.emit;
                },
                touchEnd: () => {
                    this.ionSlideTouchEnd.emit;
                }
            }
        };
        return Object.assign({}, swiperOptions, this.options, eventOptions);
    }
    render() {
        return (h("stellar-blur", { class: "swiper-container", horizontal: this.blur },
            h("div", { class: "swiper-wrapper" },
                h("slot", null)),
            h("div", { class: {
                    'swiper-pagination': true,
                    hide: !this.pager
                } })));
    }
    static get is() { return "stellar-slides"; }
    static get properties() { return {
        "autoHeight": {
            "type": Boolean,
            "attr": "auto-height",
            "watchCallbacks": ["updateSwiperOptions"]
        },
        "blur": {
            "state": true
        },
        "centeredSlides": {
            "type": Boolean,
            "attr": "centered-slides",
            "watchCallbacks": ["updateSwiperOptions"]
        },
        "direction": {
            "type": String,
            "attr": "direction",
            "watchCallbacks": ["updateSwiperOptions"]
        },
        "ease": {
            "state": true
        },
        "effect": {
            "type": String,
            "attr": "effect",
            "reflectToAttr": true,
            "watchCallbacks": ["updateSwiperOptions"]
        },
        "el": {
            "elementRef": true
        },
        "getActiveIndex": {
            "method": true
        },
        "getPreviousIndex": {
            "method": true
        },
        "isBeginning": {
            "method": true
        },
        "isEnd": {
            "method": true
        },
        "length": {
            "method": true
        },
        "lockSwipes": {
            "method": true
        },
        "lockSwipeToNext": {
            "method": true
        },
        "lockSwipeToPrev": {
            "method": true
        },
        "loop": {
            "type": Boolean,
            "attr": "loop",
            "watchCallbacks": ["updateSwiperOptions"]
        },
        "nested": {
            "type": Boolean,
            "attr": "nested",
            "watchCallbacks": ["updateSwiperOptions"]
        },
        "options": {
            "type": "Any",
            "attr": "options",
            "watchCallbacks": ["updateSwiperOptions"]
        },
        "pager": {
            "type": Boolean,
            "attr": "pager"
        },
        "pagination": {
            "type": Boolean,
            "attr": "pagination",
            "watchCallbacks": ["updateSwiperOptions"]
        },
        "slideNext": {
            "method": true
        },
        "slidePrev": {
            "method": true
        },
        "slides": {
            "state": true
        },
        "slidesPerView": {
            "type": Number,
            "attr": "slides-per-view",
            "watchCallbacks": ["updateSwiperOptions"]
        },
        "slideTo": {
            "method": true
        },
        "spaceBetween": {
            "type": Number,
            "attr": "space-between"
        },
        "speed": {
            "type": Number,
            "attr": "speed",
            "watchCallbacks": ["updateSwiperOptions"]
        },
        "startAutoplay": {
            "method": true
        },
        "stopAutoplay": {
            "method": true
        },
        "update": {
            "method": true
        },
        "watchSlidesProgress": {
            "type": Boolean,
            "attr": "watch-slides-progress",
            "watchCallbacks": ["updateSwiperOptions"]
        },
        "watchSlidesVisibility": {
            "type": Boolean,
            "attr": "watch-slides-visibility",
            "watchCallbacks": ["updateSwiperOptions"]
        }
    }; }
    static get events() { return [{
            "name": "ionSlideWillChange",
            "method": "ionSlideWillChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlideDidChange",
            "method": "ionSlideDidChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlideNextStart",
            "method": "ionSlideNextStart",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlidePrevStart",
            "method": "ionSlidePrevStart",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlideNextEnd",
            "method": "ionSlideNextEnd",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlidePrevEnd",
            "method": "ionSlidePrevEnd",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlideTransitionStart",
            "method": "ionSlideTransitionStart",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlideTransitionEnd",
            "method": "ionSlideTransitionEnd",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlideDrag",
            "method": "ionSlideDrag",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlideReachStart",
            "method": "ionSlideReachStart",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlideReachEnd",
            "method": "ionSlideReachEnd",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlideTouchStart",
            "method": "ionSlideTouchStart",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSlideTouchEnd",
            "method": "ionSlideTouchEnd",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:stellar-slides:**/"; }
}
