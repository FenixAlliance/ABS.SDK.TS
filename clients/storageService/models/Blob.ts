/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Blob = {
    kind?: Blob.kind;
    readonly isFolder?: boolean;
    readonly isFile?: boolean;
    readonly folderPath?: string | null;
    readonly name?: string | null;
    size?: number | null;
    md5?: string | null;
    createdTime?: string | null;
    lastModificationTime?: string | null;
    fullPath?: string | null;
    readonly properties?: Record<string, any> | null;
    readonly metadata?: Record<string, string | null> | null;
    readonly isRootFolder?: boolean;
};
export namespace Blob {
    export enum kind {
        '_0' = 0,
        '_1' = 1,
    }
}

