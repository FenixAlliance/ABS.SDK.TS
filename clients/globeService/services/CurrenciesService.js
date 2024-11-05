"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrenciesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class CurrenciesService {
    /**
     * @param xApiVersion
     * @returns CurrencyDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2GlobeServiceCurrencies(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2GlobeServiceCurrencies1(currencyId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.CurrenciesService = CurrenciesService;
