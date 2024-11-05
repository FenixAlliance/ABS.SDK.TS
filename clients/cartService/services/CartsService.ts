/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BooleanEnvelope } from '../models/BooleanEnvelope';
import type { CartDtoEnvelope } from '../models/CartDtoEnvelope';
import type { CartUpdateRequest } from '../models/CartUpdateRequest';
import type { CountryDtoEnvelope } from '../models/CountryDtoEnvelope';
import type { CountrySwitchRequest } from '../models/CountrySwitchRequest';
import type { CurrencyDtoEnvelope } from '../models/CurrencyDtoEnvelope';
import type { CurrencySwitchRequest } from '../models/CurrencySwitchRequest';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { ItemCartRecordDto } from '../models/ItemCartRecordDto';
import type { ItemCartRecordDtoListEnvelope } from '../models/ItemCartRecordDtoListEnvelope';
import type { ItemCartRecordUpdateDto } from '../models/ItemCartRecordUpdateDto';
import type { ItemToCompareCartRecordDto } from '../models/ItemToCompareCartRecordDto';
import type { ItemToCompareCartRecordDtoEnvelope } from '../models/ItemToCompareCartRecordDtoEnvelope';
import type { ItemToCompareCartRecordDtoListEnvelope } from '../models/ItemToCompareCartRecordDtoListEnvelope';
import type { NewWishListRequest } from '../models/NewWishListRequest';
import type { ProductToWishListRequest } from '../models/ProductToWishListRequest';
import type { WishListDto } from '../models/WishListDto';
import type { WishListDtoEnvelope } from '../models/WishListDtoEnvelope';
import type { WishListItemRecordDto } from '../models/WishListItemRecordDto';
import type { WishListUpdateDto } from '../models/WishListUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CartsService {
    /**
     * Get all business owned contacts
     * Get all business owned contacts
     * @param cartId
     * @param xApiVersion
     * @returns CartDtoEnvelope OK
     * @throws ApiError
     */
    public static getCartByIdAsync(
        cartId: string,
        xApiVersion?: string,
    ): CancelablePromise<CartDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Carts/{cartId}',
            path: {
                'cartId': cartId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Update a cart
     * Update a cart
     * @param cartId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static updateCartAsync(
        cartId: string,
        xApiVersion?: string,
        requestBody?: CartUpdateRequest,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CartService/Carts/{cartId}',
            path: {
                'cartId': cartId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Set the currency of a cart
     * Set the currency of a cart
     * @param cartId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static setCartCurrencyAsync(
        cartId: string,
        xApiVersion?: string,
        requestBody?: CurrencySwitchRequest,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CartService/Carts/{cartId}/Currency',
            path: {
                'cartId': cartId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get the currency of a cart
     * The currency of a cart used for display purposes
     * @param cartId
     * @param xApiVersion
     * @returns CurrencyDtoEnvelope OK
     * @throws ApiError
     */
    public static getCartCurrencyAsync(
        cartId: string,
        xApiVersion?: string,
    ): CancelablePromise<CurrencyDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Carts/{cartId}/Currency',
            path: {
                'cartId': cartId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Set the country of a cart
     * Set the country of a cart
     * @param cartId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static setCartCountryAsync(
        cartId: string,
        xApiVersion?: string,
        requestBody?: CountrySwitchRequest,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CartService/Carts/{cartId}/Country',
            path: {
                'cartId': cartId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get the country of a cart
     * The country of a cart is used to calculate taxes and shipping costs
     * @param cartId
     * @param xApiVersion
     * @returns CountryDtoEnvelope OK
     * @throws ApiError
     */
    public static getCartCountryAsync(
        cartId: string,
        xApiVersion?: string,
    ): CancelablePromise<CountryDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Carts/{cartId}/Country',
            path: {
                'cartId': cartId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Submit a cart for processing
     * Submit a cart for processing
     * @param cartId
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static submitCartAsync(
        cartId: string,
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CartService/Carts/{cartId}/Submit',
            path: {
                'cartId': cartId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get the acting cart
     * Get the acting cart
     * @param xApiVersion
     * @returns CartDtoEnvelope OK
     * @throws ApiError
     */
    public static getActingCart(
        xApiVersion?: string,
    ): CancelablePromise<CartDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Carts/ActingCart',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get the guest cart
     * Get the guest cart
     * @param xApiVersion
     * @returns CartDtoEnvelope OK
     * @throws ApiError
     */
    public static getGuestCartAsync(
        xApiVersion?: string,
    ): CancelablePromise<CartDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Carts/GuestCart',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get the current user's cart
     * Get the current user's cart
     * @param xApiVersion
     * @returns CartDtoEnvelope OK
     * @throws ApiError
     */
    public static getUserCart(
        xApiVersion?: string,
    ): CancelablePromise<CartDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Carts/UserCart',
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get the business cart
     * Get the business cart
     * @param tenantId
     * @param xApiVersion
     * @returns CartDtoEnvelope OK
     * @throws ApiError
     */
    public static getTenantCartAsync(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<CartDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Carts/BusinessCart/{tenantId}',
            path: {
                'tenantId': tenantId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Get all cart lines
     * Get all cart lines
     * @param cartId
     * @param xApiVersion
     * @returns ItemCartRecordDtoListEnvelope OK
     * @throws ApiError
     */
    public static getItemsInCartAsync(
        cartId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemCartRecordDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Carts/{cartId}/Items',
            path: {
                'cartId': cartId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Clear all items from a cart
     * Clear all items from a cart
     * @param cartId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static clearCartAsync(
        cartId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CartService/Carts/{cartId}/Items',
            path: {
                'cartId': cartId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Add an Item to a cart
     * Add an Item to a cart
     * @param cartId
     * @param itemId
     * @param quantity
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static addItemToCartAsync(
        cartId: string,
        itemId: string,
        quantity: number = 1,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CartService/Carts/{cartId}/Items/{itemId}',
            path: {
                'cartId': cartId,
                'itemId': itemId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'quantity': quantity,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Update an Item in a cart
     * Update an Item in a cart
     * @param cartId
     * @param itemId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static updateItemCartRecordAsync(
        cartId: string,
        itemId: string,
        xApiVersion?: string,
        requestBody?: ItemCartRecordUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CartService/Carts/{cartId}/Items/{itemId}',
            path: {
                'cartId': cartId,
                'itemId': itemId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Remove an Item from a cart
     * Remove an Item from a cart
     * @param cartId
     * @param itemId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static removeItemFromCartAsync(
        cartId: string,
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CartService/Carts/{cartId}/Items/{itemId}',
            path: {
                'cartId': cartId,
                'itemId': itemId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Assesses if an Item is already in a cart
     * Assesses if an Item is already in a cart
     * @param cartId
     * @param itemId
     * @param xApiVersion
     * @returns BooleanEnvelope OK
     * @throws ApiError
     */
    public static isItemAlreadyInCartAsync(
        cartId: string,
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<BooleanEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Carts/{cartId}/Contains/{itemId}',
            path: {
                'cartId': cartId,
                'itemId': itemId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Increase an Item in a cart
     * Increase an Item in a cart
     * @param cartId
     * @param itemId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static increaseItemCartRecordQuantityAsync(
        cartId: string,
        itemId: string,
        xApiVersion?: string,
        requestBody?: ItemCartRecordUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CartService/Carts/{cartId}/Items/{itemId}/Increase',
            path: {
                'cartId': cartId,
                'itemId': itemId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Decrease an Item in a cart
     * Decrease an Item in a cart
     * @param cartId
     * @param itemId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static removeItemFromCartAsync1(
        cartId: string,
        itemId: string,
        xApiVersion?: string,
        requestBody?: ItemCartRecordUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CartService/Carts/{cartId}/Items/{itemId}/Decrease',
            path: {
                'cartId': cartId,
                'itemId': itemId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Get all cart lines
     * Get all cart lines
     * @param cartId
     * @param xApiVersion
     * @returns ItemCartRecordDtoListEnvelope OK
     * @throws ApiError
     */
    public static getCartLinesAsync(
        cartId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemCartRecordDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Carts/{cartId}/Lines',
            path: {
                'cartId': cartId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Get a cart line by ID
     * Get a cart line by ID
     * @param cartId
     * @param lineId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static getCartLineAsync(
        cartId: string,
        lineId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Carts/{cartId}/Lines/{lineId}',
            path: {
                'cartId': cartId,
                'lineId': lineId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Update a cart line
     * Update a cart line
     * @param cartId
     * @param lineId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static updateCartLineAsync(
        cartId: string,
        lineId: string,
        xApiVersion?: string,
        requestBody?: ItemCartRecordUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CartService/Carts/{cartId}/Lines/{lineId}',
            path: {
                'cartId': cartId,
                'lineId': lineId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Remove a cart line
     * Remove a cart line
     * @param cartId
     * @param lineId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static removeCartLineAsync(
        cartId: string,
        lineId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CartService/Carts/{cartId}/Lines/{lineId}',
            path: {
                'cartId': cartId,
                'lineId': lineId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Increase the quantity of a cart line
     * Increase the quantity of a cart line
     * @param cartId
     * @param lineId
     * @param quantity
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static increaseCartLineAsync(
        cartId: string,
        lineId: string,
        quantity: number = 1,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CartService/Carts/{cartId}/Lines/{lineId}/Increase',
            path: {
                'cartId': cartId,
                'lineId': lineId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'quantity': quantity,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Decrease the quantity of a cart line
     * Decrease the quantity of a cart line
     * @param cartId
     * @param lineId
     * @param quantity
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static decreaseCartLineAsync(
        cartId: string,
        lineId: string,
        quantity: number = 1,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CartService/Carts/{cartId}/Lines/{lineId}/Decrease',
            path: {
                'cartId': cartId,
                'lineId': lineId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'quantity': quantity,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Get all wishlists in a cart
     * Get all wishlists in a cart
     * @param cartId
     * @param xApiVersion
     * @returns WishListDto OK
     * @throws ApiError
     */
    public static getWishListAsync(
        cartId: string,
        xApiVersion?: string,
    ): CancelablePromise<Array<WishListDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Carts/{cartId}/WishLists',
            path: {
                'cartId': cartId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Create a new wish list
     * Create a new wish list
     * @param cartId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static createWishListAsync(
        cartId: string,
        xApiVersion?: string,
        requestBody?: NewWishListRequest,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CartService/Carts/{cartId}/WishLists',
            path: {
                'cartId': cartId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Assesses if an Item is already in any of the cart's wishlists
     * Assesses if an Item is already in any of the cart's wishlists
     * @param cartId
     * @param itemId
     * @param xApiVersion
     * @returns BooleanEnvelope OK
     * @throws ApiError
     */
    public static isItemInWishLists(
        cartId: string,
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<BooleanEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Carts/{cartId}/WishLists/Contains/{itemId}',
            path: {
                'cartId': cartId,
                'itemId': itemId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Assesses if a WishList exists
     * Assesses if a WishList exists
     * @param cartId
     * @param wishListId
     * @param xApiVersion
     * @returns BooleanEnvelope OK
     * @throws ApiError
     */
    public static wishListExistsAsync(
        cartId: string,
        wishListId: string,
        xApiVersion?: string,
    ): CancelablePromise<BooleanEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}/Exists',
            path: {
                'cartId': cartId,
                'wishListId': wishListId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Assesses if a WishList exists
     * Assesses if a WishList exists but does not return the content
     * @param cartId
     * @param wishListId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static wishListExistsHeadAsync(
        cartId: string,
        wishListId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}/Exists',
            path: {
                'cartId': cartId,
                'wishListId': wishListId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Update a wish list
     * Update a wish list
     * @param cartId
     * @param wishListId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static updateItemToWishList(
        cartId: string,
        wishListId: string,
        xApiVersion?: string,
        requestBody?: WishListUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}',
            path: {
                'cartId': cartId,
                'wishListId': wishListId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Get a wish list by ID
     * Get a wish list by ID
     * @param cartId
     * @param wishListId
     * @param xApiVersion
     * @returns WishListDtoEnvelope OK
     * @throws ApiError
     */
    public static getCartWishListDetailsAsync(
        cartId: string,
        wishListId: string,
        xApiVersion?: string,
    ): CancelablePromise<WishListDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}',
            path: {
                'cartId': cartId,
                'wishListId': wishListId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Delete a wish list
     * Delete a wish list
     * @param cartId
     * @param wishListId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteWishList(
        cartId: string,
        wishListId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}',
            path: {
                'cartId': cartId,
                'wishListId': wishListId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Get all records in a wish list
     * Get all records in a wish list
     * @param cartId
     * @param wishListId
     * @param xApiVersion
     * @returns WishListItemRecordDto OK
     * @throws ApiError
     */
    public static getCartWishListItemsAsync(
        cartId: string,
        wishListId: string,
        xApiVersion?: string,
    ): CancelablePromise<Array<WishListItemRecordDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}/Records',
            path: {
                'cartId': cartId,
                'wishListId': wishListId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Add a record to a wish list
     * Add a record to a wish list
     * @param cartId
     * @param wishListId
     * @param xApiVersion
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static addItemToWishList(
        cartId: string,
        wishListId: string,
        xApiVersion?: string,
        requestBody?: ProductToWishListRequest,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}/Records',
            path: {
                'cartId': cartId,
                'wishListId': wishListId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Get a record in a wish list
     * Get a record in a wish list
     * @param cartId
     * @param wishListId
     * @param recordId
     * @param xApiVersion
     * @returns WishListItemRecordDto OK
     * @throws ApiError
     */
    public static getCartWishListItemAsync(
        cartId: string,
        wishListId: string,
        recordId: string,
        xApiVersion?: string,
    ): CancelablePromise<Array<WishListItemRecordDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}/Records/{recordId}',
            path: {
                'cartId': cartId,
                'wishListId': wishListId,
                'recordId': recordId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Remove a record from a wish list
     * Remove a record from a wish list
     * @param cartId
     * @param wishListId
     * @param recordId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteWishListRecord(
        cartId: string,
        wishListId: string,
        recordId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}/Records/{recordId}',
            path: {
                'cartId': cartId,
                'wishListId': wishListId,
                'recordId': recordId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Get all items in the compare table
     * Get all items in the compare table
     * @param cartId
     * @param xApiVersion
     * @returns ItemToCompareCartRecordDtoListEnvelope OK
     * @throws ApiError
     */
    public static getItemToCompareRecords(
        cartId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemToCompareCartRecordDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Carts/{cartId}/Compare',
            path: {
                'cartId': cartId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Get an item from the compare table
     * Get an item from the compare table
     * @param cartId
     * @param itemId
     * @param xApiVersion
     * @returns ItemToCompareCartRecordDtoEnvelope OK
     * @throws ApiError
     */
    public static getItemToCompareRecord(
        cartId: string,
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemToCompareCartRecordDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Carts/{cartId}/Compare/{itemId}',
            path: {
                'cartId': cartId,
                'itemId': itemId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Add an item to the compare table
     * Add an item to the compare table
     * @param cartId
     * @param itemId
     * @param xApiVersion
     * @returns ItemCartRecordDto OK
     * @throws ApiError
     */
    public static addItemToCompareTableAsync(
        cartId: string,
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemCartRecordDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/CartService/Carts/{cartId}/Compare/{itemId}',
            path: {
                'cartId': cartId,
                'itemId': itemId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Remove an item from the compare table
     * Remove an item from the compare table
     * @param cartId
     * @param itemId
     * @param xApiVersion
     * @returns ItemToCompareCartRecordDto OK
     * @throws ApiError
     */
    public static removeItemFromCompareTableAsync(
        cartId: string,
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemToCompareCartRecordDto> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CartService/Carts/{cartId}/Compare/{itemId}',
            path: {
                'cartId': cartId,
                'itemId': itemId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Assesses if an Item is already in the compare table
     * Assesses if an Item is already in the compare table
     * @param cartId
     * @param itemId
     * @param xApiVersion
     * @returns BooleanEnvelope OK
     * @throws ApiError
     */
    public static isItemInCompareTableAsync(
        cartId: string,
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<BooleanEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/CartService/Carts/{cartId}/Compare/Contains/{itemId}',
            path: {
                'cartId': cartId,
                'itemId': itemId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }
}
