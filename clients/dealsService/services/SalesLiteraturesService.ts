/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { ExtendedSalesLiteratureDtoListEnvelope } from '../models/ExtendedSalesLiteratureDtoListEnvelope';
import type { SalesLiteratureCreateDto } from '../models/SalesLiteratureCreateDto';
import type { SalesLiteratureDtoEnvelope } from '../models/SalesLiteratureDtoEnvelope';
import type { SalesLiteratureDtoListEnvelope } from '../models/SalesLiteratureDtoListEnvelope';
import type { SalesLiteratureUpdateDto } from '../models/SalesLiteratureUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SalesLiteraturesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns SalesLiteratureDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2DealsServiceSalesLiteratures(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<SalesLiteratureDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/SalesLiteratures',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static postApiV2DealsServiceSalesLiteratures(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: SalesLiteratureCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/DealsService/SalesLiteratures',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param salesLiteratureId
     * @param xApiVersion
     * @returns SalesLiteratureDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2DealsServiceSalesLiteratures1(
        salesLiteratureId: string,
        xApiVersion?: string,
    ): CancelablePromise<SalesLiteratureDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/SalesLiteratures/{salesLiteratureId}',
            path: {
                'salesLiteratureId': salesLiteratureId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param salesLiteratureId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2DealsServiceSalesLiteratures(
        tenantId: string,
        salesLiteratureId: string,
        xApiVersion?: string,
        requestBody?: SalesLiteratureUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/DealsService/SalesLiteratures/{salesLiteratureId}',
            path: {
                'salesLiteratureId': salesLiteratureId,
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
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param salesLiteratureId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2DealsServiceSalesLiteratures(
        tenantId: string,
        salesLiteratureId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/DealsService/SalesLiteratures/{salesLiteratureId}',
            path: {
                'salesLiteratureId': salesLiteratureId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns ExtendedSalesLiteratureDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2DealsServiceSalesLiteraturesExtended(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ExtendedSalesLiteratureDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/SalesLiteratures/Extended',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
