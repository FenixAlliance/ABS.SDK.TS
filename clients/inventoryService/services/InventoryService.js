"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class InventoryService {
    /**
     * @param stockItemId
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    static getApiV2InventoryServiceInventoryDetails(stockItemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/InventoryService/Inventory/{stockItemId}/Details',
            path: {
                'stockItemId': stockItemId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
}
exports.InventoryService = InventoryService;
