"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountListsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class DiscountListsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns DiscountListDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2PricingServiceDiscountLists(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/PricingService/DiscountLists',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
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
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2PricingServiceDiscountLists(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/PricingService/DiscountLists',
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
    static getApiV2PricingServiceDiscountListsCount(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/PricingService/DiscountLists/Count',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param discountListId
     * @param xApiVersion
     * @returns DiscountListDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2PricingServiceDiscountLists1(tenantId, discountListId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/PricingService/DiscountLists/{discountListId}',
            path: {
                'discountListId': discountListId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param discountListId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2PricingServiceDiscountLists(tenantId, discountListId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/PricingService/DiscountLists/{discountListId}',
            path: {
                'discountListId': discountListId,
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
     * @param discountListId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    static deleteApiV2PricingServiceDiscountLists(tenantId, discountListId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/PricingService/DiscountLists/{discountListId}',
            path: {
                'discountListId': discountListId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param discountListId
     * @param xApiVersion
     * @returns DiscountDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2PricingServiceDiscountListsDiscounts(tenantId, discountListId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/PricingService/DiscountLists/{discountListId}/Discounts',
            path: {
                'discountListId': discountListId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param discountListId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2PricingServiceDiscountListsDiscounts(tenantId, discountListId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/PricingService/DiscountLists/{discountListId}/Discounts',
            path: {
                'discountListId': discountListId,
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
     * @param discountListId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2PricingServiceDiscountListsDiscountsCount(tenantId, discountListId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/PricingService/DiscountLists/{discountListId}/Discounts/Count',
            path: {
                'discountListId': discountListId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param discountListId
     * @param discountListEntryId
     * @param xApiVersion
     * @returns DiscountDtoEnvelope OK
     * @throws ApiError
     */
    static getDiscountListEntry(tenantId, discountListId, discountListEntryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/PricingService/DiscountLists/{discountListId}/Discounts/{discountListEntryId}',
            path: {
                'discountListId': discountListId,
                'discountListEntryId': discountListEntryId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param discountListId
     * @param discountListEntryId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2PricingServiceDiscountListsDiscounts(tenantId, discountListId, discountListEntryId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/PricingService/DiscountLists/{discountListId}/Discounts/{discountListEntryId}',
            path: {
                'discountListId': discountListId,
                'discountListEntryId': discountListEntryId,
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
     * @param discountListId
     * @param discountListEntryId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    static deleteApiV2PricingServiceDiscountListsDiscounts(tenantId, discountListId, discountListEntryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/PricingService/DiscountLists/{discountListId}/Discounts/{discountListEntryId}',
            path: {
                'discountListId': discountListId,
                'discountListEntryId': discountListEntryId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
exports.DiscountListsService = DiscountListsService;
