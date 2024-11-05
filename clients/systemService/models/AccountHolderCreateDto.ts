/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AccountHolderCreateDto = {
    readonly id?: string;
    readonly timestamp?: string;
    qualifiedName?: string | null;
    birthday?: string;
    firstName?: string | null;
    lastName?: string | null;
    publicName?: string | null;
    idProvider?: string | null;
    gender?: AccountHolderCreateDto.gender;
    email?: string | null;
    about?: string | null;
    status?: string | null;
    jobTitle?: string | null;
    gitHubUrl?: string | null;
    websiteUrl?: string | null;
    twitterUrl?: string | null;
    facebookUrl?: string | null;
    youTubeUrl?: string | null;
    linkedInUrl?: string | null;
    instagramUrl?: string | null;
    timezoneId?: string | null;
    languageId?: string | null;
    currencyId?: string | null;
    countryId?: string | null;
    stateId?: string | null;
    cityId?: string | null;
    password?: string | null;
};
export namespace AccountHolderCreateDto {
    export enum gender {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

