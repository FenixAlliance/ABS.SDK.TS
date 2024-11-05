/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BankGuaranteeUpdateDto = {
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
    bankGuaranteeType?: BankGuaranteeUpdateDto.bankGuaranteeType;
    enrolmentId?: string | null;
    contactId?: string | null;
    projectId?: string | null;
    orderId?: string | null;
    bankProfileId?: string | null;
    bankAccountId?: string | null;
    currencyId?: string | null;
};
export namespace BankGuaranteeUpdateDto {
    export enum bankGuaranteeType {
        '_0' = 0,
        '_1' = 1,
    }
}

