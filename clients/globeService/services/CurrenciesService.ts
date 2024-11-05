/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrencyDtoEnvelope } from '../models/CurrencyDtoEnvelope';
import type { CurrencyDtoListEnvelope } from '../models/CurrencyDtoListEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CurrenciesService {
    /**
     * @param xApiVersion
     * @returns CurrencyDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2GlobeServiceCurrencies(
        xApiVersion?: string,
    ): CancelablePromise<CurrencyDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/GlobeService/Currencies',
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
     * @returns CurrencyDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2GlobeServiceCurrencies1(
        currencyId: string,
        xApiVersion?: string,
    ): CancelablePromise<CurrencyDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/GlobeService/Currencies/{currencyId}',
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
}
