/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdvancedOptions } from './AdvancedOptions';
import type { CartOptions } from './CartOptions';
import type { CouponsOptions } from './CouponsOptions';
import type { DownloadablesOptions } from './DownloadablesOptions';
import type { EmailOptions } from './EmailOptions';
import type { IdentityAndPrivacyOptions } from './IdentityAndPrivacyOptions';
import type { IntegrationOptions } from './IntegrationOptions';
import type { InventoryOptions } from './InventoryOptions';
import type { MeasurementOptions } from './MeasurementOptions';
import type { PaymentOptions } from './PaymentOptions';
import type { PriceCalculationOptions } from './PriceCalculationOptions';
import type { ProductOptions } from './ProductOptions';
import type { RecommendationOptions } from './RecommendationOptions';
import type { ReviewsOptions } from './ReviewsOptions';
import type { ServicesOptions } from './ServicesOptions';
import type { SubscriptionsOptions } from './SubscriptionsOptions';
import type { TaxCalculationOptions } from './TaxCalculationOptions';
export type StoreOptions = {
    enable?: boolean;
    name?: string | null;
    logo?: string | null;
    footerLogo?: string | null;
    tagline?: string | null;
    description?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    cityID?: string | null;
    countryStateID?: string | null;
    countryID?: string | null;
    currencyID?: string | null;
    postalCode?: string | null;
    numberOfDecimals?: number;
    decimalSeparator?: string | null;
    sellToAllCountries?: boolean;
    cartOptions?: CartOptions;
    emailOptions?: EmailOptions;
    couponsOptions?: CouponsOptions;
    paymentOptions?: PaymentOptions;
    productOptions?: ProductOptions;
    reviewsOptions?: ReviewsOptions;
    advancedOptions?: AdvancedOptions;
    servicesOptions?: ServicesOptions;
    inventoryOptions?: InventoryOptions;
    integrationOptions?: IntegrationOptions;
    measurementOptions?: MeasurementOptions;
    downloadablesOptions?: DownloadablesOptions;
    subscriptionsOptions?: SubscriptionsOptions;
    taxCalculationOptions?: TaxCalculationOptions;
    recommendationOptions?: RecommendationOptions;
    priceCalculationOptions?: PriceCalculationOptions;
    identityAndPrivacyOptions?: IdentityAndPrivacyOptions;
    includedSellingLocations?: Array<string> | null;
    excludedSellingLocations?: Array<string> | null;
    includedShippingLocations?: Array<string> | null;
    excludedShippingLocations?: Array<string> | null;
    currencyPosition?: StoreOptions.currencyPosition;
};
export namespace StoreOptions {
    export enum currencyPosition {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }
}

