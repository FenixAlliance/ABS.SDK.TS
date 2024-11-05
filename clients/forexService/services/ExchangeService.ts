/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MoneyEnvelope } from '../models/MoneyEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ExchangeService {
    /**
     * @param amount
     * @param sourceCurrencyId
     * @param targetCurrencyId
     * @returns MoneyEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ForexServiceExchangeLatest(
        amount: number,
        sourceCurrencyId: string,
        targetCurrencyId: string,
    ): CancelablePromise<MoneyEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ForexService/Exchange/Latest',
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
     * @returns MoneyEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ForexServiceExchangeHistory(
        amount: number,
        sourceCurrencyId: string,
        targetCurrencyId: string,
        date: string,
    ): CancelablePromise<MoneyEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ForexService/Exchange/History',
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
