/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountHolderCreateDtoEnvelope } from '../models/AccountHolderCreateDtoEnvelope';
import type { ApiAuthorizationResultEnvelope } from '../models/ApiAuthorizationResultEnvelope';
import type { JsonWebKeySetEnvelope } from '../models/JsonWebKeySetEnvelope';
import type { JsonWebTokenEnvelope } from '../models/JsonWebTokenEnvelope';
import type { OAuthTokenRequest } from '../models/OAuthTokenRequest';
import type { OpenIdConfigurationEnvelope } from '../models/OpenIdConfigurationEnvelope';
import type { SigninModel } from '../models/SigninModel';
import type { StringListEnvelope } from '../models/StringListEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OAuthService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns ApiAuthorizationResultEnvelope OK
     * @throws ApiError
     */
    public static getApiV2OAuthWhoAmI(
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<ApiAuthorizationResultEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2OAuthToken(
        xApiVersion?: string,
        requestBody?: OAuthTokenRequest,
    ): CancelablePromise<JsonWebTokenEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2OAuthPermissions(
        tenantId: string,
        userId?: string,
        xApiVersion?: string,
    ): CancelablePromise<StringListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2OAuthSignIn(
        xApiVersion?: string,
        requestBody?: SigninModel,
    ): CancelablePromise<JsonWebTokenEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2OAuthSignIn(
        xApiVersion?: string,
    ): CancelablePromise<AccountHolderCreateDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2OAuthKeys(
        applicationId: string,
        xApiVersion?: string,
    ): CancelablePromise<JsonWebKeySetEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2OAuthWellKnownOpenIdConfiguration(
        tenantId: string,
        applicationId: string,
        xApiVersion?: string,
    ): CancelablePromise<OpenIdConfigurationEnvelope> {
        return __request(OpenAPI, {
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
