"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class FilesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns FileUploadDtoEnvelope OK
     * @throws ApiError
     */
    static getFilesAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static createFileAsync(tenantId, xApiVersion, formData) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getFileAsync(fileId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static updateFileAsync(fileId, tenantId, xApiVersion, formData) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteFileAsync(fileId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static downloadFileAsync(fileId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.FilesService = FilesService;
