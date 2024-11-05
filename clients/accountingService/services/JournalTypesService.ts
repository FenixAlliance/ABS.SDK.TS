/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { JournalTypeCreateDto } from '../models/JournalTypeCreateDto';
import type { JournalTypeDtoEnvelope } from '../models/JournalTypeDtoEnvelope';
import type { JournalTypeDtoListEnvelope } from '../models/JournalTypeDtoListEnvelope';
import type { JournalTypeUpdateDto } from '../models/JournalTypeUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class JournalTypesService {
    /**
     * @param tenantId
     * @param journaltypeId
     * @param xApiVersion
     * @returns JournalTypeDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceJournalTypes(
        tenantId: string,
        journaltypeId: string,
        xApiVersion?: string,
    ): CancelablePromise<JournalTypeDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/JournalTypes/{journaltypeId}',
            path: {
                'journaltypeId': journaltypeId,
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
     * @param journaltypeId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2AccountingServiceJournalTypes(
        tenantId: string,
        journaltypeId: string,
        xApiVersion?: string,
        requestBody?: JournalTypeUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/JournalTypes/{journaltypeId}',
            path: {
                'journaltypeId': journaltypeId,
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
     * @param journaltypeId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2AccountingServiceJournalTypes(
        tenantId: string,
        journaltypeId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/JournalTypes/{journaltypeId}',
            path: {
                'journaltypeId': journaltypeId,
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
     * @returns JournalTypeDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceJournalTypes1(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<JournalTypeDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/JournalTypes',
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
    public static postApiV2AccountingServiceJournalTypes(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: JournalTypeCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/JournalTypes',
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
    public static getApiV2AccountingServiceJournalTypesCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/JournalTypes/Count',
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
