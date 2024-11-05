"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class AvatarsService {
    /**
     * Get the avatar for a given social profile.
     * @param socialProfileId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static getAvatar(socialProfileId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/StorageService/Avatars/{socialProfileId}',
            path: {
                'socialProfileId': socialProfileId,
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
     * Get the avatar for the current user.
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static getCurrentUserAvatar(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/StorageService/Avatars/User',
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
     * Update the avatar for the current user.
     * @param xApiVersion
     * @param formData
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static updateUserAvatar(xApiVersion, formData) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/StorageService/Avatars/User',
            headers: {
                'x-api-version': xApiVersion,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get the avatar for a given user.
     * @param userId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static getUserAvatar(userId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/StorageService/Avatars/User/{userId}',
            path: {
                'userId': userId,
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
     * Get the avatar for a given tenant.
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static getTenantAvatar(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/StorageService/Avatars/Tenant/{tenantId}',
            path: {
                'tenantId': tenantId,
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
     * Update the avatar for a given tenant.
     * @param tenantId
     * @param xApiVersion
     * @param formData
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static updateTenantAvatar(tenantId, xApiVersion, formData) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/StorageService/Avatars/Tenant/{tenantId}',
            path: {
                'tenantId': tenantId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get the avatar for a given contact.
     * @param contactId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static getContactAvatar(contactId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/StorageService/Avatars/Contact/{contactId}',
            path: {
                'contactId': contactId,
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
     * Update the avatar for a given contact.
     * @param contactId
     * @param tenantId
     * @param xApiVersion
     * @param formData
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static updateContactAvatar(contactId, tenantId, xApiVersion, formData) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/StorageService/Avatars/Contacts/{contactId}',
            path: {
                'contactId': contactId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
exports.AvatarsService = AvatarsService;
