/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TimezoneDtoEnvelope } from '../models/TimezoneDtoEnvelope';
import type { TimezoneDtoListEnvelope } from '../models/TimezoneDtoListEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TimezonesService {
    /**
     * @param xApiVersion
     * @returns TimezoneDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2GlobeServiceTimezones(
        xApiVersion?: string,
    ): CancelablePromise<TimezoneDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/GlobeService/Timezones',
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
     * @param timeZoneId
     * @param xApiVersion
     * @returns TimezoneDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2GlobeServiceTimezones1(
        timeZoneId: string,
        xApiVersion?: string,
    ): CancelablePromise<TimezoneDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/GlobeService/Timezones/{timeZoneId}',
            path: {
                'timeZoneId': timeZoneId,
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
}
