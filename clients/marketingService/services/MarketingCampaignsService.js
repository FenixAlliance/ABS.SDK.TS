"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketingCampaignsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class MarketingCampaignsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    static getApiV2MarketingServiceMarketingCampaigns(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2MarketingServiceMarketingCampaigns(tenantId, requestBody, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2MarketingServiceMarketingCampaignsCount(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2MarketingServiceMarketingCampaigns1(tenantId, marketingcampaignId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2MarketingServiceMarketingCampaigns(tenantId, marketingcampaignId, requestBody, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteApiV2MarketingServiceMarketingCampaigns(tenantId, marketingcampaignId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.MarketingCampaignsService = MarketingCampaignsService;
