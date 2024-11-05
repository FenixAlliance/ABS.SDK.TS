"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportTicketPrioritiesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class SupportTicketPrioritiesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns SupportTicketPriorityDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2SupportServiceSupportTicketPriorities(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportTicketPriorities',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param requestBody
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2SupportServiceSupportTicketPriorities(requestBody, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/SupportService/SupportTicketPriorities',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2SupportServiceSupportTicketPrioritiesCount(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportTicketPriorities/Count',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param supportTicketPriorityId
     * @param xApiVersion
     * @returns SupportTicketPriorityDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2SupportServiceSupportTicketPriorities1(supportTicketPriorityId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportTicketPriorities/{supportTicketPriorityId}',
            path: {
                'supportTicketPriorityId': supportTicketPriorityId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param supportTicketPriorityId
     * @param requestBody
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2SupportServiceSupportTicketPriorities(supportTicketPriorityId, requestBody, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/SupportService/SupportTicketPriorities/{supportTicketPriorityId}',
            path: {
                'supportTicketPriorityId': supportTicketPriorityId,
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
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param supportTicketPriorityId
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2SupportServiceSupportTicketPriorities(supportTicketPriorityId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SupportService/SupportTicketPriorities/{supportTicketPriorityId}',
            path: {
                'supportTicketPriorityId': supportTicketPriorityId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
exports.SupportTicketPrioritiesService = SupportTicketPrioritiesService;
