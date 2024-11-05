"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class TenantsService {
    /**
     * Get all tenants available on this suite server instance.
     * This action is only available for global administrators.
     * @param xApiVersion
     * @returns TenantDtoListEnvelope OK
     * @throws ApiError
     */
    static getAllTenants(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SystemService/Tenants',
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
     * Create a new tenant.
     * This action is only available for global administrators.
     * @param xApiVersion
     * @param requestBody
     * @returns TenantDtoEnvelope Created
     * @throws ApiError
     */
    static createTenant(xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/SystemService/Tenants',
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
     * Get the total count of tenants available on this suite server instance.
     * This action is only available for global administrators.
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getTenantsCount(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SystemService/Tenants/Count',
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
     * Get all extended tenants available on this suite server instance.
     * This action is only available for global administrators.
     * @param xApiVersion
     * @returns ExtendedTenantDtoListEnvelope OK
     * @throws ApiError
     */
    static getAllExtendedTenants(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SystemService/Tenants/Extended',
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
     * Get the total count of extended tenants available on this suite server instance.
     * This action is only available for global administrators.
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getExtendedTenantsCount(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SystemService/Tenants/Extended/Count',
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
     * Get a specific tenant by ID.
     * This action is only available for global administrators.
     * @param tenantId
     * @param xApiVersion
     * @returns TenantDtoEnvelope OK
     * @throws ApiError
     */
    static getTenant(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SystemService/Tenants/{tenantId}',
            path: {
                'tenantId': tenantId,
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
     * Update a specific tenant by ID.
     * This action is only available for global administrators.
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantDtoEnvelope OK
     * @throws ApiError
     */
    static updateTenant(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/SystemService/Tenants/{tenantId}',
            path: {
                'tenantId': tenantId,
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
     * Delete a specific tenant by ID.
     * This action is only available for global administrators.
     * @param tenantId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    static deleteTenant(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SystemService/Tenants/{tenantId}',
            path: {
                'tenantId': tenantId,
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
exports.TenantsService = TenantsService;
