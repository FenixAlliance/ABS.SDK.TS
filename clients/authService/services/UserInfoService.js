"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class UserInfoService {
    /**
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    static getConnectUserinfo(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/connect/userinfo',
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
    static postConnectUserinfo(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/connect/userinfo',
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
}
exports.UserInfoService = UserInfoService;
