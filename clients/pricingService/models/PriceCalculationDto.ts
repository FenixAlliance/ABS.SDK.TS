/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Money } from './Money';
export type PriceCalculationDto = {
    id?: string | null;
    timestamp?: string | null;
    itemId?: string | null;
    unitId?: string | null;
    unitGroupId?: string | null;
    priceId?: string | null;
    priceListId?: string | null;
    discountId?: string | null;
    discountListId?: string | null;
    tenantId?: string | null;
    enrollmentId?: string | null;
    roundingPolicyId?: string | null;
    effectiveDiscountPercent?: number;
    currencyId?: string | null;
    totalBaseAmount?: Money;
    totalDiscountsAmount?: Money;
    totalSurchargesAmount?: Money;
    totalShippingAmount?: Money;
    totalShippingTaxAmount?: Money;
    totalTaxAmount?: Money;
    totalAmount?: Money;
};

