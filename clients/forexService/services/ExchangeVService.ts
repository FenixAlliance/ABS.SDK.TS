/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExchangeRateEnvelope } from '../models/ExchangeRateEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ExchangeVService {
    /**
     * @param amount
     * @param sourceCurrencyId
     * @param targetCurrencyId
     * @returns ExchangeRateEnvelope OK
     * @throws ApiError
     */
    public static getApiV3ForexServiceExchangeLatest(
        amount: number,
        sourceCurrencyId: string,
        targetCurrencyId: string,
    ): CancelablePromise<ExchangeRateEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v3/ForexService/Exchange/Latest',
            query: {
                'amount': amount,
                'sourceCurrencyId': sourceCurrencyId,
                'targetCurrencyId': targetCurrencyId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param amount
     * @param sourceCurrencyId
     * @param targetCurrencyId
     * @param date
     * @returns ExchangeRateEnvelope OK
     * @throws ApiError
     */
    public static getApiV3ForexServiceExchangeHistory(
        amount: number,
        sourceCurrencyId: string,
        targetCurrencyId: string,
        date: string,
    ): CancelablePromise<ExchangeRateEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v3/ForexService/Exchange/History',
            query: {
                'amount': amount,
                'sourceCurrencyId': sourceCurrencyId,
                'targetCurrencyId': targetCurrencyId,
                'date': date,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
