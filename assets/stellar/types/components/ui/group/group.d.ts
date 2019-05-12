import '../../../stencil.core';
export declare class Group {
    element: HTMLElement;
    size: string;
    overflow: boolean;
    count: number;
    extras: Array<Element>;
    componentWillLoad(): void;
    resultantExtras(): JSX.Element[];
    render(): JSX.Element[];
}
