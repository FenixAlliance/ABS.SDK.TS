/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlogPostCategoryCreateDto } from '../models/BlogPostCategoryCreateDto';
import type { BlogPostCategoryDtoListEnvelope } from '../models/BlogPostCategoryDtoListEnvelope';
import type { BlogPostCommentCreateDto } from '../models/BlogPostCommentCreateDto';
import type { BlogPostCommentDtoListEnvelope } from '../models/BlogPostCommentDtoListEnvelope';
import type { BlogPostCreateDto } from '../models/BlogPostCreateDto';
import type { BlogPostDtoEnvelope } from '../models/BlogPostDtoEnvelope';
import type { BlogPostDtoListEnvelope } from '../models/BlogPostDtoListEnvelope';
import type { BlogPostTagCreateDto } from '../models/BlogPostTagCreateDto';
import type { BlogPostTagDtoListEnvelope } from '../models/BlogPostTagDtoListEnvelope';
import type { BlogPostUpdateDto } from '../models/BlogPostUpdateDto';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { Operation } from '../models/Operation';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BlogPostsService {
    /**
     * @param tenantId
     * @returns BlogPostDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ContentServiceBlogPosts(
        tenantId?: string,
    ): CancelablePromise<BlogPostDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2ContentServiceBlogPosts(
        tenantId: string,
        requestBody?: BlogPostCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2ContentServiceBlogPostsCount(
        tenantId?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getApiV2ContentServiceBlogPosts1(
        blogPostId: string,
    ): CancelablePromise<BlogPostDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static patchApiV2ContentServiceBlogPosts(
        tenantId: string,
        blogPostId: string,
        requestBody?: Array<Operation>,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static putApiV2ContentServiceBlogPosts(
        tenantId: string,
        blogPostId: string,
        requestBody?: BlogPostUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2ContentServiceBlogPosts(
        tenantId: string,
        blogPostId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2ContentServiceBlogPostsTags(
        blogPostId: string,
    ): CancelablePromise<BlogPostTagDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2ContentServiceBlogPostsTags(
        tenantId: string,
        blogPostId: string,
        requestBody?: BlogPostTagCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2ContentServiceBlogPostsTags1(
        tenantId: string,
        blogPostId: string,
        tagId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2ContentServiceBlogPostsTags(
        tenantId: string,
        blogPostId: string,
        tagId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2ContentServiceBlogPostsCategories(
        blogPostId: string,
    ): CancelablePromise<BlogPostCategoryDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2ContentServiceBlogPostsCategories(
        tenantId: string,
        blogPostId: string,
        requestBody?: BlogPostCategoryCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2ContentServiceBlogPostsCategories1(
        tenantId: string,
        blogPostId: string,
        categoryId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2ContentServiceBlogPostsCategories(
        tenantId: string,
        blogPostId: string,
        categoryId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2ContentServiceBlogPostsComments(
        blogPostId: string,
    ): CancelablePromise<BlogPostCommentDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2ContentServiceBlogPostsComments(
        tenantId: string,
        blogPostId: string,
        requestBody?: BlogPostCommentCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2ContentServiceBlogPostsCommentsReplies(
        commentId: string,
        blogPostId: string,
    ): CancelablePromise<BlogPostCommentDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2ContentServiceBlogPostsCommentsReply(
        tenantId: string,
        blogPostId: string,
        commentId: string,
        requestBody?: BlogPostCommentCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2ContentServiceBlogPostsComments(
        tenantId: string,
        blogPostId: string,
        commentId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
