"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JournalsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class JournalsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns JournalDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceJournals(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2AccountingServiceJournals(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2AccountingServiceJournalsCount(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2AccountingServiceJournals1(tenantId, journalId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2AccountingServiceJournals(tenantId, journalId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteApiV2AccountingServiceJournals(tenantId, journalId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2AccountingServiceJournalsEntries(tenantId, journalId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2AccountingServiceJournalsEntries(tenantId, journalId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2AccountingServiceJournalsEntriesCount(tenantId, journalId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2AccountingServiceJournalsEntries(tenantId, journalId, journalEntryId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteApiV2AccountingServiceJournalsEntries(tenantId, journalId, journalEntryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.JournalsService = JournalsService;
