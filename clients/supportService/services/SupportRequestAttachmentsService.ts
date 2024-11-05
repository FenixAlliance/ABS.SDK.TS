/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { SupportRequestAttachmentCreateDto } from '../models/SupportRequestAttachmentCreateDto';
import type { SupportRequestAttachmentDtoEnvelope } from '../models/SupportRequestAttachmentDtoEnvelope';
import type { SupportRequestAttachmentDtoListEnvelope } from '../models/SupportRequestAttachmentDtoListEnvelope';
import type { SupportRequestAttachmentUpdateDto } from '../models/SupportRequestAttachmentUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SupportRequestAttachmentsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns SupportRequestAttachmentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SupportServiceSupportRequestAttachments(
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<SupportRequestAttachmentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportRequestAttachments',
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
    public static postApiV2SupportServiceSupportRequestAttachments(
        requestBody: SupportRequestAttachmentCreateDto,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/SupportService/SupportRequestAttachments',
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
    public static getApiV2SupportServiceSupportRequestAttachmentsCount(
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportRequestAttachments/Count',
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
     * @param supportRequestAttachmentId
     * @param xApiVersion
     * @returns SupportRequestAttachmentDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SupportServiceSupportRequestAttachments1(
        supportRequestAttachmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<SupportRequestAttachmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportRequestAttachments/{supportRequestAttachmentId}',
            path: {
                'supportRequestAttachmentId': supportRequestAttachmentId,
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
     * @param supportRequestAttachmentId
     * @param requestBody
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2SupportServiceSupportRequestAttachments(
        supportRequestAttachmentId: string,
        requestBody: SupportRequestAttachmentUpdateDto,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/SupportService/SupportRequestAttachments/{supportRequestAttachmentId}',
            path: {
                'supportRequestAttachmentId': supportRequestAttachmentId,
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
     * @param supportRequestAttachmentId
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2SupportServiceSupportRequestAttachments(
        supportRequestAttachmentId: string,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SupportService/SupportRequestAttachments/{supportRequestAttachmentId}',
            path: {
                'supportRequestAttachmentId': supportRequestAttachmentId,
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
