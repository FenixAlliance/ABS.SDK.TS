/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmailTemplateCreateDto } from '../models/EmailTemplateCreateDto';
import type { EmailTemplateDtoEnvelope } from '../models/EmailTemplateDtoEnvelope';
import type { EmailTemplateDtoListEnvelope } from '../models/EmailTemplateDtoListEnvelope';
import type { EmailTemplateUpdateDto } from '../models/EmailTemplateUpdateDto';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EmailTemplatesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns EmailTemplateDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2MarketingServiceEmailTemplates(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmailTemplateDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/MarketingService/EmailTemplates',
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
    public static postApiV2MarketingServiceEmailTemplates(
        tenantId: string,
        requestBody: EmailTemplateCreateDto,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/MarketingService/EmailTemplates',
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
    public static getApiV2MarketingServiceEmailTemplatesCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/MarketingService/EmailTemplates/Count',
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
     * @param emailTemplatesId
     * @param emailTemplateId
     * @param xApiVersion
     * @returns EmailTemplateDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2MarketingServiceEmailTemplates1(
        tenantId: string,
        emailTemplatesId: string,
        emailTemplateId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmailTemplateDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/MarketingService/EmailTemplates/{emailTemplateId}',
            path: {
                'emailTemplateId': emailTemplateId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'emailTemplatesId': emailTemplatesId,
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
     * @param emailTemplateId
     * @param requestBody
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2MarketingServiceEmailTemplates(
        tenantId: string,
        emailTemplateId: string,
        requestBody: EmailTemplateUpdateDto,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/MarketingService/EmailTemplates/{emailTemplateId}',
            path: {
                'emailTemplateId': emailTemplateId,
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
     * @param emailTemplateId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2MarketingServiceEmailTemplates(
        tenantId: string,
        emailTemplateId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/MarketingService/EmailTemplates/{emailTemplateId}',
            path: {
                'emailTemplateId': emailTemplateId,
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
