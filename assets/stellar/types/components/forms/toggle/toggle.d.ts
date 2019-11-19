import { EventEmitter } from "../../../stencil.core";
export declare class Toggle {
    element: HTMLElement;
    form: HTMLElement;
    type: string | "checkbox" | "radio" | "radio-block" | "checkbox-block";
    name: string;
    description: string;
    stacked: boolean;
    flip: boolean;
    required: boolean;
    single: boolean;
    size: string;
    novalidate: boolean;
    card: any;
    label: string;
    value: string | string[];
    valid: boolean;
    error: string;
    status: any;
    change: EventEmitter;
    componentWillLoad(): void;
    validate(): Promise<FormResult>;
    toggleChangedHandler(event: CustomEvent): void;
    updateChecked(): void;
    renderValidation(): any;
    renderBlock(): any;
    renderPlain(): any[];
    render(): any[];
}
