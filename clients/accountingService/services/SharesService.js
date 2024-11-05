"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class SharesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns ShareClassDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceSharesShareClasses(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Shares/ShareClasses',
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
     * @returns ShareClassDtoEnvelope Created
     * @throws ApiError
     */
    static postApiV2AccountingServiceSharesShareClasses(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Shares/ShareClasses',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
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
    static getApiV2AccountingServiceSharesShareClassesCount(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Shares/ShareClasses/Count',
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
     * @param shareClassId
     * @param xApiVersion
     * @returns ShareClassDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceSharesShareClasses1(tenantId, shareClassId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Shares/ShareClasses/{shareClassId}',
            path: {
                'shareClassId': shareClassId,
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
     * @param shareClassId
     * @param xApiVersion
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static putApiV2AccountingServiceSharesShareClasses(tenantId, shareClassId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Shares/ShareClasses/{shareClassId}',
            path: {
                'shareClassId': shareClassId,
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
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param shareClassId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    static deleteApiV2AccountingServiceSharesShareClasses(tenantId, shareClassId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Shares/ShareClasses/{shareClassId}',
            path: {
                'shareClassId': shareClassId,
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
     * @returns ShareIssuanceDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceSharesIssuances(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Shares/Issuances',
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
     * @returns ShareIssuanceDtoEnvelope Created
     * @throws ApiError
     */
    static postApiV2AccountingServiceSharesIssuances(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Shares/Issuances',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
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
    static getApiV2AccountingServiceSharesIssuancesCount(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Shares/Issuances/Count',
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
     * @param shareIssuanceId
     * @param xApiVersion
     * @returns ShareIssuanceDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceSharesIssuances1(tenantId, shareIssuanceId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Shares/Issuances/{shareIssuanceId}',
            path: {
                'shareIssuanceId': shareIssuanceId,
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
     * @param shareIssuanceId
     * @param xApiVersion
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static putApiV2AccountingServiceSharesIssuances(tenantId, shareIssuanceId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Shares/Issuances/{shareIssuanceId}',
            path: {
                'shareIssuanceId': shareIssuanceId,
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
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param shareIssuanceId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    static deleteApiV2AccountingServiceSharesIssuances(tenantId, shareIssuanceId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Shares/Issuances/{shareIssuanceId}',
            path: {
                'shareIssuanceId': shareIssuanceId,
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
     * @returns ShareTransferDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceSharesTransfers(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Shares/Transfers',
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
     * @returns ShareTransferDtoEnvelope Created
     * @throws ApiError
     */
    static postApiV2AccountingServiceSharesTransfers(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Shares/Transfers',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
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
    static getApiV2AccountingServiceSharesTransfersCount(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Shares/Transfers/Count',
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
     * @param shareTransferId
     * @param xApiVersion
     * @returns ShareTransferDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceSharesTransfers1(tenantId, shareTransferId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Shares/Transfers/{shareTransferId}',
            path: {
                'shareTransferId': shareTransferId,
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
     * @param shareTransferId
     * @param xApiVersion
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static putApiV2AccountingServiceSharesTransfers(tenantId, shareTransferId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Shares/Transfers/{shareTransferId}',
            path: {
                'shareTransferId': shareTransferId,
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
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param shareTransferId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    static deleteApiV2AccountingServiceSharesTransfers(tenantId, shareTransferId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Shares/Transfers/{shareTransferId}',
            path: {
                'shareTransferId': shareTransferId,
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
     * @returns ShareTransferReasonDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceSharesTransferReasons(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Shares/TransferReasons',
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
     * @returns ShareTransferReasonDtoEnvelope Created
     * @throws ApiError
     */
    static postApiV2AccountingServiceSharesTransferReasons(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Shares/TransferReasons',
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
            },
        });
    }
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceSharesTransferReasonsCount(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Shares/TransferReasons/Count',
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
     * @param shareTransferReasonId
     * @param xApiVersion
     * @returns ShareTransferReasonDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceSharesTransferReasons1(tenantId, shareTransferReasonId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Shares/TransferReasons/{shareTransferReasonId}',
            path: {
                'shareTransferReasonId': shareTransferReasonId,
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
     * @param shareTransferReasonId
     * @param xApiVersion
     * @param requestBody
     * @returns ShareTransferReasonDtoEnvelope OK
     * @throws ApiError
     */
    static putApiV2AccountingServiceSharesTransferReasons(tenantId, shareTransferReasonId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Shares/TransferReasons/{shareTransferReasonId}',
            path: {
                'shareTransferReasonId': shareTransferReasonId,
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
            },
        });
    }
    /**
     * @param tenantId
     * @param shareTransferReasonId
     * @param xApiVersion
     * @returns ShareTransferReasonDtoEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2AccountingServiceSharesTransferReasons(tenantId, shareTransferReasonId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Shares/TransferReasons/{shareTransferReasonId}',
            path: {
                'shareTransferReasonId': shareTransferReasonId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
exports.SharesService = SharesService;
