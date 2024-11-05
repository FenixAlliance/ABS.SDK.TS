/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BillingProfileDto = {
    id?: string | null;
    timestamp?: string;
    tenantId?: string | null;
    contactId?: string | null;
    enrollmentId?: string | null;
    about?: string | null;
    verified?: boolean;
    submitted?: boolean;
    avatarUrl?: string | null;
    qualifiedName?: string | null;
    verificationTimestamp?: string | null;
    data?: string | null;
    dataLabel?: string | null;
    data1?: string | null;
    data1Label?: string | null;
    data2?: string | null;
    data2Label?: string | null;
    data3?: string | null;
    data3Label?: string | null;
    data4?: string | null;
    data4Label?: string | null;
    data5?: string | null;
    data5Label?: string | null;
    data6?: string | null;
    data6Label?: string | null;
    data7?: string | null;
    data7Label?: string | null;
    data8?: string | null;
    data8Label?: string | null;
    data9?: string | null;
    data9Label?: string | null;
    taxId: string;
    email: string;
    phone?: string | null;
    address?: string | null;
    address1?: string | null;
    address2?: string | null;
    postalCode?: string | null;
    businessName?: string | null;
    commercialName?: string | null;
    ticker?: string | null;
    duns?: string | null;
    isPublicCompany?: boolean;
    isFactaCustomer?: boolean;
    taxPayerType?: BillingProfileDto.taxPayerType;
    countryId: string;
    stateId?: string | null;
    cityId?: string | null;
    fiscalIdentificationTypeId?: string | null;
    fiscalAuthorityId?: string | null;
    fiscalRegimeId?: string | null;
    contactName?: string | null;
    fiscalAuthorityName?: string | null;
    countryName?: string | null;
};
export namespace BillingProfileDto {
    export enum taxPayerType {
        '_0' = 0,
        '_1' = 1,
    }
}

