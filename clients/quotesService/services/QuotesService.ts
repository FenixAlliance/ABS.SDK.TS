/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { ExtendedQuoteDtoListEnvelope } from '../models/ExtendedQuoteDtoListEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { QuoteCreateDto } from '../models/QuoteCreateDto';
import type { QuoteDtoEnvelope } from '../models/QuoteDtoEnvelope';
import type { QuoteDtoListEnvelope } from '../models/QuoteDtoListEnvelope';
import type { QuoteLineCreateDto } from '../models/QuoteLineCreateDto';
import type { QuoteLineDtoEnvelope } from '../models/QuoteLineDtoEnvelope';
import type { QuoteLineDtoListEnvelope } from '../models/QuoteLineDtoListEnvelope';
import type { QuoteLineUpdateDto } from '../models/QuoteLineUpdateDto';
import type { QuoteUpdateDto } from '../models/QuoteUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class QuotesService {
    /**
     * @param tenantId
     * @returns QuoteDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2QuotesServiceQuotes(
        tenantId: string,
    ): CancelablePromise<QuoteDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2QuotesServiceQuotes(
        tenantId: string,
        requestBody?: QuoteCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2QuotesServiceQuotesCount(
        tenantId: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getApiV2QuotesServiceQuotesExtended(
        tenantId: string,
    ): CancelablePromise<ExtendedQuoteDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getQuoteAsync(
        tenantId: string,
        quoteId: string,
    ): CancelablePromise<QuoteDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static putApiV2QuotesServiceQuotes(
        tenantId: string,
        quoteId: string,
        requestBody?: QuoteUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2QuotesServiceQuotes(
        quoteId: string,
        tenantId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static putApiV2QuotesServiceQuotesCalculate(
        tenantId: string,
        quoteId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2QuotesServiceQuotesLines(
        tenantId: string,
        quoteId: string,
        itemId?: string,
    ): CancelablePromise<QuoteLineDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2QuotesServiceQuotesLines(
        tenantId: string,
        quoteId: string,
        requestBody?: QuoteLineCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2QuotesServiceQuotesLinesCount(
        tenantId: string,
        quoteId: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getApiV2QuotesServiceQuotesLines1(
        tenantId: string,
        quoteId: string,
        quoteLineId: string,
    ): CancelablePromise<QuoteLineDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static putApiV2QuotesServiceQuotesLines(
        tenantId: string,
        quoteId: string,
        quoteLineId: string,
        requestBody?: QuoteLineUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2QuotesServiceQuotesLines(
        tenantId: string,
        quoteId: string,
        quoteLineId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static putApiV2QuotesServiceQuotesLinesCalculate(
        tenantId: string,
        quoteId: string,
        quoteLineId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
