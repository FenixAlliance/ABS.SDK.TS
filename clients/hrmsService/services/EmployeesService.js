"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class EmployeesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns EmployeeProfileDtoListEnvelope OK
     * @throws ApiError
     */
    static getEmployeesAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/HrmsService/Employees',
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
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static createEmployeeAsync(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/HrmsService/Employees',
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
    static getEmployeesCountAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/HrmsService/Employees/Count',
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
     * @param employeeId
     * @param xApiVersion
     * @returns EmployeeProfileDtoEnvelope OK
     * @throws ApiError
     */
    static getEmployeeByIdAsync(tenantId, employeeId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/HrmsService/Employees/{employeeId}',
            path: {
                'employeeId': employeeId,
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
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param employeeId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static updateEmployeeAsync(tenantId, employeeId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/HrmsService/Employees/{employeeId}',
            path: {
                'employeeId': employeeId,
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
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param employeeId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    static deleteEmployeeAsync(tenantId, employeeId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/HrmsService/Employees/{employeeId}',
            path: {
                'employeeId': employeeId,
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
                404: `Not Found`,
            },
        });
    }
}
exports.EmployeesService = EmployeesService;
