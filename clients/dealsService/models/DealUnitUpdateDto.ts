/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DealUnitUpdateDto = {
    closed?: boolean;
    title?: string | null;
    userId?: string | null;
    tenantId?: string | null;
    forexRate?: number;
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
    ordered?: boolean;
    cartId?: string | null;
    dealUnitFeedId?: string | null;
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
    dealUnitStatus?: DealUnitUpdateDto.dealUnitStatus;
    dealUnitPurchaseProcess?: DealUnitUpdateDto.dealUnitPurchaseProcess;
    dealUnitForecastCategory?: DealUnitUpdateDto.dealUnitForecastCategory;
    dealUnitAmountsCalculation?: DealUnitUpdateDto.dealUnitAmountsCalculation;
};
export namespace DealUnitUpdateDto {
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

