/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Operation } from '../models/Operation';
import type { PortalId } from '../models/PortalId';
import type { PortalOptionsEnvelope } from '../models/PortalOptionsEnvelope';
import type { PortalSettingsEnvelope } from '../models/PortalSettingsEnvelope';
import type { WebPortalCreateDto } from '../models/WebPortalCreateDto';
import type { WebPortalDtoEnvelope } from '../models/WebPortalDtoEnvelope';
import type { WebPortalUpdateDto } from '../models/WebPortalUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PortalsService {
    /**
     * Get the root portal
     * Get the root portal of the this server instance
     * @param xApiVersion
     * @returns WebPortalDtoEnvelope OK
     * @throws ApiError
     */
    public static getRootWebPortalAsync(
        xApiVersion?: string,
    ): CancelablePromise<WebPortalDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getCurrentWebPortalAsync(
        xApiVersion?: string,
    ): CancelablePromise<WebPortalDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static initializeCurrentWebPortalAsync(
        xApiVersion?: string,
    ): CancelablePromise<WebPortalDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getCurrentWebPortalOptionsAsync(
        xApiVersion?: string,
    ): CancelablePromise<PortalOptionsEnvelope> {
        return __request(OpenAPI, {
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
    public static searchWebPortalAsync(
        domain: string,
        xApiVersion?: string,
    ): CancelablePromise<WebPortalDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getWebPortalByIdAsync(
        portalId: string,
        xApiVersion?: string,
    ): CancelablePromise<WebPortalDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static updateWebPortalAsync(
        tenantId: string,
        portalId: string,
        xApiVersion?: string,
        requestBody?: WebPortalUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteWebPortalAsync(
        tenantId: string,
        portalId: string,
        requestBody: PortalId,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static patchWebPortalAsync(
        tenantId: string,
        portalId: PortalId,
        xApiVersion?: string,
        requestBody?: Array<Operation>,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getWebPortalSettingsAsync(
        portalId: string,
        xApiVersion?: string,
    ): CancelablePromise<PortalSettingsEnvelope> {
        return __request(OpenAPI, {
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
    public static getWebPortalOptionsAsync(
        portalId: string,
        xApiVersion?: string,
    ): CancelablePromise<PortalOptionsEnvelope> {
        return __request(OpenAPI, {
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
    public static createWebPortalAsync(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: WebPortalCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
