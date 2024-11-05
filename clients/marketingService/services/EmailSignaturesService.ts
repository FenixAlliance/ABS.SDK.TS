/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmailSignatureCreateDto } from '../models/EmailSignatureCreateDto';
import type { EmailSignatureDtoEnvelope } from '../models/EmailSignatureDtoEnvelope';
import type { EmailSignatureDtoListEnvelope } from '../models/EmailSignatureDtoListEnvelope';
import type { EmailSignatureUpdateDto } from '../models/EmailSignatureUpdateDto';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EmailSignaturesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns EmailSignatureDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2MarketingServiceEmailSignatures(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmailSignatureDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/MarketingService/EmailSignatures',
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
     * @param requestBody
     * @param xApiVersion
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2MarketingServiceEmailSignatures(
        tenantId: string,
        requestBody: EmailSignatureCreateDto,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/MarketingService/EmailSignatures',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
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
    public static getApiV2MarketingServiceEmailSignaturesCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/MarketingService/EmailSignatures/Count',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param emailsignatureId
     * @param xApiVersion
     * @returns EmailSignatureDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2MarketingServiceEmailSignatures1(
        tenantId: string,
        emailsignatureId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmailSignatureDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/MarketingService/EmailSignatures/{emailsignatureId}',
            path: {
                'emailsignatureId': emailsignatureId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param emailsignatureId
     * @param requestBody
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2MarketingServiceEmailSignatures(
        tenantId: string,
        emailsignatureId: string,
        requestBody: EmailSignatureUpdateDto,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/MarketingService/EmailSignatures/{emailsignatureId}',
            path: {
                'emailsignatureId': emailsignatureId,
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
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param emailsignatureId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2MarketingServiceEmailSignatures(
        tenantId: string,
        emailsignatureId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/MarketingService/EmailSignatures/{emailsignatureId}',
            path: {
                'emailsignatureId': emailsignatureId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
