import '../../../stencil.core';
import { EventEmitter } from '../../../stencil.core';
export declare class Progress {
    element: HTMLElement;
    /**
     * Renders if this element is slender or not
     */
    slender: boolean;
    /**
     * Sets the maximum cap for steps in the progress bar
     */
    max: number;
    /**
     * Allows the progress bar to be clicked on, to help the user to navigate through the progressing content.
     */
    editable: boolean;
    /**
     * eliminates the easing in the css so you can apply value updates without jitter.
     */
    noease: boolean;
    /**
     * eliminates the easing in the css so you can apply value updates without jitter.
     */
    rounded: boolean;
    /**
     * Sets the value of the progress bar
     */
    value: number;
    blurable: boolean;
    wrapper: "stellar-blur" | "div";
    blur: number;
    ease: TweenInstance;
    valueChange: EventEmitter;
    componentWillLoad(): void;
    observeValue(): void;
    handleClick(e: any): void;
    progress(): number;
    render(): JSX.Element;
}
