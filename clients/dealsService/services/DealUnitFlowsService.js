"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealUnitFlowsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class DealUnitFlowsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns DealUnitFlowDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2DealsServiceDealUnitFlows(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnitFlows',
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
    static postApiV2DealsServiceDealUnitFlows(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/DealsService/DealUnitFlows',
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
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2DealsServiceDealUnitFlowsCount(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnitFlows/Count',
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
     * @param dealUnitFlowId
     * @param xApiVersion
     * @returns DealUnitFlowDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2DealsServiceDealUnitFlows1(tenantId, dealUnitFlowId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}',
            path: {
                'dealUnitFlowId': dealUnitFlowId,
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
     * @param dealUnitFlowId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2DealsServiceDealUnitFlows(tenantId, dealUnitFlowId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}',
            path: {
                'dealUnitFlowId': dealUnitFlowId,
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
     * @param dealUnitFlowId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2DealsServiceDealUnitFlows(tenantId, dealUnitFlowId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}',
            path: {
                'dealUnitFlowId': dealUnitFlowId,
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
     * @param dealUnitFlowId
     * @param xApiVersion
     * @returns DealUnitFlowStageDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2DealsServiceDealUnitFlowsStages(tenantId, dealUnitFlowId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages',
            path: {
                'dealUnitFlowId': dealUnitFlowId,
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
     * @param dealUnitFlowId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static postApiV2DealsServiceDealUnitFlowsStages(tenantId, dealUnitFlowId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages',
            path: {
                'dealUnitFlowId': dealUnitFlowId,
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
     * @param dealUnitFlowId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2DealsServiceDealUnitFlowsStagesCount(tenantId, dealUnitFlowId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages/Count',
            path: {
                'dealUnitFlowId': dealUnitFlowId,
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
     * @param dealUnitFlowId
     * @param dealUnitFlowStageId
     * @param xApiVersion
     * @returns DealUnitFlowStageDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2DealsServiceDealUnitFlowsStages1(tenantId, dealUnitFlowId, dealUnitFlowStageId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages/{dealUnitFlowStageId}',
            path: {
                'dealUnitFlowId': dealUnitFlowId,
                'dealUnitFlowStageId': dealUnitFlowStageId,
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
     * @param dealUnitFlowId
     * @param dealUnitFlowStageId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2DealsServiceDealUnitFlowsStages(tenantId, dealUnitFlowId, dealUnitFlowStageId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages/{dealUnitFlowStageId}',
            path: {
                'dealUnitFlowId': dealUnitFlowId,
                'dealUnitFlowStageId': dealUnitFlowStageId,
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
     * @param dealUnitFlowId
     * @param dealUnitFlowStageId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2DealsServiceDealUnitFlowsStages(tenantId, dealUnitFlowId, dealUnitFlowStageId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages/{dealUnitFlowStageId}',
            path: {
                'dealUnitFlowId': dealUnitFlowId,
                'dealUnitFlowStageId': dealUnitFlowStageId,
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
}
exports.DealUnitFlowsService = DealUnitFlowsService;
