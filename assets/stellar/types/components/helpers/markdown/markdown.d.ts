export declare class Markdown {
    element: HTMLElement;
    src: string;
    codeString: string;
    converted: string;
    raw: string;
    showdown: any;
    componentWillLoad(): void;
    onCodeStringChange(): void;
    onSrcChange(): void;
    convert(): void;
    getMarkdown(): void;
    convertMarkdown(): void;
    replaceAll(str: any, find: any, replace: any): any;
    fetchMarkdown(): Promise<void>;
    render(): any[];
}
