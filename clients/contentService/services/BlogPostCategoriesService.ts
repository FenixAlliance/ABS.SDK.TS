/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlogPostCategoryCreateDto } from '../models/BlogPostCategoryCreateDto';
import type { BlogPostCategoryDtoEnvelope } from '../models/BlogPostCategoryDtoEnvelope';
import type { BlogPostCategoryUpdateDto } from '../models/BlogPostCategoryUpdateDto';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Operation } from '../models/Operation';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BlogPostCategoriesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns BlogPostCategoryDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ContentServiceBlogPostCategories(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<BlogPostCategoryDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/BlogPostCategories/{tenantId}',
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
    public static postApiV2ContentServiceBlogPostCategories(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: BlogPostCategoryCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/ContentService/BlogPostCategories/{tenantId}',
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
     * @param blogPostCategoryId
     * @param xApiVersion
     * @returns BlogPostCategoryDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ContentServiceBlogPostCategories1(
        tenantId: string,
        blogPostCategoryId: string,
        xApiVersion?: string,
    ): CancelablePromise<Array<BlogPostCategoryDtoEnvelope>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/BlogPostCategories/{tenantId}/{blogPostCategoryId}',
            path: {
                'blogPostCategoryId': blogPostCategoryId,
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
     * @param blogPostId
     * @param blogPostCategoryId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static patchApiV2ContentServiceBlogPostCategories(
        tenantId: string,
        blogPostId: string,
        blogPostCategoryId: string,
        xApiVersion?: string,
        requestBody?: Array<Operation>,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/ContentService/BlogPostCategories/{tenantId}/{blogPostCategoryId}',
            path: {
                'blogPostCategoryId': blogPostCategoryId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'blogPostId': blogPostId,
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
     * @param blogPostCategoryId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2ContentServiceBlogPostCategories(
        tenantId: string,
        blogPostCategoryId: string,
        xApiVersion?: string,
        requestBody?: BlogPostCategoryUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/ContentService/BlogPostCategories/{tenantId}/{blogPostCategoryId}',
            path: {
                'blogPostCategoryId': blogPostCategoryId,
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
     * @param blogPostCategoryId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2ContentServiceBlogPostCategories(
        tenantId: string,
        blogPostCategoryId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/ContentService/BlogPostCategories/{tenantId}/{blogPostCategoryId}',
            path: {
                'blogPostCategoryId': blogPostCategoryId,
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
