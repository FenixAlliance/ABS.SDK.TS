/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SocialReactionDto = {
    id?: string | null;
    timestamp?: string | null;
    reaction?: SocialReactionDto.reaction;
    reactionValue?: string | null;
    socialProfileId?: string | null;
    socialProfileName?: string | null;
    socialProfileAvatarUrl?: string | null;
};
export namespace SocialReactionDto {
    export enum reaction {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
        '_7' = 7,
    }
}

