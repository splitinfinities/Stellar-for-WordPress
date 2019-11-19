'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stellar-core-f620c3d3.js');
require('./chunk-ee96ca86.js');
const __chunk_3 = require('./chunk-61a48f92.js');
require('./chunk-73f3d344.js');
require('./chunk-73f7b312.js');
require('./chunk-e87c7d7e.js');

class ScrollZRoot {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
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
        __chunk_3.properties.set({
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
        this.sections.forEach((section, index) => {
            const x = `${this.randomFloat(-40, 150)}%`;
            const y = `${this.randomFloat(-100, 100)}%`;
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
        return __chunk_1.h("div", { class: "container" }, __chunk_1.h("div", { class: "scene" }, __chunk_1.h("slot", null)));
    }
    get element() { return __chunk_1.getElement(this); }
    static get style() { return ":host{height:calc(var(--sectionHeight) * 1px);display:block;opacity:calc(var(--cameraZ) + 1);will-change:opacity;-webkit-transition:opacity .2s ease 0s;transition:opacity .2s ease 0s}:host .container{position:fixed;top:0;left:0;width:100%;height:100%;-webkit-perspective:calc(var(--scenePerspective) * var(--cameraSpeed) * 1px);perspective:calc(var(--scenePerspective) * var(--cameraSpeed) * 1px);-webkit-perspective-origin:calc(var(--scenePerspectiveOriginX) * 1%) calc(var(--scenePerspectiveOriginY) * 1%);perspective-origin:calc(var(--scenePerspectiveOriginX) * 1%) calc(var(--scenePerspectiveOriginY) * 1%);will-change:perspective-origin;-webkit-transform:translateZ(0);transform:translateZ(0)}:host .scene{position:absolute;top:0;height:100vh;width:100%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translateZ(calc(var(--cameraZ) * 1px));transform:translateZ(calc(var(--cameraZ) * 1px));will-change:transform}:host ::slotted(stellar-scroll-z-section){position:absolute;display:block;width:100%;top:40%}\@media only screen and (min-width:600px){:host ::slotted(stellar-scroll-z-section){width:45%}}"; }
}

exports.stellar_scroll_z_root = ScrollZRoot;
