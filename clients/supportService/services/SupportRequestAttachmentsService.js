"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportRequestAttachmentsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class SupportRequestAttachmentsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns SupportRequestAttachmentDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2SupportServiceSupportRequestAttachments(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportRequestAttachments',
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
    static postApiV2SupportServiceSupportRequestAttachments(requestBody, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/SupportService/SupportRequestAttachments',
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
    static getApiV2SupportServiceSupportRequestAttachmentsCount(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportRequestAttachments/Count',
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
     * @param supportRequestAttachmentId
     * @param xApiVersion
     * @returns SupportRequestAttachmentDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2SupportServiceSupportRequestAttachments1(supportRequestAttachmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportRequestAttachments/{supportRequestAttachmentId}',
            path: {
                'supportRequestAttachmentId': supportRequestAttachmentId,
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
     * @param supportRequestAttachmentId
     * @param requestBody
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2SupportServiceSupportRequestAttachments(supportRequestAttachmentId, requestBody, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/SupportService/SupportRequestAttachments/{supportRequestAttachmentId}',
            path: {
                'supportRequestAttachmentId': supportRequestAttachmentId,
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
     * @param supportRequestAttachmentId
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2SupportServiceSupportRequestAttachments(supportRequestAttachmentId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SupportService/SupportRequestAttachments/{supportRequestAttachmentId}',
            path: {
                'supportRequestAttachmentId': supportRequestAttachmentId,
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
exports.SupportRequestAttachmentsService = SupportRequestAttachmentsService;
