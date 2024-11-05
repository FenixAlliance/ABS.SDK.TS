"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceEnumerationRangesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class InvoiceEnumerationRangesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns InvoiceEnumerationRangeDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceInvoiceEnumerationRanges(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/InvoiceEnumerationRanges',
            headers: {
                'x-api-version': xApiVersion,
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
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2AccountingServiceInvoiceEnumerationRanges(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/InvoiceEnumerationRanges',
            headers: {
                'x-api-version': xApiVersion,
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
     * @param invoiceEnumerationRangeId
     * @param xApiVersion
     * @returns InvoiceEnumerationRangeDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceInvoiceEnumerationRanges1(tenantId, invoiceEnumerationRangeId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/InvoiceEnumerationRanges/{invoiceEnumerationRangeId}',
            path: {
                'invoiceEnumerationRangeId': invoiceEnumerationRangeId,
            },
            headers: {
                'x-api-version': xApiVersion,
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
     * @param invoiceEnumerationRangeId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2AccountingServiceInvoiceEnumerationRanges(tenantId, invoiceEnumerationRangeId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/InvoiceEnumerationRanges/{invoiceEnumerationRangeId}',
            path: {
                'invoiceEnumerationRangeId': invoiceEnumerationRangeId,
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
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceEnumerationRangeId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2AccountingServiceInvoiceEnumerationRanges(tenantId, invoiceEnumerationRangeId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/InvoiceEnumerationRanges/{invoiceEnumerationRangeId}',
            path: {
                'invoiceEnumerationRangeId': invoiceEnumerationRangeId,
            },
            headers: {
                'x-api-version': xApiVersion,
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
exports.InvoiceEnumerationRangesService = InvoiceEnumerationRangesService;
