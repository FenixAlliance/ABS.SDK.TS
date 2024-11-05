"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ItemsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns CatalogItemDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItems(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items',
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
     * @param tenantId
     * @param xApiVersion
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    static postApiV2CatalogServiceItems(tenantId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/Items',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
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
     * @param tenantId
     * @param xApiVersion
     * @returns MoneyEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsMaxPrice(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/MaxPrice',
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
     * @param tenantId
     * @param xApiVersion
     * @returns MoneyEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsMinPrice(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/MinPrice',
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
     * @param tenantId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsCount(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/Count',
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
     * @param itemId
     * @param xApiVersion
     * @returns CatalogItemDtoEnvelope OK
     * @throws ApiError
     */
    static getStockItemByIdAsync(itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}',
            path: {
                'itemId': itemId,
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
     * @param tenantId
     * @param itemId
     * @param xApiVersion
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    static updateStockItemAsync(tenantId, itemId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/CatalogService/Items/{itemId}',
            path: {
                'itemId': itemId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
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
     * @param tenantId
     * @param itemId
     * @param xApiVersion
     * @returns any OK
     * @throws ApiError
     */
    static deleteApiV2CatalogServiceItems(tenantId, itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/Items/{itemId}',
            path: {
                'itemId': itemId,
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
     * @param itemId
     * @param xApiVersion
     * @returns CatalogItemDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsExtended(itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/Extended',
            path: {
                'itemId': itemId,
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
     * @param itemId
     * @param xApiVersion
     * @returns ItemTagDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsTags(itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/Tags',
            path: {
                'itemId': itemId,
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
     * @param itemId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsTagsCount(itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/Tags/Count',
            path: {
                'itemId': itemId,
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
     * @param itemId
     * @param itemTagId
     * @param xApiVersion
     * @returns ItemTagDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsTags1(itemId, itemTagId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/Tags/{itemTagId}',
            path: {
                'itemId': itemId,
                'itemTagId': itemTagId,
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
     * @param itemId
     * @param itemTagId
     * @param xApiVersion
     * @returns ItemTagDtoEnvelope OK
     * @throws ApiError
     */
    static postApiV2CatalogServiceItemsTags(itemId, itemTagId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/Items/{itemId}/Tags/{itemTagId}',
            path: {
                'itemId': itemId,
                'itemTagId': itemTagId,
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
     * @param itemId
     * @param itemTagId
     * @param xApiVersion
     * @returns ItemTagDtoEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2CatalogServiceItemsTags(itemId, itemTagId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/Items/{itemId}/Tags/{itemTagId}',
            path: {
                'itemId': itemId,
                'itemTagId': itemTagId,
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
     * @param itemId
     * @param xApiVersion
     * @returns ItemTypeDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsTypes(itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/Types',
            path: {
                'itemId': itemId,
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
     * @param itemId
     * @param itemTypeId
     * @param xApiVersion
     * @returns ItemTypeDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsTypes1(itemId, itemTypeId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/Types/{itemTypeId}',
            path: {
                'itemId': itemId,
                'itemTypeId': itemTypeId,
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
     * @param itemId
     * @param itemTypeId
     * @param xApiVersion
     * @returns ItemTypeDtoEnvelope OK
     * @throws ApiError
     */
    static postApiV2CatalogServiceItemsTypes(itemId, itemTypeId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/Items/{itemId}/Types/{itemTypeId}',
            path: {
                'itemId': itemId,
                'itemTypeId': itemTypeId,
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
     * @param itemId
     * @param itemTypeId
     * @param xApiVersion
     * @returns ItemTypeDtoEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2CatalogServiceItemsTypes(itemId, itemTypeId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/Items/{itemId}/Types/{itemTypeId}',
            path: {
                'itemId': itemId,
                'itemTypeId': itemTypeId,
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
     * @param itemId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsImagesPrimary(itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/Images/Primary',
            path: {
                'itemId': itemId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @param itemId
     * @param tenantId
     * @param xApiVersion
     * @param formData
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static postApiV2CatalogServiceItemsImagesPrimary(itemId, tenantId, xApiVersion, formData) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/Items/{itemId}/Images/Primary',
            path: {
                'itemId': itemId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param itemId
     * @param xApiVersion
     * @returns ItemImageDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsImages(itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/Images',
            path: {
                'itemId': itemId,
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
     * @param itemId
     * @param itemImageId
     * @param xApiVersion
     * @returns ItemImageDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsImages1(itemId, itemImageId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/Images/{itemImageId}',
            path: {
                'itemId': itemId,
                'itemImageId': itemImageId,
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
     * @param itemId
     * @param itemImageId
     * @param xApiVersion
     * @returns ItemImageDtoEnvelope OK
     * @throws ApiError
     */
    static postApiV2CatalogServiceItemsImages(itemId, itemImageId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/Items/{itemId}/Images/{itemImageId}',
            path: {
                'itemId': itemId,
                'itemImageId': itemImageId,
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
     * @param itemId
     * @param itemImageId
     * @param xApiVersion
     * @returns ItemImageDtoEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2CatalogServiceItemsImages(itemId, itemImageId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/Items/{itemId}/Images/{itemImageId}',
            path: {
                'itemId': itemId,
                'itemImageId': itemImageId,
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
     * @param itemId
     * @param xApiVersion
     * @returns ItemBrandDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsBrands(itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/Brands',
            path: {
                'itemId': itemId,
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
     * @param itemId
     * @param itemBrandId
     * @param xApiVersion
     * @returns ItemBrandDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsBrands1(itemId, itemBrandId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/Brands/{itemBrandId}',
            path: {
                'itemId': itemId,
                'itemBrandId': itemBrandId,
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
     * @param itemId
     * @param itemBrandId
     * @param xApiVersion
     * @returns ItemBrandDtoEnvelope OK
     * @throws ApiError
     */
    static postApiV2CatalogServiceItemsBrands(itemId, itemBrandId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/Items/{itemId}/Brands/{itemBrandId}',
            path: {
                'itemId': itemId,
                'itemBrandId': itemBrandId,
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
     * @param itemId
     * @param itemBrandId
     * @param xApiVersion
     * @returns ItemBrandDtoEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2CatalogServiceItemsBrands(itemId, itemBrandId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/Items/{itemId}/Brands/{itemBrandId}',
            path: {
                'itemId': itemId,
                'itemBrandId': itemBrandId,
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
     * @param itemId
     * @param xApiVersion
     * @returns ItemReviewDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsReviews(itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/Reviews',
            path: {
                'itemId': itemId,
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
     * @param itemId
     * @param xApiVersion
     * @param requestBody
     * @returns ItemReviewDtoEnvelope OK
     * @throws ApiError
     */
    static postApiV2CatalogServiceItemsReviews(itemId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/Items/{itemId}/Reviews',
            path: {
                'itemId': itemId,
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
     * @param itemId
     * @param itemReviewId
     * @param xApiVersion
     * @returns ItemReviewDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsReviews1(itemId, itemReviewId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/Reviews/{itemReviewId}',
            path: {
                'itemId': itemId,
                'itemReviewId': itemReviewId,
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
     * @param itemId
     * @param itemReviewId
     * @param xApiVersion
     * @returns ItemReviewDtoEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2CatalogServiceItemsReviews(itemId, itemReviewId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/Items/{itemId}/Reviews/{itemReviewId}',
            path: {
                'itemId': itemId,
                'itemReviewId': itemReviewId,
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
     * @param itemId
     * @param xApiVersion
     * @returns ItemQuestionDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsQuestions(itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/Questions',
            path: {
                'itemId': itemId,
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
     * @param itemId
     * @param xApiVersion
     * @param requestBody
     * @returns ItemQuestionDtoEnvelope OK
     * @throws ApiError
     */
    static postApiV2CatalogServiceItemsQuestions(itemId, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/Items/{itemId}/Questions',
            path: {
                'itemId': itemId,
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
     * @param itemId
     * @param itemQuestionId
     * @param xApiVersion
     * @returns ItemQuestionDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsQuestions1(itemId, itemQuestionId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/Questions/{itemQuestionId}',
            path: {
                'itemId': itemId,
                'itemQuestionId': itemQuestionId,
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
     * @param itemId
     * @param itemQuestionId
     * @param xApiVersion
     * @returns ItemQuestionDtoEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2CatalogServiceItemsQuestions(itemId, itemQuestionId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/Items/{itemId}/Questions/{itemQuestionId}',
            path: {
                'itemId': itemId,
                'itemQuestionId': itemQuestionId,
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
     * @param itemId
     * @param xApiVersion
     * @returns ItemCategoryDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsCategories(itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/Categories',
            path: {
                'itemId': itemId,
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
     * @param itemId
     * @param itemCategoryId
     * @param xApiVersion
     * @returns ItemCategoryDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsCategories1(itemId, itemCategoryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/Categories/{itemCategoryId}',
            path: {
                'itemId': itemId,
                'itemCategoryId': itemCategoryId,
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
     * @param itemId
     * @param itemCategoryId
     * @param xApiVersion
     * @returns ItemCategoryDtoEnvelope OK
     * @throws ApiError
     */
    static postApiV2CatalogServiceItemsCategories(itemId, itemCategoryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/Items/{itemId}/Categories/{itemCategoryId}',
            path: {
                'itemId': itemId,
                'itemCategoryId': itemCategoryId,
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
     * @param itemId
     * @param itemCategoryId
     * @param xApiVersion
     * @returns ItemCategoryDtoEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2CatalogServiceItemsCategories(itemId, itemCategoryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/Items/{itemId}/Categories/{itemCategoryId}',
            path: {
                'itemId': itemId,
                'itemCategoryId': itemCategoryId,
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
     * @param itemId
     * @param xApiVersion
     * @returns ItemAttachmentDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsAttachments(itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/Attachments',
            path: {
                'itemId': itemId,
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
     * @param itemId
     * @param itemAttachmentId
     * @param xApiVersion
     * @returns ItemAttachmentDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsAttachments1(itemId, itemAttachmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/Attachments/{itemAttachmentId}',
            path: {
                'itemId': itemId,
                'itemAttachmentId': itemAttachmentId,
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
     * @param itemId
     * @param itemAttachmentId
     * @param notes
     * @param title
     * @param author
     * @param isFolder
     * @param fileName
     * @param abstract
     * @param keyWords
     * @param validResponse
     * @param parentFileUploadId
     * @param filePath
     * @param iD
     * @param timestamp
     * @param xApiVersion
     * @param requestBody
     * @returns ItemAttachmentDtoEnvelope OK
     * @throws ApiError
     */
    static postApiV2CatalogServiceItemsAttachments(itemId, itemAttachmentId, notes, title, author, isFolder, fileName, abstract, keyWords, validResponse, parentFileUploadId, filePath, iD, timestamp, xApiVersion, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/Items/{itemId}/Attachments/{itemAttachmentId}',
            path: {
                'itemID': itemId,
                'itemAttachmentId': itemAttachmentId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'notes': notes,
                'title': title,
                'author': author,
                'isFolder': isFolder,
                'fileName': fileName,
                'abstract': abstract,
                'keyWords': keyWords,
                'validResponse': validResponse,
                'parentFileUploadId': parentFileUploadId,
                'filePath': filePath,
                'iD': iD,
                'timestamp': timestamp,
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
     * @param itemId
     * @param itemAttachmentId
     * @param xApiVersion
     * @returns ItemAttachmentDtoEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2CatalogServiceItemsAttachments(itemId, itemAttachmentId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/Items/{itemId}/Attachments/{itemAttachmentId}',
            path: {
                'itemId': itemId,
                'itemAttachmentId': itemAttachmentId,
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
     * @param itemId
     * @param xApiVersion
     * @returns ItemTaxPolicyDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsTaxPolicies(itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/TaxPolicies',
            path: {
                'itemId': itemId,
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
     * @param itemId
     * @param itemTaxPolicyId
     * @param xApiVersion
     * @returns ItemTaxPolicyDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsTaxPolicies1(itemId, itemTaxPolicyId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/TaxPolicies/{itemTaxPolicyId}',
            path: {
                'itemId': itemId,
                'itemTaxPolicyId': itemTaxPolicyId,
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
     * @param itemId
     * @param itemTaxPolicyId
     * @param xApiVersion
     * @returns ItemTaxPolicyDtoEnvelope OK
     * @throws ApiError
     */
    static postApiV2CatalogServiceItemsTaxPolicies(itemId, itemTaxPolicyId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/Items/{itemId}/TaxPolicies/{itemTaxPolicyId}',
            path: {
                'itemId': itemId,
                'itemTaxPolicyId': itemTaxPolicyId,
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
     * @param itemId
     * @param itemTaxPolicyId
     * @param xApiVersion
     * @returns ItemTaxPolicyDtoEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2CatalogServiceItemsTaxPolicies(itemId, itemTaxPolicyId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/Items/{itemId}/TaxPolicies/{itemTaxPolicyId}',
            path: {
                'itemId': itemId,
                'itemTaxPolicyId': itemTaxPolicyId,
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
     * @param itemId
     * @param xApiVersion
     * @returns PricingRuleDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsPriceRules(itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/PriceRules',
            path: {
                'itemId': itemId,
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
     * @param itemId
     * @param itemPriceRuleId
     * @param xApiVersion
     * @returns PricingRuleDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsPriceRules1(itemId, itemPriceRuleId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/PriceRules/{itemPriceRuleId}',
            path: {
                'itemId': itemId,
                'itemPriceRuleId': itemPriceRuleId,
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
     * @param itemId
     * @param itemPriceRuleId
     * @param xApiVersion
     * @returns PricingRuleDtoEnvelope OK
     * @throws ApiError
     */
    static postApiV2CatalogServiceItemsPriceRules(itemId, itemPriceRuleId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/Items/{itemId}/PriceRules/{itemPriceRuleId}',
            path: {
                'itemId': itemId,
                'itemPriceRuleId': itemPriceRuleId,
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
     * @param itemId
     * @param itemPriceRuleId
     * @param xApiVersion
     * @returns PricingRuleDtoEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2CatalogServiceItemsPriceRules(itemId, itemPriceRuleId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/Items/{itemId}/PriceRules/{itemPriceRuleId}',
            path: {
                'itemId': itemId,
                'itemPriceRuleId': itemPriceRuleId,
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
     * @param itemId
     * @param xApiVersion
     * @returns ItemReturnPolicyDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsReturnPolicies(itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/ReturnPolicies',
            path: {
                'itemId': itemId,
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
     * @param itemId
     * @param itemReturnPolicyId
     * @param xApiVersion
     * @returns ItemReturnPolicyDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsReturnPolicies1(itemId, itemReturnPolicyId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/ReturnPolicies/{itemReturnPolicyId}',
            path: {
                'itemId': itemId,
                'itemReturnPolicyId': itemReturnPolicyId,
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
     * @param itemId
     * @param itemReturnPolicyId
     * @param xApiVersion
     * @returns ItemReturnPolicyDtoEnvelope OK
     * @throws ApiError
     */
    static postApiV2CatalogServiceItemsReturnPolicies(itemId, itemReturnPolicyId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/Items/{itemId}/ReturnPolicies/{itemReturnPolicyId}',
            path: {
                'itemId': itemId,
                'itemReturnPolicyId': itemReturnPolicyId,
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
     * @param itemId
     * @param itemReturnPolicyId
     * @param xApiVersion
     * @returns ItemReturnPolicyDtoEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2CatalogServiceItemsReturnPolicies(itemId, itemReturnPolicyId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/Items/{itemId}/ReturnPolicies/{itemReturnPolicyId}',
            path: {
                'itemId': itemId,
                'itemReturnPolicyId': itemReturnPolicyId,
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
     * @param itemId
     * @param xApiVersion
     * @returns ItemRefundPolicyDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsRefundPolicies(itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/RefundPolicies',
            path: {
                'itemId': itemId,
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
     * @param itemId
     * @param itemRefundPolicyId
     * @param xApiVersion
     * @returns ItemRefundPolicyDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsRefundPolicies1(itemId, itemRefundPolicyId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/RefundPolicies/{itemRefundPolicyId}',
            path: {
                'itemId': itemId,
                'itemRefundPolicyId': itemRefundPolicyId,
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
     * @param itemId
     * @param itemRefundPolicyId
     * @param xApiVersion
     * @returns ItemRefundPolicyDtoEnvelope OK
     * @throws ApiError
     */
    static postApiV2CatalogServiceItemsRefundPolicies(itemId, itemRefundPolicyId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/Items/{itemId}/RefundPolicies/{itemRefundPolicyId}',
            path: {
                'itemId': itemId,
                'itemRefundPolicyId': itemRefundPolicyId,
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
     * @param itemId
     * @param itemRefundPolicyId
     * @param xApiVersion
     * @returns ItemRefundPolicyDtoEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2CatalogServiceItemsRefundPolicies(itemId, itemRefundPolicyId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/Items/{itemId}/RefundPolicies/{itemRefundPolicyId}',
            path: {
                'itemId': itemId,
                'itemRefundPolicyId': itemRefundPolicyId,
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
     * @param itemId
     * @param xApiVersion
     * @returns ItemShippingPolicyDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsShippingPolicies(itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/ShippingPolicies',
            path: {
                'itemId': itemId,
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
     * @param itemId
     * @param itemShippingPolicyId
     * @param xApiVersion
     * @returns ItemShippingPolicyDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsShippingPolicies1(itemId, itemShippingPolicyId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/ShippingPolicies/{itemShippingPolicyId}',
            path: {
                'itemId': itemId,
                'itemShippingPolicyId': itemShippingPolicyId,
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
     * @param itemId
     * @param itemShippingPolicyId
     * @param xApiVersion
     * @returns ItemShippingPolicyDtoEnvelope OK
     * @throws ApiError
     */
    static postApiV2CatalogServiceItemsShippingPolicies(itemId, itemShippingPolicyId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/Items/{itemId}/ShippingPolicies/{itemShippingPolicyId}',
            path: {
                'itemId': itemId,
                'itemShippingPolicyId': itemShippingPolicyId,
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
     * @param itemId
     * @param itemShippingPolicyId
     * @param xApiVersion
     * @returns ItemShippingPolicyDtoEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2CatalogServiceItemsShippingPolicies(itemId, itemShippingPolicyId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/Items/{itemId}/ShippingPolicies/{itemShippingPolicyId}',
            path: {
                'itemId': itemId,
                'itemShippingPolicyId': itemShippingPolicyId,
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
     * @param itemId
     * @param xApiVersion
     * @returns ItemWarrantyPolicyDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsWarrantyPolicies(itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/WarrantyPolicies',
            path: {
                'itemId': itemId,
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
     * @param itemId
     * @param itemWarrantyPolicyId
     * @param xApiVersion
     * @returns ItemWarrantyPolicyDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsWarrantyPolicies1(itemId, itemWarrantyPolicyId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/WarrantyPolicies/{itemWarrantyPolicyId}',
            path: {
                'itemId': itemId,
                'itemWarrantyPolicyId': itemWarrantyPolicyId,
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
     * @param itemId
     * @param itemWarrantyPolicyId
     * @param xApiVersion
     * @returns ItemWarrantyPolicyDtoEnvelope OK
     * @throws ApiError
     */
    static postApiV2CatalogServiceItemsWarrantyPolicies(itemId, itemWarrantyPolicyId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/Items/{itemId}/WarrantyPolicies/{itemWarrantyPolicyId}',
            path: {
                'itemId': itemId,
                'itemWarrantyPolicyId': itemWarrantyPolicyId,
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
     * @param itemId
     * @param itemWarrantyPolicyId
     * @param xApiVersion
     * @returns ItemWarrantyPolicyDtoEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2CatalogServiceItemsWarrantyPolicies(itemId, itemWarrantyPolicyId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/Items/{itemId}/WarrantyPolicies/{itemWarrantyPolicyId}',
            path: {
                'itemId': itemId,
                'itemWarrantyPolicyId': itemWarrantyPolicyId,
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
     * @param itemId
     * @param xApiVersion
     * @returns ItemAttributeOptionDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsAttributeOptions(itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/AttributeOptions',
            path: {
                'itemId': itemId,
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
     * @param itemId
     * @param itemAttributeOptionId
     * @param xApiVersion
     * @returns ItemAttributeOptionDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsAttributeOptions1(itemId, itemAttributeOptionId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/AttributeOptions/{itemAttributeOptionId}',
            path: {
                'itemId': itemId,
                'itemAttributeOptionId': itemAttributeOptionId,
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
     * @param itemId
     * @param itemAttributeOptionId
     * @param xApiVersion
     * @returns ItemAttributeOptionDtoEnvelope OK
     * @throws ApiError
     */
    static postApiV2CatalogServiceItemsAttributeOptions(itemId, itemAttributeOptionId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/Items/{itemId}/AttributeOptions/{itemAttributeOptionId}',
            path: {
                'itemId': itemId,
                'itemAttributeOptionId': itemAttributeOptionId,
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
     * @param itemId
     * @param itemAttributeOptionId
     * @param xApiVersion
     * @returns ItemAttributeOptionDtoEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2CatalogServiceItemsAttributeOptions(itemId, itemAttributeOptionId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/Items/{itemId}/AttributeOptions/{itemAttributeOptionId}',
            path: {
                'itemId': itemId,
                'itemAttributeOptionId': itemAttributeOptionId,
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
     * @param itemId
     * @param xApiVersion
     * @returns ItemGoogleCategoryDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsGoogleCategories(itemId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/GoogleCategories',
            path: {
                'itemId': itemId,
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
     * @param itemId
     * @param itemGoogleCategoryId
     * @param xApiVersion
     * @returns ItemGoogleCategoryDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2CatalogServiceItemsGoogleCategories1(itemId, itemGoogleCategoryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/CatalogService/Items/{itemId}/GoogleCategories/{itemGoogleCategoryId}',
            path: {
                'itemId': itemId,
                'itemGoogleCategoryId': itemGoogleCategoryId,
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
     * @param itemId
     * @param itemGoogleCategoryId
     * @param xApiVersion
     * @returns ItemGoogleCategoryDtoEnvelope OK
     * @throws ApiError
     */
    static postApiV2CatalogServiceItemsGoogleCategories(itemId, itemGoogleCategoryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/CatalogService/Items/{itemId}/GoogleCategories/{itemGoogleCategoryId}',
            path: {
                'itemId': itemId,
                'itemGoogleCategoryId': itemGoogleCategoryId,
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
     * @param itemId
     * @param itemGoogleCategoryId
     * @param xApiVersion
     * @returns ItemGoogleCategoryDtoEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2CatalogServiceItemsGoogleCategories(itemId, itemGoogleCategoryId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/CatalogService/Items/{itemId}/GoogleCategories/{itemGoogleCategoryId}',
            path: {
                'itemId': itemId,
                'itemGoogleCategoryId': itemGoogleCategoryId,
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
}
exports.ItemsService = ItemsService;
