/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Int32Envelope } from '../models/Int32Envelope';
import type { MerchantDtoEnvelope } from '../models/MerchantDtoEnvelope';
import type { MerchantDtoListEnvelope } from '../models/MerchantDtoListEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MerchantsService {
    /**
     * @param xApiVersion
     * @returns MerchantDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceMerchants(
        xApiVersion?: string,
    ): CancelablePromise<MerchantDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Merchants',
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
    public static getApiV2CatalogServiceMerchantsCount(
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Merchants/Count',
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
     * @param merchantId
     * @param xApiVersion
     * @returns MerchantDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceMerchants1(
        merchantId: string,
        xApiVersion?: string,
    ): CancelablePromise<MerchantDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Merchants/{merchantId}',
            path: {
                'merchantId': merchantId,
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
}
