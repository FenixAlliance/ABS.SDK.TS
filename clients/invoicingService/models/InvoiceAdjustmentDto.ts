/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type InvoiceAdjustmentDto = {
    id?: string | null;
    timestamp?: string | null;
    tenantId?: string | null;
    invoiceId?: string | null;
    currencyId?: string | null;
    enrollmentId?: string | null;
    description?: string | null;
    surchargePercent?: number;
    surchargeAmount?: number;
    discountPercent?: number;
    discountAmount?: number;
    totalSurcharge?: number;
    totalDiscount?: number;
    type?: InvoiceAdjustmentDto.type;
};
export namespace InvoiceAdjustmentDto {
    export enum type {
        '_0' = 0,
        '_1' = 1,
    }
}

