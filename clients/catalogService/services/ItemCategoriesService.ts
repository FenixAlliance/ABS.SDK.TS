/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemCategoryCreateDto } from '../models/ItemCategoryCreateDto';
import type { ItemCategoryDtoEnvelope } from '../models/ItemCategoryDtoEnvelope';
import type { ItemCategoryDtoListEnvelope } from '../models/ItemCategoryDtoListEnvelope';
import type { ItemCategoryUpdateDto } from '../models/ItemCategoryUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ItemCategoriesService {
    /**
     * @param itemCategoryId
     * @param xApiVersion
     * @returns ItemCategoryDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItemCategories(
        itemCategoryId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemCategoryDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemCategories/{itemCategoryId}',
            path: {
                'itemCategoryId': itemCategoryId,
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
     * @param itemCategoryId
     * @param xApiVersion
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV2CatalogServiceItemCategories(
        tenantId: string,
        itemCategoryId: string,
        xApiVersion?: string,
        requestBody?: ItemCategoryUpdateDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CatalogService/ItemCategories/{itemCategoryId}',
            path: {
                'itemCategoryId': itemCategoryId,
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
     * @param itemCategoryId
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV2CatalogServiceItemCategories(
        tenantId: string,
        itemCategoryId: string,
        xApiVersion?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/ItemCategories/{itemCategoryId}',
            path: {
                'itemCategoryId': itemCategoryId,
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
     * @param xApiVersion
     * @returns ItemCategoryDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItemCategories1(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemCategoryDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemCategories',
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
     * @returns ItemCategoryDtoEnvelope Created
     * @throws ApiError
     */
    public static postApiV2CatalogServiceItemCategories(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: ItemCategoryCreateDto,
    ): CancelablePromise<ItemCategoryDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/ItemCategories',
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
}
