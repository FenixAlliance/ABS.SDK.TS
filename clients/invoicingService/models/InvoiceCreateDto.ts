/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InvoiceAdjustmentDto } from './InvoiceAdjustmentDto';
import type { InvoiceItemRecordDto } from './InvoiceItemRecordDto';
import type { InvoiceReferenceDto } from './InvoiceReferenceDto';
export type InvoiceCreateDto = {
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
    paid?: boolean;
    number?: number;
    notes?: string | null;
    customerNotes?: string | null;
    orderId?: string | null;
    enumeration?: string | null;
    paymentModeId?: string | null;
    receiverTenantId?: string | null;
    enumerationRangeId?: string | null;
    emisorBillingProfileId?: string | null;
    receiverBillingProfileId?: string | null;
    emisorWalletAccountId?: string | null;
    receiverWalletAccountId?: string | null;
    paymentDue?: string | null;
    invoiceType?: InvoiceCreateDto.invoiceType;
    documentType?: InvoiceCreateDto.documentType;
    invoiceStatus?: InvoiceCreateDto.invoiceStatus;
    validFrom?: string | null;
    validTo?: string | null;
    invoiceReferences?: Array<InvoiceReferenceDto> | null;
    invoiceItemRecords?: Array<InvoiceItemRecordDto> | null;
    invoiceAdjustments?: Array<InvoiceAdjustmentDto> | null;
};
export namespace InvoiceCreateDto {
    export enum invoiceType {
        '_0' = 0,
        '_1' = 1,
    }
    export enum documentType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
    export enum invoiceStatus {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
}

