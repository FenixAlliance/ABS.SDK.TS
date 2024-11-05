/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Int32Envelope } from '../models/Int32Envelope';
import type { TransactionCategoryCreateDto } from '../models/TransactionCategoryCreateDto';
import type { TransactionCategoryDtoEnvelope } from '../models/TransactionCategoryDtoEnvelope';
import type { TransactionCategoryDtoListEnvelope } from '../models/TransactionCategoryDtoListEnvelope';
import type { TransactionCategoryUpdateDto } from '../models/TransactionCategoryUpdateDto';
import type { TransactionCreateDto } from '../models/TransactionCreateDto';
import type { TransactionDtoEnvelope } from '../models/TransactionDtoEnvelope';
import type { TransactionDtoListEnvelope } from '../models/TransactionDtoListEnvelope';
import type { TransactionUpdateDto } from '../models/TransactionUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TransactionsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns TransactionDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceTransactions(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TransactionDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2AccountingServiceTransactions(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: TransactionCreateDto,
    ): CancelablePromise<TransactionDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceTransactionsCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceTransactions1(
        tenantId: string,
        transactionId: string,
        xApiVersion?: string,
    ): CancelablePromise<TransactionDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static putApiV2AccountingServiceTransactions(
        tenantId: string,
        transactionId: string,
        xApiVersion?: string,
        requestBody?: TransactionUpdateDto,
    ): CancelablePromise<TransactionDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2AccountingServiceTransactions(
        tenantId: string,
        transactionId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceTransactionsCategories(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TransactionCategoryDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2AccountingServiceTransactionsCategories(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: TransactionCategoryCreateDto,
    ): CancelablePromise<TransactionCategoryDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceTransactionsCategoriesCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceTransactionsCategories1(
        tenantId: string,
        categoryId: string,
        xApiVersion?: string,
    ): CancelablePromise<TransactionCategoryDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static putApiV2AccountingServiceTransactionsCategories(
        tenantId: string,
        categoryId: string,
        xApiVersion?: string,
        requestBody?: TransactionCategoryUpdateDto,
    ): CancelablePromise<TransactionCategoryDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2AccountingServiceTransactionsCategories(
        tenantId: string,
        categoryId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
