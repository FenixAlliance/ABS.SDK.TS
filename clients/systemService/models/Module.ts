/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ISwaggerSpec } from './ISwaggerSpec';
export type Module = {
    enable?: boolean;
    readonly active?: boolean;
    order?: number;
    id?: string | null;
    name?: string | null;
    readonly fullName?: string | null;
    description?: string | null;
    type?: Module.type;
    configuration?: string | null;
    author?: string | null;
    authorUrl?: string | null;
    license?: string | null;
    requireLicenseAcceptance?: boolean | null;
    repository?: string | null;
    path?: string | null;
    icon?: string | null;
    image?: string | null;
    nuSpecPath?: string | null;
    manifest?: string | null;
    documentation?: string | null;
    website?: string | null;
    logo?: string | null;
    swaggerSpec?: ISwaggerSpec;
    swaggerSpecs?: Array<ISwaggerSpec> | null;
    url?: string | null;
    assemblyPaths?: Array<string> | null;
    markedForDeletion?: boolean;
    version?: string | null;
};
export namespace Module {
    export enum type {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }
}

