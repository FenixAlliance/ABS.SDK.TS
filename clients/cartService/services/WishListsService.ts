/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BooleanEnvelope } from '../models/BooleanEnvelope';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { NewWishListRequest } from '../models/NewWishListRequest';
import type { ProductToWishListRequest } from '../models/ProductToWishListRequest';
import type { WishListDto } from '../models/WishListDto';
import type { WishListItemRecordDto } from '../models/WishListItemRecordDto';
import type { WishListUpdateDto } from '../models/WishListUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WishListsService {
    /**
     * @param cartId
     * @param productId
     * @param xApiVersion
     * @returns BooleanEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CartServiceWishListsContains(
        cartId?: string,
        productId?: string,
        xApiVersion?: string,
    ): CancelablePromise<BooleanEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/WishLists/Contains',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'cartId': cartId,
                'productId': productId,
            },
        });
    }
    /**
     * @param wishListId
     * @param xApiVersion
     * @returns BooleanEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CartServiceWishListsExists(
        wishListId?: string,
        xApiVersion?: string,
    ): CancelablePromise<BooleanEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/WishLists/Exists',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'wishListId': wishListId,
            },
        });
    }
    /**
     * @param wishListId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static headApiV2CartServiceWishListsExists(
        wishListId?: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/v2/CartService/WishLists/Exists',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'wishListId': wishListId,
            },
        });
    }
    /**
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static postApiV2CartServiceWishLists(
        xApiVersion?: string,
        requestBody?: NewWishListRequest,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CartService/WishLists',
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param wishListId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2CartServiceWishLists(
        wishListId: string,
        xApiVersion?: string,
        requestBody?: WishListUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CartService/WishLists/{wishListId}',
            path: {
                'wishListId': wishListId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param wishListId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2CartServiceWishLists(
        wishListId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CartService/WishLists/{wishListId}',
            path: {
                'wishListId': wishListId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
    /**
     * @param cartId
     * @param xApiVersion
     * @returns WishListDto OK
     * @throws ApiError
     */
    public static getApiV2CartServiceWishLists(
        cartId: string,
        xApiVersion?: string,
    ): CancelablePromise<Array<WishListDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/WishLists/{cartId}',
            path: {
                'cartId': cartId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
    /**
     * @param wishListId
     * @param xApiVersion
     * @returns WishListItemRecordDto OK
     * @throws ApiError
     */
    public static getApiV2CartServiceWishListsRecords(
        wishListId: string,
        xApiVersion?: string,
    ): CancelablePromise<Array<WishListItemRecordDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/WishLists/{wishListId}/Records',
            path: {
                'wishListId': wishListId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
    /**
     * @param wishListId
     * @param xApiVersion
     * @returns WishListDto OK
     * @throws ApiError
     */
    public static getApiV2CartServiceWishListsDetails(
        wishListId: string,
        xApiVersion?: string,
    ): CancelablePromise<WishListDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/WishLists/{wishListId}/Details',
            path: {
                'wishListId': wishListId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
    /**
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static postApiV2CartServiceWishListsRecords(
        xApiVersion?: string,
        requestBody?: ProductToWishListRequest,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CartService/WishLists/Records',
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param recordId
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiV2CartServiceWishListsRecords(
        recordId: string,
        xApiVersion?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CartService/WishLists/Records/{recordId}',
            path: {
                'recordId': recordId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
        });
    }
}
