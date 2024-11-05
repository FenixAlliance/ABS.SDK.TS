"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectTimeLogsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ProjectTimeLogsService {
    /**
     * @param tenantId
     * @param projectPeriodId
     * @param xApiVersion
     * @returns ProjectTimeLogDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2TimeTrackerServiceProjectTimeLogs(tenantId, projectPeriodId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2TimeTrackerServiceProjectTimeLogs(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2TimeTrackerServiceProjectTimeLogsByResponsibleContact(contactId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2TimeTrackerServiceProjectTimeLogsCreatedByContact(contactId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2TimeTrackerServiceProjectTimeLogsForProject(projectId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2TimeTrackerServiceProjectTimeLogs1(timeLogId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2TimeTrackerServiceProjectTimeLogs(timeLogId, tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteApiV2TimeTrackerServiceProjectTimeLogs(tenantId, timeLogId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.ProjectTimeLogsService = ProjectTimeLogsService;
