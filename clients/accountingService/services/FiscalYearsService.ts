/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { FiscalYearCreateDto } from '../models/FiscalYearCreateDto';
import type { FiscalYearDtoEnvelope } from '../models/FiscalYearDtoEnvelope';
import type { FiscalYearDtoListEnvelope } from '../models/FiscalYearDtoListEnvelope';
import type { FiscalYearUpdateDto } from '../models/FiscalYearUpdateDto';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FiscalYearsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns FiscalYearDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceFiscalYears(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<FiscalYearDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/FiscalYears',
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
    public static postApiV2AccountingServiceFiscalYears(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: FiscalYearCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/FiscalYears',
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
    public static getApiV2AccountingServiceFiscalYearsCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/FiscalYears/Count',
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
     * @param fiscalYearId
     * @param xApiVersion
     * @returns FiscalYearDtoEnvelope OK
     * @throws ApiError
     */
    public static getFiscalYearDetailsAsync(
        tenantId: string,
        fiscalYearId: string,
        xApiVersion?: string,
    ): CancelablePromise<FiscalYearDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/FiscalYears/{fiscalYearId}',
            path: {
                'fiscalYearId': fiscalYearId,
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
     * @param fiscalYearId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2AccountingServiceFiscalYears(
        tenantId: string,
        fiscalYearId: string,
        xApiVersion?: string,
        requestBody?: FiscalYearUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/FiscalYears/{fiscalYearId}',
            path: {
                'fiscalYearId': fiscalYearId,
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
     * @param fiscalYearId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    public static deleteApiV2AccountingServiceFiscalYears(
        tenantId: string,
        fiscalYearId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/FiscalYears/{fiscalYearId}',
            path: {
                'fiscalYearId': fiscalYearId,
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
