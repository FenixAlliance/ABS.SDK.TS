/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CatalogItemCreateDto } from '../models/CatalogItemCreateDto';
import type { CatalogItemDtoEnvelope } from '../models/CatalogItemDtoEnvelope';
import type { CatalogItemDtoListEnvelope } from '../models/CatalogItemDtoListEnvelope';
import type { CatalogItemUpdateDto } from '../models/CatalogItemUpdateDto';
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { ItemAttachmentDtoEnvelope } from '../models/ItemAttachmentDtoEnvelope';
import type { ItemAttachmentDtoListEnvelope } from '../models/ItemAttachmentDtoListEnvelope';
import type { ItemAttributeOptionDtoEnvelope } from '../models/ItemAttributeOptionDtoEnvelope';
import type { ItemAttributeOptionDtoListEnvelope } from '../models/ItemAttributeOptionDtoListEnvelope';
import type { ItemBrandDtoEnvelope } from '../models/ItemBrandDtoEnvelope';
import type { ItemBrandDtoListEnvelope } from '../models/ItemBrandDtoListEnvelope';
import type { ItemCategoryDtoEnvelope } from '../models/ItemCategoryDtoEnvelope';
import type { ItemCategoryDtoListEnvelope } from '../models/ItemCategoryDtoListEnvelope';
import type { ItemGoogleCategoryDtoEnvelope } from '../models/ItemGoogleCategoryDtoEnvelope';
import type { ItemGoogleCategoryDtoListEnvelope } from '../models/ItemGoogleCategoryDtoListEnvelope';
import type { ItemImageDtoEnvelope } from '../models/ItemImageDtoEnvelope';
import type { ItemImageDtoListEnvelope } from '../models/ItemImageDtoListEnvelope';
import type { ItemQuestionDtoEnvelope } from '../models/ItemQuestionDtoEnvelope';
import type { ItemQuestionDtoListEnvelope } from '../models/ItemQuestionDtoListEnvelope';
import type { ItemQuestionRecordCreateDto } from '../models/ItemQuestionRecordCreateDto';
import type { ItemRefundPolicyDtoEnvelope } from '../models/ItemRefundPolicyDtoEnvelope';
import type { ItemRefundPolicyDtoListEnvelope } from '../models/ItemRefundPolicyDtoListEnvelope';
import type { ItemReturnPolicyDtoEnvelope } from '../models/ItemReturnPolicyDtoEnvelope';
import type { ItemReturnPolicyDtoListEnvelope } from '../models/ItemReturnPolicyDtoListEnvelope';
import type { ItemReviewDtoEnvelope } from '../models/ItemReviewDtoEnvelope';
import type { ItemReviewDtoListEnvelope } from '../models/ItemReviewDtoListEnvelope';
import type { ItemReviewRecordCreateDto } from '../models/ItemReviewRecordCreateDto';
import type { ItemShippingPolicyDtoEnvelope } from '../models/ItemShippingPolicyDtoEnvelope';
import type { ItemShippingPolicyDtoListEnvelope } from '../models/ItemShippingPolicyDtoListEnvelope';
import type { ItemTagDtoEnvelope } from '../models/ItemTagDtoEnvelope';
import type { ItemTagDtoListEnvelope } from '../models/ItemTagDtoListEnvelope';
import type { ItemTaxPolicyDtoEnvelope } from '../models/ItemTaxPolicyDtoEnvelope';
import type { ItemTaxPolicyDtoListEnvelope } from '../models/ItemTaxPolicyDtoListEnvelope';
import type { ItemTypeDtoEnvelope } from '../models/ItemTypeDtoEnvelope';
import type { ItemTypeDtoListEnvelope } from '../models/ItemTypeDtoListEnvelope';
import type { ItemWarrantyPolicyDtoEnvelope } from '../models/ItemWarrantyPolicyDtoEnvelope';
import type { ItemWarrantyPolicyDtoListEnvelope } from '../models/ItemWarrantyPolicyDtoListEnvelope';
import type { MoneyEnvelope } from '../models/MoneyEnvelope';
import type { PricingRuleDtoEnvelope } from '../models/PricingRuleDtoEnvelope';
import type { PricingRuleDtoListEnvelope } from '../models/PricingRuleDtoListEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ItemsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns CatalogItemDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2CatalogServiceItems(
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<CatalogItemDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2CatalogServiceItems(
        tenantId: string,
        xApiVersion?: string,
        requestBody?: CatalogItemCreateDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsMaxPrice(
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<MoneyEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsMinPrice(
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<MoneyEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsCount(
        tenantId?: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getStockItemByIdAsync(
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<CatalogItemDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static updateStockItemAsync(
        tenantId: string,
        itemId: string,
        xApiVersion?: string,
        requestBody?: CatalogItemUpdateDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
    public static deleteApiV2CatalogServiceItems(
        tenantId: string,
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsExtended(
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<CatalogItemDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsTags(
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemTagDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsTagsCount(
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsTags1(
        itemId: string,
        itemTagId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemTagDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2CatalogServiceItemsTags(
        itemId: string,
        itemTagId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemTagDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2CatalogServiceItemsTags(
        itemId: string,
        itemTagId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemTagDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsTypes(
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemTypeDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsTypes1(
        itemId: string,
        itemTypeId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemTypeDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2CatalogServiceItemsTypes(
        itemId: string,
        itemTypeId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemTypeDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2CatalogServiceItemsTypes(
        itemId: string,
        itemTypeId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemTypeDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsImagesPrimary(
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2CatalogServiceItemsImagesPrimary(
        itemId: string,
        tenantId?: string,
        xApiVersion?: string,
        formData?: {
            data?: Blob;
        },
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsImages(
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemImageDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsImages1(
        itemId: string,
        itemImageId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemImageDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2CatalogServiceItemsImages(
        itemId: string,
        itemImageId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemImageDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2CatalogServiceItemsImages(
        itemId: string,
        itemImageId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemImageDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsBrands(
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemBrandDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsBrands1(
        itemId: string,
        itemBrandId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemBrandDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2CatalogServiceItemsBrands(
        itemId: string,
        itemBrandId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemBrandDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2CatalogServiceItemsBrands(
        itemId: string,
        itemBrandId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemBrandDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsReviews(
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemReviewDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2CatalogServiceItemsReviews(
        itemId: string,
        xApiVersion?: string,
        requestBody?: ItemReviewRecordCreateDto,
    ): CancelablePromise<ItemReviewDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsReviews1(
        itemId: string,
        itemReviewId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemReviewDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2CatalogServiceItemsReviews(
        itemId: string,
        itemReviewId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemReviewDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsQuestions(
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemQuestionDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2CatalogServiceItemsQuestions(
        itemId: string,
        xApiVersion?: string,
        requestBody?: ItemQuestionRecordCreateDto,
    ): CancelablePromise<ItemQuestionDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsQuestions1(
        itemId: string,
        itemQuestionId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemQuestionDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2CatalogServiceItemsQuestions(
        itemId: string,
        itemQuestionId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemQuestionDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsCategories(
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemCategoryDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsCategories1(
        itemId: string,
        itemCategoryId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemCategoryDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2CatalogServiceItemsCategories(
        itemId: string,
        itemCategoryId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemCategoryDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2CatalogServiceItemsCategories(
        itemId: string,
        itemCategoryId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemCategoryDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsAttachments(
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemAttachmentDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsAttachments1(
        itemId: string,
        itemAttachmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemAttachmentDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2CatalogServiceItemsAttachments(
        itemId: string,
        itemAttachmentId: string,
        notes?: string,
        title?: string,
        author?: string,
        isFolder?: boolean,
        fileName?: string,
        abstract?: string,
        keyWords?: string,
        validResponse?: boolean,
        parentFileUploadId?: string,
        filePath?: string,
        iD?: string,
        timestamp?: string,
        xApiVersion?: string,
        requestBody?: {
            file?: Blob;
        },
    ): CancelablePromise<ItemAttachmentDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2CatalogServiceItemsAttachments(
        itemId: string,
        itemAttachmentId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemAttachmentDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsTaxPolicies(
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemTaxPolicyDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsTaxPolicies1(
        itemId: string,
        itemTaxPolicyId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemTaxPolicyDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2CatalogServiceItemsTaxPolicies(
        itemId: string,
        itemTaxPolicyId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemTaxPolicyDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2CatalogServiceItemsTaxPolicies(
        itemId: string,
        itemTaxPolicyId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemTaxPolicyDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsPriceRules(
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<PricingRuleDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsPriceRules1(
        itemId: string,
        itemPriceRuleId: string,
        xApiVersion?: string,
    ): CancelablePromise<PricingRuleDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2CatalogServiceItemsPriceRules(
        itemId: string,
        itemPriceRuleId: string,
        xApiVersion?: string,
    ): CancelablePromise<PricingRuleDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2CatalogServiceItemsPriceRules(
        itemId: string,
        itemPriceRuleId: string,
        xApiVersion?: string,
    ): CancelablePromise<PricingRuleDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsReturnPolicies(
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemReturnPolicyDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsReturnPolicies1(
        itemId: string,
        itemReturnPolicyId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemReturnPolicyDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2CatalogServiceItemsReturnPolicies(
        itemId: string,
        itemReturnPolicyId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemReturnPolicyDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2CatalogServiceItemsReturnPolicies(
        itemId: string,
        itemReturnPolicyId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemReturnPolicyDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsRefundPolicies(
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemRefundPolicyDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsRefundPolicies1(
        itemId: string,
        itemRefundPolicyId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemRefundPolicyDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2CatalogServiceItemsRefundPolicies(
        itemId: string,
        itemRefundPolicyId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemRefundPolicyDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2CatalogServiceItemsRefundPolicies(
        itemId: string,
        itemRefundPolicyId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemRefundPolicyDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsShippingPolicies(
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemShippingPolicyDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsShippingPolicies1(
        itemId: string,
        itemShippingPolicyId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemShippingPolicyDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2CatalogServiceItemsShippingPolicies(
        itemId: string,
        itemShippingPolicyId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemShippingPolicyDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2CatalogServiceItemsShippingPolicies(
        itemId: string,
        itemShippingPolicyId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemShippingPolicyDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsWarrantyPolicies(
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemWarrantyPolicyDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsWarrantyPolicies1(
        itemId: string,
        itemWarrantyPolicyId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemWarrantyPolicyDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2CatalogServiceItemsWarrantyPolicies(
        itemId: string,
        itemWarrantyPolicyId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemWarrantyPolicyDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2CatalogServiceItemsWarrantyPolicies(
        itemId: string,
        itemWarrantyPolicyId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemWarrantyPolicyDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsAttributeOptions(
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemAttributeOptionDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsAttributeOptions1(
        itemId: string,
        itemAttributeOptionId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemAttributeOptionDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2CatalogServiceItemsAttributeOptions(
        itemId: string,
        itemAttributeOptionId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemAttributeOptionDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2CatalogServiceItemsAttributeOptions(
        itemId: string,
        itemAttributeOptionId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemAttributeOptionDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsGoogleCategories(
        itemId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemGoogleCategoryDtoListEnvelope> {
        return __request(OpenAPI, {
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
    public static getApiV2CatalogServiceItemsGoogleCategories1(
        itemId: string,
        itemGoogleCategoryId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemGoogleCategoryDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static postApiV2CatalogServiceItemsGoogleCategories(
        itemId: string,
        itemGoogleCategoryId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemGoogleCategoryDtoEnvelope> {
        return __request(OpenAPI, {
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
    public static deleteApiV2CatalogServiceItemsGoogleCategories(
        itemId: string,
        itemGoogleCategoryId: string,
        xApiVersion?: string,
    ): CancelablePromise<ItemGoogleCategoryDtoEnvelope> {
        return __request(OpenAPI, {
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
