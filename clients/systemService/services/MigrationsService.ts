/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StringListEnvelope } from '../models/StringListEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MigrationsService {
    /**
     * @param pending
     * @param xApiVersion
     * @returns StringListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SystemServiceMigrations(
        pending?: boolean,
        xApiVersion?: string,
    ): CancelablePromise<StringListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SystemService/Migrations',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'pending': pending,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param xApiVersion
     * @returns StringListEnvelope OK
     * @throws ApiError
     */
    public static postApiV2SystemServiceMigrationsMigrate(
        xApiVersion?: string,
    ): CancelablePromise<StringListEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/SystemService/Migrations/Migrate',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
