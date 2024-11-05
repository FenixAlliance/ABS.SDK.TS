"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemAttachmentsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ItemAttachmentsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns ItemAttachmentDtoEnvelope Created
     * @throws ApiError
     */
    static postApiV2CatalogServiceItemAttachments(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/ItemAttachments',
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
     * @returns ItemAttachmentDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemAttachments(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemAttachments',
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
     * @param itemAttachmentId
     * @param xApiVersion
     * @returns ItemAttachmentDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemAttachments1(itemAttachmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemAttachments/{itemAttachmentId}',
            path: {
                'itemAttachmentId': itemAttachmentId,
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
     * @param tenantId
     * @param itemAttachmentId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2CatalogServiceItemAttachments(tenantId, itemAttachmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/ItemAttachments/{itemAttachmentId}',
            path: {
                'itemAttachmentId': itemAttachmentId,
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
     * @param tenantId
     * @param itemAttachmentId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2CatalogServiceItemAttachments(tenantId, itemAttachmentId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CatalogService/ItemAttachments/{itemAttachmentId}',
            path: {
                'itemAttachmentId': itemAttachmentId,
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
}
exports.ItemAttachmentsService = ItemAttachmentsService;
