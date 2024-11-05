/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { InstructorProfileCreateDto } from '../models/InstructorProfileCreateDto';
import type { InstructorProfileDtoEnvelope } from '../models/InstructorProfileDtoEnvelope';
import type { InstructorProfileDtoListEnvelope } from '../models/InstructorProfileDtoListEnvelope';
import type { InstructorProfileUpdateDto } from '../models/InstructorProfileUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class InstructorProfilesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns InstructorProfileDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2LearningServiceInstructorProfiles(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<InstructorProfileDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2LearningServiceInstructorProfiles(
        xApiVersion?: string,
        requestBody?: InstructorProfileCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2LearningServiceInstructorProfiles1(
        tenantId: string,
        instructorProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<InstructorProfileDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static putApiV2LearningServiceInstructorProfiles(
        tenantId: string,
        instructorProfileId: string,
        xApiVersion?: string,
        requestBody?: InstructorProfileUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2LearningServiceInstructorProfiles(
        tenantId: string,
        instructorProfileId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
