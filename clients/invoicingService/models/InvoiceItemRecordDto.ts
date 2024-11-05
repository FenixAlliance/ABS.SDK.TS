/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type InvoiceItemRecordDto = {
    id?: string | null;
    timestamp?: string | null;
    closed?: boolean;
    itemId?: string | null;
    itemTitle?: string | null;
    itemShortDescription?: string | null;
    itemPrimaryImageUrl?: string | null;
    shippingPolicyId?: string | null;
    tenantId?: string | null;
    enrollmentId?: string | null;
    currencyId?: string | null;
    description?: string | null;
    quantity?: number;
    free?: boolean;
    freeReason?: string | null;
    freeReasonCode?: string | null;
    data?: string | null;
    dataLabel?: string | null;
    data1?: string | null;
    data1Label?: string | null;
    data2?: string | null;
    data2Label?: string | null;
    data3?: string | null;
    data3Label?: string | null;
    data4?: string | null;
    data4Label?: string | null;
    data5?: string | null;
    data5Label?: string | null;
    data6?: string | null;
    data6Label?: string | null;
    data7?: string | null;
    data7Label?: string | null;
    data8?: string | null;
    data8Label?: string | null;
    data9?: string | null;
    data9Label?: string | null;
    itemPriceId?: string | null;
    priceListItemId?: string | null;
    unitId?: string | null;
    unitGroupId?: string | null;
    taxCalculationMethod?: InvoiceItemRecordDto.taxCalculationMethod;
    costCalculationMethod?: InvoiceItemRecordDto.costCalculationMethod;
    forexRatesSnapshot?: string | null;
    forexRate?: number;
    totalBaseAmountInUsd?: number;
    totalProfitInUsd?: number;
    totalDetailAmountInUsd?: number;
    totalTaxBaseInUsd?: number;
    totalDiscountsInUsd?: number;
    totalTaxesInUsd?: number;
    totalWithholdingTaxesInUsd?: number;
    totalShippingCostInUsd?: number;
    totalShippingTaxesInUsd?: number;
    totalWarrantyCostInUsd?: number;
    totalReturnCostInUsd?: number;
    totalRefundCostInUsd?: number;
    totalSurchargesInUsd?: number;
    totalAmountInUsd?: number;
    totalGlobalDiscountsInUsd?: number;
    totalGlobalSurchargesInUsd?: number;
    customGlobalSurchargesAmount?: number;
    customGlobalDiscountsAmount?: number;
    customBaseAmount?: number;
    customDetailAmount?: number;
    customDiscountsAmount?: number;
    customTaxBase?: number;
    customSurchargesAmount?: number;
    customProfitAmount?: number;
    customShippingCostAmount?: number;
    customShippingTaxAmount?: number;
    customTaxAmount?: number;
    customWithholdingTaxAmount?: number;
    customTotalAmount?: number;
    returnPolicyId?: string | null;
    refundPolicyId?: string | null;
    warrantyPolicyId?: string | null;
    shipmentPolicyId?: string | null;
    shippingLocationId?: string | null;
    locationId?: string | null;
    quoteItemRecordId?: string | null;
    businessProfileRecordId?: string | null;
    parentBillingItemRecordId?: string | null;
    invoiceId?: string | null;
};
export namespace InvoiceItemRecordDto {
    export enum taxCalculationMethod {
        '_0' = 0,
        '_1' = 1,
    }
    export enum costCalculationMethod {
        '_0' = 0,
        '_1' = 1,
    }
}

