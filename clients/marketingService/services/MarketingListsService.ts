/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { MarketingListCreateDto } from '../models/MarketingListCreateDto';
import type { MarketingListDtoEnvelope } from '../models/MarketingListDtoEnvelope';
import type { MarketingListDtoListEnvelope } from '../models/MarketingListDtoListEnvelope';
import type { MarketingListUpdateDto } from '../models/MarketingListUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MarketingListsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns MarketingListDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2MarketingServiceMarketingLists(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<MarketingListDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/MarketingService/MarketingLists',
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
     * @param requestBody
     * @param xApiVersion
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2MarketingServiceMarketingLists(
        tenantId: string,
        requestBody: MarketingListCreateDto,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/MarketingService/MarketingLists',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2MarketingServiceMarketingListsCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/MarketingService/MarketingLists/Count',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param marketinglistId
     * @param xApiVersion
     * @returns MarketingListDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2MarketingServiceMarketingLists1(
        tenantId: string,
        marketinglistId: string,
        xApiVersion?: string,
    ): CancelablePromise<MarketingListDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/MarketingService/MarketingLists/{marketinglistId}',
            path: {
                'marketinglistId': marketinglistId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param marketinglistId
     * @param requestBody
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2MarketingServiceMarketingLists(
        tenantId: string,
        marketinglistId: string,
        requestBody: MarketingListUpdateDto,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/MarketingService/MarketingLists/{marketinglistId}',
            path: {
                'marketinglistId': marketinglistId,
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
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param marketinglistId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2MarketingServiceMarketingLists(
        tenantId: string,
        marketinglistId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/MarketingService/MarketingLists/{marketinglistId}',
            path: {
                'marketinglistId': marketinglistId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
