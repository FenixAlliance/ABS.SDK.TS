/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Int32Envelope } from '../models/Int32Envelope';
import type { ItemGoogleCategoryDtoEnvelope } from '../models/ItemGoogleCategoryDtoEnvelope';
import type { ItemGoogleCategoryDtoListEnvelope } from '../models/ItemGoogleCategoryDtoListEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ItemGoogleCategoriesService {
    /**
     * @param xApiVersion
     * @returns ItemGoogleCategoryDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItemGoogleCategories(
        xApiVersion?: string,
    ): CancelablePromise<ItemGoogleCategoryDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemGoogleCategories',
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
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItemGoogleCategoriesCount(
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemGoogleCategories/Count',
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
     * @param xApiVersion
     * @returns ItemGoogleCategoryDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItemGoogleCategoriesAll(
        xApiVersion?: string,
    ): CancelablePromise<ItemGoogleCategoryDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemGoogleCategories/All',
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
     * @param xApiVersion
     * @returns ItemGoogleCategoryDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItemGoogleCategoriesPrimary(
        xApiVersion?: string,
    ): CancelablePromise<ItemGoogleCategoryDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemGoogleCategories/Primary',
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
     * @param itemCategoryId
     * @param xApiVersion
     * @returns ItemGoogleCategoryDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItemGoogleCategories1(
        itemCategoryId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemGoogleCategoryDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemGoogleCategories/{itemCategoryId}',
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
     * @param itemCategoryId
     * @param xApiVersion
     * @returns ItemGoogleCategoryDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItemGoogleCategoriesChildren(
        itemCategoryId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemGoogleCategoryDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemGoogleCategories/{itemCategoryId}/Children',
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
     * @param xApiVersion
     * @returns ItemGoogleCategoryDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItemGoogleCategoriesTree(
        xApiVersion?: string,
    ): CancelablePromise<ItemGoogleCategoryDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemGoogleCategories/tree',
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
     * @param xApiVersion
     * @returns ItemGoogleCategoryDtoListEnvelope OK
     * @throws ApiError
     */
    public static postApiV2CatalogServiceItemGoogleCategoriesTree(
        xApiVersion?: string,
    ): CancelablePromise<ItemGoogleCategoryDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/ItemGoogleCategories/tree',
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
