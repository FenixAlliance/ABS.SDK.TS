/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from './Error';
export type ResponseStatus = {
    success?: boolean;
    error?: Error;
    correlationID?: string | null;
    utcTimestamp?: string;
};
