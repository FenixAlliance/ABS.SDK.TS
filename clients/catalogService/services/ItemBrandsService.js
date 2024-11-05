"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemBrandsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ItemBrandsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns ItemBrandDtoEnvelope Created
     * @throws ApiError
     */
    static postApiV2CatalogServiceItemBrands(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/ItemBrands',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns ItemBrandDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemBrands(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemBrands',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param itemBrandId
     * @param xApiVersion
     * @returns ItemBrandDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemBrands1(itemBrandId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemBrands/{itemBrandId}',
            path: {
                'itemBrandId': itemBrandId,
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
     * @param tenantId
     * @param itemBrandId
     * @param xApiVersion
     * @param requestBody
     * @returns ItemBrandDtoEnvelope OK
     * @throws ApiError
     */
    static putApiV2CatalogServiceItemBrands(tenantId, itemBrandId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CatalogService/ItemBrands/{itemBrandId}',
            path: {
                'itemBrandId': itemBrandId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param itemBrandId
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    static deleteApiV2CatalogServiceItemBrands(tenantId, itemBrandId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/ItemBrands/{itemBrandId}',
            path: {
                'itemBrandId': itemBrandId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
exports.ItemBrandsService = ItemBrandsService;
