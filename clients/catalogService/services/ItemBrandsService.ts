/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemBrandCreateDto } from '../models/ItemBrandCreateDto';
import type { ItemBrandDtoEnvelope } from '../models/ItemBrandDtoEnvelope';
import type { ItemBrandDtoListEnvelope } from '../models/ItemBrandDtoListEnvelope';
import type { ItemBrandUpdateDto } from '../models/ItemBrandUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ItemBrandsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns ItemBrandDtoEnvelope Created
     * @throws ApiError
     */
    public static postApiV2CatalogServiceItemBrands(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: ItemBrandCreateDto,
    ): CancelablePromise<ItemBrandDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/ItemBrands',
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
     * @returns ItemBrandDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItemBrands(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemBrandDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemBrands',
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
     * @param itemBrandId
     * @param xApiVersion
     * @returns ItemBrandDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItemBrands1(
        itemBrandId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemBrandDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemBrands/{itemBrandId}',
            path: {
                'itemBrandId': itemBrandId,
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
     * @param itemBrandId
     * @param xApiVersion
     * @param requestBody
     * @returns ItemBrandDtoEnvelope OK
     * @throws ApiError
     */
    public static putApiV2CatalogServiceItemBrands(
        tenantId: string,
        itemBrandId: string,
        xApiVersion?: string,
        requestBody?: ItemBrandUpdateDto,
    ): CancelablePromise<ItemBrandDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CatalogService/ItemBrands/{itemBrandId}',
            path: {
                'itemBrandId': itemBrandId,
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
     * @param itemBrandId
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV2CatalogServiceItemBrands(
        tenantId: string,
        itemBrandId: string,
        xApiVersion?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/ItemBrands/{itemBrandId}',
            path: {
                'itemBrandId': itemBrandId,
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
