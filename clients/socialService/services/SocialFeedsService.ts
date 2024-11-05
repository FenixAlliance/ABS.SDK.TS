/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Int32Envelope } from '../models/Int32Envelope';
import type { SocialFeedDtoEnvelope } from '../models/SocialFeedDtoEnvelope';
import type { SocialFeedDtoListEnvelope } from '../models/SocialFeedDtoListEnvelope';
import type { SocialFeedPostCreateDto } from '../models/SocialFeedPostCreateDto';
import type { SocialFeedPostDtoEnvelope } from '../models/SocialFeedPostDtoEnvelope';
import type { SocialFeedPostDtoListEnvelope } from '../models/SocialFeedPostDtoListEnvelope';
import type { SocialFeedPostUpdateDto } from '../models/SocialFeedPostUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SocialFeedsService {
    /**
     * @param socialProfileId
     * @param xApiVersion
     * @returns SocialFeedDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SocialServiceSocialFeeds(
        socialProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<SocialFeedDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2SocialServiceSocialFeedsCount(
        socialProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getApiV2SocialServiceSocialFeeds1(
        socialProfileId: string,
        socialFeedId: string,
        xApiVersion?: string,
    ): CancelablePromise<SocialFeedDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2SocialServiceSocialFeedsPosts(
        socialProfileId: string,
        socialFeedId: string,
        xApiVersion?: string,
    ): CancelablePromise<SocialFeedPostDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2SocialServiceSocialFeedsPosts(
        socialProfileId: string,
        socialFeedId: string,
        xApiVersion?: string,
        requestBody?: SocialFeedPostCreateDto,
    ): CancelablePromise<SocialFeedPostDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2SocialServiceSocialFeedsPostsCount(
        socialProfileId: string,
        socialFeedId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getFeedPostAsync(
        socialProfileId: string,
        socialFeedId: string,
        feedPostId: string,
        xApiVersion?: string,
    ): CancelablePromise<SocialFeedPostDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static putApiV2SocialServiceSocialFeedsPosts(
        socialProfileId: string,
        socialFeedId: string,
        feedPostId: string,
        xApiVersion?: string,
        requestBody?: SocialFeedPostUpdateDto,
    ): CancelablePromise<SocialFeedPostDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2SocialServiceSocialFeedsPosts(
        socialProfileId: string,
        socialFeedId: string,
        feedPostId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
