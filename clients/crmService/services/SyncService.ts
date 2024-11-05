/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactDtoListEnvelope } from '../models/ContactDtoListEnvelope';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SyncService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns ContactDtoListEnvelope OK
     * @throws ApiError
     */
    public static postApiV2CrmServiceSync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ContactDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CrmService/Sync',
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
     * @param xApiVersion
     * @returns ContactDtoListEnvelope OK
     * @throws ApiError
     */
    public static postApiV2CrmServiceSyncMe(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ContactDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CrmService/Sync/Me',
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
     * @param relatedUserId
     * @param xApiVersion
     * @returns ContactDtoListEnvelope OK
     * @throws ApiError
     */
    public static postApiV2CrmServiceSyncUser(
        tenantId: string,
        relatedUserId: string,
        xApiVersion?: string,
    ): CancelablePromise<ContactDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CrmService/Sync/User',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'relatedUserId': relatedUserId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param relatedTenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static postApiV2CrmServiceSyncTenant(
        tenantId: string,
        relatedTenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CrmService/Sync/Tenant',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'relatedTenantId': relatedTenantId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
