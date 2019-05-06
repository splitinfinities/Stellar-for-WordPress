import '../../../stencil.core';
import { EventEmitter } from '../../../stencil.core';
import { ResizeObserver } from '../../../utils';
export declare class Card {
    element: HTMLElement;
    /**
     * Renders a shadow on the card
     */
    shadow: string | "light" | "medium" | "heavy";
    /**
     * Let's a card be flippable
     */
    flippable: boolean;
    /**
     * Renders a flipped card
     */
    flipped: boolean;
    /**
     * Sets the padding inside of the button. Can be small, medium, or large.
     */
    padding: string | "small" | "medium" | "large";
    /**
     * Sets the element to render the card as - an anchor tag, a button, or a div.
     */
    tag: "stencil-route-link" | "a" | "button" | "div";
    /**
     * Sets the element to render the card as - an anchor tag, a button, or a div.
     */
    type: string;
    /**
     * Sets the href if the card is a link.
     */
    href: string;
    /**
     * Sets the name if the card is a button.
     */
    name: string;
    /**
     * Sets the value if the card is a button.
     */
    value: string;
    /**
     * Sets the href on the anchor tag if the button is a link.
     */
    for: string;
    /**
     * Sets the href on the anchor tag if the button is a link.
     */
    flip_icon: string;
    width: number;
    height: number;
    middleX: number;
    middleY: number;
    rotationLimit: number;
    ro: ResizeObserver;
    transition: boolean;
    flip: EventEmitter;
    refresh(): void;
    componentDidLoad(): void;
    addResizeObserver(): void;
    updateFlippableCardHeight(): void;
    addRotation(): void;
    animateRotation(event: any): Promise<void>;
    removeRotation(): Promise<void>;
    click(e?: UIEvent): Promise<boolean>;
    flip_card(e?: UIEvent): Promise<void>;
    render(): JSX.Element;
}
