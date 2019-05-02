import '../../../stencil.core';
import { EventEmitter } from '../../../stencil.core';
export declare class Form {
    element: HTMLElement;
    ajax: boolean;
    action: string;
    method: string;
    acceptCharset: string;
    autocomplete: string;
    enctype: string;
    name: string;
    novalidate: boolean;
    target: string;
    selectors: Array<string>;
    submit: EventEmitter;
    handleEnter(): void;
    register(selectors: string[]): Promise<void>;
    refresh(): Promise<void>;
    state(): Promise<{
        els: any;
        json: any;
        results: FormResult[];
        formData: any;
        valid: boolean;
    }>;
    submit_form(): Promise<void>;
    render(): JSX.Element;
}
