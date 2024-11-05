"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceiptsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ReceiptsService {
    /**
     * @param tenantId
     * @returns ReceiptDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceReceipts(tenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Receipts',
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2AccountingServiceReceipts(tenantId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Receipts',
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceReceiptsCount(tenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Receipts/Count',
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param receiptId
     * @returns ReceiptDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceReceipts1(tenantId, receiptId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Receipts/{receiptId}',
            path: {
                'receiptId': receiptId,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param receiptId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2AccountingServiceReceipts(tenantId, receiptId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Receipts/{receiptId}',
            path: {
                'receiptId': receiptId,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param receiptId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2AccountingServiceReceipts(tenantId, receiptId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Receipts/{receiptId}',
            path: {
                'receiptId': receiptId,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
exports.ReceiptsService = ReceiptsService;
