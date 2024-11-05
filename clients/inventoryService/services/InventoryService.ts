/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class InventoryService {
    /**
     * @param stockItemId
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    public static getApiV2InventoryServiceInventoryDetails(
        stockItemId: string,
        xApiVersion?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/InventoryService/Inventory/{stockItemId}/Details',
            path: {
                'stockItemId': stockItemId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
}
