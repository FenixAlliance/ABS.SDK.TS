"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class RecordsService {
    /**
     * @param cartId
     * @param itemId
     * @param quantity
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static postApiV2CartServiceRecordsAddItem(cartId, itemId, quantity, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CartService/Records/AddItem',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'cartId': cartId,
                'itemId': itemId,
                'quantity': quantity,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param cartId
     * @param xApiVersion
     * @returns ItemCartRecordDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CartServiceRecords(cartId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Records/{cartID}',
            path: {
                'cartId': cartId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static postApiV2CartServiceRecords(xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CartService/Records',
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param cartId
     * @param productId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2CartServiceRecords(cartId, productId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CartService/Records',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'cartId': cartId,
                'productId': productId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param itemId
     * @param cartId
     * @param xApiVersion
     * @returns BooleanEnvelope OK
     * @throws ApiError
     */
    static getApiV2CartServiceRecordsIsInCart(itemId, cartId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Records/IsInCart',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'itemID': itemId,
                'cartID': cartId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param cartId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static postApiV2CartServiceRecordsClearCart(cartId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CartService/Records/ClearCart',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'cartID': cartId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param recordId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static getApiV2CartServiceRecordsDetails(recordId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Records/{recordId}/Details',
            path: {
                'recordId': recordId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param recordId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2CartServiceRecords(recordId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CartService/Records/{recordId}',
            path: {
                'recordId': recordId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param recordId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2CartServiceRecords1(recordId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CartService/Records/{recordId}',
            path: {
                'recordId': recordId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param recordId
     * @param quantity
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2CartServiceRecordsIncrease(recordId, quantity = 1, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CartService/Records/{recordId}/Increase',
            path: {
                'recordId': recordId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'quantity': quantity,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param recordId
     * @param quantity
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2CartServiceRecordsDecrease(recordId, quantity = 1, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CartService/Records/{recordId}/Decrease',
            path: {
                'recordId': recordId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'quantity': quantity,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
}
exports.RecordsService = RecordsService;
