"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckerService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class CheckerService {
    /**
     * @param xApiVersion
     * @returns boolean OK
     * @throws ApiError
     */
    static getApiV2AuthCheckerIsAuthenticated(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Auth/Checker/IsAuthenticated',
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
}
exports.CheckerService = CheckerService;
