/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Money } from './Money';
export type JournalEntryDto = {
    id?: string | null;
    timestamp?: string | null;
    group?: boolean;
    opening?: boolean;
    description?: string | null;
    date?: string | null;
    forexRatesSnapshot?: string | null;
    forexRate?: number;
    credit?: number;
    debit?: number;
    currencyId?: string | null;
    tenantId?: string | null;
    enrolmentId?: string | null;
    journalId?: string | null;
    journalName?: string | null;
    journalCode?: string | null;
    creditAccountId?: string | null;
    creditAccountName?: string | null;
    debitAccountId?: string | null;
    debitAccountName?: string | null;
    invoiceCode?: string | null;
    parentJournalEntryId?: string | null;
    creditAmount?: Money;
    debitAmount?: Money;
};

