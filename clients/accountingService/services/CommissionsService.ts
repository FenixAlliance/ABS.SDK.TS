/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommissionCreateDto } from '../models/CommissionCreateDto';
import type { CommissionDto } from '../models/CommissionDto';
import type { CommissionDtoListEnvelope } from '../models/CommissionDtoListEnvelope';
import type { CommissionUpdateDto } from '../models/CommissionUpdateDto';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { PaymentCommissionCreateDto } from '../models/PaymentCommissionCreateDto';
import type { PaymentCommissionDto } from '../models/PaymentCommissionDto';
import type { PaymentCommissionDtoListEnvelope } from '../models/PaymentCommissionDtoListEnvelope';
import type { PaymentCommissionUpdateDto } from '../models/PaymentCommissionUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CommissionsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns CommissionDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceCommissionsCommissions(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<CommissionDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Commissions/Commissions',
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
     * @returns CommissionDto Created
     * @throws ApiError
     */
    public static postApiV2AccountingServiceCommissionsCommissions(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: CommissionCreateDto,
    ): CancelablePromise<CommissionDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Commissions/Commissions',
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
    public static getApiV2AccountingServiceCommissionsCommissionsCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Commissions/Commissions/Count',
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
     * @param commissionId
     * @param xApiVersion
     * @returns CommissionDto OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceCommissionsCommissions1(
        tenantId: string,
        commissionId: string,
        xApiVersion?: string,
    ): CancelablePromise<CommissionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Commissions/Commissions/{commissionId}',
            path: {
                'commissionId': commissionId,
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
     * @param commissionId
     * @param xApiVersion
     * @param requestBody
     * @returns CommissionDto OK
     * @throws ApiError
     */
    public static putApiV2AccountingServiceCommissionsCommissions(
        tenantId: string,
        commissionId: string,
        xApiVersion?: string,
        requestBody?: CommissionUpdateDto,
    ): CancelablePromise<CommissionDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Commissions/Commissions/{commissionId}',
            path: {
                'commissionId': commissionId,
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
     * @param commissionId
     * @param xApiVersion
     * @returns CommissionDto OK
     * @throws ApiError
     */
    public static deleteApiV2AccountingServiceCommissionsCommissions(
        tenantId: string,
        commissionId: string,
        xApiVersion?: string,
    ): CancelablePromise<CommissionDto> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Commissions/Commissions/{commissionId}',
            path: {
                'commissionId': commissionId,
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
     * @returns PaymentCommissionDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceCommissionsPaymentCommissions(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<PaymentCommissionDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Commissions/PaymentCommissions',
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
     * @returns PaymentCommissionDto Created
     * @throws ApiError
     */
    public static postApiV2AccountingServiceCommissionsPaymentCommissions(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: PaymentCommissionCreateDto,
    ): CancelablePromise<PaymentCommissionDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Commissions/PaymentCommissions',
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
    public static getApiV2AccountingServiceCommissionsPaymentCommissionsCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Commissions/PaymentCommissions/Count',
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
     * @param paymentcommissionId
     * @param xApiVersion
     * @returns PaymentCommissionDto OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceCommissionsPaymentCommissions1(
        tenantId: string,
        paymentcommissionId: string,
        xApiVersion?: string,
    ): CancelablePromise<PaymentCommissionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Commissions/PaymentCommissions/{paymentcommissionId}',
            path: {
                'paymentcommissionId': paymentcommissionId,
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
     * @param paymentcommissionId
     * @param xApiVersion
     * @param requestBody
     * @returns PaymentCommissionDto OK
     * @throws ApiError
     */
    public static putApiV2AccountingServiceCommissionsPaymentCommissions(
        tenantId: string,
        paymentcommissionId: string,
        xApiVersion?: string,
        requestBody?: PaymentCommissionUpdateDto,
    ): CancelablePromise<PaymentCommissionDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Commissions/PaymentCommissions/{paymentcommissionId}',
            path: {
                'paymentcommissionId': paymentcommissionId,
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
     * @param paymentcommissionId
     * @param xApiVersion
     * @returns PaymentCommissionDto OK
     * @throws ApiError
     */
    public static deleteApiV2AccountingServiceCommissionsPaymentCommissions(
        tenantId: string,
        paymentcommissionId: string,
        xApiVersion?: string,
    ): CancelablePromise<PaymentCommissionDto> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Commissions/PaymentCommissions/{paymentcommissionId}',
            path: {
                'paymentcommissionId': paymentcommissionId,
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
