/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserInfoService {
    /**
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    public static getConnectUserinfo(
        xApiVersion?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/connect/userinfo',
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
    public static postConnectUserinfo(
        xApiVersion?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/connect/userinfo',
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
}
