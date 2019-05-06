import { EventEmitter } from '../../../stencil.core';
export declare class Select {
    element: HTMLElement;
    name: string | boolean;
    label: string;
    placeholder: string;
    description: string;
    tooltip: string;
    inline: boolean;
    multiple: boolean;
    other: boolean;
    placeholderInverted: boolean;
    size: string;
    required: boolean;
    processing: boolean;
    focused: boolean;
    open: boolean;
    footer: boolean;
    novalidate: boolean;
    verbiage: string;
    verbiageAn: boolean;
    overlay: boolean;
    value: Array<string> | string;
    valueLabel: string;
    default: any;
    current: any;
    status: FormResult;
    blur: number;
    observer: MutationObserver;
    clear_confirm: boolean;
    values: Array<string>;
    change: EventEmitter;
    componentWillLoad(): void;
    componentDidLoad(): Promise<void>;
    clearValue(): Promise<void>;
    handleOpenChange(): void;
    handleMultipleChange(value: any): Promise<void>;
    mountedHandler(event: CustomEvent): Promise<void>;
    selectionChangedHandler(event: CustomEvent): Promise<void>;
    selectedFocusChangedHandler(): void;
    selectedBlurChangedHandler(): void;
    handleTitleFocus(): void;
    handleTitleBlur(): void;
    handleNotClick(e: any): void;
    handleEscapeKey(event: any): void;
    handleArrowKeys(ev: KeyboardEvent): void;
    readable_value(): string;
    validate(): Promise<FormResult>;
    listen_to_values(): void;
    update_values(): Promise<void>;
    option_elements(): Promise<NodeListOf<HTMLStellarItemElement>>;
    options(): Promise<Array<string>>;
    focusPaths(): Promise<{
        previous: any;
        current: any;
        next: any;
    }>;
    focusFirstItem(): void;
    focusElement(element: any): void;
    focusNextOption(): Promise<void>;
    focusPreviousOption(): Promise<void>;
    closeOthers(): void;
    handleTitleClick(): void;
    renderLabel(): any;
    renderErrors(): any;
    renderEmptyButton(): any;
    render(): any;
}