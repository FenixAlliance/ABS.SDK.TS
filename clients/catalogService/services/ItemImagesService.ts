/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemImageCreateDto } from '../models/ItemImageCreateDto';
import type { ItemImageDtoEnvelope } from '../models/ItemImageDtoEnvelope';
import type { ItemImageDtoListEnvelope } from '../models/ItemImageDtoListEnvelope';
import type { ItemImageUpdateDto } from '../models/ItemImageUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ItemImagesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns ItemImageDtoEnvelope Created
     * @throws ApiError
     */
    public static postApiV2CatalogServiceItemImages(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: ItemImageCreateDto,
    ): CancelablePromise<ItemImageDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/ItemImages',
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
     * @returns ItemImageDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItemImages(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemImageDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemImages',
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
     * @param itemImageId
     * @param xApiVersion
     * @returns ItemImageDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItemImages1(
        itemImageId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemImageDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemImages/{itemImageId}',
            path: {
                'itemImageId': itemImageId,
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
     * @param itemImageId
     * @param xApiVersion
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV2CatalogServiceItemImages(
        tenantId: string,
        itemImageId: string,
        xApiVersion?: string,
        requestBody?: ItemImageUpdateDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CatalogService/ItemImages/{itemImageId}',
            path: {
                'itemImageId': itemImageId,
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
     * @param itemImageId
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV2CatalogServiceItemImages(
        tenantId: string,
        itemImageId: string,
        xApiVersion?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/ItemImages/{itemImageId}',
            path: {
                'itemImageId': itemImageId,
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
