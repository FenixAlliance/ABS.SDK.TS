/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AppliedTaxPolicyRecordCreateDto = {
    readonly id?: string;
    readonly timestamp?: string;
    tenantId?: string | null;
    enrolmentId?: string | null;
    taxPolicyId?: string | null;
    invoiceId?: string | null;
    itemId?: string | null;
    taxAmountInUSD?: number;
    taxBaseAmountInUSD?: number;
};

