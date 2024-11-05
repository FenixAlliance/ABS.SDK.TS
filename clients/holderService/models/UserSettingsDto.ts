/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserSettingsDto = {
    id?: string | null;
    timestamp?: string | null;
    pageSize?: number;
    dateFormat?: string | null;
    currencyFormat?: string | null;
    dateTimeFormat?: string | null;
    siteTheme?: UserSettingsDto.siteTheme;
};
export namespace UserSettingsDto {
    export enum siteTheme {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

