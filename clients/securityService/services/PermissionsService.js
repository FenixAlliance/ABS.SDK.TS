"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class PermissionsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns SecurityRoleDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2SecurityServicePermissions(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SecurityService/Permissions',
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
     * @param requestBody
     * @param xApiVersion
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2SecurityServicePermissions(tenantId, requestBody, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/SecurityService/Permissions',
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
     * @param securityPermissionId
     * @param xApiVersion
     * @returns SecurityRoleDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2SecurityServicePermissions1(tenantId, securityPermissionId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SecurityService/Permissions/{securityPermissionId}',
            path: {
                'securityPermissionId': securityPermissionId,
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
     * @param securityPermissionId
     * @param requestBody
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2SecurityServicePermissions(tenantId, securityPermissionId, requestBody, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/SecurityService/Permissions/{securityPermissionId}',
            path: {
                'securityPermissionId': securityPermissionId,
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
     * @param securityPermissionId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    static deleteApiV2SecurityServicePermissions(tenantId, securityPermissionId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SecurityService/Permissions/{securityPermissionId}',
            path: {
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
     * @param securityPermissionId
     * @param securityRoleId
     * @param xApiVersion
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2SecurityServicePermissionsRoles(tenantId, securityPermissionId, securityRoleId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/SecurityService/Permissions/{securityPermissionId}/Roles/{securityRoleId}',
            path: {
                'securityPermissionId': securityPermissionId,
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
     * @param securityPermissionId
     * @param securityRoleId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    static deleteApiV2SecurityServicePermissionsRoles(tenantId, securityPermissionId, securityRoleId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SecurityService/Permissions/{securityPermissionId}/Roles/{securityRoleId}',
            path: {
                'securityPermissionId': securityPermissionId,
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
     * @param securityPermissionId
     * @param xApiVersion
     * @returns TenantEnrolmentDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2SecurityServicePermissionsEnrollments(tenantId, securityPermissionId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SecurityService/Permissions/{securityPermissionId}/Enrollments',
            path: {
                'securityPermissionId': securityPermissionId,
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
     * @param securityPermissionId
     * @param enrollmentId
     * @param xApiVersion
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2SecurityServicePermissionsEnrollments(tenantId, securityPermissionId, enrollmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/SecurityService/Permissions/{securityPermissionId}/Enrollments/{enrollmentId}',
            path: {
                'securityPermissionId': securityPermissionId,
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
     * @param securityPermissionId
     * @param enrollmentId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    static deleteApiV2SecurityServicePermissionsEnrollments(tenantId, securityPermissionId, enrollmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SecurityService/Permissions/{securityPermissionId}/Enrollments/{enrollmentId}',
            path: {
                'securityPermissionId': securityPermissionId,
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
     * @param securityPermissionId
     * @param applicationId
     * @param xApiVersion
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2SecurityServicePermissionsApplications(tenantId, securityPermissionId, applicationId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/SecurityService/Permissions/{securityPermissionId}/Applications/{applicationId}',
            path: {
                'securityPermissionId': securityPermissionId,
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
     * @param securityPermissionId
     * @param applicationId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2SecurityServicePermissionsApplications(tenantId, securityPermissionId, applicationId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SecurityService/Permissions/{securityPermissionId}/Applications/{applicationId}',
            path: {
                'securityPermissionId': securityPermissionId,
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
exports.PermissionsService = PermissionsService;
