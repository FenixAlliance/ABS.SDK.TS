"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskTypesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class TaskTypesService {
    /**
     * @param taskTypeId
     * @param tenantId
     * @param xApiVersion
     * @returns TaskTypeDto OK
     * @throws ApiError
     */
    static getApiV2ProjectsServiceTaskTypes(taskTypeId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2ProjectsServiceTaskTypes(taskTypeId, tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteApiV2ProjectsServiceTaskTypes(taskTypeId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2ProjectsServiceTaskTypes(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.TaskTypesService = TaskTypesService;
