/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Operation } from '../models/Operation';
import type { WebPageCategoryCreateDto } from '../models/WebPageCategoryCreateDto';
import type { WebPageCategoryDtoListEnvelope } from '../models/WebPageCategoryDtoListEnvelope';
import type { WebPageCreateDto } from '../models/WebPageCreateDto';
import type { WebPageDtoEnvelope } from '../models/WebPageDtoEnvelope';
import type { WebPageDtoListEnvelope } from '../models/WebPageDtoListEnvelope';
import type { WebPageTagCreateDto } from '../models/WebPageTagCreateDto';
import type { WebPageTagDtoListEnvelope } from '../models/WebPageTagDtoListEnvelope';
import type { WebPageUpdateDto } from '../models/WebPageUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WebPagesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns WebPageDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ContentServiceWebPages(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<WebPageDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/WebPages',
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
    public static postApiV2ContentServiceWebPages(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: WebPageCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/ContentService/WebPages',
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
     * @param webPageId
     * @param xApiVersion
     * @returns WebPageDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ContentServiceWebPages1(
        webPageId: string,
        xApiVersion?: string,
    ): CancelablePromise<WebPageDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/WebPages/{webPageId}',
            path: {
                'webPageId': webPageId,
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
     * @param webPageId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static patchApiV2ContentServiceWebPages(
        tenantId: string,
        webPageId: string,
        xApiVersion?: string,
        requestBody?: Array<Operation>,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/ContentService/WebPages/{webPageId}',
            path: {
                'webPageId': webPageId,
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
     * @param webPageId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2ContentServiceWebPages(
        tenantId: string,
        webPageId: string,
        xApiVersion?: string,
        requestBody?: WebPageUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/ContentService/WebPages/{webPageId}',
            path: {
                'webPageId': webPageId,
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
     * @param webPageId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2ContentServiceWebPages(
        tenantId: string,
        webPageId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/ContentService/WebPages/{webPageId}',
            path: {
                'webPageId': webPageId,
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
     * @param webPageId
     * @param xApiVersion
     * @returns WebPageTagDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ContentServiceWebPagesTags(
        webPageId: string,
        xApiVersion?: string,
    ): CancelablePromise<WebPageTagDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/WebPages/{webPageId}/Tags',
            path: {
                'webPageId': webPageId,
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
     * @param webPageId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2ContentServiceWebPagesTags(
        tenantId: string,
        webPageId: string,
        xApiVersion?: string,
        requestBody?: WebPageTagCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/ContentService/WebPages/{webPageId}/Tags',
            path: {
                'webPageId': webPageId,
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
     * @param webPageId
     * @param tagId
     * @param xApiVersion
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2ContentServiceWebPagesTags1(
        tenantId: string,
        webPageId: string,
        tagId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/ContentService/WebPages/{webPageId}/Tags/{tagId}',
            path: {
                'webPageId': webPageId,
                'tagId': tagId,
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
     * @param tenantId
     * @param webPageId
     * @param tagId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2ContentServiceWebPagesTags(
        tenantId: string,
        webPageId: string,
        tagId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/ContentService/WebPages/{webPageId}/Tags/{tagId}',
            path: {
                'webPageId': webPageId,
                'tagId': tagId,
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
     * @param webPageId
     * @param xApiVersion
     * @returns WebPageCategoryDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ContentServiceWebPagesCategories(
        webPageId: string,
        xApiVersion?: string,
    ): CancelablePromise<WebPageCategoryDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/WebPages/{webPageId}/Categories',
            path: {
                'webPageId': webPageId,
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
     * @param webPageId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2ContentServiceWebPagesCategories(
        tenantId: string,
        webPageId: string,
        xApiVersion?: string,
        requestBody?: WebPageCategoryCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/ContentService/WebPages/{webPageId}/Categories',
            path: {
                'webPageId': webPageId,
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
     * @param webPageId
     * @param categoryId
     * @param xApiVersion
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2ContentServiceWebPagesCategories1(
        tenantId: string,
        webPageId: string,
        categoryId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/ContentService/WebPages/{webPageId}/Categories/{categoryId}',
            path: {
                'webPageId': webPageId,
                'categoryId': categoryId,
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
     * @param tenantId
     * @param webPageId
     * @param categoryId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2ContentServiceWebPagesCategories(
        tenantId: string,
        webPageId: string,
        categoryId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/ContentService/WebPages/{webPageId}/Categories/{categoryId}',
            path: {
                'webPageId': webPageId,
                'categoryId': categoryId,
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
