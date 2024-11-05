"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompareService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class CompareService {
    /**
     * @param cartId
     * @param xApiVersion
     * @returns ItemToCompareCartRecordDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CartServiceCompare(cartId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Compare/{cartId}',
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
     * @param recordId
     * @param xApiVersion
     * @returns ItemToCompareCartRecordDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2CartServiceCompareDetails(recordId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Compare/{recordId}/Details',
            path: {
                'recordId': recordId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param xApiVersion
     * @param requestBody
     * @returns ItemCartRecordDto OK
     * @throws ApiError
     */
    static postApiV2CartServiceCompare(xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CartService/Compare',
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param recordId
     * @param xApiVersion
     * @returns ItemToCompareCartRecordDto OK
     * @throws ApiError
     */
    static deleteApiV2CartServiceCompare(recordId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CartService/Compare/{recordId}',
            path: {
                'recordId': recordId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
exports.CompareService = CompareService;
