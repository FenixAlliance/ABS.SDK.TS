/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaymentResponse } from '../models/PaymentResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MigrationsService {
    /**
     * @param xApiVersion
     * @returns PaymentResponse OK
     * @throws ApiError
     */
    public static postApiV2GlobalSystemMigrate(
        xApiVersion?: string,
    ): CancelablePromise<PaymentResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/Global/System/Migrate',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                500: `Internal Server Error`,
            },
        });
    }
}
