/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TenantDto } from './TenantDto';
import type { UserDto } from './UserDto';
export type ExtendedTenantEnrolmentDto = {
    id?: string | null;
    timestamp?: string | null;
    tenantId?: string | null;
    userId?: string | null;
    isRoot?: boolean;
    isOwner?: boolean;
    isAdmin?: boolean;
    isDisabled?: boolean;
    tenant?: TenantDto;
    user?: UserDto;
};

