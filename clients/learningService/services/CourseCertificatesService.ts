/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CourseCertificateTemplateCreateDto } from '../models/CourseCertificateTemplateCreateDto';
import type { CourseCertificateTemplateDtoEnvelope } from '../models/CourseCertificateTemplateDtoEnvelope';
import type { CourseCertificateTemplateDtoListEnvelope } from '../models/CourseCertificateTemplateDtoListEnvelope';
import type { CourseCompletionCertificateCreateDto } from '../models/CourseCompletionCertificateCreateDto';
import type { CourseCompletionCertificateDtoEnvelope } from '../models/CourseCompletionCertificateDtoEnvelope';
import type { CourseCompletionCertificateDtoListEnvelope } from '../models/CourseCompletionCertificateDtoListEnvelope';
import type { CourseCompletionCertificateUpdateDto } from '../models/CourseCompletionCertificateUpdateDto';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CourseCertificatesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns CourseCompletionCertificateDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2LearningServiceCourseCertificates(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<CourseCompletionCertificateDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2LearningServiceCourseCertificates(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: CourseCompletionCertificateCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2LearningServiceCourseCertificates1(
        tenantId: string,
        courseCertificateId: string,
        xApiVersion?: string,
    ): CancelablePromise<CourseCompletionCertificateDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static putApiV2LearningServiceCourseCertificates(
        tenantId: string,
        courseCertificateId: string,
        xApiVersion?: string,
        requestBody?: CourseCompletionCertificateUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2LearningServiceCourseCertificates(
        tenantId: string,
        courseCertificateId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2LearningServiceCourseCertificatesTemplate(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<CourseCertificateTemplateDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2LearningServiceCourseCertificatesTemplate(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: CourseCertificateTemplateCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2LearningServiceCourseCertificatesTemplate1(
        tenantId: string,
        courseCertificateTemplateId: string,
        xApiVersion?: string,
    ): CancelablePromise<CourseCertificateTemplateDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2LearningServiceCourseCertificatesTemplate(
        tenantId: string,
        courseCertificateTemplateId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
