import '../../../stencil.core';
export declare class Breadcrumbs {
    el: HTMLElement;
    icon: string;
    icon_src: string;
    icon_size: number;
    home: string;
    label: string;
    description: string;
    color: string;
    componentWillLoad(): void;
    updateBreadcrumbs(): void;
    render(): JSX.Element;
}
