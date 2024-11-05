/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddProductToCompareRequest } from '../models/AddProductToCompareRequest';
import type { ItemCartRecordDto } from '../models/ItemCartRecordDto';
import type { ItemToCompareCartRecordDto } from '../models/ItemToCompareCartRecordDto';
import type { ItemToCompareCartRecordDtoEnvelope } from '../models/ItemToCompareCartRecordDtoEnvelope';
import type { ItemToCompareCartRecordDtoListEnvelope } from '../models/ItemToCompareCartRecordDtoListEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompareService {
    /**
     * @param cartId
     * @param xApiVersion
     * @returns ItemToCompareCartRecordDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CartServiceCompare(
        cartId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemToCompareCartRecordDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Compare/{cartId}',
            path: {
                'cartId': cartId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @param recordId
     * @param xApiVersion
     * @returns ItemToCompareCartRecordDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CartServiceCompareDetails(
        recordId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemToCompareCartRecordDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Compare/{recordId}/Details',
            path: {
                'recordId': recordId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param xApiVersion
     * @param requestBody
     * @returns ItemCartRecordDto OK
     * @throws ApiError
     */
    public static postApiV2CartServiceCompare(
        xApiVersion?: string,
        requestBody?: AddProductToCompareRequest,
    ): CancelablePromise<ItemCartRecordDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CartService/Compare',
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param recordId
     * @param xApiVersion
     * @returns ItemToCompareCartRecordDto OK
     * @throws ApiError
     */
    public static deleteApiV2CartServiceCompare(
        recordId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemToCompareCartRecordDto> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CartService/Compare/{recordId}',
            path: {
                'recordId': recordId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
