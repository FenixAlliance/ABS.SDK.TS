"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class TransactionsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns TransactionDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceTransactions(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Transactions',
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
     * @returns TransactionDtoEnvelope Created
     * @throws ApiError
     */
    static postApiV2AccountingServiceTransactions(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Transactions',
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
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceTransactionsCount(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Transactions/Count',
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
     * @param transactionId
     * @param xApiVersion
     * @returns TransactionDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceTransactions1(tenantId, transactionId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Transactions/{transactionId}',
            path: {
                'transactionId': transactionId,
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
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param transactionId
     * @param xApiVersion
     * @param requestBody
     * @returns TransactionDtoEnvelope OK
     * @throws ApiError
     */
    static putApiV2AccountingServiceTransactions(tenantId, transactionId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Transactions/{transactionId}',
            path: {
                'transactionId': transactionId,
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
     * @param transactionId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    static deleteApiV2AccountingServiceTransactions(tenantId, transactionId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Transactions/{transactionId}',
            path: {
                'transactionId': transactionId,
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
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns TransactionCategoryDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceTransactionsCategories(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Transactions/Categories',
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
     * @returns TransactionCategoryDtoEnvelope Created
     * @throws ApiError
     */
    static postApiV2AccountingServiceTransactionsCategories(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Transactions/Categories',
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
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceTransactionsCategoriesCount(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Transactions/Categories/Count',
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
     * @param categoryId
     * @param xApiVersion
     * @returns TransactionCategoryDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceTransactionsCategories1(tenantId, categoryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Transactions/Categories/{categoryId}',
            path: {
                'categoryId': categoryId,
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
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param categoryId
     * @param xApiVersion
     * @param requestBody
     * @returns TransactionCategoryDtoEnvelope OK
     * @throws ApiError
     */
    static putApiV2AccountingServiceTransactionsCategories(tenantId, categoryId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Transactions/Categories/{categoryId}',
            path: {
                'categoryId': categoryId,
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
     * @param categoryId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    static deleteApiV2AccountingServiceTransactionsCategories(tenantId, categoryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Transactions/Categories/{categoryId}',
            path: {
                'categoryId': categoryId,
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
                404: `Not Found`,
            },
        });
    }
}
exports.TransactionsService = TransactionsService;
