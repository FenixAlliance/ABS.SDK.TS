/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemGoogleCategoryDto } from './ItemGoogleCategoryDto';
export type ItemGoogleCategoryDtoListEnvelope = {
    readonly isSuccess?: boolean;
    errorMessage?: string | null;
    correlationId?: string | null;
    readonly timestamp?: string;
    readonly activityId?: string | null;
    result?: Array<ItemGoogleCategoryDto> | null;
};

