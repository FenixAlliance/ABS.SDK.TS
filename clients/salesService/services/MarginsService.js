"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarginsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class MarginsService {
    /**
     * @param marginId
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    static getApiV2SalesServiceMarginsDetails(marginId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SalesService/Margins/{marginId}/Details',
            path: {
                'marginId': marginId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
}
exports.MarginsService = MarginsService;
