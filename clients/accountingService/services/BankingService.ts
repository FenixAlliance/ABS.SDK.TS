/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BankAccountCreateDto } from '../models/BankAccountCreateDto';
import type { BankAccountDtoEnvelope } from '../models/BankAccountDtoEnvelope';
import type { BankAccountDtoListEnvelope } from '../models/BankAccountDtoListEnvelope';
import type { BankAccountUpdateDto } from '../models/BankAccountUpdateDto';
import type { BankCreateDto } from '../models/BankCreateDto';
import type { BankDtoEnvelope } from '../models/BankDtoEnvelope';
import type { BankDtoListEnvelope } from '../models/BankDtoListEnvelope';
import type { BankGuaranteeCreateDto } from '../models/BankGuaranteeCreateDto';
import type { BankGuaranteeDtoEnvelope } from '../models/BankGuaranteeDtoEnvelope';
import type { BankGuaranteeDtoListEnvelope } from '../models/BankGuaranteeDtoListEnvelope';
import type { BankGuaranteeUpdateDto } from '../models/BankGuaranteeUpdateDto';
import type { BankTransactionCreateDto } from '../models/BankTransactionCreateDto';
import type { BankTransactionDtoEnvelope } from '../models/BankTransactionDtoEnvelope';
import type { BankTransactionDtoListEnvelope } from '../models/BankTransactionDtoListEnvelope';
import type { BankTransactionUpdateDto } from '../models/BankTransactionUpdateDto';
import type { BankUpdateDto } from '../models/BankUpdateDto';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BankingService {
    /**
     * @returns BankDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceBanking(): CancelablePromise<BankDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2AccountingServiceBanking(
        accountId: string,
        requestBody?: BankCreateDto,
    ): CancelablePromise<BankDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceBankingCount(): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceBanking1(
        bankId: string,
    ): CancelablePromise<BankDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static putApiV2AccountingServiceBanking(
        bankId: string,
        requestBody?: BankUpdateDto,
    ): CancelablePromise<BankDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2AccountingServiceBanking(
        bankId: string,
    ): CancelablePromise<BankDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceBankingAccounts(
        tenantId: string,
        bankId: string,
    ): CancelablePromise<BankAccountDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2AccountingServiceBankingAccounts(
        tenantId: string,
        bankId: string,
        requestBody?: BankAccountCreateDto,
    ): CancelablePromise<BankAccountDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceBankingAccountsCount(
        tenantId: string,
        bankId: string,
    ): CancelablePromise<BankAccountDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceBankingAccounts1(
        tenantId: string,
        bankId: string,
        accountId: string,
    ): CancelablePromise<BankAccountDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static putApiV2AccountingServiceBankingAccounts(
        tenantId: string,
        bankId: string,
        accountId: string,
        requestBody?: BankAccountUpdateDto,
    ): CancelablePromise<BankAccountDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2AccountingServiceBankingAccounts(
        tenantId: string,
        bankId: string,
        accountId: string,
    ): CancelablePromise<BankAccountDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceBankingAccountsGuarantees(
        tenantId: string,
        bankAccountId: string,
    ): CancelablePromise<BankGuaranteeDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceBankingAccountsGuaranteesCount(
        tenantId: string,
        bankAccountId: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceBankingGuarantees(
        tenantId: string,
        bankId: string,
        guaranteeId: string,
    ): CancelablePromise<BankGuaranteeDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static putApiV2AccountingServiceBankingGuarantees(
        tenantId: string,
        bankId: string,
        guaranteeId: string,
        requestBody?: BankGuaranteeUpdateDto,
    ): CancelablePromise<BankGuaranteeDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2AccountingServiceBankingGuarantees(
        tenantId: string,
        bankId: string,
        guaranteeId: string,
    ): CancelablePromise<BankGuaranteeDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2AccountingServiceBankingGuarantees(
        tenantId: string,
        bankId: string,
        requestBody?: BankGuaranteeCreateDto,
    ): CancelablePromise<BankGuaranteeDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceBankingTransactions(
        tenantId: string,
        bankId: string,
    ): CancelablePromise<BankTransactionDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2AccountingServiceBankingTransactions(
        tenantId: string,
        bankId: string,
        requestBody?: BankTransactionCreateDto,
    ): CancelablePromise<BankTransactionDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceBankingTransactionsCount(
        tenantId: string,
        bankId: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceBankingTransactions1(
        tenantId: string,
        transactionId: string,
        bankId: string,
    ): CancelablePromise<BankTransactionDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static putApiV2AccountingServiceBankingTransactions(
        tenantId: string,
        bankId: string,
        transactionId: string,
        requestBody?: BankTransactionUpdateDto,
    ): CancelablePromise<BankTransactionDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2AccountingServiceBankingTransactions(
        tenantId: string,
        bankId: string,
        transactionId: string,
    ): CancelablePromise<BankTransactionDtoEnvelope> {
        return __request(OpenAPI, {
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
