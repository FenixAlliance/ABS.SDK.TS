"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortalsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class PortalsService {
    /**
     * Get the root portal
     * Get the root portal of the this server instance
     * @param xApiVersion
     * @returns WebPortalDtoEnvelope OK
     * @throws ApiError
     */
    static getRootWebPortalAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/Portals/Root',
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
     * Get the current portal
     * Get the current portal of the this server instance
     * @param xApiVersion
     * @returns WebPortalDtoEnvelope OK
     * @throws ApiError
     */
    static getCurrentWebPortalAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/Portals/Current',
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
     * Initialize the current portal
     * Initialize the current portal for the current user.
     * @param xApiVersion
     * @returns WebPortalDtoEnvelope OK
     * @throws ApiError
     */
    static initializeCurrentWebPortalAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/Portals/Initialize',
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
     * Get the current portal's options
     * Get the current portal's options for the current user.
     * @param xApiVersion
     * @returns PortalOptionsEnvelope OK
     * @throws ApiError
     */
    static getCurrentWebPortalOptionsAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/Portals/Current/Options',
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
     * Search for a portal by its domain
     * Search for a portal by its domain
     * @param domain
     * @param xApiVersion
     * @returns WebPortalDtoEnvelope OK
     * @throws ApiError
     */
    static searchWebPortalAsync(domain, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/Portals/Search',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'domain': domain,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get a web portal by its ID
     * Get a web portal by its ID
     * @param portalId
     * @param xApiVersion
     * @returns WebPortalDtoEnvelope OK
     * @throws ApiError
     */
    static getWebPortalByIdAsync(portalId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/Portals/{portalId}',
            path: {
                'portalId': portalId,
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
     * Update an existing web portal
     * Update an existing web portal
     * @param tenantId
     * @param portalId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static updateWebPortalAsync(tenantId, portalId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/ContentService/Portals/{portalId}',
            path: {
                'portalId': portalId,
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
     * Delete a web portal
     * Delete a web portal
     * @param tenantId
     * @param portalId
     * @param requestBody
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteWebPortalAsync(tenantId, portalId, requestBody, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/ContentService/Portals/{portalId}',
            path: {
                'portalId': portalId,
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
     * Partially update a web portal
     * Partially update a web portal
     * @param tenantId
     * @param portalId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static patchWebPortalAsync(tenantId, portalId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/ContentService/Portals/{portalId}',
            path: {
                'portalId': portalId,
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
     * Get a web portal's settings by its ID
     * Get a web portal's settings by its ID
     * @param portalId
     * @param xApiVersion
     * @returns PortalSettingsEnvelope OK
     * @throws ApiError
     */
    static getWebPortalSettingsAsync(portalId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/Portals/{portalId}/Settings',
            path: {
                'portalId': portalId,
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
     * Get a web portal's options by its ID
     * Get a web portal's options by its ID
     * @param portalId
     * @param xApiVersion
     * @returns PortalOptionsEnvelope OK
     * @throws ApiError
     */
    static getWebPortalOptionsAsync(portalId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/Portals/{portalId}/Options',
            path: {
                'portalId': portalId,
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
     * Create a new web portal
     * Create a new web portal
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static createWebPortalAsync(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/ContentService/Portals',
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
exports.PortalsService = PortalsService;
