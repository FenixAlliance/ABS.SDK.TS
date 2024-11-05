/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlogPostDtoListEnvelope } from '../models/BlogPostDtoListEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BlogPostAuthorsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns BlogPostDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ContentServiceBlogPostAuthors(
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<BlogPostDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/BlogPostAuthors',
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
     * @param authorId
     * @param tenantId
     * @param xApiVersion
     * @returns BlogPostDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ContentServiceBlogPostAuthors1(
        authorId: string,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<BlogPostDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/BlogPostAuthors/{authorId}',
            path: {
                'authorId': authorId,
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
     * @param authorId
     * @param xApiVersion
     * @returns BlogPostDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ContentServiceBlogPostAuthorsBlogPosts(
        authorId: string,
        xApiVersion?: string,
    ): CancelablePromise<BlogPostDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/BlogPostAuthors/{authorId}/BlogPosts',
            path: {
                'authorId': authorId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param authorId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2ContentServiceBlogPostAuthorsBlogPostsCount(
        authorId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/BlogPostAuthors/{authorId}/BlogPosts/Count',
            path: {
                'authorId': authorId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
