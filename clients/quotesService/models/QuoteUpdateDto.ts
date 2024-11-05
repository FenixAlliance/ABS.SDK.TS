/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type QuoteUpdateDto = {
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
    cartId?: string | null;
    total?: number;
    totalTaxes?: number;
    quoteStatus?: QuoteUpdateDto.quoteStatus;
    freightTerms?: QuoteUpdateDto.freightTerms;
    costCalculationMethod?: QuoteUpdateDto.costCalculationMethod;
    effectiveTo?: string | null;
    effectiveFrom?: string | null;
    customTaxAmount?: number;
    customTotalAmount?: number;
    customDetailAmount?: number;
    customProfitAmount?: number;
    customDiscountsAmount?: number;
    customSurchargesAmount?: number;
    customShippingCostAmount?: number;
    customShippingTaxAmount?: number;
    customWithholdingTaxAmount?: number;
};
export namespace QuoteUpdateDto {
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

