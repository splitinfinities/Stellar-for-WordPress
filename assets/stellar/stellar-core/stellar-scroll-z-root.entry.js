import { r as registerInstance, h, g as getElement } from './index-cc4604b3.js';
import './colors-eb996d31.js';
import './_commonjsHelpers-bccf23a2.js';
import { p as properties } from './css-custom-properties.min-d9d14253.js';
import './index-26976b63.js';
import './main-e9832563.js';
import './moment-5e7e00c2.js';

const ScrollZRootCss = ":host {\n    contain: content;\n    height: calc(var(--sectionHeight) * 1px);\n    display: block;\n    opacity: calc(var(--cameraZ) + 1);\n    will-change: opacity;\n    transition: opacity 200ms ease 0s;\n}\n\n:host .container {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    perspective: calc(var(--scenePerspective) * var(--cameraSpeed) * 1px);\n    perspective-origin: calc(var(--scenePerspectiveOriginX) * 1%) calc(var(--scenePerspectiveOriginY) * 1%);\n    will-change: perspective-origin;\n    transform: translate3d(0, 0, 0);\n}\n\n:host .scene {\n    position: absolute;\n    top: 0;\n    height: 100vh;\n    width: 100%;\n    transform-style: preserve-3d;\n    transform: translateZ(calc(var(--cameraZ) * 1px));\n    will-change: transform;\n}\n\n:host ::slotted(stellar-scroll-z-section) {\n    position: absolute;\n    display: block;\n    width: 100%;\n    top: 40%;\n    z-index: 2;\n}\n\n@media only screen and (min-width: 600px) {\n    :host ::slotted(stellar-scroll-z-section) {\n        width: 45%;\n    }\n}\n";

const ScrollZRoot = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.initialOriginX = 50;
        this.initialOriginY = 30;
        this.itemZ = 10;
        this.cameraSpeed = 150;
        this.cameraZ = -1;
        this.scenePerspective = 1;
        this.distanceFromTop = 0;
        this.distanceFromBottom = 0;
        this.perspectiveOrigin = { x: 0, y: 0, maxGap: 10 };
    }
    randomFloat(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    componentWillLoad() {
        this.distanceFromTop = this.element.getBoundingClientRect().top;
        this.distanceFromBottom = this.element.getBoundingClientRect().bottom;
        this.prepare();
    }
    prepare() {
        this.sections = Array.from(this.element.querySelectorAll('stellar-scroll-z-section'));
        properties.set({
            '--scenePerspective': this.scenePerspective,
            '--scenePerspectiveOriginX': this.initialOriginX,
            '--scenePerspectiveOriginY': this.initialOriginY,
            '--itemZ': this.itemZ,
            '--cameraSpeed': this.cameraSpeed,
            '--cameraZ': this.cameraZ,
            '--sectionHeight': 0
        }, document.documentElement);
        this.perspectiveOrigin = {
            x: parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspectiveOriginX")),
            y: parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspectiveOriginY")),
            maxGap: 10
        };
        this.setSceneHeight();
        this.scatter();
    }
    async scatter() {
        this.sections.forEach((section, index) => {
            const x = `calc(${this.randomFloat(-30, 30)}rem + 50%)`;
            const y = `calc(${this.randomFloat(-30, 30)}rem + 50%)`;
            const z = `calc(var(--itemZ) * var(--cameraSpeed) * ${index} * -1px)`;
            section.style.setProperty('transform', `translate3D(${x}, ${y}, ${z})`);
        });
    }
    setSceneHeight() {
        const numberOfItems = this.sections.length;
        const itemZ = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--itemZ"));
        const scenePerspective = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scenePerspective"));
        const cameraSpeed = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed"));
        const height = window.innerHeight +
            scenePerspective * cameraSpeed +
            (itemZ / 2) * cameraSpeed * numberOfItems;
        document.documentElement.style.setProperty("--sectionHeight", `${height}`);
    }
    moveCamera() {
        this.distanceFromTop = this.element.getBoundingClientRect().top;
        this.distanceFromBottom = this.element.getBoundingClientRect().bottom;
        const offset = window.pageYOffset - this.distanceFromTop;
        if (offset >= 0) {
            document.documentElement.style.setProperty("--cameraZ", `${offset}`);
        }
        else {
            document.documentElement.style.setProperty("--cameraZ", `-1`);
        }
    }
    moveCameraAngle(event) {
        const xGap = (((event.clientX - window.innerWidth / 2) * 100) / (window.innerWidth / 2)) * -1;
        const yGap = (((event.clientY - window.innerHeight / 2) * 100) / (window.innerHeight / 2)) * -1;
        const newPerspectiveOriginX = this.perspectiveOrigin.x + (xGap * this.perspectiveOrigin.maxGap) / 100;
        const newPerspectiveOriginY = this.perspectiveOrigin.y + (yGap * this.perspectiveOrigin.maxGap) / 100;
        document.documentElement.style.setProperty("--scenePerspectiveOriginX", `${newPerspectiveOriginX}`);
        document.documentElement.style.setProperty("--scenePerspectiveOriginY", `${newPerspectiveOriginY}`);
    }
    render() {
        return h("div", { class: "container" }, h("div", { class: "scene" }, h("slot", null)));
    }
    get element() { return getElement(this); }
    static get style() { return ScrollZRootCss; }
};

export { ScrollZRoot as stellar_scroll_z_root };
