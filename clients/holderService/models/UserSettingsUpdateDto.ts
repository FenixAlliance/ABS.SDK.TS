/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserSettingsUpdateDto = {
    pageSize?: number | null;
    dateFormat: string;
    currencyFormat: string;
    dateTimeFormat: string;
    siteTheme: UserSettingsUpdateDto.siteTheme;
};
export namespace UserSettingsUpdateDto {
    export enum siteTheme {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

