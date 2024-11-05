/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type JournalEntryUpdateDto = {
    group?: boolean;
    opening?: boolean;
    description: string;
    date: string;
    debit?: number;
    credit?: number;
    journalId: string;
    currencyId: string;
    invoiceCode?: string | null;
    debitAccountId: string;
    creditAccountId: string;
    parentJournalEntryId?: string | null;
};

