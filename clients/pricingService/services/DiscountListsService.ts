/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DiscountCreateDto } from '../models/DiscountCreateDto';
import type { DiscountDtoEnvelope } from '../models/DiscountDtoEnvelope';
import type { DiscountDtoListEnvelope } from '../models/DiscountDtoListEnvelope';
import type { DiscountListCreateDto } from '../models/DiscountListCreateDto';
import type { DiscountListDtoEnvelope } from '../models/DiscountListDtoEnvelope';
import type { DiscountListDtoListEnvelope } from '../models/DiscountListDtoListEnvelope';
import type { DiscountListUpdateDto } from '../models/DiscountListUpdateDto';
import type { DiscountUpdateDto } from '../models/DiscountUpdateDto';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DiscountListsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns DiscountListDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2PricingServiceDiscountLists(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<DiscountListDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/PricingService/DiscountLists',
            headers: {
                'x-api-version': xApiVersion,
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
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2PricingServiceDiscountLists(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: DiscountListCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/PricingService/DiscountLists',
            headers: {
                'x-api-version': xApiVersion,
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
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2PricingServiceDiscountListsCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/PricingService/DiscountLists/Count',
            headers: {
                'x-api-version': xApiVersion,
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
     * @param discountListId
     * @param xApiVersion
     * @returns DiscountListDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2PricingServiceDiscountLists1(
        tenantId: string,
        discountListId: string,
        xApiVersion?: string,
    ): CancelablePromise<DiscountListDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/PricingService/DiscountLists/{discountListId}',
            path: {
                'discountListId': discountListId,
            },
            headers: {
                'x-api-version': xApiVersion,
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
     * @param discountListId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2PricingServiceDiscountLists(
        tenantId: string,
        discountListId: string,
        xApiVersion?: string,
        requestBody?: DiscountListUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/PricingService/DiscountLists/{discountListId}',
            path: {
                'discountListId': discountListId,
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
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param discountListId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    public static deleteApiV2PricingServiceDiscountLists(
        tenantId: string,
        discountListId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/PricingService/DiscountLists/{discountListId}',
            path: {
                'discountListId': discountListId,
            },
            headers: {
                'x-api-version': xApiVersion,
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
     * @param discountListId
     * @param xApiVersion
     * @returns DiscountDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2PricingServiceDiscountListsDiscounts(
        tenantId: string,
        discountListId: string,
        xApiVersion?: string,
    ): CancelablePromise<DiscountDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/PricingService/DiscountLists/{discountListId}/Discounts',
            path: {
                'discountListId': discountListId,
            },
            headers: {
                'x-api-version': xApiVersion,
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
     * @param discountListId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2PricingServiceDiscountListsDiscounts(
        tenantId: string,
        discountListId: string,
        xApiVersion?: string,
        requestBody?: DiscountCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/PricingService/DiscountLists/{discountListId}/Discounts',
            path: {
                'discountListId': discountListId,
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
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param discountListId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2PricingServiceDiscountListsDiscountsCount(
        tenantId: string,
        discountListId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/PricingService/DiscountLists/{discountListId}/Discounts/Count',
            path: {
                'discountListId': discountListId,
            },
            headers: {
                'x-api-version': xApiVersion,
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
     * @param discountListId
     * @param discountListEntryId
     * @param xApiVersion
     * @returns DiscountDtoEnvelope OK
     * @throws ApiError
     */
    public static getDiscountListEntry(
        tenantId: string,
        discountListId: string,
        discountListEntryId: string,
        xApiVersion?: string,
    ): CancelablePromise<DiscountDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/PricingService/DiscountLists/{discountListId}/Discounts/{discountListEntryId}',
            path: {
                'discountListId': discountListId,
                'discountListEntryId': discountListEntryId,
            },
            headers: {
                'x-api-version': xApiVersion,
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
     * @param discountListId
     * @param discountListEntryId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2PricingServiceDiscountListsDiscounts(
        tenantId: string,
        discountListId: string,
        discountListEntryId: string,
        xApiVersion?: string,
        requestBody?: DiscountUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/PricingService/DiscountLists/{discountListId}/Discounts/{discountListEntryId}',
            path: {
                'discountListId': discountListId,
                'discountListEntryId': discountListEntryId,
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
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param discountListId
     * @param discountListEntryId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    public static deleteApiV2PricingServiceDiscountListsDiscounts(
        tenantId: string,
        discountListId: string,
        discountListEntryId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/PricingService/DiscountLists/{discountListId}/Discounts/{discountListEntryId}',
            path: {
                'discountListId': discountListId,
                'discountListEntryId': discountListEntryId,
            },
            headers: {
                'x-api-version': xApiVersion,
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
}
