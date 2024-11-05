/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MoneyEnvelope } from '../models/MoneyEnvelope';
import type { PriceCalculationDtoEnvelope } from '../models/PriceCalculationDtoEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PricesService {
    /**
     * @param itemId
     * @param priceListId
     * @param discountsListId
     * @param currencyId
     * @param xApiVersion
     * @returns PriceCalculationDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2PricingServicePricesPrice(
        itemId: string,
        priceListId?: string,
        discountsListId?: string,
        currencyId: string = 'USD.USA',
        xApiVersion?: string,
    ): CancelablePromise<PriceCalculationDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/PricingService/Prices/{itemId}/Price',
            path: {
                'itemId': itemId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'priceListId': priceListId,
                'discountsListId': discountsListId,
                'currencyId': currencyId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param itemId
     * @param currencyId
     * @param xApiVersion
     * @returns MoneyEnvelope OK
     * @throws ApiError
     */
    public static getApiV2PricingServicePricesFinalPrice(
        itemId: string,
        currencyId: string = 'USD.USA',
        xApiVersion?: string,
    ): CancelablePromise<MoneyEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/PricingService/Prices/{itemId}/FinalPrice',
            path: {
                'itemId': itemId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'currencyId': currencyId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param itemId
     * @param currencyId
     * @param xApiVersion
     * @returns MoneyEnvelope OK
     * @throws ApiError
     */
    public static getApiV2PricingServicePricesTotalTaxes(
        itemId: string,
        currencyId: string = 'USD.USA',
        xApiVersion?: string,
    ): CancelablePromise<MoneyEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/PricingService/Prices/{itemId}/TotalTaxes',
            path: {
                'itemId': itemId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'currencyId': currencyId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param itemId
     * @param currencyId
     * @param xApiVersion
     * @returns MoneyEnvelope OK
     * @throws ApiError
     */
    public static getApiV2PricingServicePricesTotalSavings(
        itemId: string,
        currencyId: string = 'USD.USA',
        xApiVersion?: string,
    ): CancelablePromise<MoneyEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/PricingService/Prices/{itemId}/TotalSavings',
            path: {
                'itemId': itemId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'currencyId': currencyId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
