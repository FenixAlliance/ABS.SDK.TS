"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ModulesService {
    /**
     * Get all modules available on this suite server instance.
     * @param tenantId
     * @param xApiVersion
     * @returns StudioModuleListEnvelope OK
     * @throws ApiError
     */
    static getAllModules(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getAvailableModules(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.ModulesService = ModulesService;
