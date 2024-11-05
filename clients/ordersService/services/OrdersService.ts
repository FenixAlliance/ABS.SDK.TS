/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { ExtendedOrderDtoListEnvelope } from '../models/ExtendedOrderDtoListEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { OrderCreateDto } from '../models/OrderCreateDto';
import type { OrderDtoEnvelope } from '../models/OrderDtoEnvelope';
import type { OrderDtoListEnvelope } from '../models/OrderDtoListEnvelope';
import type { OrderLineCreateDto } from '../models/OrderLineCreateDto';
import type { OrderLineDtoEnvelope } from '../models/OrderLineDtoEnvelope';
import type { OrderLineDtoListEnvelope } from '../models/OrderLineDtoListEnvelope';
import type { OrderLineUpdateDto } from '../models/OrderLineUpdateDto';
import type { OrderUpdateDto } from '../models/OrderUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrdersService {
    /**
     * @param cartId
     * @returns OrderDtoEnvelope OK
     * @throws ApiError
     */
    public static postApiV2OrdersServiceOrdersSubmitCart(
        cartId: string,
    ): CancelablePromise<OrderDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/OrdersService/Orders/SubmitCart',
            query: {
                'cartId': cartId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @returns OrderDtoListEnvelope OK
     * @throws ApiError
     */
    public static getOrdersAsync(
        tenantId: string,
    ): CancelablePromise<OrderDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/OrdersService/Orders',
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
    public static postApiV2OrdersServiceOrders(
        tenantId: string,
        requestBody?: OrderCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/OrdersService/Orders',
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
     * @returns ExtendedOrderDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2OrdersServiceOrdersExtended(
        tenantId: string,
    ): CancelablePromise<ExtendedOrderDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/OrdersService/Orders/Extended',
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
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2OrdersServiceOrdersCount(
        tenantId: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/OrdersService/Orders/Count',
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
     * @param orderId
     * @returns OrderDtoEnvelope OK
     * @throws ApiError
     */
    public static getOrderAsync(
        tenantId: string,
        orderId: string,
    ): CancelablePromise<OrderDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/OrdersService/Orders/{orderId}',
            path: {
                'orderId': orderId,
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
     * @param orderId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2OrdersServiceOrders(
        tenantId: string,
        orderId: string,
        requestBody?: OrderUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/OrdersService/Orders/{orderId}',
            path: {
                'orderId': orderId,
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
     * @param orderId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2OrdersServiceOrders(
        tenantId: string,
        orderId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/OrdersService/Orders/{orderId}',
            path: {
                'orderId': orderId,
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
     * @param orderId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2OrdersServiceOrdersCalculate(
        tenantId: string,
        orderId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/OrdersService/Orders/{orderId}/Calculate',
            path: {
                'orderId': orderId,
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
     * @param orderId
     * @param itemId
     * @returns OrderLineDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2OrdersServiceOrdersLines(
        tenantId: string,
        orderId: string,
        itemId?: string,
    ): CancelablePromise<OrderLineDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/OrdersService/Orders/{orderId}/Lines',
            path: {
                'orderId': orderId,
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
     * @param orderId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static postApiV2OrdersServiceOrdersLines(
        tenantId: string,
        orderId: string,
        requestBody?: OrderLineCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/OrdersService/Orders/{orderId}/Lines',
            path: {
                'orderId': orderId,
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
     * @param orderId
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2OrdersServiceOrdersLinesCount(
        tenantId: string,
        orderId: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/OrdersService/Orders/{orderId}/Lines/Count',
            path: {
                'orderId': orderId,
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
     * @param orderId
     * @param orderLineId
     * @returns OrderLineDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2OrdersServiceOrdersLines1(
        tenantId: string,
        orderId: string,
        orderLineId: string,
    ): CancelablePromise<OrderLineDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/OrdersService/Orders/{orderId}/Lines/{orderLineId}',
            path: {
                'orderId': orderId,
                'orderLineId': orderLineId,
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
     * @param orderId
     * @param orderLineId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2OrdersServiceOrdersLines(
        tenantId: string,
        orderId: string,
        orderLineId: string,
        requestBody?: OrderLineUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/OrdersService/Orders/{orderId}/Lines/{orderLineId}',
            path: {
                'orderId': orderId,
                'orderLineId': orderLineId,
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
     * @param orderId
     * @param orderLineId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2OrdersServiceOrdersLines(
        tenantId: string,
        orderId: string,
        orderLineId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/OrdersService/Orders/{orderId}/Lines/{orderLineId}',
            path: {
                'orderId': orderId,
                'orderLineId': orderLineId,
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
     * @param orderId
     * @param orderLineId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2OrdersServiceOrdersLinesCalculate(
        tenantId: string,
        orderId: string,
        orderLineId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/OrdersService/Orders/{orderId}/Lines/{orderLineId}/Calculate',
            path: {
                'orderId': orderId,
                'orderLineId': orderLineId,
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
