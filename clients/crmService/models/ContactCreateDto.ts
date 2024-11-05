/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ContactCreateDto = {
    readonly id?: string;
    readonly timestamp?: string;
    tenantId: string;
    type: ContactCreateDto.type;
    firstName: string;
    lastName?: string | null;
    email: string;
    taxId?: string | null;
    primaryContactId?: string | null;
    readonly qualifiedName?: string | null;
    about?: string | null;
    countryId?: string | null;
    stateId?: string | null;
    cityId?: string | null;
    mobilePhone?: string | null;
    businessPhone?: string | null;
    postalCode?: string | null;
    duns?: string | null;
    jobTitle?: string | null;
    webUrl?: string | null;
    currencyId?: string | null;
    languageId?: string | null;
    timezoneId?: string | null;
    birthday?: string | null;
    streetLine1?: string | null;
    streetLine2?: string | null;
    gitHubUrl?: string | null;
    twitchUrl?: string | null;
    redditUrl?: string | null;
    tikTokUrl?: string | null;
    websiteUrl?: string | null;
    twitterUrl?: string | null;
    facebookUrl?: string | null;
    youTubeUrl?: string | null;
    linkedInUrl?: string | null;
    instagramUrl?: string | null;
    githubUsername?: string | null;
    instagramUsername?: any;
    tikTokUsername?: any;
    stackExchangeUrl?: any;
    stackOverflowUrl?: any;
    parentContactId?: any;
};
export namespace ContactCreateDto {
    export enum type {
        '_0' = 0,
        '_1' = 1,
    }
}

