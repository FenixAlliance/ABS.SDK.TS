"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstructorProfilesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class InstructorProfilesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns InstructorProfileDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2LearningServiceInstructorProfiles(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/LearningService/InstructorProfiles',
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
    static postApiV2LearningServiceInstructorProfiles(xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/LearningService/InstructorProfiles',
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
     * @param instructorProfileId
     * @param xApiVersion
     * @returns InstructorProfileDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2LearningServiceInstructorProfiles1(tenantId, instructorProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/LearningService/InstructorProfiles/{InstructorProfileId}',
            path: {
                'instructorProfileId': instructorProfileId,
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
     * @param instructorProfileId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2LearningServiceInstructorProfiles(tenantId, instructorProfileId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/LearningService/InstructorProfiles/{InstructorProfileId}',
            path: {
                'instructorProfileId': instructorProfileId,
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
     * @param instructorProfileId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2LearningServiceInstructorProfiles(tenantId, instructorProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/LearningService/InstructorProfiles/{InstructorProfileId}',
            path: {
                'instructorProfileId': instructorProfileId,
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
exports.InstructorProfilesService = InstructorProfilesService;
