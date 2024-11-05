"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPostsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class BlogPostsService {
    /**
     * @param tenantId
     * @returns BlogPostDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2ContentServiceBlogPosts(tenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/BlogPosts',
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
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2ContentServiceBlogPosts(tenantId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/ContentService/BlogPosts',
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
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2ContentServiceBlogPostsCount(tenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/BlogPosts/Count',
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
     * @param blogPostId
     * @returns BlogPostDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2ContentServiceBlogPosts1(blogPostId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/BlogPosts/{blogPostId}',
            path: {
                'blogPostId': blogPostId,
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
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static patchApiV2ContentServiceBlogPosts(tenantId, blogPostId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/ContentService/BlogPosts/{blogPostId}',
            path: {
                'blogPostId': blogPostId,
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
     * @param blogPostId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2ContentServiceBlogPosts(tenantId, blogPostId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/ContentService/BlogPosts/{blogPostId}',
            path: {
                'blogPostId': blogPostId,
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
     * @param blogPostId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2ContentServiceBlogPosts(tenantId, blogPostId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/ContentService/BlogPosts/{blogPostId}',
            path: {
                'blogPostId': blogPostId,
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
     * @param blogPostId
     * @returns BlogPostTagDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2ContentServiceBlogPostsTags(blogPostId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/BlogPosts/{blogPostId}/Tags',
            path: {
                'blogPostId': blogPostId,
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
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2ContentServiceBlogPostsTags(tenantId, blogPostId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/ContentService/BlogPosts/{blogPostId}/Tags',
            path: {
                'blogPostId': blogPostId,
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
     * @param blogPostId
     * @param tagId
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2ContentServiceBlogPostsTags1(tenantId, blogPostId, tagId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/ContentService/BlogPosts/{blogPostId}/Tags/{tagId}',
            path: {
                'blogPostId': blogPostId,
                'tagId': tagId,
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
     * @param tagId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2ContentServiceBlogPostsTags(tenantId, blogPostId, tagId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/ContentService/BlogPosts/{blogPostId}/Tags/{tagId}',
            path: {
                'blogPostId': blogPostId,
                'tagId': tagId,
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
     * @param blogPostId
     * @returns BlogPostCategoryDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2ContentServiceBlogPostsCategories(blogPostId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/BlogPosts/{blogPostId}/Categories',
            path: {
                'blogPostId': blogPostId,
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
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2ContentServiceBlogPostsCategories(tenantId, blogPostId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/ContentService/BlogPosts/{blogPostId}/Categories',
            path: {
                'blogPostId': blogPostId,
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
     * @param blogPostId
     * @param categoryId
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2ContentServiceBlogPostsCategories1(tenantId, blogPostId, categoryId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/ContentService/BlogPosts/{blogPostId}/Categories/{categoryId}',
            path: {
                'blogPostId': blogPostId,
                'categoryId': categoryId,
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
     * @param categoryId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2ContentServiceBlogPostsCategories(tenantId, blogPostId, categoryId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/ContentService/BlogPosts/{blogPostId}/Categories/{categoryId}',
            path: {
                'blogPostId': blogPostId,
                'categoryId': categoryId,
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
     * @param blogPostId
     * @returns BlogPostCommentDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2ContentServiceBlogPostsComments(blogPostId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/BlogPosts/{blogPostId}/Comments',
            path: {
                'blogPostId': blogPostId,
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
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2ContentServiceBlogPostsComments(tenantId, blogPostId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/ContentService/BlogPosts/{blogPostId}/Comments',
            path: {
                'blogPostId': blogPostId,
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
     * @param commentId
     * @param blogPostId
     * @returns BlogPostCommentDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2ContentServiceBlogPostsCommentsReplies(commentId, blogPostId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/BlogPosts/{blogPostId}/Comments/{commentId}/Replies',
            path: {
                'commentId': commentId,
                'blogPostId': blogPostId,
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
     * @param commentId
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2ContentServiceBlogPostsCommentsReply(tenantId, blogPostId, commentId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/ContentService/BlogPosts/{blogPostId}/Comments/{commentId}/Reply',
            path: {
                'blogPostId': blogPostId,
                'commentId': commentId,
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
     * @param blogPostId
     * @param commentId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2ContentServiceBlogPostsComments(tenantId, blogPostId, commentId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/ContentService/BlogPosts/{blogPostId}/Comments/{commentId}',
            path: {
                'blogPostId': blogPostId,
                'commentId': commentId,
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
exports.BlogPostsService = BlogPostsService;
