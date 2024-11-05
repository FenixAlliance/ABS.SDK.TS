/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DealUnitCreateDto = {
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
    receiverTenantId?: string | null;
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
    dealUnitFlowId?: string | null;
    dealUnitFlowStageId?: string | null;
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
    dealUnitStatus?: DealUnitCreateDto.dealUnitStatus;
    dealUnitPurchaseProcess?: DealUnitCreateDto.dealUnitPurchaseProcess;
    dealUnitForecastCategory?: DealUnitCreateDto.dealUnitForecastCategory;
    dealUnitAmountsCalculation?: DealUnitCreateDto.dealUnitAmountsCalculation;
};
export namespace DealUnitCreateDto {
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

