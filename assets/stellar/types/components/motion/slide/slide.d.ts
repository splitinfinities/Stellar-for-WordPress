import { EventEmitter } from '@stencil/core';
export declare class Slide {
    el: HTMLElement;
    slideId: number;
    width: string;
    swiper: boolean;
    visible: boolean;
    switched: EventEmitter;
    componentWillLoad(): void;
    onVisible(): void;
    in(): void;
    out(): void;
    render(): any;
}
