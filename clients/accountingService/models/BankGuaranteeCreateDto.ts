/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BankGuaranteeCreateDto = {
    readonly id?: string;
    readonly timestamp?: string;
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
    bankGuaranteeType?: BankGuaranteeCreateDto.bankGuaranteeType;
    enrolmentId?: string | null;
    contactId?: string | null;
    projectId?: string | null;
    orderId?: string | null;
    bankProfileId?: string | null;
    bankAccountId?: string | null;
    currencyId?: string | null;
};
export namespace BankGuaranteeCreateDto {
    export enum bankGuaranteeType {
        '_0' = 0,
        '_1' = 1,
    }
}

