"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class TenantsService {
    /**
     * Create a new tenant department
     * Create a new tenant department
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static createTenantDepartment(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantDepartments(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantDepartmentById(tenantDepartmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static updateTenantDepartment(tenantId, tenantDepartmentId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteTenantDepartment(tenantId, tenantDepartmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static patchTenantDepartment(tenantId, tenantDepartmentId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static createTenantTeamEmployeeEnrollment(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantTeamEmployeeEnrollments(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantTeamEmployeeEnrollmentById(tenantTeamId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteTenantTeamEmployeeEnrollment(tenantId, tenantTeamId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static updateTenantTeamEmployeeEnrollment(tenantTeamId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static patchTenantTeamEmployeeEnrollment(tenantTeamId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static createTenantEnrollment(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantEnrollments(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantEnrollmentById(tenantId, userId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static updateTenantEnrollment(tenantId, tenantEnrollmentId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static patchTenantEnrollment(tenantId, tenantEnrollmentId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteTenantEnrollment(tenantId, tenantEnrollmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static createTenantIndustry(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantIndustries(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantIndustryById(tenantIndustryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteTenantIndustry(tenantId, tenantIndustryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static updateTenantIndustry(tenantId, tenantIndustryId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static patchTenantIndustry(tenantId, tenantIndustryId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getInvitation(invitationId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteInvitation(invitationId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static sendInvitation(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static declineInvitation(invitationId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static acceptInvitation(invitationId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static createTenantPosition(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantPositions(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantPositionById(tenantPositionId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static updateTenantPosition(tenantId, tenantPositionId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteTenantPosition(tenantId, tenantPositionId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static patchTenantPosition(tenantId, tenantPositionId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static createTenantSegment(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantSegments(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantSegmentById(tenantSegmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteTenantSegment(tenantId, tenantSegmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static updateTenantSegment(tenantId, tenantSegmentId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static patchTenantSegment(tenantId, tenantSegmentId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static createTenantContactEnrollmentAsync(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantTeamContactEnrollmentsAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantTeamContactEnrollmentByIdAsync(tenantTeamContactEnrollmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteTenantTeamContactEnrollmentAsync(tenantId, tenantTeamContactEnrollmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static patchTenantTeamContactEnrollmentAsync(tenantId, tenantTeamContactEnrollmentId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static updateTenantTeamContactEnrollmentAsync(tenantId, tenantTeamContactEnrollmentId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static createTenantTeamProjectEnrollmentAsync(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantTeamProjectEnrollmentsAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantTeamProjectEnrollmentByIdAsync(tenantTeamId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteTenantTeamProjectEnrollmentAsync(tenantId, tenantTeamId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static patchTenantTeamProjectEnrollmentAsync(tenantTeamId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static updateTenantTeamProjectEnrollmentAsync(tenantTeamId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static createTenantTeamRecordAsync(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantTeamRecordsAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantTeamRecordByIdAsync(tenantTeamId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteTenantTeamRecordAsync(tenantId, tenantTeamId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static patchTenantTeamRecordAsync(tenantId, tenantTeamId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static updateTenantTeamRecordAsync(tenantId, tenantTeamId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static createTenantTeamAsync(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantTeamsAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantTeamByIdAsync(tenantTeamId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteTenantTeamAsync(tenantId, tenantTeamId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static patchTenantTeamAsync(tenantId, tenantTeamId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static updateTenantTeamAsync(tenantId, tenantTeamId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getRootTenantAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getCurrentTenantAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static updateTenantAsync(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static patchTenantAsync(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getExtendedTenantAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantAvatarAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static updateAvatarAsync(tenantId, xApiVersion, formData) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantWalletAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantSocialProfileAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantCartAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantUsersAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantEnrollmentsAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantEnrollmentAsync(tenantId, enrollmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getExtendedTenantEnrollmentAsync(tenantId, enrollmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getEnrollmentPermissionsAsync(tenantId, enrollmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getEnrollmentPermissionsAsync1(tenantId, enrollmentId, roles, permissions, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantInvitationsAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantPendingInvitationsAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantRedeemedInvitationsAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantRevokedInvitationsAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantLicensesAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getEnrollmentLicensesAsync(tenantId, enrollmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getEnrollmentLicensesAsync1(tenantId, enrollmentId, licenseId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static assignLicenseAsync(tenantId, enrollmentId, licenseId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static revokeLicenseAsync(tenantId, enrollmentId, licenseId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getAccessibleFeaturesAsync(tenantId, enrollmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static validateEnrollmentFeatureAccess(tenantId, enrollmentId, feature, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static createTenantAsync(xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteTenantAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static selectTenantAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static selectTenantAsync1(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deSelectTenantAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deSelectTenantAsync1(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantWebPortalsAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantNotificationsAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantNotificationsCountAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static createTenantTerritoryAsync(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantTerritoriesAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantTerritoryByIdAsync(tenantTerritoryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static patchTenantTerritoryAsync(tenantId, tenantTerritoryId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putTenantTerritoryAsync(tenantId, tenantTerritoryId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteTenantTerritoryAsync(tenantId, tenantTerritoryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static createTenantTypeAsync(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantTypesAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantTypeByIdAsync(tenantTypeId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static patchTenantTypeAsync(tenantTypeId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteTenantTypeAsync(tenantTypeId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static updateTenantTypeAsync(tenantTypeId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static createTenantUnitAsync(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantUnitsAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static patchTenantUnitAsync(tenantId, tenantUnitId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantUnitByIdAsync(tenantUnitId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putTenantUnitAsync(tenantId, tenantUnitId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteTenantUnitAsync(tenantId, tenantUnitId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.TenantsService = TenantsService;
