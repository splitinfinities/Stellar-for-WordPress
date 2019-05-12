import '../../../stencil.core';
import { EventEmitter } from '../../../stencil.core';
export declare class Switch {
    el: HTMLElement;
    checked: boolean;
    checkedDefault: boolean;
    change: EventEmitter;
    componentDidLoad(): void;
    activate(): Promise<void>;
    handleChecked(): void;
    render(): JSX.Element;
}
