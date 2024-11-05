"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCategoriesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class TaskCategoriesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns TaskCategoryDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2ProjectsServiceTaskCategories(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2ProjectsServiceTaskCategories(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2ProjectsServiceTaskCategories1(taskCategoryId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2ProjectsServiceTaskCategories(taskCategoryId, tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteApiV2ProjectsServiceTaskCategories(taskCategoryId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2ProjectsServiceTaskCategoriesTypes(taskCategoryId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.TaskCategoriesService = TaskCategoriesService;
