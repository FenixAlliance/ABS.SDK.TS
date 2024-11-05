"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ProjectsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns ProjectDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2ProjectsServiceProjects(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2ProjectsServiceProjects(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2ProjectsServiceProjectsCount(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2ProjectsServiceProjects1(projectId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2ProjectsServiceProjects(projectId, tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteApiV2ProjectsServiceProjects(projectId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2ProjectsServiceProjectsPeriods(projectId, tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2ProjectsServiceProjectsPeriods(projectId, projectPeriodId, tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteApiV2ProjectsServiceProjectsPeriods(projectId, projectPeriodId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2ProjectsServiceProjectsTimeLogs(projectId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2ProjectsServiceProjectsTimeLogsCount(projectId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2ProjectsServiceProjectsTasks(projectId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2ProjectsServiceProjectsTasks(projectId, tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2ProjectsServiceProjectsTasksCount(projectId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2ProjectsServiceProjectsTasks(projectId, projectTaskId, tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteApiV2ProjectsServiceProjectsTasks(tenantId, projectId, projectTaskId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2ProjectsServiceProjectsTaskCategories(projectId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2ProjectsServiceProjectsTaskCategoriesCount(projectId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.ProjectsService = ProjectsService;
