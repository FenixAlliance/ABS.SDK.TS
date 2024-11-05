/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BooleanEnvelope } from '../models/BooleanEnvelope';
import type { ConversationCreateDto } from '../models/ConversationCreateDto';
import type { ConversationDtoListEnvelope } from '../models/ConversationDtoListEnvelope';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { FollowRecordDtoListEnvelope } from '../models/FollowRecordDtoListEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { NotificationDtoListEnvelope } from '../models/NotificationDtoListEnvelope';
import type { PrivateMessageCreateDto } from '../models/PrivateMessageCreateDto';
import type { PrivateMessageDtoListEnvelope } from '../models/PrivateMessageDtoListEnvelope';
import type { PrivateMessageUpdateDto } from '../models/PrivateMessageUpdateDto';
import type { SocialProfileDtoEnvelope } from '../models/SocialProfileDtoEnvelope';
import type { SocialProfileDtoListEnvelope } from '../models/SocialProfileDtoListEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SocialProfilesService {
    /**
     * Get Social Profiles
     * Get a list of social profiles.
     * @param xApiVersion
     * @returns SocialProfileDtoListEnvelope OK
     * @throws ApiError
     */
    public static getSocialProfilesAsync(
        xApiVersion?: string,
    ): CancelablePromise<SocialProfileDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static countSocialProfilesAsync(
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getSocialProfileAsync(
        socialProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<SocialProfileDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getFollowersAsync(
        socialProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<FollowRecordDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static countFollowersAsync(
        socialProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getFollowersAsync1(
        socialProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<SocialProfileDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static countFollowersAsync1(
        socialProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getFollowsAsync(
        socialProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<FollowRecordDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static countFollowsAsync(
        socialProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getFollowsAsync1(
        socialProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<SocialProfileDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static countFollowsAsync1(
        socialProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static followExistsAsync(
        socialProfileId: string,
        followedSocialProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<BooleanEnvelope> {
        return __request(OpenAPI, {
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
    public static followAsync(
        socialProfileId: string,
        followedSocialProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static unfollowAsync(
        socialProfileId: string,
        followedSocialProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getNotificationsAsync(
        socialProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<NotificationDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static countNotificationsAsync(
        socialProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getConversationsAsync(
        socialProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<ConversationDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static createConversationAsync(
        socialProfileId: string,
        xApiVersion?: string,
        requestBody?: ConversationCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static countConversationsAsync(
        socialProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getMessagesAsync(
        conversationId: string,
        xApiVersion?: string,
    ): CancelablePromise<PrivateMessageDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static createMessageAsync(
        socialProfileId: string,
        conversationId: string,
        xApiVersion?: string,
        requestBody?: PrivateMessageCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static countMessagesAsync(
        conversationId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static updateMessageAsync(
        socialProfileId: string,
        conversationId: string,
        messageId: string,
        xApiVersion?: string,
        requestBody?: PrivateMessageUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteMessageAsync(
        socialProfileId: string,
        conversationId: string,
        messageId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
