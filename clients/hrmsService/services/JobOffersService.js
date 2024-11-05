"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobOffersService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class JobOffersService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns JobOfferDtoListEnvelope OK
     * @throws ApiError
     */
    static getJobOffersAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/HrmsService/JobOffers',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static createJobOfferAsync(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/HrmsService/JobOffers',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getJobOffersCountAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/HrmsService/JobOffers/Count',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param jobOfferId
     * @param xApiVersion
     * @returns JobOfferDtoEnvelope OK
     * @throws ApiError
     */
    static getJobOfferByIdAsync(tenantId, jobOfferId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/HrmsService/JobOffers/{jobOfferId}',
            path: {
                'jobOfferId': jobOfferId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param jobOfferId
     * @param xApiVersion
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static updateJobOfferAsync(tenantId, jobOfferId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/HrmsService/JobOffers/{jobOfferId}',
            path: {
                'jobOfferId': jobOfferId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param jobOfferId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    static deleteJobOfferAsync(tenantId, jobOfferId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/HrmsService/JobOffers/{jobOfferId}',
            path: {
                'jobOfferId': jobOfferId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
exports.JobOffersService = JobOffersService;
