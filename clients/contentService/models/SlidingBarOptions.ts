/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Padding } from './Padding';
export type SlidingBarOptions = {
    position?: SlidingBarOptions.position;
    contentPadding?: Padding;
    contentAlignment?: SlidingBarOptions.contentAlignment;
    columnsCount?: number;
    enableSticky?: boolean;
    openOnPageLoad?: boolean;
    enableOnMobile?: boolean;
    enableOnDesktop?: boolean;
};
export namespace SlidingBarOptions {
    export enum position {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }
    export enum contentAlignment {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

