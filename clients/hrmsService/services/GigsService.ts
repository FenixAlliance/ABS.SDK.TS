/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GigCreateDto } from '../models/GigCreateDto';
import type { GigDtoEnvelope } from '../models/GigDtoEnvelope';
import type { GigDtoListEnvelope } from '../models/GigDtoListEnvelope';
import type { GigUpdateDto } from '../models/GigUpdateDto';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GigsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns GigDtoListEnvelope OK
     * @throws ApiError
     */
    public static getGigsAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<GigDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/HrmsService/Gigs',
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
     * @returns any Created
     * @throws ApiError
     */
    public static createGigAsync(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: GigCreateDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/HrmsService/Gigs',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
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
    public static getGigsCountAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/HrmsService/Gigs/Count',
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
     * @param gigId
     * @param xApiVersion
     * @returns GigDtoEnvelope OK
     * @throws ApiError
     */
    public static getGigByIdAsync(
        tenantId: string,
        gigId: string,
        xApiVersion?: string,
    ): CancelablePromise<GigDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/HrmsService/Gigs/{gigId}',
            path: {
                'gigId': gigId,
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
            },
        });
    }
    /**
     * @param tenantId
     * @param gigId
     * @param xApiVersion
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateGigAsync(
        tenantId: string,
        gigId: string,
        xApiVersion?: string,
        requestBody?: GigUpdateDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/HrmsService/Gigs/{gigId}',
            path: {
                'gigId': gigId,
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
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param gigId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    public static deleteGigAsync(
        tenantId: string,
        gigId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/HrmsService/Gigs/{gigId}',
            path: {
                'gigId': gigId,
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
            },
        });
    }
}
