/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MarginsService {
    /**
     * @param marginId
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    public static getApiV2SalesServiceMarginsDetails(
        marginId: string,
        xApiVersion?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SalesService/Margins/{marginId}/Details',
            path: {
                'marginId': marginId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
}
