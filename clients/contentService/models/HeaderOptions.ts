/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Padding } from './Padding';
export type HeaderOptions = {
    headerPadding?: Padding;
    headerBackgroundImageURL?: string | null;
    headerBackgroundColor?: string | null;
    headerBorderColor?: string | null;
    enableStickyHeader?: boolean;
    enableHeaderShadow?: boolean;
    enableFullWidthHeader?: boolean;
    headerLayout?: HeaderOptions.headerLayout;
    headerPosition?: HeaderOptions.headerPosition;
    topHeaderContentType2?: HeaderOptions.topHeaderContentType2;
    topHeaderContentType1?: HeaderOptions.topHeaderContentType1;
    topHeaderBackgroundColor?: string | null;
    topHeaderContent1?: string | null;
    topHeaderContent2?: string | null;
};
export namespace HeaderOptions {
    export enum headerLayout {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
    }
    export enum headerPosition {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
    export enum topHeaderContentType2 {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
    export enum topHeaderContentType1 {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
}

