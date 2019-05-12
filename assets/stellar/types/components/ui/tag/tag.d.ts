import '../../../stencil.core';
export declare class Tag {
    element: HTMLElement;
    size: string;
    pill: boolean;
    outline: boolean;
    color: string;
    textColor: string;
    componentWillLoad(): void;
    render(): JSX.Element;
}
