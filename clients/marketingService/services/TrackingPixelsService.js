"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingPixelsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class TrackingPixelsService {
    /**
     * @param pixelId
     * @param xApiVersion
     * @returns OrderDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2MarketingServiceTrackingPixels(pixelId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/MarketingService/TrackingPixels/{pixelId}',
            path: {
                'pixelId': pixelId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
}
exports.TrackingPixelsService = TrackingPixelsService;
