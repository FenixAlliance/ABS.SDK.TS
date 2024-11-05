/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { SupportTicketTypeCreateDto } from '../models/SupportTicketTypeCreateDto';
import type { SupportTicketTypeDtoEnvelope } from '../models/SupportTicketTypeDtoEnvelope';
import type { SupportTicketTypeDtoListEnvelope } from '../models/SupportTicketTypeDtoListEnvelope';
import type { SupportTicketTypeUpdateDto } from '../models/SupportTicketTypeUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SupportTicketTypesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns SupportTicketTypeDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SupportServiceSupportTicketTypes(
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<SupportTicketTypeDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportTicketTypes',
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
    public static postApiV2SupportServiceSupportTicketTypes(
        requestBody: SupportTicketTypeCreateDto,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/SupportService/SupportTicketTypes',
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
    public static getApiV2SupportServiceSupportTicketTypesCount(
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportTicketTypes/Count',
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
     * @param supportTicketTypeId
     * @param xApiVersion
     * @returns SupportTicketTypeDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SupportServiceSupportTicketTypes1(
        supportTicketTypeId: string,
        xApiVersion?: string,
    ): CancelablePromise<SupportTicketTypeDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportTicketTypes/{supportTicketTypeId}',
            path: {
                'supportTicketTypeId': supportTicketTypeId,
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
     * @param supportTicketTypeId
     * @param requestBody
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2SupportServiceSupportTicketTypes(
        supportTicketTypeId: string,
        requestBody: SupportTicketTypeUpdateDto,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/SupportService/SupportTicketTypes/{supportTicketTypeId}',
            path: {
                'supportTicketTypeId': supportTicketTypeId,
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
     * @param supportTicketTypeId
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2SupportServiceSupportTicketTypes(
        supportTicketTypeId: string,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SupportService/SupportTicketTypes/{supportTicketTypeId}',
            path: {
                'supportTicketTypeId': supportTicketTypeId,
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
