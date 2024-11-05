"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class PaymentsService {
    /**
     * @deprecated
     * @param paymentId
     * @returns PaymentDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2PaymentsServicePaymentsDetails(paymentId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/PaymentsService/Payments/{paymentId}/Details',
            path: {
                'paymentId': paymentId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param paymentId
     * @returns PaymentDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2PaymentsServicePayments(paymentId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/PaymentsService/Payments/{paymentId}',
            path: {
                'paymentId': paymentId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param paymentId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2PaymentsServicePayments(tenantId, paymentId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/PaymentsService/Payments/{paymentId}',
            path: {
                'paymentId': paymentId,
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
     * @param paymentId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2PaymentsServicePayments(tenantId, paymentId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/PaymentsService/Payments/{paymentId}',
            path: {
                'paymentId': paymentId,
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
     * @returns PaymentDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2PaymentsServicePayments1(tenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/PaymentsService/Payments',
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
    static postApiV2PaymentsServicePayments(tenantId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/PaymentsService/Payments',
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
}
exports.PaymentsService = PaymentsService;
