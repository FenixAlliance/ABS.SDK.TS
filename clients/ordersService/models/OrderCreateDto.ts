/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type OrderCreateDto = {
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
    quoteId?: string | null;
    walletId?: string | null;
    parentOrderId?: string | null;
    shippingMethodId?: string | null;
    billingLocationId?: string | null;
    customerNotes?: string | null;
    orderStatus?: OrderCreateDto.orderStatus;
    quoteStatus?: OrderCreateDto.quoteStatus;
    freightTerms?: OrderCreateDto.freightTerms;
    receiverTenantId?: string | null;
    shippingLocationId?: string | null;
    qualifiedIdentifier?: string | null;
    totalTaxesInUsd?: number;
    totalAmountInUsd?: number;
    effectiveTo?: string | null;
    effectiveFrom?: string | null;
};
export namespace OrderCreateDto {
    export enum orderStatus {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
        '_7' = 7,
        '_8' = 8,
        '_9' = 9,
        '_10' = 10,
    }
    export enum quoteStatus {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
    export enum freightTerms {
        '_0' = 0,
        '_1' = 1,
    }
}

