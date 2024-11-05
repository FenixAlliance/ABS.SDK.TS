/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type MarketingListDto = {
    id?: string | null;
    timestamp?: string | null;
    locked?: boolean;
    name?: string | null;
    purpose?: string | null;
    description?: string | null;
    source?: string | null;
    cost?: number;
    modifiedOn?: string;
    lastUsedOn?: string;
    currencyId?: string | null;
    tenantId?: string | null;
    enrolmentId?: string | null;
    marketingListType?: MarketingListDto.marketingListType;
    marketingListTarget?: MarketingListDto.marketingListTarget;
};
export namespace MarketingListDto {
    export enum marketingListType {
        '_0' = 0,
        '_1' = 1,
    }
    export enum marketingListTarget {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

