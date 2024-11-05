/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Int32Envelope } from '../models/Int32Envelope';
import type { JobOfferCreateDto } from '../models/JobOfferCreateDto';
import type { JobOfferDtoEnvelope } from '../models/JobOfferDtoEnvelope';
import type { JobOfferDtoListEnvelope } from '../models/JobOfferDtoListEnvelope';
import type { JobOfferUpdateDto } from '../models/JobOfferUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class JobOffersService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns JobOfferDtoListEnvelope OK
     * @throws ApiError
     */
    public static getJobOffersAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<JobOfferDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/HrmsService/JobOffers',
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
     * @returns void
     * @throws ApiError
     */
    public static createJobOfferAsync(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: JobOfferCreateDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/HrmsService/JobOffers',
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
    public static getJobOffersCountAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/HrmsService/JobOffers/Count',
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
     * @param jobOfferId
     * @param xApiVersion
     * @returns JobOfferDtoEnvelope OK
     * @throws ApiError
     */
    public static getJobOfferByIdAsync(
        tenantId: string,
        jobOfferId: string,
        xApiVersion?: string,
    ): CancelablePromise<JobOfferDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/HrmsService/JobOffers/{jobOfferId}',
            path: {
                'jobOfferId': jobOfferId,
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
     * @param jobOfferId
     * @param xApiVersion
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateJobOfferAsync(
        tenantId: string,
        jobOfferId: string,
        xApiVersion?: string,
        requestBody?: JobOfferUpdateDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/HrmsService/JobOffers/{jobOfferId}',
            path: {
                'jobOfferId': jobOfferId,
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
     * @param jobOfferId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    public static deleteJobOfferAsync(
        tenantId: string,
        jobOfferId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/HrmsService/JobOffers/{jobOfferId}',
            path: {
                'jobOfferId': jobOfferId,
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
