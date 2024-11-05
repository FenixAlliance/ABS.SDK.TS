/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemReviewCreateDto } from '../models/ItemReviewCreateDto';
import type { ItemReviewDtoEnvelope } from '../models/ItemReviewDtoEnvelope';
import type { ItemReviewDtoListEnvelope } from '../models/ItemReviewDtoListEnvelope';
import type { ItemReviewUpdateDto } from '../models/ItemReviewUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ItemReviewsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns ItemReviewDtoEnvelope Created
     * @throws ApiError
     */
    public static postApiV2CatalogServiceItemReviews(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: ItemReviewCreateDto,
    ): CancelablePromise<ItemReviewDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/ItemReviews',
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
     * @param itemId
     * @param xApiVersion
     * @returns ItemReviewDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItemReviews(
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemReviewDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemReviews',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'itemId': itemId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param itemReviewId
     * @param xApiVersion
     * @returns ItemReviewDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItemReviews1(
        itemReviewId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemReviewDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemReviews/{itemReviewId}',
            path: {
                'itemReviewId': itemReviewId,
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
     * @param itemReviewId
     * @param xApiVersion
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV2CatalogServiceItemReviews(
        tenantId: string,
        itemReviewId: string,
        xApiVersion?: string,
        requestBody?: ItemReviewUpdateDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CatalogService/ItemReviews/{itemReviewId}',
            path: {
                'itemReviewId': itemReviewId,
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
     * @param itemReviewId
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV2CatalogServiceItemReviews(
        tenantId: string,
        itemReviewId: string,
        xApiVersion?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/ItemReviews/{itemReviewId}',
            path: {
                'itemReviewId': itemReviewId,
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
