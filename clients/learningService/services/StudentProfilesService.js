"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentProfilesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class StudentProfilesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns StudentProfileDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2LearningServiceStudentProfiles(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/LearningService/StudentProfiles',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static postApiV2LearningServiceStudentProfiles(xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/LearningService/StudentProfiles',
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param studentProfileId
     * @param xApiVersion
     * @returns StudentProfileDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2LearningServiceStudentProfiles1(tenantId, studentProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/LearningService/StudentProfiles/{studentProfileId}',
            path: {
                'studentProfileId': studentProfileId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param studentProfileId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2LearningServiceStudentProfiles(tenantId, studentProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/LearningService/StudentProfiles/{studentProfileId}',
            path: {
                'studentProfileId': studentProfileId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param studentProfileId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2LearningServiceStudentProfiles(tenantId, studentProfileId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/LearningService/StudentProfiles/{StudentProfileId}',
            path: {
                'studentProfileId': studentProfileId,
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
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param studentProfileId
     * @param xApiVersion
     * @returns AverageDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2LearningServiceStudentProfilesAverage(tenantId, studentProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/LearningService/StudentProfiles/{studentProfileId}/Average',
            path: {
                'studentProfileId': studentProfileId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param studentProfileId
     * @param xApiVersion
     * @returns CountDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2LearningServiceStudentProfilesHoursCompleted(tenantId, studentProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/LearningService/StudentProfiles/{studentProfileId}/HoursCompleted',
            path: {
                'studentProfileId': studentProfileId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
exports.StudentProfilesService = StudentProfilesService;
