/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BooleanEnvelope } from '../models/BooleanEnvelope';
import type { GeneralValidationFailureListEnvelope } from '../models/GeneralValidationFailureListEnvelope';
import type { LicenseValidationRequest } from '../models/LicenseValidationRequest';
import type { SuiteLicenseAssignmentDtoListEnvelope } from '../models/SuiteLicenseAssignmentDtoListEnvelope';
import type { SuiteLicenseDtoEnvelope } from '../models/SuiteLicenseDtoEnvelope';
import type { SuiteLicenseDtoListEnvelope } from '../models/SuiteLicenseDtoListEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LicensingService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns SuiteLicenseDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SystemServiceLicensingLicenses(
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<SuiteLicenseDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SystemService/Licensing/Licenses',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param licenseId
     * @param xApiVersion
     * @returns SuiteLicenseDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SystemServiceLicensingLicenses1(
        licenseId: string,
        xApiVersion?: string,
    ): CancelablePromise<SuiteLicenseDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SystemService/Licensing/Licenses/{licenseId}',
            path: {
                'licenseId': licenseId,
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
     * @param licenseId
     * @param tenantId
     * @param xApiVersion
     * @returns SuiteLicenseAssignmentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SystemServiceLicensingLicensesAssignments(
        licenseId: string,
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<SuiteLicenseAssignmentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SystemService/Licensing/Licenses/{licenseId}/Assignments',
            path: {
                'licenseId': licenseId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param licenseId
     * @param tenantId
     * @param xApiVersion
     * @returns SuiteLicenseAssignmentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SystemServiceLicensingLicensesAttributes(
        licenseId: string,
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<SuiteLicenseAssignmentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SystemService/Licensing/Licenses/{licenseId}/Attributes',
            path: {
                'licenseId': licenseId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param licenseId
     * @param tenantId
     * @param xApiVersion
     * @returns SuiteLicenseAssignmentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SystemServiceLicensingLicensesFeatures(
        licenseId: string,
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<SuiteLicenseAssignmentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SystemService/Licensing/Licenses/{licenseId}/Features',
            path: {
                'licenseId': licenseId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param licenseId
     * @param tenantId
     * @param xApiVersion
     * @returns SuiteLicenseAssignmentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2SystemServiceLicensingLicensesQuota(
        licenseId: string,
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<SuiteLicenseAssignmentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/SystemService/Licensing/Licenses/{licenseId}/Quota',
            path: {
                'licenseId': licenseId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param tenantId
     * @param requestBody
     * @param xApiVersion
     * @returns BooleanEnvelope OK
     * @throws ApiError
     */
    public static postApiV2SystemServiceLicensingLicensesRedeem(
        tenantId: string,
        requestBody: LicenseValidationRequest,
        xApiVersion?: string,
    ): CancelablePromise<BooleanEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/SystemService/Licensing/Licenses/Redeem',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json;odata.metadata=minimal;odata.streaming=true',
            errors: {
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param requestBody
     * @param xApiVersion
     * @returns GeneralValidationFailureListEnvelope OK
     * @throws ApiError
     */
    public static postApiV2SystemServiceLicensingLicensesValidate(
        requestBody: LicenseValidationRequest,
        xApiVersion?: string,
    ): CancelablePromise<GeneralValidationFailureListEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/SystemService/Licensing/Licenses/Validate',
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json;odata.metadata=minimal;odata.streaming=true',
            errors: {
                403: `Forbidden`,
            },
        });
    }
}
