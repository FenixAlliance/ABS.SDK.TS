/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CityDtoListEnvelope } from '../models/CityDtoListEnvelope';
import type { CountryCallingCodeDtoListEnvelope } from '../models/CountryCallingCodeDtoListEnvelope';
import type { CountryDtoEnvelope } from '../models/CountryDtoEnvelope';
import type { CountryDtoListEnvelope } from '../models/CountryDtoListEnvelope';
import type { CountryStateDtoEnvelope } from '../models/CountryStateDtoEnvelope';
import type { CountryStateDtoListEnvelope } from '../models/CountryStateDtoListEnvelope';
import type { CountryTopLevelDomainDtoListEnvelope } from '../models/CountryTopLevelDomainDtoListEnvelope';
import type { CurrencyDtoListEnvelope } from '../models/CurrencyDtoListEnvelope';
import type { TimezoneDtoListEnvelope } from '../models/TimezoneDtoListEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CountriesService {
    /**
     * @param xApiVersion
     * @returns CountryDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2GlobeServiceCountries(
        xApiVersion?: string,
    ): CancelablePromise<CountryDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/GlobeService/Countries',
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
     * @param countryName
     * @param xApiVersion
     * @returns CountryDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2GlobeServiceCountriesSearch(
        countryName: string,
        xApiVersion?: string,
    ): CancelablePromise<CountryDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/GlobeService/Countries/Search',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'countryName': countryName,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param countryId
     * @param xApiVersion
     * @returns CountryDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2GlobeServiceCountries1(
        countryId: string,
        xApiVersion?: string,
    ): CancelablePromise<CountryDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/GlobeService/Countries/{countryId}',
            path: {
                'countryId': countryId,
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
    /**
     * @param countryId
     * @param xApiVersion
     * @returns CountryStateDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2GlobeServiceCountriesStates(
        countryId: string,
        xApiVersion?: string,
    ): CancelablePromise<CountryStateDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/GlobeService/Countries/{countryId}/States',
            path: {
                'countryId': countryId,
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
    /**
     * @param countryStateId
     * @param countryId
     * @param xApiVersion
     * @returns CountryStateDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2GlobeServiceCountriesStates1(
        countryStateId: string,
        countryId: string,
        xApiVersion?: string,
    ): CancelablePromise<CountryStateDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/GlobeService/Countries/{countryId}/States/{countryStateId}',
            path: {
                'countryStateId': countryStateId,
                'countryId': countryId,
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
    /**
     * @param countryStateId
     * @param countryId
     * @param xApiVersion
     * @returns CityDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2GlobeServiceCountriesStatesCities(
        countryStateId: string,
        countryId: string,
        xApiVersion?: string,
    ): CancelablePromise<CityDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/GlobeService/Countries/{countryId}/States/{countryStateId}/Cities',
            path: {
                'countryStateId': countryStateId,
                'countryId': countryId,
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
    /**
     * @param countryId
     * @param xApiVersion
     * @returns TimezoneDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2GlobeServiceCountriesTimezones(
        countryId: string,
        xApiVersion?: string,
    ): CancelablePromise<TimezoneDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/GlobeService/Countries/{countryId}/Timezones',
            path: {
                'countryId': countryId,
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
    /**
     * @param countryId
     * @param xApiVersion
     * @returns CurrencyDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2GlobeServiceCountriesCurrencies(
        countryId: string,
        xApiVersion?: string,
    ): CancelablePromise<CurrencyDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/GlobeService/Countries/{countryId}/Currencies',
            path: {
                'countryId': countryId,
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
    /**
     * @param countryId
     * @param xApiVersion
     * @returns CountryTopLevelDomainDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2GlobeServiceCountriesTopLevelDomains(
        countryId: string,
        xApiVersion?: string,
    ): CancelablePromise<CountryTopLevelDomainDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/GlobeService/Countries/{countryId}/TopLevelDomains',
            path: {
                'countryId': countryId,
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
    /**
     * @param countryId
     * @param xApiVersion
     * @returns CountryCallingCodeDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2GlobeServiceCountriesCallingCodes(
        countryId: string,
        xApiVersion?: string,
    ): CancelablePromise<CountryCallingCodeDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/GlobeService/Countries/{countryId}/CallingCodes',
            path: {
                'countryId': countryId,
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
