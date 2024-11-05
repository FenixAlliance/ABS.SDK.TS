"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployersService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class EmployersService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns EmployerProfileDtoListEnvelope OK
     * @throws ApiError
     */
    static getEmployersAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/HrmsService/Employers',
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
    static createEmployerAsync(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/HrmsService/Employers',
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
    static getEmployersCountAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/HrmsService/Employers/Count',
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
     * @param employerId
     * @param xApiVersion
     * @returns EmployerProfileDtoEnvelope OK
     * @throws ApiError
     */
    static getEmployerByIdAsync(tenantId, employerId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/HrmsService/Employers/{employerId}',
            path: {
                'employerId': employerId,
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
     * @param employerId
     * @param xApiVersion
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static updateEmployerAsync(tenantId, employerId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/HrmsService/Employers/{employerId}',
            path: {
                'employerId': employerId,
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
     * @param employerId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    static deleteEmployerAsync(tenantId, employerId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/HrmsService/Employers/{employerId}',
            path: {
                'employerId': employerId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
exports.EmployersService = EmployersService;
