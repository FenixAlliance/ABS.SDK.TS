/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdditionalAttribute } from './AdditionalAttribute';
import type { LicenseFeature } from './LicenseFeature';
export type LicenseKeyRequest = {
    userId?: string;
    tenantId?: string | null;
    orderId?: string | null;
    paymentId?: string | null;
    invoiceId?: string | null;
    enrollmentId?: string | null;
    entitlementId?: string | null;
    seats?: number;
    licenseType?: LicenseKeyRequest.licenseType;
    expirationDate?: string;
    features?: Array<LicenseFeature> | null;
    additionalAttributes?: Array<AdditionalAttribute> | null;
};
export namespace LicenseKeyRequest {
    export enum licenseType {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }
}

