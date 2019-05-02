import '../../../stencil.core';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';
export declare class Code {
    element: HTMLElement;
    language: string;
    simple: boolean;
    codeString: string;
    copy: boolean;
    copied: boolean;
    expanded: boolean;
    expandable: boolean;
    randomName: number;
    observer: MutationObserver;
    preview: boolean;
    feature: boolean;
    code: string;
    raw: string;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentWillUpdate(): void;
    componentDidUpdate(): void;
    replaceAll(str: any, find: any, replace: any): any;
    highlight(): void;
    result(): Promise<string>;
    clipboard(): Promise<void>;
    setCode(code: any): void;
    getCode(): void;
    renderPreview(): JSX.Element;
    renderCode(): JSX.Element;
    render(): JSX.Element;
}
