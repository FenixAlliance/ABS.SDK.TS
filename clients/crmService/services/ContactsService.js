"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ContactsService {
    /**
     * Get all business owned contacts
     * Get all business owned contacts
     * @param tenantId
     * @param xApiVersion
     * @returns ContactDtoListEnvelope OK
     * @throws ApiError
     */
    static getContactsAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static createContactAsync(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getContactsCountAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getExtendedContactsAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getContactAsync(tenantId, contactId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static updateContactAsync(tenantId, contactId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteContactAsync(tenantId, contactId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static patchContactAsync(tenantId, contactId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getExtendedContactAsync(tenantId, contactId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getBusinessOwnedIndividualsAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getBusinessOwnedIndividualsCountAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getExtendedBusinessOwnedIndividualsAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getBusinessOwnedIndividualAsync(tenantId, contactId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getBusinessOwnedOrganizationsAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getBusinessOwnedOrganizationsCountAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getExtendedBusinessOwnedOrganizationsAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getBusinessOwnedOrganizationAsync(tenantId, contactId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getContactCartAsync(tenantId, contactId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getContactAvatarAsync(tenantId, contactId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static updateContactAvatarAsync(contactId, tenantId, xApiVersion, formData) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getContactWalletAsync(tenantId, contactId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getContactProfilesAsync(tenantId, contactId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getContactSocialProfileAsync(tenantId, contactId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getIndividualRelatedOrganizationsAsync(tenantId, contactId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getIndividualRelatedIndividualsAsync(tenantId, contactId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getOrganizationRelatedIndividualsAsync(tenantId, contactId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getOrganizationRelatedOrganizationsAsync(tenantId, contactId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static upsertTenantOntoAnotherTenantContactListAsync(tenantId, relatedTenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static upsertUserOntoAnotherTenantContactListAsync(tenantId, relatedUserId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.ContactsService = ContactsService;
