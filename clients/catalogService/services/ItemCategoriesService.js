"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCategoriesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ItemCategoriesService {
    /**
     * @param itemCategoryId
     * @param xApiVersion
     * @returns ItemCategoryDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemCategories(itemCategoryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemCategories/{itemCategoryId}',
            path: {
                'itemCategoryId': itemCategoryId,
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
     * @param itemCategoryId
     * @param xApiVersion
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    static putApiV2CatalogServiceItemCategories(tenantId, itemCategoryId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CatalogService/ItemCategories/{itemCategoryId}',
            path: {
                'itemCategoryId': itemCategoryId,
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
     * @param itemCategoryId
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    static deleteApiV2CatalogServiceItemCategories(tenantId, itemCategoryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/ItemCategories/{itemCategoryId}',
            path: {
                'itemCategoryId': itemCategoryId,
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
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns ItemCategoryDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemCategories1(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemCategories',
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
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns ItemCategoryDtoEnvelope Created
     * @throws ApiError
     */
    static postApiV2CatalogServiceItemCategories(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/ItemCategories',
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
}
exports.ItemCategoriesService = ItemCategoriesService;
