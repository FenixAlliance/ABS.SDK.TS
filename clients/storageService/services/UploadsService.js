"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class UploadsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @param formData
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static postApiV2StorageServiceUploads(tenantId, xApiVersion, formData) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.UploadsService = UploadsService;
