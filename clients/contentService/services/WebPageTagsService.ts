/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Operation } from '../models/Operation';
import type { WebPageTagCreateDto } from '../models/WebPageTagCreateDto';
import type { WebPageTagDtoEnvelope } from '../models/WebPageTagDtoEnvelope';
import type { WebPageTagDtoListEnvelope } from '../models/WebPageTagDtoListEnvelope';
import type { WebPageTagUpdateDto } from '../models/WebPageTagUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WebPageTagsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns WebPageTagDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ContentServiceWebPageTags(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<WebPageTagDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/WebPageTags',
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
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2ContentServiceWebPageTags(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: WebPageTagCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/ContentService/WebPageTags',
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
     * @param webPageTagId
     * @param xApiVersion
     * @returns WebPageTagDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ContentServiceWebPageTags1(
        webPageTagId: string,
        xApiVersion?: string,
    ): CancelablePromise<WebPageTagDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/WebPageTags/{webPageTagId}',
            path: {
                'webPageTagId': webPageTagId,
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
     * @param tenantId
     * @param webPageTagId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static patchApiV2ContentServiceWebPageTags(
        tenantId: string,
        webPageTagId: string,
        xApiVersion?: string,
        requestBody?: Array<Operation>,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/ContentService/WebPageTags/{webPageTagId}',
            path: {
                'webPageTagId': webPageTagId,
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
     * @param tenantId
     * @param webPageTagId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2ContentServiceWebPageTags(
        tenantId: string,
        webPageTagId: string,
        xApiVersion?: string,
        requestBody?: WebPageTagUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/ContentService/WebPageTags/{webPageTagId}',
            path: {
                'webPageTagId': webPageTagId,
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
     * @param tenantId
     * @param webPageTagId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2ContentServiceWebPageTags(
        tenantId: string,
        webPageTagId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/ContentService/WebPageTags/{webPageTagId}',
            path: {
                'webPageTagId': webPageTagId,
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
