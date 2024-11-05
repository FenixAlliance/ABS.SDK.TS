/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DealUnitCreateDto } from '../models/DealUnitCreateDto';
import type { DealUnitDtoEnvelope } from '../models/DealUnitDtoEnvelope';
import type { DealUnitDtoListEnvelope } from '../models/DealUnitDtoListEnvelope';
import type { DealUnitLineCreateDto } from '../models/DealUnitLineCreateDto';
import type { DealUnitLineDtoEnvelope } from '../models/DealUnitLineDtoEnvelope';
import type { DealUnitLineDtoListEnvelope } from '../models/DealUnitLineDtoListEnvelope';
import type { DealUnitLineUpdateDto } from '../models/DealUnitLineUpdateDto';
import type { DealUnitUpdateDto } from '../models/DealUnitUpdateDto';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { ExtendedDealUnitDtoEnvelope } from '../models/ExtendedDealUnitDtoEnvelope';
import type { ExtendedDealUnitDtoListEnvelope } from '../models/ExtendedDealUnitDtoListEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DealUnitsService {
    /**
     * @param tenantId
     * @returns DealUnitDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2DealsServiceDealUnits(
        tenantId: string,
    ): CancelablePromise<DealUnitDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnits',
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
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static postApiV2DealsServiceDealUnits(
        tenantId: string,
        requestBody?: DealUnitCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/DealsService/DealUnits',
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
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2DealsServiceDealUnitsCount(
        tenantId: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnits/Count',
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
     * @returns ExtendedDealUnitDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2DealsServiceDealUnitsExtended(
        tenantId: string,
    ): CancelablePromise<ExtendedDealUnitDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnits/Extended',
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
     * @param dealUnitId
     * @returns DealUnitDtoEnvelope OK
     * @throws ApiError
     */
    public static getDealUnitAsync(
        tenantId: string,
        dealUnitId: string,
    ): CancelablePromise<DealUnitDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnits/{dealUnitId}',
            path: {
                'dealUnitId': dealUnitId,
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
     * @param dealUnitId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2DealsServiceDealUnits(
        tenantId: string,
        dealUnitId: string,
        requestBody?: DealUnitUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/DealsService/DealUnits/{dealUnitId}',
            path: {
                'dealUnitId': dealUnitId,
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
     * @param dealUnitId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2DealsServiceDealUnits(
        tenantId: string,
        dealUnitId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/DealsService/DealUnits/{dealUnitId}',
            path: {
                'dealUnitId': dealUnitId,
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
     * @param dealUnitId
     * @returns ExtendedDealUnitDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2DealsServiceDealUnitsExtended1(
        tenantId: string,
        dealUnitId: string,
    ): CancelablePromise<ExtendedDealUnitDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnits/{dealUnitId}/Extended',
            path: {
                'dealUnitId': dealUnitId,
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
     * @param dealUnitId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2DealsServiceDealUnitsCalculate(
        tenantId: string,
        dealUnitId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/DealsService/DealUnits/{dealUnitId}/Calculate',
            path: {
                'dealUnitId': dealUnitId,
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
     * @param dealUnitId
     * @param itemId
     * @returns DealUnitLineDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2DealsServiceDealUnitsLines(
        tenantId: string,
        dealUnitId: string,
        itemId?: string,
    ): CancelablePromise<DealUnitLineDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnits/{dealUnitId}/Lines',
            path: {
                'dealUnitId': dealUnitId,
            },
            query: {
                'tenantId': tenantId,
                'itemId': itemId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param dealUnitId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static postApiV2DealsServiceDealUnitsLines(
        tenantId: string,
        dealUnitId: string,
        requestBody?: DealUnitLineCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/DealsService/DealUnits/{dealUnitId}/Lines',
            path: {
                'dealUnitId': dealUnitId,
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
     * @param dealUnitId
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2DealsServiceDealUnitsLinesCount(
        tenantId: string,
        dealUnitId: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/Count',
            path: {
                'dealUnitId': dealUnitId,
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
     * @param dealUnitId
     * @param dealUnitLineId
     * @returns DealUnitLineDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2DealsServiceDealUnitsLines1(
        tenantId: string,
        dealUnitId: string,
        dealUnitLineId: string,
    ): CancelablePromise<DealUnitLineDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/{dealUnitLineId}',
            path: {
                'dealUnitId': dealUnitId,
                'dealUnitLineId': dealUnitLineId,
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
     * @param dealUnitId
     * @param dealUnitLineId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2DealsServiceDealUnitsLines(
        tenantId: string,
        dealUnitId: string,
        dealUnitLineId: string,
        requestBody?: DealUnitLineUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/{dealUnitLineId}',
            path: {
                'dealUnitId': dealUnitId,
                'dealUnitLineId': dealUnitLineId,
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
     * @param dealUnitId
     * @param dealUnitLineId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2DealsServiceDealUnitsLines(
        tenantId: string,
        dealUnitId: string,
        dealUnitLineId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/{dealUnitLineId}',
            path: {
                'dealUnitId': dealUnitId,
                'dealUnitLineId': dealUnitLineId,
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
     * @param dealUnitId
     * @param dealUnitLineId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2DealsServiceDealUnitsLinesCalculate(
        tenantId: string,
        dealUnitId: string,
        dealUnitLineId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/{dealUnitLineId}/Calculate',
            path: {
                'dealUnitId': dealUnitId,
                'dealUnitLineId': dealUnitLineId,
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
