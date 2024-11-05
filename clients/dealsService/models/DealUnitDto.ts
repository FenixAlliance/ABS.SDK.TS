/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Currency } from './Currency';
import type { Money } from './Money';
export type DealUnitDto = {
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
    ordered?: boolean;
    dealUnitFeedId?: string | null;
    dealUnitFlowId?: string | null;
    dealUnitFlowStageId?: string | null;
    billingLocationId?: string | null;
    shippingLocationId?: string | null;
    partnerCreated?: boolean;
    partnerCollaboration?: boolean;
    proposedSolution?: string | null;
    currentSituation?: string | null;
    customerNeed?: string | null;
    wonDate?: string;
    lostDate?: string;
    expiryDate?: string;
    deliveredDate?: string;
    closedTimestamp?: string;
    expectedCloseDate?: string;
    dealUnitStatus?: DealUnitDto.dealUnitStatus;
    dealUnitPurchaseProcess?: DealUnitDto.dealUnitPurchaseProcess;
    dealUnitForecastCategory?: DealUnitDto.dealUnitForecastCategory;
    dealUnitAmountsCalculation?: DealUnitDto.dealUnitAmountsCalculation;
    linesCount?: number;
    customTotalAmount?: number;
    customDetailAmount?: number;
    customProfitAmount?: number;
    customShippingCostAmount?: number;
    customWithholdingTaxAmount?: number;
    customSurchargesAmount?: number;
    customDiscountsAmount?: number;
    customShippingTaxAmount?: number;
};
export namespace DealUnitDto {
    export enum dealUnitStatus {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }
    export enum dealUnitPurchaseProcess {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }
    export enum dealUnitForecastCategory {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
    }
    export enum dealUnitAmountsCalculation {
        '_0' = 0,
        '_1' = 1,
    }
}

