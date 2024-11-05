/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { MarketingCampaignCreateDto } from '../models/MarketingCampaignCreateDto';
import type { MarketingCampaignDtoEnvelope } from '../models/MarketingCampaignDtoEnvelope';
import type { MarketingCampaignUpdateDto } from '../models/MarketingCampaignUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MarketingCampaignsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    public static getApiV2MarketingServiceMarketingCampaigns(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/MarketingService/MarketingCampaigns',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param requestBody
     * @param xApiVersion
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2MarketingServiceMarketingCampaigns(
        tenantId: string,
        requestBody: MarketingCampaignCreateDto,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/MarketingService/MarketingCampaigns',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2MarketingServiceMarketingCampaignsCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/MarketingService/MarketingCampaigns/Count',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param marketingcampaignId
     * @param xApiVersion
     * @returns MarketingCampaignDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2MarketingServiceMarketingCampaigns1(
        tenantId: string,
        marketingcampaignId: string,
        xApiVersion?: string,
    ): CancelablePromise<MarketingCampaignDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/MarketingService/MarketingCampaigns/{marketingcampaignId}',
            path: {
                'marketingcampaignId': marketingcampaignId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param marketingcampaignId
     * @param requestBody
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2MarketingServiceMarketingCampaigns(
        tenantId: string,
        marketingcampaignId: string,
        requestBody: MarketingCampaignUpdateDto,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/MarketingService/MarketingCampaigns/{marketingcampaignId}',
            path: {
                'marketingcampaignId': marketingcampaignId,
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
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param marketingcampaignId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2MarketingServiceMarketingCampaigns(
        tenantId: string,
        marketingcampaignId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/MarketingService/MarketingCampaigns/{marketingcampaignId}',
            path: {
                'marketingcampaignId': marketingcampaignId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
