"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class WalletsService {
    /**
     * Get Wallet Details
     * Get details of a specific wallet by ID.
     * @param walletId
     * @param xApiVersion
     * @returns WalletDtoEnvelope OK
     * @throws ApiError
     */
    static getWalletDetailsAsync(walletId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getWalletOrdersAsync(walletId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getWalletExtendedOrdersAsync(walletId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getWalletOrdersCountAsync(walletId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getWalletInvoicesAsync(walletId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getWalletInvoicesCountAsync(walletId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getWalletPaymentsAsync(walletId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getWalletPaymentsCountAsync(walletId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getWalletLocationsAsync(walletId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static createWalletLocationAsync(walletId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getWalletLocationsCountAsync(walletId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getWalletLocationAsync(walletId, locationId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static updateWalletLocationAsync(walletId, locationId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteWalletLocationAsync(walletId, locationId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getIncomingWalletInvoicesAsync(walletId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getIncomingWalletInvoicesCountAsync(walletId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getOutgoingWalletInvoicesAsync(walletId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getOutgoingWalletInvoicesCountAsync(walletId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getIncomingPaymentsAsync(walletId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getIncomingPaymentsCountAsync(walletId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getOutgoingPaymentsAsync(walletId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getOutgoingPaymentsCountAsync(walletId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.WalletsService = WalletsService;
