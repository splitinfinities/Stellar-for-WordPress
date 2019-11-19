import { EventEmitter } from '../../../stencil.core';
export declare class Grid {
    element: HTMLElement;
    cols: number | string;
    compact: boolean;
    padding: boolean;
    align: string;
    noresponsive: boolean;
    swappable: boolean;
    swappableSelector: string;
    orderChanged: EventEmitter;
    order: string[];
    __swappable: any;
    makeResponsive(): Promise<void>;
    makeSwappable(): Promise<void>;
    updateOrder(): Promise<void>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    refresh(): Promise<void>;
    render(): any;
}
