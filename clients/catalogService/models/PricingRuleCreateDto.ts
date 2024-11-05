/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PricingRuleCreateDto = {
    readonly id?: string;
    readonly timestamp?: string;
    code?: string | null;
    title?: string | null;
    description?: string | null;
    isFree?: boolean;
    reduce?: boolean;
    isEnabled?: boolean;
    isDefault?: boolean;
    allowInternational?: boolean;
    hours?: number;
    days?: number;
    weeks?: number;
    months?: number;
    years?: number;
    value?: number;
    percentage?: number;
    currencyID?: string | null;
    countryID?: string | null;
    countryStateID?: string | null;
    customState?: string | null;
    customCity?: string | null;
    cityID?: string | null;
    businessID?: string | null;
    businessProfileRecordID?: string | null;
};

