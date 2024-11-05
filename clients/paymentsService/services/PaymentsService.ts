/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { PaymentCreateDto } from '../models/PaymentCreateDto';
import type { PaymentDtoListEnvelope } from '../models/PaymentDtoListEnvelope';
import type { PaymentUpdateDto } from '../models/PaymentUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PaymentsService {
    /**
     * @deprecated
     * @param paymentId
     * @returns PaymentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2PaymentsServicePaymentsDetails(
        paymentId: string,
    ): CancelablePromise<PaymentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/PaymentsService/Payments/{paymentId}/Details',
            path: {
                'paymentId': paymentId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param paymentId
     * @returns PaymentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2PaymentsServicePayments(
        paymentId: string,
    ): CancelablePromise<PaymentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/PaymentsService/Payments/{paymentId}',
            path: {
                'paymentId': paymentId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param paymentId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2PaymentsServicePayments(
        tenantId: string,
        paymentId: string,
        requestBody?: PaymentUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/PaymentsService/Payments/{paymentId}',
            path: {
                'paymentId': paymentId,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param paymentId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2PaymentsServicePayments(
        tenantId: string,
        paymentId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/PaymentsService/Payments/{paymentId}',
            path: {
                'paymentId': paymentId,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @returns PaymentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2PaymentsServicePayments1(
        tenantId: string,
    ): CancelablePromise<PaymentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/PaymentsService/Payments',
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2PaymentsServicePayments(
        tenantId: string,
        requestBody?: PaymentCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/PaymentsService/Payments',
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
