/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { SupportTicketPriorityCreateDto } from '../models/SupportTicketPriorityCreateDto';
import type { SupportTicketPriorityDtoEnvelope } from '../models/SupportTicketPriorityDtoEnvelope';
import type { SupportTicketPriorityDtoListEnvelope } from '../models/SupportTicketPriorityDtoListEnvelope';
import type { SupportTicketPriorityUpdateDto } from '../models/SupportTicketPriorityUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SupportTicketPrioritiesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns SupportTicketPriorityDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SupportServiceSupportTicketPriorities(
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<SupportTicketPriorityDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportTicketPriorities',
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
    public static postApiV2SupportServiceSupportTicketPriorities(
        requestBody: SupportTicketPriorityCreateDto,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/SupportService/SupportTicketPriorities',
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
    public static getApiV2SupportServiceSupportTicketPrioritiesCount(
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportTicketPriorities/Count',
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
     * @param supportTicketPriorityId
     * @param xApiVersion
     * @returns SupportTicketPriorityDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SupportServiceSupportTicketPriorities1(
        supportTicketPriorityId: string,
        xApiVersion?: string,
    ): CancelablePromise<SupportTicketPriorityDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportTicketPriorities/{supportTicketPriorityId}',
            path: {
                'supportTicketPriorityId': supportTicketPriorityId,
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
     * @param supportTicketPriorityId
     * @param requestBody
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2SupportServiceSupportTicketPriorities(
        supportTicketPriorityId: string,
        requestBody: SupportTicketPriorityUpdateDto,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/SupportService/SupportTicketPriorities/{supportTicketPriorityId}',
            path: {
                'supportTicketPriorityId': supportTicketPriorityId,
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
     * @param supportTicketPriorityId
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2SupportServiceSupportTicketPriorities(
        supportTicketPriorityId: string,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SupportService/SupportTicketPriorities/{supportTicketPriorityId}',
            path: {
                'supportTicketPriorityId': supportTicketPriorityId,
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
