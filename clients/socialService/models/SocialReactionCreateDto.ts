/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SocialReactionCreateDto = {
    readonly id?: string;
    readonly timestamp?: string;
    reaction?: SocialReactionCreateDto.reaction;
    reactionValue?: string | null;
    socialProfileId?: string | null;
};
export namespace SocialReactionCreateDto {
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

