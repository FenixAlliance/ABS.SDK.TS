"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchantsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class MerchantsService {
    /**
     * @param xApiVersion
     * @returns MerchantDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceMerchants(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Merchants',
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
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceMerchantsCount(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Merchants/Count',
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
     * @param merchantId
     * @param xApiVersion
     * @returns MerchantDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceMerchants1(merchantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Merchants/{merchantId}',
            path: {
                'merchantId': merchantId,
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
exports.MerchantsService = MerchantsService;
