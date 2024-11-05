/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { InvoiceEnumerationRangeCreateDto } from '../models/InvoiceEnumerationRangeCreateDto';
import type { InvoiceEnumerationRangeDtoEnvelope } from '../models/InvoiceEnumerationRangeDtoEnvelope';
import type { InvoiceEnumerationRangeDtoListEnvelope } from '../models/InvoiceEnumerationRangeDtoListEnvelope';
import type { InvoiceEnumerationRangeUpdateDto } from '../models/InvoiceEnumerationRangeUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class InvoiceEnumerationRangesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns InvoiceEnumerationRangeDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceInvoiceEnumerationRanges(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<InvoiceEnumerationRangeDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/InvoiceEnumerationRanges',
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
    public static postApiV2AccountingServiceInvoiceEnumerationRanges(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: InvoiceEnumerationRangeCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/InvoiceEnumerationRanges',
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
     * @param invoiceEnumerationRangeId
     * @param xApiVersion
     * @returns InvoiceEnumerationRangeDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceInvoiceEnumerationRanges1(
        tenantId: string,
        invoiceEnumerationRangeId: string,
        xApiVersion?: string,
    ): CancelablePromise<InvoiceEnumerationRangeDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/InvoiceEnumerationRanges/{invoiceEnumerationRangeId}',
            path: {
                'invoiceEnumerationRangeId': invoiceEnumerationRangeId,
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
     * @param invoiceEnumerationRangeId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2AccountingServiceInvoiceEnumerationRanges(
        tenantId: string,
        invoiceEnumerationRangeId: string,
        xApiVersion?: string,
        requestBody?: InvoiceEnumerationRangeUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/InvoiceEnumerationRanges/{invoiceEnumerationRangeId}',
            path: {
                'invoiceEnumerationRangeId': invoiceEnumerationRangeId,
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
     * @param invoiceEnumerationRangeId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2AccountingServiceInvoiceEnumerationRanges(
        tenantId: string,
        invoiceEnumerationRangeId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/InvoiceEnumerationRanges/{invoiceEnumerationRangeId}',
            path: {
                'invoiceEnumerationRangeId': invoiceEnumerationRangeId,
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
