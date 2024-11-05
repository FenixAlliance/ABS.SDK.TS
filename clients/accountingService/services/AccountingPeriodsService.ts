/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountingPeriodCreateDto } from '../models/AccountingPeriodCreateDto';
import type { AccountingPeriodDtoEnvelope } from '../models/AccountingPeriodDtoEnvelope';
import type { AccountingPeriodDtoListEnvelope } from '../models/AccountingPeriodDtoListEnvelope';
import type { AccountingPeriodUpdateDto } from '../models/AccountingPeriodUpdateDto';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AccountingPeriodsService {
    /**
     * @param tenantId
     * @returns AccountingPeriodDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceAccountingPeriods(
        tenantId: string,
    ): CancelablePromise<AccountingPeriodDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/AccountingPeriods',
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
     * @param requestBody
     * @returns AccountingPeriodDtoEnvelope Created
     * @throws ApiError
     */
    public static postApiV2AccountingServiceAccountingPeriods(
        tenantId: string,
        requestBody?: AccountingPeriodCreateDto,
    ): CancelablePromise<AccountingPeriodDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/AccountingPeriods',
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
    public static getApiV2AccountingServiceAccountingPeriodsCount(
        tenantId?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/AccountingPeriods/Count',
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
     * @param id
     * @returns AccountingPeriodDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceAccountingPeriods1(
        id: string,
    ): CancelablePromise<AccountingPeriodDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/AccountingPeriods/{id}',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2AccountingServiceAccountingPeriods(
        id: string,
        requestBody?: AccountingPeriodUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/AccountingPeriods/{id}',
            query: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteApiV2AccountingServiceAccountingPeriods(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/AccountingPeriods/{id}',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
