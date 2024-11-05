/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type JournalEntryCreateDto = {
    readonly id?: string;
    readonly timestamp?: string;
    group?: boolean;
    opening?: boolean;
    description: string;
    date: string;
    debit?: number;
    credit?: number;
    journalId: string;
    currencyId: string;
    debitAccountId: string;
    creditAccountId: string;
    parentJournalEntryId?: string | null;
    invoiceCode?: string | null;
};

