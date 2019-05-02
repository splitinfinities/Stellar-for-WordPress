import '../../../stencil.core';
export declare class Steps {
    element: HTMLElement;
    name: string;
    stepsList: Array<HTMLStellarStepElement>;
    contentsList: Array<HTMLStellarContentElement>;
    steps(): HTMLStellarStepElement[];
    contents(): HTMLStellarContentElement[];
    componentWillLoad(): void;
    render(): JSX.Element;
}
