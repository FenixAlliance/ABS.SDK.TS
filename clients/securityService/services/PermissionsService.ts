/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { SecurityPermissionCreateDto } from '../models/SecurityPermissionCreateDto';
import type { SecurityPermissionUpdateDto } from '../models/SecurityPermissionUpdateDto';
import type { SecurityRoleDtoListEnvelope } from '../models/SecurityRoleDtoListEnvelope';
import type { TenantEnrolmentDtoListEnvelope } from '../models/TenantEnrolmentDtoListEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PermissionsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns SecurityRoleDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SecurityServicePermissions(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<SecurityRoleDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2SecurityServicePermissions(
        tenantId: string,
        requestBody: SecurityPermissionCreateDto,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2SecurityServicePermissions1(
        tenantId: string,
        securityPermissionId: string,
        xApiVersion?: string,
    ): CancelablePromise<SecurityRoleDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static putApiV2SecurityServicePermissions(
        tenantId: string,
        securityPermissionId: string,
        requestBody: SecurityPermissionUpdateDto,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2SecurityServicePermissions(
        tenantId: string,
        securityPermissionId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static postApiV2SecurityServicePermissionsRoles(
        tenantId: string,
        securityPermissionId: string,
        securityRoleId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2SecurityServicePermissionsRoles(
        tenantId: string,
        securityPermissionId: string,
        securityRoleId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static getApiV2SecurityServicePermissionsEnrollments(
        tenantId: string,
        securityPermissionId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantEnrolmentDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2SecurityServicePermissionsEnrollments(
        tenantId: string,
        securityPermissionId: string,
        enrollmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2SecurityServicePermissionsEnrollments(
        tenantId: string,
        securityPermissionId: string,
        enrollmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static postApiV2SecurityServicePermissionsApplications(
        tenantId: string,
        securityPermissionId: string,
        applicationId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2SecurityServicePermissionsApplications(
        tenantId: string,
        securityPermissionId: string,
        applicationId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
