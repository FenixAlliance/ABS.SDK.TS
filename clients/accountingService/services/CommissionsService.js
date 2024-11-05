"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommissionsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class CommissionsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns CommissionDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceCommissionsCommissions(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Commissions/Commissions',
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
     * @returns CommissionDto Created
     * @throws ApiError
     */
    static postApiV2AccountingServiceCommissionsCommissions(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Commissions/Commissions',
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
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceCommissionsCommissionsCount(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Commissions/Commissions/Count',
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
     * @param commissionId
     * @param xApiVersion
     * @returns CommissionDto OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceCommissionsCommissions1(tenantId, commissionId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Commissions/Commissions/{commissionId}',
            path: {
                'commissionId': commissionId,
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
     * @param commissionId
     * @param xApiVersion
     * @param requestBody
     * @returns CommissionDto OK
     * @throws ApiError
     */
    static putApiV2AccountingServiceCommissionsCommissions(tenantId, commissionId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Commissions/Commissions/{commissionId}',
            path: {
                'commissionId': commissionId,
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
     * @param commissionId
     * @param xApiVersion
     * @returns CommissionDto OK
     * @throws ApiError
     */
    static deleteApiV2AccountingServiceCommissionsCommissions(tenantId, commissionId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Commissions/Commissions/{commissionId}',
            path: {
                'commissionId': commissionId,
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
     * @returns PaymentCommissionDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceCommissionsPaymentCommissions(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Commissions/PaymentCommissions',
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
     * @returns PaymentCommissionDto Created
     * @throws ApiError
     */
    static postApiV2AccountingServiceCommissionsPaymentCommissions(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Commissions/PaymentCommissions',
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
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceCommissionsPaymentCommissionsCount(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Commissions/PaymentCommissions/Count',
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
     * @param paymentcommissionId
     * @param xApiVersion
     * @returns PaymentCommissionDto OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceCommissionsPaymentCommissions1(tenantId, paymentcommissionId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Commissions/PaymentCommissions/{paymentcommissionId}',
            path: {
                'paymentcommissionId': paymentcommissionId,
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
     * @param paymentcommissionId
     * @param xApiVersion
     * @param requestBody
     * @returns PaymentCommissionDto OK
     * @throws ApiError
     */
    static putApiV2AccountingServiceCommissionsPaymentCommissions(tenantId, paymentcommissionId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Commissions/PaymentCommissions/{paymentcommissionId}',
            path: {
                'paymentcommissionId': paymentcommissionId,
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
     * @param paymentcommissionId
     * @param xApiVersion
     * @returns PaymentCommissionDto OK
     * @throws ApiError
     */
    static deleteApiV2AccountingServiceCommissionsPaymentCommissions(tenantId, paymentcommissionId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Commissions/PaymentCommissions/{paymentcommissionId}',
            path: {
                'paymentcommissionId': paymentcommissionId,
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
exports.CommissionsService = CommissionsService;
