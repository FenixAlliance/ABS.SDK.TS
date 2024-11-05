/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ProjectTimeLogUpdateDto = {
    logDate?: string;
    timeSpan?: string;
    comments?: string | null;
    projectTaskID?: string | null;
    projectPeriodID?: string | null;
    projectTimeLogRecordType?: ProjectTimeLogUpdateDto.projectTimeLogRecordType;
};
export namespace ProjectTimeLogUpdateDto {
    export enum projectTimeLogRecordType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

