"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialFeedsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class SocialFeedsService {
    /**
     * @param socialProfileId
     * @param xApiVersion
     * @returns SocialFeedDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2SocialServiceSocialFeeds(socialProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialFeeds',
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
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2SocialServiceSocialFeedsCount(socialProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialFeeds/Count',
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
     * @param socialFeedId
     * @param xApiVersion
     * @returns SocialFeedDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2SocialServiceSocialFeeds1(socialProfileId, socialFeedId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialFeeds/{socialFeedId}',
            path: {
                'socialFeedId': socialFeedId,
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
     * @param socialFeedId
     * @param xApiVersion
     * @returns SocialFeedPostDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2SocialServiceSocialFeedsPosts(socialProfileId, socialFeedId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts',
            path: {
                'socialFeedId': socialFeedId,
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
     * @param socialFeedId
     * @param xApiVersion
     * @param requestBody
     * @returns SocialFeedPostDtoEnvelope Created
     * @throws ApiError
     */
    static postApiV2SocialServiceSocialFeedsPosts(socialProfileId, socialFeedId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts',
            path: {
                'socialFeedId': socialFeedId,
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
     * @param socialFeedId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2SocialServiceSocialFeedsPostsCount(socialProfileId, socialFeedId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts/Count',
            path: {
                'socialFeedId': socialFeedId,
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
     * @param socialFeedId
     * @param feedPostId
     * @param xApiVersion
     * @returns SocialFeedPostDtoEnvelope OK
     * @throws ApiError
     */
    static getFeedPostAsync(socialProfileId, socialFeedId, feedPostId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts/{feedPostId}',
            path: {
                'socialFeedId': socialFeedId,
                'feedPostId': feedPostId,
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
     * @param socialFeedId
     * @param feedPostId
     * @param xApiVersion
     * @param requestBody
     * @returns SocialFeedPostDtoEnvelope OK
     * @throws ApiError
     */
    static putApiV2SocialServiceSocialFeedsPosts(socialProfileId, socialFeedId, feedPostId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts/{feedPostId}',
            path: {
                'socialFeedId': socialFeedId,
                'feedPostId': feedPostId,
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
     * @param socialFeedId
     * @param feedPostId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    static deleteApiV2SocialServiceSocialFeedsPosts(socialProfileId, socialFeedId, feedPostId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts/{feedPostId}',
            path: {
                'socialFeedId': socialFeedId,
                'feedPostId': feedPostId,
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
exports.SocialFeedsService = SocialFeedsService;
