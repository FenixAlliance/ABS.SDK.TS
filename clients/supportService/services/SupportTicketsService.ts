/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { PrivateMessageDtoListEnvelope } from '../models/PrivateMessageDtoListEnvelope';
import type { SupportTicketConversationCreateDto } from '../models/SupportTicketConversationCreateDto';
import type { SupportTicketConversationDtoEnvelope } from '../models/SupportTicketConversationDtoEnvelope';
import type { SupportTicketConversationDtoListEnvelope } from '../models/SupportTicketConversationDtoListEnvelope';
import type { SupportTicketCreateDto } from '../models/SupportTicketCreateDto';
import type { SupportTicketDtoEnvelope } from '../models/SupportTicketDtoEnvelope';
import type { SupportTicketDtoListEnvelope } from '../models/SupportTicketDtoListEnvelope';
import type { SupportTicketUpdateDto } from '../models/SupportTicketUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SupportTicketsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns SupportTicketDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SupportServiceSupportTickets(
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<SupportTicketDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportTickets',
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
    public static postApiV2SupportServiceSupportTickets(
        requestBody: SupportTicketCreateDto,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/SupportService/SupportTickets',
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
    public static getApiV2SupportServiceSupportTicketsCount(
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportTickets/Count',
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
     * @param supportTicketId
     * @param xApiVersion
     * @returns SupportTicketDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SupportServiceSupportTickets1(
        supportTicketId: string,
        xApiVersion?: string,
    ): CancelablePromise<SupportTicketDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportTickets/{supportTicketId}',
            path: {
                'supportTicketId': supportTicketId,
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
     * @param supportTicketId
     * @param requestBody
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2SupportServiceSupportTickets(
        supportTicketId: string,
        requestBody: SupportTicketUpdateDto,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/SupportService/SupportTickets/{supportTicketId}',
            path: {
                'supportTicketId': supportTicketId,
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
     * @param supportTicketId
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2SupportServiceSupportTickets(
        supportTicketId: string,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SupportService/SupportTickets/{supportTicketId}',
            path: {
                'supportTicketId': supportTicketId,
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
    /**
     * @param supportTicketId
     * @param requestBody
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2SupportServiceSupportTicketsConversations(
        supportTicketId: string,
        requestBody: SupportTicketConversationCreateDto,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/SupportService/SupportTickets/{supportTicketId}/Conversations',
            path: {
                'supportTicketId': supportTicketId,
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
     * @param supportTicketId
     * @param xApiVersion
     * @returns SupportTicketConversationDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SupportServiceSupportTicketsConversations(
        supportTicketId: string,
        xApiVersion?: string,
    ): CancelablePromise<SupportTicketConversationDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportTickets/{supportTicketId}/Conversations',
            path: {
                'supportTicketId': supportTicketId,
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
     * @param supportTicketId
     * @param supportTicketConversationId
     * @param xApiVersion
     * @returns SupportTicketConversationDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SupportServiceSupportTicketsConversations1(
        supportTicketId: string,
        supportTicketConversationId: string,
        xApiVersion?: string,
    ): CancelablePromise<SupportTicketConversationDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportTickets/{supportTicketId}/Conversations/{supportTicketConversationId}',
            path: {
                'supportTicketId': supportTicketId,
                'supportTicketConversationId': supportTicketConversationId,
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
     * @param supportTicketId
     * @param supportTicketConversationId
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2SupportServiceSupportTicketsConversations(
        supportTicketId: string,
        supportTicketConversationId: string,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SupportService/SupportTickets/{supportTicketId}/Conversations/{supportTicketConversationId}',
            path: {
                'supportTicketId': supportTicketId,
                'supportTicketConversationId': supportTicketConversationId,
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
    /**
     * @param supportTicketConversationId
     * @param supportTicketId
     * @param pageNumber
     * @param pageSize
     * @param xApiVersion
     * @returns PrivateMessageDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SupportServiceSupportTicketsConversationsMessages(
        supportTicketConversationId: string,
        supportTicketId: string,
        pageNumber?: number,
        pageSize?: number,
        xApiVersion?: string,
    ): CancelablePromise<PrivateMessageDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportTickets/{supportTicketId}/Conversations/{supportTicketConversationId}/Messages',
            path: {
                'supportTicketConversationId': supportTicketConversationId,
                'supportTicketId': supportTicketId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
