/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { ItemAttachmentCreateDto } from '../models/ItemAttachmentCreateDto';
import type { ItemAttachmentDtoEnvelope } from '../models/ItemAttachmentDtoEnvelope';
import type { ItemAttachmentDtoListEnvelope } from '../models/ItemAttachmentDtoListEnvelope';
import type { ItemAttachmentUpdateDto } from '../models/ItemAttachmentUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ItemAttachmentsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns ItemAttachmentDtoEnvelope Created
     * @throws ApiError
     */
    public static postApiV2CatalogServiceItemAttachments(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: ItemAttachmentCreateDto,
    ): CancelablePromise<ItemAttachmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/ItemAttachments',
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
     * @param xApiVersion
     * @returns ItemAttachmentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItemAttachments(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemAttachmentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemAttachments',
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
     * @param itemAttachmentId
     * @param xApiVersion
     * @returns ItemAttachmentDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItemAttachments1(
        itemAttachmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemAttachmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemAttachments/{itemAttachmentId}',
            path: {
                'itemAttachmentId': itemAttachmentId,
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
     * @param itemAttachmentId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2CatalogServiceItemAttachments(
        tenantId: string,
        itemAttachmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/ItemAttachments/{itemAttachmentId}',
            path: {
                'itemAttachmentId': itemAttachmentId,
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
     * @param itemAttachmentId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2CatalogServiceItemAttachments(
        tenantId: string,
        itemAttachmentId: string,
        xApiVersion?: string,
        requestBody?: ItemAttachmentUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CatalogService/ItemAttachments/{itemAttachmentId}',
            path: {
                'itemAttachmentId': itemAttachmentId,
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
}
