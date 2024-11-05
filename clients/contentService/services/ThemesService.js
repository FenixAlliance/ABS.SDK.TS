"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ThemesService {
    /**
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    static getApiV2ContentServiceThemesUpdate(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/Themes/Update',
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
exports.ThemesService = ThemesService;
