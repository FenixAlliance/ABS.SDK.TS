/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BillingProfileCreateDto = {
    readonly id?: string;
    readonly timestamp?: string;
    contactId?: string | null;
    tenantId?: string | null;
    taxId: string;
    phone: string;
    email: string;
    address: string;
    address1?: string | null;
    address2?: string | null;
    postalCode: string;
    businessName: string;
    commercialName: string;
    ticker?: string | null;
    duns?: string | null;
    isPublicCompany?: boolean;
    isFactaCustomer?: boolean;
    countryId: string;
    stateId: string;
    cityId: string;
    fiscalIdentificationTypeId: string;
    fiscalAuthorityId: string;
    fiscalRegimeId: string;
};

