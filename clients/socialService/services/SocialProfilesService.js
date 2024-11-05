"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialProfilesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class SocialProfilesService {
    /**
     * Get Social Profiles
     * Get a list of social profiles.
     * @param xApiVersion
     * @returns SocialProfileDtoListEnvelope OK
     * @throws ApiError
     */
    static getSocialProfilesAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialProfiles',
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
     * Count Social Profiles
     * Count social profiles.
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static countSocialProfilesAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialProfiles/Count',
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
     * Get Social Profile
     * Get a social profile by ID.
     * @param socialProfileId
     * @param xApiVersion
     * @returns SocialProfileDtoEnvelope OK
     * @throws ApiError
     */
    static getSocialProfileAsync(socialProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialProfiles/{socialProfileId}',
            path: {
                'socialProfileId': socialProfileId,
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
     * Get Followers
     * Get a list of followers for a social profile.
     * @param socialProfileId
     * @param xApiVersion
     * @returns FollowRecordDtoListEnvelope OK
     * @throws ApiError
     */
    static getFollowersAsync(socialProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialProfiles/{socialProfileId}/Followers',
            path: {
                'socialProfileId': socialProfileId,
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
     * Count Followers
     * Count followers for a social profile.
     * @param socialProfileId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static countFollowersAsync(socialProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialProfiles/{socialProfileId}/Followers/Count',
            path: {
                'socialProfileId': socialProfileId,
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
     * Get Followers
     * Get a list of followers for a social profile.
     * @param socialProfileId
     * @param xApiVersion
     * @returns SocialProfileDtoListEnvelope OK
     * @throws ApiError
     */
    static getFollowersAsync1(socialProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialProfiles/{socialProfileId}/Followers/Profiles',
            path: {
                'socialProfileId': socialProfileId,
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
     * Count Followers
     * Count followers for a social profile.
     * @param socialProfileId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static countFollowersAsync1(socialProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialProfiles/{socialProfileId}/Followers/Profiles/Count',
            path: {
                'socialProfileId': socialProfileId,
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
     * Get Follows
     * Get a list of follows for a social profile.
     * @param socialProfileId
     * @param xApiVersion
     * @returns FollowRecordDtoListEnvelope OK
     * @throws ApiError
     */
    static getFollowsAsync(socialProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows',
            path: {
                'socialProfileId': socialProfileId,
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
     * Count Follows
     * Count follows for a social profile.
     * @param socialProfileId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static countFollowsAsync(socialProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows/Count',
            path: {
                'socialProfileId': socialProfileId,
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
     * Get Follows
     * Get a list of follows for a social profile.
     * @param socialProfileId
     * @param xApiVersion
     * @returns SocialProfileDtoListEnvelope OK
     * @throws ApiError
     */
    static getFollowsAsync1(socialProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows/Profiles',
            path: {
                'socialProfileId': socialProfileId,
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
     * Count Follows
     * Count follows for a social profile.
     * @param socialProfileId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static countFollowsAsync1(socialProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows/Profiles/Count',
            path: {
                'socialProfileId': socialProfileId,
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
     * Check if Follow Exists
     * Check if a follow record exists between two social profiles.
     * @param socialProfileId
     * @param followedSocialProfileId
     * @param xApiVersion
     * @returns BooleanEnvelope OK
     * @throws ApiError
     */
    static followExistsAsync(socialProfileId, followedSocialProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows/{followedSocialProfileId}',
            path: {
                'socialProfileId': socialProfileId,
                'followedSocialProfileId': followedSocialProfileId,
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
     * Follow
     * Follow a social profile.
     * @param socialProfileId
     * @param followedSocialProfileId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static followAsync(socialProfileId, followedSocialProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows/{followedSocialProfileId}',
            path: {
                'socialProfileId': socialProfileId,
                'followedSocialProfileId': followedSocialProfileId,
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
     * Unfollow
     * Unfollow a social profile.
     * @param socialProfileId
     * @param followedSocialProfileId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static unfollowAsync(socialProfileId, followedSocialProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows/{followedSocialProfileId}',
            path: {
                'socialProfileId': socialProfileId,
                'followedSocialProfileId': followedSocialProfileId,
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
     * Get Notifications
     * Get a list of notifications for a social profile.
     * @param socialProfileId
     * @param xApiVersion
     * @returns NotificationDtoListEnvelope OK
     * @throws ApiError
     */
    static getNotificationsAsync(socialProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialProfiles/{socialProfileId}/Notifications',
            path: {
                'socialProfileId': socialProfileId,
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
     * Count Notifications
     * Count notifications for a social profile.
     * @param socialProfileId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static countNotificationsAsync(socialProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialProfiles/{socialProfileId}/Notifications/Count',
            path: {
                'socialProfileId': socialProfileId,
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
     * Get Conversations
     * Get a list of conversations for a social profile.
     * @param socialProfileId
     * @param xApiVersion
     * @returns ConversationDtoListEnvelope OK
     * @throws ApiError
     */
    static getConversationsAsync(socialProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialProfiles/{socialProfileId}/Conversations',
            path: {
                'socialProfileId': socialProfileId,
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
     * Create Conversation
     * Create a new conversation.
     * @param socialProfileId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static createConversationAsync(socialProfileId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/SocialService/SocialProfiles/{socialProfileId}/Conversations',
            path: {
                'socialProfileId': socialProfileId,
            },
            headers: {
                'x-api-version': xApiVersion,
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
     * Count Conversations
     * Count conversations for a social profile.
     * @param socialProfileId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static countConversationsAsync(socialProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialProfiles/{socialProfileId}/Conversations/Count',
            path: {
                'socialProfileId': socialProfileId,
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
     * Get Messages
     * Get a list of messages for a conversation.
     * @param conversationId
     * @param xApiVersion
     * @returns PrivateMessageDtoListEnvelope OK
     * @throws ApiError
     */
    static getMessagesAsync(conversationId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialProfiles/{conversationId}/Messages',
            path: {
                'conversationId': conversationId,
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
     * Create Message
     * Create a new message.
     * @param socialProfileId
     * @param conversationId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static createMessageAsync(socialProfileId, conversationId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/SocialService/SocialProfiles/{conversationId}/Messages',
            path: {
                'conversationId': conversationId,
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
     * Count Messages
     * Count messages for a conversation.
     * @param conversationId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static countMessagesAsync(conversationId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialProfiles/{conversationId}/Messages/Count',
            path: {
                'conversationId': conversationId,
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
     * Update Message
     * Update a message.
     * @param socialProfileId
     * @param conversationId
     * @param messageId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static updateMessageAsync(socialProfileId, conversationId, messageId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/SocialService/SocialProfiles/{conversationId}/Messages/{messageId}',
            path: {
                'conversationId': conversationId,
                'messageId': messageId,
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
     * Delete Message
     * Delete a message.
     * @param socialProfileId
     * @param conversationId
     * @param messageId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteMessageAsync(socialProfileId, conversationId, messageId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SocialService/SocialProfiles/{conversationId}/Messages/{messageId}',
            path: {
                'conversationId': conversationId,
                'messageId': messageId,
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
exports.SocialProfilesService = SocialProfilesService;
