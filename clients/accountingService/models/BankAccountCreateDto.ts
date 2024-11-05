/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BankAccountCreateDto = {
    readonly id?: string;
    readonly timestamp?: string;
    group?: boolean;
    frozen?: boolean;
    name: string;
    code?: string | null;
    path?: string | null;
    prefix?: string | null;
    tenantId?: string | null;
    currencyId: string;
    enrollmentId?: string | null;
    accountTypeId?: string | null;
    parentAccountId?: string | null;
    accountCategory: BankAccountCreateDto.accountCategory;
    iban?: string | null;
    swift?: string | null;
    branchCode?: string | null;
    bankAccountNumber?: string | null;
    qualifiedName?: string | null;
    bankId?: string | null;
    bankProfileId?: string | null;
};
export namespace BankAccountCreateDto {
    export enum accountCategory {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
}

