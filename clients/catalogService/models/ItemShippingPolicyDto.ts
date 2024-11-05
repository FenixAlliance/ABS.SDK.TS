/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ItemShippingPolicyDto = {
    id?: string | null;
    timestamp?: string | null;
    isExpressShipmentPolicy?: boolean;
    shippingCourierID: string;
    type: string;
    code: string;
    title: string;
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
    currencyID: string;
    countryID?: string | null;
    countryStateID?: string | null;
    customState?: string | null;
    customCity?: string | null;
    cityID?: string | null;
    businessID: string;
    businessProfileRecordID?: string | null;
};

