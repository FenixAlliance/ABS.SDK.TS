"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class UserService {
    /**
     * Gets the current user
     * Get the currently acting user.
     * @param xApiVersion
     * @returns UserDtoEnvelope OK
     * @throws ApiError
     */
    static getCurrentUserAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Me',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Update the current user's profile
     * Update the current user's profile
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static updateCurrentUserAsync(xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/Me',
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Partially update the current user's profile
     * Partially update the current user's profile
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static patchCurrentUserAsync(xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/Me',
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Get the current user's extended profile
     * Get the current user's extended profile
     * @param xApiVersion
     * @returns ExtendedUserDtoEnvelope OK
     * @throws ApiError
     */
    static getExtendedCurrentUserAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Me/Extended',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Get the current user's avatar
     * Get the current user's avatar
     * @param xApiVersion
     * @returns binary OK
     * @throws ApiError
     */
    static getCurrentUserAvatarAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Me/Avatar',
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
     * Update the current user's avatar
     * Update the current user's avatar
     * @param xApiVersion
     * @param formData
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static updateAvatarAsync(xApiVersion, formData) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/Me/Avatar',
            headers: {
                'x-api-version': xApiVersion,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get the social profiles that the current user follows
     * Get the social profiles that the current user follows
     * @param xApiVersion
     * @returns FollowRecordDtoListEnvelope OK
     * @throws ApiError
     */
    static getCurrentUserFollowsAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Me/Follows',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Count the social profiles that the current user follows
     * Count the social profiles that the current user follows
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static countCurrentUserFollowsAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Me/Follows/Count',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Get the social profiles that follow the current user
     * Get the social profiles that follow the current user
     * @param xApiVersion
     * @returns FollowRecordDtoListEnvelope OK
     * @throws ApiError
     */
    static getCurrentUserFollowersAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Me/Followers',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Count the social profiles that follow the current user
     * Count the social profiles that follow the current user
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static countCurrentUserFollowersAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Me/Followers/Count',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Get the tenants that the current user is enrolled in
     * Get the tenants that the current user is enrolled in
     * @param xApiVersion
     * @returns TenantDtoListEnvelope OK
     * @throws ApiError
     */
    static getCurrentUserTenantsAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Me/Businesses',
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
     * Count the tenants that the current user is enrolled in
     * Count the tenants that the current user is enrolled in
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static countCurrentUserTenantsAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Me/Businesses/Count',
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
     * Get the tenants that the current user is enrolled in
     * Get the tenants that the current user is enrolled in
     * @param xApiVersion
     * @returns ExtendedTenantDtoListEnvelope OK
     * @throws ApiError
     */
    static getCurrentUserTenantsExtendedAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Me/Businesses/Extended',
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
     * Get the list of enrollments for the current user
     * Get the list of enrollments for the current user
     * @param xApiVersion
     * @returns TenantEnrolmentDtoListEnvelope OK
     * @throws ApiError
     */
    static getCurrentUserEnrollmentsAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Me/Enrollments',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Get the list of enrollments for the current user
     * Get the list of enrollments for the current user
     * @param xApiVersion
     * @returns ExtendedTenantEnrolmentDtoListEnvelope OK
     * @throws ApiError
     */
    static getCurrentUserEnrollmentsExtendedAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Me/Enrollments/Extended',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Get a single TenantEnrollment by its ID
     * Get a single TenantEnrollment by its ID
     * @param enrollmentId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantEnrolmentDtoEnvelope OK
     * @throws ApiError
     */
    static getTenantEnrollmentAsync(enrollmentId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Me/Enrollments/{enrollmentId}',
            path: {
                'enrollmentId': enrollmentId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Get the current user's social profile
     * Get the current user's social profile
     * @param xApiVersion
     * @returns SocialProfileDtoEnvelope OK
     * @throws ApiError
     */
    static getCurrentUserSocialProfileAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Me/SocialProfile',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Get the current user's cart
     * Get the current user's cart
     * @param xApiVersion
     * @returns CartDtoEnvelope OK
     * @throws ApiError
     */
    static getCurrentUserCartAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Me/Cart',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Get the current user's billing profile
     * Get the current user's billing profile
     * @param xApiVersion
     * @returns WalletDtoEnvelope OK
     * @throws ApiError
     */
    static getCurrentUserWalletAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Me/Wallet',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Get the list of notifications for the current user
     * Get the list of notifications for the current user
     * @param xApiVersion
     * @returns NotificationDtoListEnvelope OK
     * @throws ApiError
     */
    static getCurrentUserNotificationsAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Me/Notifications',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Count the notifications for the current user
     * Count the notifications for the current user
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static countCurrentUserNotificationsAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Me/Notifications/Count',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Get the settings for the current user
     * Get the settings for the current user
     * @param xApiVersion
     * @returns UserSettingsDtoEnvelope OK
     * @throws ApiError
     */
    static getCurrentUserSettingsAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Me/Settings',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Update the settings for the current user
     * Update the settings for the current user
     * @param xApiVersion
     * @param requestBody
     * @returns UserSettingsDtoEnvelope OK
     * @throws ApiError
     */
    static updateCurrentUserSettingsAsync(xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/Me/Settings',
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Get the list of addresses for the current user
     * Get the list of addresses for the current user
     * @param xApiVersion
     * @returns AddressDtoListEnvelope OK
     * @throws ApiError
     */
    static getCurrentUserAddressesAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Me/Addresses',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Get the list of tenant enrollment invitations for the current user
     * Get the list of tenant enrollment invitations for the current user
     * @param xApiVersion
     * @returns TenantInvitationDtoListEnvelope OK
     * @throws ApiError
     */
    static getCurrentUserInvitationAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/Me/Invitations',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
exports.UserService = UserService;
