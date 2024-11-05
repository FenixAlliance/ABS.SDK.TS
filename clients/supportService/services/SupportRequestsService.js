"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportRequestsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class SupportRequestsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns SupportRequestDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2SupportServiceSupportRequests(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportRequests',
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
    static postApiV2SupportServiceSupportRequests(requestBody, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/SupportService/SupportRequests',
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
    static getApiV2SupportServiceSupportRequestsCount(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportRequests/Count',
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
     * @param supportRequestId
     * @param xApiVersion
     * @returns SupportRequestDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2SupportServiceSupportRequests1(supportRequestId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportRequests/{supportRequestId}',
            path: {
                'supportRequestId': supportRequestId,
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
     * @param supportRequestId
     * @param requestBody
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2SupportServiceSupportRequests(supportRequestId, requestBody, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/SupportService/SupportRequests/{supportRequestId}',
            path: {
                'supportRequestId': supportRequestId,
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
     * @param supportRequestId
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2SupportServiceSupportRequests(supportRequestId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SupportService/SupportRequests/{supportRequestId}',
            path: {
                'supportRequestId': supportRequestId,
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
    /**
     * @param supportRequestId
     * @param tenantId
     * @param xApiVersion
     * @returns SupportTicketDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2SupportServiceSupportRequestsTickets(supportRequestId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportRequests/{supportRequestId}/Tickets',
            path: {
                'supportRequestId': supportRequestId,
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
    /**
     * @param supportRequestId
     * @param requestBody
     * @param xApiVersion
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2SupportServiceSupportRequestsAttachments(supportRequestId, requestBody, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/SupportService/SupportRequests/{supportRequestId}/Attachments',
            path: {
                'supportRequestId': supportRequestId,
            },
            headers: {
                'x-api-version': xApiVersion,
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
     * @param supportRequestId
     * @param tenantId
     * @param xApiVersion
     * @returns SupportRequestAttachmentDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2SupportServiceSupportRequestsAttachments(supportRequestId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportRequests/{supportRequestId}/Attachments',
            path: {
                'supportRequestId': supportRequestId,
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
    /**
     * @param supportRequestId
     * @param tenantId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2SupportServiceSupportRequestsAttachmentsCount(supportRequestId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportRequests/{supportRequestId}/Attachments/Count',
            path: {
                'supportRequestId': supportRequestId,
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
    /**
     * @param supportRequestId
     * @param attachmentId
     * @param xApiVersion
     * @returns SupportRequestAttachmentDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2SupportServiceSupportRequestsAttachments1(supportRequestId, attachmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportRequests/{supportRequestId}/Attachments/{attachmentId}',
            path: {
                'supportRequestId': supportRequestId,
                'attachmentId': attachmentId,
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
}
exports.SupportRequestsService = SupportRequestsService;
