/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtendedTenantDtoListEnvelope } from '../models/ExtendedTenantDtoListEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { TenantCreateDto } from '../models/TenantCreateDto';
import type { TenantDtoEnvelope } from '../models/TenantDtoEnvelope';
import type { TenantDtoListEnvelope } from '../models/TenantDtoListEnvelope';
import type { TenantUpdateDto } from '../models/TenantUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TenantsService {
    /**
     * Get all tenants available on this suite server instance.
     * This action is only available for global administrators.
     * @param xApiVersion
     * @returns TenantDtoListEnvelope OK
     * @throws ApiError
     */
    public static getAllTenants(
        xApiVersion?: string,
    ): CancelablePromise<TenantDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static createTenant(
        xApiVersion?: string,
        requestBody?: TenantCreateDto,
    ): CancelablePromise<TenantDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getTenantsCount(
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getAllExtendedTenants(
        xApiVersion?: string,
    ): CancelablePromise<ExtendedTenantDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getExtendedTenantsCount(
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getTenant(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static updateTenant(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: TenantUpdateDto,
    ): CancelablePromise<TenantDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteTenant(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
