/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type InvoiceEnumerationRangeDto = {
    id?: string | null;
    timestamp?: string | null;
    prefix?: string | null;
    suffix?: string | null;
    identifier?: string | null;
    qualifiedName?: string | null;
    currentNumeration?: number;
    numerationTo?: number;
    numerationFrom?: number;
    validFrom?: string;
    validTo?: string;
    fiscalAuthorityId?: string | null;
    tenantId?: string | null;
    enrolmentId?: string | null;
    documentType?: InvoiceEnumerationRangeDto.documentType;
};
export namespace InvoiceEnumerationRangeDto {
    export enum documentType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

