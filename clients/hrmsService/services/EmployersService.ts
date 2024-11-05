/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmployerProfileCreateDto } from '../models/EmployerProfileCreateDto';
import type { EmployerProfileDtoEnvelope } from '../models/EmployerProfileDtoEnvelope';
import type { EmployerProfileDtoListEnvelope } from '../models/EmployerProfileDtoListEnvelope';
import type { EmployerProfileUpdateDto } from '../models/EmployerProfileUpdateDto';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EmployersService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns EmployerProfileDtoListEnvelope OK
     * @throws ApiError
     */
    public static getEmployersAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmployerProfileDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static createEmployerAsync(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: EmployerProfileCreateDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static getEmployersCountAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getEmployerByIdAsync(
        tenantId: string,
        employerId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmployerProfileDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static updateEmployerAsync(
        tenantId: string,
        employerId: string,
        xApiVersion?: string,
        requestBody?: EmployerProfileUpdateDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static deleteEmployerAsync(
        tenantId: string,
        employerId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
