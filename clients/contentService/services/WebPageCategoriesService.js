"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebPageCategoriesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class WebPageCategoriesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns WebPageCategoryDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2ContentServiceWebPageCategories(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/WebPageCategories',
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
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2ContentServiceWebPageCategories(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/ContentService/WebPageCategories',
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
     * @param webPageCategoryId
     * @param xApiVersion
     * @returns WebPageCategoryDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2ContentServiceWebPageCategories1(webPageCategoryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/WebPageCategories/{webPageCategoryId}',
            path: {
                'webPageCategoryId': webPageCategoryId,
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
     * @param webPageCategoryId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2ContentServiceWebPageCategories(tenantId, webPageCategoryId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/ContentService/WebPageCategories/{webPageCategoryId}',
            path: {
                'webPageCategoryId': webPageCategoryId,
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
     * @param webPageCategoryId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static patchApiV2ContentServiceWebPageCategories(tenantId, webPageCategoryId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/ContentService/WebPageCategories/{webPageCategoryId}',
            path: {
                'webPageCategoryId': webPageCategoryId,
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
     * @param webPageCategoryId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2ContentServiceWebPageCategories(tenantId, webPageCategoryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/ContentService/WebPageCategories/{webPageCategoryId}',
            path: {
                'webPageCategoryId': webPageCategoryId,
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
exports.WebPageCategoriesService = WebPageCategoriesService;
