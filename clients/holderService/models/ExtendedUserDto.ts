/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CartDto } from './CartDto';
import type { SocialProfileDto } from './SocialProfileDto';
import type { UserSettingsDto } from './UserSettingsDto';
import type { WalletDto } from './WalletDto';
export type ExtendedUserDto = {
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
    gender?: ExtendedUserDto.gender | null;
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
    availability?: ExtendedUserDto.availability | null;
    lockoutEnabled?: boolean;
    lockoutEnd?: string | null;
    enrollmentsCount?: number | null;
    siteTheme?: ExtendedUserDto.siteTheme | null;
    cart?: CartDto;
    wallet?: WalletDto;
    socialProfile?: SocialProfileDto;
    settings?: UserSettingsDto;
};
export namespace ExtendedUserDto {
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

