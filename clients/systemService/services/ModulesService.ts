/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ModuleListEnvelope } from '../models/ModuleListEnvelope';
import type { StudioModuleListEnvelope } from '../models/StudioModuleListEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ModulesService {
    /**
     * Get all modules available on this suite server instance.
     * @param tenantId
     * @param xApiVersion
     * @returns StudioModuleListEnvelope OK
     * @throws ApiError
     */
    public static getAllModules(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<StudioModuleListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/StudioService/Modules',
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
     * Get all modules available to a tenant user.
     * @param tenantId
     * @param xApiVersion
     * @returns ModuleListEnvelope OK
     * @throws ApiError
     */
    public static getAvailableModules(
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<ModuleListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/StudioService/Modules/Data',
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
