/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { ItemPriceCreateDto } from '../models/ItemPriceCreateDto';
import type { ItemPriceDtoEnvelope } from '../models/ItemPriceDtoEnvelope';
import type { ItemPriceDtoListEnvelope } from '../models/ItemPriceDtoListEnvelope';
import type { ItemPriceUpdateDto } from '../models/ItemPriceUpdateDto';
import type { PriceListCreateDto } from '../models/PriceListCreateDto';
import type { PriceListDtoEnvelope } from '../models/PriceListDtoEnvelope';
import type { PriceListDtoListEnvelope } from '../models/PriceListDtoListEnvelope';
import type { PriceListUpdateDto } from '../models/PriceListUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PriceListsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns PriceListDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2PricingServicePriceLists(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<PriceListDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/PricingService/PriceLists',
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
    public static postApiV2PricingServicePriceLists(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: PriceListCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/PricingService/PriceLists',
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
    public static getApiV2PricingServicePriceListsCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/PricingService/PriceLists/Count',
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
     * @param priceListId
     * @param xApiVersion
     * @returns PriceListDtoEnvelope OK
     * @throws ApiError
     */
    public static getPriceListAsync(
        tenantId: string,
        priceListId: string,
        xApiVersion?: string,
    ): CancelablePromise<PriceListDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/PricingService/PriceLists/{priceListId}',
            path: {
                'priceListId': priceListId,
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
     * @param priceListId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2PricingServicePriceLists(
        tenantId: string,
        priceListId: string,
        xApiVersion?: string,
        requestBody?: PriceListUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/PricingService/PriceLists/{priceListId}',
            path: {
                'priceListId': priceListId,
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
     * @param priceListId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2PricingServicePriceLists(
        tenantId: string,
        priceListId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/PricingService/PriceLists/{priceListId}',
            path: {
                'priceListId': priceListId,
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
     * @param priceListId
     * @param itemId
     * @param xApiVersion
     * @returns ItemPriceDtoListEnvelope OK
     * @throws ApiError
     */
    public static getPriceListPricesAsync(
        tenantId: string,
        priceListId: string,
        itemId?: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemPriceDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/PricingService/PriceLists/{priceListId}/Prices',
            path: {
                'priceListId': priceListId,
            },
            headers: {
                'x-api-version': xApiVersion,
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
     * @param priceListId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static postApiV2PricingServicePriceListsPrices(
        tenantId: string,
        priceListId: string,
        xApiVersion?: string,
        requestBody?: ItemPriceCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/PricingService/PriceLists/{priceListId}/Prices',
            path: {
                'priceListId': priceListId,
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
     * @param priceListId
     * @param priceId
     * @param xApiVersion
     * @returns ItemPriceDtoEnvelope OK
     * @throws ApiError
     */
    public static getPriceListPriceAsync(
        tenantId: string,
        priceListId: string,
        priceId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemPriceDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/PricingService/PriceLists/{priceListId}/Prices/{priceId}',
            path: {
                'priceListId': priceListId,
                'priceId': priceId,
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
     * @param priceListId
     * @param priceId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2PricingServicePriceListsPrices(
        tenantId: string,
        priceListId: string,
        priceId: string,
        xApiVersion?: string,
        requestBody?: ItemPriceUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/PricingService/PriceLists/{priceListId}/Prices/{priceId}',
            path: {
                'priceListId': priceListId,
                'priceId': priceId,
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
     * @param priceListId
     * @param priceId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2PricingServicePriceListsPrices(
        tenantId: string,
        priceListId: string,
        priceId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/PricingService/PriceLists/{priceListId}/Prices/{priceId}',
            path: {
                'priceListId': priceListId,
                'priceId': priceId,
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
