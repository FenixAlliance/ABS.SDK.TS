/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ReceiptCreateDto = {
    title?: string | null;
    userId?: string | null;
    currencyId?: string | null;
    priceListId?: string | null;
    description?: string | null;
    enrollmentId?: string | null;
    individualId?: string | null;
    paymentTermId?: string | null;
    organizationId?: string | null;
    receiverTenantId?: string | null;
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
    billingLocationId?: string | null;
    shippingLocationId?: string | null;
    shippingMethodId?: string | null;
    paymentId?: string | null;
    tenantId?: string | null;
    forexRate?: number;
    totalAmount?: number;
    totalAmountInUSD?: number;
    closed?: boolean;
    accountHolderId?: string | null;
    contactId?: string | null;
    enrolmentId?: string | null;
    receiptType?: ReceiptCreateDto.receiptType;
    orderId?: string | null;
    invoiceId?: string | null;
};
export namespace ReceiptCreateDto {
    export enum receiptType {
        '_0' = 0,
        '_1' = 1,
    }
}

