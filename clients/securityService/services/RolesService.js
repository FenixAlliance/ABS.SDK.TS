"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class RolesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns SecurityRoleDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2SecurityServiceRoles(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SecurityService/Roles',
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
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2SecurityServiceRoles(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/SecurityService/Roles',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param securityRoleId
     * @param xApiVersion
     * @returns SecurityRoleDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2SecurityServiceRoles1(tenantId, securityRoleId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SecurityService/Roles/{securityRoleId}',
            path: {
                'securityRoleId': securityRoleId,
            },
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
     * @param tenantId
     * @param securityRoleId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2SecurityServiceRoles(tenantId, securityRoleId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/SecurityService/Roles/{securityRoleId}',
            path: {
                'securityRoleId': securityRoleId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param securityRoleId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2SecurityServiceRoles(tenantId, securityRoleId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SecurityService/Roles/{securityRoleId}',
            path: {
                'securityRoleId': securityRoleId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param securityRoleId
     * @param xApiVersion
     * @returns SecurityPermissionDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2SecurityServiceRolesPermissions(tenantId, securityRoleId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SecurityService/Roles/{securityRoleId}/Permissions',
            path: {
                'securityRoleId': securityRoleId,
            },
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
     * @param tenantId
     * @param securityRoleId
     * @param securityPermissionId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static postApiV2SecurityServiceRolesPermissions(tenantId, securityRoleId, securityPermissionId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/SecurityService/Roles/{securityRoleId}/Permissions/{securityPermissionId}',
            path: {
                'securityRoleId': securityRoleId,
                'securityPermissionId': securityPermissionId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param securityRoleId
     * @param securityPermissionId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2SecurityServiceRolesPermissions(tenantId, securityRoleId, securityPermissionId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SecurityService/Roles/{securityRoleId}/Permissions/{securityPermissionId}',
            path: {
                'securityRoleId': securityRoleId,
                'securityPermissionId': securityPermissionId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param securityRoleId
     * @param xApiVersion
     * @returns TenantEnrolmentDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2SecurityServiceRolesEnrollments(tenantId, securityRoleId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SecurityService/Roles/{securityRoleId}/Enrollments',
            path: {
                'securityRoleId': securityRoleId,
            },
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
     * @param tenantId
     * @param securityRoleId
     * @param enrollmentId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static postApiV2SecurityServiceRolesEnrollments(tenantId, securityRoleId, enrollmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/SecurityService/Roles/{securityRoleId}/Enrollments/{enrollmentId}',
            path: {
                'securityRoleId': securityRoleId,
                'enrollmentId': enrollmentId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param securityRoleId
     * @param enrollmentId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2SecurityServiceRolesEnrollments(tenantId, securityRoleId, enrollmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SecurityService/Roles/{securityRoleId}/Enrollments/{enrollmentId}',
            path: {
                'securityRoleId': securityRoleId,
                'enrollmentId': enrollmentId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param securityRoleId
     * @param applicationId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static postApiV2SecurityServiceRolesApplications(tenantId, securityRoleId, applicationId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/SecurityService/Roles/{securityRoleId}/Applications/{applicationId}',
            path: {
                'securityRoleId': securityRoleId,
                'applicationId': applicationId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param securityRoleId
     * @param applicationId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2SecurityServiceRolesApplications(tenantId, securityRoleId, applicationId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SecurityService/Roles/{securityRoleId}/Applications/{applicationId}',
            path: {
                'securityRoleId': securityRoleId,
                'applicationId': applicationId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
exports.RolesService = RolesService;
