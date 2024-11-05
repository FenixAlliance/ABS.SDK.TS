/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectTimeLogCreateDto } from '../models/ProjectTimeLogCreateDto';
import type { ProjectTimeLogDtoEnvelope } from '../models/ProjectTimeLogDtoEnvelope';
import type { ProjectTimeLogDtoListEnvelope } from '../models/ProjectTimeLogDtoListEnvelope';
import type { ProjectTimeLogUpdateDto } from '../models/ProjectTimeLogUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectTimeLogsService {
    /**
     * @param tenantId
     * @param projectPeriodId
     * @param xApiVersion
     * @returns ProjectTimeLogDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2TimeTrackerServiceProjectTimeLogs(
        tenantId: string,
        projectPeriodId: string,
        xApiVersion?: string,
    ): CancelablePromise<ProjectTimeLogDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/TimeTrackerService/ProjectTimeLogs',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'projectPeriodId': projectPeriodId,
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
     * @returns any OK
     * @throws ApiError
     */
    public static postApiV2TimeTrackerServiceProjectTimeLogs(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: ProjectTimeLogCreateDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/TimeTrackerService/ProjectTimeLogs',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param contactId
     * @param tenantId
     * @param xApiVersion
     * @returns ProjectTimeLogDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2TimeTrackerServiceProjectTimeLogsByResponsibleContact(
        contactId: string,
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ProjectTimeLogDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/TimeTrackerService/ProjectTimeLogs/ByResponsibleContact',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'contactId': contactId,
                'tenantId': tenantId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param contactId
     * @param tenantId
     * @param xApiVersion
     * @returns ProjectTimeLogDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2TimeTrackerServiceProjectTimeLogsCreatedByContact(
        contactId: string,
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ProjectTimeLogDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/TimeTrackerService/ProjectTimeLogs/CreatedByContact',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'contactId': contactId,
                'tenantId': tenantId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param projectId
     * @param tenantId
     * @param xApiVersion
     * @returns ProjectTimeLogDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2TimeTrackerServiceProjectTimeLogsForProject(
        projectId: string,
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ProjectTimeLogDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/TimeTrackerService/ProjectTimeLogs/ForProject/{projectId}',
            path: {
                'projectId': projectId,
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
     * @param timeLogId
     * @param tenantId
     * @param xApiVersion
     * @returns ProjectTimeLogDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2TimeTrackerServiceProjectTimeLogs1(
        timeLogId: string,
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ProjectTimeLogDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/TimeTrackerService/ProjectTimeLogs/{timeLogId}',
            path: {
                'timeLogId': timeLogId,
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
     * @param timeLogId
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV2TimeTrackerServiceProjectTimeLogs(
        timeLogId: string,
        tenantId: string,
        xApiVersion?: string,
        requestBody?: ProjectTimeLogUpdateDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/TimeTrackerService/ProjectTimeLogs/{timeLogId}',
            path: {
                'timeLogId': timeLogId,
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
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param timeLogId
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV2TimeTrackerServiceProjectTimeLogs(
        tenantId: string,
        timeLogId: string,
        xApiVersion?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/TimeTrackerService/ProjectTimeLogs/{timeLogId}',
            path: {
                'timeLogId': timeLogId,
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
