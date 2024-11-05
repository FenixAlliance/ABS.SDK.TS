"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicensingService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class LicensingService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns SuiteLicenseDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2SystemServiceLicensingLicenses(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2SystemServiceLicensingLicenses1(licenseId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2SystemServiceLicensingLicensesAssignments(licenseId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2SystemServiceLicensingLicensesAttributes(licenseId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2SystemServiceLicensingLicensesFeatures(licenseId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2SystemServiceLicensingLicensesQuota(licenseId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2SystemServiceLicensingLicensesRedeem(tenantId, requestBody, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2SystemServiceLicensingLicensesValidate(requestBody, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.LicensingService = LicensingService;
