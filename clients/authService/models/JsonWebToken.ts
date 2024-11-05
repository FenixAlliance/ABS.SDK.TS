/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JsonWebTokenHeader } from './JsonWebTokenHeader';
import type { JsonWebTokenPayload } from './JsonWebTokenPayload';
export type JsonWebToken = {
    header?: JsonWebTokenHeader;
    payload?: JsonWebTokenPayload;
    signature?: string | null;
    tokenType?: string | null;
    expiresIn?: number;
    accessToken?: string | null;
};

