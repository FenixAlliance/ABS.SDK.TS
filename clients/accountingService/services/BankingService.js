"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankingService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class BankingService {
    /**
     * @returns BankDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceBanking() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Banking',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param accountId
     * @param requestBody
     * @returns BankDtoEnvelope Created
     * @throws ApiError
     */
    static postApiV2AccountingServiceBanking(accountId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Banking',
            query: {
                'accountId': accountId,
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
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceBankingCount() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Banking/Count',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param bankId
     * @returns BankDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceBanking1(bankId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Banking/{bankId}',
            query: {
                'bankId': bankId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param bankId
     * @param requestBody
     * @returns BankDtoEnvelope OK
     * @throws ApiError
     */
    static putApiV2AccountingServiceBanking(bankId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Banking/{bankId}',
            query: {
                'bankId': bankId,
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
     * @param bankId
     * @returns BankDtoEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2AccountingServiceBanking(bankId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Banking/{bankId}',
            query: {
                'bankId': bankId,
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
     * @param bankId
     * @returns BankAccountDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceBankingAccounts(tenantId, bankId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Banking/{bankId}/Accounts',
            path: {
                'bankId': bankId,
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
     * @param bankId
     * @param requestBody
     * @returns BankAccountDtoEnvelope Created
     * @throws ApiError
     */
    static postApiV2AccountingServiceBankingAccounts(tenantId, bankId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Banking/{bankId}/Accounts',
            path: {
                'bankId': bankId,
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
     * @param bankId
     * @returns BankAccountDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceBankingAccountsCount(tenantId, bankId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Banking/{bankId}/Accounts/Count',
            path: {
                'bankId': bankId,
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
     * @param bankId
     * @param accountId
     * @returns BankAccountDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceBankingAccounts1(tenantId, bankId, accountId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Banking/{bankId}/Accounts/{accountId}',
            path: {
                'bankId': bankId,
                'accountId': accountId,
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
     * @param bankId
     * @param accountId
     * @param requestBody
     * @returns BankAccountDtoEnvelope OK
     * @throws ApiError
     */
    static putApiV2AccountingServiceBankingAccounts(tenantId, bankId, accountId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Banking/{bankId}/Accounts/{accountId}',
            path: {
                'bankId': bankId,
                'accountId': accountId,
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
     * @param bankId
     * @param accountId
     * @returns BankAccountDtoEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2AccountingServiceBankingAccounts(tenantId, bankId, accountId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Banking/{bankId}/Accounts/{accountId}',
            path: {
                'bankId': bankId,
                'accountId': accountId,
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
     * @param bankAccountId
     * @returns BankGuaranteeDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceBankingAccountsGuarantees(tenantId, bankAccountId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Banking/{tenantId}/Accounts/{bankAccountId}/Guarantees',
            path: {
                'bankAccountId': bankAccountId,
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
     * @param bankAccountId
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceBankingAccountsGuaranteesCount(tenantId, bankAccountId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Banking/{tenantId}/Accounts/{bankAccountId}/Guarantees/Count',
            path: {
                'bankAccountId': bankAccountId,
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
     * @param bankId
     * @param guaranteeId
     * @returns BankGuaranteeDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceBankingGuarantees(tenantId, bankId, guaranteeId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Banking/{bankId}/Guarantees/{guaranteeId}',
            path: {
                'bankId': bankId,
                'guaranteeId': guaranteeId,
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
     * @param bankId
     * @param guaranteeId
     * @param requestBody
     * @returns BankGuaranteeDtoEnvelope OK
     * @throws ApiError
     */
    static putApiV2AccountingServiceBankingGuarantees(tenantId, bankId, guaranteeId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Banking/{bankId}/Guarantees/{guaranteeId}',
            path: {
                'bankId': bankId,
                'guaranteeId': guaranteeId,
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
     * @param bankId
     * @param guaranteeId
     * @returns BankGuaranteeDtoEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2AccountingServiceBankingGuarantees(tenantId, bankId, guaranteeId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Banking/{bankId}/Guarantees/{guaranteeId}',
            path: {
                'bankId': bankId,
                'guaranteeId': guaranteeId,
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
     * @param bankId
     * @param requestBody
     * @returns BankGuaranteeDtoEnvelope Created
     * @throws ApiError
     */
    static postApiV2AccountingServiceBankingGuarantees(tenantId, bankId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Banking/{bankId}/Guarantees',
            path: {
                'bankId': bankId,
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
     * @param bankId
     * @returns BankTransactionDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceBankingTransactions(tenantId, bankId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Banking/{bankId}/Transactions',
            path: {
                'bankId': bankId,
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
     * @param bankId
     * @param requestBody
     * @returns BankTransactionDtoEnvelope Created
     * @throws ApiError
     */
    static postApiV2AccountingServiceBankingTransactions(tenantId, bankId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Banking/{bankId}/Transactions',
            path: {
                'bankId': bankId,
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
     * @param bankId
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceBankingTransactionsCount(tenantId, bankId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Banking/{bankId}/Transactions/Count',
            path: {
                'bankId': bankId,
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
     * @param bankId
     * @returns BankTransactionDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceBankingTransactions1(tenantId, transactionId, bankId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Banking/{bankId}/Transactions/{transactionId}',
            path: {
                'transactionId': transactionId,
                'bankId': bankId,
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
     * @param bankId
     * @param transactionId
     * @param requestBody
     * @returns BankTransactionDtoEnvelope OK
     * @throws ApiError
     */
    static putApiV2AccountingServiceBankingTransactions(tenantId, bankId, transactionId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Banking/{bankId}/Transactions/{transactionId}',
            path: {
                'bankId': bankId,
                'transactionId': transactionId,
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
     * @param bankId
     * @param transactionId
     * @returns BankTransactionDtoEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2AccountingServiceBankingTransactions(tenantId, bankId, transactionId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Banking/{bankId}/Transactions/{transactionId}',
            path: {
                'bankId': bankId,
                'transactionId': transactionId,
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
exports.BankingService = BankingService;
