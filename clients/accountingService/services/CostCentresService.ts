/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CostCentreBudgetCreateDto } from '../models/CostCentreBudgetCreateDto';
import type { CostCentreBudgetDtoEnvelope } from '../models/CostCentreBudgetDtoEnvelope';
import type { CostCentreBudgetDtoListEnvelope } from '../models/CostCentreBudgetDtoListEnvelope';
import type { CostCentreBudgetUpdateDto } from '../models/CostCentreBudgetUpdateDto';
import type { CostCentreCreateDto } from '../models/CostCentreCreateDto';
import type { CostCentreDtoEnvelope } from '../models/CostCentreDtoEnvelope';
import type { CostCentreDtoListEnvelope } from '../models/CostCentreDtoListEnvelope';
import type { CostCentreGroupCreateDto } from '../models/CostCentreGroupCreateDto';
import type { CostCentreGroupDtoEnvelope } from '../models/CostCentreGroupDtoEnvelope';
import type { CostCentreGroupDtoListEnvelope } from '../models/CostCentreGroupDtoListEnvelope';
import type { CostCentreGroupUpdateDto } from '../models/CostCentreGroupUpdateDto';
import type { CostCentreUpdateDto } from '../models/CostCentreUpdateDto';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { TenantId } from '../models/TenantId';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CostCentresService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns CostCentreDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceCostCentres(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<CostCentreDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/CostCentres',
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
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceCostCentresCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/CostCentres/Count',
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
     * @param costCentreId
     * @param tenantId
     * @param xApiVersion
     * @returns CostCentreDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceCostCentres1(
        costCentreId: string,
        tenantId?: TenantId,
        xApiVersion?: string,
    ): CancelablePromise<CostCentreDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/CostCentres/{costCentreId}',
            path: {
                'costCentreId': costCentreId,
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
     * @returns CostCentreDtoEnvelope Created
     * @throws ApiError
     */
    public static postApiV2AccountingServiceCostCentresCostCentres(
        tenantId?: TenantId,
        xApiVersion?: string,
        requestBody?: CostCentreCreateDto,
    ): CancelablePromise<CostCentreDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/CostCentres/CostCentres',
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
     * @param costCentreId
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns CostCentreDtoEnvelope OK
     * @throws ApiError
     */
    public static putApiV2AccountingServiceCostCentresCostCentres(
        costCentreId: string,
        tenantId?: TenantId,
        xApiVersion?: string,
        requestBody?: CostCentreUpdateDto,
    ): CancelablePromise<CostCentreDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/CostCentres/CostCentres/{costCentreId}',
            path: {
                'costCentreId': costCentreId,
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
     * @param costCentreId
     * @param tenantId
     * @param xApiVersion
     * @returns CostCentreDtoEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2AccountingServiceCostCentresCostCentres(
        costCentreId: string,
        tenantId?: TenantId,
        xApiVersion?: string,
    ): CancelablePromise<CostCentreDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/CostCentres/CostCentres/{costCentreId}',
            path: {
                'costCentreId': costCentreId,
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
     * @returns CostCentreGroupDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceCostCentresCostCentreGroups(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<CostCentreGroupDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/CostCentres/CostCentreGroups',
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
     * @returns CostCentreGroupDtoEnvelope Created
     * @throws ApiError
     */
    public static postApiV2AccountingServiceCostCentresCostCentreGroups(
        tenantId?: TenantId,
        xApiVersion?: string,
        requestBody?: CostCentreGroupCreateDto,
    ): CancelablePromise<CostCentreGroupDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/CostCentres/CostCentreGroups',
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
    public static getApiV2AccountingServiceCostCentresCostCentreGroupsCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/CostCentres/CostCentreGroups/Count',
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
     * @param costCentreGroupId
     * @param tenantId
     * @param xApiVersion
     * @returns CostCentreGroupDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceCostCentresCostCentreGroups1(
        costCentreGroupId: string,
        tenantId?: TenantId,
        xApiVersion?: string,
    ): CancelablePromise<CostCentreGroupDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/CostCentres/CostCentreGroups/{costCentreGroupId}',
            path: {
                'costCentreGroupId': costCentreGroupId,
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
     * @param costCentreGroupId
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns CostCentreGroupDtoEnvelope OK
     * @throws ApiError
     */
    public static putApiV2AccountingServiceCostCentresCostCentreGroups(
        costCentreGroupId: string,
        tenantId?: TenantId,
        xApiVersion?: string,
        requestBody?: CostCentreGroupUpdateDto,
    ): CancelablePromise<CostCentreGroupDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/CostCentres/CostCentreGroups/{costCentreGroupId}',
            path: {
                'costCentreGroupId': costCentreGroupId,
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
     * @param costCentreGroupId
     * @param tenantId
     * @param xApiVersion
     * @returns CostCentreGroupDtoEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2AccountingServiceCostCentresCostCentreGroups(
        costCentreGroupId: string,
        tenantId?: TenantId,
        xApiVersion?: string,
    ): CancelablePromise<CostCentreGroupDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/CostCentres/CostCentreGroups/{costCentreGroupId}',
            path: {
                'costCentreGroupId': costCentreGroupId,
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
     * @returns CostCentreBudgetDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceCostCentresCostCentreBudgets(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<CostCentreBudgetDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/CostCentres/CostCentreBudgets',
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
     * @returns CostCentreBudgetDtoEnvelope Created
     * @throws ApiError
     */
    public static postApiV2AccountingServiceCostCentresCostCentreBudgets(
        tenantId?: TenantId,
        xApiVersion?: string,
        requestBody?: CostCentreBudgetCreateDto,
    ): CancelablePromise<CostCentreBudgetDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/CostCentres/CostCentreBudgets',
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
     * @param costCentreBudgetId
     * @param tenantId
     * @param xApiVersion
     * @returns CostCentreBudgetDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceCostCentresCostCentreBudgets1(
        costCentreBudgetId: string,
        tenantId?: TenantId,
        xApiVersion?: string,
    ): CancelablePromise<CostCentreBudgetDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/CostCentres/CostCentreBudgets/{costCentreBudgetId}',
            path: {
                'costCentreBudgetId': costCentreBudgetId,
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
     * @param costCentreBudgetId
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns CostCentreBudgetDtoEnvelope OK
     * @throws ApiError
     */
    public static putApiV2AccountingServiceCostCentresCostCentreBudgets(
        costCentreBudgetId: string,
        tenantId?: TenantId,
        xApiVersion?: string,
        requestBody?: CostCentreBudgetUpdateDto,
    ): CancelablePromise<CostCentreBudgetDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/CostCentres/CostCentreBudgets/{costCentreBudgetId}',
            path: {
                'costCentreBudgetId': costCentreBudgetId,
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
     * @param costCentreBudgetId
     * @param tenantId
     * @param xApiVersion
     * @returns CostCentreBudgetDtoEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2AccountingServiceCostCentresCostCentreBudgets(
        costCentreBudgetId: string,
        tenantId?: TenantId,
        xApiVersion?: string,
    ): CancelablePromise<CostCentreBudgetDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/CostCentres/CostCentreBudgets/{costCentreBudgetId}',
            path: {
                'costCentreBudgetId': costCentreBudgetId,
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
