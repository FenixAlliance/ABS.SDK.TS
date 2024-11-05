/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CourseCompletionCertificateCreateDto = {
    readonly id?: string;
    readonly timestamp?: string;
    studentProfileID: string;
    courseEnrollmentID: string;
    businessID?: string | null;
    businessProfileRecordID?: string | null;
    courseCompletionCertificateTemplateID?: string | null;
    courseID?: string | null;
};

