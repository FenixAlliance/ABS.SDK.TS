/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreDataRetentionPolicy } from './StoreDataRetentionPolicy';
export type IdentityAndPrivacyOptions = {
    allowGuestOrders?: boolean;
    allowGuestCartRecognition?: boolean;
    allowRemoveDownloadAccessOnRequest?: boolean;
    allowRemovePersonalDataFromOrdersOnRequest?: boolean;
    allowRemovePersonalDataFromSubscriptionsOnRequest?: boolean;
    storeCheckoutPrivacyPolicyNotice?: string | null;
    storeRegistrationPrivacyPolicyNotice?: string | null;
    defaultCustomerLocation?: IdentityAndPrivacyOptions.defaultCustomerLocation;
    inactiveCartsRetentionPolicy?: StoreDataRetentionPolicy;
    pendingOrdersRetentionPolicy?: StoreDataRetentionPolicy;
    failedOrdersRetentionPolicy?: StoreDataRetentionPolicy;
    cancelledOrdersRetentionPolicy?: StoreDataRetentionPolicy;
    completedOrdersRetentionPolicy?: StoreDataRetentionPolicy;
};
export namespace IdentityAndPrivacyOptions {
    export enum defaultCustomerLocation {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }
}

