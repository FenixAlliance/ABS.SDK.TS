"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class SizesService {
    /**
     * Creates a new tenant size
     * Creates a new tenant size and returns an empty envelope.
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static createTenantSizeAsync(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/Sizes',
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
     * Retrieves a list of tenant sizes for a specific tenant
     * Retrieves a list of tenant sizes for a specific tenant and returns an envelope.
     * @param tenantId
     * @param xApiVersion
     * @returns TenantSizeDtoListEnvelope OK
     * @throws ApiError
     */
    static getTenantSizesAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Sizes',
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
     * Retrieves a single tenant size by its ID
     * Retrieves a single tenant size by its ID and returns an envelope.
     * @param tenantSizeId
     * @param xApiVersion
     * @returns TenantSizeDtoEnvelope OK
     * @throws ApiError
     */
    static getTenantSizeByIdAsync(tenantSizeId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Sizes/{tenantSizeId}',
            path: {
                'tenantSizeId': tenantSizeId,
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
     * Updates a tenant size
     * Updates a tenant size and returns an envelope.
     * @param tenantId
     * @param tenantSizeId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantSizeDtoEnvelope OK
     * @throws ApiError
     */
    static updateTenantSizeAsync(tenantId, tenantSizeId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/Sizes/{tenantSizeId}',
            path: {
                'tenantSizeId': tenantSizeId,
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
     * Partially updates a tenant size
     * Partially updates a tenant size and returns an empty envelope.
     * @param tenantId
     * @param tenantSizeId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static patchTenantSizeAsync(tenantId, tenantSizeId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/Sizes/{tenantSizeId}',
            path: {
                'tenantSizeId': tenantSizeId,
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
     * Deletes a tenant size by its ID
     * Deletes a tenant size by its ID and returns an envelope.
     * @param tenantId
     * @param tenantSizeId
     * @param xApiVersion
     * @returns TenantSizeDtoEnvelope OK
     * @throws ApiError
     */
    static deleteTenantSizeAsync(tenantId, tenantSizeId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/Sizes/{tenantSizeId}',
            path: {
                'tenantSizeId': tenantSizeId,
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
exports.SizesService = SizesService;
