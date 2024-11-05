/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AccountingEntryUpdateDto = {
    tenantId?: string | null;
    enrolmentId?: string | null;
    description?: string | null;
    amount?: number;
    date?: string | null;
    currencyId?: string | null;
    debitAccountId?: string | null;
    creditAccountId?: string | null;
    journalEntryId?: string | null;
    accountingEntryType?: AccountingEntryUpdateDto.accountingEntryType;
};
export namespace AccountingEntryUpdateDto {
    export enum accountingEntryType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

