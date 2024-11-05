/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskCategoryCreateDto } from '../models/TaskCategoryCreateDto';
import type { TaskCategoryDto } from '../models/TaskCategoryDto';
import type { TaskCategoryDtoListEnvelope } from '../models/TaskCategoryDtoListEnvelope';
import type { TaskCategoryUpdateDto } from '../models/TaskCategoryUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TaskCategoriesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns TaskCategoryDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ProjectsServiceTaskCategories(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TaskCategoryDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ProjectsService/TaskCategories',
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
     * @returns TaskCategoryDto OK
     * @throws ApiError
     */
    public static postApiV2ProjectsServiceTaskCategories(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: TaskCategoryCreateDto,
    ): CancelablePromise<TaskCategoryDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/ProjectsService/TaskCategories',
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
     * @param taskCategoryId
     * @param tenantId
     * @param xApiVersion
     * @returns TaskCategoryDto OK
     * @throws ApiError
     */
    public static getApiV2ProjectsServiceTaskCategories1(
        taskCategoryId: string,
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TaskCategoryDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ProjectsService/TaskCategories/{taskCategoryId}',
            path: {
                'taskCategoryId': taskCategoryId,
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
     * @param taskCategoryId
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns TaskCategoryDto OK
     * @throws ApiError
     */
    public static putApiV2ProjectsServiceTaskCategories(
        taskCategoryId: string,
        tenantId: string,
        xApiVersion?: string,
        requestBody?: TaskCategoryUpdateDto,
    ): CancelablePromise<TaskCategoryDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/ProjectsService/TaskCategories/{taskCategoryId}',
            path: {
                'taskCategoryId': taskCategoryId,
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
     * @param taskCategoryId
     * @param tenantId
     * @param xApiVersion
     * @returns TaskCategoryDto OK
     * @throws ApiError
     */
    public static deleteApiV2ProjectsServiceTaskCategories(
        taskCategoryId: string,
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TaskCategoryDto> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/ProjectsService/TaskCategories/{taskCategoryId}',
            path: {
                'taskCategoryId': taskCategoryId,
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
     * @param taskCategoryId
     * @param tenantId
     * @param xApiVersion
     * @returns TaskCategoryDto OK
     * @throws ApiError
     */
    public static getApiV2ProjectsServiceTaskCategoriesTypes(
        taskCategoryId: string,
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TaskCategoryDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ProjectsService/TaskCategories/{taskCategoryId}/Types',
            path: {
                'taskCategoryId': taskCategoryId,
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
