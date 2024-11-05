"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeVService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ExchangeVService {
    /**
     * @param amount
     * @param sourceCurrencyId
     * @param targetCurrencyId
     * @returns ExchangeRateEnvelope OK
     * @throws ApiError
     */
    static getApiV3ForexServiceExchangeLatest(amount, sourceCurrencyId, targetCurrencyId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV3ForexServiceExchangeHistory(amount, sourceCurrencyId, targetCurrencyId, date) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.ExchangeVService = ExchangeVService;
