"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlobsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class BlobsService {
    /**
     * @param tenantId
     * @param folderPath
     * @param browseFilter
     * @param filePrefix
     * @param recurse
     * @param maxResults
     * @param includeAttributes
     * @param xApiVersion
     * @returns BlobEnvelope OK
     * @throws ApiError
     */
    static getBlobsAsync(tenantId, folderPath, browseFilter, filePrefix, recurse, maxResults, includeAttributes, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/StorageService/Blobs',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'folderPath': folderPath,
                'browseFilter': browseFilter,
                'filePrefix': filePrefix,
                'recurse': recurse,
                'maxResults': maxResults,
                'includeAttributes': includeAttributes,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param filePath
     * @param xApiVersion
     * @returns BlobEnvelope OK
     * @throws ApiError
     */
    static getBlobAsync(tenantId, filePath, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/StorageService/Blobs/Single',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'filePath': filePath,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
exports.BlobsService = BlobsService;
