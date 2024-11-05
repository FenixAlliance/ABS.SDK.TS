/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TaxCalculationOptions = {
    enableTaxes?: boolean;
    roundTaxesAtSubtotalLevel?: boolean;
    displayPriceSuffix?: string | null;
    displayPricePrefix?: string | null;
    standardRates?: Array<string> | null;
    zeroRateRates?: Array<string> | null;
    reducedRateRates?: Array<string> | null;
    additionalTaxClasses?: Record<string, Array<string> | null> | null;
};

