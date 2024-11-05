"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class QuotesService {
    /**
     * @param tenantId
     * @returns QuoteDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2QuotesServiceQuotes(tenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/QuotesService/Quotes',
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
    static postApiV2QuotesServiceQuotes(tenantId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/QuotesService/Quotes',
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
    static getApiV2QuotesServiceQuotesCount(tenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/QuotesService/Quotes/Count',
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
     * @returns ExtendedQuoteDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2QuotesServiceQuotesExtended(tenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/QuotesService/Quotes/Extended',
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
     * @param quoteId
     * @returns QuoteDtoEnvelope OK
     * @throws ApiError
     */
    static getQuoteAsync(tenantId, quoteId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/QuotesService/Quotes/{quoteId}',
            path: {
                'quoteId': quoteId,
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
     * @param quoteId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2QuotesServiceQuotes(tenantId, quoteId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/QuotesService/Quotes/{quoteId}',
            path: {
                'quoteId': quoteId,
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
     * @param quoteId
     * @param tenantId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2QuotesServiceQuotes(quoteId, tenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/QuotesService/Quotes/{quoteId}',
            path: {
                'quoteId': quoteId,
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
     * @param quoteId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2QuotesServiceQuotesCalculate(tenantId, quoteId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/QuotesService/Quotes/{quoteId}/Calculate',
            path: {
                'quoteId': quoteId,
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
     * @param quoteId
     * @param itemId
     * @returns QuoteLineDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2QuotesServiceQuotesLines(tenantId, quoteId, itemId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/QuotesService/Quotes/{quoteId}/Lines',
            path: {
                'quoteId': quoteId,
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
     * @param quoteId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static postApiV2QuotesServiceQuotesLines(tenantId, quoteId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/QuotesService/Quotes/{quoteId}/Lines',
            path: {
                'quoteId': quoteId,
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
     * @param quoteId
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2QuotesServiceQuotesLinesCount(tenantId, quoteId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/QuotesService/Quotes/{quoteId}/Lines/Count',
            path: {
                'quoteId': quoteId,
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
     * @param quoteId
     * @param quoteLineId
     * @returns QuoteLineDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2QuotesServiceQuotesLines1(tenantId, quoteId, quoteLineId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/QuotesService/Quotes/{quoteId}/Lines/{quoteLineId}',
            path: {
                'quoteId': quoteId,
                'quoteLineId': quoteLineId,
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
     * @param quoteId
     * @param quoteLineId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2QuotesServiceQuotesLines(tenantId, quoteId, quoteLineId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/QuotesService/Quotes/{quoteId}/Lines/{quoteLineId}',
            path: {
                'quoteId': quoteId,
                'quoteLineId': quoteLineId,
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
     * @param quoteId
     * @param quoteLineId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2QuotesServiceQuotesLines(tenantId, quoteId, quoteLineId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/QuotesService/Quotes/{quoteId}/Lines/{quoteLineId}',
            path: {
                'quoteId': quoteId,
                'quoteLineId': quoteLineId,
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
     * @param quoteId
     * @param quoteLineId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2QuotesServiceQuotesLinesCalculate(tenantId, quoteId, quoteLineId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/QuotesService/Quotes/{quoteId}/Lines/{quoteLineId}/Calculate',
            path: {
                'quoteId': quoteId,
                'quoteLineId': quoteLineId,
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
exports.QuotesService = QuotesService;
