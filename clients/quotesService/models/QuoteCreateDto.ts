/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type QuoteCreateDto = {
    readonly id?: string;
    readonly timestamp?: string;
    closed?: boolean;
    title?: string | null;
    userId?: string | null;
    tenantId?: string | null;
    priceListId?: string | null;
    description?: string | null;
    enrollmentId?: string | null;
    individualId?: string | null;
    paymentTermId?: string | null;
    organizationId?: string | null;
    currencyId?: string | null;
    forexRate?: number;
    firstName?: string | null;
    lastName?: string | null;
    companyName?: string | null;
    billingEmail?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    postalCode?: string | null;
    countryId?: string | null;
    stateId?: string | null;
    cityId?: string | null;
    cartId?: string | null;
    dealUnitId?: string | null;
    receiverTenantId?: string | null;
    effectiveTo?: string | null;
    effectiveFrom?: string | null;
    quoteStatus?: QuoteCreateDto.quoteStatus;
};
export namespace QuoteCreateDto {
    export enum quoteStatus {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
}

