"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseCertificatesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class CourseCertificatesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns CourseCompletionCertificateDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2LearningServiceCourseCertificates(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/LearningService/CourseCertificates',
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
    static postApiV2LearningServiceCourseCertificates(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/LearningService/CourseCertificates',
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
     * @param courseCertificateId
     * @param xApiVersion
     * @returns CourseCompletionCertificateDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2LearningServiceCourseCertificates1(tenantId, courseCertificateId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/LearningService/CourseCertificates/{CourseCertificateId}',
            path: {
                'courseCertificateId': courseCertificateId,
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
     * @param courseCertificateId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2LearningServiceCourseCertificates(tenantId, courseCertificateId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/LearningService/CourseCertificates/{CourseCertificateId}',
            path: {
                'courseCertificateId': courseCertificateId,
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
     * @param courseCertificateId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2LearningServiceCourseCertificates(tenantId, courseCertificateId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/LearningService/CourseCertificates/{CourseCertificateId}',
            path: {
                'courseCertificateId': courseCertificateId,
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
     * @param xApiVersion
     * @returns CourseCertificateTemplateDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2LearningServiceCourseCertificatesTemplate(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/LearningService/CourseCertificates/Template',
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
    static postApiV2LearningServiceCourseCertificatesTemplate(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/LearningService/CourseCertificates/Template',
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
     * @param courseCertificateTemplateId
     * @param xApiVersion
     * @returns CourseCertificateTemplateDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2LearningServiceCourseCertificatesTemplate1(tenantId, courseCertificateTemplateId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/LearningService/CourseCertificates/Template/{CourseCertificateTemplateId}',
            path: {
                'courseCertificateTemplateId': courseCertificateTemplateId,
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
     * @param courseCertificateTemplateId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2LearningServiceCourseCertificatesTemplate(tenantId, courseCertificateTemplateId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/LearningService/CourseCertificates/Template/{CourseCertificateTemplateId}',
            path: {
                'courseCertificateTemplateId': courseCertificateTemplateId,
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
exports.CourseCertificatesService = CourseCertificatesService;
