"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingRulesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class PricingRulesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns PricingRuleDtoEnvelope Created
     * @throws ApiError
     */
    static postApiV2CatalogServicePricingRules(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/PricingRules',
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
     * @returns PricingRuleDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServicePricingRules(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/PricingRules',
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
     * @param pricingRuleId
     * @param xApiVersion
     * @returns PricingRuleDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServicePricingRules1(pricingRuleId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/PricingRules/{pricingRuleId}',
            path: {
                'pricingRuleId': pricingRuleId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param pricingRuleId
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    static deleteApiV2CatalogServicePricingRules(tenantId, pricingRuleId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/PricingRules/{pricingRuleId}',
            path: {
                'pricingRuleId': pricingRuleId,
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
     * @param pricingRuleId
     * @param xApiVersion
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    static putApiV2CatalogServicePricingRulesUpdate(tenantId, pricingRuleId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CatalogService/PricingRules/Update',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'pricingRuleId': pricingRuleId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
exports.PricingRulesService = PricingRulesService;
