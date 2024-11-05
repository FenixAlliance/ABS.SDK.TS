/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemQuestionCreateDto } from '../models/ItemQuestionCreateDto';
import type { ItemQuestionDtoEnvelope } from '../models/ItemQuestionDtoEnvelope';
import type { ItemQuestionDtoListEnvelope } from '../models/ItemQuestionDtoListEnvelope';
import type { ItemQuestionUpdateDto } from '../models/ItemQuestionUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ItemQuestionsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns ItemQuestionDtoEnvelope Created
     * @throws ApiError
     */
    public static postApiV2CatalogServiceItemQuestions(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: ItemQuestionCreateDto,
    ): CancelablePromise<ItemQuestionDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/ItemQuestions',
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
     * @returns ItemQuestionDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItemQuestions(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemQuestionDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemQuestions',
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
     * @param itemQuestionId
     * @param xApiVersion
     * @returns ItemQuestionDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItemQuestions1(
        itemQuestionId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemQuestionDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/ItemQuestions/{itemQuestionId}',
            path: {
                'itemQuestionId': itemQuestionId,
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
     * @param itemQuestionId
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV2CatalogServiceItemQuestions(
        tenantId: string,
        itemQuestionId: string,
        xApiVersion?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/ItemQuestions/{itemQuestionId}',
            path: {
                'itemQuestionId': itemQuestionId,
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
     * @param itemQuestionId
     * @param xApiVersion
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV2CatalogServiceItemQuestions(
        tenantId: string,
        itemQuestionId: string,
        xApiVersion?: string,
        requestBody?: ItemQuestionUpdateDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CatalogService/ItemQuestions/{itemQuestionId}',
            path: {
                'itemQuestionId': itemQuestionId,
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
