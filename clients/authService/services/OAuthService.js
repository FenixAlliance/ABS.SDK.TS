"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuthService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class OAuthService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns ApiAuthorizationResultEnvelope OK
     * @throws ApiError
     */
    static getApiV2OAuthWhoAmI(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/OAuth/WhoAmI',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param xApiVersion
     * @param requestBody
     * @returns JsonWebTokenEnvelope OK
     * @throws ApiError
     */
    static postApiV2OAuthToken(xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/OAuth/Token',
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param userId
     * @param xApiVersion
     * @returns StringListEnvelope OK
     * @throws ApiError
     */
    static getApiV2OAuthPermissions(tenantId, userId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/OAuth/Permissions',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'userId': userId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param xApiVersion
     * @param requestBody
     * @returns JsonWebTokenEnvelope OK
     * @throws ApiError
     */
    static postApiV2OAuthSignIn(xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/OAuth/SignIn',
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @param xApiVersion
     * @returns AccountHolderCreateDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2OAuthSignIn(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/OAuth/SignIn',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @param applicationId
     * @param xApiVersion
     * @returns JsonWebKeySetEnvelope OK
     * @throws ApiError
     */
    static getApiV2OAuthKeys(applicationId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/OAuth/{applicationId}/Keys',
            path: {
                'applicationId': applicationId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
    /**
     * @param tenantId
     * @param applicationId
     * @param xApiVersion
     * @returns OpenIdConfigurationEnvelope OK
     * @throws ApiError
     */
    static getApiV2OAuthWellKnownOpenIdConfiguration(tenantId, applicationId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/OAuth/{tenantId}/{applicationId}/.Well-Known/OpenId-Configuration',
            path: {
                'tenantId': tenantId,
                'applicationId': applicationId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
}
exports.OAuthService = OAuthService;
