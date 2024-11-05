/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { FileUploadCreateDto } from '../models/FileUploadCreateDto';
import type { FileUploadDtoEnvelope } from '../models/FileUploadDtoEnvelope';
import type { FileUploadUpdateDto } from '../models/FileUploadUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FilesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns FileUploadDtoEnvelope OK
     * @throws ApiError
     */
    public static getFilesAsync(
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<FileUploadDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/StorageService/Files',
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
     * @param tenantId
     * @param xApiVersion
     * @param formData
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static createFileAsync(
        tenantId?: string,
        xApiVersion?: string,
        formData?: FileUploadCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/StorageService/Files',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                409: `Conflict`,
                422: `Unprocessable Content`,
            },
        });
    }
    /**
     * @param fileId
     * @param tenantId
     * @param xApiVersion
     * @returns FileUploadDtoEnvelope OK
     * @throws ApiError
     */
    public static getFileAsync(
        fileId: string,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<FileUploadDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/StorageService/Files/{fileId}',
            path: {
                'fileId': fileId,
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
     * @param fileId
     * @param tenantId
     * @param xApiVersion
     * @param formData
     * @returns FileUploadDtoEnvelope OK
     * @throws ApiError
     */
    public static updateFileAsync(
        fileId: string,
        tenantId?: string,
        xApiVersion?: string,
        formData?: FileUploadUpdateDto,
    ): CancelablePromise<FileUploadDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/StorageService/Files/{fileId}',
            path: {
                'fileId': fileId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                409: `Conflict`,
                422: `Unprocessable Content`,
            },
        });
    }
    /**
     * @param fileId
     * @param tenantId
     * @param xApiVersion
     * @returns FileUploadDtoEnvelope OK
     * @throws ApiError
     */
    public static deleteFileAsync(
        fileId: string,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<FileUploadDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/StorageService/Files/{fileId}',
            path: {
                'fileId': fileId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                409: `Conflict`,
                422: `Unprocessable Content`,
            },
        });
    }
    /**
     * @param fileId
     * @param tenantId
     * @param xApiVersion
     * @returns binary OK
     * @throws ApiError
     */
    public static downloadFileAsync(
        fileId: string,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/StorageService/Files/{fileId}/Raw',
            path: {
                'fileId': fileId,
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
