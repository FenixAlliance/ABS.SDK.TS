/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Operation } from '../models/Operation';
import type { WebPageCategoryCreateDto } from '../models/WebPageCategoryCreateDto';
import type { WebPageCategoryDtoEnvelope } from '../models/WebPageCategoryDtoEnvelope';
import type { WebPageCategoryDtoListEnvelope } from '../models/WebPageCategoryDtoListEnvelope';
import type { WebPageCategoryUpdateDto } from '../models/WebPageCategoryUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WebPageCategoriesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns WebPageCategoryDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ContentServiceWebPageCategories(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<WebPageCategoryDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/WebPageCategories',
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
    public static postApiV2ContentServiceWebPageCategories(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: WebPageCategoryCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/ContentService/WebPageCategories',
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
     * @param webPageCategoryId
     * @param xApiVersion
     * @returns WebPageCategoryDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ContentServiceWebPageCategories1(
        webPageCategoryId: string,
        xApiVersion?: string,
    ): CancelablePromise<WebPageCategoryDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/WebPageCategories/{webPageCategoryId}',
            path: {
                'webPageCategoryId': webPageCategoryId,
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
     * @param webPageCategoryId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2ContentServiceWebPageCategories(
        tenantId: string,
        webPageCategoryId: string,
        xApiVersion?: string,
        requestBody?: WebPageCategoryUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/ContentService/WebPageCategories/{webPageCategoryId}',
            path: {
                'webPageCategoryId': webPageCategoryId,
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
     * @param webPageCategoryId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static patchApiV2ContentServiceWebPageCategories(
        tenantId: string,
        webPageCategoryId: string,
        xApiVersion?: string,
        requestBody?: Array<Operation>,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/ContentService/WebPageCategories/{webPageCategoryId}',
            path: {
                'webPageCategoryId': webPageCategoryId,
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
     * @param webPageCategoryId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2ContentServiceWebPageCategories(
        tenantId: string,
        webPageCategoryId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/ContentService/WebPageCategories/{webPageCategoryId}',
            path: {
                'webPageCategoryId': webPageCategoryId,
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
