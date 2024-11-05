/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CourseDtoEnvelope } from '../models/CourseDtoEnvelope';
import type { CourseDtoListEnvelope } from '../models/CourseDtoListEnvelope';
import type { CourseUpdateDto } from '../models/CourseUpdateDto';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CoursesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns CourseDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2LearningServiceCourses(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<CourseDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/LearningService/Courses',
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
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2LearningServiceCoursesCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/LearningService/Courses/Count',
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
     * @param courseId
     * @param xApiVersion
     * @returns CourseDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2LearningServiceCourses1(
        tenantId: string,
        courseId: string,
        xApiVersion?: string,
    ): CancelablePromise<CourseDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/LearningService/Courses/{courseId}',
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
     * @param courseId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2LearningServiceCourses(
        tenantId: string,
        courseId: string,
        xApiVersion?: string,
        requestBody?: CourseUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/LearningService/Courses/{courseId}',
            path: {
                'courseId': courseId,
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
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2LearningServiceCourses(
        tenantId: string,
        courseId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/LearningService/Courses/{courseId}',
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
}
