/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlogPostTagCreateDto } from '../models/BlogPostTagCreateDto';
import type { BlogPostTagDtoEnvelope } from '../models/BlogPostTagDtoEnvelope';
import type { BlogPostTagDtoListEnvelope } from '../models/BlogPostTagDtoListEnvelope';
import type { BlogPostTagUpdateDto } from '../models/BlogPostTagUpdateDto';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BlogPostTagsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns BlogPostTagDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ContentServiceBlogPostTags(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<BlogPostTagDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/BlogPostTags',
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
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2ContentServiceBlogPostTags(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: BlogPostTagCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/ContentService/BlogPostTags',
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
     * @param blogPostTagId
     * @param xApiVersion
     * @returns BlogPostTagDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ContentServiceBlogPostTags1(
        blogPostTagId: string,
        xApiVersion?: string,
    ): CancelablePromise<BlogPostTagDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/BlogPostTags/{blogPostTagId}',
            path: {
                'blogPostTagId': blogPostTagId,
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
     * @param tenantId
     * @param blogPostTagId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static patchApiV2ContentServiceBlogPostTags(
        tenantId: string,
        blogPostTagId: string,
        xApiVersion?: string,
        requestBody?: BlogPostTagUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/ContentService/BlogPostTags/{blogPostTagId}',
            path: {
                'blogPostTagId': blogPostTagId,
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
     * @param blogPostTagId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2ContentServiceBlogPostTags(
        tenantId: string,
        blogPostTagId: string,
        xApiVersion?: string,
        requestBody?: BlogPostTagUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/ContentService/BlogPostTags/{blogPostTagId}',
            path: {
                'blogPostTagId': blogPostTagId,
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
     * @param blogPostTagId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2ContentServiceBlogPostTags(
        tenantId: string,
        blogPostTagId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/ContentService/BlogPostTags/{blogPostTagId}',
            path: {
                'blogPostTagId': blogPostTagId,
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
