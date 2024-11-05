/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnrollmentId } from './EnrollmentId';
import type { TenantId } from './TenantId';
import type { UserId } from './UserId';
export type ApiAuthorizationResult = {
    userId?: UserId;
    tenantId?: TenantId;
    enrollmentId?: EnrollmentId;
    correlationId?: string | null;
    scopes?: Array<string> | null;
    error?: string | null;
    applicationId?: string | null;
};

