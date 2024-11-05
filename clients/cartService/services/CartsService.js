"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class CartsService {
    /**
     * Get all business owned contacts
     * Get all business owned contacts
     * @param cartId
     * @param xApiVersion
     * @returns CartDtoEnvelope OK
     * @throws ApiError
     */
    static getCartByIdAsync(cartId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static updateCartAsync(cartId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static setCartCurrencyAsync(cartId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getCartCurrencyAsync(cartId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static setCartCountryAsync(cartId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getCartCountryAsync(cartId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static submitCartAsync(cartId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getActingCart(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getGuestCartAsync(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getUserCart(xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getTenantCartAsync(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getItemsInCartAsync(cartId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static clearCartAsync(cartId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static addItemToCartAsync(cartId, itemId, quantity = 1, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static updateItemCartRecordAsync(cartId, itemId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static removeItemFromCartAsync(cartId, itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static isItemAlreadyInCartAsync(cartId, itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static increaseItemCartRecordQuantityAsync(cartId, itemId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static removeItemFromCartAsync1(cartId, itemId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getCartLinesAsync(cartId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getCartLineAsync(cartId, lineId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static updateCartLineAsync(cartId, lineId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static removeCartLineAsync(cartId, lineId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static increaseCartLineAsync(cartId, lineId, quantity = 1, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static decreaseCartLineAsync(cartId, lineId, quantity = 1, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getWishListAsync(cartId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static createWishListAsync(cartId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static isItemInWishLists(cartId, itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static wishListExistsAsync(cartId, wishListId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static wishListExistsHeadAsync(cartId, wishListId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static updateItemToWishList(cartId, wishListId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getCartWishListDetailsAsync(cartId, wishListId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteWishList(cartId, wishListId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getCartWishListItemsAsync(cartId, wishListId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static addItemToWishList(cartId, wishListId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getCartWishListItemAsync(cartId, wishListId, recordId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteWishListRecord(cartId, wishListId, recordId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getItemToCompareRecords(cartId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getItemToCompareRecord(cartId, itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static addItemToCompareTableAsync(cartId, itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static removeItemFromCompareTableAsync(cartId, itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static isItemInCompareTableAsync(cartId, itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.CartsService = CartsService;
