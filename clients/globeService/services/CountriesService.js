"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class CountriesService {
    /**
     * @param xApiVersion
     * @returns CountryDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2GlobeServiceCountries(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2GlobeServiceCountriesSearch(countryName, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2GlobeServiceCountries1(countryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2GlobeServiceCountriesStates(countryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2GlobeServiceCountriesStates1(countryStateId, countryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2GlobeServiceCountriesStatesCities(countryStateId, countryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2GlobeServiceCountriesTimezones(countryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2GlobeServiceCountriesCurrencies(countryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2GlobeServiceCountriesTopLevelDomains(countryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2GlobeServiceCountriesCallingCodes(countryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.CountriesService = CountriesService;
