/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BooleanEnvelope } from '../models/BooleanEnvelope';
import type { CartDtoEnvelope } from '../models/CartDtoEnvelope';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { ExtendedTenantDtoEnvelope } from '../models/ExtendedTenantDtoEnvelope';
import type { ExtendedTenantEnrolmentDtoEnvelope } from '../models/ExtendedTenantEnrolmentDtoEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { NotificationDtoListEnvelope } from '../models/NotificationDtoListEnvelope';
import type { Operation } from '../models/Operation';
import type { SocialProfileDtoEnvelope } from '../models/SocialProfileDtoEnvelope';
import type { StringListEnvelope } from '../models/StringListEnvelope';
import type { SuiteLicenseAssignmentDtoListEnvelope } from '../models/SuiteLicenseAssignmentDtoListEnvelope';
import type { SuiteLicenseDtoListEnvelope } from '../models/SuiteLicenseDtoListEnvelope';
import type { SuiteLicenseFeatureDtoListEnvelope } from '../models/SuiteLicenseFeatureDtoListEnvelope';
import type { TenantCreateDto } from '../models/TenantCreateDto';
import type { TenantDepartmentCreateDto } from '../models/TenantDepartmentCreateDto';
import type { TenantDepartmentDtoEnvelope } from '../models/TenantDepartmentDtoEnvelope';
import type { TenantDepartmentDtoListEnvelope } from '../models/TenantDepartmentDtoListEnvelope';
import type { TenantDepartmentUpdateDto } from '../models/TenantDepartmentUpdateDto';
import type { TenantDtoEnvelope } from '../models/TenantDtoEnvelope';
import type { TenantEnrollmentCreateDto } from '../models/TenantEnrollmentCreateDto';
import type { TenantEnrollmentUpdateDto } from '../models/TenantEnrollmentUpdateDto';
import type { TenantEnrolmentDtoEnvelope } from '../models/TenantEnrolmentDtoEnvelope';
import type { TenantEnrolmentDtoListEnvelope } from '../models/TenantEnrolmentDtoListEnvelope';
import type { TenantIndustryCreateDto } from '../models/TenantIndustryCreateDto';
import type { TenantIndustryDtoEnvelope } from '../models/TenantIndustryDtoEnvelope';
import type { TenantIndustryDtoListEnvelope } from '../models/TenantIndustryDtoListEnvelope';
import type { TenantIndustryUpdateDto } from '../models/TenantIndustryUpdateDto';
import type { TenantInvitationCreateDto } from '../models/TenantInvitationCreateDto';
import type { TenantInvitationDtoEnvelope } from '../models/TenantInvitationDtoEnvelope';
import type { TenantInvitationDtoListEnvelope } from '../models/TenantInvitationDtoListEnvelope';
import type { TenantPositionCreateDto } from '../models/TenantPositionCreateDto';
import type { TenantPositionDtoEnvelope } from '../models/TenantPositionDtoEnvelope';
import type { TenantPositionDtoListEnvelope } from '../models/TenantPositionDtoListEnvelope';
import type { TenantPositionUpdateDto } from '../models/TenantPositionUpdateDto';
import type { TenantSegmentCreateDto } from '../models/TenantSegmentCreateDto';
import type { TenantSegmentDtoEnvelope } from '../models/TenantSegmentDtoEnvelope';
import type { TenantSegmentDtoListEnvelope } from '../models/TenantSegmentDtoListEnvelope';
import type { TenantSegmentUpdateDto } from '../models/TenantSegmentUpdateDto';
import type { TenantTeamContactEnrollmentCreateDto } from '../models/TenantTeamContactEnrollmentCreateDto';
import type { TenantTeamContactEnrollmentDtoEnvelope } from '../models/TenantTeamContactEnrollmentDtoEnvelope';
import type { TenantTeamContactEnrollmentDtoListEnvelope } from '../models/TenantTeamContactEnrollmentDtoListEnvelope';
import type { TenantTeamContactEnrollmentUpdateDto } from '../models/TenantTeamContactEnrollmentUpdateDto';
import type { TenantTeamCreateDto } from '../models/TenantTeamCreateDto';
import type { TenantTeamDtoEnvelope } from '../models/TenantTeamDtoEnvelope';
import type { TenantTeamDtoListEnvelope } from '../models/TenantTeamDtoListEnvelope';
import type { TenantTeamEmployeeEnrollmentCreateDto } from '../models/TenantTeamEmployeeEnrollmentCreateDto';
import type { TenantTeamEmployeeEnrollmentDtoEnvelope } from '../models/TenantTeamEmployeeEnrollmentDtoEnvelope';
import type { TenantTeamEmployeeEnrollmentDtoListEnvelope } from '../models/TenantTeamEmployeeEnrollmentDtoListEnvelope';
import type { TenantTeamEmployeeEnrollmentUpdateDto } from '../models/TenantTeamEmployeeEnrollmentUpdateDto';
import type { TenantTeamProjectEnrollmentCreateDto } from '../models/TenantTeamProjectEnrollmentCreateDto';
import type { TenantTeamProjectEnrollmentDtoEnvelope } from '../models/TenantTeamProjectEnrollmentDtoEnvelope';
import type { TenantTeamProjectEnrollmentDtoListEnvelope } from '../models/TenantTeamProjectEnrollmentDtoListEnvelope';
import type { TenantTeamProjectEnrollmentUpdateDto } from '../models/TenantTeamProjectEnrollmentUpdateDto';
import type { TenantTeamRecordCreateDto } from '../models/TenantTeamRecordCreateDto';
import type { TenantTeamRecordDtoEnvelope } from '../models/TenantTeamRecordDtoEnvelope';
import type { TenantTeamRecordDtoListEnvelope } from '../models/TenantTeamRecordDtoListEnvelope';
import type { TenantTeamRecordUpdateDto } from '../models/TenantTeamRecordUpdateDto';
import type { TenantTeamUpdateDto } from '../models/TenantTeamUpdateDto';
import type { TenantTerritoryCreateDto } from '../models/TenantTerritoryCreateDto';
import type { TenantTerritoryDtoEnvelope } from '../models/TenantTerritoryDtoEnvelope';
import type { TenantTerritoryDtoListEnvelope } from '../models/TenantTerritoryDtoListEnvelope';
import type { TenantTerritoryUpdateDto } from '../models/TenantTerritoryUpdateDto';
import type { TenantTypeCreateDto } from '../models/TenantTypeCreateDto';
import type { TenantTypeDtoEnvelope } from '../models/TenantTypeDtoEnvelope';
import type { TenantTypeDtoListEnvelope } from '../models/TenantTypeDtoListEnvelope';
import type { TenantTypeUpdateDto } from '../models/TenantTypeUpdateDto';
import type { TenantUnitCreateDto } from '../models/TenantUnitCreateDto';
import type { TenantUnitDtoEnvelope } from '../models/TenantUnitDtoEnvelope';
import type { TenantUnitDtoListEnvelope } from '../models/TenantUnitDtoListEnvelope';
import type { TenantUnitUpdateDto } from '../models/TenantUnitUpdateDto';
import type { TenantUpdateDto } from '../models/TenantUpdateDto';
import type { UserDtoListEnvelope } from '../models/UserDtoListEnvelope';
import type { WalletDtoEnvelope } from '../models/WalletDtoEnvelope';
import type { WebPortalDtoListEnvelope } from '../models/WebPortalDtoListEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TenantsService {
    /**
     * Create a new tenant department
     * Create a new tenant department
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static createTenantDepartment(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: TenantDepartmentCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/Departments',
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
     * Retrieve a list of tenant departments
     * Retrieve a list of tenant departments
     * @param tenantId
     * @param xApiVersion
     * @returns TenantDepartmentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getTenantDepartments(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantDepartmentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Departments',
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
     * Retrieve a single tenant department by its ID
     * Retrieve a single tenant department by its ID
     * @param tenantDepartmentId
     * @param xApiVersion
     * @returns TenantDepartmentDtoEnvelope OK
     * @throws ApiError
     */
    public static getTenantDepartmentById(
        tenantDepartmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantDepartmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Departments/{tenantDepartmentId}',
            path: {
                'tenantDepartmentId': tenantDepartmentId,
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
     * Update a tenant department
     * Update a tenant department
     * @param tenantId
     * @param tenantDepartmentId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static updateTenantDepartment(
        tenantId: string,
        tenantDepartmentId: string,
        xApiVersion?: string,
        requestBody?: TenantDepartmentUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/Departments/{tenantDepartmentId}',
            path: {
                'tenantDepartmentId': tenantDepartmentId,
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
     * Delete a tenant department
     * Delete a tenant department
     * @param tenantId
     * @param tenantDepartmentId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteTenantDepartment(
        tenantId: string,
        tenantDepartmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/Departments/{tenantDepartmentId}',
            path: {
                'tenantDepartmentId': tenantDepartmentId,
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
     * Partially update a tenant department
     * Partially update a tenant department
     * @param tenantId
     * @param tenantDepartmentId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static patchTenantDepartment(
        tenantId: string,
        tenantDepartmentId: string,
        xApiVersion?: string,
        requestBody?: Array<Operation>,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/Departments/{tenantDepartmentId}',
            path: {
                'tenantDepartmentId': tenantDepartmentId,
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
     * Create a new tenant team employee enrollment
     * Create a new tenant team employee enrollment
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantTeamEmployeeEnrollmentDtoEnvelope Created
     * @throws ApiError
     */
    public static createTenantTeamEmployeeEnrollment(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: TenantTeamEmployeeEnrollmentCreateDto,
    ): CancelablePromise<TenantTeamEmployeeEnrollmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/EmployeeEnrollments',
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
     * Retrieve a list of tenant team employee enrollments
     * Retrieve a list of tenant team employee enrollments
     * @param tenantId
     * @param xApiVersion
     * @returns TenantTeamEmployeeEnrollmentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getTenantTeamEmployeeEnrollments(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantTeamEmployeeEnrollmentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/EmployeeEnrollments',
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
     * Retrieve a single tenant team employee enrollment by its ID
     * Retrieve a single tenant team employee enrollment by its ID
     * @param tenantTeamId
     * @param xApiVersion
     * @returns TenantTeamEmployeeEnrollmentDtoEnvelope OK
     * @throws ApiError
     */
    public static getTenantTeamEmployeeEnrollmentById(
        tenantTeamId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantTeamEmployeeEnrollmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/EmployeeEnrollments/{tenantTeamId}',
            path: {
                'tenantTeamId': tenantTeamId,
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
     * Deletes a tenant team employee enrollment
     * Deletes a tenant team employee enrollment
     * @param tenantId
     * @param tenantTeamId
     * @param xApiVersion
     * @returns TenantTeamEmployeeEnrollmentDtoEnvelope OK
     * @throws ApiError
     */
    public static deleteTenantTeamEmployeeEnrollment(
        tenantId: string,
        tenantTeamId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantTeamEmployeeEnrollmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/EmployeeEnrollments/{tenantTeamId}',
            path: {
                'tenantTeamId': tenantTeamId,
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
     * Update a tenant team employee enrollment
     * Update a tenant team employee enrollment
     * @param tenantTeamId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantTeamEmployeeEnrollmentDtoEnvelope OK
     * @throws ApiError
     */
    public static updateTenantTeamEmployeeEnrollment(
        tenantTeamId: string,
        xApiVersion?: string,
        requestBody?: TenantTeamEmployeeEnrollmentUpdateDto,
    ): CancelablePromise<TenantTeamEmployeeEnrollmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/EmployeeEnrollments/{tenantTeamId}',
            path: {
                'tenantTeamId': tenantTeamId,
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
     * Partially update a tenant team employee enrollment
     * Partially update a tenant team employee enrollment
     * @param tenantTeamId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantTeamEmployeeEnrollmentDtoEnvelope OK
     * @throws ApiError
     */
    public static patchTenantTeamEmployeeEnrollment(
        tenantTeamId: string,
        xApiVersion?: string,
        requestBody?: Array<Operation>,
    ): CancelablePromise<TenantTeamEmployeeEnrollmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/EmployeeEnrollments/{tenantTeamId}',
            path: {
                'tenantTeamId': tenantTeamId,
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
     * Create a new tenant enrollment
     * Create a new tenant enrollment
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static createTenantEnrollment(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: TenantEnrollmentCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/Enrollments',
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
     * Retrieve a list of tenant enrollments
     * Retrieve a list of tenant enrollments
     * @param tenantId
     * @param xApiVersion
     * @returns TenantEnrolmentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getTenantEnrollments(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantEnrolmentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Enrollments',
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
     * Retrieve a single tenant enrollment by its ID
     * Retrieve a single tenant enrollment by its ID
     * @param tenantId
     * @param userId
     * @param xApiVersion
     * @returns TenantEnrolmentDtoEnvelope OK
     * @throws ApiError
     */
    public static getTenantEnrollmentById(
        tenantId: string,
        userId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantEnrolmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Enrollments/{tenantId}',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'userId': userId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Update a tenant enrollment
     * Update a tenant enrollment
     * @param tenantId
     * @param tenantEnrollmentId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static updateTenantEnrollment(
        tenantId: string,
        tenantEnrollmentId: string,
        xApiVersion?: string,
        requestBody?: TenantEnrollmentUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/Enrollments/{tenantEnrollmentId}',
            path: {
                'tenantEnrollmentId': tenantEnrollmentId,
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
     * Partially update a tenant enrollment
     * Partially update a tenant enrollment
     * @param tenantId
     * @param tenantEnrollmentId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static patchTenantEnrollment(
        tenantId: string,
        tenantEnrollmentId: string,
        xApiVersion?: string,
        requestBody?: Array<Operation>,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/Enrollments/{tenantEnrollmentId}',
            path: {
                'tenantEnrollmentId': tenantEnrollmentId,
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
     * Delete a tenant enrollment
     * Delete a tenant enrollment
     * @param tenantId
     * @param tenantEnrollmentId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteTenantEnrollment(
        tenantId: string,
        tenantEnrollmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/Enrollments/{tenantEnrollmentId}',
            path: {
                'tenantEnrollmentId': tenantEnrollmentId,
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
     * Create a new tenant industry
     * Create a new tenant industry
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantIndustryDtoEnvelope Created
     * @throws ApiError
     */
    public static createTenantIndustry(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: TenantIndustryCreateDto,
    ): CancelablePromise<TenantIndustryDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/Industries',
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
     * Retrieve a list of tenant industries
     * Retrieve a list of tenant industries
     * @param tenantId
     * @param xApiVersion
     * @returns TenantIndustryDtoListEnvelope OK
     * @throws ApiError
     */
    public static getTenantIndustries(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantIndustryDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Industries',
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
     * Retrieve a single tenant industry by its ID
     * Retrieve a single tenant industry by its ID
     * @param tenantIndustryId
     * @param xApiVersion
     * @returns TenantIndustryDtoEnvelope OK
     * @throws ApiError
     */
    public static getTenantIndustryById(
        tenantIndustryId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantIndustryDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Industries/{tenantIndustryId}',
            path: {
                'tenantIndustryId': tenantIndustryId,
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
     * Delete a tenant industry
     * Delete a tenant industry
     * @param tenantId
     * @param tenantIndustryId
     * @param xApiVersion
     * @returns TenantIndustryDtoEnvelope OK
     * @throws ApiError
     */
    public static deleteTenantIndustry(
        tenantId: string,
        tenantIndustryId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantIndustryDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/Industries/{tenantIndustryId}',
            path: {
                'tenantIndustryId': tenantIndustryId,
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
     * Update a tenant industry
     * Update a tenant industry
     * @param tenantId
     * @param tenantIndustryId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantIndustryDtoEnvelope OK
     * @throws ApiError
     */
    public static updateTenantIndustry(
        tenantId: string,
        tenantIndustryId: string,
        xApiVersion?: string,
        requestBody?: TenantIndustryUpdateDto,
    ): CancelablePromise<TenantIndustryDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/Industries/{tenantIndustryId}',
            path: {
                'tenantIndustryId': tenantIndustryId,
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
     * Partially update a tenant industry
     * Partially update a tenant industry
     * @param tenantId
     * @param tenantIndustryId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantIndustryDtoEnvelope OK
     * @throws ApiError
     */
    public static patchTenantIndustry(
        tenantId: string,
        tenantIndustryId: string,
        xApiVersion?: string,
        requestBody?: Array<Operation>,
    ): CancelablePromise<TenantIndustryDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/Industries/{tenantIndustryId}',
            path: {
                'tenantIndustryId': tenantIndustryId,
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
     * Get an invitation by its ID
     * Get an invitation by its ID
     * @param invitationId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantInvitationDtoEnvelope OK
     * @throws ApiError
     */
    public static getInvitation(
        invitationId: string,
        xApiVersion?: string,
        requestBody?: string,
    ): CancelablePromise<TenantInvitationDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/TenantService/Invitations/{invitationId}',
            path: {
                'invitationId': invitationId,
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
     * Delete an invitation
     * Delete an invitation
     * @param invitationId
     * @param tenantId
     * @param xApiVersion
     * @returns TenantDtoEnvelope OK
     * @throws ApiError
     */
    public static deleteInvitation(
        invitationId: string,
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/TenantService/Invitations/{invitationId}',
            path: {
                'invitationId': invitationId,
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
     * Send an invitation to a user to join a tenant
     * Send an invitation to a user to join a tenant
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantDtoEnvelope OK
     * @throws ApiError
     */
    public static sendInvitation(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: TenantInvitationCreateDto,
    ): CancelablePromise<TenantDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/TenantService/Invitations',
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
     * Decline an invitation to join a tenant
     * Decline an invitation to join a tenant
     * @param invitationId
     * @param xApiVersion
     * @returns TenantDtoEnvelope OK
     * @throws ApiError
     */
    public static declineInvitation(
        invitationId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/TenantService/Invitations/{invitationId}/Decline',
            path: {
                'invitationId': invitationId,
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
     * Accept an invitation to join a tenant
     * Accept an invitation to join a tenant
     * @param invitationId
     * @param xApiVersion
     * @returns TenantDtoEnvelope OK
     * @throws ApiError
     */
    public static acceptInvitation(
        invitationId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/TenantService/Invitations/{invitationId}/Accept',
            path: {
                'invitationId': invitationId,
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
     * Create a new tenant position
     * Create a new tenant position
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static createTenantPosition(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: TenantPositionCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/Positions',
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
     * Retrieve a list of tenant positions
     * Retrieve a list of tenant positions
     * @param tenantId
     * @param xApiVersion
     * @returns TenantPositionDtoListEnvelope OK
     * @throws ApiError
     */
    public static getTenantPositions(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantPositionDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Positions',
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
     * Retrieve a single tenant position by its ID
     * Retrieve a single tenant position by its ID
     * @param tenantPositionId
     * @param xApiVersion
     * @returns TenantPositionDtoEnvelope OK
     * @throws ApiError
     */
    public static getTenantPositionById(
        tenantPositionId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantPositionDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Positions/{tenantPositionId}',
            path: {
                'tenantPositionId': tenantPositionId,
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
     * Update a tenant position
     * Update a tenant position
     * @param tenantId
     * @param tenantPositionId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static updateTenantPosition(
        tenantId: string,
        tenantPositionId: string,
        xApiVersion?: string,
        requestBody?: TenantPositionUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/Positions/{tenantPositionId}',
            path: {
                'tenantPositionId': tenantPositionId,
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
     * Delete a tenant position
     * Delete a tenant position
     * @param tenantId
     * @param tenantPositionId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteTenantPosition(
        tenantId: string,
        tenantPositionId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/Positions/{tenantPositionId}',
            path: {
                'tenantPositionId': tenantPositionId,
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
     * Partially update a tenant position
     * Partially update a tenant position
     * @param tenantId
     * @param tenantPositionId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static patchTenantPosition(
        tenantId: string,
        tenantPositionId: string,
        xApiVersion?: string,
        requestBody?: Array<Operation>,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/Positions/{tenantPositionId}',
            path: {
                'tenantPositionId': tenantPositionId,
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
     * Create a new tenant segment
     * Create a new tenant segment
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantSegmentDtoEnvelope Created
     * @throws ApiError
     */
    public static createTenantSegment(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: TenantSegmentCreateDto,
    ): CancelablePromise<TenantSegmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/Segments',
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
     * Retrieve a list of tenant segments for a specific tenant
     * Retrieve a list of tenant segments for a specific tenant
     * @param tenantId
     * @param xApiVersion
     * @returns TenantSegmentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getTenantSegments(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantSegmentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Segments',
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
     * Retrieve a single tenant segment by its ID
     * Retrieve a single tenant segment by its ID
     * @param tenantSegmentId
     * @param xApiVersion
     * @returns TenantSegmentDtoEnvelope OK
     * @throws ApiError
     */
    public static getTenantSegmentById(
        tenantSegmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantSegmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Segments/{tenantSegmentId}',
            path: {
                'tenantSegmentId': tenantSegmentId,
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
     * Delete a tenant segment
     * Delete a tenant segment
     * @param tenantId
     * @param tenantSegmentId
     * @param xApiVersion
     * @returns TenantSegmentDtoEnvelope OK
     * @throws ApiError
     */
    public static deleteTenantSegment(
        tenantId: string,
        tenantSegmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantSegmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/Segments/{tenantSegmentId}',
            path: {
                'tenantSegmentId': tenantSegmentId,
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
     * Update a tenant segment
     * Update a tenant segment
     * @param tenantId
     * @param tenantSegmentId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantSegmentDtoEnvelope OK
     * @throws ApiError
     */
    public static updateTenantSegment(
        tenantId: string,
        tenantSegmentId: string,
        xApiVersion?: string,
        requestBody?: TenantSegmentUpdateDto,
    ): CancelablePromise<TenantSegmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/Segments/{tenantSegmentId}',
            path: {
                'tenantSegmentId': tenantSegmentId,
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
     * Partially update a tenant segment
     * Partially update a tenant segment
     * @param tenantId
     * @param tenantSegmentId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantSegmentDtoEnvelope OK
     * @throws ApiError
     */
    public static patchTenantSegment(
        tenantId: string,
        tenantSegmentId: string,
        xApiVersion?: string,
        requestBody?: Array<Operation>,
    ): CancelablePromise<TenantSegmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/Segments/{tenantSegmentId}',
            path: {
                'tenantSegmentId': tenantSegmentId,
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
     * Create a new tenant team contact enrollment
     * Create a new tenant team contact enrollment
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantTeamContactEnrollmentDtoEnvelope Created
     * @throws ApiError
     */
    public static createTenantContactEnrollmentAsync(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: TenantTeamContactEnrollmentCreateDto,
    ): CancelablePromise<TenantTeamContactEnrollmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/TeamContactEnrollments',
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
     * Retrieve a list of tenant team contact enrollments for a specific tenant
     * Retrieve a list of tenant team contact enrollments for a specific tenant
     * @param tenantId
     * @param xApiVersion
     * @returns TenantTeamContactEnrollmentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getTenantTeamContactEnrollmentsAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantTeamContactEnrollmentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/TeamContactEnrollments',
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
     * Retrieve a single tenant team contact enrollment by its ID
     * Retrieve a single tenant team contact enrollment by its ID
     * @param tenantTeamContactEnrollmentId
     * @param xApiVersion
     * @returns TenantTeamContactEnrollmentDtoEnvelope OK
     * @throws ApiError
     */
    public static getTenantTeamContactEnrollmentByIdAsync(
        tenantTeamContactEnrollmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantTeamContactEnrollmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/TeamContactEnrollments/{tenantTeamContactEnrollmentId}',
            path: {
                'tenantTeamContactEnrollmentId': tenantTeamContactEnrollmentId,
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
     * Delete a tenant team contact enrollment
     * Delete a tenant team contact enrollment
     * @param tenantId
     * @param tenantTeamContactEnrollmentId
     * @param xApiVersion
     * @returns TenantTeamContactEnrollmentDtoEnvelope OK
     * @throws ApiError
     */
    public static deleteTenantTeamContactEnrollmentAsync(
        tenantId: string,
        tenantTeamContactEnrollmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantTeamContactEnrollmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/TeamContactEnrollments/{tenantTeamContactEnrollmentId}',
            path: {
                'tenantTeamContactEnrollmentId': tenantTeamContactEnrollmentId,
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
     * Partially updates a tenant team contact enrollment by its ID
     * Partially updates a tenant team contact enrollment by its ID
     * @param tenantId
     * @param tenantTeamContactEnrollmentId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantTeamContactEnrollmentDtoEnvelope OK
     * @throws ApiError
     */
    public static patchTenantTeamContactEnrollmentAsync(
        tenantId: string,
        tenantTeamContactEnrollmentId: string,
        xApiVersion?: string,
        requestBody?: Array<Operation>,
    ): CancelablePromise<TenantTeamContactEnrollmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/TeamContactEnrollments/{tenantTeamContactEnrollmentId}',
            path: {
                'tenantTeamContactEnrollmentId': tenantTeamContactEnrollmentId,
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
     * Update a tenant team contact enrollment by its ID
     * Update a tenant team contact enrollment by its ID
     * @param tenantId
     * @param tenantTeamContactEnrollmentId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantTeamContactEnrollmentDtoEnvelope OK
     * @throws ApiError
     */
    public static updateTenantTeamContactEnrollmentAsync(
        tenantId: string,
        tenantTeamContactEnrollmentId: string,
        xApiVersion?: string,
        requestBody?: TenantTeamContactEnrollmentUpdateDto,
    ): CancelablePromise<TenantTeamContactEnrollmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/TeamContactEnrollments/{tenantTeamContactEnrollmentId}',
            path: {
                'tenantTeamContactEnrollmentId': tenantTeamContactEnrollmentId,
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
     * Create a new tenant team project enrollment
     * Create a new tenant team project enrollment
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantTeamProjectEnrollmentDtoEnvelope Created
     * @throws ApiError
     */
    public static createTenantTeamProjectEnrollmentAsync(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: TenantTeamProjectEnrollmentCreateDto,
    ): CancelablePromise<TenantTeamProjectEnrollmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/TeamProjectEnrollment',
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
     * Retrieve a list of tenant team project enrollments by tenant ID
     * Retrieve a list of tenant team project enrollments by tenant ID
     * @param tenantId
     * @param xApiVersion
     * @returns TenantTeamProjectEnrollmentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getTenantTeamProjectEnrollmentsAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantTeamProjectEnrollmentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/TeamProjectEnrollment',
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
     * Retrieve a single tenant team project enrollment by its ID
     * Retrieve a single tenant team project enrollment by its ID
     * @param tenantTeamId
     * @param xApiVersion
     * @returns TenantTeamProjectEnrollmentDtoEnvelope OK
     * @throws ApiError
     */
    public static getTenantTeamProjectEnrollmentByIdAsync(
        tenantTeamId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantTeamProjectEnrollmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/TeamProjectEnrollment/{tenantTeamId}',
            path: {
                'tenantTeamId': tenantTeamId,
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
     * Delete a tenant team project enrollment
     * Delete a tenant team project enrollment
     * @param tenantId
     * @param tenantTeamId
     * @param xApiVersion
     * @returns TenantTeamProjectEnrollmentDtoEnvelope OK
     * @throws ApiError
     */
    public static deleteTenantTeamProjectEnrollmentAsync(
        tenantId: string,
        tenantTeamId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantTeamProjectEnrollmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/TeamProjectEnrollment/{tenantTeamId}',
            path: {
                'tenantTeamId': tenantTeamId,
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
     * Partially updates a tenant team project enrollment
     * Partially updates a tenant team project enrollment
     * @param tenantTeamId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantTeamProjectEnrollmentDtoEnvelope OK
     * @throws ApiError
     */
    public static patchTenantTeamProjectEnrollmentAsync(
        tenantTeamId: string,
        xApiVersion?: string,
        requestBody?: Array<Operation>,
    ): CancelablePromise<TenantTeamProjectEnrollmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/TeamProjectEnrollment/{tenantTeamId}',
            path: {
                'tenantTeamId': tenantTeamId,
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
     * Update a tenant team project enrollment
     * Update a tenant team project enrollment
     * @param tenantTeamId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantTeamProjectEnrollmentDtoEnvelope OK
     * @throws ApiError
     */
    public static updateTenantTeamProjectEnrollmentAsync(
        tenantTeamId: string,
        xApiVersion?: string,
        requestBody?: TenantTeamProjectEnrollmentUpdateDto,
    ): CancelablePromise<TenantTeamProjectEnrollmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/TeamProjectEnrollment/{tenantTeamId}',
            path: {
                'tenantTeamId': tenantTeamId,
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
     * Create a new tenant team record
     * Create a new tenant team record
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantTeamRecordDtoEnvelope Created
     * @throws ApiError
     */
    public static createTenantTeamRecordAsync(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: TenantTeamRecordCreateDto,
    ): CancelablePromise<TenantTeamRecordDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/TeamRecords',
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
     * Retrieve a list of tenant team records related to a specific tenant
     * Retrieve a list of tenant team records related to a specific tenant
     * @param tenantId
     * @param xApiVersion
     * @returns TenantTeamRecordDtoListEnvelope OK
     * @throws ApiError
     */
    public static getTenantTeamRecordsAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantTeamRecordDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/TeamRecords',
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
     * Retrieve a single tenant team record by its ID
     * Retrieve a single tenant team record by its ID
     * @param tenantTeamId
     * @param xApiVersion
     * @returns TenantTeamRecordDtoEnvelope OK
     * @throws ApiError
     */
    public static getTenantTeamRecordByIdAsync(
        tenantTeamId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantTeamRecordDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/TeamRecords/{tenantTeamId}',
            path: {
                'tenantTeamId': tenantTeamId,
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
     * Delete a tenant team record by its ID
     * Delete a tenant team record by its ID
     * @param tenantId
     * @param tenantTeamId
     * @param xApiVersion
     * @returns TenantTeamRecordDtoEnvelope OK
     * @throws ApiError
     */
    public static deleteTenantTeamRecordAsync(
        tenantId: string,
        tenantTeamId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantTeamRecordDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/TeamRecords/{tenantTeamId}',
            path: {
                'tenantTeamId': tenantTeamId,
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
     * Partially updates a tenant team record
     * Partially updates a tenant team record
     * @param tenantId
     * @param tenantTeamId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static patchTenantTeamRecordAsync(
        tenantId: string,
        tenantTeamId: string,
        xApiVersion?: string,
        requestBody?: Array<Operation>,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/TeamRecords/{tenantTeamId}',
            path: {
                'tenantTeamId': tenantTeamId,
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
     * Updates a tenant team record
     * Updates a tenant team record
     * @param tenantId
     * @param tenantTeamId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantTeamRecordDtoEnvelope OK
     * @throws ApiError
     */
    public static updateTenantTeamRecordAsync(
        tenantId: string,
        tenantTeamId: string,
        xApiVersion?: string,
        requestBody?: TenantTeamRecordUpdateDto,
    ): CancelablePromise<TenantTeamRecordDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/TeamRecords/{tenantTeamId}',
            path: {
                'tenantTeamId': tenantTeamId,
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
     * Create a new tenant team
     * Create a new tenant team
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantTeamDtoEnvelope Created
     * @throws ApiError
     */
    public static createTenantTeamAsync(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: TenantTeamCreateDto,
    ): CancelablePromise<TenantTeamDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/Teams',
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
     * Retrieve a list of tenant teams related to a specific tenant
     * Retrieve a list of tenant teams related to a specific tenant
     * @param tenantId
     * @param xApiVersion
     * @returns TenantTeamDtoListEnvelope OK
     * @throws ApiError
     */
    public static getTenantTeamsAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantTeamDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Teams',
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
     * Retrieve a single tenant team by its ID
     * Retrieve a single tenant team by its ID
     * @param tenantTeamId
     * @param xApiVersion
     * @returns TenantTeamDtoEnvelope OK
     * @throws ApiError
     */
    public static getTenantTeamByIdAsync(
        tenantTeamId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantTeamDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Teams/{tenantTeamId}',
            path: {
                'tenantTeamId': tenantTeamId,
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
     * Delete a tenant team by its ID
     * Delete a tenant team by its ID
     * @param tenantId
     * @param tenantTeamId
     * @param xApiVersion
     * @returns TenantTeamDtoEnvelope OK
     * @throws ApiError
     */
    public static deleteTenantTeamAsync(
        tenantId: string,
        tenantTeamId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantTeamDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/Teams/{tenantTeamId}',
            path: {
                'tenantTeamId': tenantTeamId,
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
     * Partially updates a tenant team by its ID
     * Partially updates a tenant team by its ID
     * @param tenantId
     * @param tenantTeamId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static patchTenantTeamAsync(
        tenantId: string,
        tenantTeamId: string,
        xApiVersion?: string,
        requestBody?: Array<Operation>,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/Teams/{tenantTeamId}',
            path: {
                'tenantTeamId': tenantTeamId,
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
     * Updates a tenant team
     * Updates a tenant team and returns an envelope.
     * @param tenantId
     * @param tenantTeamId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantTeamDtoEnvelope OK
     * @throws ApiError
     */
    public static updateTenantTeamAsync(
        tenantId: string,
        tenantTeamId: string,
        xApiVersion?: string,
        requestBody?: TenantTeamUpdateDto,
    ): CancelablePromise<TenantTeamDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/Teams/{tenantTeamId}',
            path: {
                'tenantTeamId': tenantTeamId,
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
     * Get the root tenant of the platform
     * Get the root tenant of the platform
     * @param xApiVersion
     * @returns TenantDtoEnvelope OK
     * @throws ApiError
     */
    public static getRootTenantAsync(
        xApiVersion?: string,
    ): CancelablePromise<TenantDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/Root',
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
     * Get the user's current default tenant
     * Get the user's current default tenant
     * @param tenantId
     * @param xApiVersion
     * @returns TenantDtoEnvelope OK
     * @throws ApiError
     */
    public static getCurrentTenantAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/Current',
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
     * Get a specific tenant by ID
     * Get a specific tenant by ID
     * @param tenantId
     * @param xApiVersion
     * @returns TenantDtoEnvelope OK
     * @throws ApiError
     */
    public static getTenantAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/{tenantId}',
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
     * Update a tenant's profile
     * Update a tenant's profile
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static updateTenantAsync(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: TenantUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/Tenants/{tenantId}',
            path: {
                'tenantId': tenantId,
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
     * Patch a tenant's profile
     * Patch a tenant's profile
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static patchTenantAsync(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: Array<Operation>,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/Tenants/{tenantId}',
            path: {
                'tenantId': tenantId,
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
     * Get an extended tenant's business profile
     * Get an extended tenant's business profile
     * @param tenantId
     * @param xApiVersion
     * @returns ExtendedTenantDtoEnvelope OK
     * @throws ApiError
     */
    public static getExtendedTenantAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ExtendedTenantDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/{tenantId}/Extended',
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
     * Get a tenant's avatar
     * Get a tenant's avatar
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static getTenantAvatarAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/{tenantId}/Avatar',
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
     * Update a tenant's avatar
     * Update a tenant's avatar
     * @param tenantId
     * @param xApiVersion
     * @param formData
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static updateAvatarAsync(
        tenantId: string,
        xApiVersion?: string,
        formData?: {
            avatar?: Blob;
        },
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/Tenants/{tenantId}/Avatar',
            path: {
                'tenantId': tenantId,
            },
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
     * Get a tenant's billing profile (A.K.A. Wallet Account)
     * Get a tenant's billing profile (A.K.A. Wallet Account)
     * @param tenantId
     * @param xApiVersion
     * @returns WalletDtoEnvelope OK
     * @throws ApiError
     */
    public static getTenantWalletAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<WalletDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/{tenantId}/Wallet',
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
     * Get a tenant's social profile
     * Get a tenant's social profile
     * @param tenantId
     * @param xApiVersion
     * @returns SocialProfileDtoEnvelope OK
     * @throws ApiError
     */
    public static getTenantSocialProfileAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<SocialProfileDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/{tenantId}/SocialProfile',
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
     * Get a tenant's default cart
     * Get a tenant's default cart
     * @param tenantId
     * @param xApiVersion
     * @returns CartDtoEnvelope OK
     * @throws ApiError
     */
    public static getTenantCartAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<CartDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/{tenantId}/Cart',
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
     * Get the list of users enrolled in a tenant
     * Get the list of users enrolled in a tenant
     * @param tenantId
     * @param xApiVersion
     * @returns UserDtoListEnvelope OK
     * @throws ApiError
     */
    public static getTenantUsersAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<UserDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/{tenantId}/Users',
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
     * Get the list of user enrollments for a tenant
     * Get the list of user enrollments for a tenant
     * @param tenantId
     * @param xApiVersion
     * @returns TenantEnrolmentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getTenantEnrollmentsAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantEnrolmentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/{tenantId}/Enrollments',
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
     * Get a specific tenant enrollment
     * Get a specific tenant enrollment
     * @param tenantId
     * @param enrollmentId
     * @param xApiVersion
     * @returns TenantEnrolmentDtoEnvelope OK
     * @throws ApiError
     */
    public static getTenantEnrollmentAsync(
        tenantId: string,
        enrollmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantEnrolmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/{tenantId}/Enrollments/{enrollmentId}',
            path: {
                'tenantId': tenantId,
                'enrollmentId': enrollmentId,
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
     * Get a specific tenant enrollment
     * Get a specific tenant enrollment
     * @param tenantId
     * @param enrollmentId
     * @param xApiVersion
     * @returns ExtendedTenantEnrolmentDtoEnvelope OK
     * @throws ApiError
     */
    public static getExtendedTenantEnrollmentAsync(
        tenantId: string,
        enrollmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<ExtendedTenantEnrolmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/{tenantId}/Enrollments/{enrollmentId}/Extended',
            path: {
                'tenantId': tenantId,
                'enrollmentId': enrollmentId,
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
     * Get a specific tenant enrollment's permissions list
     * Get a specific tenant enrollment's permissions list
     * @param tenantId
     * @param enrollmentId
     * @param xApiVersion
     * @returns StringListEnvelope OK
     * @throws ApiError
     */
    public static getEnrollmentPermissionsAsync(
        tenantId: string,
        enrollmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<StringListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/{tenantId}/Enrollments/{enrollmentId}/Permissions',
            path: {
                'tenantId': tenantId,
                'enrollmentId': enrollmentId,
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
     * Validate the existence of a list of roles and permissions for a specific enrollment
     * Validate the existence of a list of roles and permissions for a specific enrollment
     * @param tenantId
     * @param enrollmentId
     * @param roles
     * @param permissions
     * @param xApiVersion
     * @returns BooleanEnvelope OK
     * @throws ApiError
     */
    public static getEnrollmentPermissionsAsync1(
        tenantId: string,
        enrollmentId: string,
        roles?: Array<string>,
        permissions?: Array<string>,
        xApiVersion?: string,
    ): CancelablePromise<BooleanEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/{tenantId}/Enrollments/{EnrollmentID}/Permissions/Validate',
            path: {
                'tenantId': tenantId,
                'enrollmentId': enrollmentId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'roles': roles,
                'permissions': permissions,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get the list of invitations issued by a tenant
     * Get the list of invitations issued by a tenant
     * @param tenantId
     * @param xApiVersion
     * @returns TenantInvitationDtoListEnvelope OK
     * @throws ApiError
     */
    public static getTenantInvitationsAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantInvitationDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/{tenantId}/Invitations',
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
     * Get the list of invitations issued by a tenant that are pending
     * Get the list of invitations issued by a tenant that are pending
     * @param tenantId
     * @param xApiVersion
     * @returns TenantInvitationDtoListEnvelope OK
     * @throws ApiError
     */
    public static getTenantPendingInvitationsAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantInvitationDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/{tenantId}/Invitations/Pending',
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
     * Get the list of invitations issued by a tenant that have been redeemed
     * Get the list of invitations issued by a tenant that have been redeemed
     * @param tenantId
     * @param xApiVersion
     * @returns TenantInvitationDtoListEnvelope OK
     * @throws ApiError
     */
    public static getTenantRedeemedInvitationsAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantInvitationDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/{tenantId}/Invitations/Redeemed',
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
     * Get the list of invitations issued by a tenant that have been revoked
     * Get the list of invitations issued by a tenant that have been revoked
     * @param tenantId
     * @param xApiVersion
     * @returns TenantInvitationDtoListEnvelope OK
     * @throws ApiError
     */
    public static getTenantRevokedInvitationsAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantInvitationDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/{tenantId}/Invitations/Revoked',
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
     * Get the list of licenses available to a tenant
     * Get the list of licenses available to a tenant
     * @param tenantId
     * @param xApiVersion
     * @returns SuiteLicenseDtoListEnvelope OK
     * @throws ApiError
     */
    public static getTenantLicensesAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<SuiteLicenseDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/{tenantId}/Licenses',
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
     * Get the list of licenses available to a specific enrollment
     * Get the list of licenses available to a specific enrollment
     * @param tenantId
     * @param enrollmentId
     * @param xApiVersion
     * @returns SuiteLicenseAssignmentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getEnrollmentLicensesAsync(
        tenantId: string,
        enrollmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<SuiteLicenseAssignmentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/{tenantId}/Enrollments/{EnrollmentId}/Licenses',
            path: {
                'tenantId': tenantId,
                'enrollmentId': enrollmentId,
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
     * Get the list of licenses available to a specific enrollment
     * Get the list of licenses available to a specific enrollment
     * @param tenantId
     * @param enrollmentId
     * @param licenseId
     * @param xApiVersion
     * @returns SuiteLicenseDtoListEnvelope OK
     * @throws ApiError
     */
    public static getEnrollmentLicensesAsync1(
        tenantId: string,
        enrollmentId: string,
        licenseId: string,
        xApiVersion?: string,
    ): CancelablePromise<SuiteLicenseDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/{tenantId}/Enrollments/{EnrollmentId}/Licenses/{licenseId}',
            path: {
                'tenantId': tenantId,
                'enrollmentId': enrollmentId,
                'licenseId': licenseId,
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
     * Assign a license to a specific enrollment
     * Assign a license to a specific enrollment
     * @param tenantId
     * @param enrollmentId
     * @param licenseId
     * @param xApiVersion
     * @returns SuiteLicenseDtoListEnvelope OK
     * @throws ApiError
     */
    public static assignLicenseAsync(
        tenantId: string,
        enrollmentId: string,
        licenseId: string,
        xApiVersion?: string,
    ): CancelablePromise<SuiteLicenseDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/Tenants/{tenantId}/Enrollments/{EnrollmentId}/Licenses/{licenseId}',
            path: {
                'tenantId': tenantId,
                'enrollmentId': enrollmentId,
                'licenseId': licenseId,
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
     * Revoke a license from a specific enrollment
     * Revoke a license from a specific enrollment
     * @param tenantId
     * @param enrollmentId
     * @param licenseId
     * @param xApiVersion
     * @returns SuiteLicenseDtoListEnvelope OK
     * @throws ApiError
     */
    public static revokeLicenseAsync(
        tenantId: string,
        enrollmentId: string,
        licenseId: string,
        xApiVersion?: string,
    ): CancelablePromise<SuiteLicenseDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/Tenants/{tenantId}/Enrollments/{EnrollmentId}/Licenses/{licenseId}',
            path: {
                'tenantId': tenantId,
                'enrollmentId': enrollmentId,
                'licenseId': licenseId,
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
     * Get the list of features accessible to a specific enrollment
     * Get the list of features accessible to a specific enrollment
     * @param tenantId
     * @param enrollmentId
     * @param xApiVersion
     * @returns SuiteLicenseFeatureDtoListEnvelope OK
     * @throws ApiError
     */
    public static getAccessibleFeaturesAsync(
        tenantId: string,
        enrollmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<SuiteLicenseFeatureDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/{tenantId}/Enrollments/{enrollmentId}/Features',
            path: {
                'tenantId': tenantId,
                'enrollmentId': enrollmentId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                403: `Forbidden`,
            },
        });
    }
    /**
     * Validate the access to a specific feature for a specific enrollment
     * Validate the access to a specific feature for a specific enrollment
     * @param tenantId
     * @param enrollmentId
     * @param feature
     * @param xApiVersion
     * @returns BooleanEnvelope OK
     * @throws ApiError
     */
    public static validateEnrollmentFeatureAccess(
        tenantId: string,
        enrollmentId: string,
        feature?: string,
        xApiVersion?: string,
    ): CancelablePromise<BooleanEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/{tenantId}/Enrollments/{enrollmentId}/HasAccess',
            path: {
                'tenantId': tenantId,
                'enrollmentId': enrollmentId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'feature': feature,
            },
            errors: {
                403: `Forbidden`,
            },
        });
    }
    /**
     * Create a new business tenant
     * Create a new business tenant
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static createTenantAsync(
        xApiVersion?: string,
        requestBody?: TenantCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/Tenants',
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
     * Delete a tenant
     * Delete a business tenant
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteTenantAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/Tenants',
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
     * Select a business tenant as the user's default tenant
     * Select a business tenant as the user's default tenant
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static selectTenantAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/{tenantId}/Select',
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
     * Select a business tenant as the user's default tenant
     * Select a business tenant as the user's default tenant
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static selectTenantAsync1(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/Tenants/{tenantId}/Select',
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
     * Deselect the user's default tenant
     * Deselect the user's default tenant
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deSelectTenantAsync(
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/Deselect',
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
     * Deselect the user's default tenant
     * Deselect the user's default tenant
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deSelectTenantAsync1(
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/Tenants/Deselect',
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
     * Get the list of web portals for a tenant
     * Get the list of web portals for a tenant
     * @param tenantId
     * @param xApiVersion
     * @returns WebPortalDtoListEnvelope OK
     * @throws ApiError
     */
    public static getTenantWebPortalsAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<WebPortalDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/{tenantId}/WebPortals',
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
     * Get the list of notifications for a tenant
     * Get the list of notifications for a tenant
     * @param tenantId
     * @param xApiVersion
     * @returns NotificationDtoListEnvelope OK
     * @throws ApiError
     */
    public static getTenantNotificationsAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<NotificationDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/{tenantId}/Notifications',
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
     * Get the count of notifications for a tenant
     * Get the count of notifications for a tenant
     * @param tenantId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getTenantNotificationsCountAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Tenants/{tenantId}/Notifications/Count',
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
     * Create a new tenant territory
     * Create a new tenant territory
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static createTenantTerritoryAsync(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: TenantTerritoryCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/Territories',
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
     * Retrieve a list of tenant territories for a specific tenant
     * Retrieve a list of tenant territories for a specific tenant
     * @param tenantId
     * @param xApiVersion
     * @returns TenantTerritoryDtoListEnvelope OK
     * @throws ApiError
     */
    public static getTenantTerritoriesAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantTerritoryDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Territories',
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
     * Retrieve a single tenant territory by its ID
     * Retrieve a single tenant territory by its ID
     * @param tenantTerritoryId
     * @param xApiVersion
     * @returns TenantTerritoryDtoEnvelope OK
     * @throws ApiError
     */
    public static getTenantTerritoryByIdAsync(
        tenantTerritoryId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantTerritoryDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Territories/{tenantTerritoryId}',
            path: {
                'tenantTerritoryId': tenantTerritoryId,
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
     * Partially update a tenant territory
     * Partially update a tenant territory
     * @param tenantId
     * @param tenantTerritoryId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static patchTenantTerritoryAsync(
        tenantId: string,
        tenantTerritoryId: string,
        xApiVersion?: string,
        requestBody?: Array<Operation>,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/Territories/{tenantTerritoryId}',
            path: {
                'tenantTerritoryId': tenantTerritoryId,
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
     * Update a tenant territory
     * Update a tenant territory
     * @param tenantId
     * @param tenantTerritoryId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putTenantTerritoryAsync(
        tenantId: string,
        tenantTerritoryId: string,
        xApiVersion?: string,
        requestBody?: TenantTerritoryUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/Territories/{tenantTerritoryId}',
            path: {
                'tenantTerritoryId': tenantTerritoryId,
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
     * Delete a tenant territory
     * Delete a tenant territory
     * @param tenantId
     * @param tenantTerritoryId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteTenantTerritoryAsync(
        tenantId: string,
        tenantTerritoryId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/Territories/{tenantTerritoryId}',
            path: {
                'tenantTerritoryId': tenantTerritoryId,
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
     * Create a new tenant type
     * Create a new tenant type
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantTypeDtoEnvelope Created
     * @throws ApiError
     */
    public static createTenantTypeAsync(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: TenantTypeCreateDto,
    ): CancelablePromise<TenantTypeDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/Types',
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
     * Retrieve a list of tenant types for a specific tenant
     * Retrieve a list of tenant types for a specific tenant
     * @param tenantId
     * @param xApiVersion
     * @returns TenantTypeDtoListEnvelope OK
     * @throws ApiError
     */
    public static getTenantTypesAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantTypeDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Types',
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
     * Retrieve a single tenant type by its ID
     * Retrieve a single tenant type by its ID
     * @param tenantTypeId
     * @param xApiVersion
     * @returns TenantTypeDtoEnvelope OK
     * @throws ApiError
     */
    public static getTenantTypeByIdAsync(
        tenantTypeId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantTypeDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Types/{tenantTypeId}',
            path: {
                'tenantTypeId': tenantTypeId,
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
     * Partially updates a tenant type by its ID
     * Partially updates a tenant type by its ID
     * @param tenantTypeId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantTypeDtoEnvelope OK
     * @throws ApiError
     */
    public static patchTenantTypeAsync(
        tenantTypeId: string,
        xApiVersion?: string,
        requestBody?: Array<Operation>,
    ): CancelablePromise<TenantTypeDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/Types/{tenantTypeId}',
            path: {
                'tenantTypeId': tenantTypeId,
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
     * Delete a tenant type by its ID
     * Delete a tenant type by its ID
     * @param tenantTypeId
     * @param xApiVersion
     * @returns TenantTypeDtoEnvelope OK
     * @throws ApiError
     */
    public static deleteTenantTypeAsync(
        tenantTypeId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantTypeDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/Types/{tenantTypeId}',
            path: {
                'tenantTypeId': tenantTypeId,
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
     * Updates a tenant type
     * Updates a tenant type and returns an envelope
     * @param tenantTypeId
     * @param xApiVersion
     * @param requestBody
     * @returns TenantTypeDtoEnvelope OK
     * @throws ApiError
     */
    public static updateTenantTypeAsync(
        tenantTypeId: string,
        xApiVersion?: string,
        requestBody?: TenantTypeUpdateDto,
    ): CancelablePromise<TenantTypeDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/Types/{tenantTypeId}',
            path: {
                'tenantTypeId': tenantTypeId,
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
     * Create a new tenant unit
     * Create a new tenant unit
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    public static createTenantUnitAsync(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: TenantUnitCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/Units',
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
     * Get list of tenant units related to a tenant
     * Get list of tenant units related to a tenant
     * @param tenantId
     * @param xApiVersion
     * @returns TenantUnitDtoListEnvelope OK
     * @throws ApiError
     */
    public static getTenantUnitsAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantUnitDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Units',
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
     * Partially updates a tenant unit
     * Partially updates a tenant unit
     * @param tenantId
     * @param tenantUnitId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static patchTenantUnitAsync(
        tenantId: string,
        tenantUnitId: string,
        xApiVersion?: string,
        requestBody?: Array<Operation>,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/Units',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
                'tenantUnitId': tenantUnitId,
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
     * Get single tenant unit by ID
     * Get single tenant unit by ID
     * @param tenantUnitId
     * @param xApiVersion
     * @returns TenantUnitDtoEnvelope OK
     * @throws ApiError
     */
    public static getTenantUnitByIdAsync(
        tenantUnitId: string,
        xApiVersion?: string,
    ): CancelablePromise<TenantUnitDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/Units/{tenantUnitId}',
            path: {
                'tenantUnitId': tenantUnitId,
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
     * Update tenant unit details
     * Update tenant unit details
     * @param tenantId
     * @param tenantUnitId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putTenantUnitAsync(
        tenantId: string,
        tenantUnitId: string,
        xApiVersion?: string,
        requestBody?: TenantUnitUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/Units/{tenantUnitId}',
            path: {
                'tenantUnitId': tenantUnitId,
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
     * Delete tenant unit by ID
     * Delete tenant unit by ID
     * @param tenantId
     * @param tenantUnitId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteTenantUnitAsync(
        tenantId: string,
        tenantUnitId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/Units/{tenantUnitId}',
            path: {
                'tenantUnitId': tenantUnitId,
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
}
