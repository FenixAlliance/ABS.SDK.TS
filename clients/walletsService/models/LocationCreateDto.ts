/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LocationCreateDto = {
    readonly id?: string;
    readonly timestamp?: string;
    title?: string | null;
    email?: string | null;
    phone?: string | null;
    fax?: string | null;
    address1?: string | null;
    address2?: string | null;
    address3?: string | null;
    unit?: string | null;
    cityId?: string | null;
    stateId?: string | null;
    postalCode?: string | null;
    countryId?: string | null;
    tenantId?: string | null;
    longitude?: number;
    latitude?: number;
    isRoutable?: boolean;
    isGlobalPrimary?: boolean;
    isCountryPrimary?: boolean;
    canGenerateLabels?: boolean;
    isDefaultSenderAddress?: boolean;
    isDefaultReturnAddress?: boolean;
    isDefaultSuppingLocation?: boolean;
};

