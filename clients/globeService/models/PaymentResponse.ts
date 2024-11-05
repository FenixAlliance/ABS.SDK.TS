/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PaymentResponse = {
    test?: boolean;
    ip?: string | null;
    bank?: string | null;
    status?: string | null;
    errors?: any;
    response?: string | null;
    authCode?: string | null;
    paymentID?: string | null;
    franchise?: string | null;
    signature?: string | null;
    paymentStatus?: PaymentResponse.paymentStatus;
};
export namespace PaymentResponse {
    export enum paymentStatus {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
        '_7' = 7,
        '_8' = 8,
        '_9' = 9,
        '_10' = 10,
        '_11' = 11,
    }
}

