/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ReceiptDto = {
    id?: string | null;
    timestamp?: string | null;
    paymentId?: string | null;
    tenantId?: string | null;
    closed?: boolean;
    accountHolderId?: string | null;
    contactId?: string | null;
    enrolmentId?: string | null;
    receiptType?: ReceiptDto.receiptType;
    orderId?: string | null;
    invoiceId?: string | null;
};
export namespace ReceiptDto {
    export enum receiptType {
        '_0' = 0,
        '_1' = 1,
    }
}

