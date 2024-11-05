"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseEnrollmentsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class CourseEnrollmentsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns CourseEnrollmentDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2LearningServiceCourseEnrollments(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/LearningService/CourseEnrollments',
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
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static postApiV2LearningServiceCourseEnrollments(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/LearningService/CourseEnrollments',
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
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2LearningServiceCourseEnrollmentsCount(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/LearningService/CourseEnrollments/Count',
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
     * @param courseEnrollmentId
     * @param xApiVersion
     * @returns CourseEnrollmentDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2LearningServiceCourseEnrollments1(tenantId, courseEnrollmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/LearningService/CourseEnrollments/{courseEnrollmentId}',
            path: {
                'courseEnrollmentId': courseEnrollmentId,
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
     * @param courseEnrollmentId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2LearningServiceCourseEnrollments(tenantId, courseEnrollmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/LearningService/CourseEnrollments/{courseEnrollmentId}',
            path: {
                'courseEnrollmentId': courseEnrollmentId,
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
     * @param courseEnrollmentId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2LearningServiceCourseEnrollments(tenantId, courseEnrollmentId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/LearningService/CourseEnrollments/{courseEnrollmentId}',
            path: {
                'courseEnrollmentId': courseEnrollmentId,
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
     * @param courseId
     * @param xApiVersion
     * @returns CourseEnrollmentDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2LearningServiceCourseEnrollmentsCourse(tenantId, courseId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/LearningService/CourseEnrollments/Course/{courseId}',
            path: {
                'courseId': courseId,
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
     * @returns CourseEnrollmentDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2LearningServiceCourseEnrollmentsStudent(tenantId, studentProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/LearningService/CourseEnrollments/Student/{studentProfileId}',
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
exports.CourseEnrollmentsService = CourseEnrollmentsService;
