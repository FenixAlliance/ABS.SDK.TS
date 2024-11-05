"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ResourceService {
    /**
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    static getApiV2IdentityServiceResourceMessage(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/IdentityService/Resource/message',
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
}
exports.ResourceService = ResourceService;
