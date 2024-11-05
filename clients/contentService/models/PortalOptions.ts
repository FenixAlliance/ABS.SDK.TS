/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BackgroundOptions } from './BackgroundOptions';
import type { BlogOptions } from './BlogOptions';
import type { BrandingOptions } from './BrandingOptions';
import type { BreadcrumbsOptions } from './BreadcrumbsOptions';
import type { CodeFieldsOptions } from './CodeFieldsOptions';
import type { ColorOptions } from './ColorOptions';
import type { ContactOptions } from './ContactOptions';
import type { DashboardOptions } from './DashboardOptions';
import type { EmailsOptions } from './EmailsOptions';
import type { FeaturesOptions } from './FeaturesOptions';
import type { FooterOptions } from './FooterOptions';
import type { FormsOptions } from './FormsOptions';
import type { ForumOptions } from './ForumOptions';
import type { GridOptions } from './GridOptions';
import type { HeaderOptions } from './HeaderOptions';
import type { IntegrationsOptions } from './IntegrationsOptions';
import type { LayoutOptions } from './LayoutOptions';
import type { LightboxOptions } from './LightboxOptions';
import type { MansoryOptions } from './MansoryOptions';
import type { MenuOptions } from './MenuOptions';
import type { MiscellaneousOptions } from './MiscellaneousOptions';
import type { PaginationOptions } from './PaginationOptions';
import type { PerformanceOptions } from './PerformanceOptions';
import type { PortfolioOptions } from './PortfolioOptions';
import type { PrivacyOptions } from './PrivacyOptions';
import type { ResponsiveOptions } from './ResponsiveOptions';
import type { SearchOptions } from './SearchOptions';
import type { SeoOptions } from './SeoOptions';
import type { SidebarOptions } from './SidebarOptions';
import type { SliderOptions } from './SliderOptions';
import type { SlideshowOptions } from './SlideshowOptions';
import type { SlidingBarOptions } from './SlidingBarOptions';
import type { SocialMediaOptions } from './SocialMediaOptions';
import type { StoreOptions } from './StoreOptions';
import type { ThemingOptions } from './ThemingOptions';
import type { TitleBarOptions } from './TitleBarOptions';
import type { TypographyOptions } from './TypographyOptions';
export type PortalOptions = {
    title?: string | null;
    description?: string | null;
    portalUiEngine?: PortalOptions.portalUiEngine;
    seo?: SeoOptions;
    store?: StoreOptions;
    theming?: ThemingOptions;
    branding?: BrandingOptions;
    social?: SocialMediaOptions;
    privacy?: PrivacyOptions;
    blog?: BlogOptions;
    forums?: ForumOptions;
    footer?: FooterOptions;
    background?: BackgroundOptions;
    breadcrumbs?: BreadcrumbsOptions;
    contact?: ContactOptions;
    color?: ColorOptions;
    dashboard?: DashboardOptions;
    header?: HeaderOptions;
    titleBar?: TitleBarOptions;
    typography?: TypographyOptions;
    socialMedia?: SocialMediaOptions;
    slidingBar?: SlidingBarOptions;
    slideshow?: SlideshowOptions;
    slider?: SliderOptions;
    sidebar?: SidebarOptions;
    search?: SearchOptions;
    responsive?: ResponsiveOptions;
    portfolio?: PortfolioOptions;
    performance?: PerformanceOptions;
    pagination?: PaginationOptions;
    miscellaneous?: MiscellaneousOptions;
    menu?: MenuOptions;
    grid?: GridOptions;
    mansory?: MansoryOptions;
    lightbox?: LightboxOptions;
    layout?: LayoutOptions;
    codeFields?: CodeFieldsOptions;
    features?: FeaturesOptions;
    forms?: FormsOptions;
    integrations?: IntegrationsOptions;
    emails?: EmailsOptions;
};
export namespace PortalOptions {
    export enum portalUiEngine {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

