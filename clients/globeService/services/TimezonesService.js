"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimezonesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class TimezonesService {
    /**
     * @param xApiVersion
     * @returns TimezoneDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2GlobeServiceTimezones(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/GlobeService/Timezones',
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
     * @param timeZoneId
     * @param xApiVersion
     * @returns TimezoneDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2GlobeServiceTimezones1(timeZoneId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/GlobeService/Timezones/{timeZoneId}',
            path: {
                'timeZoneId': timeZoneId,
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
}
exports.TimezonesService = TimezonesService;
