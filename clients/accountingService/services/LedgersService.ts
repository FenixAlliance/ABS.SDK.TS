/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateLedgerDto } from '../models/CreateLedgerDto';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { LedgerDtoEnvelope } from '../models/LedgerDtoEnvelope';
import type { LedgerDtoListEnvelope } from '../models/LedgerDtoListEnvelope';
import type { UpdateLedgerDto } from '../models/UpdateLedgerDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LedgersService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns LedgerDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceLedgers(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<LedgerDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Ledgers',
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
    public static postApiV2AccountingServiceLedgers(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: CreateLedgerDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Ledgers',
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
    public static getApiV2AccountingServiceLedgersCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Ledgers/Count',
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
     * @param ledgerId
     * @param xApiVersion
     * @returns LedgerDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceLedgers1(
        tenantId: string,
        ledgerId: string,
        xApiVersion?: string,
    ): CancelablePromise<LedgerDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Ledgers/{ledgerId}',
            path: {
                'ledgerId': ledgerId,
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
     * @param ledgerId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2AccountingServiceLedgers(
        tenantId: string,
        ledgerId: string,
        xApiVersion?: string,
        requestBody?: UpdateLedgerDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Ledgers/{ledgerId}',
            path: {
                'ledgerId': ledgerId,
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
}
