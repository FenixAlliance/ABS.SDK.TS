"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealUnitsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class DealUnitsService {
    /**
     * @param tenantId
     * @returns DealUnitDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2DealsServiceDealUnits(tenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnits',
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
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static postApiV2DealsServiceDealUnits(tenantId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/DealsService/DealUnits',
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
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2DealsServiceDealUnitsCount(tenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnits/Count',
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
     * @returns ExtendedDealUnitDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2DealsServiceDealUnitsExtended(tenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnits/Extended',
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
     * @param dealUnitId
     * @returns DealUnitDtoEnvelope OK
     * @throws ApiError
     */
    static getDealUnitAsync(tenantId, dealUnitId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnits/{dealUnitId}',
            path: {
                'dealUnitId': dealUnitId,
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
     * @param dealUnitId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2DealsServiceDealUnits(tenantId, dealUnitId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/DealsService/DealUnits/{dealUnitId}',
            path: {
                'dealUnitId': dealUnitId,
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
     * @param dealUnitId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2DealsServiceDealUnits(tenantId, dealUnitId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/DealsService/DealUnits/{dealUnitId}',
            path: {
                'dealUnitId': dealUnitId,
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
     * @param dealUnitId
     * @returns ExtendedDealUnitDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2DealsServiceDealUnitsExtended1(tenantId, dealUnitId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnits/{dealUnitId}/Extended',
            path: {
                'dealUnitId': dealUnitId,
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
     * @param dealUnitId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2DealsServiceDealUnitsCalculate(tenantId, dealUnitId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/DealsService/DealUnits/{dealUnitId}/Calculate',
            path: {
                'dealUnitId': dealUnitId,
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
     * @param dealUnitId
     * @param itemId
     * @returns DealUnitLineDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2DealsServiceDealUnitsLines(tenantId, dealUnitId, itemId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnits/{dealUnitId}/Lines',
            path: {
                'dealUnitId': dealUnitId,
            },
            query: {
                'tenantId': tenantId,
                'itemId': itemId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param dealUnitId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static postApiV2DealsServiceDealUnitsLines(tenantId, dealUnitId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/DealsService/DealUnits/{dealUnitId}/Lines',
            path: {
                'dealUnitId': dealUnitId,
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
     * @param dealUnitId
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2DealsServiceDealUnitsLinesCount(tenantId, dealUnitId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/Count',
            path: {
                'dealUnitId': dealUnitId,
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
     * @param dealUnitId
     * @param dealUnitLineId
     * @returns DealUnitLineDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2DealsServiceDealUnitsLines1(tenantId, dealUnitId, dealUnitLineId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/{dealUnitLineId}',
            path: {
                'dealUnitId': dealUnitId,
                'dealUnitLineId': dealUnitLineId,
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
     * @param dealUnitId
     * @param dealUnitLineId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2DealsServiceDealUnitsLines(tenantId, dealUnitId, dealUnitLineId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/{dealUnitLineId}',
            path: {
                'dealUnitId': dealUnitId,
                'dealUnitLineId': dealUnitLineId,
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
     * @param dealUnitId
     * @param dealUnitLineId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2DealsServiceDealUnitsLines(tenantId, dealUnitId, dealUnitLineId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/{dealUnitLineId}',
            path: {
                'dealUnitId': dealUnitId,
                'dealUnitLineId': dealUnitLineId,
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
     * @param dealUnitId
     * @param dealUnitLineId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2DealsServiceDealUnitsLinesCalculate(tenantId, dealUnitId, dealUnitLineId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/{dealUnitLineId}/Calculate',
            path: {
                'dealUnitId': dealUnitId,
                'dealUnitLineId': dealUnitLineId,
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
exports.DealUnitsService = DealUnitsService;
