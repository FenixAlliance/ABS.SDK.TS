"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemGoogleCategoriesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ItemGoogleCategoriesService {
    /**
     * @param xApiVersion
     * @returns ItemGoogleCategoryDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemGoogleCategories(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemGoogleCategories',
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
    static getApiV2CatalogServiceItemGoogleCategoriesCount(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemGoogleCategories/Count',
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
     * @returns ItemGoogleCategoryDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemGoogleCategoriesAll(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemGoogleCategories/All',
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
     * @returns ItemGoogleCategoryDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemGoogleCategoriesPrimary(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemGoogleCategories/Primary',
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
     * @param itemCategoryId
     * @param xApiVersion
     * @returns ItemGoogleCategoryDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemGoogleCategories1(itemCategoryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemGoogleCategories/{itemCategoryId}',
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
     * @param itemCategoryId
     * @param xApiVersion
     * @returns ItemGoogleCategoryDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemGoogleCategoriesChildren(itemCategoryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemGoogleCategories/{itemCategoryId}/Children',
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
     * @param xApiVersion
     * @returns ItemGoogleCategoryDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemGoogleCategoriesTree(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemGoogleCategories/tree',
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
     * @returns ItemGoogleCategoryDtoListEnvelope OK
     * @throws ApiError
     */
    static postApiV2CatalogServiceItemGoogleCategoriesTree(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/ItemGoogleCategories/tree',
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
exports.ItemGoogleCategoriesService = ItemGoogleCategoriesService;
