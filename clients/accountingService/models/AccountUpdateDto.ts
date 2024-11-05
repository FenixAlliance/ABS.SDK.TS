/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AccountUpdateDto = {
    group?: boolean;
    frozen?: boolean;
    name: string;
    code?: string | null;
    path?: string | null;
    prefix?: string | null;
    currencyId: string;
    accountTypeId?: string | null;
    parentAccountId?: string | null;
    accountCategory?: AccountUpdateDto.accountCategory;
};
export namespace AccountUpdateDto {
    export enum accountCategory {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
}

