/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RadzenEditorService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @param formData
     * @returns any OK
     * @throws ApiError
     */
    public static postApiV2StorageServiceRadzenEditorUploadsSingle(
        tenantId?: string,
        xApiVersion?: string,
        formData?: {
            file?: Blob;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/StorageService/RadzenEditor/Uploads/Single',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * @param tenantId
     * @param xApiVersion
     * @param formData
     * @returns any OK
     * @throws ApiError
     */
    public static postApiV2StorageServiceRadzenEditorUploadsImage(
        tenantId?: string,
        xApiVersion?: string,
        formData?: {
            file?: Blob;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/StorageService/RadzenEditor/Uploads/Image',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * @param tenantId
     * @param xApiVersion
     * @param formData
     * @returns any OK
     * @throws ApiError
     */
    public static postApiV2StorageServiceRadzenEditorUploadsMultiple(
        tenantId?: string,
        xApiVersion?: string,
        formData?: {
            files?: Array<Blob>;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/StorageService/RadzenEditor/Uploads/Multiple',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * @param id
     * @param tenantId
     * @param xApiVersion
     * @param formData
     * @returns any OK
     * @throws ApiError
     */
    public static postApiV2StorageServiceRadzenEditorUploads(
        id: number,
        tenantId?: string,
        xApiVersion?: string,
        formData?: {
            files?: Array<Blob>;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/StorageService/RadzenEditor/Uploads/{id}',
            path: {
                'id': id,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * @param tenantId
     * @param xApiVersion
     * @param formData
     * @returns any OK
     * @throws ApiError
     */
    public static postApiV2StorageServiceRadzenEditorUploadsSpecific(
        tenantId?: string,
        xApiVersion?: string,
        formData?: {
            file?: Blob;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/StorageService/RadzenEditor/Uploads/Specific',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
}
