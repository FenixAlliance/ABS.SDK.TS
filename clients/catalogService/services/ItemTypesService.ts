/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemTypeCreateDto } from '../models/ItemTypeCreateDto';
import type { ItemTypeDtoEnvelope } from '../models/ItemTypeDtoEnvelope';
import type { ItemTypeDtoListEnvelope } from '../models/ItemTypeDtoListEnvelope';
import type { ItemTypeUpdateDto } from '../models/ItemTypeUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ItemTypesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns ItemTypeDtoEnvelope Created
     * @throws ApiError
     */
    public static postApiV2CatalogServiceItemTypes(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: ItemTypeCreateDto,
    ): CancelablePromise<ItemTypeDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/ItemTypes',
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
     * @returns ItemTypeDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItemTypes(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemTypeDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemTypes',
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
     * @param itemTypeId
     * @param xApiVersion
     * @returns ItemTypeDtoEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2CatalogServiceItemTypes(
        tenantId: string,
        itemTypeId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemTypeDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/ItemTypes/{itemTypeID}',
            path: {
                'itemTypeID': itemTypeId,
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
     * @param itemTypeId
     * @param xApiVersion
     * @returns ItemTypeDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItemTypes1(
        itemTypeId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemTypeDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemTypes/{itemTypeID}',
            path: {
                'itemTypeID': itemTypeId,
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
     * @param itemTypeId
     * @param xApiVersion
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV2CatalogServiceItemTypes(
        tenantId: string,
        itemTypeId: string,
        xApiVersion?: string,
        requestBody?: ItemTypeUpdateDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CatalogService/ItemTypes/{itemTypeID}',
            path: {
                'itemTypeID': itemTypeId,
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
