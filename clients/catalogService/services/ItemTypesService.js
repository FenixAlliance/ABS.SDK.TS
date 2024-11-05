"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemTypesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ItemTypesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns ItemTypeDtoEnvelope Created
     * @throws ApiError
     */
    static postApiV2CatalogServiceItemTypes(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/ItemTypes',
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
     * @returns ItemTypeDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemTypes(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemTypes',
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
     * @param itemTypeId
     * @param xApiVersion
     * @returns ItemTypeDtoEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2CatalogServiceItemTypes(tenantId, itemTypeId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/ItemTypes/{itemTypeID}',
            path: {
                'itemTypeID': itemTypeId,
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
     * @param itemTypeId
     * @param xApiVersion
     * @returns ItemTypeDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemTypes1(itemTypeId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemTypes/{itemTypeID}',
            path: {
                'itemTypeID': itemTypeId,
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
     * @param itemTypeId
     * @param xApiVersion
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    static putApiV2CatalogServiceItemTypes(tenantId, itemTypeId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CatalogService/ItemTypes/{itemTypeID}',
            path: {
                'itemTypeID': itemTypeId,
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
}
exports.ItemTypesService = ItemTypesService;
