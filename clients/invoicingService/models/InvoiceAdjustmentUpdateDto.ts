/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type InvoiceAdjustmentUpdateDto = {
    currencyId?: string | null;
    description?: string | null;
    surchargePercent?: number;
    surchargeAmount?: number;
    discountPercent?: number;
    discountAmount?: number;
    totalSurcharge?: number;
    totalDiscount?: number;
    type?: InvoiceAdjustmentUpdateDto.type;
};
export namespace InvoiceAdjustmentUpdateDto {
    export enum type {
        '_0' = 0,
        '_1' = 1,
    }
}

