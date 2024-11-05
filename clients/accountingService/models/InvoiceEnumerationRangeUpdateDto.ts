/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type InvoiceEnumerationRangeUpdateDto = {
    prefix?: string | null;
    suffix?: string | null;
    identifier?: string | null;
    qualifiedName?: string | null;
    currentNumeration?: number;
    numerationFrom?: number;
    numerationTo?: number;
    validFrom?: string;
    validTo?: string;
    fiscalAuthorityId?: string | null;
    tenantId?: string | null;
    enrolmentId?: string | null;
    documentType?: InvoiceEnumerationRangeUpdateDto.documentType;
};
export namespace InvoiceEnumerationRangeUpdateDto {
    export enum documentType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

