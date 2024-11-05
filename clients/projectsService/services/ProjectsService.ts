/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { ProjectCreateDto } from '../models/ProjectCreateDto';
import type { ProjectDtoEnvelope } from '../models/ProjectDtoEnvelope';
import type { ProjectDtoListEnvelope } from '../models/ProjectDtoListEnvelope';
import type { ProjectPeriodCreateDto } from '../models/ProjectPeriodCreateDto';
import type { ProjectPeriodUpdateDto } from '../models/ProjectPeriodUpdateDto';
import type { ProjectTaskCreateDto } from '../models/ProjectTaskCreateDto';
import type { ProjectTaskDtoListEnvelope } from '../models/ProjectTaskDtoListEnvelope';
import type { ProjectTaskUpdateDto } from '../models/ProjectTaskUpdateDto';
import type { ProjectTimeLogDtoListEnvelope } from '../models/ProjectTimeLogDtoListEnvelope';
import type { ProjectUpdateDto } from '../models/ProjectUpdateDto';
import type { TaskCategoryDtoListEnvelope } from '../models/TaskCategoryDtoListEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns ProjectDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ProjectsServiceProjects(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ProjectDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ProjectsService/Projects',
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
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static postApiV2ProjectsServiceProjects(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: ProjectCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/ProjectsService/Projects',
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
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2ProjectsServiceProjectsCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ProjectsService/Projects/Count',
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
     * @param projectId
     * @param tenantId
     * @param xApiVersion
     * @returns ProjectDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ProjectsServiceProjects1(
        projectId: string,
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ProjectDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ProjectsService/Projects/{projectId}',
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
     * @param projectId
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2ProjectsServiceProjects(
        projectId: string,
        tenantId: string,
        xApiVersion?: string,
        requestBody?: ProjectUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/ProjectsService/Projects/{projectId}',
            path: {
                'projectId': projectId,
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
     * @param projectId
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2ProjectsServiceProjects(
        projectId: string,
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/ProjectsService/Projects/{projectId}',
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
     * @param projectId
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ProjectsServiceProjectsPeriods(
        projectId: string,
        tenantId: string,
        xApiVersion?: string,
        requestBody?: ProjectPeriodCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ProjectsService/Projects/{projectId}/Periods',
            path: {
                'projectId': projectId,
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
     * @param projectId
     * @param projectPeriodId
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2ProjectsServiceProjectsPeriods(
        projectId: string,
        projectPeriodId: string,
        tenantId: string,
        xApiVersion?: string,
        requestBody?: ProjectPeriodUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/ProjectsService/Projects/{projectId}/Periods/{projectPeriodId}',
            path: {
                'projectId': projectId,
                'projectPeriodId': projectPeriodId,
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
     * @param projectId
     * @param projectPeriodId
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2ProjectsServiceProjectsPeriods(
        projectId: string,
        projectPeriodId: string,
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/ProjectsService/Projects/{projectId}/Periods/{projectPeriodId}',
            path: {
                'projectId': projectId,
                'projectPeriodId': projectPeriodId,
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
     * @param projectId
     * @param tenantId
     * @param xApiVersion
     * @returns ProjectTimeLogDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ProjectsServiceProjectsTimeLogs(
        projectId: string,
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ProjectTimeLogDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ProjectsService/Projects/{projectId}/TimeLogs',
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
     * @param projectId
     * @param tenantId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2ProjectsServiceProjectsTimeLogsCount(
        projectId: string,
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ProjectsService/Projects/{projectId}/TimeLogs/Count',
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
     * @param projectId
     * @param tenantId
     * @param xApiVersion
     * @returns ProjectTaskDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ProjectsServiceProjectsTasks(
        projectId: string,
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ProjectTaskDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ProjectsService/Projects/{projectId}/Tasks',
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
     * @param projectId
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static postApiV2ProjectsServiceProjectsTasks(
        projectId: string,
        tenantId: string,
        xApiVersion?: string,
        requestBody?: ProjectTaskCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/ProjectsService/Projects/{projectId}/Tasks',
            path: {
                'projectId': projectId,
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
     * @param projectId
     * @param tenantId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2ProjectsServiceProjectsTasksCount(
        projectId: string,
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ProjectsService/Projects/{projectId}/Tasks/Count',
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
     * @param projectId
     * @param projectTaskId
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2ProjectsServiceProjectsTasks(
        projectId: string,
        projectTaskId: string,
        tenantId: string,
        xApiVersion?: string,
        requestBody?: ProjectTaskUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/ProjectsService/Projects/{projectId}/Tasks/{projectTaskId}',
            path: {
                'projectId': projectId,
                'projectTaskId': projectTaskId,
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
     * @param projectId
     * @param projectTaskId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2ProjectsServiceProjectsTasks(
        tenantId: string,
        projectId: string,
        projectTaskId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/ProjectsService/Projects/{projectId}/Tasks/{projectTaskId}',
            path: {
                'projectId': projectId,
                'projectTaskId': projectTaskId,
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
     * @param projectId
     * @param tenantId
     * @param xApiVersion
     * @returns TaskCategoryDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ProjectsServiceProjectsTaskCategories(
        projectId: string,
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TaskCategoryDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ProjectsService/Projects/{projectId}/TaskCategories',
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
     * @param projectId
     * @param tenantId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2ProjectsServiceProjectsTaskCategoriesCount(
        projectId: string,
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ProjectsService/Projects/{projectId}/TaskCategories/Count',
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
}
