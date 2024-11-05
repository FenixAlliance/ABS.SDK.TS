"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AntiforgeryService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class AntiforgeryService {
    /**
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    static getApiV2SystemServiceAntiforgeryGetAndStoreTokens(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SystemService/Antiforgery/GetAndStoreTokens',
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
    /**
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    static getApiV2SystemServiceAntiforgeryIsRequestValid(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SystemService/Antiforgery/IsRequestValid',
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
}
exports.AntiforgeryService = AntiforgeryService;
