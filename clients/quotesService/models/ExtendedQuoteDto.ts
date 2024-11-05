/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactDto } from './ContactDto';
import type { Currency } from './Currency';
import type { Money } from './Money';
import type { TenantDto } from './TenantDto';
import type { TenantEnrolmentDto } from './TenantEnrolmentDto';
import type { UserDto } from './UserDto';
export type ExtendedQuoteDto = {
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
    cartId?: string | null;
    effectiveTo?: string | null;
    effectiveFrom?: string | null;
    quoteStatus?: ExtendedQuoteDto.quoteStatus;
    freightTerms?: ExtendedQuoteDto.freightTerms;
    costCalculationMethod?: ExtendedQuoteDto.costCalculationMethod;
    customDiscountsAmount?: number;
    user?: UserDto;
    tenant?: TenantDto;
    individual?: ContactDto;
    organization?: ContactDto;
    receiverTenant?: TenantDto;
    enrollment?: TenantEnrolmentDto;
};
export namespace ExtendedQuoteDto {
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
    export enum costCalculationMethod {
        '_0' = 0,
        '_1' = 1,
    }
}

