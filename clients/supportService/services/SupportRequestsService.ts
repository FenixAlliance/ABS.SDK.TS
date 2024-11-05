/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { SupportRequestAttachmentCreateDto } from '../models/SupportRequestAttachmentCreateDto';
import type { SupportRequestAttachmentDtoEnvelope } from '../models/SupportRequestAttachmentDtoEnvelope';
import type { SupportRequestAttachmentDtoListEnvelope } from '../models/SupportRequestAttachmentDtoListEnvelope';
import type { SupportRequestCreateDto } from '../models/SupportRequestCreateDto';
import type { SupportRequestDtoEnvelope } from '../models/SupportRequestDtoEnvelope';
import type { SupportRequestDtoListEnvelope } from '../models/SupportRequestDtoListEnvelope';
import type { SupportRequestUpdateDto } from '../models/SupportRequestUpdateDto';
import type { SupportTicketDtoListEnvelope } from '../models/SupportTicketDtoListEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SupportRequestsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns SupportRequestDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SupportServiceSupportRequests(
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<SupportRequestDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportRequests',
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
    public static postApiV2SupportServiceSupportRequests(
        requestBody: SupportRequestCreateDto,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/SupportService/SupportRequests',
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
    public static getApiV2SupportServiceSupportRequestsCount(
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportRequests/Count',
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
     * @param supportRequestId
     * @param xApiVersion
     * @returns SupportRequestDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SupportServiceSupportRequests1(
        supportRequestId: string,
        xApiVersion?: string,
    ): CancelablePromise<SupportRequestDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportRequests/{supportRequestId}',
            path: {
                'supportRequestId': supportRequestId,
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
     * @param supportRequestId
     * @param requestBody
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2SupportServiceSupportRequests(
        supportRequestId: string,
        requestBody: SupportRequestUpdateDto,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/SupportService/SupportRequests/{supportRequestId}',
            path: {
                'supportRequestId': supportRequestId,
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
     * @param supportRequestId
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2SupportServiceSupportRequests(
        supportRequestId: string,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SupportService/SupportRequests/{supportRequestId}',
            path: {
                'supportRequestId': supportRequestId,
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
     * @param supportRequestId
     * @param tenantId
     * @param xApiVersion
     * @returns SupportTicketDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SupportServiceSupportRequestsTickets(
        supportRequestId: string,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<SupportTicketDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportRequests/{supportRequestId}/Tickets',
            path: {
                'supportRequestId': supportRequestId,
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
     * @param supportRequestId
     * @param requestBody
     * @param xApiVersion
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2SupportServiceSupportRequestsAttachments(
        supportRequestId: string,
        requestBody: SupportRequestAttachmentCreateDto,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/SupportService/SupportRequests/{supportRequestId}/Attachments',
            path: {
                'supportRequestId': supportRequestId,
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
     * @param supportRequestId
     * @param tenantId
     * @param xApiVersion
     * @returns SupportRequestAttachmentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SupportServiceSupportRequestsAttachments(
        supportRequestId: string,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<SupportRequestAttachmentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportRequests/{supportRequestId}/Attachments',
            path: {
                'supportRequestId': supportRequestId,
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
     * @param supportRequestId
     * @param tenantId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2SupportServiceSupportRequestsAttachmentsCount(
        supportRequestId: string,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportRequests/{supportRequestId}/Attachments/Count',
            path: {
                'supportRequestId': supportRequestId,
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
     * @param supportRequestId
     * @param attachmentId
     * @param xApiVersion
     * @returns SupportRequestAttachmentDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SupportServiceSupportRequestsAttachments1(
        supportRequestId: string,
        attachmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<SupportRequestAttachmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportRequests/{supportRequestId}/Attachments/{attachmentId}',
            path: {
                'supportRequestId': supportRequestId,
                'attachmentId': attachmentId,
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
