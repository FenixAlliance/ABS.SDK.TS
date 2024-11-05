/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ItemBrandCreateDto = {
    readonly id?: string;
    readonly timestamp?: string;
    code?: string | null;
    name: string;
    description?: string | null;
    websiteURL?: string | null;
    imageFile?: Blob | null;
    featured?: boolean;
    trending?: boolean;
    businessID: string;
};

