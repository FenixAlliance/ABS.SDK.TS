"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPostCategoriesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class BlogPostCategoriesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns BlogPostCategoryDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2ContentServiceBlogPostCategories(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2ContentServiceBlogPostCategories(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2ContentServiceBlogPostCategories1(tenantId, blogPostCategoryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static patchApiV2ContentServiceBlogPostCategories(tenantId, blogPostId, blogPostCategoryId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2ContentServiceBlogPostCategories(tenantId, blogPostCategoryId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteApiV2ContentServiceBlogPostCategories(tenantId, blogPostCategoryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.BlogPostCategoriesService = BlogPostCategoriesService;
