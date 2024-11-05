/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderDtoEnvelope } from '../models/OrderDtoEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TrackingPixelsService {
    /**
     * @param pixelId
     * @param xApiVersion
     * @returns OrderDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2MarketingServiceTrackingPixels(
        pixelId: string,
        xApiVersion?: string,
    ): CancelablePromise<OrderDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/MarketingService/TrackingPixels/{pixelId}',
            path: {
                'pixelId': pixelId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
}
