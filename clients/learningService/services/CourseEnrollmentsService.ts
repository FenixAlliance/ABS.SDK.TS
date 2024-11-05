/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CourseEnrollmentCreateDto } from '../models/CourseEnrollmentCreateDto';
import type { CourseEnrollmentDtoEnvelope } from '../models/CourseEnrollmentDtoEnvelope';
import type { CourseEnrollmentDtoListEnvelope } from '../models/CourseEnrollmentDtoListEnvelope';
import type { CourseEnrollmentUpdateDto } from '../models/CourseEnrollmentUpdateDto';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CourseEnrollmentsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns CourseEnrollmentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2LearningServiceCourseEnrollments(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<CourseEnrollmentDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2LearningServiceCourseEnrollments(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: CourseEnrollmentCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2LearningServiceCourseEnrollmentsCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getApiV2LearningServiceCourseEnrollments1(
        tenantId: string,
        courseEnrollmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<CourseEnrollmentDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2LearningServiceCourseEnrollments(
        tenantId: string,
        courseEnrollmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static putApiV2LearningServiceCourseEnrollments(
        tenantId: string,
        courseEnrollmentId: string,
        xApiVersion?: string,
        requestBody?: CourseEnrollmentUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2LearningServiceCourseEnrollmentsCourse(
        tenantId: string,
        courseId: string,
        xApiVersion?: string,
    ): CancelablePromise<CourseEnrollmentDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2LearningServiceCourseEnrollmentsStudent(
        tenantId: string,
        studentProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<CourseEnrollmentDtoListEnvelope> {
        return __request(OpenAPI, {
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
