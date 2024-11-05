"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ApplicationsService {
    /**
     * @param appId
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    static getApiV2Applications(appId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Applications/{appID}',
            path: {
                'appID': appId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
    /**
     * @param appId
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    static getApiV2ApplicationsRequiredPermissions(appId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Applications/{appID}/RequiredPermissions',
            path: {
                'appID': appId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
    /**
     * @param appId
     * @param tenantId
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    static getApiV2ApplicationsGrantedPermissions(appId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Applications/{appID}/GrantedPermissions',
            path: {
                'appID': appId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantID': tenantId,
            },
        });
    }
    /**
     * @param appId
     * @param tenantId
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    static getApiV2ApplicationsGrantedRoles(appId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Applications/{appID}/GrantedRoles',
            path: {
                'appID': appId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantID': tenantId,
            },
        });
    }
    /**
     * @param appId
     * @param securityRoleId
     * @param enrollmentId
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    static getApiV2ApplicationsGrantedRolesGrantedPermissions(appId, securityRoleId, enrollmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Applications/{appID}/GrantedRoles/{SecurityRoleID}/GrantedPermissions',
            path: {
                'appID': appId,
                'securityRoleID': securityRoleId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'enrollmentID': enrollmentId,
            },
        });
    }
}
exports.ApplicationsService = ApplicationsService;
