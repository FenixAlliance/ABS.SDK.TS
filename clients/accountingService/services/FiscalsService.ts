/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { FiscalAuthorityCreateDto } from '../models/FiscalAuthorityCreateDto';
import type { FiscalAuthorityDtoEnvelope } from '../models/FiscalAuthorityDtoEnvelope';
import type { FiscalAuthorityDtoListEnvelope } from '../models/FiscalAuthorityDtoListEnvelope';
import type { FiscalAuthorityUpdateDto } from '../models/FiscalAuthorityUpdateDto';
import type { FiscalIdentificationTypeCreateDto } from '../models/FiscalIdentificationTypeCreateDto';
import type { FiscalIdentificationTypeDtoEnvelope } from '../models/FiscalIdentificationTypeDtoEnvelope';
import type { FiscalIdentificationTypeDtoListEnvelope } from '../models/FiscalIdentificationTypeDtoListEnvelope';
import type { FiscalIdentificationTypeUpdateDto } from '../models/FiscalIdentificationTypeUpdateDto';
import type { FiscalPeriodCreateDto } from '../models/FiscalPeriodCreateDto';
import type { FiscalPeriodDtoEnvelope } from '../models/FiscalPeriodDtoEnvelope';
import type { FiscalPeriodDtoListEnvelope } from '../models/FiscalPeriodDtoListEnvelope';
import type { FiscalPeriodUpdateDto } from '../models/FiscalPeriodUpdateDto';
import type { FiscalRegimeCreateDto } from '../models/FiscalRegimeCreateDto';
import type { FiscalRegimeDtoEnvelope } from '../models/FiscalRegimeDtoEnvelope';
import type { FiscalRegimeDtoListEnvelope } from '../models/FiscalRegimeDtoListEnvelope';
import type { FiscalRegimeUpdateDto } from '../models/FiscalRegimeUpdateDto';
import type { FiscalResponsibilityCreateDto } from '../models/FiscalResponsibilityCreateDto';
import type { FiscalResponsibilityDtoEnvelope } from '../models/FiscalResponsibilityDtoEnvelope';
import type { FiscalResponsibilityDtoListEnvelope } from '../models/FiscalResponsibilityDtoListEnvelope';
import type { FiscalResponsibilityRecordCreateDto } from '../models/FiscalResponsibilityRecordCreateDto';
import type { FiscalResponsibilityRecordDtoEnvelope } from '../models/FiscalResponsibilityRecordDtoEnvelope';
import type { FiscalResponsibilityRecordDtoListEnvelope } from '../models/FiscalResponsibilityRecordDtoListEnvelope';
import type { FiscalResponsibilityRecordUpdateDto } from '../models/FiscalResponsibilityRecordUpdateDto';
import type { FiscalResponsibilityUpdateDto } from '../models/FiscalResponsibilityUpdateDto';
import type { FiscalYearDtoEnvelope } from '../models/FiscalYearDtoEnvelope';
import type { FiscalYearDtoListEnvelope } from '../models/FiscalYearDtoListEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { InvoiceEnumerationRangeDtoEnvelope } from '../models/InvoiceEnumerationRangeDtoEnvelope';
import type { InvoiceEnumerationRangeDtoListEnvelope } from '../models/InvoiceEnumerationRangeDtoListEnvelope';
import type { TenantId } from '../models/TenantId';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FiscalsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns FiscalAuthorityDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceFiscalsAuthorities(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<FiscalAuthorityDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2AccountingServiceFiscalsAuthorities(
        tenantId: TenantId,
        xApiVersion?: string,
        requestBody?: FiscalAuthorityCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceFiscalsAuthoritiesCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceFiscalsAuthorities1(
        tenantId: TenantId,
        authorityId: string,
        xApiVersion?: string,
    ): CancelablePromise<FiscalAuthorityDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static putApiV2AccountingServiceFiscalsAuthorities(
        tenantId: TenantId,
        authorityId: string,
        xApiVersion?: string,
        requestBody?: FiscalAuthorityUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2AccountingServiceFiscalsAuthorities(
        tenantId: TenantId,
        authorityId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceFiscalsAuthoritiesIdentificationTypes(
        authorityId: string,
        xApiVersion?: string,
    ): CancelablePromise<FiscalIdentificationTypeDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceFiscalsAuthoritiesIdentificationTypesCount(
        authorityId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceFiscalsAuthoritiesIdentificationTypes1(
        tenantId: TenantId,
        fiscalAuthorityId: string,
        identificationTypeId: string,
        xApiVersion?: string,
    ): CancelablePromise<FiscalIdentificationTypeDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2AccountingServiceFiscalsAuthoritiesIdentificationTypes(
        tenantId: TenantId,
        xApiVersion?: string,
        requestBody?: FiscalIdentificationTypeCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static putApiV2AccountingServiceFiscalsAuthoritiesIdentificationTypes(
        tenantId: TenantId,
        identificationTypeId: string,
        xApiVersion?: string,
        requestBody?: FiscalIdentificationTypeUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2AccountingServiceFiscalsAuthoritiesIdentificationTypes(
        tenantId: TenantId,
        identificationTypeId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceFiscalsAuthoritiesFiscalRegimes(
        fiscalAuthorityId: string,
        authorityId: string,
        xApiVersion?: string,
    ): CancelablePromise<FiscalRegimeDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceFiscalsAuthoritiesFiscalRegimesCount(
        fiscalAuthorityId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceFiscalsAuthoritiesFiscalRegimes1(
        tenantId: TenantId,
        fiscalAuthorityId: string,
        regimeId: string,
        xApiVersion?: string,
    ): CancelablePromise<FiscalRegimeDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2AccountingServiceFiscalsAuthoritiesFiscalRegimes(
        tenantId: TenantId,
        xApiVersion?: string,
        requestBody?: FiscalRegimeCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static putApiV2AccountingServiceFiscalsAuthoritiesFiscalRegimes(
        tenantId: TenantId,
        regimeId: string,
        xApiVersion?: string,
        requestBody?: FiscalRegimeUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2AccountingServiceFiscalsAuthoritiesFiscalRegimes(
        tenantId: TenantId,
        regimeId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceFiscalsAuthoritiesEnumerationRanges(
        fiscalAuthorityId: string,
        authorityId: string,
        xApiVersion?: string,
    ): CancelablePromise<InvoiceEnumerationRangeDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceFiscalsAuthoritiesEnumerationRangesCount(
        fiscalAuthorityId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceFiscalsAuthoritiesEnumerationRanges1(
        tenantId: TenantId,
        fiscalAuthorityId: string,
        enumerationRangeId: string,
        xApiVersion?: string,
    ): CancelablePromise<InvoiceEnumerationRangeDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceFiscalsAuthoritiesFiscalResponsibilities(
        fiscalAuthorityId: string,
        authorityId: string,
        xApiVersion?: string,
    ): CancelablePromise<FiscalResponsibilityDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceFiscalsAuthoritiesFiscalResponsibilitiesCount(
        fiscalAuthorityId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceFiscalsAuthoritiesFiscalResponsibilities1(
        tenantId: TenantId,
        fiscalAuthorityId: string,
        fiscalResponsibilityId: string,
        xApiVersion?: string,
    ): CancelablePromise<FiscalResponsibilityDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2AccountingServiceFiscalsAuthoritiesFiscalResponsibilities(
        tenantId: TenantId,
        xApiVersion?: string,
        requestBody?: FiscalResponsibilityCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static putApiV2AccountingServiceFiscalsAuthoritiesFiscalResponsibilities(
        tenantId: TenantId,
        fiscalResponsibilityId: string,
        xApiVersion?: string,
        requestBody?: FiscalResponsibilityUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2AccountingServiceFiscalsAuthoritiesFiscalResponsibilities(
        tenantId: TenantId,
        fiscalResponsibilityId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceFiscalsAuthoritiesFiscalResponsibilitiesFiscalResponsibilityRecords(
        tenantId: TenantId,
        fiscalAuthorityId: string,
        fiscalResponsibilityId: string,
        xApiVersion?: string,
    ): CancelablePromise<FiscalResponsibilityRecordDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceFiscalsAuthoritiesFiscalResponsibilitiesFiscalResponsibilityRecordsCount(
        tenantId: TenantId,
        fiscalAuthorityId: string,
        fiscalResponsibilityId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceFiscalsAuthoritiesFiscalResponsibilitiesFiscalResponsibilityRecords1(
        tenantId: TenantId,
        fiscalAuthorityId: string,
        fiscalResponsibilityId: string,
        fiscalResponsibilityRecordId: string,
        xApiVersion?: string,
    ): CancelablePromise<FiscalResponsibilityRecordDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2AccountingServiceFiscalsAuthoritiesFiscalResponsibilityRecords(
        tenantId: TenantId,
        xApiVersion?: string,
        requestBody?: FiscalResponsibilityRecordCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static putApiV2AccountingServiceFiscalsAuthoritiesFiscalResponsibilityRecords(
        tenantId: TenantId,
        fiscalResponsibilityRecordId: string,
        xApiVersion?: string,
        requestBody?: FiscalResponsibilityRecordUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2AccountingServiceFiscalsAuthoritiesFiscalResponsibilityRecords(
        tenantId: TenantId,
        fiscalResponsibilityRecordId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceFiscalsAuthoritiesFiscalYears(
        tenantId: TenantId,
        fiscalAuthorityId: string,
        authorityId: string,
        xApiVersion?: string,
    ): CancelablePromise<FiscalYearDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceFiscalsAuthoritiesFiscalYearsCount(
        tenantId: TenantId,
        fiscalAuthorityId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceFiscalsAuthoritiesFiscalYears1(
        tenantId: TenantId,
        fiscalAuthorityId: string,
        fiscalYearId: string,
        xApiVersion?: string,
    ): CancelablePromise<FiscalYearDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceFiscalsAuthoritiesFiscalYearsFiscalPeriods(
        tenantId: TenantId,
        fiscalAuthorityId: string,
        fiscalYearId: string,
        authorityId: string,
        xApiVersion?: string,
    ): CancelablePromise<FiscalPeriodDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceFiscalsAuthoritiesFiscalYearsFiscalPeriodsCount(
        tenantId: TenantId,
        fiscalAuthorityId: string,
        fiscalYearId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getApiV2AccountingServiceFiscalsAuthoritiesFiscalYearsFiscalPeriods1(
        tenantId: TenantId,
        fiscalAuthorityId: string,
        fiscalYearId: string,
        fiscalPeriodId: string,
        xApiVersion?: string,
    ): CancelablePromise<FiscalPeriodDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2AccountingServiceFiscalsAuthoritiesFiscalPeriods(
        tenantId: TenantId,
        xApiVersion?: string,
        requestBody?: FiscalPeriodCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static putApiV2AccountingServiceFiscalsAuthoritiesFiscalPeriods(
        tenantId: TenantId,
        fiscalPeriodId: string,
        xApiVersion?: string,
        requestBody?: FiscalPeriodUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2AccountingServiceFiscalsAuthoritiesFiscalPeriods(
        tenantId: TenantId,
        fiscalPeriodId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
