/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmployeeProfileCreateDto } from '../models/EmployeeProfileCreateDto';
import type { EmployeeProfileDtoEnvelope } from '../models/EmployeeProfileDtoEnvelope';
import type { EmployeeProfileDtoListEnvelope } from '../models/EmployeeProfileDtoListEnvelope';
import type { EmployeeProfileUpdateDto } from '../models/EmployeeProfileUpdateDto';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EmployeesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns EmployeeProfileDtoListEnvelope OK
     * @throws ApiError
     */
    public static getEmployeesAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmployeeProfileDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static createEmployeeAsync(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: EmployeeProfileCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getEmployeesCountAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getEmployeeByIdAsync(
        tenantId: string,
        employeeId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmployeeProfileDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static updateEmployeeAsync(
        tenantId: string,
        employeeId: string,
        xApiVersion?: string,
        requestBody?: EmployeeProfileUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteEmployeeAsync(
        tenantId: string,
        employeeId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
