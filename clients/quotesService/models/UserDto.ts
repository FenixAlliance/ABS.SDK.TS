/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserDto = {
    id?: string | null;
    timestamp?: string | null;
    readonly fullName?: string | null;
    qualifiedName?: string | null;
    publicName?: string | null;
    lastName?: string | null;
    firstName?: string | null;
    coverUrl?: string | null;
    avatarUrl?: string | null;
    gitHubUrl?: string | null;
    countryId?: string | null;
    timezoneId?: string | null;
    websiteUrl?: string | null;
    twitterUrl?: string | null;
    youTubeUrl?: string | null;
    linkedInUrl?: string | null;
    facebookUrl?: string | null;
    instagramUrl?: string | null;
    socialProfileId?: string | null;
    birthday?: string | null;
    idProvider?: string | null;
    languageId?: string | null;
    gender?: UserDto.gender | null;
    cityId?: string | null;
    stateId?: string | null;
    email?: string | null;
    about?: string | null;
    jobTitle?: string | null;
    socialFeedId?: string | null;
    currentTenantId?: string | null;
    currentEnrollmentId?: string | null;
    status?: string | null;
    cartId?: string | null;
    walletId?: string | null;
    userName?: string | null;
    currencyId?: string | null;
    phoneNumber?: string | null;
    publicIdentifier?: string | null;
    identityProvider?: string | null;
    phoneNumberConfirmed?: boolean;
    emailConfirmed?: boolean;
    availability?: UserDto.availability | null;
    lockoutEnabled?: boolean;
    lockoutEnd?: string | null;
    enrollmentsCount?: number | null;
    siteTheme?: UserDto.siteTheme | null;
};
export namespace UserDto {
    export enum gender {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
    export enum availability {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
    export enum siteTheme {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

