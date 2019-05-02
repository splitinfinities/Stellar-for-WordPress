import '../../../stencil.core';
import { EventEmitter } from '../../../stencil.core';
export declare class Tab {
    element: HTMLElement;
    href: string;
    tag: string;
    disabled: boolean;
    open: boolean;
    notifications: boolean | number;
    order: number;
    tabCount: number;
    parent: any;
    contentChange: EventEmitter;
    componentWillLoad(): void;
    handleResize(): void;
    componentDidLoad(): void;
    handleClick(e: any): Promise<void>;
    handleIndicatorPosition(): void;
    renderNotifications(): JSX.Element;
    renderTitle(): JSX.Element;
    render(): JSX.Element;
}
