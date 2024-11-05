"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesLiteraturesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class SalesLiteraturesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns SalesLiteratureDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2DealsServiceSalesLiteratures(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/SalesLiteratures',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static postApiV2DealsServiceSalesLiteratures(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/DealsService/SalesLiteratures',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param salesLiteratureId
     * @param xApiVersion
     * @returns SalesLiteratureDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2DealsServiceSalesLiteratures1(salesLiteratureId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/SalesLiteratures/{salesLiteratureId}',
            path: {
                'salesLiteratureId': salesLiteratureId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param salesLiteratureId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2DealsServiceSalesLiteratures(tenantId, salesLiteratureId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/DealsService/SalesLiteratures/{salesLiteratureId}',
            path: {
                'salesLiteratureId': salesLiteratureId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param salesLiteratureId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2DealsServiceSalesLiteratures(tenantId, salesLiteratureId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/DealsService/SalesLiteratures/{salesLiteratureId}',
            path: {
                'salesLiteratureId': salesLiteratureId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns ExtendedSalesLiteratureDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2DealsServiceSalesLiteraturesExtended(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/SalesLiteratures/Extended',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
exports.SalesLiteraturesService = SalesLiteraturesService;
