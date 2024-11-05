"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialPostsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class SocialPostsService {
    /**
     * @param socialProfileId
     * @param xApiVersion
     * @returns SocialPostDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2SocialServiceSocialPosts(socialProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2SocialServiceSocialPosts(socialProfileId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2SocialServiceSocialPostsCount(socialProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getSocialPostAsync(socialProfileId, socialPostId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2SocialServiceSocialPosts(socialProfileId, socialPostId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteApiV2SocialServiceSocialPosts(socialProfileId, socialPostId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2SocialServiceSocialPostsAttachments(socialPostId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2SocialServiceSocialPostsAttachments(socialPostId, socialProfileId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2SocialServiceSocialPostsAttachmentsCount(socialPostId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getSocialPostAttachmentAsync(socialPostId, attachmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2SocialServiceSocialPostsAttachments(socialProfileId, socialPostId, attachmentId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteApiV2SocialServiceSocialPostsAttachments(socialProfileId, socialPostId, attachmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2SocialServiceSocialPostsReactions(socialPostId, socialProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2SocialServiceSocialPostsReactions(socialPostId, socialProfileId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2SocialServiceSocialPostsReactionsCount(socialPostId, socialProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getSocialPostReactionAsync(socialPostId, reactionId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2SocialServiceSocialPostsReactions(socialProfileId, socialPostId, reactionId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteApiV2SocialServiceSocialPostsReactions(socialProfileId, socialPostId, reactionId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2SocialServiceSocialPostsComments(socialProfileId, socialPostId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2SocialServiceSocialPostsComments(socialProfileId, socialPostId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2SocialServiceSocialPostsCommentsCount(socialProfileId, socialPostId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getSocialPostCommentAsync(socialProfileId, socialPostId, commentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2SocialServiceSocialPostsComments(socialProfileId, socialPostId, commentId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteApiV2SocialServiceSocialPostsComments(socialProfileId, socialPostId, commentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.SocialPostsService = SocialPostsService;
