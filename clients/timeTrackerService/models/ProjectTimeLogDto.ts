/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ProjectTimeLogDto = {
    id?: string | null;
    timestamp?: string | null;
    projectId?: string | null;
    projectTaskId?: string | null;
    taskCategoryId?: string | null;
    projectPeriodId?: string | null;
    responsibleContactId?: string | null;
    creatorContactId?: string | null;
    recordType?: ProjectTimeLogDto.recordType;
    timeStamp?: string;
    timeSpan?: string;
    logDate?: string;
    comments?: string | null;
    type?: string | null;
};
export namespace ProjectTimeLogDto {
    export enum recordType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

