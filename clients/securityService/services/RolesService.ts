/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { SecurityPermissionDtoListEnvelope } from '../models/SecurityPermissionDtoListEnvelope';
import type { SecurityRoleCreateDto } from '../models/SecurityRoleCreateDto';
import type { SecurityRoleDtoListEnvelope } from '../models/SecurityRoleDtoListEnvelope';
import type { SecurityRoleUpdateDto } from '../models/SecurityRoleUpdateDto';
import type { TenantEnrolmentDtoListEnvelope } from '../models/TenantEnrolmentDtoListEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RolesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns SecurityRoleDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SecurityServiceRoles(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<SecurityRoleDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2SecurityServiceRoles(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: SecurityRoleCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2SecurityServiceRoles1(
        tenantId: string,
        securityRoleId: string,
        xApiVersion?: string,
    ): CancelablePromise<SecurityRoleDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static putApiV2SecurityServiceRoles(
        tenantId: string,
        securityRoleId: string,
        xApiVersion?: string,
        requestBody?: SecurityRoleUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2SecurityServiceRoles(
        tenantId: string,
        securityRoleId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2SecurityServiceRolesPermissions(
        tenantId: string,
        securityRoleId: string,
        xApiVersion?: string,
    ): CancelablePromise<SecurityPermissionDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2SecurityServiceRolesPermissions(
        tenantId: string,
        securityRoleId: string,
        securityPermissionId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2SecurityServiceRolesPermissions(
        tenantId: string,
        securityRoleId: string,
        securityPermissionId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2SecurityServiceRolesEnrollments(
        tenantId: string,
        securityRoleId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantEnrolmentDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2SecurityServiceRolesEnrollments(
        tenantId: string,
        securityRoleId: string,
        enrollmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2SecurityServiceRolesEnrollments(
        tenantId: string,
        securityRoleId: string,
        enrollmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2SecurityServiceRolesApplications(
        tenantId: string,
        securityRoleId: string,
        applicationId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2SecurityServiceRolesApplications(
        tenantId: string,
        securityRoleId: string,
        applicationId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
