/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BudgetAccountEntryCreateDto } from '../models/BudgetAccountEntryCreateDto';
import type { BudgetAccountEntryDtoEnvelope } from '../models/BudgetAccountEntryDtoEnvelope';
import type { BudgetAccountEntryDtoListEnvelope } from '../models/BudgetAccountEntryDtoListEnvelope';
import type { BudgetAccountEntryUpdateDto } from '../models/BudgetAccountEntryUpdateDto';
import type { BudgetCreateDto } from '../models/BudgetCreateDto';
import type { BudgetDtoEnvelope } from '../models/BudgetDtoEnvelope';
import type { BudgetDtoListEnvelope } from '../models/BudgetDtoListEnvelope';
import type { BudgetUpdateDto } from '../models/BudgetUpdateDto';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BudgetsService {
    /**
     * @param tenantId
     * @param budgetId
     * @param xApiVersion
     * @returns BudgetDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceBudgets(
        tenantId: string,
        budgetId: string,
        xApiVersion?: string,
    ): CancelablePromise<BudgetDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Budgets/{budgetId}',
            path: {
                'budgetId': budgetId,
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
     * @param budgetId
     * @param requestBody
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2AccountingServiceBudgets(
        tenantId: string,
        budgetId: string,
        requestBody: BudgetUpdateDto,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Budgets/{budgetId}',
            path: {
                'budgetId': budgetId,
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
     * @param budgetId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2AccountingServiceBudgets(
        tenantId: string,
        budgetId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Budgets/{budgetId}',
            path: {
                'budgetId': budgetId,
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
     * @param xApiVersion
     * @returns BudgetDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceBudgets1(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<BudgetDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Budgets',
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
     * @param requestBody
     * @param xApiVersion
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2AccountingServiceBudgets(
        tenantId: string,
        requestBody: BudgetCreateDto,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Budgets',
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
     * @param budgetId
     * @param xApiVersion
     * @returns BudgetAccountEntryDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceBudgetsAccountEntries(
        tenantId: string,
        budgetId: string,
        xApiVersion?: string,
    ): CancelablePromise<BudgetAccountEntryDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Budgets/{budgetId}/AccountEntries',
            path: {
                'budgetId': budgetId,
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
     * @param budgetId
     * @param requestBody
     * @param xApiVersion
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2AccountingServiceBudgetsAccountEntries(
        tenantId: string,
        budgetId: string,
        requestBody: BudgetAccountEntryCreateDto,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Budgets/{budgetId}/AccountEntries',
            path: {
                'budgetId': budgetId,
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
     * @param budgetId
     * @param budgetAccountEntryId
     * @param xApiVersion
     * @returns BudgetAccountEntryDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceBudgetsAccountEntries1(
        tenantId: string,
        budgetId: string,
        budgetAccountEntryId: string,
        xApiVersion?: string,
    ): CancelablePromise<BudgetAccountEntryDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Budgets/{budgetId}/AccountEntries/{budgetAccountEntryId}',
            path: {
                'budgetId': budgetId,
                'budgetAccountEntryId': budgetAccountEntryId,
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
     * @param budgetId
     * @param budgetAccountEntryId
     * @param requestBody
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2AccountingServiceBudgetsAccountEntries(
        tenantId: string,
        budgetId: string,
        budgetAccountEntryId: string,
        requestBody: BudgetAccountEntryUpdateDto,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Budgets/{budgetId}/AccountEntries/{budgetAccountEntryId}',
            path: {
                'budgetId': budgetId,
                'budgetAccountEntryId': budgetAccountEntryId,
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
     * @param budgetId
     * @param budgetAccountEntryId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2AccountingServiceBudgetsAccountEntries(
        tenantId: string,
        budgetId: string,
        budgetAccountEntryId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Budgets/{budgetId}/AccountEntries/{budgetAccountEntryId}',
            path: {
                'budgetId': budgetId,
                'budgetAccountEntryId': budgetAccountEntryId,
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
