/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AntiforgeryService {
    /**
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    public static getApiV2SystemServiceAntiforgeryGetAndStoreTokens(
        xApiVersion?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SystemService/Antiforgery/GetAndStoreTokens',
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
    /**
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    public static getApiV2SystemServiceAntiforgeryIsRequestValid(
        xApiVersion?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SystemService/Antiforgery/IsRequestValid',
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
}
