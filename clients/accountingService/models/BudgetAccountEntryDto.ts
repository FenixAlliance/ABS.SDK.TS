/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Money } from './Money';
export type BudgetAccountEntryDto = {
    id?: string | null;
    timestamp?: string | null;
    debit?: number;
    credit?: number;
    description?: string | null;
    forexRate?: number;
    accountId?: string | null;
    tenantId?: string | null;
    date?: string | null;
    enrolmentId?: string | null;
    currencyId?: string | null;
    debitAccountId?: string | null;
    creditAccountId?: string | null;
    journalEntryId?: string | null;
    debitAccountName?: string | null;
    creditAccountName?: string | null;
    accountingEntryType?: BudgetAccountEntryDto.accountingEntryType;
    debitAmount?: Money;
    creditAmount?: Money;
    budgetId?: string | null;
};
export namespace BudgetAccountEntryDto {
    export enum accountingEntryType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

