/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Int32Envelope } from '../models/Int32Envelope';
import type { ShareClassCreateDto } from '../models/ShareClassCreateDto';
import type { ShareClassDtoEnvelope } from '../models/ShareClassDtoEnvelope';
import type { ShareClassDtoListEnvelope } from '../models/ShareClassDtoListEnvelope';
import type { ShareClassUpdateDto } from '../models/ShareClassUpdateDto';
import type { ShareIssuanceCreateDto } from '../models/ShareIssuanceCreateDto';
import type { ShareIssuanceDtoEnvelope } from '../models/ShareIssuanceDtoEnvelope';
import type { ShareIssuanceDtoListEnvelope } from '../models/ShareIssuanceDtoListEnvelope';
import type { ShareIssuanceUpdateDto } from '../models/ShareIssuanceUpdateDto';
import type { ShareTransferCreateDto } from '../models/ShareTransferCreateDto';
import type { ShareTransferDtoEnvelope } from '../models/ShareTransferDtoEnvelope';
import type { ShareTransferDtoListEnvelope } from '../models/ShareTransferDtoListEnvelope';
import type { ShareTransferReasonCreateDto } from '../models/ShareTransferReasonCreateDto';
import type { ShareTransferReasonDtoEnvelope } from '../models/ShareTransferReasonDtoEnvelope';
import type { ShareTransferReasonDtoListEnvelope } from '../models/ShareTransferReasonDtoListEnvelope';
import type { ShareTransferReasonUpdateDto } from '../models/ShareTransferReasonUpdateDto';
import type { ShareTransferUpdateDto } from '../models/ShareTransferUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SharesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns ShareClassDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceSharesShareClasses(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ShareClassDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Shares/ShareClasses',
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
     * @returns ShareClassDtoEnvelope Created
     * @throws ApiError
     */
    public static postApiV2AccountingServiceSharesShareClasses(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: ShareClassCreateDto,
    ): CancelablePromise<ShareClassDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Shares/ShareClasses',
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
    public static getApiV2AccountingServiceSharesShareClassesCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Shares/ShareClasses/Count',
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
     * @param shareClassId
     * @param xApiVersion
     * @returns ShareClassDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceSharesShareClasses1(
        tenantId: string,
        shareClassId: string,
        xApiVersion?: string,
    ): CancelablePromise<ShareClassDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Shares/ShareClasses/{shareClassId}',
            path: {
                'shareClassId': shareClassId,
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
     * @param shareClassId
     * @param xApiVersion
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static putApiV2AccountingServiceSharesShareClasses(
        tenantId: string,
        shareClassId: string,
        xApiVersion?: string,
        requestBody?: ShareClassUpdateDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Shares/ShareClasses/{shareClassId}',
            path: {
                'shareClassId': shareClassId,
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
     * @param shareClassId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    public static deleteApiV2AccountingServiceSharesShareClasses(
        tenantId: string,
        shareClassId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Shares/ShareClasses/{shareClassId}',
            path: {
                'shareClassId': shareClassId,
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
     * @returns ShareIssuanceDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceSharesIssuances(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ShareIssuanceDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Shares/Issuances',
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
     * @returns ShareIssuanceDtoEnvelope Created
     * @throws ApiError
     */
    public static postApiV2AccountingServiceSharesIssuances(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: ShareIssuanceCreateDto,
    ): CancelablePromise<ShareIssuanceDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Shares/Issuances',
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
    public static getApiV2AccountingServiceSharesIssuancesCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Shares/Issuances/Count',
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
     * @param shareIssuanceId
     * @param xApiVersion
     * @returns ShareIssuanceDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceSharesIssuances1(
        tenantId: string,
        shareIssuanceId: string,
        xApiVersion?: string,
    ): CancelablePromise<ShareIssuanceDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Shares/Issuances/{shareIssuanceId}',
            path: {
                'shareIssuanceId': shareIssuanceId,
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
     * @param shareIssuanceId
     * @param xApiVersion
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static putApiV2AccountingServiceSharesIssuances(
        tenantId: string,
        shareIssuanceId: string,
        xApiVersion?: string,
        requestBody?: ShareIssuanceUpdateDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Shares/Issuances/{shareIssuanceId}',
            path: {
                'shareIssuanceId': shareIssuanceId,
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
     * @param shareIssuanceId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    public static deleteApiV2AccountingServiceSharesIssuances(
        tenantId: string,
        shareIssuanceId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Shares/Issuances/{shareIssuanceId}',
            path: {
                'shareIssuanceId': shareIssuanceId,
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
     * @returns ShareTransferDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceSharesTransfers(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ShareTransferDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Shares/Transfers',
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
     * @returns ShareTransferDtoEnvelope Created
     * @throws ApiError
     */
    public static postApiV2AccountingServiceSharesTransfers(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: ShareTransferCreateDto,
    ): CancelablePromise<ShareTransferDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Shares/Transfers',
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
    public static getApiV2AccountingServiceSharesTransfersCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Shares/Transfers/Count',
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
     * @param shareTransferId
     * @param xApiVersion
     * @returns ShareTransferDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceSharesTransfers1(
        tenantId: string,
        shareTransferId: string,
        xApiVersion?: string,
    ): CancelablePromise<ShareTransferDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Shares/Transfers/{shareTransferId}',
            path: {
                'shareTransferId': shareTransferId,
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
     * @param shareTransferId
     * @param xApiVersion
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static putApiV2AccountingServiceSharesTransfers(
        tenantId: string,
        shareTransferId: string,
        xApiVersion?: string,
        requestBody?: ShareTransferUpdateDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Shares/Transfers/{shareTransferId}',
            path: {
                'shareTransferId': shareTransferId,
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
     * @param shareTransferId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    public static deleteApiV2AccountingServiceSharesTransfers(
        tenantId: string,
        shareTransferId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Shares/Transfers/{shareTransferId}',
            path: {
                'shareTransferId': shareTransferId,
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
     * @returns ShareTransferReasonDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceSharesTransferReasons(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ShareTransferReasonDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Shares/TransferReasons',
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
     * @returns ShareTransferReasonDtoEnvelope Created
     * @throws ApiError
     */
    public static postApiV2AccountingServiceSharesTransferReasons(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: ShareTransferReasonCreateDto,
    ): CancelablePromise<ShareTransferReasonDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Shares/TransferReasons',
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
            },
        });
    }
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceSharesTransferReasonsCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Shares/TransferReasons/Count',
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
     * @param shareTransferReasonId
     * @param xApiVersion
     * @returns ShareTransferReasonDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceSharesTransferReasons1(
        tenantId: string,
        shareTransferReasonId: string,
        xApiVersion?: string,
    ): CancelablePromise<ShareTransferReasonDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Shares/TransferReasons/{shareTransferReasonId}',
            path: {
                'shareTransferReasonId': shareTransferReasonId,
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
     * @param shareTransferReasonId
     * @param xApiVersion
     * @param requestBody
     * @returns ShareTransferReasonDtoEnvelope OK
     * @throws ApiError
     */
    public static putApiV2AccountingServiceSharesTransferReasons(
        tenantId: string,
        shareTransferReasonId: string,
        xApiVersion?: string,
        requestBody?: ShareTransferReasonUpdateDto,
    ): CancelablePromise<ShareTransferReasonDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Shares/TransferReasons/{shareTransferReasonId}',
            path: {
                'shareTransferReasonId': shareTransferReasonId,
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
            },
        });
    }
    /**
     * @param tenantId
     * @param shareTransferReasonId
     * @param xApiVersion
     * @returns ShareTransferReasonDtoEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2AccountingServiceSharesTransferReasons(
        tenantId: string,
        shareTransferReasonId: string,
        xApiVersion?: string,
    ): CancelablePromise<ShareTransferReasonDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Shares/TransferReasons/{shareTransferReasonId}',
            path: {
                'shareTransferReasonId': shareTransferReasonId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
