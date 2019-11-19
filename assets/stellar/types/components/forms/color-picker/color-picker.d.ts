import { EventEmitter } from '../../../stencil.core';
export declare class ColorPicker {
    element: HTMLElement;
    val: string;
    notransparent: boolean;
    options: Array<string>;
    change: EventEmitter;
    componentWillLoad(): void;
    valueChangedHandler(val: string): void;
    updateValue(color: any): void;
    render(): any;
}
