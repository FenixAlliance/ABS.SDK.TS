/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountGroupCreateDto } from '../models/AccountGroupCreateDto';
import type { AccountGroupDtoEnvelope } from '../models/AccountGroupDtoEnvelope';
import type { AccountGroupDtoListEnvelope } from '../models/AccountGroupDtoListEnvelope';
import type { AccountGroupUpdateDto } from '../models/AccountGroupUpdateDto';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AccountGroupsService {
    /**
     * @param tenantId
     * @returns AccountGroupDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceAccountGroups(
        tenantId: string,
    ): CancelablePromise<AccountGroupDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/AccountGroups',
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
     * @returns AccountGroupDtoEnvelope Created
     * @throws ApiError
     */
    public static postApiV2AccountingServiceAccountGroups(
        tenantId: string,
        requestBody?: AccountGroupCreateDto,
    ): CancelablePromise<AccountGroupDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/AccountGroups',
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
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceAccountGroupsCount(
        tenantId?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/AccountGroups/Count',
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
     * @param id
     * @returns AccountGroupDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceAccountGroups1(
        id: string,
    ): CancelablePromise<AccountGroupDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/AccountGroups/{id}',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns AccountGroupDtoEnvelope OK
     * @throws ApiError
     */
    public static putApiV2AccountingServiceAccountGroups(
        id: string,
        requestBody?: AccountGroupUpdateDto,
    ): CancelablePromise<AccountGroupDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/AccountGroups/{id}',
            query: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteApiV2AccountingServiceAccountGroups(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/AccountGroups/{id}',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
