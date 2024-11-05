/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountHolderCreateDto } from '../models/AccountHolderCreateDto';
import type { AccountHolderUpdateDto } from '../models/AccountHolderUpdateDto';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { ExtendedUserDtoEnvelope } from '../models/ExtendedUserDtoEnvelope';
import type { ExtendedUserDtoListEnvelope } from '../models/ExtendedUserDtoListEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { UserDtoEnvelope } from '../models/UserDtoEnvelope';
import type { UserDtoListEnvelope } from '../models/UserDtoListEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * @param xApiVersion
     * @returns UserDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SystemServiceUsers(
        xApiVersion?: string,
    ): CancelablePromise<UserDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SystemService/Users',
            headers: {
                'x-api-version': xApiVersion,
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
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2SystemServiceUsers(
        xApiVersion?: string,
        requestBody?: AccountHolderCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/SystemService/Users',
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
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2SystemServiceUsersCount(
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SystemService/Users/Count',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param xApiVersion
     * @returns ExtendedUserDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SystemServiceUsersExtended(
        xApiVersion?: string,
    ): CancelablePromise<ExtendedUserDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SystemService/Users/Extended',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2SystemServiceUsersExtendedCount(
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SystemService/Users/Extended/Count',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param userId
     * @param xApiVersion
     * @returns UserDtoEnvelope OK
     * @throws ApiError
     */
    public static getUserAsync(
        userId: string,
        xApiVersion?: string,
    ): CancelablePromise<UserDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SystemService/Users/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param userId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2SystemServiceUsers(
        userId: string,
        xApiVersion?: string,
        requestBody?: AccountHolderUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/SystemService/Users/{userId}',
            path: {
                'userId': userId,
            },
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
     * @param userId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2SystemServiceUsers(
        userId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SystemService/Users/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param userId
     * @param xApiVersion
     * @returns ExtendedUserDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SystemServiceUsersExtended1(
        userId: string,
        xApiVersion?: string,
    ): CancelablePromise<ExtendedUserDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SystemService/Users/{userId}/Extended',
            path: {
                'userId': userId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
