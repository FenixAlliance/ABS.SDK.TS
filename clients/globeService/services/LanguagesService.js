"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguagesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class LanguagesService {
    /**
     * @param xApiVersion
     * @returns CountryLanguageDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2GlobeServiceLanguages(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/GlobeService/Languages',
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
     * @param languageId
     * @param xApiVersion
     * @returns CountryLanguageDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2GlobeServiceLanguages1(languageId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/GlobeService/Languages/{languageId}',
            path: {
                'languageId': languageId,
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
exports.LanguagesService = LanguagesService;
