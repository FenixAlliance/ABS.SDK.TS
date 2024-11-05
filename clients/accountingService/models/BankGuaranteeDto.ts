/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BankGuaranteeDto = {
    id?: string | null;
    timestamp?: string | null;
    margin?: number;
    charges?: number;
    beneficiaryName?: string | null;
    guaranteeNumber?: string | null;
    guaranteeConditions?: string | null;
    fixedDepositNumber?: number;
    startDate?: string;
    endDate?: string;
    validityInDays?: number;
    tenantId?: string | null;
    bankGuaranteeType?: BankGuaranteeDto.bankGuaranteeType;
    enrolmentId?: string | null;
    contactId?: string | null;
    projectId?: string | null;
    orderId?: string | null;
    bankProfileId?: string | null;
    bankAccountId?: string | null;
    currencyId?: string | null;
};
export namespace BankGuaranteeDto {
    export enum bankGuaranteeType {
        '_0' = 0,
        '_1' = 1,
    }
}

