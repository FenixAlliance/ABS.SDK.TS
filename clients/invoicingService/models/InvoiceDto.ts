/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Currency } from './Currency';
import type { Money } from './Money';
export type InvoiceDto = {
    id?: string | null;
    timestamp?: string | null;
    closed?: boolean;
    type?: string | null;
    title?: string | null;
    userId?: string | null;
    tenantId?: string | null;
    currencyId?: string | null;
    description?: string | null;
    priceListId?: string | null;
    enrollmentId?: string | null;
    individualId?: string | null;
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
    customerNotes?: string | null;
    forexRate?: number;
    total?: number;
    totalTaxes?: number;
    totalTaxBase?: number;
    totalDiscounts?: number;
    totalSurcharges?: number;
    totalGlobalDiscounts?: number;
    totalGlobalSurcharges?: number;
    totalTaxesInUsd?: number;
    totalAmountInUsd?: number;
    totalProfitInUsd?: number;
    totalTaxBaseInUsd?: number;
    totalDiscountsInUsd?: number;
    totalSurchargesInUsd?: number;
    totalDetailAmountInUsd?: number;
    totalGlobalDiscountsInUsd?: number;
    totalGlobalSurchargesInUsd?: number;
    totalWithholdingTaxesInUsd?: number;
    totalShippingCostInUsd?: number;
    totalShippingTaxesInUsd?: number;
    currency?: Currency;
    totalInUsd?: Money;
    totalTaxAmountInUsd?: Money;
    totalTaxBaseAmountInUsd?: Money;
    totalDiscountsAmountInUsd?: Money;
    totalSurchargesAmountInUsd?: Money;
    totalGlobalDiscountsAmountInUsd?: Money;
    totalGlobalSurchargesAmountInUsd?: Money;
    totalAmount?: Money;
    totalTaxAmount?: Money;
    totalTaxBaseAmount?: Money;
    totalDiscountsAmount?: Money;
    totalSurchargesAmount?: Money;
    totalGlobalDiscountsAmount?: Money;
    totalGlobalSurchargesAmount?: Money;
    paid?: boolean;
    number?: number;
    notes?: string | null;
    orderId?: string | null;
    enumeration?: string | null;
    paymentModeId?: string | null;
    enumerationRangeId?: string | null;
    emisorBillingProfileId?: string | null;
    receiverBillingProfileId?: string | null;
    emisorWalletAccountId?: string | null;
    receiverWalletAccountId?: string | null;
    paymentDue?: string | null;
    invoiceType?: InvoiceDto.invoiceType;
    documentType?: InvoiceDto.documentType;
    invoiceStatus?: InvoiceDto.invoiceStatus;
};
export namespace InvoiceDto {
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

