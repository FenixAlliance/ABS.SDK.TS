/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlobEnvelope } from '../models/BlobEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BlobsService {
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
    public static getBlobsAsync(
        tenantId?: string,
        folderPath?: string,
        browseFilter?: string,
        filePrefix?: string,
        recurse?: boolean,
        maxResults?: number,
        includeAttributes?: boolean,
        xApiVersion?: string,
    ): CancelablePromise<BlobEnvelope> {
        return __request(OpenAPI, {
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
    public static getBlobAsync(
        tenantId?: string,
        filePath?: string,
        xApiVersion?: string,
    ): CancelablePromise<BlobEnvelope> {
        return __request(OpenAPI, {
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
