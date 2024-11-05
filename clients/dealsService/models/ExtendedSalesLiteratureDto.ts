/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SalesLiteratureTypeDto } from './SalesLiteratureTypeDto';
import type { TenantDto } from './TenantDto';
export type ExtendedSalesLiteratureDto = {
    id?: string | null;
    timestamp?: string | null;
    title?: string | null;
    content?: string | null;
    description?: string | null;
    modifiedDate?: string;
    expirationDate?: string;
    tenantId?: string | null;
    enrolmentId?: string | null;
    salesLiteratureTypeId?: string | null;
    salesLiteratureType?: SalesLiteratureTypeDto;
    tenant?: TenantDto;
};

