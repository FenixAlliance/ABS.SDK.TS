/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CommissionCreateDto = {
    readonly id?: string;
    readonly timestamp?: string;
    title?: string | null;
    description?: string | null;
    baseAmount?: number;
    addedPercent?: number;
    addedAmount?: number;
    taxComission?: number;
    tenantId?: string | null;
    enrolmentId?: string | null;
    salaryId?: string | null;
    emisorWalletAccountId?: string | null;
    receiverWalletAccountId?: string | null;
    emisorContactId?: string | null;
    receiverContactId?: string | null;
};

