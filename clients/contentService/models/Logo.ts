/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Margin } from './Margin';
export type Logo = {
    margin?: Margin;
    alignment?: Logo.alignment;
    width?: number | null;
    height?: number | null;
    maxWidth?: number | null;
    maxHeight?: number | null;
    customLinkURL?: string | null;
    backgroundColor?: string | null;
    defaltLogoURL?: string | null;
    defaltRetinaLogoURL?: string | null;
    defaltStickyLogoURL?: string | null;
    defaltStickyRetinaLogoURL?: string | null;
    defaltMobileLogoURL?: string | null;
    defaltMobileRetinaLogoURL?: string | null;
    footer?: string | null;
    header?: string | null;
};
export namespace Logo {
    export enum alignment {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

