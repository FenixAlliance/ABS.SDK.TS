"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPostAuthorsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class BlogPostAuthorsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns BlogPostDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2ContentServiceBlogPostAuthors(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2ContentServiceBlogPostAuthors1(authorId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2ContentServiceBlogPostAuthorsBlogPosts(authorId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2ContentServiceBlogPostAuthorsBlogPostsCount(authorId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.BlogPostAuthorsService = BlogPostAuthorsService;
