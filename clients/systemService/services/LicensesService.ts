/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BooleanEnvelope } from '../models/BooleanEnvelope';
import type { LicenseAttributesListEnvelope } from '../models/LicenseAttributesListEnvelope';
import type { LicenseKey } from '../models/LicenseKey';
import type { LicenseKeyRequest } from '../models/LicenseKeyRequest';
import type { LicenseValidationErrorListEnvelope } from '../models/LicenseValidationErrorListEnvelope';
import type { StringEnvelope } from '../models/StringEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LicensesService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns BooleanEnvelope OK
     * @throws ApiError
     */
    public static getApiLicensingLicensesValidate(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: LicenseKey,
    ): CancelablePromise<BooleanEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Licensing/Licenses/Validate',
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
     * @param requestBody
     * @returns LicenseValidationErrorListEnvelope OK
     * @throws ApiError
     */
    public static getApiLicensingLicensesValidateErrors(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: LicenseKey,
    ): CancelablePromise<LicenseValidationErrorListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Licensing/Licenses/Validate/Errors',
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
     * @param requestBody
     * @returns LicenseAttributesListEnvelope OK
     * @throws ApiError
     */
    public static getApiLicensingLicensesValidateAttributes(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: LicenseKey,
    ): CancelablePromise<LicenseAttributesListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Licensing/Licenses/Validate/Attributes',
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
     * @param requestBody
     * @returns StringEnvelope OK
     * @throws ApiError
     */
    public static postApiLicensingLicensesGenerate(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: LicenseKeyRequest,
    ): CancelablePromise<StringEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Licensing/Licenses/Generate',
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
}
