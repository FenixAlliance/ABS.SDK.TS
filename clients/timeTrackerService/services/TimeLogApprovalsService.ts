/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectHoursApprovalApproverUpdateDto } from '../models/ProjectHoursApprovalApproverUpdateDto';
import type { ProjectHoursApprovalCreateDto } from '../models/ProjectHoursApprovalCreateDto';
import type { ProjectHoursApprovalStatusUpdateDto } from '../models/ProjectHoursApprovalStatusUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TimeLogApprovalsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postApiV2TimeTrackerServiceTimeLogApprovals(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: ProjectHoursApprovalCreateDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/TimeTrackerService/TimeLogApprovals',
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
     * @param approvalId
     * @param xApiVersion
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV2TimeTrackerServiceTimeLogApprovalsStatus(
        tenantId: string,
        approvalId: string,
        xApiVersion?: string,
        requestBody?: ProjectHoursApprovalStatusUpdateDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/TimeTrackerService/TimeLogApprovals/{approvalId}/Status',
            path: {
                'approvalId': approvalId,
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
     * @param approvalId
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static putApiV2TimeTrackerServiceTimeLogApprovalsApprover(
        approvalId: string,
        tenantId: string,
        xApiVersion?: string,
        requestBody?: ProjectHoursApprovalApproverUpdateDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/TimeTrackerService/TimeLogApprovals/{approvalId}/Approver',
            path: {
                'approvalId': approvalId,
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
}
