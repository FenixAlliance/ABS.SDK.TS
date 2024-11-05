/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemAttributeCreateDto } from '../models/ItemAttributeCreateDto';
import type { ItemAttributeDtoEnvelope } from '../models/ItemAttributeDtoEnvelope';
import type { ItemAttributeDtoListEnvelope } from '../models/ItemAttributeDtoListEnvelope';
import type { ItemAttributeUpdateDto } from '../models/ItemAttributeUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ItemAttributesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns ItemAttributeDtoEnvelope Created
     * @throws ApiError
     */
    public static postApiV2CatalogServiceItemAttributes(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: ItemAttributeCreateDto,
    ): CancelablePromise<ItemAttributeDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/ItemAttributes',
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
     * @returns ItemAttributeDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItemAttributes(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemAttributeDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemAttributes',
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
     * @param itemAttributeId
     * @param xApiVersion
     * @returns ItemAttributeDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItemAttributes1(
        itemAttributeId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemAttributeDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemAttributes/{itemAttributeId}',
            path: {
                'itemAttributeId': itemAttributeId,
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
     * @param itemAttributeId
     * @param xApiVersion
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV2CatalogServiceItemAttributes(
        tenantId: string,
        itemAttributeId: string,
        xApiVersion?: string,
        requestBody?: ItemAttributeUpdateDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CatalogService/ItemAttributes/{itemAttributeId}',
            path: {
                'itemAttributeId': itemAttributeId,
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
     * @param itemAttributeId
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV2CatalogServiceItemAttributes(
        tenantId: string,
        itemAttributeId: string,
        xApiVersion?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/ItemAttributes/{itemAttributeId}',
            path: {
                'itemAttributeId': itemAttributeId,
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
