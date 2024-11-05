/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BudgetAccountEntryUpdateDto = {
    tenantId?: string | null;
    enrolmentId?: string | null;
    description?: string | null;
    amount?: number;
    date?: string | null;
    currencyId?: string | null;
    debitAccountId?: string | null;
    creditAccountId?: string | null;
    journalEntryId?: string | null;
    accountingEntryType?: BudgetAccountEntryUpdateDto.accountingEntryType;
    budgetId?: string | null;
};
export namespace BudgetAccountEntryUpdateDto {
    export enum accountingEntryType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

