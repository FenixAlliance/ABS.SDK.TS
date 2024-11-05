"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class MigrationsService {
    /**
     * @param xApiVersion
     * @returns PaymentResponse OK
     * @throws ApiError
     */
    static postApiV2GlobalSystemMigrate(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/Global/System/Migrate',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                500: `Internal Server Error`,
            },
        });
    }
}
exports.MigrationsService = MigrationsService;
