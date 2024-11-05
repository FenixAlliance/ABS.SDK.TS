/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BudgetAccountEntryCreateDto = {
    readonly id?: string;
    readonly timestamp?: string;
    tenantId?: string | null;
    enrollmentId?: string | null;
    description: string;
    date?: string | null;
    amount?: number;
    currencyId: string;
    debitAccountId?: string | null;
    creditAccountId?: string | null;
    journalEntryId?: string | null;
    accountingEntryType?: BudgetAccountEntryCreateDto.accountingEntryType;
    budgetId?: string | null;
};
export namespace BudgetAccountEntryCreateDto {
    export enum accountingEntryType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

