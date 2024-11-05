/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SocialProfileDto = {
    id?: string | null;
    timestamp?: string | null;
    name?: string | null;
    about?: string | null;
    cover?: string | null;
    avatar?: string | null;
    countryId?: string | null;
    countryName?: string | null;
    identityId?: string | null;
    followsCount?: number | null;
    messagesCount?: number | null;
    followersCount?: number | null;
    notificationsCount?: number | null;
    unreadNotificationsCount?: number | null;
    unreadMessagesCount?: number | null;
    type?: SocialProfileDto.type | null;
    socialFeedId?: string | null;
    twitterUrl?: string | null;
    facebookURL?: string | null;
    linkedInURL?: string | null;
    youtubeURL?: string | null;
    githubURL?: string | null;
    pinterestURL?: string | null;
    dribbleURL?: string | null;
    domain?: string | null;
    notes?: string | null;
};
export namespace SocialProfileDto {
    export enum type {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

