/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ProjectTimeLogCreateDto = {
    readonly id?: string;
    readonly timestamp?: string;
    timeSpan?: string;
    logDate?: string;
    comments?: string | null;
    projectTaskID: string;
    projectPeriodID: string;
    projectTimeLogRecordType?: ProjectTimeLogCreateDto.projectTimeLogRecordType;
    projectID?: string | null;
};
export namespace ProjectTimeLogCreateDto {
    export enum projectTimeLogRecordType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

