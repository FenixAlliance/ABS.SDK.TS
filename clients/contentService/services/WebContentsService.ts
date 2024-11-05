/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Operation } from '../models/Operation';
import type { WebContentCreateDto } from '../models/WebContentCreateDto';
import type { WebContentDtoEnvelope } from '../models/WebContentDtoEnvelope';
import type { WebContentDtoListEnvelope } from '../models/WebContentDtoListEnvelope';
import type { WebContentUpdateDto } from '../models/WebContentUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WebContentsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns WebContentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ContentServiceWebContents(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<WebContentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/WebContents',
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
    public static postApiV2ContentServiceWebContents(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: WebContentCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/ContentService/WebContents',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
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
     * @param webContentId
     * @param xApiVersion
     * @returns WebContentDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ContentServiceWebContents1(
        webContentId: string,
        xApiVersion?: string,
    ): CancelablePromise<WebContentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ContentService/WebContents/{webContentId}',
            path: {
                'webContentId': webContentId,
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
     * @param tenantId
     * @param webContentId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2ContentServiceWebContents(
        tenantId: string,
        webContentId: string,
        xApiVersion?: string,
        requestBody?: WebContentUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/ContentService/WebContents/{webContentId}',
            path: {
                'webContentId': webContentId,
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
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param webContentId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static patchApiV2ContentServiceWebContents(
        tenantId: string,
        webContentId: string,
        xApiVersion?: string,
        requestBody?: Array<Operation>,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/ContentService/WebContents/{webContentId}',
            path: {
                'webContentId': webContentId,
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
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param webContentId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2ContentServiceWebContents(
        tenantId: string,
        webContentId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/ContentService/WebContents/{webContentId}',
            path: {
                'webContentId': webContentId,
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
}
