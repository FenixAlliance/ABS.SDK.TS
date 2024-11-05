"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishListsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class WishListsService {
    /**
     * @param cartId
     * @param productId
     * @param xApiVersion
     * @returns BooleanEnvelope OK
     * @throws ApiError
     */
    static getApiV2CartServiceWishListsContains(cartId, productId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/WishLists/Contains',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'cartId': cartId,
                'productId': productId,
            },
        });
    }
    /**
     * @param wishListId
     * @param xApiVersion
     * @returns BooleanEnvelope OK
     * @throws ApiError
     */
    static getApiV2CartServiceWishListsExists(wishListId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/WishLists/Exists',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'wishListId': wishListId,
            },
        });
    }
    /**
     * @param wishListId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static headApiV2CartServiceWishListsExists(wishListId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'HEAD',
            url: '/api/v2/CartService/WishLists/Exists',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'wishListId': wishListId,
            },
        });
    }
    /**
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static postApiV2CartServiceWishLists(xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CartService/WishLists',
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param wishListId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2CartServiceWishLists(wishListId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CartService/WishLists/{wishListId}',
            path: {
                'wishListId': wishListId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param wishListId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2CartServiceWishLists(wishListId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CartService/WishLists/{wishListId}',
            path: {
                'wishListId': wishListId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
    /**
     * @param cartId
     * @param xApiVersion
     * @returns WishListDto OK
     * @throws ApiError
     */
    static getApiV2CartServiceWishLists(cartId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/WishLists/{cartId}',
            path: {
                'cartId': cartId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
    /**
     * @param wishListId
     * @param xApiVersion
     * @returns WishListItemRecordDto OK
     * @throws ApiError
     */
    static getApiV2CartServiceWishListsRecords(wishListId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/WishLists/{wishListId}/Records',
            path: {
                'wishListId': wishListId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
    /**
     * @param wishListId
     * @param xApiVersion
     * @returns WishListDto OK
     * @throws ApiError
     */
    static getApiV2CartServiceWishListsDetails(wishListId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/WishLists/{wishListId}/Details',
            path: {
                'wishListId': wishListId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
    /**
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static postApiV2CartServiceWishListsRecords(xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CartService/WishLists/Records',
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param recordId
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    static deleteApiV2CartServiceWishListsRecords(recordId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CartService/WishLists/Records/{recordId}',
            path: {
                'recordId': recordId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
}
exports.WishListsService = WishListsService;
