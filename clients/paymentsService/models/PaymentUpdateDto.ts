/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PaymentUpdateDto = {
    invoiceId?: string | null;
    tenantId?: string | null;
    emisorWalletId?: string | null;
    receiverWalletId?: string | null;
    currencyId?: string | null;
    forexRate?: number;
    totalCost?: number;
    totalTaxes?: number;
    closed?: boolean;
    data?: string | null;
    dataLabel?: string | null;
    data1?: string | null;
    data1Label?: string | null;
    response?: string | null;
    authorization?: string | null;
    referenceCode?: string | null;
    correlationCode?: string | null;
    lastUpdated?: string;
    onBehalfOf?: PaymentUpdateDto.onBehalfOf;
    paymentType?: PaymentUpdateDto.paymentType;
    paymentStatus?: PaymentUpdateDto.paymentStatus;
    baseCost?: number;
    signature?: string | null;
    signatureMismatch?: boolean;
    isExternal?: boolean;
    markedForRevision?: boolean;
    forexRatesSnapshot?: string | null;
    officialId?: string | null;
    officialIdExpeditionDate?: string;
    fiscalIdentificationTypeId?: string | null;
    billingAddress?: string | null;
    phone?: string | null;
    cellphone?: string | null;
    department?: string | null;
    city?: string | null;
    countryId?: string | null;
    locationId?: string | null;
    entitlementId?: string | null;
    antiFraudScore?: number;
    callRecordURL?: string | null;
    called?: boolean;
    verified?: boolean;
    payerPictureTimestamp?: string | null;
    payerPicture?: string | null;
    identificationPictureTimestamp?: string | null;
    identificationPicture?: string | null;
    identificationBackPicture?: string | null;
    identificationBackPictureTimestamp?: string | null;
    ipLookupId?: string | null;
    orderId?: string | null;
    accountingEntryId?: string | null;
    paymentGatewayId?: string | null;
    bankAccountId?: string | null;
    enrolmentId?: string | null;
    bankId?: string | null;
    paymentTokenId?: string | null;
    emisorWalletAccountId?: string | null;
    receiverWalletAccountId?: string | null;
};
export namespace PaymentUpdateDto {
    export enum onBehalfOf {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }
    export enum paymentType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
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

