"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiscalsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class FiscalsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns FiscalAuthorityDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceFiscalsAuthorities(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Fiscals/Authorities',
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
    static postApiV2AccountingServiceFiscalsAuthorities(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Fiscals/Authorities',
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
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceFiscalsAuthoritiesCount(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Fiscals/Authorities/Count',
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
     * @param authorityId
     * @param xApiVersion
     * @returns FiscalAuthorityDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceFiscalsAuthorities1(tenantId, authorityId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Fiscals/Authorities/{authorityId}',
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
     * @param authorityId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2AccountingServiceFiscalsAuthorities(tenantId, authorityId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Fiscals/Authorities/{authorityId}',
            path: {
                'authorityId': authorityId,
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
     * @param authorityId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    static deleteApiV2AccountingServiceFiscalsAuthorities(tenantId, authorityId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Fiscals/Authorities/{authorityId}',
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
     * @param authorityId
     * @param xApiVersion
     * @returns FiscalIdentificationTypeDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceFiscalsAuthoritiesIdentificationTypes(authorityId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Fiscals/Authorities/{authorityId}/IdentificationTypes',
            path: {
                'authorityId': authorityId,
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
     * @param authorityId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceFiscalsAuthoritiesIdentificationTypesCount(authorityId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Fiscals/Authorities/{authorityId}/IdentificationTypes/Count',
            path: {
                'authorityId': authorityId,
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
     * @param fiscalAuthorityId
     * @param identificationTypeId
     * @param xApiVersion
     * @returns FiscalIdentificationTypeDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceFiscalsAuthoritiesIdentificationTypes1(tenantId, fiscalAuthorityId, identificationTypeId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/IdentificationTypes/{identificationTypeId}',
            path: {
                'fiscalAuthorityId': fiscalAuthorityId,
                'identificationTypeId': identificationTypeId,
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
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2AccountingServiceFiscalsAuthoritiesIdentificationTypes(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Fiscals/Authorities/IdentificationTypes',
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
     * @param identificationTypeId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2AccountingServiceFiscalsAuthoritiesIdentificationTypes(tenantId, identificationTypeId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Fiscals/Authorities/IdentificationTypes/{identificationTypeId}',
            path: {
                'identificationTypeId': identificationTypeId,
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
     * @param identificationTypeId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    static deleteApiV2AccountingServiceFiscalsAuthoritiesIdentificationTypes(tenantId, identificationTypeId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Fiscals/Authorities/IdentificationTypes/{identificationTypeId}',
            path: {
                'identificationTypeId': identificationTypeId,
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
     * @param fiscalAuthorityId
     * @param authorityId
     * @param xApiVersion
     * @returns FiscalRegimeDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceFiscalsAuthoritiesFiscalRegimes(fiscalAuthorityId, authorityId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Fiscals/Authorities/{authorityId}/FiscalRegimes',
            path: {
                'authorityId': authorityId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'fiscalAuthorityId': fiscalAuthorityId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param fiscalAuthorityId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceFiscalsAuthoritiesFiscalRegimesCount(fiscalAuthorityId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalRegimes/Count',
            path: {
                'fiscalAuthorityId': fiscalAuthorityId,
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
     * @param fiscalAuthorityId
     * @param regimeId
     * @param xApiVersion
     * @returns FiscalRegimeDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceFiscalsAuthoritiesFiscalRegimes1(tenantId, fiscalAuthorityId, regimeId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalRegimes/{regimeId}',
            path: {
                'fiscalAuthorityId': fiscalAuthorityId,
                'regimeId': regimeId,
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
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2AccountingServiceFiscalsAuthoritiesFiscalRegimes(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Fiscals/Authorities/FiscalRegimes',
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
     * @param regimeId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2AccountingServiceFiscalsAuthoritiesFiscalRegimes(tenantId, regimeId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Fiscals/Authorities/FiscalRegimes/{regimeId}',
            path: {
                'regimeId': regimeId,
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
     * @param regimeId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    static deleteApiV2AccountingServiceFiscalsAuthoritiesFiscalRegimes(tenantId, regimeId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Fiscals/Authorities/FiscalRegimes/{regimeId}',
            path: {
                'regimeId': regimeId,
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
     * @param fiscalAuthorityId
     * @param authorityId
     * @param xApiVersion
     * @returns InvoiceEnumerationRangeDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceFiscalsAuthoritiesEnumerationRanges(fiscalAuthorityId, authorityId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Fiscals/Authorities/{authorityId}/EnumerationRanges',
            path: {
                'authorityId': authorityId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'fiscalAuthorityId': fiscalAuthorityId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param fiscalAuthorityId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceFiscalsAuthoritiesEnumerationRangesCount(fiscalAuthorityId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/EnumerationRanges/Count',
            path: {
                'fiscalAuthorityId': fiscalAuthorityId,
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
     * @param fiscalAuthorityId
     * @param enumerationRangeId
     * @param xApiVersion
     * @returns InvoiceEnumerationRangeDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceFiscalsAuthoritiesEnumerationRanges1(tenantId, fiscalAuthorityId, enumerationRangeId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/EnumerationRanges/{enumerationRangeId}',
            path: {
                'fiscalAuthorityId': fiscalAuthorityId,
                'enumerationRangeId': enumerationRangeId,
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
     * @param fiscalAuthorityId
     * @param authorityId
     * @param xApiVersion
     * @returns FiscalResponsibilityDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceFiscalsAuthoritiesFiscalResponsibilities(fiscalAuthorityId, authorityId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Fiscals/Authorities/{authorityId}/FiscalResponsibilities',
            path: {
                'authorityId': authorityId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'fiscalAuthorityId': fiscalAuthorityId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param fiscalAuthorityId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceFiscalsAuthoritiesFiscalResponsibilitiesCount(fiscalAuthorityId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalResponsibilities/Count',
            path: {
                'fiscalAuthorityId': fiscalAuthorityId,
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
     * @param fiscalAuthorityId
     * @param fiscalResponsibilityId
     * @param xApiVersion
     * @returns FiscalResponsibilityDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceFiscalsAuthoritiesFiscalResponsibilities1(tenantId, fiscalAuthorityId, fiscalResponsibilityId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalResponsibilities/{fiscalResponsibilityId}',
            path: {
                'fiscalAuthorityId': fiscalAuthorityId,
                'fiscalResponsibilityId': fiscalResponsibilityId,
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
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2AccountingServiceFiscalsAuthoritiesFiscalResponsibilities(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Fiscals/Authorities/FiscalResponsibilities',
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
     * @param fiscalResponsibilityId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2AccountingServiceFiscalsAuthoritiesFiscalResponsibilities(tenantId, fiscalResponsibilityId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Fiscals/Authorities/FiscalResponsibilities/{fiscalResponsibilityId}',
            path: {
                'fiscalResponsibilityId': fiscalResponsibilityId,
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
     * @param fiscalResponsibilityId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    static deleteApiV2AccountingServiceFiscalsAuthoritiesFiscalResponsibilities(tenantId, fiscalResponsibilityId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Fiscals/Authorities/FiscalResponsibilities/{fiscalResponsibilityId}',
            path: {
                'fiscalResponsibilityId': fiscalResponsibilityId,
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
     * @param fiscalAuthorityId
     * @param fiscalResponsibilityId
     * @param xApiVersion
     * @returns FiscalResponsibilityRecordDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceFiscalsAuthoritiesFiscalResponsibilitiesFiscalResponsibilityRecords(tenantId, fiscalAuthorityId, fiscalResponsibilityId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalResponsibilities/{fiscalResponsibilityId}/FiscalResponsibilityRecords',
            path: {
                'fiscalAuthorityId': fiscalAuthorityId,
                'fiscalResponsibilityId': fiscalResponsibilityId,
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
     * @param fiscalAuthorityId
     * @param fiscalResponsibilityId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceFiscalsAuthoritiesFiscalResponsibilitiesFiscalResponsibilityRecordsCount(tenantId, fiscalAuthorityId, fiscalResponsibilityId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalResponsibilities/{fiscalResponsibilityId}/FiscalResponsibilityRecords/Count',
            path: {
                'fiscalAuthorityId': fiscalAuthorityId,
                'fiscalResponsibilityId': fiscalResponsibilityId,
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
     * @param fiscalAuthorityId
     * @param fiscalResponsibilityId
     * @param fiscalResponsibilityRecordId
     * @param xApiVersion
     * @returns FiscalResponsibilityRecordDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceFiscalsAuthoritiesFiscalResponsibilitiesFiscalResponsibilityRecords1(tenantId, fiscalAuthorityId, fiscalResponsibilityId, fiscalResponsibilityRecordId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalResponsibilities/{fiscalResponsibilityId}/FiscalResponsibilityRecords/{fiscalResponsibilityRecordId}',
            path: {
                'fiscalAuthorityId': fiscalAuthorityId,
                'fiscalResponsibilityId': fiscalResponsibilityId,
                'fiscalResponsibilityRecordId': fiscalResponsibilityRecordId,
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
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2AccountingServiceFiscalsAuthoritiesFiscalResponsibilityRecords(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Fiscals/Authorities/FiscalResponsibilityRecords',
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
     * @param fiscalResponsibilityRecordId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2AccountingServiceFiscalsAuthoritiesFiscalResponsibilityRecords(tenantId, fiscalResponsibilityRecordId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Fiscals/Authorities/FiscalResponsibilityRecords/{fiscalResponsibilityRecordId}',
            path: {
                'fiscalResponsibilityRecordId': fiscalResponsibilityRecordId,
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
     * @param fiscalResponsibilityRecordId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    static deleteApiV2AccountingServiceFiscalsAuthoritiesFiscalResponsibilityRecords(tenantId, fiscalResponsibilityRecordId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Fiscals/Authorities/FiscalResponsibilityRecords/{fiscalResponsibilityRecordId}',
            path: {
                'fiscalResponsibilityRecordId': fiscalResponsibilityRecordId,
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
     * @param fiscalAuthorityId
     * @param authorityId
     * @param xApiVersion
     * @returns FiscalYearDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceFiscalsAuthoritiesFiscalYears(tenantId, fiscalAuthorityId, authorityId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Fiscals/Authorities/{authorityId}/FiscalYears',
            path: {
                'authorityId': authorityId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'fiscalAuthorityId': fiscalAuthorityId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param fiscalAuthorityId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceFiscalsAuthoritiesFiscalYearsCount(tenantId, fiscalAuthorityId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalYears/Count',
            path: {
                'fiscalAuthorityId': fiscalAuthorityId,
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
     * @param fiscalAuthorityId
     * @param fiscalYearId
     * @param xApiVersion
     * @returns FiscalYearDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceFiscalsAuthoritiesFiscalYears1(tenantId, fiscalAuthorityId, fiscalYearId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalYears/{fiscalYearId}',
            path: {
                'fiscalAuthorityId': fiscalAuthorityId,
                'fiscalYearId': fiscalYearId,
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
     * @param fiscalAuthorityId
     * @param fiscalYearId
     * @param authorityId
     * @param xApiVersion
     * @returns FiscalPeriodDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceFiscalsAuthoritiesFiscalYearsFiscalPeriods(tenantId, fiscalAuthorityId, fiscalYearId, authorityId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Fiscals/Authorities/{authorityId}/FiscalYears/{fiscalYearId}/FiscalPeriods',
            path: {
                'fiscalYearId': fiscalYearId,
                'authorityId': authorityId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'fiscalAuthorityId': fiscalAuthorityId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param fiscalAuthorityId
     * @param fiscalYearId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceFiscalsAuthoritiesFiscalYearsFiscalPeriodsCount(tenantId, fiscalAuthorityId, fiscalYearId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalYears/{fiscalYearId}/FiscalPeriods/Count',
            path: {
                'fiscalAuthorityId': fiscalAuthorityId,
                'fiscalYearId': fiscalYearId,
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
     * @param fiscalAuthorityId
     * @param fiscalYearId
     * @param fiscalPeriodId
     * @param xApiVersion
     * @returns FiscalPeriodDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2AccountingServiceFiscalsAuthoritiesFiscalYearsFiscalPeriods1(tenantId, fiscalAuthorityId, fiscalYearId, fiscalPeriodId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalYears/{fiscalYearId}/FiscalPeriods/{fiscalPeriodId}',
            path: {
                'fiscalAuthorityId': fiscalAuthorityId,
                'fiscalYearId': fiscalYearId,
                'fiscalPeriodId': fiscalPeriodId,
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
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2AccountingServiceFiscalsAuthoritiesFiscalPeriods(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Fiscals/Authorities/FiscalPeriods',
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
     * @param fiscalPeriodId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2AccountingServiceFiscalsAuthoritiesFiscalPeriods(tenantId, fiscalPeriodId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Fiscals/Authorities/FiscalPeriods/{fiscalPeriodId}',
            path: {
                'fiscalPeriodId': fiscalPeriodId,
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
     * @param fiscalPeriodId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    static deleteApiV2AccountingServiceFiscalsAuthoritiesFiscalPeriods(tenantId, fiscalPeriodId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Fiscals/Authorities/FiscalPeriods/{fiscalPeriodId}',
            path: {
                'fiscalPeriodId': fiscalPeriodId,
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
exports.FiscalsService = FiscalsService;
