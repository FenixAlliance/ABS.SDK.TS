"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ExchangeService {
    /**
     * @param amount
     * @param sourceCurrencyId
     * @param targetCurrencyId
     * @returns MoneyEnvelope OK
     * @throws ApiError
     */
    static getApiV2ForexServiceExchangeLatest(amount, sourceCurrencyId, targetCurrencyId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2ForexServiceExchangeHistory(amount, sourceCurrencyId, targetCurrencyId, date) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.ExchangeService = ExchangeService;
