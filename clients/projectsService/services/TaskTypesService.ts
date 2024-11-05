/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskTypeCreateDto } from '../models/TaskTypeCreateDto';
import type { TaskTypeDto } from '../models/TaskTypeDto';
import type { TaskTypeUpdateDto } from '../models/TaskTypeUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TaskTypesService {
    /**
     * @param taskTypeId
     * @param tenantId
     * @param xApiVersion
     * @returns TaskTypeDto OK
     * @throws ApiError
     */
    public static getApiV2ProjectsServiceTaskTypes(
        taskTypeId: string,
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TaskTypeDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ProjectsService/TaskTypes/{taskTypeId}',
            path: {
                'taskTypeId': taskTypeId,
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
     * @param taskTypeId
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns TaskTypeDto OK
     * @throws ApiError
     */
    public static putApiV2ProjectsServiceTaskTypes(
        taskTypeId: string,
        tenantId: string,
        xApiVersion?: string,
        requestBody?: TaskTypeUpdateDto,
    ): CancelablePromise<TaskTypeDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/ProjectsService/TaskTypes/{taskTypeId}',
            path: {
                'taskTypeId': taskTypeId,
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
     * @param taskTypeId
     * @param tenantId
     * @param xApiVersion
     * @returns TaskTypeDto OK
     * @throws ApiError
     */
    public static deleteApiV2ProjectsServiceTaskTypes(
        taskTypeId: string,
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TaskTypeDto> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/ProjectsService/TaskTypes/{taskTypeId}',
            path: {
                'taskTypeId': taskTypeId,
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
     * @param xApiVersion
     * @param requestBody
     * @returns TaskTypeDto OK
     * @throws ApiError
     */
    public static postApiV2ProjectsServiceTaskTypes(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: TaskTypeCreateDto,
    ): CancelablePromise<TaskTypeDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/ProjectsService/TaskTypes',
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
}
