/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UploadsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @param formData
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static postApiV2StorageServiceUploads(
        tenantId?: string,
        xApiVersion?: string,
        formData?: {
            notes?: string;
            title?: string;
            author?: string;
            isFolder?: boolean;
            fileName?: string;
            abstract?: string;
            keyWords?: string;
            validResponse?: boolean;
            parentFileUploadId?: string;
            filePath?: string;
            file?: Blob;
            iD?: string;
            timestamp?: string;
        },
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/StorageService/Uploads',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
