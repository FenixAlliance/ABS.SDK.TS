/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Money } from './Money';
export type BankAccountDto = {
    id?: string | null;
    timestamp?: string | null;
    group?: boolean;
    frozen?: boolean;
    name?: string | null;
    code?: string | null;
    path?: string | null;
    title?: string | null;
    prefix?: string | null;
    balance?: number;
    currencyId?: string | null;
    accountType?: string | null;
    accountTypeId?: string | null;
    debitsBalance?: number;
    creditsBalance?: number;
    parentAccountId?: string | null;
    tenantId?: string | null;
    enrollmentId?: string | null;
    childrenAccountsCount?: number;
    accountCategory?: BankAccountDto.accountCategory;
    balanceAmount?: Money;
    creditsBalanceAmount?: Money;
    debitsBalanceAmount?: Money;
    iban?: string | null;
    swift?: string | null;
    branchCode?: string | null;
    bankAccountNumber?: string | null;
    qualifiedName?: string | null;
    bankId?: string | null;
    bankProfileId?: string | null;
};
export namespace BankAccountDto {
    export enum accountCategory {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
}

