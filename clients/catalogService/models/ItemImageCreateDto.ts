/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ItemImageCreateDto = {
    readonly id?: string;
    readonly timestamp?: string;
    businessID: string;
    businessProfileRecordID?: string | null;
    itemID?: string | null;
    isItemMozaicBG?: boolean;
    mD5Hash?: string | null;
    metadata?: string | null;
    fileUploadURL?: string | null;
    fileName: string;
    title?: string | null;
    abstract?: string | null;
    author?: string | null;
    keyWords?: string | null;
    notes?: string | null;
    contentType?: string | null;
    fileLength?: number;
    validResponse?: boolean;
    socialProfileID?: string | null;
    parentFileUploadID?: string | null;
    accountHolderID?: string | null;
};

