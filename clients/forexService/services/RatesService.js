"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class RatesService {
    /**
     * @param xApiVersion
     * @returns ForexRatesDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2ForexServiceRatesLatest(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2ForexServiceRatesLatest1(currencyId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2ForexServiceRatesHistory(date, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2ForexServiceRatesHistory1(currencyId, date, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.RatesService = RatesService;
