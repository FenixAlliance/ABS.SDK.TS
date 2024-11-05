/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AverageDtoEnvelope } from '../models/AverageDtoEnvelope';
import type { CountDtoEnvelope } from '../models/CountDtoEnvelope';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { StudentProfileCreateDto } from '../models/StudentProfileCreateDto';
import type { StudentProfileDtoEnvelope } from '../models/StudentProfileDtoEnvelope';
import type { StudentProfileDtoListEnvelope } from '../models/StudentProfileDtoListEnvelope';
import type { StudentProfileUpdateDto } from '../models/StudentProfileUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StudentProfilesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns StudentProfileDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2LearningServiceStudentProfiles(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<StudentProfileDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2LearningServiceStudentProfiles(
        xApiVersion?: string,
        requestBody?: StudentProfileCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2LearningServiceStudentProfiles1(
        tenantId: string,
        studentProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<StudentProfileDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2LearningServiceStudentProfiles(
        tenantId: string,
        studentProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static putApiV2LearningServiceStudentProfiles(
        tenantId: string,
        studentProfileId: string,
        xApiVersion?: string,
        requestBody?: StudentProfileUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2LearningServiceStudentProfilesAverage(
        tenantId: string,
        studentProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<AverageDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2LearningServiceStudentProfilesHoursCompleted(
        tenantId: string,
        studentProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<CountDtoEnvelope> {
        return __request(OpenAPI, {
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
