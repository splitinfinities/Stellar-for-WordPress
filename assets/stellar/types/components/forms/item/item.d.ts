import { EventEmitter } from '../../../stencil.core';
import { RouterHistory, LocationSegments } from '@stencil/router';
export declare class Item {
    element: HTMLElement;
    size: string;
    value: string;
    valueLabel: string;
    type: "a" | "button" | "stencil-route-link";
    label: string;
    href: string;
    wrap: boolean;
    fit: boolean;
    simple: boolean;
    danger: boolean;
    selected: boolean;
    multiple: boolean;
    selectable: boolean;
    focused: boolean;
    route: boolean;
    history: RouterHistory;
    location: LocationSegments;
    current: boolean;
    slotted: any;
    selectionChanged: EventEmitter;
    mounted: EventEmitter;
    focusChanged: EventEmitter;
    blurChanged: EventEmitter;
    componentWillLoad(): void;
    componentDidLoad(): void;
    data(): Promise<{
        size: string;
        value: string;
        type: "a" | "button" | "stencil-route-link";
        label: string;
        danger: boolean;
        slotted: any;
    }>;
    apply(data: any): Promise<void>;
    setFocus(): Promise<void>;
    handleClick(e: any): void;
    handleFocus(): void;
    handleBlur(): void;
    classes(): string;
    select_item(state?: {
        selected: boolean;
    }): Promise<void>;
    render(): any;
}
