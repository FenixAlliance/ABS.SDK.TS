/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemReturnPolicyDtoListEnvelope } from '../models/ItemReturnPolicyDtoListEnvelope';
import type { ItemShippingPolicyDtoListEnvelope } from '../models/ItemShippingPolicyDtoListEnvelope';
import type { ItemTaxPolicyDtoListEnvelope } from '../models/ItemTaxPolicyDtoListEnvelope';
import type { ItemWarrantyPolicyDtoListEnvelope } from '../models/ItemWarrantyPolicyDtoListEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PoliciesService {
    /**
     * @param itemId
     * @param xApiVersion
     * @returns ItemReturnPolicyDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServicePoliciesItemReturnPolicies(
        itemId?: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemReturnPolicyDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServicePoliciesItemTaxPolicies(
        itemId?: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemTaxPolicyDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServicePoliciesItemWarrantyPolicies(
        itemId?: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemWarrantyPolicyDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServicePoliciesItemShippingPolicies(
        itemId?: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemShippingPolicyDtoListEnvelope> {
        return __request(OpenAPI, {
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
