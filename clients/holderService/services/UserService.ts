/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressDtoListEnvelope } from '../models/AddressDtoListEnvelope';
import type { CartDtoEnvelope } from '../models/CartDtoEnvelope';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { EnrollmentId } from '../models/EnrollmentId';
import type { ExtendedTenantDtoListEnvelope } from '../models/ExtendedTenantDtoListEnvelope';
import type { ExtendedTenantEnrolmentDtoListEnvelope } from '../models/ExtendedTenantEnrolmentDtoListEnvelope';
import type { ExtendedUserDtoEnvelope } from '../models/ExtendedUserDtoEnvelope';
import type { FollowRecordDtoListEnvelope } from '../models/FollowRecordDtoListEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { NotificationDtoListEnvelope } from '../models/NotificationDtoListEnvelope';
import type { Operation } from '../models/Operation';
import type { SocialProfileDtoEnvelope } from '../models/SocialProfileDtoEnvelope';
import type { TenantDtoListEnvelope } from '../models/TenantDtoListEnvelope';
import type { TenantEnrolmentDtoEnvelope } from '../models/TenantEnrolmentDtoEnvelope';
import type { TenantEnrolmentDtoListEnvelope } from '../models/TenantEnrolmentDtoListEnvelope';
import type { TenantInvitationDtoListEnvelope } from '../models/TenantInvitationDtoListEnvelope';
import type { UserDtoEnvelope } from '../models/UserDtoEnvelope';
import type { UserSettingsDtoEnvelope } from '../models/UserSettingsDtoEnvelope';
import type { UserSettingsUpdateDto } from '../models/UserSettingsUpdateDto';
import type { UserUpdateDto } from '../models/UserUpdateDto';
import type { WalletDtoEnvelope } from '../models/WalletDtoEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * Gets the current user
     * Get the currently acting user.
     * @param xApiVersion
     * @returns UserDtoEnvelope OK
     * @throws ApiError
     */
    public static getCurrentUserAsync(
        xApiVersion?: string,
    ): CancelablePromise<UserDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static updateCurrentUserAsync(
        xApiVersion?: string,
        requestBody?: UserUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static patchCurrentUserAsync(
        xApiVersion?: string,
        requestBody?: Array<Operation>,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getExtendedCurrentUserAsync(
        xApiVersion?: string,
    ): CancelablePromise<ExtendedUserDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getCurrentUserAvatarAsync(
        xApiVersion?: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
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
    public static updateAvatarAsync(
        xApiVersion?: string,
        formData?: {
            avatar?: Blob;
        },
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getCurrentUserFollowsAsync(
        xApiVersion?: string,
    ): CancelablePromise<FollowRecordDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static countCurrentUserFollowsAsync(
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getCurrentUserFollowersAsync(
        xApiVersion?: string,
    ): CancelablePromise<FollowRecordDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static countCurrentUserFollowersAsync(
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getCurrentUserTenantsAsync(
        xApiVersion?: string,
    ): CancelablePromise<TenantDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static countCurrentUserTenantsAsync(
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getCurrentUserTenantsExtendedAsync(
        xApiVersion?: string,
    ): CancelablePromise<ExtendedTenantDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getCurrentUserEnrollmentsAsync(
        xApiVersion?: string,
    ): CancelablePromise<TenantEnrolmentDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getCurrentUserEnrollmentsExtendedAsync(
        xApiVersion?: string,
    ): CancelablePromise<ExtendedTenantEnrolmentDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getTenantEnrollmentAsync(
        enrollmentId: string,
        xApiVersion?: string,
        requestBody?: EnrollmentId,
    ): CancelablePromise<TenantEnrolmentDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getCurrentUserSocialProfileAsync(
        xApiVersion?: string,
    ): CancelablePromise<SocialProfileDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getCurrentUserCartAsync(
        xApiVersion?: string,
    ): CancelablePromise<CartDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getCurrentUserWalletAsync(
        xApiVersion?: string,
    ): CancelablePromise<WalletDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getCurrentUserNotificationsAsync(
        xApiVersion?: string,
    ): CancelablePromise<NotificationDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static countCurrentUserNotificationsAsync(
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getCurrentUserSettingsAsync(
        xApiVersion?: string,
    ): CancelablePromise<UserSettingsDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static updateCurrentUserSettingsAsync(
        xApiVersion?: string,
        requestBody?: UserSettingsUpdateDto,
    ): CancelablePromise<UserSettingsDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getCurrentUserAddressesAsync(
        xApiVersion?: string,
    ): CancelablePromise<AddressDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getCurrentUserInvitationAsync(
        xApiVersion?: string,
    ): CancelablePromise<TenantInvitationDtoListEnvelope> {
        return __request(OpenAPI, {
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
