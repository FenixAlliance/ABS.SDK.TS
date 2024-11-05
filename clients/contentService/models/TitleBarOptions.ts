/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TitleBarOptions = {
    enableFadingAnimations?: boolean;
    enablePageTitleBarHeadings?: boolean;
    enableFullWidthPageTitleBar?: boolean;
    enableBackgroundImageParallax?: boolean;
    enableFullWidthBackgroundImage?: boolean;
    backgroundImageURL?: string | null;
    retinaBackgroundImageURL?: string | null;
    backgroundColor?: string | null;
    bordersColor?: string | null;
    headingFontColor?: string | null;
    headingFontSize?: string | null;
    headingLineHeight?: string | null;
    subheadingFontColor?: string | null;
    subheadingFontSize?: string | null;
    pageTitleBar?: TitleBarOptions.pageTitleBar;
    pageTitleBarContent?: TitleBarOptions.pageTitleBarContent;
    pageTitleBarTextAlignment?: TitleBarOptions.pageTitleBarTextAlignment;
};
export namespace TitleBarOptions {
    export enum pageTitleBar {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
    export enum pageTitleBarContent {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
    export enum pageTitleBarTextAlignment {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

