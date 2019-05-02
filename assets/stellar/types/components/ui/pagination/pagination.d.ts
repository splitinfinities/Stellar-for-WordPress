import '../../../stencil.core';
import { EventEmitter } from '../../../stencil.core';
export declare class Pagination {
    element: HTMLElement;
    /**
     * Public: Sets the max cap of pages you can skip through
     */
    pages: number;
    type: "full" | "compact";
    current: number;
    padding: number;
    color: string;
    url: any;
    __surroundingPages: any;
    __current: number;
    __first: number;
    __previous: number | boolean;
    __next: number | boolean;
    __last: number;
    blur: number;
    ease: TweenInstance;
    __firstPageUrl(): string;
    __previousPageUrl(): string;
    __nextPageUrl(): string;
    __lastPageUrl(): string;
    changed: EventEmitter;
    currentObserver(current: number): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    affixDistance(): void;
    updateSurroundingPages(): void;
    isVisible(number: any): boolean;
    handleChange(event: Event): void;
    handleClick(event: UIEvent): void;
    formatUrl(pageNumber: any): any;
    renderFirstPageButton(): JSX.Element;
    renderPreviousPageButton(): JSX.Element;
    renderNextPageButton(): JSX.Element;
    renderLastPageButton(): JSX.Element;
    renderPagesList(): any;
    renderPagesPreviousEllipsis(): JSX.Element;
    renderPagesNextEllipsis(): JSX.Element;
    render(): JSX.Element;
}
