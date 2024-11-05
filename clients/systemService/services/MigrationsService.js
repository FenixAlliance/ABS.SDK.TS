"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class MigrationsService {
    /**
     * @param pending
     * @param xApiVersion
     * @returns StringListEnvelope OK
     * @throws ApiError
     */
    static getApiV2SystemServiceMigrations(pending, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SystemService/Migrations',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'pending': pending,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param xApiVersion
     * @returns StringListEnvelope OK
     * @throws ApiError
     */
    static postApiV2SystemServiceMigrationsMigrate(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/SystemService/Migrations/Migrate',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
exports.MigrationsService = MigrationsService;
