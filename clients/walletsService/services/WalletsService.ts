/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { ExtendedOrderDtoListEnvelope } from '../models/ExtendedOrderDtoListEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { InvoiceDtoListEnvelope } from '../models/InvoiceDtoListEnvelope';
import type { LocationCreateDto } from '../models/LocationCreateDto';
import type { LocationDtoEnvelope } from '../models/LocationDtoEnvelope';
import type { LocationDtoListEnvelope } from '../models/LocationDtoListEnvelope';
import type { LocationUpdateDto } from '../models/LocationUpdateDto';
import type { OrderDtoListEnvelope } from '../models/OrderDtoListEnvelope';
import type { PaymentDtoListEnvelope } from '../models/PaymentDtoListEnvelope';
import type { WalletDtoEnvelope } from '../models/WalletDtoEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WalletsService {
    /**
     * Get Wallet Details
     * Get details of a specific wallet by ID.
     * @param walletId
     * @param xApiVersion
     * @returns WalletDtoEnvelope OK
     * @throws ApiError
     */
    public static getWalletDetailsAsync(
        walletId: string,
        xApiVersion?: string,
    ): CancelablePromise<WalletDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/WalletsService/Wallets/{walletId}',
            path: {
                'walletId': walletId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get Wallet Orders
     * Get orders of a specific wallet by ID.
     * @param walletId
     * @param xApiVersion
     * @returns OrderDtoListEnvelope OK
     * @throws ApiError
     */
    public static getWalletOrdersAsync(
        walletId: string,
        xApiVersion?: string,
    ): CancelablePromise<OrderDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/WalletsService/Wallets/{walletId}/Orders',
            path: {
                'walletId': walletId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get Wallet Extended Orders
     * Get extended orders of a specific wallet by ID.
     * @param walletId
     * @param xApiVersion
     * @returns ExtendedOrderDtoListEnvelope OK
     * @throws ApiError
     */
    public static getWalletExtendedOrdersAsync(
        walletId: string,
        xApiVersion?: string,
    ): CancelablePromise<ExtendedOrderDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/WalletsService/Wallets/{walletId}/Orders/Extended',
            path: {
                'walletId': walletId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get Wallet Orders Count
     * Get orders count of a specific wallet by ID.
     * @param walletId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getWalletOrdersCountAsync(
        walletId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/WalletsService/Wallets/{walletId}/Orders/Count',
            path: {
                'walletId': walletId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get Wallet Invoices
     * Get invoices of a specific wallet by ID.
     * @param walletId
     * @param xApiVersion
     * @returns InvoiceDtoListEnvelope OK
     * @throws ApiError
     */
    public static getWalletInvoicesAsync(
        walletId: string,
        xApiVersion?: string,
    ): CancelablePromise<InvoiceDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/WalletsService/Wallets/{walletId}/Invoices',
            path: {
                'walletId': walletId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get Wallet Invoices Count
     * Get invoices count of a specific wallet by ID.
     * @param walletId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getWalletInvoicesCountAsync(
        walletId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/WalletsService/Wallets/{walletId}/Invoices/Count',
            path: {
                'walletId': walletId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get Wallet Payments
     * Get payments of a specific wallet by ID.
     * @param walletId
     * @param xApiVersion
     * @returns PaymentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getWalletPaymentsAsync(
        walletId: string,
        xApiVersion?: string,
    ): CancelablePromise<PaymentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/WalletsService/Wallets/{walletId}/Payments',
            path: {
                'walletId': walletId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get Wallet Payments Count
     * Get payments count of a specific wallet by ID.
     * @param walletId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getWalletPaymentsCountAsync(
        walletId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/WalletsService/Wallets/{walletId}/Payments/Count',
            path: {
                'walletId': walletId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get Wallet Locations
     * Get locations of a specific wallet by ID.
     * @param walletId
     * @param xApiVersion
     * @returns LocationDtoListEnvelope OK
     * @throws ApiError
     */
    public static getWalletLocationsAsync(
        walletId: string,
        xApiVersion?: string,
    ): CancelablePromise<LocationDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/WalletsService/Wallets/{walletId}/Locations',
            path: {
                'walletId': walletId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Create Wallet Location
     * Create a new location for a specific wallet by ID.
     * @param walletId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static createWalletLocationAsync(
        walletId: string,
        xApiVersion?: string,
        requestBody?: LocationCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/WalletsService/Wallets/{walletId}/Locations',
            path: {
                'walletId': walletId,
            },
            headers: {
                'x-api-version': xApiVersion,
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
     * Get Wallet Locations Count
     * Get locations count of a specific wallet by ID.
     * @param walletId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getWalletLocationsCountAsync(
        walletId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/WalletsService/Wallets/{walletId}/Locations/Count',
            path: {
                'walletId': walletId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get Wallet Location
     * Get a specific location of a specific wallet by ID.
     * @param walletId
     * @param locationId
     * @param xApiVersion
     * @returns LocationDtoEnvelope OK
     * @throws ApiError
     */
    public static getWalletLocationAsync(
        walletId: string,
        locationId: string,
        xApiVersion?: string,
    ): CancelablePromise<LocationDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/WalletsService/Wallets/{walletId}/Locations/{locationId}',
            path: {
                'walletId': walletId,
                'locationId': locationId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Update Wallet Location
     * Update a specific location of a specific wallet by ID.
     * @param walletId
     * @param locationId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static updateWalletLocationAsync(
        walletId: string,
        locationId: string,
        xApiVersion?: string,
        requestBody?: LocationUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/WalletsService/Wallets/{walletId}/Locations/{locationId}',
            path: {
                'walletId': walletId,
                'locationId': locationId,
            },
            headers: {
                'x-api-version': xApiVersion,
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
     * Delete Wallet Location
     * Delete a specific location of a specific wallet by ID.
     * @param walletId
     * @param locationId
     * @param xApiVersion
     * @returns void
     * @throws ApiError
     */
    public static deleteWalletLocationAsync(
        walletId: string,
        locationId: string,
        xApiVersion?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/WalletsService/Wallets/{walletId}/Locations/{locationId}',
            path: {
                'walletId': walletId,
                'locationId': locationId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get Incoming Wallet Invoices
     * Get incoming invoices of a specific wallet by ID.
     * @param walletId
     * @param xApiVersion
     * @returns InvoiceDtoListEnvelope OK
     * @throws ApiError
     */
    public static getIncomingWalletInvoicesAsync(
        walletId: string,
        xApiVersion?: string,
    ): CancelablePromise<InvoiceDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/WalletsService/Wallets/{walletId}/Invoices/Incoming',
            path: {
                'walletId': walletId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get Incoming Wallet Invoices Count
     * Get incoming invoices count of a specific wallet by ID.
     * @param walletId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getIncomingWalletInvoicesCountAsync(
        walletId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/WalletsService/Wallets/{walletId}/Invoices/Incoming/Count',
            path: {
                'walletId': walletId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get Outgoing Wallet Invoices
     * Get outgoing invoices of a specific wallet by ID.
     * @param walletId
     * @param xApiVersion
     * @returns InvoiceDtoListEnvelope OK
     * @throws ApiError
     */
    public static getOutgoingWalletInvoicesAsync(
        walletId: string,
        xApiVersion?: string,
    ): CancelablePromise<InvoiceDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/WalletsService/Wallets/{walletId}/Invoices/Outgoing',
            path: {
                'walletId': walletId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get Outgoing Wallet Invoices Count
     * Get outgoing invoices count of a specific wallet by ID.
     * @param walletId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getOutgoingWalletInvoicesCountAsync(
        walletId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/WalletsService/Wallets/{walletId}/Invoices/Outgoing/Count',
            path: {
                'walletId': walletId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get Incoming Payments
     * Get incoming payments of a specific wallet by ID.
     * @param walletId
     * @param xApiVersion
     * @returns PaymentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getIncomingPaymentsAsync(
        walletId: string,
        xApiVersion?: string,
    ): CancelablePromise<PaymentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/WalletsService/Wallets/{walletId}/Payments/Incoming',
            path: {
                'walletId': walletId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get Incoming Payments Count
     * Get incoming payments count of a specific wallet by ID.
     * @param walletId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getIncomingPaymentsCountAsync(
        walletId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/WalletsService/Wallets/{walletId}/Payments/Incoming/Count',
            path: {
                'walletId': walletId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get Outgoing Payments
     * Get outgoing payments of a specific wallet by ID.
     * @param walletId
     * @param xApiVersion
     * @returns PaymentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getOutgoingPaymentsAsync(
        walletId: string,
        xApiVersion?: string,
    ): CancelablePromise<PaymentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/WalletsService/Wallets/{walletId}/Payments/Outgoing',
            path: {
                'walletId': walletId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get Outgoing Payments Count
     * Get outgoing payments count of a specific wallet by ID.
     * @param walletId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getOutgoingPaymentsCountAsync(
        walletId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/WalletsService/Wallets/{walletId}/Payments/Outgoing/Count',
            path: {
                'walletId': walletId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
