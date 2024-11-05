/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppleIcons } from './AppleIcons';
import type { DashboardOptions } from './DashboardOptions';
import type { Favicons } from './Favicons';
import type { Logo } from './Logo';
import type { MSAppTile } from './MSAppTile';
import type { StudioOptions } from './StudioOptions';
export type BrandingOptions = {
    defaultLang?: string | null;
    primaryColor?: string | null;
    secondaryColor?: string | null;
    headerLogo?: Logo;
    footerLogo?: Logo;
    favicons?: Favicons;
    appleIcon?: AppleIcons;
    msAppTile?: MSAppTile;
    dashboard?: DashboardOptions;
    studio?: StudioOptions;
};

