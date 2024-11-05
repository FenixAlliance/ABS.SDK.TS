/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemTagCreateDto } from '../models/ItemTagCreateDto';
import type { ItemTagDtoEnvelope } from '../models/ItemTagDtoEnvelope';
import type { ItemTagDtoListEnvelope } from '../models/ItemTagDtoListEnvelope';
import type { ItemTagUpdateDto } from '../models/ItemTagUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ItemTagsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns ItemTagDtoEnvelope Created
     * @throws ApiError
     */
    public static postApiV2CatalogServiceItemTags(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: ItemTagCreateDto,
    ): CancelablePromise<ItemTagDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/ItemTags',
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
     * @returns ItemTagDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItemTags(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemTagDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemTags',
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
     * @param itemTagId
     * @param xApiVersion
     * @returns ItemTagDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItemTags1(
        itemTagId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemTagDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemTags/{itemTagId}',
            path: {
                'itemTagId': itemTagId,
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
     * @param itemTagId
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV2CatalogServiceItemTags(
        tenantId: string,
        itemTagId: string,
        xApiVersion?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/ItemTags/{itemTagId}',
            path: {
                'itemTagId': itemTagId,
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
     * @param itemTagId
     * @param xApiVersion
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV2CatalogServiceItemTags(
        tenantId: string,
        itemTagId: string,
        xApiVersion?: string,
        requestBody?: ItemTagUpdateDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CatalogService/ItemTags/{itemTagId}',
            path: {
                'itemTagId': itemTagId,
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
}
