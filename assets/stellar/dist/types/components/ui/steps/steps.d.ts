import '../../../stencil.core';
export declare class Steps {
    element: HTMLElement;
    name: string;
    stepsList: Array<HTMLStellarStepElement>;
    contentsList: Array<HTMLStellarContentElement>;
    steps(): Promise<HTMLStellarStepElement[]>;
    contents(): Promise<HTMLStellarContentElement[]>;
    componentWillLoad(): Promise<void>;
    render(): JSX.Element;
}
