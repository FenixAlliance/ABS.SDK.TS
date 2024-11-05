"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostCentresService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class CostCentresService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns CostCentreDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceCostCentres(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/CostCentres',
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
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceCostCentresCount(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/CostCentres/Count',
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
     * @param costCentreId
     * @param tenantId
     * @param xApiVersion
     * @returns CostCentreDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceCostCentres1(costCentreId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/CostCentres/{costCentreId}',
            path: {
                'costCentreId': costCentreId,
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
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns CostCentreDtoEnvelope Created
     * @throws ApiError
     */
    static postApiV2AccountingServiceCostCentresCostCentres(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/CostCentres/CostCentres',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param costCentreId
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns CostCentreDtoEnvelope OK
     * @throws ApiError
     */
    static putApiV2AccountingServiceCostCentresCostCentres(costCentreId, tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/CostCentres/CostCentres/{costCentreId}',
            path: {
                'costCentreId': costCentreId,
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
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param costCentreId
     * @param tenantId
     * @param xApiVersion
     * @returns CostCentreDtoEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2AccountingServiceCostCentresCostCentres(costCentreId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/CostCentres/CostCentres/{costCentreId}',
            path: {
                'costCentreId': costCentreId,
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
     * @param tenantId
     * @param xApiVersion
     * @returns CostCentreGroupDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceCostCentresCostCentreGroups(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/CostCentres/CostCentreGroups',
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
     * @param requestBody
     * @returns CostCentreGroupDtoEnvelope Created
     * @throws ApiError
     */
    static postApiV2AccountingServiceCostCentresCostCentreGroups(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/CostCentres/CostCentreGroups',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceCostCentresCostCentreGroupsCount(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/CostCentres/CostCentreGroups/Count',
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
     * @param costCentreGroupId
     * @param tenantId
     * @param xApiVersion
     * @returns CostCentreGroupDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceCostCentresCostCentreGroups1(costCentreGroupId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/CostCentres/CostCentreGroups/{costCentreGroupId}',
            path: {
                'costCentreGroupId': costCentreGroupId,
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
     * @param costCentreGroupId
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns CostCentreGroupDtoEnvelope OK
     * @throws ApiError
     */
    static putApiV2AccountingServiceCostCentresCostCentreGroups(costCentreGroupId, tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/CostCentres/CostCentreGroups/{costCentreGroupId}',
            path: {
                'costCentreGroupId': costCentreGroupId,
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
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param costCentreGroupId
     * @param tenantId
     * @param xApiVersion
     * @returns CostCentreGroupDtoEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2AccountingServiceCostCentresCostCentreGroups(costCentreGroupId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/CostCentres/CostCentreGroups/{costCentreGroupId}',
            path: {
                'costCentreGroupId': costCentreGroupId,
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
     * @param tenantId
     * @param xApiVersion
     * @returns CostCentreBudgetDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceCostCentresCostCentreBudgets(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/CostCentres/CostCentreBudgets',
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
     * @param requestBody
     * @returns CostCentreBudgetDtoEnvelope Created
     * @throws ApiError
     */
    static postApiV2AccountingServiceCostCentresCostCentreBudgets(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/CostCentres/CostCentreBudgets',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param costCentreBudgetId
     * @param tenantId
     * @param xApiVersion
     * @returns CostCentreBudgetDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceCostCentresCostCentreBudgets1(costCentreBudgetId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/CostCentres/CostCentreBudgets/{costCentreBudgetId}',
            path: {
                'costCentreBudgetId': costCentreBudgetId,
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
     * @param costCentreBudgetId
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns CostCentreBudgetDtoEnvelope OK
     * @throws ApiError
     */
    static putApiV2AccountingServiceCostCentresCostCentreBudgets(costCentreBudgetId, tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/CostCentres/CostCentreBudgets/{costCentreBudgetId}',
            path: {
                'costCentreBudgetId': costCentreBudgetId,
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
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param costCentreBudgetId
     * @param tenantId
     * @param xApiVersion
     * @returns CostCentreBudgetDtoEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2AccountingServiceCostCentresCostCentreBudgets(costCentreBudgetId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/CostCentres/CostCentreBudgets/{costCentreBudgetId}',
            path: {
                'costCentreBudgetId': costCentreBudgetId,
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
exports.CostCentresService = CostCentresService;
