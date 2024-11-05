/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DealUnitFlowCreateDto } from '../models/DealUnitFlowCreateDto';
import type { DealUnitFlowDtoEnvelope } from '../models/DealUnitFlowDtoEnvelope';
import type { DealUnitFlowDtoListEnvelope } from '../models/DealUnitFlowDtoListEnvelope';
import type { DealUnitFlowStageCreateDto } from '../models/DealUnitFlowStageCreateDto';
import type { DealUnitFlowStageDtoEnvelope } from '../models/DealUnitFlowStageDtoEnvelope';
import type { DealUnitFlowStageDtoListEnvelope } from '../models/DealUnitFlowStageDtoListEnvelope';
import type { DealUnitFlowStageUpdateDto } from '../models/DealUnitFlowStageUpdateDto';
import type { DealUnitFlowUpdateDto } from '../models/DealUnitFlowUpdateDto';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DealUnitFlowsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns DealUnitFlowDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2DealsServiceDealUnitFlows(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<DealUnitFlowDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnitFlows',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static postApiV2DealsServiceDealUnitFlows(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: DealUnitFlowCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/DealsService/DealUnitFlows',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2DealsServiceDealUnitFlowsCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnitFlows/Count',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param dealUnitFlowId
     * @param xApiVersion
     * @returns DealUnitFlowDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2DealsServiceDealUnitFlows1(
        tenantId: string,
        dealUnitFlowId: string,
        xApiVersion?: string,
    ): CancelablePromise<DealUnitFlowDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}',
            path: {
                'dealUnitFlowId': dealUnitFlowId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param dealUnitFlowId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2DealsServiceDealUnitFlows(
        tenantId: string,
        dealUnitFlowId: string,
        xApiVersion?: string,
        requestBody?: DealUnitFlowUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}',
            path: {
                'dealUnitFlowId': dealUnitFlowId,
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
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param dealUnitFlowId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2DealsServiceDealUnitFlows(
        tenantId: string,
        dealUnitFlowId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}',
            path: {
                'dealUnitFlowId': dealUnitFlowId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param dealUnitFlowId
     * @param xApiVersion
     * @returns DealUnitFlowStageDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2DealsServiceDealUnitFlowsStages(
        tenantId: string,
        dealUnitFlowId: string,
        xApiVersion?: string,
    ): CancelablePromise<DealUnitFlowStageDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages',
            path: {
                'dealUnitFlowId': dealUnitFlowId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param dealUnitFlowId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static postApiV2DealsServiceDealUnitFlowsStages(
        tenantId: string,
        dealUnitFlowId: string,
        xApiVersion?: string,
        requestBody?: DealUnitFlowStageCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages',
            path: {
                'dealUnitFlowId': dealUnitFlowId,
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
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param dealUnitFlowId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2DealsServiceDealUnitFlowsStagesCount(
        tenantId: string,
        dealUnitFlowId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages/Count',
            path: {
                'dealUnitFlowId': dealUnitFlowId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param dealUnitFlowId
     * @param dealUnitFlowStageId
     * @param xApiVersion
     * @returns DealUnitFlowStageDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2DealsServiceDealUnitFlowsStages1(
        tenantId: string,
        dealUnitFlowId: string,
        dealUnitFlowStageId: string,
        xApiVersion?: string,
    ): CancelablePromise<DealUnitFlowStageDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages/{dealUnitFlowStageId}',
            path: {
                'dealUnitFlowId': dealUnitFlowId,
                'dealUnitFlowStageId': dealUnitFlowStageId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param dealUnitFlowId
     * @param dealUnitFlowStageId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2DealsServiceDealUnitFlowsStages(
        tenantId: string,
        dealUnitFlowId: string,
        dealUnitFlowStageId: string,
        xApiVersion?: string,
        requestBody?: DealUnitFlowStageUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages/{dealUnitFlowStageId}',
            path: {
                'dealUnitFlowId': dealUnitFlowId,
                'dealUnitFlowStageId': dealUnitFlowStageId,
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
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param dealUnitFlowId
     * @param dealUnitFlowStageId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2DealsServiceDealUnitFlowsStages(
        tenantId: string,
        dealUnitFlowId: string,
        dealUnitFlowStageId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages/{dealUnitFlowStageId}',
            path: {
                'dealUnitFlowId': dealUnitFlowId,
                'dealUnitFlowStageId': dealUnitFlowStageId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
