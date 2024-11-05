/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type InventoryOptions = {
    enableStockManagement?: boolean;
    hideOutOfStockProducts?: boolean;
    enableLowStockNotifications?: boolean;
    enableOutOfStockNotifications?: boolean;
    stockNotificationRecipients?: string | null;
    holdStock?: number;
    lowStockThreshold?: number;
    outOfStockThreshold?: number;
    stockDisplayFormat?: InventoryOptions.stockDisplayFormat;
};
export namespace InventoryOptions {
    export enum stockDisplayFormat {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }
}

