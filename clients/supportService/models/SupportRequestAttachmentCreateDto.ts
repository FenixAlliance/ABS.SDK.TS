/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SupportRequestAttachmentCreateDto = {
    readonly id?: string;
    readonly timestamp?: string;
    notes?: string | null;
    title?: string | null;
    author?: string | null;
    isFolder?: boolean;
    fileName?: string | null;
    abstract?: string | null;
    keyWords?: string | null;
    validResponse?: boolean;
    parentFileUploadId?: string | null;
    filePath?: string | null;
    file?: Blob | null;
    businessID?: string | null;
    businessProfileRecordID?: string | null;
    metadata?: string | null;
    supportRequestID?: string | null;
};
