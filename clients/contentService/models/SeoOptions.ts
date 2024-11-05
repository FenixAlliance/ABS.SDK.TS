/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Creator } from './Creator';
import type { Organization } from './Organization';
export type SeoOptions = {
    keywords?: string | null;
    description?: string | null;
    logo?: string | null;
    socialImage?: string | null;
    titleSuffix?: string | null;
    bingVerificationCode?: string | null;
    googleVerificationCode?: string | null;
    pinterestVerificationCode?: string | null;
    creator?: Creator;
    organization?: Organization;
    sameAs?: Array<string> | null;
};

