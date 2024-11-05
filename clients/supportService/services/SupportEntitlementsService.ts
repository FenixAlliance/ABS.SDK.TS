/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { SupportEntitlementCreateDto } from '../models/SupportEntitlementCreateDto';
import type { SupportEntitlementDtoEnvelope } from '../models/SupportEntitlementDtoEnvelope';
import type { SupportEntitlementDtoListEnvelope } from '../models/SupportEntitlementDtoListEnvelope';
import type { SupportEntitlementUpdateDto } from '../models/SupportEntitlementUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SupportEntitlementsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns SupportEntitlementDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SupportServiceSupportEntitlements(
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<SupportEntitlementDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportEntitlements',
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
    public static postApiV2SupportServiceSupportEntitlements(
        requestBody: SupportEntitlementCreateDto,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/SupportService/SupportEntitlements',
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
    public static getApiV2SupportServiceSupportEntitlementsCount(
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportEntitlements/Count',
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
     * @param supportEntitlementId
     * @param xApiVersion
     * @returns SupportEntitlementDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SupportServiceSupportEntitlements1(
        supportEntitlementId: string,
        xApiVersion?: string,
    ): CancelablePromise<SupportEntitlementDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportEntitlements/{supportEntitlementId}',
            path: {
                'supportEntitlementId': supportEntitlementId,
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
     * @param supportEntitlementId
     * @param requestBody
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2SupportServiceSupportEntitlements(
        supportEntitlementId: string,
        requestBody: SupportEntitlementUpdateDto,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/SupportService/SupportEntitlements/{supportEntitlementId}',
            path: {
                'supportEntitlementId': supportEntitlementId,
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
     * @param supportEntitlementId
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2SupportServiceSupportEntitlements(
        supportEntitlementId: string,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SupportService/SupportEntitlements/{supportEntitlementId}',
            path: {
                'supportEntitlementId': supportEntitlementId,
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
