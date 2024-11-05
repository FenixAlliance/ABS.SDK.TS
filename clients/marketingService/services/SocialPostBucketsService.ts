/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { SocialPostBucketCreateDto } from '../models/SocialPostBucketCreateDto';
import type { SocialPostBucketDtoEnvelope } from '../models/SocialPostBucketDtoEnvelope';
import type { SocialPostBucketDtoListEnvelope } from '../models/SocialPostBucketDtoListEnvelope';
import type { SocialPostBucketUpdateDto } from '../models/SocialPostBucketUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SocialPostBucketsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns SocialPostBucketDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2MarketingServiceSocialPostBuckets(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<SocialPostBucketDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/MarketingService/SocialPostBuckets',
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
     * @param requestBody
     * @param xApiVersion
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2MarketingServiceSocialPostBuckets(
        tenantId: string,
        requestBody: SocialPostBucketCreateDto,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/MarketingService/SocialPostBuckets',
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
    public static getApiV2MarketingServiceSocialPostBucketsCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/MarketingService/SocialPostBuckets/Count',
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
     * @param socialpostbucketId
     * @param xApiVersion
     * @returns SocialPostBucketDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2MarketingServiceSocialPostBuckets1(
        tenantId: string,
        socialpostbucketId: string,
        xApiVersion?: string,
    ): CancelablePromise<SocialPostBucketDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/MarketingService/SocialPostBuckets/{socialpostbucketId}',
            path: {
                'socialpostbucketId': socialpostbucketId,
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
     * @param socialpostbucketId
     * @param requestBody
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2MarketingServiceSocialPostBuckets(
        tenantId: string,
        socialpostbucketId: string,
        requestBody: SocialPostBucketUpdateDto,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/MarketingService/SocialPostBuckets/{socialpostbucketId}',
            path: {
                'socialpostbucketId': socialpostbucketId,
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
     * @param socialpostbucketId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2MarketingServiceSocialPostBuckets(
        tenantId: string,
        socialpostbucketId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/MarketingService/SocialPostBuckets/{socialpostbucketId}',
            path: {
                'socialpostbucketId': socialpostbucketId,
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
