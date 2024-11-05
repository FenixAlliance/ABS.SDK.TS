/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { SocialPostAttachmentCreateDto } from '../models/SocialPostAttachmentCreateDto';
import type { SocialPostAttachmentDtoEnvelope } from '../models/SocialPostAttachmentDtoEnvelope';
import type { SocialPostAttachmentDtoListEnvelope } from '../models/SocialPostAttachmentDtoListEnvelope';
import type { SocialPostAttachmentUpdateDto } from '../models/SocialPostAttachmentUpdateDto';
import type { SocialPostCommentCreateDto } from '../models/SocialPostCommentCreateDto';
import type { SocialPostCommentDtoEnvelope } from '../models/SocialPostCommentDtoEnvelope';
import type { SocialPostCommentDtoListEnvelope } from '../models/SocialPostCommentDtoListEnvelope';
import type { SocialPostCommentUpdateDto } from '../models/SocialPostCommentUpdateDto';
import type { SocialPostCreateDto } from '../models/SocialPostCreateDto';
import type { SocialPostDtoEnvelope } from '../models/SocialPostDtoEnvelope';
import type { SocialPostDtoListEnvelope } from '../models/SocialPostDtoListEnvelope';
import type { SocialPostUpdateDto } from '../models/SocialPostUpdateDto';
import type { SocialReactionCreateDto } from '../models/SocialReactionCreateDto';
import type { SocialReactionDtoEnvelope } from '../models/SocialReactionDtoEnvelope';
import type { SocialReactionDtoListEnvelope } from '../models/SocialReactionDtoListEnvelope';
import type { SocialReactionUpdateDto } from '../models/SocialReactionUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SocialPostsService {
    /**
     * @param socialProfileId
     * @param xApiVersion
     * @returns SocialPostDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SocialServiceSocialPosts(
        socialProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<SocialPostDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialPosts',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'socialProfileId': socialProfileId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param socialProfileId
     * @param xApiVersion
     * @param requestBody
     * @returns SocialPostDtoEnvelope Created
     * @throws ApiError
     */
    public static postApiV2SocialServiceSocialPosts(
        socialProfileId: string,
        xApiVersion?: string,
        requestBody?: SocialPostCreateDto,
    ): CancelablePromise<SocialPostDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/SocialService/SocialPosts',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'socialProfileId': socialProfileId,
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
     * @param socialProfileId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2SocialServiceSocialPostsCount(
        socialProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialPosts/Count',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'socialProfileId': socialProfileId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param socialProfileId
     * @param socialPostId
     * @param xApiVersion
     * @returns SocialPostDtoEnvelope OK
     * @throws ApiError
     */
    public static getSocialPostAsync(
        socialProfileId: string,
        socialPostId: string,
        xApiVersion?: string,
    ): CancelablePromise<SocialPostDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialPosts/{socialPostId}',
            path: {
                'socialPostId': socialPostId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'socialProfileId': socialProfileId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param socialProfileId
     * @param socialPostId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2SocialServiceSocialPosts(
        socialProfileId: string,
        socialPostId: string,
        xApiVersion?: string,
        requestBody?: SocialPostUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/SocialService/SocialPosts/{socialPostId}',
            path: {
                'socialPostId': socialPostId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'socialProfileId': socialProfileId,
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
     * @param socialProfileId
     * @param socialPostId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2SocialServiceSocialPosts(
        socialProfileId: string,
        socialPostId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SocialService/SocialPosts/{socialPostId}',
            path: {
                'socialPostId': socialPostId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'socialProfileId': socialProfileId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param socialPostId
     * @param xApiVersion
     * @returns SocialPostAttachmentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SocialServiceSocialPostsAttachments(
        socialPostId: string,
        xApiVersion?: string,
    ): CancelablePromise<SocialPostAttachmentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments',
            path: {
                'socialPostId': socialPostId,
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
     * @param socialPostId
     * @param socialProfileId
     * @param xApiVersion
     * @param requestBody
     * @returns SocialPostAttachmentDtoEnvelope Created
     * @throws ApiError
     */
    public static postApiV2SocialServiceSocialPostsAttachments(
        socialPostId: string,
        socialProfileId: string,
        xApiVersion?: string,
        requestBody?: SocialPostAttachmentCreateDto,
    ): CancelablePromise<SocialPostAttachmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments',
            path: {
                'socialPostId': socialPostId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'socialProfileId': socialProfileId,
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
     * @param socialPostId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2SocialServiceSocialPostsAttachmentsCount(
        socialPostId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments/Count',
            path: {
                'socialPostId': socialPostId,
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
     * @param socialPostId
     * @param attachmentId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static getSocialPostAttachmentAsync(
        socialPostId: string,
        attachmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments/{attachmentId}',
            path: {
                'socialPostId': socialPostId,
                'attachmentId': attachmentId,
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
     * @param socialProfileId
     * @param socialPostId
     * @param attachmentId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2SocialServiceSocialPostsAttachments(
        socialProfileId: string,
        socialPostId: string,
        attachmentId: string,
        xApiVersion?: string,
        requestBody?: SocialPostAttachmentUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments/{attachmentId}',
            path: {
                'socialPostId': socialPostId,
                'attachmentId': attachmentId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'socialProfileId': socialProfileId,
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
     * @param socialProfileId
     * @param socialPostId
     * @param attachmentId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2SocialServiceSocialPostsAttachments(
        socialProfileId: string,
        socialPostId: string,
        attachmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments/{attachmentId}',
            path: {
                'socialPostId': socialPostId,
                'attachmentId': attachmentId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'socialProfileId': socialProfileId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param socialPostId
     * @param socialProfileId
     * @param xApiVersion
     * @returns SocialReactionDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SocialServiceSocialPostsReactions(
        socialPostId: string,
        socialProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<SocialReactionDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialPosts/{socialPostId}/Reactions',
            path: {
                'socialPostId': socialPostId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'socialProfileId': socialProfileId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param socialPostId
     * @param socialProfileId
     * @param xApiVersion
     * @param requestBody
     * @returns SocialReactionDtoEnvelope Created
     * @throws ApiError
     */
    public static postApiV2SocialServiceSocialPostsReactions(
        socialPostId: string,
        socialProfileId: string,
        xApiVersion?: string,
        requestBody?: SocialReactionCreateDto,
    ): CancelablePromise<SocialReactionDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/SocialService/SocialPosts/{socialPostId}/Reactions',
            path: {
                'socialPostId': socialPostId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'socialProfileId': socialProfileId,
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
     * @param socialPostId
     * @param socialProfileId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2SocialServiceSocialPostsReactionsCount(
        socialPostId: string,
        socialProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialPosts/{socialPostId}/Reactions/Count',
            path: {
                'socialPostId': socialPostId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'socialProfileId': socialProfileId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param socialPostId
     * @param reactionId
     * @param xApiVersion
     * @returns SocialReactionDtoEnvelope OK
     * @throws ApiError
     */
    public static getSocialPostReactionAsync(
        socialPostId: string,
        reactionId: string,
        xApiVersion?: string,
    ): CancelablePromise<SocialReactionDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialPosts/{socialPostId}/Reactions/{reactionId}',
            path: {
                'socialPostId': socialPostId,
                'reactionId': reactionId,
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
     * @param socialProfileId
     * @param socialPostId
     * @param reactionId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2SocialServiceSocialPostsReactions(
        socialProfileId: string,
        socialPostId: string,
        reactionId: string,
        xApiVersion?: string,
        requestBody?: SocialReactionUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/SocialService/SocialPosts/{socialPostId}/Reactions/{reactionId}',
            path: {
                'socialPostId': socialPostId,
                'reactionId': reactionId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'socialProfileId': socialProfileId,
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
     * @param socialProfileId
     * @param socialPostId
     * @param reactionId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2SocialServiceSocialPostsReactions(
        socialProfileId: string,
        socialPostId: string,
        reactionId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SocialService/SocialPosts/{socialPostId}/Reactions/{reactionId}',
            path: {
                'socialPostId': socialPostId,
                'reactionId': reactionId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'socialProfileId': socialProfileId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param socialProfileId
     * @param socialPostId
     * @param xApiVersion
     * @returns SocialPostCommentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SocialServiceSocialPostsComments(
        socialProfileId: string,
        socialPostId: string,
        xApiVersion?: string,
    ): CancelablePromise<SocialPostCommentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialPosts/{socialPostId}/Comments',
            path: {
                'socialPostId': socialPostId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'socialProfileId': socialProfileId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param socialProfileId
     * @param socialPostId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2SocialServiceSocialPostsComments(
        socialProfileId: string,
        socialPostId: string,
        xApiVersion?: string,
        requestBody?: SocialPostCommentCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/SocialService/SocialPosts/{socialPostId}/Comments',
            path: {
                'socialPostId': socialPostId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'socialProfileId': socialProfileId,
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
     * @param socialProfileId
     * @param socialPostId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2SocialServiceSocialPostsCommentsCount(
        socialProfileId: string,
        socialPostId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/Count',
            path: {
                'socialPostId': socialPostId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'socialProfileId': socialProfileId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param socialProfileId
     * @param socialPostId
     * @param commentId
     * @param xApiVersion
     * @returns SocialPostCommentDtoEnvelope OK
     * @throws ApiError
     */
    public static getSocialPostCommentAsync(
        socialProfileId: string,
        socialPostId: string,
        commentId: string,
        xApiVersion?: string,
    ): CancelablePromise<SocialPostCommentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/{commentId}',
            path: {
                'socialPostId': socialPostId,
                'commentId': commentId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'socialProfileId': socialProfileId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param socialProfileId
     * @param socialPostId
     * @param commentId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2SocialServiceSocialPostsComments(
        socialProfileId: string,
        socialPostId: string,
        commentId: string,
        xApiVersion?: string,
        requestBody?: SocialPostCommentUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/{commentId}',
            path: {
                'socialPostId': socialPostId,
                'commentId': commentId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'socialProfileId': socialProfileId,
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
     * @param socialProfileId
     * @param socialPostId
     * @param commentId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2SocialServiceSocialPostsComments(
        socialProfileId: string,
        socialPostId: string,
        commentId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/{commentId}',
            path: {
                'socialPostId': socialPostId,
                'commentId': commentId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'socialProfileId': socialProfileId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
