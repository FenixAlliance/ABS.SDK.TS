/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CheckerService {
    /**
     * @param xApiVersion
     * @returns boolean OK
     * @throws ApiError
     */
    public static getApiV2AuthCheckerIsAuthenticated(
        xApiVersion?: string,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Auth/Checker/IsAuthenticated',
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
}
