/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ServicesOptions = {
    dripDownloadableContent?: boolean;
    retryFailedPayments?: boolean;
    allow0InitialCheckout?: boolean;
    allowMixedCheckout?: boolean;
    synchroniseRenewals?: boolean;
    addToCartButtonText?: string | null;
    placeOrderButtonText?: string | null;
    newSubscriberRole?: string | null;
    inactiveSubscriberRole?: string | null;
    enableAutomaticPayments?: number;
    enableManualRenewals?: number;
    displayAutoRenewalToggle?: number;
    acceptEarlyRenewals?: number;
    customerSuspensions?: number;
    enableSubscriptionSwitchingBetweenGroups?: number;
    enableSubscriptionSwitchingBetweenVariations?: number;
    prorateFirstRenewal?: ServicesOptions.prorateFirstRenewal;
};
export namespace ServicesOptions {
    export enum prorateFirstRenewal {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
    }
}

