/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { JournalCreateDto } from '../models/JournalCreateDto';
import type { JournalDtoEnvelope } from '../models/JournalDtoEnvelope';
import type { JournalDtoListEnvelope } from '../models/JournalDtoListEnvelope';
import type { JournalEntryCreateDto } from '../models/JournalEntryCreateDto';
import type { JournalEntryDtoListEnvelope } from '../models/JournalEntryDtoListEnvelope';
import type { JournalEntryUpdateDto } from '../models/JournalEntryUpdateDto';
import type { JournalUpdateDto } from '../models/JournalUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class JournalsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns JournalDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceJournals(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<JournalDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Journals',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2AccountingServiceJournals(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: JournalCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Journals',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns JournalDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceJournalsCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<JournalDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Journals/Count',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param journalId
     * @param xApiVersion
     * @returns JournalDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceJournals1(
        tenantId: string,
        journalId: string,
        xApiVersion?: string,
    ): CancelablePromise<JournalDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Journals/{journalId}',
            path: {
                'journalId': journalId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param journalId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2AccountingServiceJournals(
        tenantId: string,
        journalId: string,
        xApiVersion?: string,
        requestBody?: JournalUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Journals/{journalId}',
            path: {
                'journalId': journalId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param journalId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2AccountingServiceJournals(
        tenantId: string,
        journalId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Journals/{journalId}',
            path: {
                'journalId': journalId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param journalId
     * @param xApiVersion
     * @returns JournalEntryDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceJournalsEntries(
        tenantId: string,
        journalId: string,
        xApiVersion?: string,
    ): CancelablePromise<JournalEntryDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Journals/{journalId}/Entries',
            path: {
                'journalId': journalId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param journalId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2AccountingServiceJournalsEntries(
        tenantId: string,
        journalId: string,
        xApiVersion?: string,
        requestBody?: JournalEntryCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Journals/{journalId}/Entries',
            path: {
                'journalId': journalId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param journalId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceJournalsEntriesCount(
        tenantId: string,
        journalId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Journals/{journalId}/Entries/Count',
            path: {
                'journalId': journalId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param journalId
     * @param journalEntryId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2AccountingServiceJournalsEntries(
        tenantId: string,
        journalId: string,
        journalEntryId: string,
        xApiVersion?: string,
        requestBody?: JournalEntryUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Journals/{journalId}/Entries/{journalEntryId}',
            path: {
                'journalId': journalId,
                'journalEntryId': journalEntryId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param journalId
     * @param journalEntryId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2AccountingServiceJournalsEntries(
        tenantId: string,
        journalId: string,
        journalEntryId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Journals/{journalId}/Entries/{journalEntryId}',
            path: {
                'journalId': journalId,
                'journalEntryId': journalEntryId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
