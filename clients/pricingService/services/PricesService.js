"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class PricesService {
    /**
     * @param itemId
     * @param priceListId
     * @param discountsListId
     * @param currencyId
     * @param xApiVersion
     * @returns PriceCalculationDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2PricingServicePricesPrice(itemId, priceListId, discountsListId, currencyId = 'USD.USA', xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2PricingServicePricesFinalPrice(itemId, currencyId = 'USD.USA', xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2PricingServicePricesTotalTaxes(itemId, currencyId = 'USD.USA', xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2PricingServicePricesTotalSavings(itemId, currencyId = 'USD.USA', xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.PricesService = PricesService;
