/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GoogleAnalytics } from './GoogleAnalytics';
import type { GoogleMapsIntegrationOptions } from './GoogleMapsIntegrationOptions';
import type { GoogleMerchantCenterIntegrationOptions } from './GoogleMerchantCenterIntegrationOptions';
import type { GoogleMyBusinessIntegrationOptions } from './GoogleMyBusinessIntegrationOptions';
import type { GoogleRecaptchaIntegrationOptions } from './GoogleRecaptchaIntegrationOptions';
import type { GoogleTagManagerIntegrationOptions } from './GoogleTagManagerIntegrationOptions';
export type GoogleIntegrationOptions = {
    enable?: boolean;
    googleMaps?: GoogleMapsIntegrationOptions;
    googleMerchantCenter?: GoogleMerchantCenterIntegrationOptions;
    googleTagManager?: GoogleTagManagerIntegrationOptions;
    googleRecaptcha?: GoogleRecaptchaIntegrationOptions;
    googleAnalytics?: GoogleAnalytics;
    googleMyBusiness?: GoogleMyBusinessIntegrationOptions;
};

