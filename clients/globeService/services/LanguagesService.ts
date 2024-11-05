/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountryLanguageDtoEnvelope } from '../models/CountryLanguageDtoEnvelope';
import type { CountryLanguageDtoListEnvelope } from '../models/CountryLanguageDtoListEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LanguagesService {
    /**
     * @param xApiVersion
     * @returns CountryLanguageDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2GlobeServiceLanguages(
        xApiVersion?: string,
    ): CancelablePromise<CountryLanguageDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/GlobeService/Languages',
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
     * @param languageId
     * @param xApiVersion
     * @returns CountryLanguageDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2GlobeServiceLanguages1(
        languageId: string,
        xApiVersion?: string,
    ): CancelablePromise<CountryLanguageDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/GlobeService/Languages/{languageId}',
            path: {
                'languageId': languageId,
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
