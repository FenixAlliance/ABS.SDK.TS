/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CartDtoEnvelope } from '../models/CartDtoEnvelope';
import type { ContactCreateDto } from '../models/ContactCreateDto';
import type { ContactDto } from '../models/ContactDto';
import type { ContactDtoEnvelope } from '../models/ContactDtoEnvelope';
import type { ContactDtoListEnvelope } from '../models/ContactDtoListEnvelope';
import type { ContactProfileDtoListEnvelope } from '../models/ContactProfileDtoListEnvelope';
import type { ContactUpdateDto } from '../models/ContactUpdateDto';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { ExtendedContactDtoEnvelope } from '../models/ExtendedContactDtoEnvelope';
import type { ExtendedContactDtoListEnvelope } from '../models/ExtendedContactDtoListEnvelope';
import type { Operation } from '../models/Operation';
import type { SocialProfileDtoEnvelope } from '../models/SocialProfileDtoEnvelope';
import type { WalletDtoEnvelope } from '../models/WalletDtoEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ContactsService {
    /**
     * Get all business owned contacts
     * Get all business owned contacts
     * @param tenantId
     * @param xApiVersion
     * @returns ContactDtoListEnvelope OK
     * @throws ApiError
     */
    public static getContactsAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ContactDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CrmService/Contacts',
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
     * Create a new contact
     * Create a new contact
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static createContactAsync(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: ContactCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CrmService/Contacts',
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
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get all business owned contacts count
     * Get all business owned contacts count
     * @param tenantId
     * @param xApiVersion
     * @returns ContactDtoListEnvelope OK
     * @throws ApiError
     */
    public static getContactsCountAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ContactDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CrmService/Contacts/Count',
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
     * Get all business owned contacts
     * Get all business owned contacts
     * @param tenantId
     * @param xApiVersion
     * @returns ExtendedContactDtoListEnvelope OK
     * @throws ApiError
     */
    public static getExtendedContactsAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ExtendedContactDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CrmService/Contacts/Extended',
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
     * Get a contact by ID
     * Get a contact by ID
     * @param tenantId
     * @param contactId
     * @param xApiVersion
     * @returns ContactDtoEnvelope OK
     * @throws ApiError
     */
    public static getContactAsync(
        tenantId: string,
        contactId: string,
        xApiVersion?: string,
    ): CancelablePromise<ContactDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CrmService/Contacts/{contactId}',
            path: {
                'contactId': contactId,
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
     * Update a contact
     * Update a contact
     * @param tenantId
     * @param contactId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static updateContactAsync(
        tenantId: string,
        contactId: string,
        xApiVersion?: string,
        requestBody?: ContactUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CrmService/Contacts/{contactId}',
            path: {
                'contactId': contactId,
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
                403: `Forbidden`,
            },
        });
    }
    /**
     * Delete a contact
     * Delete a contact
     * @param tenantId
     * @param contactId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteContactAsync(
        tenantId: string,
        contactId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CrmService/Contacts/{contactId}',
            path: {
                'contactId': contactId,
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
     * Patch a contact
     * Patch a contact
     * @param tenantId
     * @param contactId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static patchContactAsync(
        tenantId: string,
        contactId: string,
        xApiVersion?: string,
        requestBody?: Array<Operation>,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/CrmService/Contacts/{contactId}',
            path: {
                'contactId': contactId,
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
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get a contact by ID
     * Get a contact by ID
     * @param tenantId
     * @param contactId
     * @param xApiVersion
     * @returns ExtendedContactDtoEnvelope OK
     * @throws ApiError
     */
    public static getExtendedContactAsync(
        tenantId: string,
        contactId: string,
        xApiVersion?: string,
    ): CancelablePromise<ExtendedContactDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CrmService/Contacts/{contactId}/Extended',
            path: {
                'contactId': contactId,
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
     * Get all contacts of type individual
     * Get all contacts of type individual
     * @param tenantId
     * @param xApiVersion
     * @returns ContactDtoListEnvelope OK
     * @throws ApiError
     */
    public static getBusinessOwnedIndividualsAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ContactDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CrmService/Contacts/Individuals',
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
     * Get all contacts of type individual count
     * Get all contacts of type individual count
     * @param tenantId
     * @param xApiVersion
     * @returns ContactDtoListEnvelope OK
     * @throws ApiError
     */
    public static getBusinessOwnedIndividualsCountAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ContactDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CrmService/Contacts/Individuals/Count',
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
     * Get all contacts of type individual
     * Get all contacts of type individual
     * @param tenantId
     * @param xApiVersion
     * @returns ExtendedContactDtoListEnvelope OK
     * @throws ApiError
     */
    public static getExtendedBusinessOwnedIndividualsAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ExtendedContactDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CrmService/Contacts/Individuals/Extended',
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
     * Get a Contact of type Individual by ID
     * Get a Contact of type Individual by ID
     * @param tenantId
     * @param contactId
     * @param xApiVersion
     * @returns ContactDtoEnvelope OK
     * @throws ApiError
     */
    public static getBusinessOwnedIndividualAsync(
        tenantId: string,
        contactId: string,
        xApiVersion?: string,
    ): CancelablePromise<ContactDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CrmService/Contacts/Individuals/{contactId}',
            path: {
                'contactId': contactId,
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
                404: `Not Found`,
            },
        });
    }
    /**
     * Get all contacts of type organization
     * Get all contacts of type organization
     * @param tenantId
     * @param xApiVersion
     * @returns ContactDto OK
     * @throws ApiError
     */
    public static getBusinessOwnedOrganizationsAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Array<ContactDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CrmService/Contacts/Organizations',
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
     * Get all contacts of type organization count
     * Get all contacts of type organization count
     * @param tenantId
     * @param xApiVersion
     * @returns ContactDtoListEnvelope OK
     * @throws ApiError
     */
    public static getBusinessOwnedOrganizationsCountAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ContactDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CrmService/Contacts/Organizations/Count',
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
     * Get all contacts of type organization
     * Get all contacts of type organization
     * @param tenantId
     * @param xApiVersion
     * @returns ExtendedContactDtoListEnvelope OK
     * @throws ApiError
     */
    public static getExtendedBusinessOwnedOrganizationsAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ExtendedContactDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CrmService/Contacts/Organizations/Extended',
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
     * Get a Contact of type Organization by ID
     * Get a Contact of type Organization by ID
     * @param tenantId
     * @param contactId
     * @param xApiVersion
     * @returns ContactDtoEnvelope OK
     * @throws ApiError
     */
    public static getBusinessOwnedOrganizationAsync(
        tenantId: string,
        contactId: string,
        xApiVersion?: string,
    ): CancelablePromise<ContactDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CrmService/Contacts/Organizations/{contactId}',
            path: {
                'contactId': contactId,
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
                404: `Not Found`,
            },
        });
    }
    /**
     * Get a contact's cart
     * Get a contact's cart
     * @param tenantId
     * @param contactId
     * @param xApiVersion
     * @returns CartDtoEnvelope OK
     * @throws ApiError
     */
    public static getContactCartAsync(
        tenantId: string,
        contactId: string,
        xApiVersion?: string,
    ): CancelablePromise<CartDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CrmService/Contacts/{contactId}/Cart',
            path: {
                'contactId': contactId,
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
                404: `Not Found`,
            },
        });
    }
    /**
     * Get a contact's avatar
     * Get a contact's avatar
     * @param tenantId
     * @param contactId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static getContactAvatarAsync(
        tenantId: string,
        contactId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CrmService/Contacts/{contactId}/Avatar',
            path: {
                'contactId': contactId,
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
     * Update a contact's avatar
     * Update a contact's avatar
     * @param contactId
     * @param tenantId
     * @param xApiVersion
     * @param formData
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static updateContactAvatarAsync(
        contactId: string,
        tenantId?: string,
        xApiVersion?: string,
        formData?: {
            avatar?: Blob;
        },
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CrmService/Contacts/{contactId}/Avatar',
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
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get a contact's wallet
     * Get a contact's wallet
     * @param tenantId
     * @param contactId
     * @param xApiVersion
     * @returns WalletDtoEnvelope OK
     * @throws ApiError
     */
    public static getContactWalletAsync(
        tenantId: string,
        contactId: string,
        xApiVersion?: string,
    ): CancelablePromise<WalletDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CrmService/Contacts/{contactId}/Wallet',
            path: {
                'contactId': contactId,
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
                404: `Not Found`,
            },
        });
    }
    /**
     * Get a contact's social profiles
     * Get a contact's social profiles
     * @param tenantId
     * @param contactId
     * @param xApiVersion
     * @returns ContactProfileDtoListEnvelope OK
     * @throws ApiError
     */
    public static getContactProfilesAsync(
        tenantId: string,
        contactId: string,
        xApiVersion?: string,
    ): CancelablePromise<ContactProfileDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CrmService/Contacts/{contactId}/Profiles',
            path: {
                'contactId': contactId,
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
                404: `Not Found`,
            },
        });
    }
    /**
     * Get a contact's social profile
     * Get a contact's social profile
     * @param tenantId
     * @param contactId
     * @param xApiVersion
     * @returns SocialProfileDtoEnvelope OK
     * @throws ApiError
     */
    public static getContactSocialProfileAsync(
        tenantId: string,
        contactId: string,
        xApiVersion?: string,
    ): CancelablePromise<SocialProfileDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CrmService/Contacts/{contactId}/SocialProfile',
            path: {
                'contactId': contactId,
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
                404: `Not Found`,
            },
        });
    }
    /**
     * Get individual related organizations
     * Get individual related organizations
     * @param tenantId
     * @param contactId
     * @param xApiVersion
     * @returns ContactDtoListEnvelope OK
     * @throws ApiError
     */
    public static getIndividualRelatedOrganizationsAsync(
        tenantId: string,
        contactId: string,
        xApiVersion?: string,
    ): CancelablePromise<ContactDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CrmService/Contacts/Individuals/{contactId}/Organizations',
            path: {
                'contactId': contactId,
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
     * Get individual related individuals
     * Get individual related individuals
     * @param tenantId
     * @param contactId
     * @param xApiVersion
     * @returns ContactDtoListEnvelope OK
     * @throws ApiError
     */
    public static getIndividualRelatedIndividualsAsync(
        tenantId: string,
        contactId: string,
        xApiVersion?: string,
    ): CancelablePromise<ContactDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CrmService/Contacts/Individuals/{contactId}/Individuals',
            path: {
                'contactId': contactId,
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
     * Get organization related individuals
     * Get organization related individuals
     * @param tenantId
     * @param contactId
     * @param xApiVersion
     * @returns ContactDtoListEnvelope OK
     * @throws ApiError
     */
    public static getOrganizationRelatedIndividualsAsync(
        tenantId: string,
        contactId: string,
        xApiVersion?: string,
    ): CancelablePromise<ContactDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CrmService/Contacts/Organizations/{contactId}/Individuals',
            path: {
                'contactId': contactId,
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
     * Get organization related organizations
     * Get organization related organizations
     * @param tenantId
     * @param contactId
     * @param xApiVersion
     * @returns ContactDtoListEnvelope OK
     * @throws ApiError
     */
    public static getOrganizationRelatedOrganizationsAsync(
        tenantId: string,
        contactId: string,
        xApiVersion?: string,
    ): CancelablePromise<ContactDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CrmService/Contacts/Organizations/{contactId}/Organizations',
            path: {
                'contactId': contactId,
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
     * Upsert a tenant onto another tenant's contact list
     * Upsert a tenant onto another tenant's contact list
     * @param tenantId
     * @param relatedTenantId
     * @param xApiVersion
     * @returns ContactDtoEnvelope OK
     * @throws ApiError
     */
    public static upsertTenantOntoAnotherTenantContactListAsync(
        tenantId: string,
        relatedTenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ContactDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CrmService/Contacts/Organizations/Upsert',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'relatedTenantId': relatedTenantId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Upsert a user onto a tenant's contact list
     * Upsert a user onto a tenant's contact list
     * @param tenantId
     * @param relatedUserId
     * @param xApiVersion
     * @returns ContactDtoEnvelope OK
     * @throws ApiError
     */
    public static upsertUserOntoAnotherTenantContactListAsync(
        tenantId: string,
        relatedUserId: string,
        xApiVersion?: string,
    ): CancelablePromise<ContactDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CrmService/Contacts/Individuals/Upsert',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'relatedUserId': relatedUserId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
