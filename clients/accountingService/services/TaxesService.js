"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class TaxesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns TaxPolicyDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceTaxesTaxPolicies(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2AccountingServiceTaxesTaxPolicies(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2AccountingServiceTaxesTaxPoliciesByAutority(tenantId, authorityId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2AccountingServiceTaxesTaxPolicies1(tenantId, id, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2AccountingServiceTaxesTaxPolicies(tenantId, id, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2AccountingServiceTaxesTaxPoliciesItemTaxPolicyRecords(tenantId, taxPolicyId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2AccountingServiceTaxesTaxPoliciesItemTaxPolicyRecords(tenantId, taxPolicyId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2AccountingServiceTaxesTaxPoliciesItemTaxPolicyRecords1(tenantId, taxPolicyId, itemTaxPolicyRecordId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2AccountingServiceTaxesTaxPoliciesItemTaxPolicyRecords(tenantId, taxPolicyId, itemTaxPolicyRecordId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteApiV2AccountingServiceTaxesTaxPoliciesItemTaxPolicyRecords(tenantId, taxPolicyId, itemTaxPolicyRecordId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2AccountingServiceTaxesTaxPoliciesAppliedTaxPolicyRecords(tenantId, taxPolicyId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2AccountingServiceTaxesTaxPoliciesAppliedTaxPolicyRecords(tenantId, taxPolicyId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2AccountingServiceTaxesTaxPoliciesAppliedTaxPolicyRecordsCount(tenantId, taxPolicyId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2AccountingServiceTaxesTaxPoliciesAppliedTaxPolicyRecords1(tenantId, taxPolicyId, appliedTaxPolicyRecordId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2AccountingServiceTaxesTaxPoliciesAppliedTaxPolicyRecords(tenantId, taxPolicyId, appliedTaxPolicyRecordId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteApiV2AccountingServiceTaxesTaxPoliciesAppliedTaxPolicyRecords(tenantId, taxPolicyId, appliedTaxPolicyRecordId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2AccountingServiceTaxesTaxRates(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2AccountingServiceTaxesTaxRates(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2AccountingServiceTaxesTaxRates1(tenantId, id, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2AccountingServiceTaxesTaxRates(tenantId, id, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteApiV2AccountingServiceTaxesTaxRates(tenantId, id, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.TaxesService = TaxesService;
