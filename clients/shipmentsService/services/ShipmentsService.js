"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ShipmentsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns ShipmentDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2ShipmentsServiceShipments(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/ShipmentsService/Shipments',
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
exports.ShipmentsService = ShipmentsService;
