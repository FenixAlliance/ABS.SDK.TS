"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class OrdersService {
    /**
     * @param cartId
     * @returns OrderDtoEnvelope OK
     * @throws ApiError
     */
    static postApiV2OrdersServiceOrdersSubmitCart(cartId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getOrdersAsync(tenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2OrdersServiceOrders(tenantId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2OrdersServiceOrdersExtended(tenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2OrdersServiceOrdersCount(tenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getOrderAsync(tenantId, orderId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2OrdersServiceOrders(tenantId, orderId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteApiV2OrdersServiceOrders(tenantId, orderId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2OrdersServiceOrdersCalculate(tenantId, orderId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2OrdersServiceOrdersLines(tenantId, orderId, itemId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2OrdersServiceOrdersLines(tenantId, orderId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2OrdersServiceOrdersLinesCount(tenantId, orderId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2OrdersServiceOrdersLines1(tenantId, orderId, orderLineId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2OrdersServiceOrdersLines(tenantId, orderId, orderLineId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteApiV2OrdersServiceOrdersLines(tenantId, orderId, orderLineId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2OrdersServiceOrdersLinesCalculate(tenantId, orderId, orderLineId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.OrdersService = OrdersService;
