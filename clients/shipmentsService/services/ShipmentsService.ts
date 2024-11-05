/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShipmentDtoListEnvelope } from '../models/ShipmentDtoListEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ShipmentsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns ShipmentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2ShipmentsServiceShipments(
        tenantId: string,
        xApiVersion?: string,
    ): CancelablePromise<ShipmentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/ShipmentsService/Shipments',
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
}
