/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PricingRuleCreateDto } from '../models/PricingRuleCreateDto';
import type { PricingRuleDtoEnvelope } from '../models/PricingRuleDtoEnvelope';
import type { PricingRuleDtoListEnvelope } from '../models/PricingRuleDtoListEnvelope';
import type { PricingRuleUpdateDto } from '../models/PricingRuleUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PricingRulesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns PricingRuleDtoEnvelope Created
     * @throws ApiError
     */
    public static postApiV2CatalogServicePricingRules(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: PricingRuleCreateDto,
    ): CancelablePromise<PricingRuleDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServicePricingRules(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<PricingRuleDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServicePricingRules1(
        pricingRuleId: string,
        xApiVersion?: string,
    ): CancelablePromise<PricingRuleDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2CatalogServicePricingRules(
        tenantId: string,
        pricingRuleId: string,
        xApiVersion?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
    public static putApiV2CatalogServicePricingRulesUpdate(
        tenantId: string,
        pricingRuleId: string,
        xApiVersion?: string,
        requestBody?: PricingRuleUpdateDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
