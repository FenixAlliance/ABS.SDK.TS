"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadzenEditorService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class RadzenEditorService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @param formData
     * @returns any OK
     * @throws ApiError
     */
    static postApiV2StorageServiceRadzenEditorUploadsSingle(tenantId, xApiVersion, formData) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2StorageServiceRadzenEditorUploadsImage(tenantId, xApiVersion, formData) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2StorageServiceRadzenEditorUploadsMultiple(tenantId, xApiVersion, formData) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2StorageServiceRadzenEditorUploads(id, tenantId, xApiVersion, formData) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2StorageServiceRadzenEditorUploadsSpecific(tenantId, xApiVersion, formData) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.RadzenEditorService = RadzenEditorService;
