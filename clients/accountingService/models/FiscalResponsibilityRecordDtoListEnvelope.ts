/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FiscalResponsibilityRecordDto } from './FiscalResponsibilityRecordDto';
export type FiscalResponsibilityRecordDtoListEnvelope = {
    readonly isSuccess?: boolean;
    errorMessage?: string | null;
    correlationId?: string | null;
    readonly timestamp?: string;
    readonly activityId?: string | null;
    result?: Array<FiscalResponsibilityRecordDto> | null;
};

