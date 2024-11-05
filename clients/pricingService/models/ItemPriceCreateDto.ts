/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ItemPriceCreateDto = {
    readonly id?: string;
    readonly timestamp?: string;
    itemId: string;
    unitId?: string | null;
    tenantId?: string | null;
    currencyId?: string | null;
    priceListId?: string | null;
    unitGroupId?: string | null;
    enrollmentId?: string | null;
    discountListId?: string | null;
    roundingPolicyId?: string | null;
    price?: number;
    percent?: number;
};

