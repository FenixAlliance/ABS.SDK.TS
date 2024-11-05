/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { SocialMediaPostCreateDto } from '../models/SocialMediaPostCreateDto';
import type { SocialMediaPostDtoEnvelope } from '../models/SocialMediaPostDtoEnvelope';
import type { SocialMediaPostDtoListEnvelope } from '../models/SocialMediaPostDtoListEnvelope';
import type { SocialMediaPostUpdateDto } from '../models/SocialMediaPostUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SocialMediaPostsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns SocialMediaPostDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2MarketingServiceSocialMediaPosts(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<SocialMediaPostDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/MarketingService/SocialMediaPosts',
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
    public static postApiV2MarketingServiceSocialMediaPosts(
        tenantId: string,
        requestBody: SocialMediaPostCreateDto,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/MarketingService/SocialMediaPosts',
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
    public static getApiV2MarketingServiceSocialMediaPostsCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/MarketingService/SocialMediaPosts/Count',
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
     * @param socialmediapostId
     * @param xApiVersion
     * @returns SocialMediaPostDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2MarketingServiceSocialMediaPosts1(
        tenantId: string,
        socialmediapostId: string,
        xApiVersion?: string,
    ): CancelablePromise<SocialMediaPostDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/MarketingService/SocialMediaPosts/{socialmediapostId}',
            path: {
                'socialmediapostId': socialmediapostId,
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
     * @param socialmediapostId
     * @param requestBody
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2MarketingServiceSocialMediaPosts(
        tenantId: string,
        socialmediapostId: string,
        requestBody: SocialMediaPostUpdateDto,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/MarketingService/SocialMediaPosts/{socialmediapostId}',
            path: {
                'socialmediapostId': socialmediapostId,
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
     * @param socialmediapostId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2MarketingServiceSocialMediaPosts(
        tenantId: string,
        socialmediapostId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/MarketingService/SocialMediaPosts/{socialmediapostId}',
            path: {
                'socialmediapostId': socialmediapostId,
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
