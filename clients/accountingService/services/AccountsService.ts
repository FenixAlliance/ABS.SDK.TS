/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountCreateDto } from '../models/AccountCreateDto';
import type { AccountDto } from '../models/AccountDto';
import type { AccountDtoEnvelope } from '../models/AccountDtoEnvelope';
import type { AccountDtoListEnvelope } from '../models/AccountDtoListEnvelope';
import type { AccountingEntryCreateDto } from '../models/AccountingEntryCreateDto';
import type { AccountingEntryDtoEnvelope } from '../models/AccountingEntryDtoEnvelope';
import type { AccountingEntryDtoListEnvelope } from '../models/AccountingEntryDtoListEnvelope';
import type { AccountingEntryUpdateDto } from '../models/AccountingEntryUpdateDto';
import type { AccountRelationCreateDto } from '../models/AccountRelationCreateDto';
import type { AccountRelationDtoListEnvelope } from '../models/AccountRelationDtoListEnvelope';
import type { AccountRelationUpdateDto } from '../models/AccountRelationUpdateDto';
import type { AccountTypeCreateDto } from '../models/AccountTypeCreateDto';
import type { AccountTypeDtoListEnvelope } from '../models/AccountTypeDtoListEnvelope';
import type { AccountTypeUpdateDto } from '../models/AccountTypeUpdateDto';
import type { AccountUpdateDto } from '../models/AccountUpdateDto';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { Operation } from '../models/Operation';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AccountsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns AccountDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceAccounts(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<AccountDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Accounts',
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
     * @returns AccountDtoListEnvelope OK
     * @throws ApiError
     */
    public static postApiV2AccountingServiceAccounts(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: AccountCreateDto,
    ): CancelablePromise<AccountDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Accounts',
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
     * @param tenantId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceAccountsCount(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Accounts/Count',
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
     * @returns AccountDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceAccountsRoot(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<AccountDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Accounts/Root',
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
     * @param accountId
     * @param xApiVersion
     * @param requestBody
     * @returns AccountDtoEnvelope OK
     * @throws ApiError
     */
    public static putApiV2AccountingServiceAccounts(
        tenantId: string,
        accountId: string,
        xApiVersion?: string,
        requestBody?: AccountUpdateDto,
    ): CancelablePromise<AccountDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Accounts/{accountId}',
            path: {
                'accountId': accountId,
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
     * @param tenantId
     * @param accountId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2AccountingServiceAccounts(
        tenantId: string,
        accountId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Accounts/{accountId}',
            path: {
                'accountId': accountId,
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
     * @param accountId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static patchApiV2AccountingServiceAccounts(
        tenantId: string,
        accountId: string,
        xApiVersion?: string,
        requestBody?: Array<Operation>,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/AccountingService/Accounts/{accountId}',
            path: {
                'accountId': accountId,
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
     * @param tenantId
     * @param accountId
     * @param xApiVersion
     * @returns AccountDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceAccounts1(
        tenantId: string,
        accountId: string,
        xApiVersion?: string,
    ): CancelablePromise<AccountDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Accounts/{accountId}',
            path: {
                'accountId': accountId,
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
     * @returns AccountDtoListEnvelope OK
     * @throws ApiError
     */
    public static postApiV2AccountingServiceAccountsRootBalance(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<AccountDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Accounts/Root/Balance',
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
     * @param accountId
     * @param xApiVersion
     * @returns AccountDtoEnvelope OK
     * @throws ApiError
     */
    public static postApiV2AccountingServiceAccountsBalance(
        tenantId: string,
        accountId: string,
        xApiVersion?: string,
    ): CancelablePromise<AccountDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Accounts/{accountId}/Balance',
            path: {
                'accountId': accountId,
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
     * @param accountId
     * @param xApiVersion
     * @returns AccountDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceAccountsChildren(
        tenantId: string,
        accountId: string,
        xApiVersion?: string,
    ): CancelablePromise<AccountDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Accounts/{accountId}/Children',
            path: {
                'accountId': accountId,
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
     * @param accountId
     * @param xApiVersion
     * @returns AccountingEntryDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceAccountsEntries(
        tenantId: string,
        accountId: string,
        xApiVersion?: string,
    ): CancelablePromise<AccountingEntryDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Accounts/{accountId}/Entries',
            path: {
                'accountId': accountId,
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
     * @param accountId
     * @param xApiVersion
     * @param requestBody
     * @returns AccountingEntryDtoEnvelope Created
     * @throws ApiError
     */
    public static postApiV2AccountingServiceAccountsEntries(
        tenantId: string,
        accountId: string,
        xApiVersion?: string,
        requestBody?: AccountingEntryCreateDto,
    ): CancelablePromise<AccountingEntryDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Accounts/{accountId}/Entries',
            path: {
                'accountId': accountId,
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
     * @param accountId
     * @param xApiVersion
     * @returns AccountingEntryDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceAccountsEntriesDebit(
        tenantId: string,
        accountId: string,
        xApiVersion?: string,
    ): CancelablePromise<AccountingEntryDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Accounts/{accountId}/Entries/Debit',
            path: {
                'accountId': accountId,
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
     * @param accountId
     * @param xApiVersion
     * @returns AccountingEntryDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceAccountsEntriesCredit(
        tenantId: string,
        accountId: string,
        xApiVersion?: string,
    ): CancelablePromise<AccountingEntryDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Accounts/{accountId}/Entries/Credit',
            path: {
                'accountId': accountId,
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
     * @param accountId
     * @param entryId
     * @param xApiVersion
     * @returns AccountingEntryDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceAccountsEntries1(
        tenantId: string,
        accountId: string,
        entryId: string,
        xApiVersion?: string,
    ): CancelablePromise<AccountingEntryDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Accounts/{accountId}/Entries/{entryId}',
            path: {
                'accountId': accountId,
                'entryId': entryId,
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
     * @param accountId
     * @param entryId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2AccountingServiceAccountsEntries(
        tenantId: string,
        accountId: string,
        entryId: string,
        xApiVersion?: string,
        requestBody?: AccountingEntryUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Accounts/{accountId}/Entries/{entryId}',
            path: {
                'accountId': accountId,
                'entryId': entryId,
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
     * @param accountId
     * @param entryId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2AccountingServiceAccountsEntries(
        tenantId: string,
        accountId: string,
        entryId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Accounts/{accountId}/Entries/{entryId}',
            path: {
                'accountId': accountId,
                'entryId': entryId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param accountId
     * @param xApiVersion
     * @returns AccountingEntryDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceAccountsDebits(
        tenantId: string,
        accountId: string,
        xApiVersion?: string,
    ): CancelablePromise<AccountingEntryDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Accounts/{accountId}/Debits',
            path: {
                'accountId': accountId,
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
     * @param accountId
     * @param xApiVersion
     * @param requestBody
     * @returns AccountingEntryDtoListEnvelope OK
     * @throws ApiError
     */
    public static postApiV2AccountingServiceAccountsDebits(
        tenantId: string,
        accountId: string,
        xApiVersion?: string,
        requestBody?: AccountingEntryCreateDto,
    ): CancelablePromise<AccountingEntryDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Accounts/{accountId}/Debits',
            path: {
                'accountId': accountId,
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
     * @param tenantId
     * @param accountId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceAccountsDebitsCount(
        tenantId: string,
        accountId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Accounts/{accountId}/Debits/Count',
            path: {
                'accountId': accountId,
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
     * @param accountId
     * @param xApiVersion
     * @returns AccountingEntryDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceAccountsCredits(
        tenantId: string,
        accountId: string,
        xApiVersion?: string,
    ): CancelablePromise<AccountingEntryDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Accounts/{accountId}/Credits',
            path: {
                'accountId': accountId,
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
     * @param accountId
     * @param xApiVersion
     * @param requestBody
     * @returns AccountingEntryDtoListEnvelope OK
     * @throws ApiError
     */
    public static postApiV2AccountingServiceAccountsCredits(
        tenantId: string,
        accountId: string,
        xApiVersion?: string,
        requestBody?: AccountingEntryCreateDto,
    ): CancelablePromise<AccountingEntryDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Accounts/{accountId}/Credits',
            path: {
                'accountId': accountId,
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
     * @param tenantId
     * @param accountId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceAccountsCreditsCount(
        tenantId: string,
        accountId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Accounts/{accountId}/Credits/Count',
            path: {
                'accountId': accountId,
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
     * @param currencyId
     * @param xApiVersion
     * @param requestBody
     * @returns AccountingEntryDtoListEnvelope OK
     * @throws ApiError
     */
    public static postApiV2AccountingServiceAccountsAggregate(
        tenantId: string,
        currencyId?: string,
        xApiVersion?: string,
        requestBody?: Array<AccountDto>,
    ): CancelablePromise<AccountingEntryDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Accounts/Aggregate',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'currencyId': currencyId,
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
     * @param tenantId
     * @param accountTypeId
     * @param xApiVersion
     * @returns AccountTypeDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceAccountsTypes(
        tenantId: string,
        accountTypeId: string,
        xApiVersion?: string,
    ): CancelablePromise<AccountTypeDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Accounts/Types',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'accountTypeId': accountTypeId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param accountId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2AccountingServiceAccountsTypes(
        tenantId: string,
        accountId: string,
        xApiVersion?: string,
        requestBody?: AccountTypeCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Accounts/Types',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'accountId': accountId,
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
     * @param tenantId
     * @param accountTypeId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceAccountsTypesCount(
        tenantId: string,
        accountTypeId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Accounts/Types/Count',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'accountTypeId': accountTypeId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param accountTypeId
     * @param accountId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2AccountingServiceAccountsTypes(
        tenantId: string,
        accountTypeId: string,
        accountId: string,
        xApiVersion?: string,
        requestBody?: AccountTypeUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Accounts/Types/{accountTypeId}',
            path: {
                'accountTypeId': accountTypeId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'accountId': accountId,
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
     * @param tenantId
     * @param accountTypeId
     * @param accountId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2AccountingServiceAccountsTypes(
        tenantId: string,
        accountTypeId: string,
        accountId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Accounts/Types/{accountTypeId}',
            path: {
                'accountTypeId': accountTypeId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'accountId': accountId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param accountId
     * @param xApiVersion
     * @returns AccountRelationDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceAccountsRelations(
        tenantId: string,
        accountId: string,
        xApiVersion?: string,
    ): CancelablePromise<AccountRelationDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Accounts/Relations',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'accountId': accountId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param accountId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static postApiV2AccountingServiceAccountsRelations(
        tenantId: string,
        accountId: string,
        xApiVersion?: string,
        requestBody?: AccountRelationCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/AccountingService/Accounts/Relations',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'accountId': accountId,
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
     * @param tenantId
     * @param accountRelationId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2AccountingServiceAccountsRelationsCount(
        tenantId: string,
        accountRelationId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/AccountingService/Accounts/Relations/Count',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'accountRelationId': accountRelationId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param accountRelationId
     * @param accountId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2AccountingServiceAccountsRelations(
        tenantId: string,
        accountRelationId: string,
        accountId: string,
        xApiVersion?: string,
        requestBody?: AccountRelationUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/AccountingService/Accounts/Relations/{accountRelationId}',
            path: {
                'accountRelationId': accountRelationId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'accountId': accountId,
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
     * @param tenantId
     * @param accountRelationId
     * @param accountId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2AccountingServiceAccountsRelations(
        tenantId: string,
        accountRelationId: string,
        accountId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/AccountingService/Accounts/Relations/{accountRelationId}',
            path: {
                'accountRelationId': accountRelationId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'accountId': accountId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
