export declare class Group {
    element: HTMLElement;
    size: string;
    overflow: boolean;
    count: number;
    extras: Array<Element>;
    componentWillLoad(): void;
    resultantExtras(): any[];
    render(): any[];
}
