/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppliedTaxPolicyRecordCreateDto } from '../models/AppliedTaxPolicyRecordCreateDto';
import type { AppliedTaxPolicyRecordDtoEnvelope } from '../models/AppliedTaxPolicyRecordDtoEnvelope';
import type { AppliedTaxPolicyRecordDtoListEnvelope } from '../models/AppliedTaxPolicyRecordDtoListEnvelope';
import type { AppliedTaxPolicyRecordUpdateDto } from '../models/AppliedTaxPolicyRecordUpdateDto';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { ItemTaxPolicyRecordCreateDto } from '../models/ItemTaxPolicyRecordCreateDto';
import type { ItemTaxPolicyRecordDtoEnvelope } from '../models/ItemTaxPolicyRecordDtoEnvelope';
import type { ItemTaxPolicyRecordDtoListEnvelope } from '../models/ItemTaxPolicyRecordDtoListEnvelope';
import type { ItemTaxPolicyRecordUpdateDto } from '../models/ItemTaxPolicyRecordUpdateDto';
import type { TaxPolicyCreateDto } from '../models/TaxPolicyCreateDto';
import type { TaxPolicyDtoEnvelope } from '../models/TaxPolicyDtoEnvelope';
import type { TaxPolicyDtoListEnvelope } from '../models/TaxPolicyDtoListEnvelope';
import type { TaxPolicyUpdateDto } from '../models/TaxPolicyUpdateDto';
import type { TaxRateCreateDto } from '../models/TaxRateCreateDto';
import type { TaxRateDtoEnvelope } from '../models/TaxRateDtoEnvelope';
import type { TaxRateDtoListEnvelope } from '../models/TaxRateDtoListEnvelope';
import type { TaxRateUpdateDto } from '../models/TaxRateUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TaxesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns TaxPolicyDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceTaxesTaxPolicies(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TaxPolicyDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Taxes/TaxPolicies',
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
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2AccountingServiceTaxesTaxPolicies(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: TaxPolicyCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Taxes/TaxPolicies',
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
     * @param authorityId
     * @param xApiVersion
     * @returns TaxPolicyDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceTaxesTaxPoliciesByAutority(
        tenantId: string,
        authorityId: string,
        xApiVersion?: string,
    ): CancelablePromise<TaxPolicyDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Taxes/TaxPolicies/ByAutority/{authorityId}',
            path: {
                'authorityId': authorityId,
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
     * @param id
     * @param xApiVersion
     * @returns TaxPolicyDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceTaxesTaxPolicies1(
        tenantId: string,
        id: string,
        xApiVersion?: string,
    ): CancelablePromise<TaxPolicyDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Taxes/TaxPolicies/{id}',
            path: {
                'id': id,
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
     * @param id
     * @param xApiVersion
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static putApiV2AccountingServiceTaxesTaxPolicies(
        tenantId: string,
        id: string,
        xApiVersion?: string,
        requestBody?: TaxPolicyUpdateDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Taxes/TaxPolicies/{id}',
            path: {
                'id': id,
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
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param taxPolicyId
     * @param xApiVersion
     * @returns ItemTaxPolicyRecordDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceTaxesTaxPoliciesItemTaxPolicyRecords(
        tenantId: string,
        taxPolicyId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemTaxPolicyRecordDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Taxes/TaxPolicies/{taxPolicyId}/ItemTaxPolicyRecords',
            path: {
                'taxPolicyId': taxPolicyId,
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
     * @param taxPolicyId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2AccountingServiceTaxesTaxPoliciesItemTaxPolicyRecords(
        tenantId: string,
        taxPolicyId: string,
        xApiVersion?: string,
        requestBody?: ItemTaxPolicyRecordCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Taxes/TaxPolicies/{taxPolicyId}/ItemTaxPolicyRecords',
            path: {
                'taxPolicyId': taxPolicyId,
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
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param taxPolicyId
     * @param itemTaxPolicyRecordId
     * @param xApiVersion
     * @returns ItemTaxPolicyRecordDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceTaxesTaxPoliciesItemTaxPolicyRecords1(
        tenantId: string,
        taxPolicyId: string,
        itemTaxPolicyRecordId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemTaxPolicyRecordDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Taxes/TaxPolicies/{taxPolicyId}/ItemTaxPolicyRecords/{itemTaxPolicyRecordId}',
            path: {
                'taxPolicyId': taxPolicyId,
                'itemTaxPolicyRecordId': itemTaxPolicyRecordId,
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
     * @param taxPolicyId
     * @param itemTaxPolicyRecordId
     * @param xApiVersion
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static putApiV2AccountingServiceTaxesTaxPoliciesItemTaxPolicyRecords(
        tenantId: string,
        taxPolicyId: string,
        itemTaxPolicyRecordId: string,
        xApiVersion?: string,
        requestBody?: ItemTaxPolicyRecordUpdateDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Taxes/TaxPolicies/{taxPolicyId}/ItemTaxPolicyRecords/{itemTaxPolicyRecordId}',
            path: {
                'taxPolicyId': taxPolicyId,
                'itemTaxPolicyRecordId': itemTaxPolicyRecordId,
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
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param taxPolicyId
     * @param itemTaxPolicyRecordId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    public static deleteApiV2AccountingServiceTaxesTaxPoliciesItemTaxPolicyRecords(
        tenantId: string,
        taxPolicyId: string,
        itemTaxPolicyRecordId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Taxes/TaxPolicies/{taxPolicyId}/ItemTaxPolicyRecords/{itemTaxPolicyRecordId}',
            path: {
                'taxPolicyId': taxPolicyId,
                'itemTaxPolicyRecordId': itemTaxPolicyRecordId,
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
     * @param taxPolicyId
     * @param xApiVersion
     * @returns AppliedTaxPolicyRecordDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceTaxesTaxPoliciesAppliedTaxPolicyRecords(
        tenantId: string,
        taxPolicyId: string,
        xApiVersion?: string,
    ): CancelablePromise<AppliedTaxPolicyRecordDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Taxes/TaxPolicies/{taxPolicyId}/AppliedTaxPolicyRecords',
            path: {
                'taxPolicyId': taxPolicyId,
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
     * @param taxPolicyId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2AccountingServiceTaxesTaxPoliciesAppliedTaxPolicyRecords(
        tenantId: string,
        taxPolicyId: string,
        xApiVersion?: string,
        requestBody?: AppliedTaxPolicyRecordCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Taxes/TaxPolicies/{taxPolicyId}/AppliedTaxPolicyRecords',
            path: {
                'taxPolicyId': taxPolicyId,
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
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param taxPolicyId
     * @param xApiVersion
     * @returns AppliedTaxPolicyRecordDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceTaxesTaxPoliciesAppliedTaxPolicyRecordsCount(
        tenantId: string,
        taxPolicyId: string,
        xApiVersion?: string,
    ): CancelablePromise<AppliedTaxPolicyRecordDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Taxes/TaxPolicies/{taxPolicyId}/AppliedTaxPolicyRecords/Count',
            path: {
                'taxPolicyId': taxPolicyId,
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
     * @param taxPolicyId
     * @param appliedTaxPolicyRecordId
     * @param xApiVersion
     * @returns AppliedTaxPolicyRecordDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceTaxesTaxPoliciesAppliedTaxPolicyRecords1(
        tenantId: string,
        taxPolicyId: string,
        appliedTaxPolicyRecordId: string,
        xApiVersion?: string,
    ): CancelablePromise<AppliedTaxPolicyRecordDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Taxes/TaxPolicies/{taxPolicyId}/AppliedTaxPolicyRecords/{appliedTaxPolicyRecordId}',
            path: {
                'taxPolicyId': taxPolicyId,
                'appliedTaxPolicyRecordId': appliedTaxPolicyRecordId,
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
     * @param taxPolicyId
     * @param appliedTaxPolicyRecordId
     * @param xApiVersion
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static putApiV2AccountingServiceTaxesTaxPoliciesAppliedTaxPolicyRecords(
        tenantId: string,
        taxPolicyId: string,
        appliedTaxPolicyRecordId: string,
        xApiVersion?: string,
        requestBody?: AppliedTaxPolicyRecordUpdateDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Taxes/TaxPolicies/{taxPolicyId}/AppliedTaxPolicyRecords/{appliedTaxPolicyRecordId}',
            path: {
                'taxPolicyId': taxPolicyId,
                'appliedTaxPolicyRecordId': appliedTaxPolicyRecordId,
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
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param taxPolicyId
     * @param appliedTaxPolicyRecordId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    public static deleteApiV2AccountingServiceTaxesTaxPoliciesAppliedTaxPolicyRecords(
        tenantId: string,
        taxPolicyId: string,
        appliedTaxPolicyRecordId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Taxes/TaxPolicies/{taxPolicyId}/AppliedTaxPolicyRecords/{appliedTaxPolicyRecordId}',
            path: {
                'taxPolicyId': taxPolicyId,
                'appliedTaxPolicyRecordId': appliedTaxPolicyRecordId,
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
     * @returns TaxRateDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceTaxesTaxRates(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TaxRateDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Taxes/TaxRates',
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
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2AccountingServiceTaxesTaxRates(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: TaxRateCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Taxes/TaxRates',
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
     * @param id
     * @param xApiVersion
     * @returns TaxRateDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceTaxesTaxRates1(
        tenantId: string,
        id: string,
        xApiVersion?: string,
    ): CancelablePromise<TaxRateDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Taxes/TaxRates/{id}',
            path: {
                'id': id,
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
     * @param id
     * @param xApiVersion
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static putApiV2AccountingServiceTaxesTaxRates(
        tenantId: string,
        id: string,
        xApiVersion?: string,
        requestBody?: TaxRateUpdateDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Taxes/TaxRates/{id}',
            path: {
                'id': id,
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
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param id
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    public static deleteApiV2AccountingServiceTaxesTaxRates(
        tenantId: string,
        id: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Taxes/TaxRates/{id}',
            path: {
                'id': id,
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
}
