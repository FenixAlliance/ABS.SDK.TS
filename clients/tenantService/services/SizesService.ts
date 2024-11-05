/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Operation } from '../models/Operation';
import type { TenantSizeCreateDto } from '../models/TenantSizeCreateDto';
import type { TenantSizeDtoEnvelope } from '../models/TenantSizeDtoEnvelope';
import type { TenantSizeDtoListEnvelope } from '../models/TenantSizeDtoListEnvelope';
import type { TenantSizeUpdateDto } from '../models/TenantSizeUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SizesService {
    /**
     * Creates a new tenant size
     * Creates a new tenant size and returns an empty envelope.
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static createTenantSizeAsync(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: TenantSizeCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getTenantSizesAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantSizeDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getTenantSizeByIdAsync(
        tenantSizeId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantSizeDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static updateTenantSizeAsync(
        tenantId: string,
        tenantSizeId: string,
        xApiVersion?: string,
        requestBody?: TenantSizeUpdateDto,
    ): CancelablePromise<TenantSizeDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static patchTenantSizeAsync(
        tenantId: string,
        tenantSizeId: string,
        xApiVersion?: string,
        requestBody?: Array<Operation>,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteTenantSizeAsync(
        tenantId: string,
        tenantSizeId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantSizeDtoEnvelope> {
        return __request(OpenAPI, {
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
