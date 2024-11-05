/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Background } from './Background';
import type { Padding } from './Padding';
import type { Typography } from './Typography';
export type FooterOptions = {
    numberOfColumns?: number;
    enableWidgets?: boolean;
    enableCopyrightBar?: boolean;
    centerWidgetsContent?: boolean;
    centerCopyrightContent?: boolean;
    enableVerticalWidgetDividerLine?: boolean;
    verticalWidgetDividerLineSize?: number;
    copyrightText?: string | null;
    copyrightBackgroundColor?: string | null;
    borderSize?: number;
    borderColor?: string | null;
    widgetDividerColor?: string | null;
    widgetDivider?: FooterOptions.widgetDivider;
    copyrightPadding?: Padding;
    widgetsAreaPadding?: Padding;
    footerAreaPadding?: Padding;
    footerBackground?: Background;
    copyrightBackground?: Background;
    headingsTypography?: Typography;
    widgetsTypography?: Typography;
    copyrightTypography?: Typography;
};
export namespace FooterOptions {
    export enum widgetDivider {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
    }
}

