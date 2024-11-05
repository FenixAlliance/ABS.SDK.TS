"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoliciesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class PoliciesService {
    /**
     * @param itemId
     * @param xApiVersion
     * @returns ItemReturnPolicyDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServicePoliciesItemReturnPolicies(itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Policies/ItemReturnPolicies',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'itemId': itemId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param itemId
     * @param xApiVersion
     * @returns ItemTaxPolicyDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServicePoliciesItemTaxPolicies(itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Policies/ItemTaxPolicies',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'itemId': itemId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param itemId
     * @param xApiVersion
     * @returns ItemWarrantyPolicyDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServicePoliciesItemWarrantyPolicies(itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Policies/ItemWarrantyPolicies',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'itemId': itemId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param itemId
     * @param xApiVersion
     * @returns ItemShippingPolicyDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServicePoliciesItemShippingPolicies(itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Policies/ItemShippingPolicies',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'itemId': itemId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
exports.PoliciesService = PoliciesService;
