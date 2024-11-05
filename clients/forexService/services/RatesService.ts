/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExchangeRateEnvelope } from '../models/ExchangeRateEnvelope';
import type { ForexRatesDtoEnvelope } from '../models/ForexRatesDtoEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RatesService {
    /**
     * @param xApiVersion
     * @returns ForexRatesDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ForexServiceRatesLatest(
        xApiVersion?: string,
    ): CancelablePromise<ForexRatesDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ForexService/Rates/Latest',
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
     * @param currencyId
     * @param xApiVersion
     * @returns ExchangeRateEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ForexServiceRatesLatest1(
        currencyId: string,
        xApiVersion?: string,
    ): CancelablePromise<ExchangeRateEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ForexService/Rates/Latest/{currencyId}',
            path: {
                'currencyId': currencyId,
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
     * @param date
     * @param xApiVersion
     * @returns ForexRatesDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ForexServiceRatesHistory(
        date?: string,
        xApiVersion?: string,
    ): CancelablePromise<ForexRatesDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ForexService/Rates/History',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'date': date,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param currencyId
     * @param date
     * @param xApiVersion
     * @returns ExchangeRateEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ForexServiceRatesHistory1(
        currencyId: string,
        date?: string,
        xApiVersion?: string,
    ): CancelablePromise<ExchangeRateEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ForexService/Rates/History/{currencyId}',
            path: {
                'currencyId': currencyId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'date': date,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
