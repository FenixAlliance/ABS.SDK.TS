/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ApplicationsService {
    /**
     * @param appId
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    public static getApiV2Applications(
        appId: string,
        xApiVersion?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
    public static getApiV2ApplicationsRequiredPermissions(
        appId: string,
        xApiVersion?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
    public static getApiV2ApplicationsGrantedPermissions(
        appId: string,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
    public static getApiV2ApplicationsGrantedRoles(
        appId: string,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
    public static getApiV2ApplicationsGrantedRolesGrantedPermissions(
        appId: string,
        securityRoleId: string,
        enrollmentId?: string,
        xApiVersion?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
